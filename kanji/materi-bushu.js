/* Materi Bushu (部首) untuk Kuis Kanji Metode Bushu - Qategori.
   Modul mandiri: dimuat saat tab "Materi bushu" dibuka.
   Pemakaian: window.KBQ_MATERI.mount(hostElement, { DB: DB, jump: function(q){...}, home: '<html tombol kembali>' })
   Semua daftar (bushu, kanji contoh, bagian bunyi) dihitung dari DB yang sama dengan tab lain. */
(function () {
  "use strict";

  var MIN_KANJI = 1;                 // tampilkan semua bushu yang benar-benar dipakai (>= 1 kanji di data)
  var LV = ["N5", "N4", "N3", "N2", "N1"];

  var POS = [
    { key: "hen", id: "kiri", jp: "偏", ro: "hen", name: "Kiri", pos: "kiri (hen)",
      d: "Bushu berada di sisi kiri. Posisi paling umum: lebih dari separuh kanji yang posisi bushunya tercatat memakainya.",
      svg: '<rect x="2" y="2" width="22" height="48"/>' },
    { key: "tsukuri", id: "kanan", jp: "旁", ro: "tsukuri", name: "Kanan", pos: "kanan (tsukuri)",
      d: "Bushu berada di sisi kanan. Sering dipakai oleh 刂 (pisau) dan 攵 (tindakan).",
      svg: '<rect x="28" y="2" width="22" height="48"/>' },
    { key: "kanmuri", id: "atas", jp: "冠", ro: "kanmuri", name: "Atas", pos: "atas (kanmuri)",
      d: "Bushu berada di atas, seperti topi atau atap. Contoh: 宀 (atap), 艹 (tumbuhan), 雨 (hujan).",
      svg: '<rect x="2" y="2" width="48" height="20"/>' },
    { key: "ashi", id: "bawah", jp: "脚", ro: "ashi", name: "Bawah", pos: "bawah (ashi)",
      d: "Bushu berada di bawah, seperti kaki atau penopang. Contoh: 心 (hati), 皿 (piring), 灬 (api).",
      svg: '<rect x="2" y="30" width="48" height="20"/>' },
    { key: "kamae", id: "kurung", jp: "構", ro: "kamae", name: "Mengurung", pos: "mengurung bagian lain (kamae)",
      d: "Bushu membungkus bagian lain dari beberapa sisi. Contoh: 囗 (kotak), 門 (gerbang).",
      svg: '<path fill-rule="evenodd" d="M2 2h48v48H2z M14 14v24h24V14z"/>' },
    { key: "tare", id: "tare", jp: "垂", ro: "tare", name: "Menggantung dari kiri atas", pos: "menggantung dari kiri atas (tare)",
      d: "Bushu mulai dari atas lalu turun ke sisi kiri, bagian lain berada di bawah dan kanannya. Contoh: 广 (bangunan), 疒 (penyakit), 尸.",
      svg: '<path d="M2 2h48v14H16v34H2z"/>' },
    { key: "nyou", id: "nyou", jp: "繞", ro: "nyou", name: "Membungkus dari kiri bawah", pos: "membungkus dari kiri bawah (nyou)",
      d: "Bushu mulai dari kiri lalu menyapu ke bawah, bagian lain berada di atas kanannya. Contoh: 辶 (jalan, bergerak).",
      svg: '<path d="M2 2h14v34h34v14H2z"/>' }
  ];

  // Bentuk asal / pasangan bentuk lain (bushu yang berubah rupa saat menjadi hen/kanmuri).
  var ASAL = { "氵": "水", "忄": "心", "扌": "手", "艹": "草", "亻": "人", "犭": "犬", "辶": "辵", "礻": "示", "衤": "衣", "刂": "刀", "灬": "火", "王": "玉" };
  var ASAL_NAME = { "kozatohen": "阜", "oozato": "邑", "nikuzuki": "肉" };

  // Bushu yang mirip dan sering tertukar. Contoh kanji diperiksa terhadap data; yang tidak ada akan dilewati.
  var MIRIP = [
    { t: "氵 dan 冫", rows: [["氵 sanzui", "air, tiga titik", "海 泳 池"], ["冫 nisui", "es, dingin, dua titik", "冷 冬 次"]], tip: "Tiga titik berarti air, dua titik berarti es atau dingin." },
    { t: "衤 dan 礻", rows: [["衤 koromohen", "pakaian, 5 goresan", "初 複 補"], ["礻 shimesuhen", "dewa, upacara, 4 goresan", "社 神 礼"]], tip: "衤 punya satu goresan miring lebih banyak. Yang berhubungan dengan kain memakai 衤, yang berhubungan dengan dewa memakai 礻." },
    { t: "月 bulan dan 月 daging", rows: [["月 tsuki", "bulan, waktu", "明 朝 期"], ["月 nikuzuki", "daging, bagian tubuh", "肺 腕 脳"]], tip: "Bentuknya sama. Kalau artinya tentang tubuh (paru, lengan, otak), itu 月 daging. Kalau tentang waktu atau cahaya, itu 月 bulan." },
    { t: "阝 di kiri dan 阝 di kanan", rows: [["阝 kozatohen (kiri)", "bukit, tangga", "院 階 陽"], ["阝 oozato (kanan)", "kota, desa", "都 部 郵"]], tip: "Di kiri berarti bukit, di kanan berarti kota. Bentuknya sama, yang membedakan hanya letaknya." },
    { t: "日 dan 曰", rows: [["日 hi", "matahari, hari", "時 星 暗"], ["曰 iwaku", "berkata, lebih lebar", "書 曲"]], tip: "日 lebih tinggi daripada lebar, 曰 lebih lebar daripada tinggi." },
    { t: "土 dan 士", rows: [["土 tsuchi", "tanah, garis bawah lebih panjang", "地 場 坂"], ["士 samurai", "pria, garis atas lebih panjang", "声 売 志"]], tip: "Lihat garis mana yang paling panjang: bawah untuk 土, atas untuk 士." },
    { t: "刂 dan 力", rows: [["刂 rittou", "pisau, selalu di kanan", "別 前 利"], ["力 chikara", "tenaga", "助 動 勉"]], tip: "刂 berbentuk dua garis tegak dan hampir selalu di kanan. 力 satu bentuk utuh." },
    { t: "亻, 彳, dan 犭", rows: [["亻 ninben", "orang", "休 何 作"], ["彳 gyouninben", "melangkah, jalan", "後 待 役"], ["犭 kemonohen", "hewan, anjing", "猫 独 犯"]], tip: "亻 dua goresan berbentuk orang, 彳 tiga goresan bersusun (melangkah), 犭 tiga goresan dengan lengkungan seperti hewan." }
  ];

  var SEC = [
    ["intro", "Pengantar"], ["posisi", "7 posisi"], ["katalog", "Katalog bushu"],
    ["mirip", "Bushu mirip"], ["bunyi", "Bagian bunyi"], ["latih", "Latihan"]
  ];

  var CSS = '' +
    '#kuis-kanji .mb-chips{margin-bottom:14px}' +
    '#kuis-kanji .mb-h3{font-size:1rem;font-weight:700;margin:18px 0 8px;line-height:1.3}' +
    '#kuis-kanji .mb-box{padding:12px 14px;border:1px solid var(--k-bd);border-radius:var(--k-r);background:var(--k-alt);margin-bottom:12px}' +
    '#kuis-kanji .mb-tip{padding:10px 12px;border-radius:var(--k-br);background:var(--k-tint);font-size:.9rem;margin:8px 0 0}' +
    '#kuis-kanji .mb-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:10px}' +
    '#kuis-kanji .mb-pos{display:flex;gap:12px;align-items:flex-start;padding:12px;border:1px solid var(--k-bd);border-radius:var(--k-r);background:var(--k-alt)}' +
    '#kuis-kanji .mb-pos svg{flex:none;width:56px;height:56px}' +
    '#kuis-kanji .mb-pos svg .fr{fill:none;stroke:currentColor;stroke-width:1.5;opacity:.4}' +
    '#kuis-kanji .mb-pos svg .hl{fill:var(--k-link);opacity:.85}' +
    '#kuis-kanji .mb-pos b{display:block;font-size:.95rem}' +
    '#kuis-kanji .mb-pos p{margin:2px 0 6px;font-size:.85rem;opacity:.85}' +
    '#kuis-kanji .mb-ex{font-size:1.15rem;letter-spacing:.06em}' +
    '#kuis-kanji .mb-ex small{font-size:.72rem;opacity:.65;letter-spacing:0;margin-left:2px}' +
    '#kuis-kanji .mb-big{font-size:2.4rem;line-height:1.1;min-width:2.6rem;text-align:center}' +
    '#kuis-kanji details.mb-rad{border:1px solid var(--k-bd);border-radius:var(--k-r);background:var(--k-alt);margin-bottom:8px}' +
    '#kuis-kanji details.mb-rad>summary{list-style:none;cursor:pointer;display:flex;gap:12px;align-items:center;padding:10px 12px}' +
    '#kuis-kanji details.mb-rad>summary::-webkit-details-marker{display:none}' +
    '#kuis-kanji details.mb-rad>summary::after{content:"+";margin-left:auto;opacity:.55;font-size:1.2rem;line-height:1}' +
    '#kuis-kanji details.mb-rad[open]>summary::after{content:"\\2212"}' +
    '#kuis-kanji .mb-sum{min-width:0;flex:1}' +
    '#kuis-kanji .mb-sum b{display:block;line-height:1.3}' +
    '#kuis-kanji .mb-sum span{display:block;font-size:.8125rem;opacity:.7}' +
    '#kuis-kanji .mb-no{font-size:.75rem;opacity:.55;min-width:1.6rem;text-align:right}' +
    '#kuis-kanji .mb-body{padding:0 12px 12px}' +
    '#kuis-kanji .mb-kv{display:flex;flex-wrap:wrap;gap:6px;margin:6px 0 10px}' +
    '#kuis-kanji .mb-k{display:inline-flex;align-items:baseline;gap:5px;padding:5px 10px;border:1px solid var(--k-bd);border-radius:99px;font-size:.85rem;background:transparent}' +
    '#kuis-kanji .mb-k i{font-style:normal;font-size:1.25rem}' +
    '#kuis-kanji .mb-k em{font-style:normal;opacity:.7}' +
    '#kuis-kanji .mb-cmp{display:grid;grid-template-columns:1fr;gap:8px}' +
    '#kuis-kanji .mb-cmp .mb-row{display:flex;gap:12px;align-items:baseline;flex-wrap:wrap}' +
    '#kuis-kanji .mb-cmp .mb-row b{min-width:9.5rem}' +
    '#kuis-kanji .mb-cmp .mb-row span{opacity:.75;font-size:.9rem}' +
    '#kuis-kanji .mb-cmp .mb-row .mb-ex{margin-left:auto}' +
    '#kuis-kanji .mb-fon{padding:12px 14px;border:1px solid var(--k-bd);border-radius:var(--k-r);background:var(--k-alt);margin-bottom:10px}' +
    '#kuis-kanji .mb-fon .hd{display:flex;gap:12px;align-items:center;margin-bottom:6px}' +
    '#kuis-kanji .mb-sc{font-size:1.9rem;font-weight:700;color:var(--k-link);margin:6px 0}' +
    '#kuis-kanji .mb-find{display:flex;gap:6px;margin-bottom:12px}' +
    '#kuis-kanji .mb-find input{flex:1;min-width:0;margin:0;padding:10px 12px;border:1px solid var(--k-bd);border-radius:var(--k-br);font:inherit;color:inherit;background:var(--k-alt)}' +
    '@media (max-width:480px){#kuis-kanji .mb-cmp .mb-row b{min-width:0;flex:1 1 100%}#kuis-kanji .mb-cmp .mb-row .mb-ex{margin-left:0}}';

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function lvIdx(l) { return LV.indexOf(l); }
  function byLevel(a, b) { return lvIdx(a.lv) - lvIdx(b.lv) || a.i - b.i; }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function posKey(p) { var m = /\((\w+)\)/.exec(p || ""); return m ? m[1] : ""; }
  function posName(key) { for (var i = 0; i < POS.length; i++) if (POS[i].key === key) return POS[i]; return null; }

  // ---------- olah data (sekali per DB) ----------
  var cache = null;
  function build(DB) {
    if (cache && cache.n === DB.length) return cache;
    var map = {}, order = [];
    DB.forEach(function (e) {
      if (!e.rc) return;
      var key = e.rc + "|" + e.rn;
      if (!map[key]) { map[key] = { key: key, rc: e.rc, rn: e.rn, rm: e.rm, list: [], posN: {} }; order.push(key); }
      var g = map[key];
      g.list.push(e);
      var pk = posKey(e.pos);
      if (pk) g.posN[pk] = (g.posN[pk] || 0) + 1;
    });
    var groups = order.map(function (k) { return map[k]; }).filter(function (g) { return g.list.length >= MIN_KANJI; });
    groups.sort(function (a, b) { return b.list.length - a.list.length; });
    groups.forEach(function (g, i) {
      g.no = i + 1;
      g.list.sort(byLevel);
      var best = "", n = 0;
      Object.keys(g.posN).forEach(function (p) { if (g.posN[p] > n) { n = g.posN[p]; best = p; } });
      g.pos = best;
      g.asal = ASAL_NAME[g.rn] || ASAL[g.rc] || "";
      g.txt = (g.rc + " " + g.rn + " " + g.rm).toLowerCase();
    });

    // contoh tiap posisi: empat bushu terbanyak di posisi itu, masing-masing kanji level terendah
    var posEx = {};
    POS.forEach(function (p) { posEx[p.key] = { n: 0, ex: [], cnt: {}, first: {} }; });
    DB.slice().sort(byLevel).forEach(function (e) {
      var pk = posKey(e.pos);
      if (!pk || !posEx[pk]) return;
      var o = posEx[pk];
      o.n++;
      o.cnt[e.rc] = (o.cnt[e.rc] || 0) + 1;
      if (!o.first[e.rc]) o.first[e.rc] = e;
    });
    POS.forEach(function (p) {
      var o = posEx[p.key];
      o.ex = Object.keys(o.cnt).sort(function (a, b) { return o.cnt[b] - o.cnt[a]; }).slice(0, 4).map(function (rc) { return o.first[rc]; });
    });

    // bagian bunyi: komponen yang berulang pada kanji berbunyi sama
    var fon = {};
    DB.forEach(function (e) {
      var m = /Bagian bunyi \(fonetik\):\s*(\S+)/.exec(e.note || "");
      if (!m || !e.on.length) return;
      var c = m[1];
      if (c === e.k) return;
      (fon[c] = fon[c] || []).push(e);
    });
    var fonList = [];
    Object.keys(fon).forEach(function (c) {
      var arr = fon[c];
      if (arr.length < 4) return;
      var cnt = {};
      arr.forEach(function (e) { e.on.forEach(function (r) { cnt[r] = (cnt[r] || 0) + 1; }); });
      var br = "", bn = 0;
      Object.keys(cnt).forEach(function (r) { if (cnt[r] > bn) { bn = cnt[r]; br = r; } });
      if (bn / arr.length < 0.75) return;
      fonList.push({ c: c, arr: arr.sort(byLevel), r: br, n: bn });
    });
    fonList.sort(function (a, b) { return b.arr.length - a.arr.length || b.n / b.arr.length - a.n / a.arr.length; });

    var has = {};
    DB.forEach(function (e) { has[e.k] = e; });

    cache = { n: DB.length, all: DB, groups: groups, posEx: posEx, fon: fonList, has: has };
    return cache;
  }

  // cari kanji di DB (bukan bushu) untuk pesan "tidak ketemu" yang lebih berguna
  function findKanji(C, raw, q) {
    if (!raw) return null;
    if (C.has[raw]) return C.has[raw];
    var hit = null;
    C.all.some(function (e) {
      if (e.k === raw || (e.rd && e.rd.indexOf(raw) >= 0) || (e.arti && e.arti.toLowerCase().indexOf(q) >= 0)) { hit = e; return true; }
      return false;
    });
    return hit;
  }

  // ---------- bagian-bagian ----------
  function secIntro(C) {
    var wb = 0;
    C.groups.forEach(function (g) { wb += g.list.length; });
    return '<div class="mb-box"><p><b lang="ja">部首 (bushu)</b> adalah bagian kanji yang dipakai kamus untuk mengelompokkan kanji. Sistem klasiknya punya 214 bushu. Bagi pelajar, bushu berguna sebagai <b>petunjuk arti</b>: kalau kamu mengenali bushunya, kamu sudah bisa menebak kanji itu berurusan dengan apa.</p>' +
      '<p style="margin:0">Contoh: <span lang="ja">氵</span> (sanzui) berarti air, jadi <span lang="ja">海</span> (umi, laut), <span lang="ja">泳</span> (oyogu, berenang), dan <span lang="ja">池</span> (ike, kolam) semuanya berhubungan dengan air.</p></div>' +
      '<div class="mb-h3">Tiga cara memakai bushu</div>' +
      '<div class="mb-box"><p><b>1. Menebak arti.</b> Cari bushunya, lihat artinya, lalu tebak kategori kanji itu.</p>' +
      '<p><b>2. Menebak bacaan.</b> Banyak kanji punya satu bagian yang memberi bunyi. Contoh <span lang="ja">校</span> (kou) = <span lang="ja">木</span> + <span lang="ja">交</span> (kou), dan <span lang="ja">清</span> (sei) = <span lang="ja">氵</span> + <span lang="ja">青</span> (sei).</p>' +
      '<p style="margin:0"><b>3. Mengingat.</b> Kanji dipecah menjadi bagian yang sudah dikenal. Contoh <span lang="ja">休</span> (kyuu, istirahat) = <span lang="ja">亻</span> (orang) + <span lang="ja">木</span> (pohon): orang bersandar di pohon.</p></div>' +
      '<div class="mb-tip">Bushu hanya petunjuk, bukan aturan pasti. Arti sebuah kanji bisa bergeser jauh dari arti bushunya, jadi selalu cocokkan dengan arti kanjinya.</div>' +
      '<div class="mb-h3">Isi tab ini</div>' +
      '<p style="margin:0">Katalog memuat <b>' + C.groups.length + ' bushu</b>, yaitu semua bentuk yang benar-benar dipakai sebagai bagian kanji lain di data ini (total ' + wb.toLocaleString("id-ID") + ' kanji), diurutkan dari yang paling banyak dipakai. Kanji yang tidak pernah dipakai sebagai bushu kanji lain (misalnya <span lang="ja">円</span>) tidak masuk katalog ini, tapi tetap bisa dicari di tab Asal-usul kanji. Bagian lain: tujuh posisi bushu, bushu yang mirip, bagian bunyi, dan latihan cepat.</p>';
  }

  function secPosisi(C) {
    var h = '<p>Letak bushu di dalam kanji dibagi menjadi tujuh jenis. Kotak berwarna menunjukkan daerah yang ditempati bushu.</p><div class="mb-grid">';
    POS.forEach(function (p) {
      var o = C.posEx[p.key];
      var ex = o.ex.map(function (e) { return '<span class="mb-ex" lang="ja">' + esc(e.k) + "<small>" + esc(e.rc) + "</small></span>"; }).join(" ");
      h += '<div class="mb-pos"><svg viewBox="0 0 52 52" aria-hidden="true"><rect class="fr" x="1" y="1" width="50" height="50" rx="3"/><g class="hl">' + p.svg + '</g></svg>' +
        '<div><b>' + p.name + ' · <span lang="ja">' + p.jp + '</span> (' + p.ro + ')</b><p>' + p.d + '</p>' +
        '<p style="opacity:.65;font-size:.78rem;margin:0 0 4px">' + o.n.toLocaleString("id-ID") + ' kanji di data</p>' + ex + '</div></div>';
    });
    return h + "</div>";
  }

  function radHtml(g) {
    var p = posName(g.pos);
    var ex = g.list.slice(0, 8).map(function (e) {
      return '<span class="mb-k"><i lang="ja">' + esc(e.k) + "</i><em>" + esc(e.arti.split(",")[0]) + "</em></span>";
    }).join("");
    return '<details class="mb-rad" data-g="' + g.no + '"><summary><span class="mb-no">' + g.no + '</span><span class="mb-big" lang="ja">' + esc(g.rc) + '</span>' +
      '<span class="mb-sum"><b>' + esc(g.rn) + '</b><span>' + esc(g.rm) + ' · ' + g.list.length + ' kanji' + (p ? ' · ' + p.name.toLowerCase() : '') + '</span></span></summary>' +
      '<div class="mb-body">' +
      (g.asal ? '<p class="kbq-note" style="margin:0 0 4px">Bentuk asal: <span lang="ja">' + esc(g.asal) + '</span></p>' : '') +
      (p ? '<p class="kbq-note" style="margin:0">Paling sering di posisi ' + esc(p.pos) + '.</p>' : '') +
      '<div class="mb-kv">' + ex + '</div>' +
      '<div class="kbq-row"><button type="button" class="kbq-btn" data-mb="jump" data-t="asal" data-v="' + esc(g.rc) + '">Lihat semua kanji ber-<span lang="ja">' + esc(g.rc) + '</span></button>' +
      '<button type="button" class="kbq-btn alt" data-mb="jump" data-t="kartu" data-v="' + esc(g.rc) + '">Jadikan kartu hapalan</button></div></div></details>';
  }

  function secKatalog(C, st) {
    var chips = '<div class="kbq-chips mb-chips"><button type="button" class="kbq-chip' + (st.pos === "" ? " on" : "") + '" data-mb="pos" data-v="">Semua</button>';
    POS.forEach(function (p) { chips += '<button type="button" class="kbq-chip' + (st.pos === p.key ? " on" : "") + '" data-mb="pos" data-v="' + p.key + '">' + p.name.split(" ")[0] + '</button>'; });
    chips += "</div>";
    return '<p>' + C.groups.length + ' bushu, diurutkan menurut jumlah kanji di data. Ketuk satu bushu untuk melihat contoh kanji dan tombol ke kartu hapalan.</p>' +
      '<div class="mb-find"><input type="search" placeholder="Cari bushu, atau tempel kanji/arti yang kamu cari" value="' + esc(st.q) + '" data-mb="find" aria-label="Cari bushu"></div>' +
      chips + '<div id="mb-list"></div>';
  }
  function fillKatalog(host, C, st) {
    var raw = st.q.trim(), q = raw.toLowerCase(), out = "", n = 0;
    C.groups.forEach(function (g) {
      if (st.pos && g.pos !== st.pos) return;
      if (q && g.txt.indexOf(q) < 0) return;
      n++;
      out += radHtml(g);
    });
    var box = host.querySelector("#mb-list");
    if (!box) return;
    if (n) { box.innerHTML = out; return; }
    var hit = q ? findKanji(C, raw, q) : null;
    if (hit) {
      box.innerHTML = '<p><span lang="ja">' + esc(raw) + '</span> bukan bushu &mdash; tidak dipakai sebagai bagian kanji lain di data ini, tapi ada kanji <span lang="ja">' + esc(hit.k) + '</span> (' + esc(hit.arti) + ') yang cocok. Lihat di <button type="button" class="kbq-sm" data-mb="jump" data-t="asal" data-v="' + esc(hit.k) + '">Asal-usul kanji</button> atau <button type="button" class="kbq-sm" data-mb="jump" data-t="kartu" data-v="' + esc(hit.k) + '">Kartu hapalan</button>.</p>';
    } else {
      box.innerHTML = '<p>Tidak ada bushu yang cocok' + (raw ? ' dengan "' + esc(raw) + '"' : "") + '.</p>';
    }
  }

  function secMirip(C) {
    var h = '<p>Beberapa bushu bentuknya hampir sama. Pasangan di bawah paling sering tertukar.</p>';
    MIRIP.forEach(function (m) {
      h += '<div class="mb-box"><div class="mb-h3" style="margin-top:0" lang="ja">' + esc(m.t) + '</div><div class="mb-cmp">';
      m.rows.forEach(function (r) {
        var ex = r[2].split(" ").filter(function (k) { return C.has[k]; });
        h += '<div class="mb-row"><b lang="ja">' + esc(r[0]) + '</b><span>' + esc(r[1]) + '</span><span class="mb-ex" lang="ja">' + ex.map(esc).join(" ") + '</span></div>';
      });
      h += '</div><div class="mb-tip">' + esc(m.tip) + '</div></div>';
    });
    return h;
  }

  function secBunyi(C) {
    var h = '<p>Banyak kanji gabungan terdiri dari satu bagian <b>arti</b> (bushu) dan satu bagian <b>bunyi</b>. Kalau bagian bunyinya sama, bacaan on&#39;yomi kanjinya sering mirip. Daftar ini dihitung dari data: hanya komponen yang memberi bunyi pada minimal 4 kanji dan bacaannya cocok pada minimal 75% anggotanya.</p>';
    C.fon.slice(0, 20).forEach(function (f) {
      h += '<div class="mb-fon"><div class="hd"><span class="mb-big" lang="ja">' + esc(f.c) + '</span><div><b>bunyi umum: ' + esc(f.r) + '</b><br><span class="kbq-note" style="margin:0">' + f.n + ' dari ' + f.arr.length + ' kanji</span></div></div><div class="mb-kv">' +
        f.arr.slice(0, 10).map(function (e) { return '<span class="mb-k"><i lang="ja">' + esc(e.k) + '</i><em>' + esc(e.on.join(", ")) + '</em></span>'; }).join("") + '</div></div>';
    });
    return h + '<div class="mb-tip">Pola ini membantu menebak, bukan menjamin. Selalu cek bacaan yang sebenarnya.</div>';
  }

  // ---------- latihan ----------
  function makeQuiz(C) {
    var qs = [], gs = C.groups;
    var kanjiPool = [];
    gs.forEach(function (g) { g.list.forEach(function (e) { if (lvIdx(e.lv) <= 2) kanjiPool.push({ e: e, g: g }); }); });
    function label(g) { return g.rc + " " + g.rn + " (" + g.rm + ")"; }
    function opts(correct, all, f) {
      var seen = {}, out = [correct], k = f(correct);
      seen[k] = 1;
      shuffle(all).forEach(function (x) { var v = f(x); if (out.length < 4 && !seen[v]) { seen[v] = 1; out.push(x); } });
      return shuffle(out);
    }
    var i, t;
    for (i = 0; i < 8; i++) {
      t = shuffle(kanjiPool)[0];
      if (i % 2 === 0) {
        var os = opts(t.g, gs, label);
        qs.push({ q: 'Bushu apa yang ada di kanji <span lang="ja">' + esc(t.e.k) + "</span> (" + esc(t.e.arti) + ")?", o: os.map(label), a: os.indexOf(t.g),
          x: t.e.k + " (" + t.e.arti + ") memakai bushu " + label(t.g) + "." });
      } else {
        var g = shuffle(gs.slice(0, 40))[0];
        var os2 = opts(g, gs, function (x) { return x.rm; });
        qs.push({ q: 'Apa arti bushu <span lang="ja">' + esc(g.rc) + "</span> (" + esc(g.rn) + ")?", o: os2.map(function (x) { return x.rm; }), a: os2.indexOf(g),
          x: g.rc + " " + g.rn + " berarti " + g.rm + ". Contoh: " + g.list.slice(0, 3).map(function (e) { return e.k; }).join(" ") + "." });
      }
    }
    return qs;
  }
  function secLatih(C, st) {
    if (!st.qz) st.qz = { qs: makeQuiz(C), i: 0, s: 0, p: -1 };
    var z = st.qz;
    if (z.i >= z.qs.length) {
      return '<div class="mb-box" style="text-align:center"><div class="mb-sc">' + z.s + " / " + z.qs.length + '</div><p>Latihan selesai.</p><button type="button" class="kbq-btn" data-mb="again">Ulangi dengan soal baru</button></div>';
    }
    var q = z.qs[z.i], h = '<div class="kbq-meta"><span>Soal ' + (z.i + 1) + " dari " + z.qs.length + '</span><span>Skor ' + z.s + '</span></div><div class="kbq-bar"><i style="width:' + (z.i / z.qs.length * 100) + '%"></i></div>' +
      '<div class="kbq-q">' + q.q + '</div>';
    q.o.forEach(function (o, j) {
      var cls = "kbq-opt";
      if (z.p >= 0) { if (j === q.a) cls += " ok"; else if (j === z.p) cls += " no"; }
      h += '<button type="button" class="' + cls + '"' + (z.p >= 0 ? " disabled" : "") + ' data-mb="ans" data-v="' + j + '" lang="ja">' + esc(o) + "</button>";
    });
    if (z.p >= 0) h += '<div class="kbq-exp">' + esc(q.x) + '</div><button type="button" class="kbq-btn" data-mb="next">' + (z.i + 1 >= z.qs.length ? "Lihat skor" : "Soal berikutnya") + "</button>";
    return h;
  }

  // ---------- mount ----------
  var state = { sec: "intro", pos: "", q: "", qz: null };

  function mount(host, ctx) {
    if (!document.getElementById("mb-css")) {
      var st0 = document.createElement("style");
      st0.id = "mb-css"; st0.textContent = CSS;
      document.head.appendChild(st0);
    }
    var C = build(ctx.DB);
    host._mbCtx = ctx;
    if (ctx.open) { state.sec = "katalog"; state.q = ctx.open; state.pos = ""; } // tautan dalam: ?tab=materi&bushu=氵
    if (!host._mbBound) {
      host._mbBound = true;
      host.addEventListener("click", function (ev) {
        var t = ev.target;
        while (t && t !== host && !(t.getAttribute && t.getAttribute("data-mb"))) t = t.parentNode;
        if (!t || t === host) return;
        var a = t.getAttribute("data-mb"), v = t.getAttribute("data-v"), c = host._mbCtx;
        if (a === "sec") { state.sec = v; draw(host); }
        else if (a === "pos") { state.pos = v; draw(host); }
        else if (a === "jump") { if (c.jump) c.jump(v, t.getAttribute("data-t")); }
        else if (a === "ans") { if (state.qz && state.qz.p < 0) { var z = state.qz; z.p = +v; if (+v === z.qs[z.i].a) z.s++; draw(host); } }
        else if (a === "next") { state.qz.i++; state.qz.p = -1; draw(host); }
        else if (a === "again") { state.qz = null; draw(host); }
      });
      host.addEventListener("input", function (ev) {
        var t = ev.target;
        if (t && t.getAttribute && t.getAttribute("data-mb") === "find") { state.q = t.value; fillKatalog(host, build(host._mbCtx.DB), state); }
      });
    }
    draw(host);
    if (ctx.open) {
      var d0 = host.querySelector("#mb-list details");
      if (d0) { d0.open = true; try { d0.scrollIntoView({ block: "center" }); } catch (e) {} }
      ctx.open = null;
    }
  }

  function draw(host) {
    var ctx = host._mbCtx, C = build(ctx.DB), h = (ctx.home || "") + "<h2>Materi bushu (部首)</h2>";
    h += '<div class="kbq-chips mb-chips">';
    SEC.forEach(function (s) { h += '<button type="button" class="kbq-chip' + (state.sec === s[0] ? " on" : "") + '" data-mb="sec" data-v="' + s[0] + '">' + s[1] + "</button>"; });
    h += "</div>";
    if (state.sec === "intro") h += secIntro(C);
    else if (state.sec === "posisi") h += secPosisi(C);
    else if (state.sec === "katalog") h += secKatalog(C, state);
    else if (state.sec === "mirip") h += secMirip(C);
    else if (state.sec === "bunyi") h += secBunyi(C);
    else h += secLatih(C, state);
    host.innerHTML = h;
    if (state.sec === "katalog") fillKatalog(host, C, state);
  }

  window.KBQ_MATERI = { mount: mount, _build: build };
})();
