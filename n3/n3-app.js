// ===================================================================
// Qategori Nihongo - N3 App Logic
// ===================================================================
(function(){
  "use strict";

  var ARCHIVE_KEY = "n3_kotoba_archived_v1";

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
  var tabs = document.querySelectorAll("#n3app .n3-tab");
  var panels = document.querySelectorAll("#n3app .n3-panel");
  tabs.forEach(function(tab){
    tab.addEventListener("click", function(){
      tabs.forEach(function(t){ t.classList.remove("active"); });
      panels.forEach(function(p){ p.classList.remove("active"); });
      tab.classList.add("active");
      document.getElementById("panel-" + tab.dataset.panel).classList.add("active");
    });
  });

  // ===================== KARTU HAPALAN =====================
  var KOTOBA = window.N3_KOTOBA || [];
  var kategoriList = [];
  KOTOBA.forEach(function(w){ if(kategoriList.indexOf(w.kat) === -1) kategoriList.push(w.kat); });

  var kartuKategoriSel = document.getElementById("kartuKategori");
  var optAll = document.createElement("option");
  optAll.value = ""; optAll.textContent = "Semua Kategori";
  kartuKategoriSel.appendChild(optAll);
  kategoriList.forEach(function(k){
    var o = document.createElement("option"); o.value = k; o.textContent = k;
    kartuKategoriSel.appendChild(o);
  });

  var showArchivedChk = document.getElementById("kartuShowArchived");
  var cardIndex = 0;
  var currentDeck = [];

  function buildDeck(){
    var kat = kartuKategoriSel.value;
    var showArch = showArchivedChk.checked;
    currentDeck = KOTOBA.filter(function(w){
      if(kat && w.kat !== kat) return false;
      var arch = isArchived(w);
      return showArch ? arch : !arch;
    });
    cardIndex = 0;
  }

  var flashcardEl = document.getElementById("flashcard");
  var fcKanji = document.getElementById("fcKanji");
  var fcKat = document.getElementById("fcKat");
  var fcKana = document.getElementById("fcKana");
  var fcArti = document.getElementById("fcArti");
  var fcContoh = document.getElementById("fcContoh");
  var kartuCounter = document.getElementById("kartuCounter");
  var btnArchive = document.getElementById("btnArchive");
  var btnUnarchive = document.getElementById("btnUnarchive");

  function renderCard(){
    flashcardEl.classList.remove("flipped");
    if(currentDeck.length === 0){
      fcKanji.textContent = "🎉";
      fcKat.textContent = "";
      fcKana.textContent = "Tidak ada kartu di sini";
      fcArti.textContent = showArchivedChk.checked ? "Belum ada kata yang diarsipkan." : "Semua kata di kategori ini sudah diarsipkan!";
      fcContoh.innerHTML = "";
      kartuCounter.textContent = "0 / 0";
      btnArchive.style.display = showArchivedChk.checked ? "none" : "none";
      btnUnarchive.style.display = "none";
      return;
    }
    var w = currentDeck[cardIndex];
    fcKanji.textContent = w.kanji;
    fcKat.textContent = w.kat;
    fcKana.textContent = w.kana + "　(" + w.romaji + ")";
    fcArti.textContent = w.arti;
    fcContoh.innerHTML = w.contohJp ?
      ("<span class=\"jp\">" + w.contohJp + "</span><span class=\"romaji\">" + w.contohRomaji + "</span><span class=\"id\">" + w.contohId + "</span>") : "";
    kartuCounter.textContent = (cardIndex+1) + " / " + currentDeck.length;
    if(showArchivedChk.checked){
      btnArchive.style.display = "none";
      btnUnarchive.style.display = "inline-block";
    } else {
      btnArchive.style.display = "inline-block";
      btnUnarchive.style.display = "none";
    }
  }

  flashcardEl.addEventListener("click", function(){
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
  btnArchive.addEventListener("click", function(){
    if(currentDeck.length === 0) return;
    var w = currentDeck[cardIndex];
    archiveWord(w);
    buildDeck();
    if(cardIndex >= currentDeck.length) cardIndex = 0;
    renderCard();
    renderDaftar();
  });
  btnUnarchive.addEventListener("click", function(){
    if(currentDeck.length === 0) return;
    var w = currentDeck[cardIndex];
    unarchiveWord(w);
    buildDeck();
    if(cardIndex >= currentDeck.length) cardIndex = 0;
    renderCard();
    renderDaftar();
  });
  kartuKategoriSel.addEventListener("change", function(){ buildDeck(); renderCard(); });
  showArchivedChk.addEventListener("change", function(){ buildDeck(); renderCard(); });

  buildDeck();
  renderCard();

  // ===================== DAFTAR KOTOBA =====================
  var daftarKategoriSel = document.getElementById("daftarKategori");
  var optAll2 = document.createElement("option");
  optAll2.value = ""; optAll2.textContent = "Semua Kategori";
  daftarKategoriSel.appendChild(optAll2);
  kategoriList.forEach(function(k){
    var o = document.createElement("option"); o.value = k; o.textContent = k;
    daftarKategoriSel.appendChild(o);
  });
  var daftarSearch = document.getElementById("daftarSearch");
  var daftarBody = document.getElementById("daftarBody");

  function renderDaftar(){
    var q = daftarSearch.value.trim().toLowerCase();
    var kat = daftarKategoriSel.value;
    daftarBody.innerHTML = "";
    KOTOBA.forEach(function(w){
      if(kat && w.kat !== kat) return;
      if(q){
        var hay = (w.kanji + w.kana + w.romaji + w.arti).toLowerCase();
        if(hay.indexOf(q) === -1) return;
      }
      var tr = document.createElement("tr");
      var arch = isArchived(w);
      tr.innerHTML = "<td>" + w.kanji + "</td><td>" + w.kana + "</td><td>" + w.romaji + "</td><td>" + w.arti + "</td>" +
        "<td>" + (arch ? "<span class=\"n3-badge-archived\">Dihapal</span>" : "") + "</td>";
      daftarBody.appendChild(tr);
    });
  }
  daftarSearch.addEventListener("input", renderDaftar);
  daftarKategoriSel.addEventListener("change", renderDaftar);
  renderDaftar();

  // ===================== MATERI BUNPOU (TAB PER BAB) =====================
  var GRAMMAR = window.N3_GRAMMAR || [];
  var babTabsEl = document.getElementById("babTabs");
  var babContentEl = document.getElementById("babContent");

  GRAMMAR.forEach(function(bab, idx){
    var btn = document.createElement("button");
    btn.className = "n3-bab-tab" + (idx === 0 ? " active" : "");
    btn.textContent = "Bab " + bab.bab + ": " + bab.judul;
    btn.addEventListener("click", function(){
      document.querySelectorAll("#n3app .n3-bab-tab").forEach(function(b){ b.classList.remove("active"); });
      btn.classList.add("active");
      renderBab(idx);
    });
    babTabsEl.appendChild(btn);
  });

  function renderBab(idx){
    var bab = GRAMMAR[idx];
    var html = "";
    bab.pola.forEach(function(p){
      html += "<div class=\"n3-pola-card\">";
      html += "<div class=\"n3-pola-bentuk\">" + p.bentuk + "</div>";
      html += "<div class=\"n3-pola-arti\">" + p.arti + "</div>";
      html += "<div class=\"n3-pola-penjelasan\">" + p.penjelasan + "</div>";
      p.contoh.forEach(function(c){
        html += "<div class=\"n3-pola-contoh\"><span class=\"jp\">" + c.jp + "</span><span class=\"romaji\">" + c.romaji + "</span><span class=\"id\">" + c.id + "</span></div>";
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
    if(!window[mod]){ host.innerHTML = "<p>Modul " + mod + " belum termuat. Muat ulang halaman.</p>"; return; }
    window[mod].mount(host, opts);
  }
  mountShared("choukaiHost", "NihongoChoukai", {data: window.N3_CHOUKAI || [], level: "N3"});
  mountShared("readingHost", "NihongoReading", {data: window.N3_READING || [], level: "N3", gloss: window.N3_READING_GLOSS});
  mountShared("mockHost", "NihongoMock", {level: "N3", quiz: window.N3_QUIZ, reading: window.N3_READING, choukai: window.N3_CHOUKAI, gloss: window.N3_READING_GLOSS});

  // Pindah tab -> hentikan suara yang sedang diputar
  document.querySelectorAll("#n3app .n3-tab").forEach(function(tab){
    tab.addEventListener("click", function(){ if(window.NihongoTTS) window.NihongoTTS.cancel(); });
  });

})();
