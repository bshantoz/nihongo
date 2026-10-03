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

  // ===================== KUIS BUNPOU =====================
  var QUIZ = window.N3_QUIZ || {};
  var quizState = { list: [], idx: 0, score: 0, answered: false };

  function shuffle(arr){
    var a = arr.slice();
    for(var i=a.length-1;i>0;i--){
      var j = Math.floor(Math.random()*(i+1));
      var t = a[i]; a[i]=a[j]; a[j]=t;
    }
    return a;
  }

  document.getElementById("btnStartQuiz").addEventListener("click", function(){
    var type = document.querySelector("input[name=quizType]:checked").value;
    var list;
    if(type === "campuran"){
      list = [];
      Object.keys(QUIZ).forEach(function(k){ list = list.concat(QUIZ[k].map(function(q){ return Object.assign({_tipe:k}, q); })); });
      list = shuffle(list).slice(0, 15);
    } else {
      list = shuffle(QUIZ[type] || []).map(function(q){ return Object.assign({_tipe:type}, q); });
    }
    quizState = { list: list, idx: 0, score: 0, answered: false };
    document.getElementById("kuisSetup").style.display = "none";
    document.getElementById("kuisResult").style.display = "none";
    document.getElementById("kuisArea").style.display = "block";
    renderQuizQuestion();
  });

  var TIPE_LABEL = {kanji_yomi:"漢字読み", hyouki:"表記", bunmyaku:"文脈規定", bunpou:"文法", kumitate:"文の組み立て"};

  function renderQuizQuestion(){
    var q = quizState.list[quizState.idx];
    document.getElementById("quizProgress").textContent =
      "Soal " + (quizState.idx+1) + " / " + quizState.list.length + "　[" + (TIPE_LABEL[q._tipe]||q._tipe) + "]　Skor: " + quizState.score;
    document.getElementById("quizQuestion").textContent = q.mondai;
    var optWrap = document.getElementById("quizOptions");
    optWrap.innerHTML = "";
    q.options.forEach(function(opt, i){
      var b = document.createElement("button");
      b.className = "n3-quiz-opt";
      b.textContent = (i+1) + ". " + opt;
      b.addEventListener("click", function(){ answerQuiz(i); });
      optWrap.appendChild(b);
    });
    document.getElementById("quizExplain").style.display = "none";
    document.getElementById("btnNextQuestion").style.display = "none";
    quizState.answered = false;
  }

  function answerQuiz(i){
    if(quizState.answered) return;
    quizState.answered = true;
    var q = quizState.list[quizState.idx];
    var buttons = document.querySelectorAll("#quizOptions .n3-quiz-opt");
    buttons.forEach(function(b, idx){
      b.disabled = true;
      if(idx === q.correct) b.classList.add("correct");
      else if(idx === i) b.classList.add("wrong");
    });
    if(i === q.correct) quizState.score++;
    var explain = document.getElementById("quizExplain");
    explain.style.display = "block";
    explain.textContent = (i === q.correct ? "✔ Benar! " : "✘ Kurang tepat. ") + q.penjelasan;
    document.getElementById("btnNextQuestion").style.display =
      (quizState.idx < quizState.list.length - 1) ? "inline-block" : "none";
    if(quizState.idx >= quizState.list.length - 1){
      setTimeout(finishQuiz, 900);
    }
  }

  document.getElementById("btnNextQuestion").addEventListener("click", function(){
    quizState.idx++;
    renderQuizQuestion();
  });

  function finishQuiz(){
    document.getElementById("kuisArea").style.display = "none";
    document.getElementById("kuisResult").style.display = "block";
    var total = quizState.list.length;
    var pct = total ? Math.round((quizState.score/total)*100) : 0;
    document.getElementById("quizScoreText").textContent =
      "Skor kamu: " + quizState.score + " / " + total + " (" + pct + "%)";
  }

  document.getElementById("btnRetryQuiz").addEventListener("click", function(){
    document.getElementById("kuisResult").style.display = "none";
    document.getElementById("kuisSetup").style.display = "block";
  });

  // ===================== CHOUKAI (MENDENGARKAN) =====================
  var CHOUKAI = window.N3_CHOUKAI || [];
  var choukaiListEl = document.getElementById("choukaiList");
  var TIPE_CHOUKAI_LABEL = {kadai:"課題理解", point:"ポイント理解", sokuji:"即時応答"};

  CHOUKAI.forEach(function(item, idx){
    var div = document.createElement("div");
    div.className = "n3-choukai-item";
    div.innerHTML = "<span class=\"n3-choukai-tipe\">" + (TIPE_CHOUKAI_LABEL[item.tipe]||item.tipe) + "</span><br><b>" + item.judul + "</b>";
    div.addEventListener("click", function(){ openChoukai(idx); });
    choukaiListEl.appendChild(div);
  });

  function openChoukai(idx){
    window.speechSynthesis && window.speechSynthesis.cancel();
    resetChoukaiPlayState();
    var item = CHOUKAI[idx];
    document.getElementById("choukaiList").style.display = "none";
    document.getElementById("choukaiArea").style.display = "block";
    document.getElementById("choukaiJudul").textContent = item.judul;
    document.getElementById("choukaiScript").style.display = "none";
    document.getElementById("choukaiQ").style.display = "none";
    document.getElementById("choukaiExplain").style.display = "none";

    var scriptEl = document.getElementById("choukaiScript");
    scriptEl.innerHTML = "";
    item.dialog.forEach(function(line){
      var d = document.createElement("div");
      d.className = "n3-choukai-line";
      var icon = line.gender === "P" ? "👩" : (line.gender === "L" ? "👨" : "");
      d.innerHTML = "<b>" + icon + " " + line.speaker + "：</b>" + line.jp + "<span class=\"romaji\">" + line.romaji + "</span>";
      scriptEl.appendChild(d);
    });

    document.getElementById("btnPlayAudio").onclick = function(){ playChoukaiAudio(item); };

    var pertanyaanEl = document.getElementById("choukaiPertanyaan");
    pertanyaanEl.textContent = item.pertanyaan;
    var optWrap = document.getElementById("choukaiOptions");
    optWrap.innerHTML = "";
    item.options.forEach(function(opt, i){
      var b = document.createElement("button");
      b.className = "n3-quiz-opt";
      b.textContent = (i+1) + ". " + opt;
      b.addEventListener("click", function(){ answerChoukai(item, i, b); });
      optWrap.appendChild(b);
    });
  }

  function answerChoukai(item, i, btnEl){
    var buttons = document.querySelectorAll("#choukaiOptions .n3-quiz-opt");
    if(buttons[0].disabled) return;
    buttons.forEach(function(b, idx){
      b.disabled = true;
      if(idx === item.correct) b.classList.add("correct");
      else if(idx === i) b.classList.add("wrong");
    });
    var explain = document.getElementById("choukaiExplain");
    explain.style.display = "block";
    explain.textContent = (i === item.correct ? "✔ Benar! " : "✘ Kurang tepat. ") + item.penjelasan;
  }

  // ---------- Pemilihan suara laki-laki / perempuan (ja-JP) ----------
  // Nama yang biasanya menandakan suara pria pada mesin TTS berbagai browser/OS.
  var MALE_VOICE_HINTS = ["male","otoya","ichiro","keita","daisuke","男性","man"];
  var FEMALE_VOICE_HINTS = ["female","kyoko","haruka","ayumi","nanami","sakura","女性","woman"];
  var voiceProfiles = null; // {L:{voice,pitch,rate}, P:{voice,pitch,rate}}

  function classifyVoice(v){
    var name = (v.name || "").toLowerCase();
    if(MALE_VOICE_HINTS.some(function(h){ return name.indexOf(h) !== -1; })) return "L";
    if(FEMALE_VOICE_HINTS.some(function(h){ return name.indexOf(h) !== -1; })) return "P";
    return null;
  }

  function buildVoiceProfiles(){
    var all = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
    var jaVoices = all.filter(function(v){ return (v.lang || "").toLowerCase().indexOf("ja") === 0; });
    var profiles = { L:{voice:null,pitch:0.82,rate:0.92}, P:{voice:null,pitch:1.18,rate:0.95} };

    if(jaVoices.length === 0){
      // Tidak ada suara Jepang sama sekali: biarkan browser pakai default, dibedakan lewat pitch saja.
      return profiles;
    }

    // 1) coba kenali dari nama suara (mis. Kyoko=wanita, Otoya=pria di macOS; Ichiro/Nanami di Windows/Edge)
    var found = { L:null, P:null };
    jaVoices.forEach(function(v){
      var g = classifyVoice(v);
      if(g && !found[g]) found[g] = v;
    });

    // 2) kalau ada minimal 2 suara ja-JP berbeda tapi belum kebedah namanya, bagi saja jadi dua kelompok
    if((!found.L || !found.P) && jaVoices.length >= 2){
      if(!found.L) found.L = jaVoices[0];
      if(!found.P) found.P = jaVoices.find(function(v){ return v !== found.L; }) || jaVoices[1];
    }
    // 3) kalau cuma ada 1 suara ja-JP, dua-duanya pakai suara itu (dibedakan lewat pitch di bawah)
    if(!found.L) found.L = jaVoices[0];
    if(!found.P) found.P = jaVoices[0];

    profiles.L.voice = found.L;
    profiles.P.voice = found.P;
    // Kalau ternyata voice L dan P sama persis, pertegas bedanya lewat pitch supaya tetap kedengaran beda.
    if(found.L === found.P){
      profiles.L.pitch = 0.75;
      profiles.P.pitch = 1.35;
    }
    return profiles;
  }

  function getVoiceProfiles(cb){
    if(!("speechSynthesis" in window)){ cb(null); return; }
    var existing = window.speechSynthesis.getVoices();
    if(existing.length > 0){
      voiceProfiles = buildVoiceProfiles();
      cb(voiceProfiles);
    } else {
      // Voice list Chrome sering kosong sesaat setelah load; tunggu event voiceschanged.
      // PENTING: pakai flag "resolved" supaya cb() cuma dipanggil SEKALI. Tanpa ini,
      // di HP event voiceschanged kadang baru terpicu setelah fallback setTimeout
      // sudah lebih dulu jalan -> cb() kepanggil 2x -> seluruh dialog terbaca dua kali.
      var resolved = false;
      var resolveOnce = function(){
        if(resolved) return;
        resolved = true;
        window.speechSynthesis.onvoiceschanged = null; // lepas listener biar tidak nyangkut & terpicu lagi nanti
        voiceProfiles = buildVoiceProfiles();
        cb(voiceProfiles);
      };
      window.speechSynthesis.onvoiceschanged = resolveOnce;
      // Fallback: kalau event tidak pernah terpicu (beberapa browser), tetap jalan setelah jeda singkat.
      setTimeout(resolveOnce, 300);
    }
  }

  var isSpeakingChoukai = false; // cegah tombol Putar dipicu dobel (mis. tap ganda di HP) selagi masih membaca

  function resetChoukaiPlayState(){
    isSpeakingChoukai = false;
    var btnPlay = document.getElementById("btnPlayAudio");
    if(btnPlay) btnPlay.disabled = false;
  }

  function playChoukaiAudio(item){
    document.getElementById("choukaiScript").style.display = "block";
    document.getElementById("choukaiQ").style.display = "block";
    if(!("speechSynthesis" in window)){
      alert("Maaf, browser ini tidak mendukung fitur suara (Web Speech API). Silakan baca naskah percakapan di bawah.");
      return;
    }
    if(isSpeakingChoukai) return; // sedang membaca, abaikan tap tambahan
    isSpeakingChoukai = true;
    var btnPlay = document.getElementById("btnPlayAudio");
    if(btnPlay) btnPlay.disabled = true;

    window.speechSynthesis.cancel();

    function startSpeaking(profiles){
      // Dialog ini sendiri yang sudah dibatalkan/diganti sebelum suara ini sempat jalan
      // (mis. user pindah ke soal lain sambil menunggu daftar suara siap) -> jangan diputar.
      if(!isSpeakingChoukai) return;
      var lines = item.dialog;
      var i = 0;
      function speakNext(){
        if(i >= lines.length){ resetChoukaiPlayState(); return; }
        var line = lines[i];
        var profile = (profiles && profiles[line.gender]) || null;
        // Hanya teks kanji/kana (line.jp) yang dibacakan; romaji tidak pernah diikutkan ke TTS.
        var utter = new SpeechSynthesisUtterance(line.jp);
        utter.lang = "ja-JP";
        if(profile && profile.voice) utter.voice = profile.voice;
        utter.pitch = profile ? profile.pitch : 1;
        utter.rate = profile ? profile.rate : 0.92;
        utter.onend = function(){ i++; speakNext(); };
        utter.onerror = function(){ i++; speakNext(); };
        window.speechSynthesis.speak(utter);
      }
      speakNext();
    }

    if(voiceProfiles){
      startSpeaking(voiceProfiles);
    } else {
      getVoiceProfiles(startSpeaking);
    }
  }

  document.getElementById("btnBackChoukai").addEventListener("click", function(){
    window.speechSynthesis && window.speechSynthesis.cancel();
    resetChoukaiPlayState();
    document.getElementById("choukaiArea").style.display = "none";
    document.getElementById("choukaiList").style.display = "block";
  });

  // ---------- Tombol diagnostik: cek suara Jepang yang tersedia di perangkat ----------
  var btnCekSuara = document.getElementById("btnCekSuara");
  if(btnCekSuara){
    btnCekSuara.addEventListener("click", function(){
      var resultEl = document.getElementById("voiceCheckResult");
      resultEl.style.display = "block";
      if(!("speechSynthesis" in window)){
        resultEl.innerHTML = "Browser ini tidak mendukung Web Speech API sama sekali.";
        return;
      }
      resultEl.innerHTML = "Mencari suara...";
      getVoiceProfiles(function(profiles){
        var all = window.speechSynthesis.getVoices();
        var jaVoices = all.filter(function(v){ return (v.lang||"").toLowerCase().indexOf("ja") === 0; });
        if(jaVoices.length === 0){
          resultEl.innerHTML = "⚠️ Tidak ditemukan suara berbahasa Jepang di perangkat/browser ini. " +
            "Audio tetap akan dicoba diputar pakai suara default, dibedakan lewat nada saja. " +
            "Coba tambahkan suara Jepang lewat pengaturan Text-to-Speech di HP/laptop ini.";
          return;
        }
        var html = "<b>" + jaVoices.length + " suara Jepang ditemukan:</b>";
        jaVoices.forEach(function(v){
          var tag = "none", label = "belum dipetakan L/P";
          if(profiles.L.voice === v){ tag = "L"; label = "dipakai untuk 👨 laki-laki"; }
          if(profiles.P.voice === v){ tag = tag === "L" ? "L" : "P"; label = (tag === "L" ? "dipakai untuk 👨 & 👩 (sama)" : "dipakai untuk 👩 perempuan"); }
          html += "<div class=\"n3-voice-row\"><span class=\"n3-voice-tag " + tag + "\">" + tag.replace("none","-") + "</span>" + v.name + " (" + v.lang + ") — " + label + "</div>";
        });
        if(profiles.L.voice === profiles.P.voice){
          html += "<div style=\"margin-top:8px;color:rgba(20,40,60,.6)\">Cuma ada 1 suara Jepang, jadi laki-laki/perempuan dibedakan lewat nada (pitch) saja, bukan suara asli berbeda.</div>";
        }
        resultEl.innerHTML = html;
      });
    });
  }

  // ===================== Deep link dari kartu hasil pencarian blog (?q=&tab=) =====================
  (function () {
    var qp;
    try { qp = new URLSearchParams(location.search); } catch (err) { return; }
    var q = (qp.get("q") || "").trim();
    if (!q) return;
    var wantTab = qp.get("tab") === "kartu" ? "kartu" : "daftar";

    function activatePanel(name) {
      tabs.forEach(function (t) { t.classList.toggle("active", t.dataset.panel === name); });
      panels.forEach(function (p) { p.classList.toggle("active", p.id === "panel-" + name); });
    }

    if (wantTab === "kartu") {
      var match = null;
      for (var i = 0; i < KOTOBA.length; i++) {
        if (KOTOBA[i].kanji === q || KOTOBA[i].kana === q) { match = KOTOBA[i]; break; }
      }
      if (!match) {
        for (var j = 0; j < KOTOBA.length; j++) {
          if (KOTOBA[j].kanji.indexOf(q) >= 0 || KOTOBA[j].kana.indexOf(q) >= 0) { match = KOTOBA[j]; break; }
        }
      }
      if (match) {
        currentDeck = [match];
        cardIndex = 0;
        renderCard();
        flashcardEl.classList.add("flipped");
      }
      activatePanel("kartu");
    } else {
      daftarKategoriSel.value = "";
      daftarSearch.value = q;
      renderDaftar();
      activatePanel("daftar");
    }
  })();

})();
