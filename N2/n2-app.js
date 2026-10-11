// ===================================================================
// Qategori Nihongo - N2 App Logic
// ===================================================================
(function(){
  "use strict";

  var ARCHIVE_KEY = "n2_kotoba_archived_v1";

  function loadArchived(){
    try{
      var raw = localStorage.getItem(ARCHIVE_KEY);
      return raw ? JSON.parse(raw) : [];
    }catch(e){ return []; }
  }
  function saveArchived(list){
    try{ localStorage.setItem(ARCHIVE_KEY, JSON.stringify(list)); }catch(e){}
  }
  function wordKey(w){ return w.kanji + "|" + w.kana; }

  var archived = loadArchived();

  function isArchived(w){ return archived.indexOf(wordKey(w)) !== -1; }
  function archiveWord(w){
    if(!isArchived(w)){ archived.push(wordKey(w)); saveArchived(archived); }
  }
  function unarchiveWord(w){
    var k = wordKey(w);
    var idx = archived.indexOf(k);
    if(idx !== -1){ archived.splice(idx,1); saveArchived(archived); }
  }

  // ===================== TAB SWITCHING =====================
  var tabs = document.querySelectorAll("#n2app .n2-tab");
  var panels = document.querySelectorAll("#n2app .n2-panel");
  tabs.forEach(function(tab){
    tab.addEventListener("click", function(){
      tabs.forEach(function(t){ t.classList.remove("active"); });
      panels.forEach(function(p){ p.classList.remove("active"); });
      tab.classList.add("active");
      document.getElementById("panel-" + tab.dataset.panel).classList.add("active");
    });
  });

  // ===================== FAVORIT =====================
  var FAV_KEY = "n2_kotoba_fav_v1";
  function loadFav(){
    try{ var raw = localStorage.getItem(FAV_KEY); var a = raw ? JSON.parse(raw) : []; return Array.isArray(a) ? a : []; }catch(e){ return []; }
  }
  var favs = loadFav();
  function isFav(w){ return favs.indexOf(wordKey(w)) !== -1; }
  function toggleFav(w){
    favs = loadFav();
    var k = wordKey(w), i = favs.indexOf(k);
    if(i === -1) favs.push(k); else favs.splice(i,1);
    try{ localStorage.setItem(FAV_KEY, JSON.stringify(favs)); }catch(e){}
  }
  var FAV_SVG = "<svg class=\"off\" viewBox=\"0 0 24 24\"><path d=\"M16.82 2H7.18C5.05 2 3.32 3.74 3.32 5.86V19.95C3.32 21.75 4.61 22.51 6.19 21.64L11.07 18.93C11.59 18.64 12.43 18.64 12.94 18.93L17.82 21.64C19.4 22.52 20.69 21.76 20.69 19.95V5.86C20.68 3.74 18.95 2 16.82 2Z\"/></svg>" +
    "<svg class=\"on\" viewBox=\"0 0 24 24\"><path d=\"M16.82 1.91H7.18C5.06 1.91 3.32 3.65 3.32 5.77V19.86C3.32 21.66 4.61 22.42 6.19 21.55L11.07 18.84C11.59 18.55 12.43 18.55 12.94 18.84L17.82 21.55C19.4 22.43 20.69 21.67 20.69 19.86V5.77C20.68 3.65 18.95 1.91 16.82 1.91Z\"/></svg>";
  function escH(s){ return String(s == null ? "" : s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }

  // ===================== KARTU HAPALAN =====================
  var KOTOBA = window.N2_KOTOBA || [];
  var kategoriList = [];
  KOTOBA.forEach(function(w){ if(kategoriList.indexOf(w.kat) === -1) kategoriList.push(w.kat); });

  var kartuKategoriSel = document.getElementById("kartuKategori");
  var optAll = document.createElement("option");
  optAll.value = ""; optAll.textContent = "Semua kategori";
  kartuKategoriSel.appendChild(optAll);
  kategoriList.forEach(function(k){
    var o = document.createElement("option"); o.value = k; o.textContent = k;
    kartuKategoriSel.appendChild(o);
  });

  // ---------- RENCANA HAPALAN (urut prioritas, bukan kategori) ----------
  // Prioritas = kelompok kategori. Tiap kelompok diacak-selang antar kategori
  // supaya satu hari berisi campuran (kata kerja + sifat + benda), bukan satu kategori saja.
  var TIER = [
    [
      "Kata Kerja",
      "Kata Kerja Majemuk",
      "Kata Sifat -i",
      "Kata Sifat -na",
      "Kata Keterangan",
      "Kata Sambung",
      "Abstrak & Akademis",
      "Nomina Umum"
    ],
    [
      "Bisnis & Ekonomi",
      "Sosial & Politik",
      "Media & Teknologi",
      "Kata Majemuk & Sufiks",
      "Ungkapan & Idiom",
      "Idiom",
      "Onomatope",
      "Kata Serapan"
    ],
    [
      "Medis & Kesehatan",
      "Sains & Lingkungan",
      "Hukum & Kriminal",
      "Pendidikan & Budaya"
    ]
  ];
  var TIER_NAME = ["Inti (sering muncul)", "Pendukung", "Tambahan"];
  var PRIO = [];      // kata urut prioritas
  var PRIO_TIER = []; // tier tiap kata (sejajar dengan PRIO)
  (function(){
    var seen = {};
    TIER.forEach(function(cats, ti){
      var lists = cats.map(function(c){ return KOTOBA.filter(function(w){ return w.kat === c; }); });
      var more = true, r = 0;
      while(more){
        more = false;
        lists.forEach(function(l){ if(r < l.length){ PRIO.push(l[r]); PRIO_TIER.push(ti); more = true; } });
        r++;
      }
      cats.forEach(function(c){ seen[c] = 1; });
    });
    // kategori yang tak terdaftar di atas masuk tier terakhir
    var rest = KOTOBA.filter(function(w){ return !seen[w.kat]; });
    rest.forEach(function(w){ PRIO.push(w); PRIO_TIER.push(2); });
  })();

  var PLAN_KEY = "n2_plan_v1";
  function todayStr(){ var d = new Date(); return d.getFullYear() + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" + ("0"+d.getDate()).slice(-2); }
  function loadPlan(){
    try{ var p = JSON.parse(localStorage.getItem(PLAN_KEY) || "null"); if(p && (p.dur === 30 || p.dur === 60)) return p; }catch(e){}
    return {dur: 30, start: todayStr(), day: 1, src: "kat"};
  }
  function savePlan(){ try{ localStorage.setItem(PLAN_KEY, JSON.stringify(plan)); }catch(e){} }
  var plan = loadPlan();
  function perDay(){ return Math.ceil(PRIO.length / plan.dur); }
  function dayWords(d){ var n = perDay(); return PRIO.slice((d-1)*n, d*n); }
  function todayNo(){
    var a = new Date(plan.start + "T00:00:00"), b = new Date(todayStr() + "T00:00:00");
    var n = Math.round((b - a) / 86400000) + 1;
    return Math.max(1, Math.min(plan.dur, isNaN(n) ? 1 : n));
  }

  var srcBtns = document.querySelectorAll("#kartuSrc .n2-seg");
  var katBox = document.getElementById("kartuKatBox");
  var planBox = document.getElementById("kartuPlanBox");
  var planDurSel = document.getElementById("planDur");
  var planDaySel = document.getElementById("planDay");
  var planInfo = document.getElementById("planInfo");

  function renderDayOptions(){
    var n = plan.dur, html = "";
    for(var d = 1; d <= n; d++){
      var ws = dayWords(d), done = 0;
      ws.forEach(function(w){ if(isArchived(w)) done++; });
      html += "<option value=\"" + d + "\">Hari " + d + " · " + done + "/" + ws.length + (done === ws.length && ws.length ? " ✓" : "") + "</option>";
    }
    planDaySel.innerHTML = html;
    if(plan.day > n) plan.day = n;
    planDaySel.value = String(plan.day);
    var ws2 = dayWords(plan.day), tiers = {};
    ws2.forEach(function(w){ var i = PRIO.indexOf(w); tiers[PRIO_TIER[i]] = 1; });
    var names = Object.keys(tiers).map(function(t){ return TIER_NAME[t]; }).join(" + ");
    planInfo.textContent = "Target " + perDay() + " kata/hari · hari ini seharusnya Hari " + todayNo() + " · kelompok: " + names;
  }

  var srcMode = plan.src === "plan" ? "plan" : "kat";
  var deckMode = "belum"; // belum | hapal | fav
  var cardIndex = 0;
  var currentDeck = [];

  function baseSet(){
    if(srcMode === "plan") return dayWords(plan.day);
    var kat = kartuKategoriSel.value;
    return kat ? KOTOBA.filter(function(w){ return w.kat === kat; }) : KOTOBA;
  }
  function inMode(w, mode){
    if(mode === "hapal") return isArchived(w);
    if(mode === "fav") return isFav(w);
    return !isArchived(w);
  }
  function buildDeck(){
    currentDeck = baseSet().filter(function(w){ return inMode(w, deckMode); });
    cardIndex = 0;
  }
  function syncSrcUI(){
    srcBtns.forEach(function(b){ b.classList.toggle("on", b.getAttribute("data-src") === srcMode); });
    katBox.hidden = srcMode === "plan";
    planBox.hidden = srcMode !== "plan";
    if(srcMode === "plan"){ planDurSel.value = String(plan.dur); renderDayOptions(); }
  }

  var flashcardEl = document.getElementById("flashcard");
  var fcKanji = document.getElementById("fcKanji");
  var fcKat = document.getElementById("fcKat");
  var fcKana = document.getElementById("fcKana");
  var fcArti = document.getElementById("fcArti");
  var fcContoh = document.getElementById("fcContoh");
  var kartuCounter = document.getElementById("kartuCounter");
  var kartuStatus = document.getElementById("kartuStatus");
  var kartuBar = document.getElementById("kartuBar");
  var btnHapal = document.getElementById("btnHapal");
  var btnFav = document.getElementById("btnFav");
  var modeChips = document.querySelectorAll("#kartuMode .n2-chip");

  function updateChips(){
    var base = baseSet();
    modeChips.forEach(function(c){
      var m = c.getAttribute("data-mode"), n = 0;
      base.forEach(function(w){ if(inMode(w, m)) n++; });
      c.querySelector(".n2-n").textContent = n;
      c.classList.toggle("on", m === deckMode);
    });
  }
  function emptyMsg(){
    if(deckMode === "hapal") return "Belum ada kata yang ditandai hapal.";
    if(deckMode === "fav") return "Belum ada favorit. Ketuk ikon bookmark di kartu untuk menyimpan.";
    return srcMode === "plan" ? "Semua kata di hari ini sudah hapal. Lanjut ke hari berikutnya!" : "Semua kata di kategori ini sudah hapal.";
  }

  function renderCard(){
    flashcardEl.classList.remove("flipped");
    updateChips();
    var n = currentDeck.length;
    flashcardEl.classList.toggle("n2-empty", n === 0);
    if(n === 0){
      fcKanji.textContent = emptyMsg();
      fcKat.textContent = "";
      fcKana.textContent = ""; fcArti.textContent = ""; fcContoh.innerHTML = "";
      kartuCounter.textContent = "0 / 0";
      kartuStatus.textContent = "";
      kartuBar.style.width = "0%";
      btnHapal.disabled = true;
      btnHapal.textContent = "Tandai hapal";
      btnFav.hidden = true;
      return;
    }
    var w = currentDeck[cardIndex];
    fcKanji.textContent = w.kanji;
    fcKat.textContent = w.kat;
    fcKana.textContent = w.kana + "　(" + w.romaji + ")";
    fcArti.textContent = w.arti;
    fcContoh.innerHTML = w.contohJp ?
      ("<span class=\"jp\">" + escH(w.contohJp) + "</span><span class=\"romaji\">" + escH(w.contohRomaji) + "</span><span class=\"id\">" + escH(w.contohId) + "</span>") : "";
    kartuCounter.textContent = (cardIndex+1) + " / " + n;
    kartuBar.style.width = ((cardIndex+1) / n * 100) + "%";
    var arch = isArchived(w);
    kartuStatus.textContent = arch ? "Sudah hapal" : "";
    btnHapal.disabled = false;
    btnHapal.textContent = arch ? "Batalkan hapal" : "Tandai hapal";
    btnFav.hidden = false;
    var fav = isFav(w);
    btnFav.setAttribute("aria-pressed", fav ? "true" : "false");
    btnFav.setAttribute("aria-label", fav ? "Hapus dari favorit" : "Tandai favorit");
  }

  flashcardEl.addEventListener("click", function(e){
    if(currentDeck.length === 0) return;
    if(e.target.closest && e.target.closest("#btnFav")) return;
    flashcardEl.classList.toggle("flipped");
  });
  document.getElementById("btnNextCard").addEventListener("click", function(){
    if(currentDeck.length === 0) return;
    cardIndex = (cardIndex + 1) % currentDeck.length;
    renderCard();
  });
  document.getElementById("btnPrevCard").addEventListener("click", function(){
    if(currentDeck.length === 0) return;
    cardIndex = (cardIndex - 1 + currentDeck.length) % currentDeck.length;
    renderCard();
  });
  function afterChange(removeFromDeck){
    if(removeFromDeck){
      currentDeck.splice(cardIndex, 1);
      if(cardIndex >= currentDeck.length) cardIndex = 0;
    }
    if(srcMode === "plan") renderDayOptions();
    renderCard();
    renderDaftar();
  }
  btnHapal.addEventListener("click", function(){
    if(currentDeck.length === 0) return;
    var w = currentDeck[cardIndex];
    if(isArchived(w)) unarchiveWord(w); else archiveWord(w);
    afterChange(deckMode !== "fav");
  });
  btnFav.addEventListener("click", function(e){
    e.stopPropagation();
    if(currentDeck.length === 0) return;
    toggleFav(currentDeck[cardIndex]);
    afterChange(deckMode === "fav");
  });
  modeChips.forEach(function(c){
    c.addEventListener("click", function(){
      deckMode = c.getAttribute("data-mode");
      buildDeck(); renderCard();
    });
  });
  kartuKategoriSel.addEventListener("change", function(){ buildDeck(); renderCard(); });
  srcBtns.forEach(function(b){
    b.addEventListener("click", function(){
      srcMode = b.getAttribute("data-src");
      plan.src = srcMode;
      if(srcMode === "plan") plan.day = todayNo();
      savePlan(); syncSrcUI(); buildDeck(); renderCard();
    });
  });
  planDurSel.addEventListener("change", function(){
    plan.dur = parseInt(planDurSel.value, 10) === 60 ? 60 : 30;
    plan.start = todayStr(); plan.day = 1;
    savePlan(); renderDayOptions(); buildDeck(); renderCard();
  });
  planDaySel.addEventListener("change", function(){
    plan.day = parseInt(planDaySel.value, 10) || 1;
    savePlan(); renderDayOptions(); buildDeck(); renderCard();
  });
  document.getElementById("planToday").addEventListener("click", function(){
    plan.day = todayNo(); savePlan(); renderDayOptions(); buildDeck(); renderCard();
  });
  document.getElementById("planReset").addEventListener("click", function(){
    plan.start = todayStr(); plan.day = 1; savePlan(); renderDayOptions(); buildDeck(); renderCard();
  });

  syncSrcUI();
  buildDeck();
  renderCard();

  // ===================== DAFTAR KOTOBA =====================
  var daftarKategoriSel = document.getElementById("daftarKategori");
  var optAll2 = document.createElement("option");
  optAll2.value = ""; optAll2.textContent = "Semua kategori";
  daftarKategoriSel.appendChild(optAll2);
  kategoriList.forEach(function(k){
    var o = document.createElement("option"); o.value = k; o.textContent = k;
    daftarKategoriSel.appendChild(o);
  });
  var daftarSearch = document.getElementById("daftarSearch");
  var daftarBody = document.getElementById("daftarBody");
  var daftarFavOnly = document.getElementById("daftarFavOnly");
  var favOnly = false;

  function renderDaftar(){
    var q = daftarSearch.value.trim().toLowerCase();
    var kat = daftarKategoriSel.value;
    var html = "";
    KOTOBA.forEach(function(w, idx){
      if(kat && w.kat !== kat) return;
      if(favOnly && !isFav(w)) return;
      if(q){
        var hay = (w.kanji + w.kana + w.romaji + w.arti).toLowerCase();
        if(hay.indexOf(q) === -1) return;
      }
      var arch = isArchived(w), fav = isFav(w);
      html += "<tr data-i=\"" + idx + "\" tabindex=\"0\" role=\"button\"><td>" + escH(w.kanji) + "</td><td>" + escH(w.kana) + "</td><td>" + escH(w.romaji) + "</td><td>" + escH(w.arti) + "</td>" +
        "<td class=\"n2-act\">" + (arch ? "<span class=\"n2-badge-archived\">Hapal</span>" : "") +
        "<button class=\"n2-fav\" type=\"button\" data-i=\"" + idx + "\" aria-pressed=\"" + (fav ? "true" : "false") + "\" aria-label=\"" + (fav ? "Hapus dari favorit" : "Tandai favorit") + "\">" + FAV_SVG + "</button><span class=\"n2-chev\" aria-hidden=\"true\">&rsaquo;</span></td></tr>";
    });
    daftarBody.innerHTML = html;
  }
  function refreshDeckKeep(){
    var cur = currentDeck[cardIndex];
    buildDeck();
    var ix = cur ? currentDeck.indexOf(cur) : -1;
    cardIndex = ix >= 0 ? ix : 0;
    if(srcMode === "plan") renderDayOptions();
    renderCard();
  }
  var daftarListEl = document.getElementById("daftarList");
  var daftarDetailEl = document.getElementById("daftarDetail");
  var daftarWrapEl = document.querySelector("#panel-daftar .n2-list-wrap");
  var detailIdx = -1, listScroll = 0;
  var BUSHU_URL = "/p/materi-dan-kuis-kanji-metode-bushu.html";
  function kanjiOf(s){
    var m = String(s).match(/[一-鿿々]/g) || [], out = [];
    m.forEach(function(c){ if(out.indexOf(c) === -1) out.push(c); });
    return out;
  }
  function planDayOf(w){
    var i = PRIO.indexOf(w); if(i < 0) return null;
    var n = Math.ceil(PRIO.length / 30), m = Math.ceil(PRIO.length / 60);
    return {d30: Math.floor(i / n) + 1, d60: Math.floor(i / m) + 1, tier: TIER_NAME[PRIO_TIER[i]]};
  }
  function renderDetail(){
    var w = KOTOBA[detailIdx];
    if(!w){ closeDetail(); return; }
    var fav = isFav(w), arch = isArchived(w), ks = kanjiOf(w.kanji), pd = planDayOf(w);
    var h = "<button class=\"n2-back\" id=\"dBack\" type=\"button\">&larr; Kembali ke daftar</button>" +
      "<div class=\"n2-dcard\">" +
        "<button class=\"n2-fav\" id=\"dFav\" type=\"button\" aria-pressed=\"" + (fav ? "true" : "false") + "\" aria-label=\"" + (fav ? "Hapus dari favorit" : "Tandai favorit") + "\">" + FAV_SVG + "</button>" +
        "<div class=\"n2-d-kanji\">" + escH(w.kanji) + "</div>" +
        "<div class=\"n2-d-kana\">" + escH(w.kana) + " <span>(" + escH(w.romaji) + ")</span></div>" +
        (w.kat ? "<span class=\"n2-d-kat\">" + escH(w.kat) + "</span>" : "") +
      "</div>" +
      "<div class=\"n2-dsec\"><h4>Arti</h4><p class=\"n2-d-arti\">" + escH(w.arti) + "</p></div>" +
      (w.contohJp ? "<div class=\"n2-dsec\"><h4>Contoh kalimat</h4><div class=\"n2-d-ex\"><span class=\"jp\">" + escH(w.contohJp) + "</span><span class=\"romaji\">" + escH(w.contohRomaji) + "</span><span class=\"id\">" + escH(w.contohId) + "</span></div></div>" : "") +
      (ks.length ? "<div class=\"n2-dsec\"><h4>Kanji</h4><div class=\"n2-d-kj\">" + ks.map(function(c){
          return "<a class=\"n2-kj\" href=\"" + BUSHU_URL + "?tab=materi&bushu=" + encodeURIComponent(c) + "\">" + c + " <small>&#8599;</small></a>";
        }).join("") + "</div><p class=\"n2-d-note\">Ketuk kanji untuk melihat bushu, susunan, dan cara menulisnya.</p></div>" : "") +
      (pd ? "<div class=\"n2-dsec\"><h4>Rencana hapalan</h4><p class=\"n2-d-note\">Prioritas: " + escH(pd.tier) + " · Hari " + pd.d30 + " (rencana 30 hari) · Hari " + pd.d60 + " (rencana 60 hari)</p></div>" : "") +
      "<button class=\"n2-btn n2-btn-outline n2-wide\" id=\"dHapal\" type=\"button\">" + (arch ? "Batalkan hapal" : "Tandai hapal") + "</button>";
    daftarDetailEl.innerHTML = h;
  }
  function openDetail(idx){
    listScroll = daftarWrapEl ? daftarWrapEl.scrollTop : 0;
    detailIdx = idx;
    renderDetail();
    daftarListEl.hidden = true;
    daftarDetailEl.hidden = false;
    var root = document.getElementById("n2app");
    if(root){ var r = root.getBoundingClientRect(); if(r.top < 0) window.scrollTo(0, window.pageYOffset + r.top - 70); }
  }
  function closeDetail(){
    detailIdx = -1;
    daftarDetailEl.hidden = true;
    daftarListEl.hidden = false;
    if(daftarWrapEl) daftarWrapEl.scrollTop = listScroll;
  }
  daftarDetailEl.addEventListener("click", function(e){
    var t = e.target.closest ? e.target.closest("button") : null;
    if(!t) return;
    var w = KOTOBA[detailIdx];
    if(t.id === "dBack"){ closeDetail(); return; }
    if(!w) return;
    if(t.id === "dFav"){ toggleFav(w); }
    else if(t.id === "dHapal"){ if(isArchived(w)) unarchiveWord(w); else archiveWord(w); }
    else return;
    renderDetail(); renderDaftar(); refreshDeckKeep();
  });
  var daftarTabBtn = document.querySelector("#n2app .n2-tab[data-panel=\"daftar\"]");
  if(daftarTabBtn) daftarTabBtn.addEventListener("click", function(){ if(detailIdx >= 0) closeDetail(); });
  daftarBody.addEventListener("click", function(e){
    var b = e.target.closest ? e.target.closest(".n2-fav") : null;
    if(b){
      var w = KOTOBA[parseInt(b.getAttribute("data-i"), 10)];
      if(!w) return;
      toggleFav(w);
      renderDaftar();
      refreshDeckKeep();
      return;
    }
    var tr = e.target.closest ? e.target.closest("tr") : null;
    if(tr && tr.hasAttribute("data-i")) openDetail(parseInt(tr.getAttribute("data-i"), 10));
  });
  daftarBody.addEventListener("keydown", function(e){
    if(e.key !== "Enter" && e.key !== " ") return;
    var tr = e.target && e.target.tagName === "TR" ? e.target : null;
    if(!tr || !tr.hasAttribute("data-i")) return;
    e.preventDefault();
    openDetail(parseInt(tr.getAttribute("data-i"), 10));
  });
  daftarFavOnly.addEventListener("click", function(){
    favOnly = !favOnly;
    daftarFavOnly.setAttribute("aria-pressed", favOnly ? "true" : "false");
    renderDaftar();
  });
  daftarSearch.addEventListener("input", renderDaftar);
  daftarKategoriSel.addEventListener("change", renderDaftar);
  renderDaftar();

  // ===================== MATERI BUNPOU (TAB PER BAB) =====================
  var GRAMMAR = window.N2_GRAMMAR || [];
  var babTabsEl = document.getElementById("babTabs");
  var babContentEl = document.getElementById("babContent");

  GRAMMAR.forEach(function(bab, idx){
    var btn = document.createElement("button");
    btn.className = "n2-bab-tab" + (idx === 0 ? " active" : "");
    btn.textContent = "Bab " + bab.bab + ": " + bab.judul;
    btn.addEventListener("click", function(){
      document.querySelectorAll("#n2app .n2-bab-tab").forEach(function(b){ b.classList.remove("active"); });
      btn.classList.add("active");
      renderBab(idx);
    });
    babTabsEl.appendChild(btn);
  });

  function renderBab(idx){
    var bab = GRAMMAR[idx];
    var html = "";
    bab.pola.forEach(function(p){
      html += "<div class=\"n2-pola-card\">";
      html += "<div class=\"n2-pola-bentuk\">" + p.bentuk + "</div>";
      html += "<div class=\"n2-pola-arti\">" + p.arti + "</div>";
      html += "<div class=\"n2-pola-penjelasan\">" + p.penjelasan + "</div>";
      p.contoh.forEach(function(c){
        html += "<div class=\"n2-pola-contoh\"><span class=\"jp\">" + c.jp + "</span><span class=\"romaji\">" + c.romaji + "</span><span class=\"id\">" + c.id + "</span></div>";
      });
      html += "</div>";
    });
    babContentEl.innerHTML = html;
  }
  if(GRAMMAR.length) renderBab(0);

  // ===================== CHOUKAI / READING / MOCK TEST (modul bersama) =====================
  // Kode tab ini ada di folder shared/ (dipakai semua level). Di sini cukup dipasang.
  function mountShared(id, mod, opts){
    var host = document.getElementById(id);
    if(!host) return;
    if(opts.data && !opts.data.length){ host.innerHTML = "<p>Data belum termuat. Muat ulang halaman (Ctrl+F5).</p>"; return; }
    if(!window[mod]){ host.innerHTML = "<p>Modul " + mod + " belum termuat. Muat ulang halaman.</p>"; return; }
    window[mod].mount(host, opts);
  }
  mountShared("choukaiHost", "NihongoChoukai", {data: window.N2_CHOUKAI || [], level: "N2"});
  mountShared("readingHost", "NihongoReading", {data: window.N2_READING || [], level: "N2", gloss: window.N2_READING_GLOSS});
  mountShared("mockHost", "NihongoMock", {level: "N2", quiz: window.N2_QUIZ, reading: window.N2_READING, choukai: window.N2_CHOUKAI, gloss: window.N2_READING_GLOSS});

  // Pindah tab -> hentikan suara yang sedang diputar
  document.querySelectorAll("#n2app .n2-tab").forEach(function(tab){
    tab.addEventListener("click", function(){ if(window.NihongoTTS) window.NihongoTTS.cancel(); });
  });

})();
