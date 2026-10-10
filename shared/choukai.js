/* Qategori Nihongo - Tab Choukai (聴解) bersama untuk semua level.
   Pemakaian: NihongoChoukai.mount(elemen, {data: window.N3_CHOUKAI, level: "N3"})
   Fitur: kecepatan 0.7x/0.9x/1x, teks (kanji + romaji + terjemahan, tersembunyi secara bawaan),
   ketuk kanji di teks, mode shadowing per baris, tombol "Tampilkan jawaban" terpisah, cek suara.
   Audio = TTS browser (NihongoTTS). Data dialog: {speaker, gender L/P, jp, id, romaji}. */
(function () {
  "use strict";
  if (window.NihongoChoukai) return;
  var K = window.NihongoKanji, T = window.NihongoTTS;
  var LABEL = { kadai: "課題理解", point: "ポイント理解", sokuji: "即時応答" };

  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function jp(s) { return K ? K.plain(s) : esc(s); }

  var CSS = '' +
    '.ck-wrap{color:inherit;line-height:1.6}.ck-wrap *{box-sizing:border-box}' +
    '.ck-btn,.ck-chip{font:inherit;font-size:.88rem;font-weight:600;color:inherit;background:rgba(127,127,127,.08);border:1.5px solid rgba(127,127,127,.38);border-radius:10px;padding:8px 14px;cursor:pointer}' +
    '.ck-chip{border-radius:99px;padding:6px 14px;font-size:.84rem}' +
    '.ck-btn.on,.ck-chip.on{background:#2f7dd8;border-color:#2f7dd8;color:#fff}' +
    '.ck-btn.pri{background:#2f7dd8;border-color:#2f7dd8;color:#fff}' +
    '.ck-btn:disabled{opacity:.5;cursor:default}' +
    '.ck-row{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin:10px 0}' +
    '.ck-lab{font-size:.78rem;opacity:.7;font-weight:700}' +
    '.ck-item{border:1.5px solid rgba(127,127,127,.3);border-radius:12px;padding:14px 16px;margin-bottom:10px;cursor:pointer;background:rgba(127,127,127,.05)}' +
    '.ck-item:hover{background:rgba(47,125,216,.08)}' +
    '.ck-tipe{font-size:.72rem;font-weight:700;color:#2f7dd8;background:rgba(47,125,216,.12);padding:2px 10px;border-radius:99px;display:inline-block;margin-bottom:6px}' +
    '.ck-h{font-size:1.1rem;font-weight:800;margin:8px 0}' +
    '.ck-tx{margin-top:10px;background:rgba(127,127,127,.08);border-radius:10px;padding:12px 14px}' +
    '.ck-line{padding:7px 8px;border-radius:8px;margin-bottom:4px;font-size:1.02rem;line-height:1.9}' +
    '.ck-line.now{background:rgba(47,125,216,.18)}' +
    '.ck-line b{color:#2f7dd8}' +
    '.ck-ro{display:block;font-style:italic;opacity:.65;font-size:.82rem;line-height:1.5}' +
    '.ck-idn{display:block;opacity:.85;font-size:.86rem;line-height:1.5}' +
    '.ck-hint{font-size:.8rem;opacity:.7;margin:6px 0}' +
    '.ck-sh{margin-top:10px;border:1.5px dashed #2f7dd8;border-radius:12px;padding:12px 14px;background:rgba(47,125,216,.06)}' +
    '.ck-sh .ck-line{font-size:1.15rem}' +
    '.ck-q{margin-top:14px;font-weight:700;font-size:1.02rem;line-height:1.9}' +
    '.ck-opt{display:block;width:100%;text-align:left;font:inherit;color:inherit;background:rgba(127,127,127,.06);border:1.5px solid rgba(127,127,127,.38);border-radius:10px;padding:10px 14px;margin:7px 0;cursor:pointer;line-height:1.8}' +
    '.ck-opt:hover:not(:disabled){border-color:#2f7dd8}' +
    '.ck-opt:disabled{cursor:default}' +
    '.ck-opt.good{border-color:#2e9e5b;background:rgba(46,158,91,.16)}' +
    '.ck-opt.bad{border-color:#d9534f;background:rgba(217,83,79,.14)}' +
    '.ck-exp{margin-top:8px;padding:10px 12px;border-radius:10px;background:rgba(127,127,127,.1);font-size:.9rem}' +
    '.ck-diag{margin-top:8px;font-size:.84rem;padding:10px 12px;border-radius:10px;background:rgba(127,127,127,.08)}' +
    '.ck-vrow{margin-top:4px}';

  function css() {
    if (document.getElementById("ck-css")) return;
    var s = document.createElement("style"); s.id = "ck-css"; s.textContent = CSS; document.head.appendChild(s);
  }

  function mount(el, cfg) {
    css();
    var data = cfg.data || [];
    var st = { cur: -1, speed: 0.9, tx: false, shadow: false, sh: 0, playing: false, ans: null, shown: false, h: null };
    el.classList.add("ck-wrap");
    if (K) K.attach(el);

    function stop() { if (st.h) { st.h.stop(); st.h = null; } if (T) T.cancel(); st.playing = false; }

    function list() {
      var h = '<div class="ck-row"><button type="button" class="ck-btn" data-ck="diag">🔍 Cek suara Jepang di perangkat ini</button></div><div id="ckDiag"></div>';
      data.forEach(function (it, i) {
        h += '<div class="ck-item" data-ck="open" data-i="' + i + '"><span class="ck-tipe">' + (LABEL[it.tipe] || it.tipe) + '</span><br><b>' + esc(it.judul) + '</b></div>';
      });
      el.innerHTML = h;
    }

    function lineHtml(l, i, full) {
      var ic = l.gender === "P" ? "👩" : (l.gender === "L" ? "👨" : "");
      return '<div class="ck-line" data-li="' + i + '"><b>' + ic + " " + esc(l.speaker) + "：</b>" + jp(l.jp) +
        (full ? '<span class="ck-ro">' + esc(l.romaji || "") + '</span><span class="ck-idn">' + esc(l.id || "") + "</span>" : "") + "</div>";
    }

    function ctl() {
      var it = data[st.cur];
      var h = '<div class="ck-row">';
      if (!st.shadow) h += '<button type="button" class="ck-btn pri" data-ck="play" id="ckPlay">' + (st.playing ? "⏹ Berhenti" : "🔊 Putar percakapan") + "</button>";
      h += '<span class="ck-lab">Kecepatan</span>';
      [0.7, 0.9, 1].forEach(function (s) { h += '<button type="button" class="ck-chip' + (st.speed === s ? " on" : "") + '" data-ck="speed" data-s="' + s + '">' + s + "x</button>"; });
      h += "</div>";
      h += '<div class="ck-row"><button type="button" class="ck-btn' + (st.tx ? " on" : "") + '" data-ck="tx">Teks: ' + (st.tx ? "tampil" : "sembunyi") + '</button>' +
        '<button type="button" class="ck-btn' + (st.shadow ? " on" : "") + '" data-ck="shadow">Shadowing: ' + (st.shadow ? "ON" : "OFF") + "</button></div>";
      return h;
    }

    function item() {
      var it = data[st.cur];
      var h = '<button type="button" class="ck-btn" data-ck="back">← Kembali ke daftar</button><div class="ck-h">' + esc(it.judul) + "</div>" + ctl();
      if (st.shadow) {
        var n = it.dialog.length, l = it.dialog[st.sh];
        h += '<div class="ck-sh"><div class="ck-lab">Baris ' + (st.sh + 1) + " / " + n + ' · dengarkan, lalu ucapkan ulang</div>';
        if (st.tx) h += '<div class="ck-tx">' + lineHtml(l, st.sh, true) + "</div>";
        else h += '<div class="ck-hint">' + (l.gender === "P" ? "👩" : "👨") + " " + esc(l.speaker) + ' — teks disembunyikan. Aktifkan "Teks" bila ingin melihatnya.</div>';
        h += '<div class="ck-row"><button type="button" class="ck-btn pri" data-ck="shplay">▶ Dengar baris ini</button>' +
          '<button type="button" class="ck-btn" data-ck="shprev"' + (st.sh === 0 ? " disabled" : "") + '>◀ Sebelumnya</button>' +
          '<button type="button" class="ck-btn" data-ck="shnext"' + (st.sh >= n - 1 ? " disabled" : "") + ">Berikutnya ▶</button></div></div>";
      } else if (st.tx) {
        h += '<div class="ck-tx">' + it.dialog.map(function (l, i) { return lineHtml(l, i, true); }).join("") + '<div class="ck-hint">Ketuk kanji untuk arti, bacaan, dan bushu.</div></div>';
      }
      h += '<div class="ck-q">' + jp(it.pertanyaan) + "</div><div id=\"ckOpts\"></div><div id=\"ckExp\"></div>";
      el.innerHTML = h;
      paint();
    }

    function paint() {
      var it = data[st.cur], o = el.querySelector("#ckOpts"), e = el.querySelector("#ckExp");
      if (!o) return;
      var h = "";
      it.options.forEach(function (op, i) {
        var c = "ck-opt";
        if (st.ans != null || st.shown) { if (i === it.correct) c += " good"; else if (i === st.ans) c += " bad"; }
        h += '<button type="button" class="' + c + '" data-ck="ans" data-i="' + i + '"' + (st.ans != null || st.shown ? " disabled" : "") + ">" + (i + 1) + ". " + esc(op) + "</button>";
      });
      if (st.ans == null && !st.shown) h += '<div class="ck-row"><button type="button" class="ck-btn" data-ck="show">Tampilkan jawaban</button></div>';
      o.innerHTML = h;
      e.innerHTML = (st.ans != null || st.shown)
        ? '<div class="ck-exp"><b>' + (st.ans == null ? "Jawaban: " + (it.correct + 1) + ". " : (st.ans === it.correct ? "✔ Benar! " : "✘ Kurang tepat. ")) + "</b>" + esc(it.penjelasan) + "</div>" : "";
    }

    function mark(i) {
      var ls = el.querySelectorAll(".ck-line");
      ls.forEach(function (n) { n.classList.toggle("now", i != null && +n.getAttribute("data-li") === i); });
    }
    function setPlayBtn() { var b = el.querySelector("#ckPlay"); if (b) b.textContent = st.playing ? "⏹ Berhenti" : "🔊 Putar percakapan"; }

    function play() {
      if (!T || !T.supported()) { alert("Browser ini tidak mendukung suara (Web Speech API). Aktifkan Teks untuk membaca percakapan."); return; }
      if (st.playing) { stop(); mark(null); setPlayBtn(); return; }
      var it = data[st.cur];
      st.playing = true; setPlayBtn();
      st.h = T.speakLines(it.dialog, st.speed, { onLine: function (i) { mark(i); }, onDone: function () { st.playing = false; st.h = null; mark(null); setPlayBtn(); } });
    }

    function shplay() {
      if (!T || !T.supported()) { alert("Browser ini tidak mendukung suara (Web Speech API)."); return; }
      stop();
      var l = data[st.cur].dialog[st.sh];
      T.speakLine(l, st.speed, function () {});
    }

    function diag() {
      var box = el.querySelector("#ckDiag");
      box.innerHTML = '<div class="ck-diag">Mencari suara...</div>';
      if (!T) return;
      T.check(function (r) {
        if (!r.supported) { box.innerHTML = '<div class="ck-diag">Browser ini tidak mendukung Web Speech API.</div>'; return; }
        if (!r.ja.length) { box.innerHTML = '<div class="ck-diag">⚠️ Tidak ada suara berbahasa Jepang di perangkat ini. Audio tetap dicoba dengan suara bawaan, laki-laki/perempuan hanya dibedakan lewat nada. Tambahkan suara Jepang di pengaturan Text-to-Speech perangkatmu.</div>'; return; }
        var h = "<div class=\"ck-diag\"><b>" + r.ja.length + " suara Jepang ditemukan:</b>";
        r.ja.forEach(function (v) {
          var lab = "belum dipetakan";
          if (r.profiles.L.voice === v && r.profiles.P.voice === v) lab = "dipakai untuk 👨 dan 👩 (sama)";
          else if (r.profiles.L.voice === v) lab = "dipakai untuk 👨 laki-laki";
          else if (r.profiles.P.voice === v) lab = "dipakai untuk 👩 perempuan";
          h += '<div class="ck-vrow">' + esc(v.name) + " (" + esc(v.lang) + ") — " + lab + "</div>";
        });
        if (r.profiles.L.voice === r.profiles.P.voice) h += '<div class="ck-vrow">Hanya 1 suara Jepang, jadi laki-laki/perempuan dibedakan lewat nada.</div>';
        box.innerHTML = h + "</div>";
      });
    }

    el.addEventListener("click", function (e) {
      var t = e.target.closest ? e.target.closest("[data-ck]") : null;
      if (!t || !el.contains(t)) return;
      var a = t.getAttribute("data-ck");
      if (a === "open") { stop(); st.cur = +t.getAttribute("data-i"); st.ans = null; st.shown = false; st.sh = 0; item(); }
      else if (a === "back") { stop(); st.cur = -1; list(); }
      else if (a === "diag") diag();
      else if (a === "play") play();
      else if (a === "speed") { st.speed = +t.getAttribute("data-s"); var y = window.pageYOffset; item(); window.scrollTo(0, y); }
      else if (a === "tx") { st.tx = !st.tx; var y2 = window.pageYOffset; item(); window.scrollTo(0, y2); }
      else if (a === "shadow") { stop(); st.shadow = !st.shadow; st.sh = 0; item(); }
      else if (a === "shplay") shplay();
      else if (a === "shnext") { stop(); st.sh = Math.min(st.sh + 1, data[st.cur].dialog.length - 1); item(); shplay(); }
      else if (a === "shprev") { stop(); st.sh = Math.max(st.sh - 1, 0); item(); shplay(); }
      else if (a === "ans") { if (st.ans == null && !st.shown) { st.ans = +t.getAttribute("data-i"); paint(); } }
      else if (a === "show") { st.shown = true; paint(); }
    });

    list();
    return { stop: stop };
  }

  window.NihongoChoukai = { mount: mount };
})();
