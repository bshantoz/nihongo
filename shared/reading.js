/* Qategori Nihongo - Tab Reading (読解) bersama untuk semua level.
   Pemakaian: NihongoReading.mount(elemen, {data: window.N3_READING, level: "N3"})
   Bentuk data: {id, tipe, topik, judul, teks, terjemahan, soal:[{q, opt:[4], correct, exp}]}
   teks/q/opt memakai markup furigana {漢字|かんじ}. Ketuk kanji -> popup (NihongoKanji). */
(function () {
  "use strict";
  if (window.NihongoReading) return;
  var K = window.NihongoKanji;
  var TYPES = { tanbun: "短文 Tanbun", chuubun: "中文 Chuubun", chouubun: "長文 Chouubun", jouhou: "情報検索 Jouhou" };
  var LS = "nihongo_reading_done_";

  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function rb(s) { return K ? (K.rubyW || K.ruby)(s) : esc(String(s).replace(/\{([^|}]+)\|[^}]+\}/g, "$1")); }
  function rbo(s) { return rb(s).replace(/<span class="n[kw]"[^>]*>(.*?)<\/span>/g, "$1"); }
  function getDone(level) { try { return JSON.parse(localStorage.getItem(LS + level) || "{}"); } catch (e) { return {}; } }
  function setDone(level, id, score) { try { var d = getDone(level); d[id] = score; localStorage.setItem(LS + level, JSON.stringify(d)); } catch (e) {} }

  var CSS = '' +
    '.rd-wrap{color:inherit;line-height:1.7}.rd-wrap *{box-sizing:border-box}' +
    '.rd-bar{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 14px}' +
    '.rd-chip,.rd-btn{font:inherit;font-size:.85rem;font-weight:600;color:inherit;background:rgba(127,127,127,.08);border:1.5px solid rgba(127,127,127,.35);border-radius:99px;padding:6px 14px;cursor:pointer}' +
    '.rd-chip.on,.rd-btn.on{background:#2f7dd8;border-color:#2f7dd8;color:#fff}' +
    '.rd-btn{border-radius:10px}' +
    '.rd-list{display:grid;gap:10px}' +
    '.rd-item{display:block;width:100%;text-align:left;font:inherit;color:inherit;background:rgba(127,127,127,.06);border:1.5px solid rgba(127,127,127,.3);border-radius:14px;padding:14px 16px;cursor:pointer}' +
    '.rd-item:hover{border-color:#2f7dd8;background:rgba(47,125,216,.08)}' +
    '.rd-it-top{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin-bottom:6px;font-size:.72rem}' +
    '.rd-tag{background:rgba(47,125,216,.14);color:#2f7dd8;font-weight:700;border-radius:99px;padding:2px 10px}' +
    '.rd-tag2{background:rgba(127,127,127,.18);border-radius:99px;padding:2px 10px;opacity:.85}' +
    '.rd-ok{margin-left:auto;font-weight:700;color:#2e9e5b}' +
    '.rd-it-t{font-size:1.02rem;font-weight:700}' +
    '.rd-it-s{font-size:.8rem;opacity:.7;margin-top:2px}' +
    '.rd-head{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-bottom:10px}' +
    '.rd-title{font-size:1.15rem;font-weight:800;margin:4px 0 2px}' +
    '.rd-text{border:1.5px solid rgba(127,127,127,.3);border-radius:14px;padding:16px 18px;background:rgba(127,127,127,.05);font-size:1.12rem;line-height:2.3}' +
    '.rd-text p{margin:0 0 .6em}.rd-text p:last-child{margin:0}' +
    '.rd-text ruby rt{font-size:.5em;opacity:.8}' +
    '.rd-nofuri ruby rt{display:none}' +
    '.rd-tr{margin-top:10px;border-left:4px solid #2f7dd8;padding:10px 14px;background:rgba(47,125,216,.07);border-radius:0 10px 10px 0;font-size:.92rem;line-height:1.7}' +
    '.rd-tr p{margin:0 0 .5em}.rd-tr p:last-child{margin:0}' +
    '.rd-hint{font-size:.78rem;opacity:.7;margin:8px 0 0}' +
    '.rd-q{margin-top:18px;border:1.5px solid rgba(127,127,127,.3);border-radius:14px;padding:14px 16px}' +
    '.rd-qn{font-size:.75rem;font-weight:700;color:#2f7dd8;margin-bottom:4px}' +
    '.rd-qt{font-size:1.05rem;line-height:2.1;margin-bottom:8px}' +
    '.rd-qt ruby rt,.rd-opt ruby rt{font-size:.5em;opacity:.8}' +
    '.rd-opt{display:block;width:100%;text-align:left;font:inherit;color:inherit;background:rgba(127,127,127,.06);border:1.5px solid rgba(127,127,127,.35);border-radius:10px;padding:9px 12px;margin:6px 0;cursor:pointer;line-height:1.9}' +
    '.rd-opt:hover:not(:disabled){border-color:#2f7dd8}' +
    '.rd-opt:disabled{cursor:default}' +
    '.rd-opt.good{border-color:#2e9e5b;background:rgba(46,158,91,.16)}' +
    '.rd-opt.bad{border-color:#d9534f;background:rgba(217,83,79,.14)}' +
    '.rd-exp{margin-top:8px;font-size:.9rem;padding:10px 12px;border-radius:10px;background:rgba(127,127,127,.1)}' +
    '.rd-sum{margin-top:16px;text-align:center;font-weight:700;padding:12px;border-radius:12px;background:rgba(47,125,216,.1)}';

  function css() {
    if (document.getElementById("rd-css")) return;
    var s = document.createElement("style"); s.id = "rd-css"; s.textContent = CSS; document.head.appendChild(s);
  }

  function paras(txt, cls) {
    return String(txt).split("\n").filter(function (x) { return x.trim(); }).map(function (p) { return "<p>" + (cls ? rb(p) : esc(p)) + "</p>"; }).join("");
  }

  function mount(el, cfg) {
    css();
    var data = cfg.data || [], level = cfg.level || "";
    var st = { type: "all", cur: -1, furi: true, tr: false, ans: {} };
    el.classList.add("rd-wrap");
    if (K) { K.attach(el); if (cfg.gloss && K.setGloss) K.setGloss(cfg.gloss); }

    function list() {
      var done = getDone(level);
      var items = data.map(function (p, i) { return { p: p, i: i }; }).filter(function (o) { return st.type === "all" || o.p.tipe === st.type; });
      var types = []; data.forEach(function (p) { if (types.indexOf(p.tipe) < 0) types.push(p.tipe); });
      var h = '<div class="rd-bar"><button type="button" class="rd-chip' + (st.type === "all" ? " on" : "") + '" data-rt="all">Semua (' + data.length + ')</button>';
      types.forEach(function (t) { h += '<button type="button" class="rd-chip' + (st.type === t ? " on" : "") + '" data-rt="' + t + '">' + (TYPES[t] || t) + '</button>'; });
      h += '</div><div class="rd-list">';
      items.forEach(function (o) {
        var p = o.p, d = done[p.id];
        h += '<button type="button" class="rd-item" data-ro="' + o.i + '"><div class="rd-it-top"><span class="rd-tag">' + (TYPES[p.tipe] || p.tipe) + '</span><span class="rd-tag2">' + esc(p.topik) + '</span>' +
          (d != null ? '<span class="rd-ok">&#10003; skor ' + d + '/' + p.soal.length + '</span>' : "") + '</div>' +
          '<div class="rd-it-t">' + rb(p.judul) + '</div><div class="rd-it-s">' + p.soal.length + ' soal</div></button>';
      });
      h += "</div>";
      el.innerHTML = h;
    }

    function reader() {
      var p = data[st.cur];
      var h = '<div class="rd-head"><button type="button" class="rd-btn" data-ra="back">&larr; Daftar</button>' +
        '<button type="button" class="rd-btn' + (st.furi ? " on" : "") + '" data-ra="furi">Furigana: ' + (st.furi ? "ON" : "OFF") + '</button>' +
        '<button type="button" class="rd-btn' + (st.tr ? " on" : "") + '" data-ra="tr">Terjemahan: ' + (st.tr ? "tampil" : "sembunyi") + '</button></div>' +
        '<span class="rd-tag">' + (TYPES[p.tipe] || p.tipe) + '</span> <span class="rd-tag2">' + esc(p.topik) + '</span>' +
        '<div class="rd-title">' + rb(p.judul) + '</div>' +
        '<div class="rd-text' + (st.furi ? "" : " rd-nofuri") + '">' + paras(p.teks, true) + '</div>' +
        '<p class="rd-hint">Ketuk kata untuk melihat arti, bacaan, susunan, dan bushu-nya.</p>' +
        (st.tr ? '<div class="rd-tr">' + paras(p.terjemahan) + '</div>' : "");
      p.soal.forEach(function (q, qi) {
        var a = st.ans[qi];
        h += '<div class="rd-q"><div class="rd-qn">Soal ' + (qi + 1) + ' / ' + p.soal.length + '</div><div class="rd-qt">' + rb(q.q) + '</div>';
        q.opt.forEach(function (o, oi) {
          var c = "rd-opt";
          if (a != null) { if (oi === q.correct) c += " good"; else if (oi === a) c += " bad"; }
          h += '<button type="button" class="' + c + '" data-rq="' + qi + '" data-ri="' + oi + '"' + (a != null ? " disabled" : "") + '>' + (oi + 1) + '. ' + rbo(o) + '</button>';
        });
        if (a != null) h += '<div class="rd-exp"><b>' + (a === q.correct ? "Benar. " : "Kurang tepat. ") + '</b>' + esc(q.exp) + '</div>';
        h += "</div>";
      });
      if (Object.keys(st.ans).length === p.soal.length) {
        var sc = 0; p.soal.forEach(function (q, i) { if (st.ans[i] === q.correct) sc++; });
        h += '<div class="rd-sum">Skor bacaan ini: ' + sc + ' / ' + p.soal.length + '</div>';
      }
      el.innerHTML = h;
    }

    function draw() { if (st.cur < 0) list(); else reader(); }

    el.addEventListener("click", function (e) {
      var t = e.target.closest ? e.target.closest("[data-rt],[data-ro],[data-ra],[data-rq]") : null;
      if (!t) return;
      if (t.hasAttribute("data-rt")) { st.type = t.getAttribute("data-rt"); draw(); return; }
      if (t.hasAttribute("data-ro")) { st.cur = +t.getAttribute("data-ro"); st.ans = {}; draw(); el.scrollIntoView({ block: "start" }); return; }
      if (t.hasAttribute("data-rq")) {
        var qi = +t.getAttribute("data-rq"), oi = +t.getAttribute("data-ri"), p = data[st.cur];
        if (st.ans[qi] != null) return;
        st.ans[qi] = oi;
        if (Object.keys(st.ans).length === p.soal.length) {
          var sc = 0; p.soal.forEach(function (q, i) { if (st.ans[i] === q.correct) sc++; });
          setDone(level, p.id, sc);
        }
        var y = window.pageYOffset; draw(); window.scrollTo(0, y); return;
      }
      var a = t.getAttribute("data-ra");
      if (a === "back") { st.cur = -1; draw(); }
      else if (a === "furi") { st.furi = !st.furi; var y2 = window.pageYOffset; draw(); window.scrollTo(0, y2); }
      else if (a === "tr") { st.tr = !st.tr; var y3 = window.pageYOffset; draw(); window.scrollTo(0, y3); }
    });
    draw();
    return { redraw: draw };
  }

  window.NihongoReading = { mount: mount };
})();
