/* Qategori Nihongo - Popup kanji bersama (Reading, Choukai, Mock Test).
   Ketuk kanji -> arti, bacaan, susunan, bushu. Komponen susunan bisa diketuk (kanji atau bushu),
   dan ada tautan "Buka di Materi bushu".
   Data kanji: kanji-data.js (window.KBQ_DATA) dari GitHub Pages, dimuat saat pertama kali dibutuhkan.
   Format teks berfurigana: {字幕|じまく}を{外|はず}して  (kata dibungkus kurung kurawal, bacaan setelah |). */
(function () {
  "use strict";
  if (window.NihongoKanji) return;

  var DATA_BASE = window.NIHONGO_KANJI_BASE || "https://bshantoz.github.io/nihongo/kanji/";
  var BUSHU_URL = window.NIHONGO_BUSHU_URL || "https://www.qategori.com/p/materi-dan-kuis-kanji-metode-bushu.html";
  var KANJI_RE = /[㐀-䶿一-鿿]/;
  var POSL = { hen: "kiri (hen)", tsukuri: "kanan (tsukuri)", kanmuri: "atas (kanmuri)", ashi: "bawah (ashi)",
               tare: "menggantung dari kiri atas (tare)", nyou: "membungkus dari kiri bawah (nyou)", kamae: "mengurung bagian lain (kamae)" };

  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }

  // ---------- pembungkus teks ----------
  function plain(text) {
    var out = "";
    Array.from(String(text)).forEach(function (ch) {
      out += KANJI_RE.test(ch) ? '<span class="nk" data-k="' + ch + '">' + ch + "</span>" : esc(ch);
    });
    return out;
  }
  function ruby(markup) {
    var s = String(markup), re = /\{([^|}]+)\|([^}]+)\}/g, out = "", last = 0, m;
    while ((m = re.exec(s))) {
      out += plain(s.slice(last, m.index));
      out += "<ruby>" + plain(m[1]) + "<rt>" + esc(m[2]) + "</rt></ruby>";
      last = m.index + m[0].length;
    }
    return out + plain(s.slice(last));
  }
  // Per kata: {字幕|じまく} -> satu bagian yang bisa diketuk (arti kata + susunan bushu tiap kanji)
  var GLOSS = {};
  function setGloss(g) { for (var k in g) GLOSS[k] = g[k]; }
  function rubyW(markup) {
    var s = String(markup), re = /\{([^|}]+)\|([^}]+)\}/g, out = "", last = 0, m;
    while ((m = re.exec(s))) {
      out += esc(s.slice(last, m.index));
      var has = KANJI_RE.test(m[1]);
      var r = "<ruby>" + esc(m[1]) + "<rt>" + esc(m[2]) + "</rt></ruby>";
      out += has ? '<span class="nw" data-w="' + esc(m[1] + "|" + m[2]) + '">' + r + "</span>" : r;
      last = m.index + m[0].length;
    }
    return out + esc(s.slice(last));
  }
  function strip(markup) { return String(markup).replace(/\{([^|}]+)\|([^}]+)\}/g, "$1"); }

  // ---------- data ----------
  var MAP = null, RADS = null, KROWS = null, BYRAD = null, WAIT = null;
  function build(D) {
    MAP = {}; RADS = D.RADS; KROWS = D.KANJI; BYRAD = {};
    D.KANJI.forEach(function (r) {
      MAP[r[1]] = r;
      if (r[5] >= 0) { var c = D.RADS[r[5]][0]; (BYRAD[c] = BYRAD[c] || []).push(r); }
    });
  }
  function ensure(cb) {
    if (MAP) { cb(true); return; }
    if (window.KBQ_DATA) { build(window.KBQ_DATA); cb(true); return; }
    if (WAIT) { WAIT.push(cb); return; }
    WAIT = [cb];
    var sc = document.createElement("script");
    sc.src = DATA_BASE + "kanji-data.js?v=2";
    sc.onload = function () { var w = WAIT; WAIT = null; var ok = !!window.KBQ_DATA; if (ok) build(window.KBQ_DATA); w.forEach(function (f) { f(ok); }); };
    sc.onerror = function () { var w = WAIT; WAIT = null; w.forEach(function (f) { f(false); }); };
    document.head.appendChild(sc);
  }

  var CSS = '' +
    '.nk{cursor:pointer;border-radius:3px}' +
    '.nk:hover,.nk.nk-on,.nw:hover,.nw.nk-on{background:rgba(47,125,216,.2)}' +
    '.nw{cursor:pointer;border-radius:3px}' +
    '.nk-pop .nk-wrow{margin:6px 0;padding:6px 8px;border-radius:10px;background:rgba(127,127,127,.1)}' +
    '.nk-pop .nk-rd{font-size:.82rem;opacity:.8;margin-bottom:2px}' +
    'ruby rt{font-size:.5em;opacity:.8;font-weight:400}' +
    '.nk-nofuri ruby rt{display:none}' +
    '.nk-pop{position:absolute;z-index:50;width:min(320px,calc(100% - 8px));box-sizing:border-box;padding:12px 14px;border:1.5px solid rgba(127,127,127,.5);border-radius:14px;' +
    'background:var(--themeBg,#fff);background-image:linear-gradient(rgba(127,127,127,.1),rgba(127,127,127,.1));color:inherit;box-shadow:0 8px 28px rgba(0,0,0,.28);font-size:.88rem;line-height:1.5;text-align:left;font-style:normal}' +
    '.nk-pop .nk-hd{display:flex;gap:12px;align-items:center;margin-bottom:6px}' +
    '.nk-pop .nk-big{font-size:2.6rem;line-height:1.1;min-width:2.8rem;text-align:center;font-family:"Noto Sans JP","Hiragino Sans","Yu Gothic","Meiryo",sans-serif}' +
    '.nk-pop .nk-ar{font-weight:700;font-size:1rem}' +
    '.nk-pop .nk-lv{display:inline-block;font-size:.68rem;font-weight:700;padding:1px 8px;border-radius:99px;background:rgba(47,125,216,.18);color:var(--themeLink,#2f7dd8);margin-left:6px;vertical-align:middle}' +
    '.nk-pop .nk-r{margin:2px 0;opacity:.9}' +
    '.nk-pop .nk-r b{opacity:.7;font-weight:600}' +
    '.nk-pop .nk-chips{display:flex;flex-wrap:wrap;gap:6px;margin:4px 0 6px}' +
    '.nk-pop .nk-chip{padding:4px 10px;border:1px solid rgba(127,127,127,.5);border-radius:99px;background:rgba(127,127,127,.08);color:inherit;font:inherit;font-size:.85rem;cursor:pointer}' +
    '.nk-pop .nk-chip.nk-dis{opacity:.55;cursor:default}' +
    '.nk-pop .nk-chip:not(.nk-dis):hover{background:rgba(47,125,216,.2)}' +
    '.nk-pop .nk-note{font-size:.8rem;opacity:.75;margin-top:4px}' +
    '.nk-pop .nk-ft{display:flex;gap:8px;align-items:center;justify-content:space-between;margin-top:8px}' +
    '.nk-pop a.nk-link{color:var(--themeLink,#2f7dd8);font-weight:700;font-size:.82rem;text-decoration:none}' +
    '.nk-pop .nk-x,.nk-pop .nk-back{border:0;background:transparent;color:inherit;font:inherit;cursor:pointer;opacity:.7;font-size:.85rem;padding:2px 4px}' +
    '.nk-pop .nk-x{position:absolute;top:6px;right:8px;font-size:1.2rem;line-height:1}';
  function css() {
    if (document.getElementById("nk-css")) return;
    var s = document.createElement("style"); s.id = "nk-css"; s.textContent = CSS; document.head.appendChild(s);
  }

  // ---------- isi popup ----------
  function bushuLink(ch) { return BUSHU_URL + "?tab=materi&bushu=" + encodeURIComponent(ch); }

  function kanjiCard(ch) {
    var r = MAP[ch];
    if (!r) return null;
    var rad = r[5] >= 0 ? RADS[r[5]] : null;
    var h = '<div class="nk-hd"><div class="nk-big">' + esc(r[1]) + '</div><div><span class="nk-ar">' + esc(r[4]) + '</span><span class="nk-lv">' + esc(r[0]) + "</span></div></div>";
    if (r[2]) h += '<div class="nk-r"><b>on&#39;yomi:</b> ' + esc(r[2].split(",").join(", ")) + "</div>";
    if (r[3]) h += '<div class="nk-r"><b>kun&#39;yomi:</b> ' + esc(r[3].split(",").join(", ")) + "</div>";
    if (rad) {
      h += '<div class="nk-r"><b>Bushu:</b> <button type="button" class="nk-chip" data-nk-comp="' + esc(rad[0]) + '">' + esc(rad[0]) + " " + esc(rad[1]) + " (" + esc(rad[2]) + ")</button>" +
        (POSL[r[6]] ? " posisi " + esc(POSL[r[6]]) : "") + "</div>";
    }
    if (r[7]) {
      var chips = r[7].split(" + ").map(function (t) {
        var comp = t.split(" (")[0].trim();
        var ok = MAP[comp] || BYRAD[comp];
        return '<button type="button" class="nk-chip' + (ok ? "" : " nk-dis") + '" ' + (ok ? 'data-nk-comp="' + esc(comp) + '"' : "disabled") + ">" + esc(t) + "</button>";
      }).join("");
      h += '<div class="nk-r"><b>Susunan:</b></div><div class="nk-chips">' + chips + "</div>";
    }
    if (r[8]) h += '<div class="nk-note">' + (r[9] === "a" ? "Asal: " : "Cerita: ") + esc(r[8]) + "</div>";
    if (r[11]) h += '<div class="nk-note">' + esc(r[11]) + "</div>";
    if (rad) h += '<div class="nk-ft"><span></span><a class="nk-link" href="' + bushuLink(rad[0]) + '">Buka di Materi bushu &#8594;</a></div>';
    return h;
  }

  function bushuCard(ch) {
    var list = BYRAD[ch];
    if (!list || !list.length) return null;
    var rad = RADS[list[0][5]];
    var ex = list.slice().sort(function (a, b) { return ["N5", "N4", "N3", "N2", "N1"].indexOf(a[0]) - ["N5", "N4", "N3", "N2", "N1"].indexOf(b[0]); }).slice(0, 8);
    var h = '<div class="nk-hd"><div class="nk-big">' + esc(rad[0]) + '</div><div><span class="nk-ar">' + esc(rad[1]) + '</span><br><span>' + esc(rad[2]) + "</span></div></div>" +
      '<div class="nk-r"><b>Dipakai di</b> ' + list.length + " kanji. Contoh:</div><div class=\"nk-chips\">" +
      ex.map(function (r) { return '<button type="button" class="nk-chip" data-nk-comp="' + esc(r[1]) + '">' + esc(r[1]) + " " + esc(r[4].split(",")[0]) + "</button>"; }).join("") + "</div>" +
      '<div class="nk-ft"><span></span><a class="nk-link" href="' + bushuLink(rad[0]) + '">Buka di Materi bushu &#8594;</a></div>';
    return h;
  }

  function wordCard(key) {
    var i = key.indexOf("|"), base = key.slice(0, i), rd = key.slice(i + 1);
    var arti = GLOSS[key];
    var ks = Array.from(base).filter(function (c) { return KANJI_RE.test(c); });
    if (!arti) arti = ks.map(function (c) { return MAP[c] ? MAP[c][4].split(",")[0] : c; }).join(" + ");
    var h = '<div class="nk-hd"><div class="nk-big" style="font-size:' + (base.length > 3 ? "1.7rem" : "2.2rem") + '">' + esc(base) + '</div><div><span class="nk-rd">' + esc(rd) + '</span><br><span class="nk-ar">' + esc(arti) + "</span></div></div>";
    h += '<div class="nk-r"><b>Susunan bushu:</b></div>';
    ks.forEach(function (c) {
      var r = MAP[c];
      if (!r) { h += '<div class="nk-wrow"><b>' + esc(c) + '</b> <span class="nk-note">belum ada data</span></div>'; return; }
      var rad = r[5] >= 0 ? RADS[r[5]] : null;
      h += '<div class="nk-wrow"><button type="button" class="nk-chip" data-nk-comp="' + esc(c) + '">' + esc(c) + " " + esc(r[4].split(",")[0]) + "</button>";
      if (rad) h += ' &rarr; <button type="button" class="nk-chip" data-nk-comp="' + esc(rad[0]) + '">' + esc(rad[0]) + " " + esc(rad[1]) + " (" + esc(rad[2]) + ")</button>";
      if (r[7]) h += '<div class="nk-note">Susunan: ' + esc(r[7]) + "</div>";
      h += "</div>";
    });
    var r0 = ks.length && MAP[ks[0]] && MAP[ks[0]][5] >= 0 ? RADS[MAP[ks[0]][5]] : null;
    if (r0) h += '<div class="nk-ft"><span class="nk-note">Ketuk kanji atau bushu untuk detail.</span><a class="nk-link" href="' + bushuLink(r0[0]) + '">Buka di Materi bushu &#8594;</a></div>';
    return h;
  }

  function cardFor(ch) {
    if (ch.indexOf("w:") === 0) return wordCard(ch.slice(2));
    var kind = MAP[ch] ? "k" : "b";
    var html = kanjiCard(ch) || bushuCard(ch);
    if (!html) html = '<div class="nk-hd"><div class="nk-big">' + esc(ch) + '</div><div class="nk-ar">Belum ada data</div></div><div class="nk-note">Kanji ini belum ada di daftar N5 sampai N1.</div>';
    return html;
  }

  // ---------- pemasangan ----------
  function attach(root, opts) {
    if (!root || root._nkBound) return;
    root._nkBound = true;
    css();
    if (getComputedStyle(root).position === "static") root.style.position = "relative";
    var pop = null, stack = [], anchor = null;

    function close() {
      if (pop && pop.parentNode) pop.parentNode.removeChild(pop);
      if (anchor) anchor.classList.remove("nk-on");
      pop = null; anchor = null; stack = [];
    }
    function place() {
      if (!pop || !anchor) return;
      var rr = root.getBoundingClientRect(), ar = anchor.getBoundingClientRect();
      var w = pop.offsetWidth, h = pop.offsetHeight;
      var left = Math.max(2, Math.min(ar.left - rr.left - 8, rr.width - w - 2));
      var below = ar.bottom - rr.top + 6;
      var top = (ar.bottom + h + 12 > window.innerHeight && ar.top - h - 12 > 0) ? (ar.top - rr.top - h - 6) : below;
      pop.style.left = left + "px";
      pop.style.top = Math.max(0, top) + "px";
    }
    function draw() {
      var ch = stack[stack.length - 1];
      pop.innerHTML = '<button type="button" class="nk-x" aria-label="Tutup" data-nk-x="1">&times;</button>' +
        (stack.length > 1 ? '<button type="button" class="nk-back" data-nk-back="1">&larr; kembali</button>' : "") + cardFor(ch);
      place();
    }
    function open(el) {
      var ch = el.getAttribute("data-w") ? "w:" + el.getAttribute("data-w") : el.getAttribute("data-k");
      if (anchor === el && pop) { close(); return; }
      close();
      ensure(function (ok) {
        if (!ok) { return; }
        anchor = el; anchor.classList.add("nk-on");
        pop = document.createElement("div"); pop.className = "nk-pop";
        root.appendChild(pop);
        stack = [ch];
        draw();
      });
    }

    root.addEventListener("click", function (e) {
      var t = e.target;
      var x = t.closest ? t.closest("[data-nk-x]") : null;
      if (x) { close(); return; }
      var b = t.closest ? t.closest("[data-nk-back]") : null;
      if (b && pop) { stack.pop(); draw(); return; }
      var c = t.closest ? t.closest("[data-nk-comp]") : null;
      if (c && pop) { stack.push(c.getAttribute("data-nk-comp")); draw(); return; }
      if (pop && pop.contains(t)) return;
      var k = t.closest ? t.closest(".nk,.nw") : null;
      if (k && root.contains(k)) { e.preventDefault(); open(k); return; }
      close();
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
    root._nkClose = close;
  }

  // Simpan bushu yang dituju sebelum pindah halaman (dipakai halaman bushu bila parameter URL hilang)
  document.addEventListener("click", function (e) {
    var a = e.target && e.target.closest ? e.target.closest(".nk-link") : null;
    if (!a) return;
    var m = /[?&]bushu=([^&#]+)/.exec(a.getAttribute("href") || "");
    if (m) { try { sessionStorage.setItem("kbq_bushu", decodeURIComponent(m[1])); } catch (err) {} }
  }, true);

  window.NihongoKanji = { ruby: ruby, rubyW: rubyW, setGloss: setGloss, plain: plain, strip: strip, ensure: ensure, attach: attach, esc: esc };
})();
