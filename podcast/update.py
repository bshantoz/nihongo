#!/usr/bin/env python3
"""Membuat podcast/podcast.json dari playlist YouTube (RSS resmi, tanpa API key).

Dijalankan oleh GitHub Actions (.github/workflows/podcast.yml) tiap beberapa jam.
Catatan: RSS YouTube hanya memuat sampai 15 video terbaru per playlist.
Kalau gagal mengambil satu playlist, daftar lama playlist itu dipertahankan."""
import json, os, sys, urllib.request, xml.etree.ElementTree as ET

HERE = os.path.dirname(os.path.abspath(__file__))
NS = {'a': 'http://www.w3.org/2005/Atom', 'yt': 'http://www.youtube.com/xml/schemas/2015'}


def fetch(pl):
    url = 'https://www.youtube.com/feeds/videos.xml?playlist_id=' + pl
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (qategori-podcast)'})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read()


def parse(xml_bytes):
    root = ET.fromstring(xml_bytes)
    eps = []
    for e in root.findall('a:entry', NS):
        vid = e.findtext('yt:videoId', default='', namespaces=NS)
        title = (e.findtext('a:title', default='', namespaces=NS) or '').strip()
        pub = e.findtext('a:published', default='', namespaces=NS) or ''
        if vid and title:
            eps.append({'id': vid, 'title': title, 'pub': pub})
    return eps


def main():
    cfg = json.load(open(os.path.join(HERE, 'playlists.json'), encoding='utf-8'))
    out_path = os.path.join(HERE, 'podcast.json')
    old = {}
    try:
        for p in json.load(open(out_path, encoding='utf-8')).get('playlists', []):
            old[p.get('playlist')] = p.get('episodes', [])
    except Exception:
        pass
    result = []
    for p in cfg.get('playlists', []):
        pid = p['playlist']
        try:
            eps = parse(fetch(pid))
            eps.sort(key=lambda x: x['pub'], reverse=(p.get('urutan', 'lama') == 'terbaru'))
            eps = [{'id': x['id'], 'title': x['title']} for x in eps]
            print('OK', pid, len(eps), 'episode')
        except Exception as ex:
            print('GAGAL', pid, ex, '- pakai daftar lama', file=sys.stderr)
            eps = old.get(pid, [])
        result.append({'title': p.get('title', pid), 'playlist': pid, 'episodes': eps})
    data = {'playlists': result}
    new = json.dumps(data, ensure_ascii=False, indent=2) + '\n'
    try:
        if open(out_path, encoding='utf-8').read() == new:
            print('Tidak ada perubahan'); return
    except Exception:
        pass
    open(out_path, 'w', encoding='utf-8').write(new)
    print('podcast.json diperbarui')


if __name__ == '__main__':
    main()
