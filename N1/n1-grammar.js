// ===================================================================
// Qategori Nihongo - Materi Bunpou (文法) JLPT N1
// window.N1_GRAMMAR: array bab, tiap bab punya beberapa pola.
// Level N1: tata bahasa tingkat lanjut, formal, dan gaya sastra/tulisan.
// ===================================================================
window.N1_GRAMMAR = [

  {bab:1, judul:"Menyatakan Meski / Walaupun (Formal)", pola:[
    {bentuk:"〜にもかかわらず", arti:"meskipun ~ (bertentangan dengan harapan)", penjelasan:"Menyatakan sesuatu terjadi bertentangan dengan apa yang diharapkan atau diduga sebelumnya. Lebih formal daripada のに.",
     contoh:[
       {jp:"努力したにもかかわらず、試験に落ちてしまった。", romaji:"Doryoku shita ni mo kakawarazu, shiken ni ochite shimatta.", id:"Meskipun sudah berusaha, saya tetap gagal ujian."},
       {jp:"台風にもかかわらず、会議は予定通り行われた。", romaji:"Taifuu ni mo kakawarazu, kaigi wa yotei doori okonawareta.", id:"Meskipun ada topan, rapat tetap dilaksanakan sesuai jadwal."}
     ]},
    {bentuk:"〜ながらも", arti:"meskipun ~ (tetap)", penjelasan:"Menyatakan dua hal yang bertentangan terjadi bersamaan; sesuatu dilakukan meski kondisi sebaliknya berlaku.",
     contoh:[
       {jp:"忙しいながらも、彼は毎日運動している。", romaji:"Isogashii nagara mo, kare wa mainichi undou shite iru.", id:"Meskipun sibuk, dia tetap berolahraga setiap hari."},
       {jp:"子供ながらも、しっかりした考えを持っている。", romaji:"Kodomo nagara mo, shikkari shita kangae o motte iru.", id:"Meskipun masih anak-anak, dia punya pemikiran yang matang."}
     ]},
    {bentuk:"〜とはいえ", arti:"meskipun dikatakan ~ / walau begitu", penjelasan:"Mengakui suatu fakta namun menambahkan bahwa kenyataannya tidak sepenuhnya sesuai dengan itu.",
     contoh:[
       {jp:"専門家とはいえ、すべてを知っているわけではない。", romaji:"Senmonka to wa ie, subete o shitte iru wake de wa nai.", id:"Meskipun ahli, bukan berarti dia tahu segalanya."},
       {jp:"景気が回復したとはいえ、まだ油断はできない。", romaji:"Keiki ga kaifuku shita to wa ie, mada yudan wa dekinai.", id:"Meskipun ekonomi sudah pulih, masih belum bisa lengah."}
     ]},
    {bentuk:"〜ものの", arti:"meskipun ~, namun", penjelasan:"Menyatakan suatu kenyataan diakui, tetapi diikuti hasil yang berbeda dari yang diharapkan.",
     contoh:[
       {jp:"計画は立てたものの、実行には至っていない。", romaji:"Keikaku wa tateta mono no, jikkou ni wa itatte inai.", id:"Meskipun rencananya sudah dibuat, belum sampai dilaksanakan."},
       {jp:"薬を飲んだものの、頭痛は治らなかった。", romaji:"Kusuri o nonda mono no, zutsuu wa naoranakatta.", id:"Meskipun sudah minum obat, sakit kepalanya tidak sembuh."}
     ]},
    {bentuk:"〜をよそに", arti:"tidak mempedulikan ~ / mengabaikan ~", penjelasan:"Menyatakan sesuatu dilakukan tanpa menghiraukan kekhawatiran, harapan, atau situasi sekitar.",
     contoh:[
       {jp:"周囲の反対をよそに、彼は計画を進めた。", romaji:"Shuui no hantai o yoso ni, kare wa keikaku o susumeta.", id:"Tanpa mempedulikan penolakan orang sekitar, dia melanjutkan rencananya."},
       {jp:"親の心配をよそに、娘は一人で旅に出た。", romaji:"Oya no shinpai o yoso ni, musume wa hitori de tabi ni deta.", id:"Mengabaikan kekhawatiran orang tuanya, putrinya pergi bepergian sendiri."}
     ]}
  ]},

  {bab:2, judul:"Menyatakan Sarana, Dasar, dan Batas", pola:[
    {bentuk:"〜をもって", arti:"dengan ~ / dengan cara ~ / pada saat ~", penjelasan:"Menyatakan sarana formal atau batas waktu/penutupan resmi suatu hal.",
     contoh:[
       {jp:"本日をもって、営業を終了いたします。", romaji:"Honjitsu o motte, eigyou o shuuryou itashimasu.", id:"Mulai hari ini, kami mengakhiri operasional usaha ini."},
       {jp:"彼の実力をもってすれば、合格は間違いない。", romaji:"Kare no jitsuryoku o motte sureba, goukaku wa machigainai.", id:"Dengan kemampuannya, dia pasti akan lulus."}
     ]},
    {bentuk:"〜に基づいて", arti:"berdasarkan ~", penjelasan:"Menyatakan sesuatu dilakukan dengan dasar atau acuan tertentu.",
     contoh:[
       {jp:"事実に基づいて報告書を作成した。", romaji:"Jijitsu ni motozuite houkokusho o sakusei shita.", id:"Laporan dibuat berdasarkan fakta."},
       {jp:"法律に基づいて処分が決定された。", romaji:"Houritsu ni motozuite shobun ga kettei sareta.", id:"Sanksi ditentukan berdasarkan undang-undang."}
     ]},
    {bentuk:"〜に即して", arti:"sesuai dengan ~ / selaras dengan ~", penjelasan:"Menyatakan sesuatu disesuaikan dengan kenyataan, situasi, atau standar tertentu.",
     contoh:[
       {jp:"現実に即して対策を考えるべきだ。", romaji:"Genjitsu ni sokushite taisaku o kangaeru beki da.", id:"Sebaiknya memikirkan solusi yang sesuai dengan kenyataan."},
       {jp:"規則に即して手続きを進める。", romaji:"Kisoku ni sokushite tetsuzuki o susumeru.", id:"Melanjutkan prosedur sesuai dengan aturan."}
     ]},
    {bentuk:"〜の極み", arti:"puncak dari ~ / sangat ~", penjelasan:"Menyatakan sesuatu mencapai tingkat tertinggi/ekstrem, biasanya digunakan dalam ungkapan formal atau sastra.",
     contoh:[
       {jp:"このような賞をいただき、光栄の極みです。", romaji:"Kono you na shou o itadaki, kouei no kiwami desu.", id:"Menerima penghargaan seperti ini adalah suatu kehormatan yang luar biasa."},
       {jp:"彼の行動は無礼の極みだ。", romaji:"Kare no koudou wa burei no kiwami da.", id:"Tindakannya sangat tidak sopan."}
     ]},
    {bentuk:"〜をかぎりに", arti:"sebagai batas terakhir ~", penjelasan:"Menyatakan sesuatu berakhir setelah titik waktu tertentu.",
     contoh:[
       {jp:"今日をかぎりに、たばこをやめることにした。", romaji:"Kyou o kagiri ni, tabako o yameru koto ni shita.", id:"Mulai hari ini, saya memutuskan berhenti merokok."},
       {jp:"今月をかぎりに彼は退職する。", romaji:"Kongetsu o kagiri ni kare wa taishoku suru.", id:"Bulan ini adalah bulan terakhir dia bekerja sebelum pensiun."}
     ]}
  ]},

  {bab:3, judul:"Menyatakan Tidak Bisa Tidak / Keharusan Kuat", pola:[
    {bentuk:"〜ずにはおかない", arti:"pasti akan ~ / tidak akan membiarkan begitu saja", penjelasan:"Menyatakan sesuatu pasti terjadi secara alami/emosional, tidak bisa dihindari.",
     contoh:[
       {jp:"この映画は観客を感動させずにはおかない。", romaji:"Kono eiga wa kankyaku o kandou sasezu ni wa okanai.", id:"Film ini pasti akan menyentuh hati para penonton."},
       {jp:"彼の裏切りは怒りを招かずにはおかなかった。", romaji:"Kare no uragiri wa ikari o manekazu ni wa okanakatta.", id:"Pengkhianatannya pasti memicu kemarahan."}
     ]},
    {bentuk:"〜ないではいられない", arti:"tidak bisa menahan untuk tidak ~", penjelasan:"Menyatakan perasaan atau dorongan yang kuat sehingga tidak bisa menahan diri untuk melakukan sesuatu.",
     contoh:[
       {jp:"あの光景を見たら、涙を流さないではいられない。", romaji:"Ano koukei o mitara, namida o nagasanaide wa irarenai.", id:"Melihat pemandangan itu, tidak bisa menahan air mata."},
       {jp:"美しい景色を見ると、写真を撮らないではいられない。", romaji:"Utsukushii keshiki o miru to, shashin o toranaide wa irarenai.", id:"Melihat pemandangan indah, tidak tahan untuk tidak memotret."}
     ]},
    {bentuk:"〜を禁じ得ない", arti:"tidak bisa menahan ~ (perasaan)", penjelasan:"Ungkapan formal menyatakan tidak dapat menahan suatu emosi seperti kemarahan, keharuan, atau keheranan.",
     contoh:[
       {jp:"その悲惨な状況に同情を禁じ得ない。", romaji:"Sono hisan na joukyou ni doujou o kinjienai.", id:"Tidak bisa menahan rasa simpati terhadap situasi tragis itu."},
       {jp:"彼の無責任な発言に驚きを禁じ得なかった。", romaji:"Kare no musekinin na hatsugen ni odoroki o kinjienakatta.", id:"Tidak bisa menahan keterkejutan atas pernyataannya yang tidak bertanggung jawab."}
     ]},
    {bentuk:"〜てやまない", arti:"terus-menerus ~ (dari hati)", penjelasan:"Ungkapan formal/sastra untuk menyatakan harapan atau perasaan yang terus berlanjut tanpa henti.",
     contoh:[
       {jp:"皆様のご多幸を願ってやみません。", romaji:"Minasama no gotakou o negatte yamimasen.", id:"Saya terus berharap kebahagiaan bagi semua orang."},
       {jp:"彼の成功を期待してやまない。", romaji:"Kare no seikou o kitai shite yamanai.", id:"Saya terus berharap kesuksesannya."}
     ]},
    {bentuk:"〜べからず / 〜べからざる", arti:"tidak boleh ~ / yang tidak boleh ~", penjelasan:"Bentuk larangan klasik/formal, sering ditemukan pada papan peringatan atau tulisan resmi.",
     contoh:[
       {jp:"芝生に入るべからず。", romaji:"Shibafu ni hairu bekarazu.", id:"Dilarang masuk ke area rumput (papan larangan)."},
       {jp:"彼は許すべからざる過ちを犯した。", romaji:"Kare wa yurusu bekarazaru ayamachi o okashita.", id:"Dia melakukan kesalahan yang tidak termaafkan."}
     ]}
  ]},

  {bab:4, judul:"Menyatakan Hampir / Sejauh Itu Tidak", pola:[
    {bentuk:"〜ないまでも", arti:"meski tidak sampai ~, setidaknya", penjelasan:"Menyatakan tingkat minimal yang diharapkan meski tidak mencapai tingkat yang lebih tinggi.",
     contoh:[
       {jp:"毎日とは言わないまでも、週に一度は運動すべきだ。", romaji:"Mainichi to wa iwanai made mo, shuu ni ichido wa undou subeki da.", id:"Meski tidak harus setiap hari, setidaknya olahraga seminggu sekali."},
       {jp:"完璧ではないまでも、基本はできている。", romaji:"Kanpeki de wa nai made mo, kihon wa dekite iru.", id:"Meski tidak sempurna, setidaknya dasar-dasarnya sudah bisa."}
     ]},
    {bentuk:"〜に至っては", arti:"sampai pada hal ~ / khususnya mengenai ~", penjelasan:"Menyatakan kasus ekstrem yang disebutkan sebagai contoh dari suatu kondisi, biasanya bernada kritis.",
     contoh:[
       {jp:"弟に至っては、全く勉強しようとしない。", romaji:"Otouto ni itatte wa, mattaku benkyou shiyou to shinai.", id:"Khususnya adik saya, sama sekali tidak mau belajar."},
       {jp:"今年の夏の暑さに至っては、例年の比ではない。", romaji:"Kotoshi no natsu no atsusa ni itatte wa, reinen no hi de wa nai.", id:"Khususnya panas musim panas tahun ini, tidak bisa dibandingkan dengan tahun biasa."}
     ]},
    {bentuk:"〜に至るまで", arti:"sampai pada ~ (termasuk hal detail)", penjelasan:"Menyatakan cakupan yang sangat luas, mencakup hal-hal detail sekalipun.",
     contoh:[
       {jp:"大きな問題から細かい点に至るまで、全て確認した。", romaji:"Ookina mondai kara komakai ten ni itaru made, subete kakunin shita.", id:"Dari masalah besar hingga detail kecil, semua sudah diperiksa."},
       {jp:"子供から大人に至るまで、幅広い世代に愛されている。", romaji:"Kodomo kara otona ni itaru made, habahiroi sedai ni aisarete iru.", id:"Disukai oleh berbagai generasi, dari anak-anak hingga dewasa."}
     ]},
    {bentuk:"〜とまではいかないが", arti:"meski tidak sampai pada tingkat ~, tetapi", penjelasan:"Menyatakan sesuatu mendekati namun belum mencapai suatu tingkat tertentu.",
     contoh:[
       {jp:"プロとまではいかないが、かなり上手に弾ける。", romaji:"Puro to made wa ikanai ga, kanari jouzu ni hikeru.", id:"Meski belum sampai level profesional, dia bisa bermain dengan cukup mahir."},
       {jp:"大成功とまではいかないが、まずまずの結果だった。", romaji:"Daiseikou to made wa ikanai ga, mazumazu no kekka datta.", id:"Meski belum sampai sukses besar, hasilnya cukup lumayan."}
     ]},
    {bentuk:"〜に足る", arti:"cukup untuk ~ / layak untuk ~", penjelasan:"Menyatakan sesuatu memenuhi standar atau cukup sebagai dasar untuk suatu hal.",
     contoh:[
       {jp:"彼は信頼するに足る人物だ。", romaji:"Kare wa shinrai suru ni taru jinbutsu da.", id:"Dia adalah orang yang layak dipercaya."},
       {jp:"この結果は満足するに足るものだった。", romaji:"Kono kekka wa manzoku suru ni taru mono datta.", id:"Hasil ini cukup memuaskan."}
     ]}
  ]},

  {bab:5, judul:"Menyatakan Segera Setelah / Begitu Terjadi", pola:[
    {bentuk:"〜や否や", arti:"begitu ~, segera", penjelasan:"Menyatakan suatu kejadian terjadi hampir bersamaan dengan kejadian lain, sangat segera.",
     contoh:[
       {jp:"ベルが鳴るや否や、生徒たちは教室を飛び出した。", romaji:"Beru ga naru ya ina ya, seito-tachi wa kyoushitsu o tobidashita.", id:"Begitu bel berbunyi, murid-murid langsung berlari keluar kelas."},
       {jp:"彼の顔を見るや否や、泣き出した。", romaji:"Kare no kao o miru ya ina ya, nakidashita.", id:"Begitu melihat wajahnya, dia langsung menangis."}
     ]},
    {bentuk:"〜が早いか", arti:"begitu ~, segera", penjelasan:"Mirip や否や, menyatakan dua kejadian terjadi hampir bersamaan tanpa jeda.",
     contoh:[
       {jp:"席に着くが早いか、電話が鳴った。", romaji:"Seki ni tsuku ga hayai ka, denwa ga natta.", id:"Begitu duduk di kursi, telepon langsung berdering."},
       {jp:"試合終了のホイッスルが鳴るが早いか、観客は総立ちになった。", romaji:"Shiai shuuryou no hoissuru ga naru ga hayai ka, kankyaku wa souidachi ni natta.", id:"Begitu peluit akhir pertandingan berbunyi, penonton langsung berdiri serentak."}
     ]},
    {bentuk:"〜なり", arti:"segera setelah ~", penjelasan:"Menyatakan tindakan kedua terjadi segera setelah tindakan pertama, tanpa jeda waktu.",
     contoh:[
       {jp:"彼は家に帰るなり、すぐに寝てしまった。", romaji:"Kare wa ie ni kaeru nari, sugu ni nete shimatta.", id:"Begitu pulang ke rumah, dia langsung tidur."},
       {jp:"その知らせを聞くなり、彼女は顔色を変えた。", romaji:"Sono shirase o kiku nari, kanojo wa kaoiro o kaeta.", id:"Begitu mendengar kabar itu, wajahnya langsung berubah."}
     ]},
    {bentuk:"〜そばから", arti:"begitu ~, langsung (berulang)", penjelasan:"Menyatakan sesuatu terjadi berulang kali segera setelah hal sebelumnya selesai, biasanya bernada negatif.",
     contoh:[
       {jp:"片付けるそばから、子供が散らかす。", romaji:"Katazukeru soba kara, kodomo ga chirakasu.", id:"Begitu dibereskan, anak langsung mengacak-acaknya lagi."},
       {jp:"覚えるそばから忘れてしまう。", romaji:"Oboeru soba kara wasurete shimau.", id:"Begitu dihafal, langsung lupa lagi."}
     ]},
    {bentuk:"〜や", arti:"begitu ~ (lebih sastra)", penjelasan:"Bentuk sastra yang menyatakan suatu kejadian langsung diikuti kejadian lain.",
     contoh:[
       {jp:"幕が開くや、場内は静まり返った。", romaji:"Maku ga hiraku ya, jounai wa shizumarikaetta.", id:"Begitu tirai dibuka, seluruh ruangan langsung hening."},
       {jp:"彼女は結果を聞くや、歓声を上げた。", romaji:"Kanojo wa kekka o kiku ya, kansei o ageta.", id:"Begitu mendengar hasilnya, dia langsung bersorak."}
     ]}
  ]},

  {bab:6, judul:"Menyatakan Sebab-Akibat Tingkat Lanjut", pola:[
    {bentuk:"〜ゆえに", arti:"karena ~ / oleh sebab itu", penjelasan:"Ungkapan formal/sastra untuk menyatakan sebab-akibat.",
     contoh:[
       {jp:"貧しさゆえに、彼は学校へ通えなかった。", romaji:"Mazushisa yue ni, kare wa gakkou e kayoenakatta.", id:"Karena kemiskinan, dia tidak bisa bersekolah."},
       {jp:"経験不足ゆえの失敗だった。", romaji:"Keiken busoku yue no shippai datta.", id:"Itu adalah kegagalan akibat kurangnya pengalaman."}
     ]},
    {bentuk:"〜につけ", arti:"setiap kali ~ / dalam hal apapun", penjelasan:"Menyatakan sesuatu yang selalu terpikirkan atau dirasakan setiap kali suatu situasi muncul.",
     contoh:[
       {jp:"この写真を見るにつけ、昔のことを思い出す。", romaji:"Kono shashin o miru ni tsuke, mukashi no koto o omoidasu.", id:"Setiap kali melihat foto ini, saya teringat masa lalu."},
       {jp:"何かにつけ、彼は文句を言う。", romaji:"Nanika ni tsuke, kare wa monku o iu.", id:"Dalam hal apapun, dia selalu mengeluh."}
     ]},
    {bentuk:"〜手前", arti:"karena posisi/martabat ~ (tidak bisa tidak)", penjelasan:"Menyatakan suatu tindakan harus dilakukan karena posisi sosial atau janji yang sudah dibuat, demi menjaga muka.",
     contoh:[
       {jp:"約束した手前、今さら断れない。", romaji:"Yakusoku shita temae, imasara kotowarenai.", id:"Karena sudah berjanji, sekarang tidak bisa menolak."},
       {jp:"部下の手前、弱音は吐けない。", romaji:"Buka no temae, yowane wa hakenai.", id:"Karena ada bawahan yang melihat, tidak bisa mengeluh."}
     ]},
    {bentuk:"〜ばこそ", arti:"justru karena ~", penjelasan:"Menekankan bahwa alasan yang disebutkan adalah satu-satunya dan sebenarnya penyebab, sering untuk hal positif.",
     contoh:[
       {jp:"愛すればこそ、厳しく叱るのだ。", romaji:"Aisureba koso, kibishiku shikaru no da.", id:"Justru karena menyayangi, saya memarahi dengan keras."},
       {jp:"努力したればこそ、今の成功がある。", romaji:"Doryoku shitareba koso, ima no seikou ga aru.", id:"Justru karena usaha keras, kesuksesan sekarang ini ada."}
     ]},
    {bentuk:"〜あっての", arti:"berkat adanya ~ (baru bisa ada)", penjelasan:"Menyatakan sesuatu hanya mungkin ada berkat keberadaan hal lain yang disebutkan.",
     contoh:[
       {jp:"お客様あっての商売だ。", romaji:"Okyakusama atte no shoubai da.", id:"Bisnis ini ada berkat adanya pelanggan."},
       {jp:"健康あっての人生だ。", romaji:"Kenkou atte no jinsei da.", id:"Hidup ini berarti berkat adanya kesehatan."}
     ]}
  ]},

  {bab:7, judul:"Menyatakan Penilaian & Kritik Formal", pola:[
    {bentuk:"〜のいたり", arti:"sangat ~ (ungkapan kehormatan/malu)", penjelasan:"Ungkapan formal untuk menyatakan perasaan ekstrem seperti kehormatan besar atau rasa malu yang mendalam.",
     contoh:[
       {jp:"このような機会をいただき、感激のいたりです。", romaji:"Kono you na kikai o itadaki, kangeki no itari desu.", id:"Mendapat kesempatan seperti ini sungguh sangat mengharukan."},
       {jp:"失態を演じてしまい、赤面のいたりです。", romaji:"Shittai o enjite shimai, sekimen no itari desu.", id:"Melakukan kesalahan memalukan, sungguh membuat malu."}
     ]},
    {bentuk:"〜の至り", arti:"puncak dari ~", penjelasan:"Variasi penulisan dari のいたり, menyatakan tingkat tertinggi suatu perasaan atau keadaan.",
     contoh:[
       {jp:"若気の至りで無謀な行動をしてしまった。", romaji:"Wakage no itari de mubou na koudou o shite shimatta.", id:"Karena dorongan masa muda, saya melakukan tindakan nekat."},
       {jp:"光栄の至りに存じます。", romaji:"Kouei no itari ni zonjimasu.", id:"Saya merasa ini adalah suatu kehormatan besar."}
     ]},
    {bentuk:"〜ともなると / 〜ともなれば", arti:"kalau sudah sampai pada tahap ~", penjelasan:"Menyatakan bahwa ketika mencapai suatu tingkat atau situasi tertentu, konsekuensi atau standar yang berlaku pun berubah.",
     contoh:[
       {jp:"部長ともなると、責任も大きくなる。", romaji:"Buchou tomo naru to, sekinin mo ookiku naru.", id:"Kalau sudah menjadi kepala departemen, tanggung jawabnya pun semakin besar."},
       {jp:"受験シーズンともなれば、図書館は満席になる。", romaji:"Juken shiizun tomo nareba, toshokan wa manseki ni naru.", id:"Kalau sudah musim ujian masuk, perpustakaan jadi penuh."}
     ]},
    {bentuk:"〜ともあろう", arti:"yang semestinya ~ (kritik atas kegagalan sesuai status)", penjelasan:"Menyatakan kekecewaan karena seseorang dengan status/reputasi tertentu melakukan hal yang tidak pantas dengan statusnya.",
     contoh:[
       {jp:"医者ともあろう者が、そんな初歩的なミスをするとは。", romaji:"Isha tomo arou mono ga, sonna shoho-teki na misu o suru to wa.", id:"Tidak disangka seorang yang sudah menjadi dokter melakukan kesalahan sedasar itu."},
       {jp:"大臣ともあろう人物が、無責任な発言をした。", romaji:"Daijin tomo arou jinbutsu ga, musekinin na hatsugen o shita.", id:"Seorang yang sudah menjadi menteri membuat pernyataan yang tidak bertanggung jawab."}
     ]},
    {bentuk:"〜に堪えない", arti:"tidak tahan ~ / tidak pantas untuk ~", penjelasan:"Menyatakan sesuatu terlalu buruk untuk ditoleransi, atau sebaliknya perasaan yang terlalu kuat untuk ditahan.",
     contoh:[
       {jp:"彼の発言は聞くに堪えない内容だった。", romaji:"Kare no hatsugen wa kiku ni taenai naiyou datta.", id:"Pernyataannya adalah isi yang tidak tahan untuk didengarkan."},
       {jp:"感謝の念に堪えません。", romaji:"Kansha no nen ni taemasen.", id:"Saya tidak bisa menahan rasa terima kasih yang mendalam."}
     ]}
  ]},

  {bab:8, judul:"Menyatakan Pengandaian & Kemungkinan Tingkat Lanjut", pola:[
    {bentuk:"〜ものなら", arti:"andai bisa ~ (saja)", penjelasan:"Menyatakan pengandaian terhadap sesuatu yang sulit/mustahil dilakukan, sering diikuti keinginan kuat.",
     contoh:[
       {jp:"できるものなら、もう一度やり直したい。", romaji:"Dekiru mono nara, mou ichido yarinaoshitai.", id:"Andai bisa, saya ingin mengulang sekali lagi."},
       {jp:"行けるものなら、今すぐ彼女に会いに行きたい。", romaji:"Ikeru mono nara, ima sugu kanojo ni ai ni ikitai.", id:"Andai bisa pergi, saya ingin langsung menemuinya sekarang."}
     ]},
    {bentuk:"〜うものなら", arti:"kalau sampai berani ~ (akibat buruk)", penjelasan:"Menyatakan jika suatu tindakan nekat dilakukan, maka akan ada konsekuensi serius.",
     contoh:[
       {jp:"少しでも遅刻しようものなら、厳しく叱られる。", romaji:"Sukoshi demo chikoku shiyou mono nara, kibishiku shikarareru.", id:"Kalau sampai terlambat sedikit saja, pasti akan dimarahi keras."},
       {jp:"嘘をつこうものなら、信用を失うだろう。", romaji:"Uso o tsukou mono nara, shinyou o ushinau darou.", id:"Kalau sampai berbohong, pasti akan kehilangan kepercayaan."}
     ]},
    {bentuk:"〜(よ)うが〜まいが", arti:"baik ~ ataupun tidak", penjelasan:"Menyatakan sesuatu tidak berpengaruh, apapun pilihannya hasilnya sama.",
     contoh:[
       {jp:"雨が降ろうが降るまいが、試合は行われる。", romaji:"Ame ga furou ga furumai ga, shiai wa okonawareru.", id:"Baik hujan turun ataupun tidak, pertandingan tetap dilaksanakan."},
       {jp:"彼が賛成しようがしまいが、計画は進める。", romaji:"Kare ga sansei shiyou ga shimai ga, keikaku wa susumeru.", id:"Baik dia setuju ataupun tidak, rencana akan tetap dilanjutkan."}
     ]},
    {bentuk:"〜いかんによらず / 〜いかんにかかわらず", arti:"apapun ~nya / tanpa memandang ~", penjelasan:"Menyatakan suatu hal tidak dipengaruhi oleh keadaan atau alasan apapun.",
     contoh:[
       {jp:"理由のいかんによらず、遅刻は遅刻だ。", romaji:"Riyuu no ikan ni yorazu, chikoku wa chikoku da.", id:"Apapun alasannya, terlambat tetaplah terlambat."},
       {jp:"結果のいかんにかかわらず、全力を尽くすつもりだ。", romaji:"Kekka no ikan ni kakawarazu, zenryoku o tsukusu tsumori da.", id:"Tanpa memandang hasilnya, saya berniat berusaha sekuat tenaga."}
     ]},
    {bentuk:"〜ところを", arti:"di tengah situasi ~ (meski merepotkan)", penjelasan:"Digunakan untuk menyatakan permintaan maaf atau terima kasih atas sesuatu yang dilakukan di tengah situasi yang kurang tepat/merepotkan.",
     contoh:[
       {jp:"お忙しいところを、ご出席いただきありがとうございます。", romaji:"Oisogashii tokoro o, goshusseki itadaki arigatou gozaimasu.", id:"Terima kasih sudah hadir di tengah kesibukan Anda."},
       {jp:"お休みのところを申し訳ございません。", romaji:"Oyasumi no tokoro o moushiwake gozaimasen.", id:"Mohon maaf mengganggu di waktu istirahat Anda."}
     ]}
  ]},

  {bab:9, judul:"Ungkapan Formal dalam Surat & Pidato", pola:[
    {bentuk:"〜の限りを尽くす", arti:"melakukan sepenuhnya ~ / mengerahkan segala ~", penjelasan:"Menyatakan melakukan sesuatu secara maksimal, mengerahkan semua yang dimiliki.",
     contoh:[
       {jp:"贅沢の限りを尽くした生活を送っていた。", romaji:"Zeitaku no kagiri o tsukushita seikatsu o okutte ita.", id:"Dia menjalani hidup dengan kemewahan yang luar biasa."},
       {jp:"力の限りを尽くして戦った。", romaji:"Chikara no kagiri o tsukushite tatakatta.", id:"Bertarung dengan mengerahkan seluruh kekuatan."}
     ]},
    {bentuk:"〜をもって(終わりとする)", arti:"dengan ini (mengakhiri) ~", penjelasan:"Ungkapan formal yang sering digunakan di penutup pidato atau surat resmi.",
     contoh:[
       {jp:"以上をもちまして、閉会のご挨拶とさせていただきます。", romaji:"Ijou o mochimashite, heikai no goaisatsu to sasete itadakimasu.", id:"Dengan ini saya tutup sebagai sambutan penutupan acara."},
       {jp:"これをもって、本日の発表を終わります。", romaji:"Kore o motte, honjitsu no happyou o owarimasu.", id:"Dengan ini saya akhiri presentasi hari ini."}
     ]},
    {bentuk:"〜ばこそ(で)ございます", arti:"justru karena ~ (sangat formal/keigo)", penjelasan:"Bentuk sangat formal dari ばこそ, sering digunakan dalam pidato atau ucapan terima kasih resmi.",
     contoh:[
       {jp:"皆様のご支援あればこそでございます。", romaji:"Minasama no goshien areba koso de gozaimasu.", id:"Ini semua berkat dukungan dari Anda sekalian."},
       {jp:"日々の努力あればこそ、今日の成果がございます。", romaji:"Hibi no doryoku areba koso, kyou no seika ga gozaimasu.", id:"Berkat usaha sehari-hari, ada hasil hari ini."}
     ]},
    {bentuk:"〜の運びとなる", arti:"sampai pada tahap/keputusan ~", penjelasan:"Ungkapan formal menyatakan sesuatu akhirnya terlaksana atau diputuskan setelah proses tertentu.",
     contoh:[
       {jp:"来月、新店舗をオープンする運びとなりました。", romaji:"Raigetsu, shin tenpo o oopun suru hakobi to narimashita.", id:"Bulan depan, akhirnya diputuskan untuk membuka toko baru."},
       {jp:"両社は業務提携を結ぶ運びとなった。", romaji:"Ryousha wa gyoumu teikei o musubu hakobi to natta.", id:"Kedua perusahaan akhirnya sampai pada kesepakatan kerja sama."}
     ]},
    {bentuk:"〜に他ならない", arti:"tidak lain adalah ~ / semata-mata ~", penjelasan:"Menegaskan bahwa sesuatu adalah penyebab atau identitas yang sebenarnya, tanpa kemungkinan lain.",
     contoh:[
       {jp:"この成功は皆様のご協力に他ならない。", romaji:"Kono seikou wa minasama no gokyouryoku ni hoka naranai.", id:"Kesuksesan ini tidak lain adalah berkat kerja sama Anda semua."},
       {jp:"彼の行動は嫉妬に他ならない。", romaji:"Kare no koudou wa shitto ni hoka naranai.", id:"Tindakannya tidak lain adalah karena rasa iri."}
     ]}
  ]},

  {bab:10, judul:"Struktur Lanjutan & Penegasan", pola:[
    {bentuk:"〜なくして(は)", arti:"tanpa ~ (tidak mungkin)", penjelasan:"Menyatakan sesuatu mustahil terjadi tanpa adanya hal yang disebutkan.",
     contoh:[
       {jp:"努力なくして成功はあり得ない。", romaji:"Doryoku nakushite seikou wa arienai.", id:"Tanpa usaha, kesuksesan tidak mungkin ada."},
       {jp:"周囲の協力なくしては、このプロジェクトは完成しなかった。", romaji:"Shuui no kyouryoku nakushite wa, kono purojekuto wa kansei shinakatta.", id:"Tanpa kerja sama orang sekitar, proyek ini tidak akan selesai."}
     ]},
    {bentuk:"〜ないものでもない", arti:"bukan berarti tidak mungkin ~", penjelasan:"Menyatakan kemungkinan kecil namun tidak sepenuhnya menutup kemungkinan tersebut.",
     contoh:[
       {jp:"条件次第では、協力しないものでもない。", romaji:"Jouken shidai de wa, kyouryoku shinai mono de mo nai.", id:"Tergantung kondisinya, bukan tidak mungkin saya akan membantu."},
       {jp:"努力すれば、合格できないものでもない。", romaji:"Doryoku sureba, goukaku dekinai mono de mo nai.", id:"Kalau berusaha, bukan tidak mungkin bisa lulus."}
     ]},
    {bentuk:"〜ことなしに", arti:"tanpa melakukan ~", penjelasan:"Menyatakan sesuatu dilakukan tanpa disertai tindakan tertentu, atau sesuatu mustahil tanpa tindakan itu.",
     contoh:[
       {jp:"失敗することなしに、成長することはできない。", romaji:"Shippai suru koto nashi ni, seichou suru koto wa dekinai.", id:"Tanpa mengalami kegagalan, pertumbuhan tidak mungkin terjadi."},
       {jp:"彼は何も言うことなしに去っていった。", romaji:"Kare wa nani mo iu koto nashi ni satte itta.", id:"Dia pergi tanpa mengatakan apa-apa."}
     ]},
    {bentuk:"〜んがため(に)", arti:"demi untuk ~ (tujuan kuat, sastra)", penjelasan:"Bentuk sastra menyatakan tujuan yang sangat kuat di balik suatu tindakan.",
     contoh:[
       {jp:"夢を叶えんがために、彼は全てを捧げた。", romaji:"Yume o kanaen ga tame ni, kare wa subete o sasageta.", id:"Demi mewujudkan mimpinya, dia mengorbankan segalanya."},
       {jp:"家族を守らんがために、必死で働いた。", romaji:"Kazoku o mamoran ga tame ni, hisshi de hataraita.", id:"Demi melindungi keluarganya, dia bekerja mati-matian."}
     ]},
    {bentuk:"〜すら / 〜ですら", arti:"bahkan ~ pun", penjelasan:"Menekankan kasus ekstrem untuk menunjukkan betapa luasnya suatu kondisi, mirip さえ namun lebih formal.",
     contoh:[
       {jp:"専門家ですら、この問題の答えを知らない。", romaji:"Senmonka de sura, kono mondai no kotae o shiranai.", id:"Bahkan seorang ahli pun tidak tahu jawaban masalah ini."},
       {jp:"子供ですら理解できる説明だった。", romaji:"Kodomo de sura rikai dekiru setsumei datta.", id:"Itu adalah penjelasan yang bahkan anak kecil pun bisa pahami."}
     ]}
  ]}
];
