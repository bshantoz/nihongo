// ===================================================================
// Qategori Nihongo - Materi Pola Kalimat (Bunpou) JLPT N2
// 10 Bab (tab), tiap bab berisi 5 pola.
// ===================================================================
window.N2_GRAMMAR = [

// ============ BAB 1 ============
{bab:1, judul:"Alasan & Akibat Lanjutan", pola:[
  {bentuk:"〜ばかりに", arti:"gara-gara ~ (akibat buruk tak terduga)", penjelasan:"Menyatakan bahwa suatu hal kecil/sepele menyebabkan akibat buruk yang tidak diinginkan. Nuansa penyesalan lebih kuat daripada せいで.",
   contoh:[
     {jp:"一言余計なことを言ったばかりに、喧嘩になった。", romaji:"Hitokoto yokei na koto o itta bakari ni, kenka ni natta.", id:"Gara-gara mengucapkan satu kata yang tidak perlu, jadi bertengkar."},
     {jp:"電車を一本逃したばかりに、遅刻してしまった。", romaji:"Densha o ippon nogashita bakari ni, chikoku shite shimatta.", id:"Gara-gara ketinggalan satu kereta, jadi terlambat."}
   ]},
  {bentuk:"〜せいか", arti:"mungkin karena ~ (dugaan penyebab)", penjelasan:"Menyatakan dugaan penyebab suatu hasil, tanpa yakin sepenuhnya (berbeda dengan せいで yang lebih pasti menyalahkan).",
   contoh:[
     {jp:"年のせいか、最近疲れやすい。", romaji:"Toshi no sei ka, saikin tsukareyasui.", id:"Mungkin karena usia, akhir-akhir ini mudah lelah."},
     {jp:"寝不足のせいか、頭がぼんやりする。", romaji:"Nebusoku no sei ka, atama ga bonyari suru.", id:"Mungkin karena kurang tidur, kepala terasa tidak fokus."}
   ]},
  {bentuk:"〜ことだし", arti:"karena toh ~ (alasan santai)", penjelasan:"Memberikan salah satu alasan (dari beberapa alasan) dengan nada santai/informal untuk mendukung suatu keputusan.",
   contoh:[
     {jp:"天気もいいことだし、散歩に行こう。", romaji:"Tenki mo ii koto dashi, sanpo ni ikou.", id:"Toh cuacanya juga bagus, ayo jalan-jalan."},
     {jp:"もう遅いことだし、そろそろ帰りましょう。", romaji:"Mou osoi koto dashi, sorosoro kaerimashou.", id:"Toh sudah larut, ayo mulai pulang."}
   ]},
  {bentuk:"〜もの／もん", arti:"karena begini ~ (alasan personal/informal)", penjelasan:"Memberikan alasan dengan nada agak kekanak-kanakan atau membela diri, umum dalam percakapan santai.",
   contoh:[
     {jp:"だって、時間がなかったんだもん。", romaji:"Datte, jikan ga nakatta n da mon.", id:"Habisnya, kan waktunya tidak ada."},
     {jp:"仕方ないよ、初めてだったんだもの。", romaji:"Shikata nai yo, hajimete datta n da mono.", id:"Ya mau bagaimana lagi, kan baru pertama kali."}
   ]},
  {bentuk:"〜ゆえに", arti:"oleh karena itu ~ (formal tertulis)", penjelasan:"Bentuk formal dan sastrawi untuk menyatakan sebab-akibat, sering muncul dalam tulisan resmi atau pidato.",
   contoh:[
     {jp:"経験不足ゆえに、失敗してしまった。", romaji:"Keiken busoku yue ni, shippai shite shimatta.", id:"Karena kurangnya pengalaman, akhirnya gagal."},
     {jp:"若さゆえの過ちだった。", romaji:"Wakasa yue no ayamachi datta.", id:"Itu adalah kesalahan yang terjadi karena kemudaan."}
   ]}
]},

// ============ BAB 2 ============
{bab:2, judul:"Syarat & Batas Kondisi", pola:[
  {bentuk:"〜ないかぎり", arti:"selama tidak ~ (maka tidak akan)", penjelasan:"Menyatakan bahwa selama syarat negatif ini tidak berubah, hasil tertentu tidak akan terjadi.",
   contoh:[
     {jp:"努力しないかぎり、成功はできない。", romaji:"Doryoku shinai kagiri, seikou wa dekinai.", id:"Selama tidak berusaha, tidak akan bisa sukses."},
     {jp:"謝らないかぎり、許すつもりはない。", romaji:"Ayamaranai kagiri, yurusu tsumori wa nai.", id:"Selama tidak minta maaf, saya tidak berniat memaafkan."}
   ]},
  {bentuk:"〜ないとも限らない", arti:"tidak menutup kemungkinan ~", penjelasan:"Menyatakan bahwa suatu kemungkinan (meski kecil) tidak bisa disingkirkan sepenuhnya.",
   contoh:[
     {jp:"明日、雨が降らないとも限らない。", romaji:"Ashita, ame ga furanai to mo kagiranai.", id:"Besok, tidak menutup kemungkinan akan hujan."},
     {jp:"失敗しないとも限らないから、準備しておこう。", romaji:"Shippai shinai to mo kagiranai kara, junbi shite okou.", id:"Karena tidak menutup kemungkinan gagal, mari bersiap-siap."}
   ]},
  {bentuk:"〜ものなら", arti:"kalau sampai ~ (mengandaikan hal berisiko)", penjelasan:"Mengandaikan kemungkinan terjadinya sesuatu yang sulit/berisiko, sering diikuti akibat serius.",
   contoh:[
     {jp:"できるものなら、今すぐ会いたい。", romaji:"Dekiru mono nara, ima sugu aitai.", id:"Kalau bisa, saya ingin bertemu sekarang juga."},
     {jp:"遅刻しようものなら、大変なことになる。", romaji:"Chikoku shiyou mono nara, taihen na koto ni naru.", id:"Kalau sampai terlambat, bisa jadi masalah besar."}
   ]},
  {bentuk:"〜くらいなら", arti:"daripada ~ (lebih baik)", penjelasan:"Menyatakan bahwa pilihan yang disebutkan sangat tidak diinginkan, sampai-sampai pilihan lain (biasanya juga tidak enak) lebih dipilih.",
   contoh:[
     {jp:"謝るくらいなら、最初からやらない。", romaji:"Ayamaru kurai nara, saisho kara yaranai.", id:"Daripada harus minta maaf, lebih baik tidak melakukannya dari awal."},
     {jp:"あの人に頼むくらいなら、自分でやる。", romaji:"Ano hito ni tanomu kurai nara, jibun de yaru.", id:"Daripada minta tolong orang itu, lebih baik saya lakukan sendiri."}
   ]},
  {bentuk:"〜さもないと", arti:"kalau tidak begitu ~ (maka)", penjelasan:"Memberikan peringatan: jika syarat sebelumnya tidak dipenuhi, akibat buruk akan terjadi.",
   contoh:[
     {jp:"早く出発しよう。さもないと、遅れてしまう。", romaji:"Hayaku shuppatsu shiyou. Samonaito, okurete shimau.", id:"Ayo berangkat lebih cepat. Kalau tidak, kita akan terlambat."},
     {jp:"薬を飲みなさい。さもないと、悪化しますよ。", romaji:"Kusuri o nominasai. Samonaito, akka shimasu yo.", id:"Minumlah obat. Kalau tidak, akan memburuk lho."}
   ]}
]},

// ============ BAB 3 ============
{bab:3, judul:"Proses & Tahapan Waktu", pola:[
  {bentuk:"〜あげく(に)", arti:"pada akhirnya ~ (setelah proses, biasanya negatif)", penjelasan:"Menyatakan hasil akhir (biasanya tidak menyenangkan) setelah melalui proses panjang penuh usaha/kebingungan.",
   contoh:[
     {jp:"長時間迷ったあげく、結局買わなかった。", romaji:"Choujikan mayotta ageku, kekkyoku kawanakatta.", id:"Setelah bimbang lama, akhirnya tidak jadi membeli."},
     {jp:"さんざん悩んだあげく、会社を辞めることにした。", romaji:"Sanzan nayanda ageku, kaisha o yameru koto ni shita.", id:"Setelah galau habis-habisan, akhirnya memutuskan berhenti kerja."}
   ]},
  {bentuk:"〜末に", arti:"setelah melalui ~ (proses panjang, hasil akhir)", penjelasan:"Mirip あげく tapi lebih netral (bisa hasil positif maupun negatif), menekankan proses panjang sebelum hasil akhir.",
   contoh:[
     {jp:"長い議論の末に、結論が出た。", romaji:"Nagai giron no sue ni, ketsuron ga deta.", id:"Setelah diskusi panjang, akhirnya keluar kesimpulan."},
     {jp:"苦労の末に、夢を実現させた。", romaji:"Kurou no sue ni, yume o jitsugen saseta.", id:"Setelah melalui kesulitan, akhirnya mewujudkan mimpi."}
   ]},
  {bentuk:"〜次第（すぐに）", arti:"begitu ~ langsung ~", penjelasan:"Menyatakan suatu tindakan dilakukan segera setelah hal pertama selesai/terjadi.",
   contoh:[
     {jp:"到着し次第、ご連絡いたします。", romaji:"Touchaku shidai, gorenraku itashimasu.", id:"Begitu tiba, saya akan segera menghubungi."},
     {jp:"準備ができ次第、出発しましょう。", romaji:"Junbi ga deki shidai, shuppatsu shimashou.", id:"Begitu persiapan selesai, mari kita berangkat."}
   ]},
  {bentuk:"〜次第だ", arti:"begitulah ceritanya / tergantung ~", penjelasan:"(1) Menjelaskan latar belakang/alasan suatu keadaan (begitulah ceritanya). (2) Setelah kata benda: menyatakan sesuatu tergantung pada hal tersebut.",
   contoh:[
     {jp:"事情があって、遅れた次第です。", romaji:"Jijou ga atte, okureta shidai desu.", id:"Ada suatu keadaan, begitulah ceritanya saya jadi terlambat."},
     {jp:"合格できるかどうかは、本人の努力次第だ。", romaji:"Goukaku dekiru ka dou ka wa, honnin no doryoku shidai da.", id:"Bisa lulus atau tidak, tergantung usaha orangnya sendiri."}
   ]},
  {bentuk:"〜折に", arti:"pada kesempatan ~", penjelasan:"Menyatakan suatu peristiwa terjadi bertepatan dengan kesempatan/momen tertentu (bahasa formal/sopan).",
   contoh:[
     {jp:"日本に行った折に、先生を訪ねた。", romaji:"Nihon ni itta ori ni, sensei o tazuneta.", id:"Pada kesempatan pergi ke Jepang, saya mengunjungi guru."},
     {jp:"またお会いできる折には、ぜひご連絡ください。", romaji:"Mata oai dekiru ori ni wa, zehi gorenraku kudasai.", id:"Pada kesempatan kita bisa bertemu lagi, mohon hubungi saya."}
   ]}
]},

// ============ BAB 4 ============
{bab:4, judul:"Batasan & Pengecualian", pola:[
  {bentuk:"〜どころではない", arti:"bukan saatnya/keadaan untuk ~", penjelasan:"Menyatakan situasi tidak memungkinkan untuk melakukan sesuatu karena ada hal lain yang lebih mendesak.",
   contoh:[
     {jp:"忙しくて、旅行どころではない。", romaji:"Isogashikute, ryokou dokoro dewa nai.", id:"Terlalu sibuk, bukan saatnya untuk liburan."},
     {jp:"台風で、外出どころではなかった。", romaji:"Taifuu de, gaishutsu dokoro dewa nakatta.", id:"Karena topan, bukan keadaan untuk keluar rumah."}
   ]},
  {bentuk:"〜抜きで／抜きにして", arti:"tanpa ~", penjelasan:"Menyatakan sesuatu dilakukan tanpa unsur tertentu yang biasanya ada.",
   contoh:[
     {jp:"冗談抜きで、真剣に話しましょう。", romaji:"Joudan nuki de, shinken ni hanashimashou.", id:"Tanpa bercanda, mari bicara serius."},
     {jp:"前置き抜きにして、本題に入りましょう。", romaji:"Maeoki nuki ni shite, hondai ni hairimashou.", id:"Tanpa basa-basi, mari langsung ke pokok pembicaraan."}
   ]},
  {bentuk:"〜を問わず", arti:"tanpa memandang ~", penjelasan:"Menyatakan sesuatu berlaku tanpa mempedulikan perbedaan yang disebutkan (usia, jenis kelamin, dsb).",
   contoh:[
     {jp:"年齢を問わず、誰でも参加できる。", romaji:"Nenrei o towazu, dare demo sanka dekiru.", id:"Tanpa memandang usia, siapa saja bisa ikut serta."},
     {jp:"昼夜を問わず、働いている。", romaji:"Chuuya o towazu, hataraite iru.", id:"Bekerja tanpa memandang siang atau malam."}
   ]},
  {bentuk:"〜はもとより", arti:"apalagi / tidak usah dikatakan lagi ~", penjelasan:"Menyatakan hal pertama sudah pasti, dan hal berikutnya juga berlaku (bahkan lebih).",
   contoh:[
     {jp:"英語はもとより、フランス語も話せる。", romaji:"Eigo wa motoyori, furansugo mo hanaseru.", id:"Bahasa Inggris sudah pasti, bahasa Prancis pun bisa."},
     {jp:"平日はもとより、休日も働いている。", romaji:"Heijitsu wa motoyori, kyuujitsu mo hataraite iru.", id:"Hari kerja sudah pasti, hari libur pun bekerja."}
   ]},
  {bentuk:"〜もかまわず", arti:"tidak peduli/mengabaikan ~", penjelasan:"Menyatakan melakukan sesuatu tanpa mempedulikan hal yang biasanya jadi pertimbangan.",
   contoh:[
     {jp:"周りの目もかまわず、大声で泣いた。", romaji:"Mawari no me mo kamawazu, oogoe de naita.", id:"Tanpa peduli pandangan sekitar, dia menangis keras-keras."},
     {jp:"雨に濡れるのもかまわず、走り続けた。", romaji:"Ame ni nureru no mo kamawazu, hashiritsuzuketa.", id:"Tanpa peduli basah kehujanan, dia terus berlari."}
   ]}
]},

// ============ BAB 5 ============
{bab:5, judul:"Perbandingan & Sudut Pandang", pola:[
  {bentuk:"〜からいうと／からいえば／からして", arti:"dari sudut pandang ~", penjelasan:"Menyatakan suatu penilaian didasarkan pada sudut pandang atau kriteria tertentu.",
   contoh:[
     {jp:"経験から言うと、この方法が一番いい。", romaji:"Keiken kara iu to, kono houhou ga ichiban ii.", id:"Dari sudut pandang pengalaman, cara ini yang paling baik."},
     {jp:"あの態度からして、彼は反省していない。", romaji:"Ano taido kara shite, kare wa hansei shite inai.", id:"Dari sikapnya saja, dia terlihat tidak menyesal."}
   ]},
  {bentuk:"〜にしたら／にすれば", arti:"kalau dari sudut pandang ~ (orang lain)", penjelasan:"Menyatakan sesuatu dilihat dari perspektif orang/pihak lain yang disebutkan.",
   contoh:[
     {jp:"親にしたら、子供はいつまでも子供だ。", romaji:"Oya ni shitara, kodomo wa itsu made mo kodomo da.", id:"Kalau dari sudut pandang orang tua, anak selamanya tetap anak."},
     {jp:"初心者にすれば、これは難しい問題だ。", romaji:"Shoshinsha ni sureba, kore wa muzukashii mondai da.", id:"Kalau dari sudut pandang pemula, ini soal yang sulit."}
   ]},
  {bentuk:"〜にしては", arti:"untuk ukuran ~ (tidak sesuai ekspektasi)", penjelasan:"Menyatakan sesuatu tidak sesuai dengan yang diharapkan berdasarkan kategori/kondisi yang disebutkan.",
   contoh:[
     {jp:"初心者にしては、上手に弾けている。", romaji:"Shoshinsha ni shite wa, jouzu ni hikete iru.", id:"Untuk ukuran pemula, dia bermain (musik) dengan bagus."},
     {jp:"3月にしては、今日は寒い。", romaji:"Sangatsu ni shite wa, kyou wa samui.", id:"Untuk ukuran bulan Maret, hari ini dingin."}
   ]},
  {bentuk:"〜にしても", arti:"sekalipun / bahkan kalau ~", penjelasan:"Mengakui suatu kondisi, tetapi menyatakan hal itu tidak mengubah kesimpulan/penilaian.",
   contoh:[
     {jp:"忙しいにしても、返事ぐらいできるはずだ。", romaji:"Isogashii ni shite mo, henji gurai dekiru hazu da.", id:"Sekalipun sibuk, seharusnya bisa membalas pesan sedikit saja."},
     {jp:"冗談にしても、笑えない話だ。", romaji:"Joudan ni shite mo, waraenai hanashi da.", id:"Bahkan kalau itu candaan, ceritanya tidak lucu."}
   ]},
  {bentuk:"〜というより", arti:"lebih tepat dikatakan ~", penjelasan:"Menyatakan bahwa ungkapan kedua lebih tepat menggambarkan sesuatu dibanding ungkapan pertama.",
   contoh:[
     {jp:"彼は天才というより、努力家だ。", romaji:"Kare wa tensai to iu yori, doryokuka da.", id:"Dia lebih tepat dikatakan pekerja keras daripada jenius."},
     {jp:"これは料理というより、芸術だ。", romaji:"Kore wa ryouri to iu yori, geijutsu da.", id:"Ini lebih tepat dikatakan seni daripada masakan."}
   ]}
]},

// ============ BAB 6 ============
{bab:6, judul:"Proses Berkelanjutan", pola:[
  {bentuk:"〜につれて", arti:"seiring dengan ~", penjelasan:"Menyatakan dua perubahan terjadi bersamaan secara alami/gradual.",
   contoh:[
     {jp:"年を取るにつれて、体力が落ちる。", romaji:"Toshi o toru ni tsurete, tairyoku ga ochiru.", id:"Seiring bertambahnya usia, stamina menurun."},
     {jp:"時代が変わるにつれて、価値観も変わる。", romaji:"Jidai ga kawaru ni tsurete, kachikan mo kawaru.", id:"Seiring berubahnya zaman, pandangan nilai juga berubah."}
   ]},
  {bentuk:"〜に伴って", arti:"seiring/bersamaan dengan ~", penjelasan:"Mirip につれて, tapi bisa dipakai untuk perubahan yang lebih formal/besar, termasuk peristiwa satu kali.",
   contoh:[
     {jp:"人口の増加に伴って、住宅問題が深刻化した。", romaji:"Jinkou no zouka ni tomonatte, juutaku mondai ga shinkokuka shita.", id:"Seiring pertambahan populasi, masalah perumahan makin serius."},
     {jp:"技術の進歩に伴い、生活が便利になった。", romaji:"Gijutsu no shinpo ni tomonai, seikatsu ga benri ni natta.", id:"Seiring kemajuan teknologi, kehidupan menjadi lebih praktis."}
   ]},
  {bentuk:"〜とともに", arti:"bersamaan dengan ~", penjelasan:"Menyatakan dua hal terjadi bersamaan, atau satu hal terjadi seiring hal lain (waktu/perubahan).",
   contoh:[
     {jp:"卒業とともに、故郷を離れた。", romaji:"Sotsugyou to tomo ni, kokyou o hanareta.", id:"Bersamaan dengan kelulusan, saya meninggalkan kampung halaman."},
     {jp:"経済発展とともに、環境問題も深刻になった。", romaji:"Keizai hatten to tomo ni, kankyou mondai mo shinkoku ni natta.", id:"Bersamaan dengan perkembangan ekonomi, masalah lingkungan juga makin serius."}
   ]},
  {bentuk:"〜に加えて", arti:"selain itu, ditambah ~", penjelasan:"Menyatakan penambahan satu hal lagi pada hal yang sudah disebutkan.",
   contoh:[
     {jp:"雨に加えて、風も強くなってきた。", romaji:"Ame ni kuwaete, kaze mo tsuyoku natte kita.", id:"Selain hujan, anginnya pun mulai kencang."},
     {jp:"経験に加えて、資格も持っている。", romaji:"Keiken ni kuwaete, shikaku mo motte iru.", id:"Selain pengalaman, dia juga memiliki sertifikasi."}
   ]},
  {bentuk:"〜にわたって", arti:"meliputi/sepanjang ~ (rentang)", penjelasan:"Menyatakan sesuatu berlangsung atau meliputi rentang waktu/wilayah yang luas.",
   contoh:[
     {jp:"3日間にわたって会議が行われた。", romaji:"Mikkakan ni watatte kaigi ga okonawareta.", id:"Rapat diadakan selama rentang 3 hari."},
     {jp:"全国にわたって調査を行った。", romaji:"Zenkoku ni watatte chousa o okonatta.", id:"Melakukan survei yang meliputi seluruh negeri."}
   ]}
]},

// ============ BAB 7 ============
{bab:7, judul:"Dasar & Acuan", pola:[
  {bentuk:"〜に基づいて", arti:"berdasarkan ~", penjelasan:"Menyatakan sesuatu dilakukan dengan mengacu pada dasar/aturan tertentu.",
   contoh:[
     {jp:"事実に基づいて報告する。", romaji:"Jijitsu ni motozuite houkoku suru.", id:"Melaporkan berdasarkan fakta."},
     {jp:"法律に基づいて処理された。", romaji:"Houritsu ni motozuite shori sareta.", id:"Diproses berdasarkan hukum."}
   ]},
  {bentuk:"〜に沿って", arti:"sesuai dengan ~ (garis/arah)", penjelasan:"Menyatakan sesuatu dilakukan mengikuti garis, arah, atau rencana yang sudah ditentukan.",
   contoh:[
     {jp:"計画に沿って進める。", romaji:"Keikaku ni sotte susumeru.", id:"Melanjutkan sesuai dengan rencana."},
     {jp:"マニュアルに沿って作業する。", romaji:"Manyuaru ni sotte sagyou suru.", id:"Bekerja sesuai dengan manual."}
   ]},
  {bentuk:"〜をもとに", arti:"berdasarkan (sebagai dasar) ~", penjelasan:"Menyatakan sesuatu dibuat/disusun dengan menjadikan hal tertentu sebagai dasar/bahan.",
   contoh:[
     {jp:"実話をもとに作られた映画だ。", romaji:"Jitsuwa o moto ni tsukurareta eiga da.", id:"Film yang dibuat berdasarkan kisah nyata."},
     {jp:"アンケート結果をもとに改善する。", romaji:"Ankeeto kekka o moto ni kaizen suru.", id:"Melakukan perbaikan berdasarkan hasil survei."}
   ]},
  {bentuk:"〜に応じて", arti:"sesuai dengan ~ (menyesuaikan)", penjelasan:"Menyatakan sesuatu disesuaikan mengikuti perubahan kondisi/kebutuhan tertentu.",
   contoh:[
     {jp:"収入に応じて税金が変わる。", romaji:"Shuunyuu ni oujite zeikin ga kawaru.", id:"Pajak berubah sesuai dengan pendapatan."},
     {jp:"状況に応じて対応する。", romaji:"Joukyou ni oujite taiou suru.", id:"Menanggapi sesuai dengan situasi."}
   ]},
  {bentuk:"〜にこたえて", arti:"menjawab/merespon ~ (permintaan/harapan)", penjelasan:"Menyatakan suatu tindakan dilakukan sebagai respon terhadap permintaan, harapan, atau dukungan.",
   contoh:[
     {jp:"ファンの声援にこたえて、アンコールをした。", romaji:"Fan no seien ni kotaete, ankooru o shita.", id:"Merespon dukungan penggemar, mereka melakukan encore."},
     {jp:"顧客の要望にこたえて、新機能を追加した。", romaji:"Kokyaku no youbou ni kotaete, shin kinou o tsuika shita.", id:"Menjawab permintaan pelanggan, menambahkan fitur baru."}
   ]}
]},

// ============ BAB 8 ============
{bab:8, judul:"Titik Awal & Pemicu", pola:[
  {bentuk:"〜をきっかけに", arti:"dengan diawali oleh ~", penjelasan:"Menyatakan suatu peristiwa menjadi awal mula/pemicu terjadinya perubahan atau tindakan baru.",
   contoh:[
     {jp:"友人の紹介をきっかけに、この仕事を始めた。", romaji:"Yuujin no shoukai o kikkake ni, kono shigoto o hajimeta.", id:"Diawali oleh perkenalan dari teman, saya memulai pekerjaan ini."},
     {jp:"病気をきっかけに、健康について考えるようになった。", romaji:"Byouki o kikkake ni, kenkou ni tsuite kangaeru you ni natta.", id:"Diawali oleh sakit, saya jadi mulai memikirkan kesehatan."}
   ]},
  {bentuk:"〜を契機に", arti:"dengan menjadikan momentum ~", penjelasan:"Mirip をきっかけに tetapi lebih formal, menyatakan sesuatu dijadikan momentum untuk perubahan besar.",
   contoh:[
     {jp:"オリンピックを契機に、インフラが整備された。", romaji:"Orinpikku o keiki ni, infura ga seibi sareta.", id:"Dengan momentum Olimpiade, infrastruktur dibangun."},
     {jp:"この事件を契機に、法律が改正された。", romaji:"Kono jiken o keiki ni, houritsu ga kaisei sareta.", id:"Dengan momentum kasus ini, undang-undang direvisi."}
   ]},
  {bentuk:"〜を機に", arti:"dengan kesempatan itu ~", penjelasan:"Menyatakan suatu peristiwa dijadikan kesempatan untuk memulai sesuatu yang baru.",
   contoh:[
     {jp:"結婚を機に、新しい生活を始めた。", romaji:"Kekkon o ki ni, atarashii seikatsu o hajimeta.", id:"Dengan kesempatan pernikahan, memulai kehidupan baru."},
     {jp:"退職を機に、田舎に引っ越した。", romaji:"Taishoku o ki ni, inaka ni hikkoshita.", id:"Dengan kesempatan pensiun, pindah ke desa."}
   ]},
  {bentuk:"〜反面", arti:"di sisi lain ~ (kontras dua sifat)", penjelasan:"Menyatakan dua sisi yang berlawanan dari satu hal/orang yang sama.",
   contoh:[
     {jp:"この仕事は給料がいい反面、責任も重い。", romaji:"Kono shigoto wa kyuuryou ga ii hanmen, sekinin mo omoi.", id:"Pekerjaan ini gajinya bagus, di sisi lain tanggung jawabnya juga berat."},
     {jp:"便利な反面、危険性もある。", romaji:"Benri na hanmen, kikensei mo aru.", id:"Praktis di satu sisi, tapi di sisi lain juga ada risikonya."}
   ]},
  {bentuk:"〜というのは", arti:"yang dimaksud dengan ~ adalah", penjelasan:"Digunakan untuk memberikan definisi atau penjelasan lebih lanjut tentang suatu istilah/konsep.",
   contoh:[
     {jp:"幸せというのは、人それぞれ違うものだ。", romaji:"Shiawase to iu no wa, hito sorezore chigau mono da.", id:"Yang namanya kebahagiaan, berbeda-beda untuk setiap orang."},
     {jp:"リーダーというのは、責任を持つ人のことだ。", romaji:"Riidaa to iu no wa, sekinin o motsu hito no koto da.", id:"Yang dimaksud pemimpin adalah orang yang memikul tanggung jawab."}
   ]}
]},

// ============ BAB 9 ============
{bab:9, judul:"Penekanan Emosi & Ketidakmampuan", pola:[
  {bentuk:"〜ないではいられない", arti:"tidak bisa tidak melakukan ~", penjelasan:"Menyatakan dorongan emosi yang begitu kuat sehingga tidak mungkin menahan diri dari melakukan sesuatu.",
   contoh:[
     {jp:"感動して、泣かないではいられなかった。", romaji:"Kandou shite, nakanai de wa irarenakatta.", id:"Terharu sampai tidak bisa menahan tangis."},
     {jp:"あの映画を見ると、笑わないではいられない。", romaji:"Ano eiga o miru to, warawanai de wa irarenai.", id:"Kalau menonton film itu, tidak bisa tidak tertawa."}
   ]},
  {bentuk:"〜てしかたがない／てしょうがない", arti:"sangat (tak tertahankan)", penjelasan:"Menyatakan perasaan atau kondisi fisik yang sangat kuat, sampai tidak tertahankan.",
   contoh:[
     {jp:"彼のことが気になってしかたがない。", romaji:"Kare no koto ga ki ni natte shikata ga nai.", id:"Sangat memikirkan dia, tidak tertahankan."},
     {jp:"のどが渇いてしょうがない。", romaji:"Nodo ga kawaite shou ga nai.", id:"Tenggorokan sangat haus, tak tertahankan."}
   ]},
  {bentuk:"〜てたまらない", arti:"tak tertahankan ~", penjelasan:"Mirip てしかたがない, menyatakan perasaan/keinginan yang sangat kuat hingga sulit ditahan.",
   contoh:[
     {jp:"うれしくてたまらない。", romaji:"Ureshikute tamaranai.", id:"Senangnya tak tertahankan."},
     {jp:"故郷が恋しくてたまらない。", romaji:"Kokyou ga koishikute tamaranai.", id:"Sangat rindu kampung halaman, tak tertahankan."}
   ]},
  {bentuk:"〜かねる", arti:"sulit untuk ~ (menolak halus)", penjelasan:"Bentuk sopan untuk menyatakan kesulitan/ketidakmampuan melakukan sesuatu, sering dipakai untuk menolak secara halus.",
   contoh:[
     {jp:"その質問にはお答えしかねます。", romaji:"Sono shitsumon ni wa okotae shikanemasu.", id:"Untuk pertanyaan itu, saya sulit menjawabnya (menolak halus)."},
     {jp:"急な変更には対応しかねる。", romaji:"Kyuu na henkou ni wa taiou shikaneru.", id:"Sulit untuk menanggapi perubahan mendadak."}
   ]},
  {bentuk:"〜かねない", arti:"bisa jadi/mungkin saja ~ (hal buruk)", penjelasan:"Menyatakan kemungkinan terjadinya hal negatif/buruk, berdasarkan sifat atau kondisi yang ada.",
   contoh:[
     {jp:"そんな運転は事故を起こしかねない。", romaji:"Sonna unten wa jiko o okoshikanenai.", id:"Mengemudi seperti itu bisa saja menyebabkan kecelakaan."},
     {jp:"無理をすると、体を壊しかねない。", romaji:"Muri o suru to, karada o kowashikanenai.", id:"Kalau memaksakan diri, bisa saja merusak kesehatan."}
   ]}
]},

// ============ BAB 10 ============
{bab:10, judul:"Kepastian & Ketidakmungkinan", pola:[
  {bentuk:"〜にほかならない", arti:"tidak lain adalah ~", penjelasan:"Menegaskan bahwa suatu hal adalah persis seperti yang disebutkan, tidak ada penjelasan lain.",
   contoh:[
     {jp:"この成功は努力の結果にほかならない。", romaji:"Kono seikou wa doryoku no kekka ni hoka naranai.", id:"Kesuksesan ini tidak lain adalah hasil dari usaha."},
     {jp:"彼の行動は愛情表現にほかならない。", romaji:"Kare no koudou wa aijou hyougen ni hoka naranai.", id:"Tindakannya tidak lain adalah bentuk ungkapan kasih sayang."}
   ]},
  {bentuk:"〜にすぎない", arti:"tidak lebih dari ~", penjelasan:"Menyatakan bahwa sesuatu hanya sebatas itu saja, tidak lebih besar/penting dari yang disebutkan.",
   contoh:[
     {jp:"これはほんの一例にすぎない。", romaji:"Kore wa hon no ichirei ni suginai.", id:"Ini tidak lebih dari sekadar satu contoh."},
     {jp:"彼はまだ学生にすぎない。", romaji:"Kare wa mada gakusei ni suginai.", id:"Dia tidak lebih dari seorang murid biasa."}
   ]},
  {bentuk:"〜っこない", arti:"mustahil/tidak mungkin ~", penjelasan:"Bentuk percakapan santai untuk menyatakan keyakinan kuat bahwa sesuatu tidak mungkin terjadi.",
   contoh:[
     {jp:"こんな難しい問題、できっこない。", romaji:"Konna muzukashii mondai, dekikkonai.", id:"Soal sesulit ini, mustahil bisa dikerjakan."},
     {jp:"彼が遅刻するなんて、あり得っこない。", romaji:"Kare ga chikoku suru nante, arieokkonai.", id:"Dia sampai terlambat, itu mustahil terjadi."}
   ]},
  {bentuk:"〜まい", arti:"tidak akan ~ (negasi niat/dugaan formal)", penjelasan:"Bentuk formal untuk menyatakan niat kuat tidak melakukan sesuatu, atau dugaan bahwa sesuatu tidak akan terjadi.",
   contoh:[
     {jp:"二度と同じ失敗はするまい。", romaji:"Nido to onaji shippai wa surumai.", id:"Saya tidak akan mengulangi kesalahan yang sama."},
     {jp:"彼は約束を忘れまい。", romaji:"Kare wa yakusoku o wasuremai.", id:"Dia sepertinya tidak akan melupakan janjinya."}
   ]},
  {bentuk:"〜ようがない", arti:"tidak ada cara untuk ~", penjelasan:"Menyatakan bahwa tidak ada cara/metode yang bisa dilakukan untuk sesuatu, karena kondisi tertentu.",
   contoh:[
     {jp:"連絡先がわからないので、確認しようがない。", romaji:"Renrakusaki ga wakaranai node, kakunin shiyou ga nai.", id:"Karena tidak tahu kontaknya, tidak ada cara untuk memastikan."},
     {jp:"壊れすぎて、直しようがない。", romaji:"Kowaresugite, naoshiyou ga nai.", id:"Terlalu rusak, tidak ada cara untuk memperbaikinya."}
   ]}
]}
];
