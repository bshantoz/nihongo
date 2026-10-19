/* Podcast Qategori
   Dipasang lewat halaman Blogger (/p/podcast.html) yang isinya hanya:
     <div id="pcapp"></div>
     <script src="https://bshantoz.github.io/nihongo/podcast/podcast.js?v=1"></script>
   Daftar playlist dan episode diisi di file podcast.json (folder yang sama di GitHub).
   Warna mengikuti variabel tema blog (--themeLink, --themeBd-color, --contentBg-alt, dst). */
(function(){
  var root = document.getElementById('pcapp'); if (!root) return;
  var BASE = 'https://bshantoz.github.io/nihongo/podcast/';
  /* Cadangan kalau podcast.json belum ada: playlist Monolog tanpa daftar episode (pemutar memutar playlist langsung). */
  var FALLBACK = {playlists: [{title: 'Monolog', playlist: 'PLcR037WhUbXY8biaPT-F5FEcqX30iIEkl', episodes: []}]};
  var CH = 'https://www.youtube.com/@myction';

  if (!document.getElementById('pc-style')) {
    var st = document.createElement('style'); st.id = 'pc-style';
    st.textContent =
      '#pcapp{--pc-link:var(--themeLink,#3740ff);--pc-bd:var(--themeBd-color,rgba(127,127,127,.28));--pc-alt:var(--contentBg-alt,rgba(127,127,127,.1));--pc-r:var(--contentBd-radiusA,14px);--pc-br:var(--buttonBd-radius,10px);--pc-soft:color-mix(in srgb,var(--pc-link) 14%,transparent);display:block;max-width:760px;margin:0 auto}' +
      '#pcapp *{box-sizing:border-box}' +
      '#pcapp .pc-box{position:relative;width:100%;aspect-ratio:16/9;border-radius:var(--pc-r);overflow:hidden;background:#000;border:1px solid var(--pc-bd)}' +
      '#pcapp .pc-box iframe{position:absolute;inset:0;width:100%;height:100%;border:0}' +
      '#pcapp .pc-now{margin:12px 2px 4px;font-weight:700;font-size:1.05em;line-height:1.35}' +
      '#pcapp .pc-sub{margin:0 2px 8px;font-size:.85em;opacity:.7}' +
      '#pcapp .pc-open{display:inline-block;margin:0 2px 10px;padding:6px 12px;border:1px solid var(--pc-bd);border-radius:var(--pc-br);color:var(--pc-link);text-decoration:none;font-size:.85em}' +
      '#pcapp .npc-tabs{display:flex;gap:4px;margin:10px 0 8px;border-bottom:1px solid var(--pc-bd);overflow-x:auto}' +
      '#pcapp .npc-tab{flex:0 0 auto;border:0;background:none;color:inherit;font:inherit;padding:9px 14px;cursor:pointer;border-bottom:2px solid transparent;opacity:.75}' +
      '#pcapp .npc-tab.active{color:var(--pc-link);border-bottom-color:var(--pc-link);opacity:1;font-weight:700}' +
      '#pcapp .pc-list{display:flex;flex-direction:column;gap:8px;margin:8px 0}' +
      '#pcapp .pc-ep{display:flex;align-items:center;gap:12px;width:100%;text-align:left;padding:10px 12px;border:1px solid var(--pc-bd);border-radius:var(--pc-r);background:var(--pc-alt);color:inherit;font:inherit;cursor:pointer}' +
      '#pcapp .pc-ep:hover{border-color:var(--pc-link)}' +
      '#pcapp .pc-ep.on{border-color:var(--pc-link);background:var(--pc-soft)}' +
      '#pcapp .pc-n{flex:0 0 auto;display:grid;place-items:center;width:30px;height:30px;border-radius:50%;background:var(--pc-soft);color:var(--pc-link);font-size:.85em;font-weight:700}' +
      '#pcapp .pc-ep.on .pc-n{background:var(--pc-link);color:var(--buttonC,#fff)}' +
      '#pcapp .pc-t{flex:1 1 auto;min-width:0;line-height:1.35}' +
      '#pcapp .pc-d{flex:0 0 auto;font-size:.8em;opacity:.65}' +
      '#pcapp .pc-empty{padding:14px;border:1px dashed var(--pc-bd);border-radius:var(--pc-r);font-size:.9em;opacity:.85}';
    document.head.appendChild(st);
  }

  function esc(s){ return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
  function embed(pl, ep, auto){
    var q = 'rel=0&playsinline=1&modestbranding=1' + (auto ? '&autoplay=1' : '');
    if (ep && ep.id) return 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(ep.id) + '?' + q + (pl.playlist ? '&list=' + encodeURIComponent(pl.playlist) : '');
    return 'https://www.youtube-nocookie.com/embed/videoseries?list=' + encodeURIComponent(pl.playlist) + '&' + q;
  }
  function watch(pl, ep){
    if (ep && ep.id) return 'https://www.youtube.com/watch?v=' + encodeURIComponent(ep.id) + (pl.playlist ? '&list=' + encodeURIComponent(pl.playlist) : '');
    return pl.playlist ? 'https://www.youtube.com/playlist?list=' + encodeURIComponent(pl.playlist) : CH;
  }

  function start(data){
    var pls = (data && data.playlists || []).filter(function(p){ return p && (p.playlist || (p.episodes && p.episodes.length)); });
    if (!pls.length) pls = FALLBACK.playlists;
    var cur = 0, curEp = -1;
    try { var s = parseInt(localStorage.getItem('pc_pl') || '0', 10); if (s >= 0 && s < pls.length) cur = s; } catch (e) {}
    root.innerHTML =
      '<div class="pc-box"><iframe id="pc-fr" title="Pemutar podcast" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div>' +
      '<p class="pc-now" id="pc-now"></p><p class="pc-sub" id="pc-sub"></p>' +
      '<a class="pc-open" id="pc-yt" target="_blank" rel="noopener" href="' + CH + '">Buka di YouTube</a>' +
      '<div class="npc-tabs" id="pc-tabs" role="tablist"></div><div class="pc-list" id="pc-list"></div>';
    var fr = root.querySelector('#pc-fr'), now = root.querySelector('#pc-now'), sub = root.querySelector('#pc-sub'), yt = root.querySelector('#pc-yt');
    var tabs = root.querySelector('#pc-tabs'), list = root.querySelector('#pc-list');
    function setVideo(auto){
      var pl = pls[cur], ep = curEp >= 0 ? pl.episodes[curEp] : null;
      fr.src = embed(pl, ep, auto);
      now.textContent = ep ? ep.title : (pl.title || 'Podcast');
      sub.textContent = ep ? (pl.title || '') : (pl.episodes && pl.episodes.length ? 'Pilih episode di bawah' : 'Memutar playlist ' + (pl.title || ''));
      yt.href = watch(pl, ep);
      Array.prototype.forEach.call(list.querySelectorAll('.pc-ep'), function(b, i){ b.classList.toggle('on', i === curEp); });
    }
    function drawList(){
      var pl = pls[cur], eps = pl.episodes || [];
      if (!eps.length) { list.innerHTML = '<div class="pc-empty">Daftar episode belum diisi. Video di atas memutar playlist langsung; pakai tombol di dalam pemutar untuk pindah episode.</div>'; return; }
      list.innerHTML = eps.map(function(e, i){
        return '<button type="button" class="pc-ep" data-i="' + i + '"><span class="pc-n">' + (i + 1) + '</span><span class="pc-t">' + esc(e.title) + '</span>' + (e.dur ? '<span class="pc-d">' + esc(e.dur) + '</span>' : '') + '</button>';
      }).join('');
    }
    function drawTabs(){
      tabs.innerHTML = pls.map(function(p, i){ return '<button type="button" class="npc-tab' + (i === cur ? ' active' : '') + '" role="tab" data-i="' + i + '">' + esc(p.title || 'Playlist ' + (i + 1)) + '</button>'; }).join('');
    }
    tabs.addEventListener('click', function(e){
      var b = e.target.closest ? e.target.closest('.npc-tab') : null; if (!b) return;
      cur = parseInt(b.getAttribute('data-i'), 10); curEp = -1;
      try { localStorage.setItem('pc_pl', String(cur)); } catch (x) {}
      drawTabs(); drawList(); setVideo(false);
    });
    list.addEventListener('click', function(e){
      var b = e.target.closest ? e.target.closest('.pc-ep') : null; if (!b) return;
      curEp = parseInt(b.getAttribute('data-i'), 10);
      setVideo(true);
      try { root.querySelector('.pc-box').scrollIntoView({behavior: 'smooth', block: 'nearest'}); } catch (x) {}
    });
    drawTabs(); drawList(); setVideo(false);
  }

  fetch(BASE + 'podcast.json?v=' + Math.floor(Date.now() / 600000)).then(function(r){ if (!r.ok) throw 0; return r.json(); })
    .then(start, function(){ start(FALLBACK); });
})();
