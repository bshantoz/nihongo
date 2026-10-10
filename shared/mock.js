/* Qategori Nihongo - Mock Test (模擬試験) bersama untuk semua level.
   Pemakaian: NihongoMock.mount(elemen, {level:"N3", quiz:window.N3_QUIZ, reading:window.N3_READING, choukai:window.N3_CHOUKAI})
   - Timer ON/OFF, durasi 15/25/40/50 menit, pilih bagian (漢字 語彙 文法 読解 聴解).
   - Jumlah soal per bagian dihitung otomatis dari durasi, bisa diatur manual (stepper).
   - Satu soal per layar, navigator, auto-kumpul saat waktu habis, hasil + pembahasan, riwayat di localStorage. */
(function () {
  "use strict";
  if (window.NihongoMock) return;
  var K = window.NihongoKanji, T = window.NihongoTTS;

  var SECS = [
    { key: "kanji", label: "漢字", sub: "Kanji", per: 0.5 },
    { key: "goi", label: "語彙", sub: "Kosakata", per: 0.6 },
    { key: "bunpou", label: "文法", sub: "Tata bahasa", per: 0.9 },
    { key: "dokkai", label: "読解", sub: "Membaca", per: 2.0 },
    { key: "choukai", label: "聴解", sub: "Mendengar", per: 1.5 }
  ];
  var DURS = [15, 25, 40, 50];

  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function underline(s) { return esc(s).replace(/__(.+?)__/g, "<u>$1</u>"); }
  function strip(h) { return String(h).replace(/<span class="n[kw]"[^>]*>(.*?)<\/span>/g, "$1"); }
  function rb(s) { return K ? (K.rubyW || K.ruby)(s) : esc(String(s).replace(/\{([^|}]+)\|[^}]+\}/g, "$1")); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function mmss(s) { s = Math.max(0, s); var m = Math.floor(s / 60), r = s % 60; return (m < 10 ? "0" : "") + m + ":" + (r < 10 ? "0" : "") + r; }

  var CSS = '' +
    '.mk-wrap{color:inherit;line-height:1.6}.mk-wrap *{box-sizing:border-box}' +
    '.mk-btn,.mk-chip{font:inherit;font-size:.88rem;font-weight:600;color:inherit;background:rgba(127,127,127,.08);border:1.5px solid rgba(127,127,127,.38);border-radius:10px;padding:8px 14px;cursor:pointer}' +
    '.mk-chip{border-radius:99px;padding:7px 15px}' +
    '.mk-btn.on,.mk-chip.on{background:#2f7dd8;border-color:#2f7dd8;color:#fff}' +
    '.mk-btn.pri{background:#2f7dd8;border-color:#2f7dd8;color:#fff}' +
    '.mk-btn:disabled{opacity:.45;cursor:default}' +
    '.mk-h{font-size:1.05rem;font-weight:800;margin:16px 0 6px}' +
    '.mk-row{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin:8px 0}' +
    '.mk-note{font-size:.82rem;opacity:.72}' +
    '.mk-secs{display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:8px}' +
    '.mk-sec{font:inherit;color:inherit;text-align:center;background:rgba(127,127,127,.06);border:1.5px solid rgba(127,127,127,.38);border-radius:12px;padding:10px 6px;cursor:pointer}' +
    '.mk-sec.on{border-color:#2f7dd8;background:rgba(47,125,216,.14)}' +
    '.mk-sec b{display:block;font-size:1.15rem}.mk-sec span{font-size:.74rem;opacity:.75}' +
    '.mk-step{display:flex;align-items:center;gap:10px;margin:6px 0}' +
    '.mk-step .nm{flex:1}.mk-step button{width:34px;height:34px;padding:0;font-size:1.1rem}' +
    '.mk-step .n{min-width:60px;text-align:center;font-weight:700}' +
    '.mk-sum{margin:12px 0;padding:10px 14px;border-radius:10px;background:rgba(47,125,216,.1);font-weight:700}' +
    '.mk-top{display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap;padding:8px 0}' +
    '.mk-timer{font-weight:800;font-size:1.15rem;font-variant-numeric:tabular-nums;border:1.5px solid rgba(127,127,127,.38);border-radius:99px;padding:4px 14px}' +
    '.mk-timer.low{color:#d9534f;border-color:#d9534f}' +
    '.mk-badge{font-size:.72rem;font-weight:700;color:#2f7dd8;background:rgba(47,125,216,.12);padding:2px 10px;border-radius:99px}' +
    '.mk-q{margin:10px 0;font-size:1.08rem;line-height:2}' +
    '.mk-pass{border:1.5px solid rgba(127,127,127,.3);border-radius:12px;padding:12px 14px;background:rgba(127,127,127,.05);font-size:1.05rem;line-height:2.2;margin:8px 0}' +
    '.mk-pass p{margin:0 0 .5em}.mk-pass ruby rt{font-size:.5em;opacity:.8}.mk-nofuri ruby rt{display:none}' +
    '.mk-opt{display:block;width:100%;text-align:left;font:inherit;color:inherit;background:rgba(127,127,127,.06);border:1.5px solid rgba(127,127,127,.38);border-radius:10px;padding:10px 14px;margin:7px 0;cursor:pointer;line-height:1.9}' +
    '.mk-opt ruby rt{font-size:.5em}' +
    '.mk-opt.sel{border-color:#2f7dd8;background:rgba(47,125,216,.16)}' +
    '.mk-opt.good{border-color:#2e9e5b;background:rgba(46,158,91,.16)}' +
    '.mk-opt.bad{border-color:#d9534f;background:rgba(217,83,79,.14)}' +
    '.mk-nav{display:flex;flex-wrap:wrap;gap:5px;margin:14px 0}' +
    '.mk-n{width:34px;height:34px;font:inherit;font-size:.8rem;font-weight:700;color:inherit;border:1.5px solid rgba(127,127,127,.38);border-radius:8px;background:rgba(127,127,127,.06);cursor:pointer;padding:0}' +
    '.mk-n.done{background:rgba(47,125,216,.22);border-color:#2f7dd8}' +
    '.mk-n.cur{outline:2px solid #2f7dd8;outline-offset:1px}' +
    '.mk-score{text-align:center;padding:18px 10px;border-radius:14px;background:rgba(47,125,216,.1);margin:10px 0}' +
    '.mk-score .big{font-size:2.2rem;font-weight:800;color:#2f7dd8}' +
    '.mk-bars div.r{display:flex;align-items:center;gap:8px;margin:6px 0;font-size:.9rem}' +
    '.mk-bars .bar{flex:1;height:10px;border-radius:99px;background:rgba(127,127,127,.2);overflow:hidden}' +
    '.mk-bars .bar i{display:block;height:100%;background:#2f7dd8}' +
    '.mk-rev{border:1.5px solid rgba(127,127,127,.3);border-radius:12px;padding:12px 14px;margin:10px 0}' +
    '.mk-rev.ok{border-color:rgba(46,158,91,.6)}.mk-rev.ng{border-color:rgba(217,83,79,.6)}' +
    '.mk-exp{margin-top:8px;padding:9px 12px;border-radius:10px;background:rgba(127,127,127,.1);font-size:.9rem}' +
    '.mk-tr{margin-top:6px;font-size:.88rem;opacity:.9}' +
    '.mk-hist{font-size:.84rem;margin-top:6px}' +
    '.mk-pop{position:relative}';

  function css() {
    if (document.getElementById("mk-css")) return;
    var s = document.createElement("style"); s.id = "mk-css"; s.textContent = CSS; document.head.appendChild(s);
  }

  function mount(el, cfg) {
    css();
    var level = cfg.level || "N", Q = cfg.quiz || {}, READ = cfg.reading || [], CH = cfg.choukai || [];
    var LS = "nihongo_mock_" + level;
    el.classList.add("mk-wrap");
    if (K) { K.attach(el); if (cfg.gloss && K.setGloss) K.setGloss(cfg.gloss); }

    // ---------- kolam soal per bagian ----------
    function quizPool(cats, sec) {
      var out = [];
      cats.forEach(function (c) {
        (Q[c] || []).forEach(function (it) { out.push({ sec: sec, kind: "quiz", q: it.mondai, opt: it.options, correct: it.correct, exp: it.penjelasan }); });
      });
      return out;
    }
    function readPool() {
      var out = [];
      READ.forEach(function (p) {
        p.soal.forEach(function (s, i) { out.push({ sec: "dokkai", kind: "read", pass: p, q: s.q, opt: s.opt, correct: s.correct, exp: s.exp, qi: i }); });
      });
      return out;
    }
    function chPool() {
      return CH.map(function (c) { return { sec: "choukai", kind: "listen", item: c, q: c.pertanyaan, opt: c.options, correct: c.correct, exp: c.penjelasan }; });
    }
    var POOL = { kanji: quizPool(["kanji_yomi", "hyouki"], "kanji"), goi: quizPool(["bunmyaku"], "goi"), bunpou: quizPool(["bunpou", "kumitate"], "bunpou"), dokkai: readPool(), choukai: chPool() };

    var cfgS = { dur: 25, timer: true, sel: { kanji: true, goi: true, bunpou: true, dokkai: false, choukai: false }, manual: {} };
    var ex = null; // sesi ujian
    var tick = null;

    function activeSecs() { return SECS.filter(function (s) { return cfgS.sel[s.key] && POOL[s.key].length; }); }
    function alloc() {
      var act = activeSecs(), res = {};
      if (!act.length) return res;
      var budget = cfgS.dur / act.length;
      act.forEach(function (s) {
        var n = Math.max(1, Math.round(budget / s.per));
        n = Math.min(n, POOL[s.key].length);
        if (cfgS.manual[s.key] != null) n = Math.max(1, Math.min(cfgS.manual[s.key], POOL[s.key].length));
        res[s.key] = n;
      });
      return res;
    }

    // ---------- layar pengaturan ----------
    function hist() { try { return JSON.parse(localStorage.getItem(LS) || "[]"); } catch (e) { return []; } }
    function saveHist(r) { try { var h = hist(); h.unshift(r); localStorage.setItem(LS, JSON.stringify(h.slice(0, 5))); } catch (e) {} }

    function setup() {
      stopAll();
      var al = alloc(), total = 0, est = 0;
      var h = '<div class="mk-h">Durasi</div><div class="mk-row">';
      DURS.forEach(function (d) { h += '<button type="button" class="mk-chip' + (cfgS.dur === d ? " on" : "") + '" data-mk="dur" data-v="' + d + '">' + d + " menit</button>"; });
      h += '</div><div class="mk-row"><button type="button" class="mk-btn' + (cfgS.timer ? " on" : "") + '" data-mk="timer">⏱ Timer: ' + (cfgS.timer ? "ON" : "OFF") + '</button><span class="mk-note">' +
        (cfgS.timer ? "Ujian dikumpulkan otomatis saat waktu habis." : "Tanpa batas waktu, waktu pengerjaan tetap dicatat.") + "</span></div>";
      h += '<div class="mk-h">Bagian soal</div><div class="mk-secs">';
      SECS.forEach(function (s) {
        var n = POOL[s.key].length;
        h += '<button type="button" class="mk-sec' + (cfgS.sel[s.key] ? " on" : "") + '" data-mk="sec" data-v="' + s.key + '"' + (n ? "" : " disabled") + "><b>" + s.label + "</b><span>" + s.sub + " · " + n + " soal</span></button>";
      });
      h += "</div>";
      var act = activeSecs();
      if (act.length) {
        h += '<div class="mk-h">Jumlah soal</div>';
        act.forEach(function (s) {
          total += al[s.key]; est += al[s.key] * s.per;
          h += '<div class="mk-step"><span class="nm">' + s.label + " " + s.sub + '</span><button type="button" class="mk-btn" data-mk="dec" data-v="' + s.key + '">−</button><span class="n">' + al[s.key] + " / " + POOL[s.key].length + '</span><button type="button" class="mk-btn" data-mk="inc" data-v="' + s.key + '">+</button></div>';
        });
        h += '<div class="mk-sum">' + total + " soal · perkiraan " + Math.round(est) + " menit" + (cfgS.timer ? " · batas " + cfgS.dur + " menit" : "") + "</div>";
        if (cfgS.timer && est > cfgS.dur + 1) h += '<div class="mk-note">Jumlah soal melebihi perkiraan waktu. Kurangi soal atau pilih durasi lebih panjang.</div>';
      } else h += '<div class="mk-note">Pilih minimal satu bagian.</div>';
      h += '<div class="mk-row"><button type="button" class="mk-btn pri" data-mk="start"' + (total ? "" : " disabled") + ">▶ Mulai ujian</button></div>";
      var hs = hist();
      if (hs.length) {
        h += '<div class="mk-h">Riwayat terakhir</div>';
        hs.forEach(function (r) { h += '<div class="mk-hist">' + esc(r.d) + " — " + r.s + "/" + r.n + " (" + r.p + "%) · " + mmss(r.t) + " · " + esc(r.secs) + "</div>"; });
      }
      el.innerHTML = h;
    }

    // ---------- ujian ----------
    function build() {
      var al = alloc(), qs = [];
      activeSecs().forEach(function (s) {
        shuffle(POOL[s.key]).slice(0, al[s.key]).forEach(function (q) {
          var order = shuffle(q.opt.map(function (_, i) { return i; }));
          qs.push({ sec: q.sec, kind: q.kind, pass: q.pass, item: q.item, q: q.q, exp: q.exp,
            opt: order.map(function (i) { return q.opt[i]; }), correct: order.indexOf(q.correct) });
        });
      });
      return qs;
    }
    function start() {
      var qs = build();
      ex = { qs: qs, i: 0, ans: qs.map(function () { return null; }), furi: true, t0: Date.now(), endAt: cfgS.timer ? Date.now() + cfgS.dur * 60000 : 0, confirm: false, done: false };
      if (tick) clearInterval(tick);
      tick = setInterval(onTick, 1000);
      draw();
    }
    function left() { return ex.endAt ? Math.ceil((ex.endAt - Date.now()) / 1000) : null; }
    function onTick() {
      if (!ex || ex.done) return;
      var t = el.querySelector("#mkTimer");
      if (ex.endAt) {
        var l = left();
        if (l <= 0) { finish(true); return; }
        if (t) { t.textContent = "⏱ " + mmss(l); t.classList.toggle("low", l <= 60); }
      } else if (t) t.textContent = "⏱ " + mmss(Math.floor((Date.now() - ex.t0) / 1000));
    }
    function stopAll() { if (tick) { clearInterval(tick); tick = null; } if (T) T.cancel(); }
    function secLabel(k) { var s = SECS.filter(function (x) { return x.key === k; })[0]; return s.label + " " + s.sub; }

    function qBody(q, review) {
      var h = "";
      if (q.kind === "read") {
        h += '<div class="mk-pass' + (ex.furi ? "" : " mk-nofuri") + '"><b>' + (K ? (K.rubyW || K.ruby)(q.pass.judul) : esc(q.pass.judul)) + "</b>" +
          q.pass.teks.split("\n").map(function (p) { return "<p>" + rb(p) + "</p>"; }).join("") + "</div>";
      }
      if (q.kind === "listen") {
        if (!review) h += '<div class="mk-row"><button type="button" class="mk-btn pri" data-mk="play">🔊 Putar audio</button><span class="mk-note">Bisa diputar ulang.</span></div>';
        if (review) h += '<div class="mk-pass">' + q.item.dialog.map(function (l) {
          return "<div>" + (l.gender === "P" ? "👩" : "👨") + " " + esc(l.speaker) + "：" + (K ? K.plain(l.jp) : esc(l.jp)) + '<div class="mk-tr">' + esc(l.id || "") + "</div></div>";
        }).join("") + "</div>";
      }
      var qt = q.kind === "quiz" ? underline(q.q) : (K && q.kind === "listen" ? K.plain(q.q) : strip(rb(q.q)));
      if (q.kind === "read") qt = rb(q.q);
      h += '<div class="mk-q' + (q.kind === "read" && !ex.furi ? " mk-nofuri" : "") + '">' + qt + "</div>";
      return h;
    }
    function optHtml(q, k) {
      return (k + 1) + ". " + (q.kind === "read" ? strip(rb(q.opt[k])) : esc(q.opt[k]));
    }

    function draw() {
      var q = ex.qs[ex.i], n = ex.qs.length, a = ex.ans[ex.i];
      var answered = ex.ans.filter(function (x) { return x != null; }).length;
      var h = '<div class="mk-top"><span class="mk-timer' + (ex.endAt && left() <= 60 ? " low" : "") + '" id="mkTimer">⏱ ' + (ex.endAt ? mmss(left()) : mmss(Math.floor((Date.now() - ex.t0) / 1000))) + '</span>' +
        '<span class="mk-badge">' + secLabel(q.sec) + "</span><span class=\"mk-note\">Soal " + (ex.i + 1) + " / " + n + " · terjawab " + answered + "</span></div>";
      if (q.kind === "read") h += '<div class="mk-row"><button type="button" class="mk-btn' + (ex.furi ? " on" : "") + '" data-mk="furi">Furigana: ' + (ex.furi ? "ON" : "OFF") + "</button></div>";
      h += qBody(q, false);
      q.opt.forEach(function (o, k) { h += '<button type="button" class="mk-opt' + (a === k ? " sel" : "") + '" data-mk="ans" data-v="' + k + '">' + optHtml(q, k) + "</button>"; });
      h += '<div class="mk-row"><button type="button" class="mk-btn" data-mk="prev"' + (ex.i === 0 ? " disabled" : "") + '>◀ Sebelumnya</button><button type="button" class="mk-btn" data-mk="next"' + (ex.i >= n - 1 ? " disabled" : "") + '>Berikutnya ▶</button></div>';
      h += '<div class="mk-nav">';
      ex.qs.forEach(function (_, i) { h += '<button type="button" class="mk-n' + (ex.ans[i] != null ? " done" : "") + (i === ex.i ? " cur" : "") + '" data-mk="go" data-v="' + i + '">' + (i + 1) + "</button>"; });
      h += "</div>";
      if (ex.confirm) {
        var un = n - answered;
        h += '<div class="mk-sum">' + (un ? "Masih ada " + un + " soal belum dijawab. " : "") + 'Kumpulkan ujian sekarang?<div class="mk-row"><button type="button" class="mk-btn pri" data-mk="yes">Ya, kumpulkan</button><button type="button" class="mk-btn" data-mk="no">Lanjut mengerjakan</button></div></div>';
      } else h += '<div class="mk-row"><button type="button" class="mk-btn pri" data-mk="finish">Selesai &amp; kumpulkan</button></div>';
      el.innerHTML = h;
    }

    function finish(auto) {
      if (!ex || ex.done) return;
      ex.done = true; stopAll();
      var used = Math.floor((Date.now() - ex.t0) / 1000);
      if (ex.endAt) used = Math.min(used, cfgS.dur * 60);
      var per = {}, tot = 0;
      ex.qs.forEach(function (q, i) {
        per[q.sec] = per[q.sec] || { s: 0, n: 0 };
        per[q.sec].n++;
        if (ex.ans[i] === q.correct) { per[q.sec].s++; tot++; }
      });
      ex.res = { tot: tot, n: ex.qs.length, per: per, used: used, auto: !!auto, onlyWrong: false };
      var pct = Math.round(tot / ex.qs.length * 100);
      var d = new Date();
      saveHist({ d: d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear(), s: tot, n: ex.qs.length, p: pct, t: used, secs: Object.keys(per).map(function (k) { return k; }).join("・") });
      results();
    }

    function results() {
      var r = ex.res, pct = Math.round(r.tot / r.n * 100);
      var h = '<div class="mk-score"><div class="big">' + r.tot + " / " + r.n + '</div><div>' + pct + "% benar · waktu " + mmss(r.used) + (r.auto ? " · waktu habis, dikumpulkan otomatis" : "") + '</div></div><div class="mk-bars">';
      SECS.forEach(function (s) {
        var p = r.per[s.key]; if (!p) return;
        h += '<div class="r"><span style="min-width:110px">' + s.label + " " + s.sub + '</span><span class="bar"><i style="width:' + Math.round(p.s / p.n * 100) + '%"></i></span><b>' + p.s + "/" + p.n + "</b></div>";
      });
      h += '</div><div class="mk-row"><button type="button" class="mk-btn pri" data-mk="again">🔁 Ulangi dengan soal baru</button><button type="button" class="mk-btn" data-mk="back">⚙ Ubah pengaturan</button><button type="button" class="mk-btn' + (r.onlyWrong ? " on" : "") + '" data-mk="wrong">Hanya yang salah</button></div>';
      h += '<div class="mk-h">Pembahasan</div>';
      ex.qs.forEach(function (q, i) {
        var a = ex.ans[i], ok = a === q.correct;
        if (r.onlyWrong && ok) return;
        h += '<div class="mk-rev ' + (ok ? "ok" : "ng") + '"><span class="mk-badge">' + (i + 1) + ". " + secLabel(q.sec) + "</span> " + (ok ? "✔" : "✘") + qBody(q, true);
        q.opt.forEach(function (o, k) {
          var c = "mk-opt"; if (k === q.correct) c += " good"; else if (k === a) c += " bad";
          h += '<div class="' + c + '" style="cursor:default">' + optHtml(q, k) + (k === a ? " ← jawabanmu" : "") + "</div>";
        });
        if (a == null) h += '<div class="mk-note">Tidak dijawab.</div>';
        h += '<div class="mk-exp">' + esc(q.exp || "") + "</div></div>";
      });
      el.innerHTML = h;
      el.scrollIntoView({ block: "start" });
    }

    function playListen() {
      var q = ex.qs[ex.i];
      if (!T || !T.supported()) { alert("Browser ini tidak mendukung suara (Web Speech API)."); return; }
      if (ex.h) ex.h.stop();
      ex.h = T.speakLines(q.item.dialog, 0.9, {});
    }

    el.addEventListener("click", function (e) {
      var t = e.target.closest ? e.target.closest("[data-mk]") : null;
      if (!t || !el.contains(t)) return;
      var a = t.getAttribute("data-mk"), v = t.getAttribute("data-v");
      if (a === "dur") { cfgS.dur = +v; cfgS.manual = {}; setup(); }
      else if (a === "timer") { cfgS.timer = !cfgS.timer; setup(); }
      else if (a === "sec") { cfgS.sel[v] = !cfgS.sel[v]; delete cfgS.manual[v]; setup(); }
      else if (a === "inc" || a === "dec") { var al = alloc(); cfgS.manual[v] = al[v] + (a === "inc" ? 1 : -1); setup(); }
      else if (a === "start") start();
      else if (!ex) return;
      else if (a === "ans") { if (!ex.done) { ex.ans[ex.i] = +v; draw(); } }
      else if (a === "next") { if (T) T.cancel(); ex.i = Math.min(ex.i + 1, ex.qs.length - 1); ex.confirm = false; draw(); }
      else if (a === "prev") { if (T) T.cancel(); ex.i = Math.max(ex.i - 1, 0); ex.confirm = false; draw(); }
      else if (a === "go") { if (T) T.cancel(); ex.i = +v; ex.confirm = false; draw(); }
      else if (a === "furi") { ex.furi = !ex.furi; draw(); }
      else if (a === "play") playListen();
      else if (a === "finish") { ex.confirm = true; draw(); }
      else if (a === "no") { ex.confirm = false; draw(); }
      else if (a === "yes") finish(false);
      else if (a === "again") start();
      else if (a === "back") { ex = null; setup(); }
      else if (a === "wrong") { ex.res.onlyWrong = !ex.res.onlyWrong; results(); }
    });

    setup();
    return { stop: stopAll };
  }

  window.NihongoMock = { mount: mount };
})();
