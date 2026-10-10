/* Qategori Nihongo - TTS bersama (Web Speech API, suara ja-JP).
   Dipakai tab Choukai dan Mock Test di semua level.
   - Hanya teks Jepang (line.jp) yang dibacakan, tidak pernah romaji atau terjemahan.
   - Pemilihan suara L/P dari nama suara, dengan cadangan pitch bila hanya ada satu suara ja-JP.
   - Pemuatan daftar suara aman dari balapan: callback dipanggil tepat SEKALI (bug suara ganda di HP). */
(function () {
  "use strict";
  if (window.NihongoTTS) return;

  var MALE = ["male", "otoya", "ichiro", "keita", "daisuke", "男性", "man"];
  var FEMALE = ["female", "kyoko", "haruka", "ayumi", "nanami", "sakura", "女性", "woman"];
  var profiles = null;
  var token = 0; // naik tiap ada perintah baru/berhenti, supaya putaran lama berhenti sendiri

  function supported() { return "speechSynthesis" in window && "SpeechSynthesisUtterance" in window; }

  function classify(v) {
    var n = (v.name || "").toLowerCase();
    if (MALE.some(function (h) { return n.indexOf(h) !== -1; })) return "L";
    if (FEMALE.some(function (h) { return n.indexOf(h) !== -1; })) return "P";
    return null;
  }

  function build() {
    var all = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
    var ja = all.filter(function (v) { return (v.lang || "").toLowerCase().indexOf("ja") === 0; });
    var p = { L: { voice: null, pitch: 0.82, rate: 0.92 }, P: { voice: null, pitch: 1.18, rate: 0.95 } };
    if (!ja.length) return p;
    var f = { L: null, P: null };
    ja.forEach(function (v) { var g = classify(v); if (g && !f[g]) f[g] = v; });
    if ((!f.L || !f.P) && ja.length >= 2) {
      if (!f.L) f.L = ja[0];
      if (!f.P) f.P = ja.find(function (v) { return v !== f.L; }) || ja[1];
    }
    if (!f.L) f.L = ja[0];
    if (!f.P) f.P = ja[0];
    p.L.voice = f.L; p.P.voice = f.P;
    if (f.L === f.P) { p.L.pitch = 0.75; p.P.pitch = 1.35; }
    return p;
  }

  function load(cb) {
    if (!supported()) { cb(null); return; }
    if (profiles) { cb(profiles); return; }
    if (window.speechSynthesis.getVoices().length > 0) { profiles = build(); cb(profiles); return; }
    var done = false;
    function once() {
      if (done) return;
      done = true;
      window.speechSynthesis.onvoiceschanged = null;
      profiles = build();
      cb(profiles);
    }
    window.speechSynthesis.onvoiceschanged = once;
    setTimeout(once, 300);
  }

  function cancel() {
    token++;
    if (supported()) window.speechSynthesis.cancel();
  }

  // Ucapkan satu baris {jp, gender}. cb dipanggil sekali saat selesai, error, atau dibatalkan.
  function speakLine(line, speed, cb) {
    if (!supported()) { if (cb) cb(false); return; }
    var my = ++token;
    window.speechSynthesis.cancel();
    load(function (p) {
      if (my !== token) { return; }
      var pr = (p && p[line.gender]) || null;
      var u = new SpeechSynthesisUtterance(line.jp);
      u.lang = "ja-JP";
      if (pr && pr.voice) u.voice = pr.voice;
      u.pitch = pr ? pr.pitch : 1;
      u.rate = (pr ? pr.rate : 0.92) * (speed || 1);
      var fin = false;
      function end(ok) { if (fin) return; fin = true; if (my === token && cb) cb(ok); }
      u.onend = function () { end(true); };
      u.onerror = function () { end(false); };
      window.speechSynthesis.speak(u);
    });
  }

  // Ucapkan banyak baris berurutan. hooks: {onLine(i), onDone()}. Mengembalikan {stop()}.
  function speakLines(lines, speed, hooks) {
    hooks = hooks || {};
    if (!supported()) { if (hooks.onDone) hooks.onDone(false); return { stop: function () {} }; }
    var my = ++token;
    window.speechSynthesis.cancel();
    var stopped = false;
    load(function (p) {
      if (my !== token || stopped) return;
      var i = 0;
      (function next() {
        if (my !== token || stopped) return;
        if (i >= lines.length) { if (hooks.onDone) hooks.onDone(true); return; }
        var line = lines[i], idx = i;
        var pr = (p && p[line.gender]) || null;
        var u = new SpeechSynthesisUtterance(line.jp);
        u.lang = "ja-JP";
        if (pr && pr.voice) u.voice = pr.voice;
        u.pitch = pr ? pr.pitch : 1;
        u.rate = (pr ? pr.rate : 0.92) * (speed || 1);
        var fin = false;
        function adv() { if (fin) return; fin = true; i++; next(); }
        u.onend = adv; u.onerror = adv;
        if (hooks.onLine) hooks.onLine(idx);
        window.speechSynthesis.speak(u);
      })();
    });
    return { stop: function () { stopped = true; if (my === token) cancel(); } };
  }

  // Diagnostik: daftar suara Jepang di perangkat.
  function check(cb) {
    if (!supported()) { cb({ supported: false, ja: [], profiles: null }); return; }
    load(function (p) {
      var ja = window.speechSynthesis.getVoices().filter(function (v) { return (v.lang || "").toLowerCase().indexOf("ja") === 0; });
      cb({ supported: true, ja: ja, profiles: p });
    });
  }

  window.NihongoTTS = { supported: supported, load: load, cancel: cancel, speakLine: speakLine, speakLines: speakLines, check: check };
})();
