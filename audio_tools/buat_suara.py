#!/usr/bin/env python3
"""
buat_suara.py - membuat file mp3 untuk semua game bahasa Jepang di qategori.

Cara pakai (di komputer):
  1. pip install edge-tts
  2. Taruh folder ini (audio_tools) sejajar dengan folder game/, yaitu di dalam repo nihongo:
        nihongo/
          game/
            drama/ep01.json, ep02.json, ...
            audio/            <- dibuat otomatis
          audio_tools/
            buat_suara.py
            texts_games.json
  3. Dari dalam folder nihongo jalankan:   python audio_tools/buat_suara.py
  4. Commit & push folder game/audio/ ke GitHub.

Skrip aman dijalankan berulang: file yang sudah ada dilewati, jadi setelah
menambah episode baru cukup jalankan lagi.
"""
import asyncio, json, os, re, sys, glob

try:
    import edge_tts
except ImportError:
    sys.exit("Pasang dulu:  pip install edge-tts")

# --- Pengaturan suara ---------------------------------------------------
VOICES = {
    # kode : (suara, kecepatan, nada)
    'n': ('ja-JP-NanamiNeural', '-10%', '+0Hz'),    # kosakata / game lain
    'c': ('ja-JP-KeitaNeural',  '-10%', '+0Hz'),    # kasir / petugas (laki-laki)
    'm': ('ja-JP-NanamiNeural', '-10%', '+35Hz'),   # Mochi (nada lebih tinggi)
}
PARALEL = 4          # jumlah permintaan sekaligus
# -------------------------------------------------------------------------

ROOT = os.getcwd()
GAME = os.path.join(ROOT, 'game')
OUT = os.path.join(GAME, 'audio')
HERE = os.path.dirname(os.path.abspath(__file__))


def h32(s, seed):
    h = seed
    for b in s.encode('utf-8'):
        h ^= b
        h = (h * 16777619) & 0xFFFFFFFF
    return h


def key(who, text):          # HARUS sama dengan jaKey() di JavaScript game
    s = who + '|' + text
    return '%08x%08x' % (h32(s, 0x811c9dc5), h32(s, 0x9747b28c))


def plain(s):                # {漢字|かんじ} -> かんじ
    return re.sub(r'\{([^|}]+)\|([^}]+)\}', r'\2', s).replace('〜', '')


def kumpulkan():
    items = {}
    # kosakata game lain (teka-teki silang, pasangan kanji, tebak gambar)
    for t in json.load(open(os.path.join(HERE, 'texts_games.json'), encoding='utf-8')):
        items[key('n', t)] = ('n', t)
    # drama: semua episode di game/drama/
    for f in sorted(glob.glob(os.path.join(GAME, 'drama', 'ep*.json'))):
        ep = json.load(open(f, encoding='utf-8'))
        for L in ep['lines']:
            t = plain(L['j'])
            items[key(L['w'], t)] = (L['w'], t)
            for v in L.get('v', []):
                t = plain(v[0])
                if t:
                    items[key('n', t)] = ('n', t)
    return items


async def buat(sem, k, who, text, gagal):
    voice, rate, pitch = VOICES[who]
    path = os.path.join(OUT, k + '.mp3')
    async with sem:
        for percobaan in range(4):
            try:
                await edge_tts.Communicate(text, voice, rate=rate, pitch=pitch).save(path)
                if os.path.getsize(path) > 500:
                    return
            except Exception as e:
                err = e
            await asyncio.sleep(1.5 * (percobaan + 1))
        gagal.append((text, str(err)))
        if os.path.exists(path):
            os.remove(path)


async def main():
    if not os.path.isdir(GAME):
        sys.exit("Folder 'game' tidak ditemukan. Jalankan dari dalam folder nihongo.")
    os.makedirs(OUT, exist_ok=True)
    items = kumpulkan()
    todo = [(k, w, t) for k, (w, t) in items.items() if not os.path.exists(os.path.join(OUT, k + '.mp3'))]
    print('Total teks: %d | sudah ada: %d | akan dibuat: %d' % (len(items), len(items) - len(todo), len(todo)))
    sem = asyncio.Semaphore(PARALEL)
    gagal = []
    tugas = [asyncio.create_task(buat(sem, k, w, t, gagal)) for k, w, t in todo]
    selesai = 0
    for x in asyncio.as_completed(tugas):
        await x
        selesai += 1
        if selesai % 25 == 0 or selesai == len(tugas):
            print('  %d/%d' % (selesai, len(tugas)))
    ada = sorted(k for k in items if os.path.exists(os.path.join(OUT, k + '.mp3')))
    json.dump(ada, open(os.path.join(OUT, 'manifest.json'), 'w'))
    print('Selesai. manifest.json berisi %d file.' % len(ada))
    if gagal:
        print('Gagal (%d), jalankan lagi untuk mencoba ulang:' % len(gagal))
        for t, e in gagal[:10]:
            print('  ', t, '-', e)


if __name__ == '__main__':
    asyncio.run(main())
