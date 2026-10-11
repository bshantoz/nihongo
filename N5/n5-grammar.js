// ===================================================================
// Qategori Nihongo - Materi Bunpou (文法) JLPT N5
// window.N5_GRAMMAR: array bab, tiap bab punya beberapa pola.
// ===================================================================
window.N5_GRAMMAR = [

  {bab:1, judul:"Kalimat Dasar です・ます", pola:[
    {bentuk:"〜は〜です", arti:"~ adalah ~", penjelasan:"Pola kalimat paling dasar untuk menyatakan 'A adalah B'.",
     contoh:[
       {jp:"私は学生です。", romaji:"Watashi wa gakusei desu.", id:"Saya adalah pelajar."},
       {jp:"これは本です。", romaji:"Kore wa hon desu.", id:"Ini adalah buku."}
     ]},
    {bentuk:"〜ます / 〜ません", arti:"melakukan ~ / tidak melakukan ~ (sekarang/akan datang)", penjelasan:"Bentuk sopan kata kerja untuk kalimat positif dan negatif waktu sekarang/masa depan.",
     contoh:[
       {jp:"毎日学校へ行きます。", romaji:"Mainichi gakkou e ikimasu.", id:"Setiap hari saya pergi ke sekolah."},
       {jp:"肉を食べません。", romaji:"Niku o tabemasen.", id:"Saya tidak makan daging."}
     ]},
    {bentuk:"〜ました / 〜ませんでした", arti:"sudah melakukan ~ / tidak melakukan ~ (lampau)", penjelasan:"Bentuk sopan kata kerja waktu lampau, positif dan negatif.",
     contoh:[
       {jp:"昨日映画を見ました。", romaji:"Kinou eiga o mimashita.", id:"Kemarin saya menonton film."},
       {jp:"今朝ご飯を食べませんでした。", romaji:"Kesa gohan o tabemasen deshita.", id:"Tadi pagi saya tidak makan."}
     ]},
    {bentuk:"〜じゃないです／ではありません", arti:"bukan ~", penjelasan:"Bentuk negatif dari です, dipakai untuk kata benda/kata sifat -na.",
     contoh:[
       {jp:"今日は休みじゃないです。", romaji:"Kyou wa yasumi janai desu.", id:"Hari ini bukan hari libur."},
       {jp:"これは私の傘ではありません。", romaji:"Kore wa watashi no kasa dewa arimasen.", id:"Ini bukan payung saya."}
     ]},
    {bentuk:"〜でした", arti:"dulu adalah ~", penjelasan:"Bentuk lampau dari です, menyatakan keadaan di masa lalu.",
     contoh:[
       {jp:"昨日は雨でした。", romaji:"Kinou wa ame deshita.", id:"Kemarin hujan."},
       {jp:"子供のとき、元気でした。", romaji:"Kodomo no toki, genki deshita.", id:"Waktu kecil, saya sehat."}
     ]}
  ]},

  {bab:2, judul:"Partikel Dasar", pola:[
    {bentuk:"〜は", arti:"penanda topik", penjelasan:"Menunjukkan topik pembicaraan kalimat.",
     contoh:[
       {jp:"私は田中です。", romaji:"Watashi wa Tanaka desu.", id:"Saya adalah Tanaka."},
       {jp:"今日は暑いです。", romaji:"Kyou wa atsui desu.", id:"Hari ini panas."}
     ]},
    {bentuk:"〜が", arti:"penanda subjek", penjelasan:"Menunjukkan subjek kalimat, sering dipakai untuk hal baru/penting atau dengan ある/いる.",
     contoh:[
       {jp:"猫がいます。", romaji:"Neko ga imasu.", id:"Ada kucing."},
       {jp:"誰が来ましたか。", romaji:"Dare ga kimashita ka.", id:"Siapa yang datang?"}
     ]},
    {bentuk:"〜を", arti:"penanda objek", penjelasan:"Menunjukkan objek yang dikenai tindakan kata kerja.",
     contoh:[
       {jp:"パンを食べます。", romaji:"Pan o tabemasu.", id:"Saya makan roti."},
       {jp:"本を読みます。", romaji:"Hon o yomimasu.", id:"Saya membaca buku."}
     ]},
    {bentuk:"〜に (waktu/tujuan)", arti:"pada ~ / ke ~", penjelasan:"Menunjukkan waktu tertentu atau tujuan/arah suatu tindakan.",
     contoh:[
       {jp:"7時に起きます。", romaji:"Shichiji ni okimasu.", id:"Saya bangun jam 7."},
       {jp:"学校に行きます。", romaji:"Gakkou ni ikimasu.", id:"Saya pergi ke sekolah."}
     ]},
    {bentuk:"〜で (tempat/alat)", arti:"di ~ / dengan ~", penjelasan:"Menunjukkan tempat terjadinya aktivitas, atau alat/cara melakukan sesuatu.",
     contoh:[
       {jp:"公園で遊びます。", romaji:"Kouen de asobimasu.", id:"Saya bermain di taman."},
       {jp:"バスで学校へ行きます。", romaji:"Basu de gakkou e ikimasu.", id:"Saya pergi ke sekolah naik bus."}
     ]}
  ]},

  {bab:3, judul:"Partikel Lanjutan", pola:[
    {bentuk:"〜と", arti:"dan, bersama ~", penjelasan:"Menghubungkan kata benda (dan), atau menunjukkan orang yang menyertai.",
     contoh:[
       {jp:"パンとミルクを買います。", romaji:"Pan to miruku o kaimasu.", id:"Saya membeli roti dan susu."},
       {jp:"友達と映画を見ます。", romaji:"Tomodachi to eiga o mimasu.", id:"Saya menonton film bersama teman."}
     ]},
    {bentuk:"〜も", arti:"juga ~", penjelasan:"Menyatakan 'juga', menggantikan は/が/を dalam konteks penambahan.",
     contoh:[
       {jp:"私も学生です。", romaji:"Watashi mo gakusei desu.", id:"Saya juga pelajar."},
       {jp:"これも買います。", romaji:"Kore mo kaimasu.", id:"Ini juga saya beli."}
     ]},
    {bentuk:"〜の", arti:"~ nya, kepunyaan", penjelasan:"Menunjukkan kepemilikan atau menghubungkan dua kata benda.",
     contoh:[
       {jp:"これは私の本です。", romaji:"Kore wa watashi no hon desu.", id:"Ini buku saya."},
       {jp:"日本語の先生です。", romaji:"Nihongo no sensei desu.", id:"(Dia) guru bahasa Jepang."}
     ]},
    {bentuk:"〜から〜まで", arti:"dari ~ sampai ~", penjelasan:"Menunjukkan rentang waktu atau tempat, awal (から) dan akhir (まで).",
     contoh:[
       {jp:"9時から5時まで働きます。", romaji:"Kuji kara goji made hatarakimasu.", id:"Saya bekerja dari jam 9 sampai jam 5."},
       {jp:"家から駅まで歩きます。", romaji:"Ie kara eki made arukimasu.", id:"Saya jalan kaki dari rumah sampai stasiun."}
     ]},
    {bentuk:"〜か", arti:"penanda pertanyaan", penjelasan:"Partikel di akhir kalimat yang membentuk kalimat tanya.",
     contoh:[
       {jp:"これは何ですか。", romaji:"Kore wa nan desu ka.", id:"Ini apa?"},
       {jp:"明日来ますか。", romaji:"Ashita kimasu ka.", id:"Apakah besok datang?"}
     ]}
  ]},

  {bab:4, judul:"Kata Sifat い・な Dasar", pola:[
    {bentuk:"〜い です (kata sifat -i)", arti:"~ (sifat -i)", penjelasan:"Kata sifat -i langsung diikuti です tanpa perubahan bentuk untuk kalimat positif biasa.",
     contoh:[
       {jp:"この花は美しいです。", romaji:"Kono hana wa utsukushii desu.", id:"Bunga ini indah."},
       {jp:"今日は寒いです。", romaji:"Kyou wa samui desu.", id:"Hari ini dingin."}
     ]},
    {bentuk:"〜くないです (negatif -i)", arti:"tidak ~ (sifat -i)", penjelasan:"Bentuk negatif kata sifat -i: ganti い jadi くない.",
     contoh:[
       {jp:"今日は寒くないです。", romaji:"Kyou wa samukunai desu.", id:"Hari ini tidak dingin."},
       {jp:"この本は面白くないです。", romaji:"Kono hon wa omoshirokunai desu.", id:"Buku ini tidak menarik."}
     ]},
    {bentuk:"〜かったです (lampau -i)", arti:"dulu ~ (sifat -i)", penjelasan:"Bentuk lampau kata sifat -i: ganti い jadi かった.",
     contoh:[
       {jp:"昨日は楽しかったです。", romaji:"Kinou wa tanoshikatta desu.", id:"Kemarin menyenangkan."},
       {jp:"テストは難しかったです。", romaji:"Tesuto wa muzukashikatta desu.", id:"Tesnya sulit."}
     ]},
    {bentuk:"〜な です (kata sifat -na)", arti:"~ (sifat -na)", penjelasan:"Kata sifat -na diikuti です untuk kalimat biasa, tanpa な di akhir kalimat.",
     contoh:[
       {jp:"この部屋は静かです。", romaji:"Kono heya wa shizuka desu.", id:"Kamar ini tenang."},
       {jp:"彼女はきれいです。", romaji:"Kanojo wa kirei desu.", id:"Dia cantik."}
     ]},
    {bentuk:"〜じゃないです (negatif -na)", arti:"tidak ~ (sifat -na)", penjelasan:"Bentuk negatif kata sifat -na, mirip kata benda.",
     contoh:[
       {jp:"ここは静かじゃないです。", romaji:"Koko wa shizuka janai desu.", id:"Di sini tidak tenang."},
       {jp:"彼は親切じゃないです。", romaji:"Kare wa shinsetsu janai desu.", id:"Dia tidak baik hati."}
     ]}
  ]},

  {bab:5, judul:"Kata Benda: Penunjuk & Pertanyaan", pola:[
    {bentuk:"これ・それ・あれ", arti:"ini / itu (dekat lawan bicara) / itu (jauh)", penjelasan:"Kata ganti tunjuk untuk benda, tergantung jaraknya dari pembicara dan lawan bicara.",
     contoh:[
       {jp:"これは私の本です。", romaji:"Kore wa watashi no hon desu.", id:"Ini buku saya."},
       {jp:"あれは何ですか。", romaji:"Are wa nan desu ka.", id:"Itu (jauh) apa?"}
     ]},
    {bentuk:"この・その・あの＋名詞", arti:"~ ini / itu / itu (+ kata benda)", penjelasan:"Bentuk yang langsung diikuti kata benda, berbeda dari これ dkk yang berdiri sendiri.",
     contoh:[
       {jp:"この本は面白いです。", romaji:"Kono hon wa omoshiroi desu.", id:"Buku ini menarik."},
       {jp:"あの人は先生です。", romaji:"Ano hito wa sensei desu.", id:"Orang itu adalah guru."}
     ]},
    {bentuk:"ここ・そこ・あそこ", arti:"di sini / di situ / di sana", penjelasan:"Kata ganti tunjuk untuk tempat.",
     contoh:[
       {jp:"ここは学校です。", romaji:"Koko wa gakkou desu.", id:"Di sini adalah sekolah."},
       {jp:"トイレはあそこです。", romaji:"Toire wa asoko desu.", id:"Toilet ada di sana."}
     ]},
    {bentuk:"何・誰・どこ・いつ", arti:"apa / siapa / di mana / kapan", penjelasan:"Kata tanya dasar.",
     contoh:[
       {jp:"これは何ですか。", romaji:"Kore wa nan desu ka.", id:"Ini apa?"},
       {jp:"誕生日はいつですか。", romaji:"Tanjoubi wa itsu desu ka.", id:"Kapan ulang tahunmu?"}
     ]},
    {bentuk:"どう・どうして", arti:"bagaimana / mengapa", penjelasan:"Kata tanya cara dan alasan.",
     contoh:[
       {jp:"この漢字はどう読みますか。", romaji:"Kono kanji wa dou yomimasu ka.", id:"Kanji ini dibaca bagaimana?"},
       {jp:"どうして遅れましたか。", romaji:"Doushite okuremashita ka.", id:"Mengapa terlambat?"}
     ]}
  ]},

  {bab:6, judul:"Ada・Punya & Posisi", pola:[
    {bentuk:"〜があります", arti:"ada ~ (benda/tak bernyawa)", penjelasan:"Menyatakan keberadaan benda mati.",
     contoh:[
       {jp:"机の上に本があります。", romaji:"Tsukue no ue ni hon ga arimasu.", id:"Ada buku di atas meja."},
       {jp:"駅の近くに銀行があります。", romaji:"Eki no chikaku ni ginkou ga arimasu.", id:"Ada bank dekat stasiun."}
     ]},
    {bentuk:"〜がいます", arti:"ada ~ (makhluk hidup)", penjelasan:"Menyatakan keberadaan manusia/hewan.",
     contoh:[
       {jp:"教室に学生がいます。", romaji:"Kyoushitsu ni gakusei ga imasu.", id:"Ada murid di kelas."},
       {jp:"庭に犬がいます。", romaji:"Niwa ni inu ga imasu.", id:"Ada anjing di halaman."}
     ]},
    {bentuk:"〜は〜にあります／います", arti:"~ ada di ~", penjelasan:"Menyatakan lokasi suatu benda/makhluk hidup, dengan subjek yang sudah diketahui sebagai topik.",
     contoh:[
       {jp:"トイレは2階にあります。", romaji:"Toire wa nikai ni arimasu.", id:"Toilet ada di lantai 2."},
       {jp:"先生は教室にいます。", romaji:"Sensei wa kyoushitsu ni imasu.", id:"Gurunya ada di kelas."}
     ]},
    {bentuk:"〜や〜など", arti:"~ dan ~ dan lain-lain", penjelasan:"Menyebutkan beberapa contoh dari suatu kumpulan, tidak semuanya disebut.",
     contoh:[
       {jp:"机の上に本やペンなどがあります。", romaji:"Tsukue no ue ni hon ya pen nado ga arimasu.", id:"Di atas meja ada buku, pulpen, dan lain-lain."},
       {jp:"冷蔵庫に卵や野菜などがあります。", romaji:"Reizouko ni tamago ya yasai nado ga arimasu.", id:"Di kulkas ada telur, sayuran, dan lain-lain."}
     ]},
    {bentuk:"〜に〜があります／います (angka+counter)", arti:"ada ~ sejumlah ~ di ~", penjelasan:"Pola untuk menyatakan jumlah benda/orang di suatu tempat, memakai kata bantu bilangan (counter).",
     contoh:[
       {jp:"教室に学生が20人います。", romaji:"Kyoushitsu ni gakusei ga nijuunin imasu.", id:"Ada 20 murid di kelas."},
       {jp:"箱の中にりんごが3個あります。", romaji:"Hako no naka ni ringo ga sanko arimasu.", id:"Ada 3 buah apel di dalam kotak."}
     ]}
  ]},

  {bab:7, judul:"Kata Kerja Bentuk Te Dasar", pola:[
    {bentuk:"〜てください", arti:"tolong lakukan ~", penjelasan:"Meminta seseorang melakukan sesuatu dengan sopan.",
     contoh:[
       {jp:"ここに名前を書いてください。", romaji:"Koko ni namae o kaite kudasai.", id:"Tolong tulis nama di sini."},
       {jp:"少し待ってください。", romaji:"Sukoshi matte kudasai.", id:"Tolong tunggu sebentar."}
     ]},
    {bentuk:"〜ないでください", arti:"tolong jangan ~", penjelasan:"Meminta seseorang untuk tidak melakukan sesuatu.",
     contoh:[
       {jp:"ここで写真を撮らないでください。", romaji:"Koko de shashin o toranaide kudasai.", id:"Tolong jangan foto di sini."},
       {jp:"心配しないでください。", romaji:"Shinpai shinaide kudasai.", id:"Tolong jangan khawatir."}
     ]},
    {bentuk:"〜ています (sedang/kebiasaan)", arti:"sedang ~ / biasa ~", penjelasan:"Menyatakan tindakan yang sedang berlangsung, atau kebiasaan/keadaan terus-menerus.",
     contoh:[
       {jp:"今、ご飯を食べています。", romaji:"Ima, gohan o tabete imasu.", id:"Sekarang saya sedang makan."},
       {jp:"東京に住んでいます。", romaji:"Toukyou ni sunde imasu.", id:"Saya tinggal di Tokyo."}
     ]},
    {bentuk:"〜てから", arti:"setelah ~", penjelasan:"Menyatakan suatu tindakan dilakukan setelah tindakan lain selesai.",
     contoh:[
       {jp:"宿題をしてから、遊びます。", romaji:"Shukudai o shite kara, asobimasu.", id:"Setelah mengerjakan PR, saya bermain."},
       {jp:"手を洗ってから、食べます。", romaji:"Te o aratte kara, tabemasu.", id:"Setelah cuci tangan, saya makan."}
     ]},
    {bentuk:"〜ましょう／〜ましょうか", arti:"ayo ~ / mau ~ kah?", penjelasan:"Mengajak melakukan sesuatu bersama, atau menawarkan bantuan.",
     contoh:[
       {jp:"一緒に行きましょう。", romaji:"Issho ni ikimashou.", id:"Ayo pergi bersama."},
       {jp:"手伝いましょうか。", romaji:"Tetsudaimashou ka.", id:"Mau saya bantu?"}
     ]}
  ]},

  {bab:8, judul:"Keinginan & Ajakan", pola:[
    {bentuk:"〜たいです", arti:"ingin ~", penjelasan:"Menyatakan keinginan diri sendiri untuk melakukan sesuatu.",
     contoh:[
       {jp:"日本へ行きたいです。", romaji:"Nihon e ikitai desu.", id:"Saya ingin pergi ke Jepang."},
       {jp:"寿司が食べたいです。", romaji:"Sushi ga tabetai desu.", id:"Saya ingin makan sushi."}
     ]},
    {bentuk:"〜ませんか", arti:"mau ~ tidak?", penjelasan:"Mengajak seseorang melakukan sesuatu dengan sopan.",
     contoh:[
       {jp:"一緒に映画を見ませんか。", romaji:"Issho ni eiga o mimasen ka.", id:"Mau nonton film bersama tidak?"},
       {jp:"お茶を飲みませんか。", romaji:"Ocha o nomimasen ka.", id:"Mau minum teh tidak?"}
     ]},
    {bentuk:"〜がほしいです", arti:"ingin memiliki ~", penjelasan:"Menyatakan keinginan untuk memiliki suatu benda.",
     contoh:[
       {jp:"新しい靴がほしいです。", romaji:"Atarashii kutsu ga hoshii desu.", id:"Saya ingin sepatu baru."},
       {jp:"時間がほしいです。", romaji:"Jikan ga hoshii desu.", id:"Saya ingin punya waktu."}
     ]},
    {bentuk:"〜ながら", arti:"sambil ~", penjelasan:"Menyatakan dua tindakan dilakukan bersamaan oleh orang yang sama.",
     contoh:[
       {jp:"音楽を聞きながら勉強します。", romaji:"Ongaku o kikinagara benkyou shimasu.", id:"Saya belajar sambil mendengarkan musik."},
       {jp:"歩きながら話しました。", romaji:"Arukinagara hanashimashita.", id:"Kami berbicara sambil berjalan."}
     ]},
    {bentuk:"〜でしょう (perkiraan dasar)", arti:"mungkin ~", penjelasan:"Menyatakan perkiraan sederhana tentang sesuatu.",
     contoh:[
       {jp:"明日は晴れでしょう。", romaji:"Ashita wa hare deshou.", id:"Besok mungkin cerah."},
       {jp:"彼は忙しいでしょう。", romaji:"Kare wa isogashii deshou.", id:"Dia mungkin sibuk."}
     ]}
  ]},

  {bab:9, judul:"Kemampuan & Kewajiban Sederhana", pola:[
    {bentuk:"〜ことができます", arti:"bisa melakukan ~", penjelasan:"Menyatakan kemampuan melakukan sesuatu, dengan kata kerja bentuk kamus + ことができる.",
     contoh:[
       {jp:"漢字を書くことができます。", romaji:"Kanji o kaku koto ga dekimasu.", id:"Saya bisa menulis kanji."},
       {jp:"泳ぐことができません。", romaji:"Oyogu koto ga dekimasen.", id:"Saya tidak bisa berenang."}
     ]},
    {bentuk:"〜なければなりません", arti:"harus melakukan ~", penjelasan:"Menyatakan kewajiban melakukan sesuatu (bentuk dasar, lebih lengkap di level N4).",
     contoh:[
       {jp:"宿題をしなければなりません。", romaji:"Shukudai o shinakereba narimasen.", id:"Saya harus mengerjakan PR."},
       {jp:"毎日学校へ行かなければなりません。", romaji:"Mainichi gakkou e ikanakereba narimasen.", id:"Saya harus pergi ke sekolah setiap hari."}
     ]},
    {bentuk:"〜前に", arti:"sebelum ~", penjelasan:"Menyatakan sesuatu terjadi sebelum tindakan lain.",
     contoh:[
       {jp:"寝る前に歯を磨きます。", romaji:"Neru mae ni ha o migakimasu.", id:"Saya menggosok gigi sebelum tidur."},
       {jp:"食べる前に手を洗います。", romaji:"Taberu mae ni te o araimasu.", id:"Saya cuci tangan sebelum makan."}
     ]},
    {bentuk:"〜た後で", arti:"setelah ~", penjelasan:"Menyatakan sesuatu terjadi setelah tindakan lain selesai, memakai bentuk lampau (た形).",
     contoh:[
       {jp:"晩ご飯を食べた後で、テレビを見ます。", romaji:"Bangohan o tabeta ato de, terebi o mimasu.", id:"Setelah makan malam, saya menonton TV."},
       {jp:"勉強した後で、寝ます。", romaji:"Benkyou shita ato de, nemasu.", id:"Setelah belajar, saya tidur."}
     ]},
    {bentuk:"〜とき", arti:"waktu/saat ~", penjelasan:"Menyatakan waktu terjadinya sesuatu, bisa diikuti kata kerja, kata sifat, atau kata benda.",
     contoh:[
       {jp:"日本へ行くとき、パスポートが要ります。", romaji:"Nihon e iku toki, pasupooto ga irimasu.", id:"Saat pergi ke Jepang, perlu paspor."},
       {jp:"子供のとき、よく公園で遊びました。", romaji:"Kodomo no toki, yoku kouen de asobimashita.", id:"Waktu kecil, saya sering bermain di taman."}
     ]}
  ]},

  {bab:10, judul:"Perbandingan & Pilihan Dasar", pola:[
    {bentuk:"〜より〜のほうが", arti:"lebih ~ daripada ~", penjelasan:"Pola dasar untuk membandingkan dua hal (versi sederhana, diperdalam lagi di N4).",
     contoh:[
       {jp:"猫より犬のほうが好きです。", romaji:"Neko yori inu no hou ga suki desu.", id:"Saya lebih suka anjing daripada kucing."},
       {jp:"今日より明日のほうが忙しいです。", romaji:"Kyou yori ashita no hou ga isogashii desu.", id:"Besok lebih sibuk daripada hari ini."}
     ]},
    {bentuk:"〜と〜とどちらが〜", arti:"mana yang lebih ~, ~ atau ~?", penjelasan:"Menanyakan perbandingan antara dua pilihan.",
     contoh:[
       {jp:"コーヒーと紅茶とどちらが好きですか。", romaji:"Koohii to koucha to dochira ga suki desu ka.", id:"Suka mana, kopi atau teh?"},
       {jp:"バスと電車とどちらが速いですか。", romaji:"Basu to densha to dochira ga hayai desu ka.", id:"Mana yang lebih cepat, bus atau kereta?"}
     ]},
    {bentuk:"〜の中で〜が一番", arti:"di antara ~, yang paling ~ adalah ~", penjelasan:"Menyatakan superlatif (paling) di antara beberapa pilihan.",
     contoh:[
       {jp:"果物の中でバナナが一番好きです。", romaji:"Kudamono no naka de banana ga ichiban suki desu.", id:"Di antara buah-buahan, saya paling suka pisang."},
       {jp:"家族の中で父が一番背が高いです。", romaji:"Kazoku no naka de chichi ga ichiban se ga takai desu.", id:"Di antara keluarga, ayah yang paling tinggi."}
     ]},
    {bentuk:"〜ので (dasar)", arti:"karena ~", penjelasan:"Menyatakan alasan secara sederhana (versi lengkap dipelajari lagi di N4).",
     contoh:[
       {jp:"雨が降っているので、傘を持って行きます。", romaji:"Ame ga futte iru node, kasa o motte ikimasu.", id:"Karena sedang hujan, saya membawa payung."},
       {jp:"暑いので、窓を開けます。", romaji:"Atsui node, mado o akemasu.", id:"Karena panas, saya buka jendela."}
     ]},
    {bentuk:"〜から (alasan dasar)", arti:"karena ~", penjelasan:"Bentuk alasan paling umum di level dasar, sering diikuti ajakan/perintah/keputusan.",
     contoh:[
       {jp:"疲れたから、休みます。", romaji:"Tsukareta kara, yasumimasu.", id:"Karena lelah, saya istirahat."},
       {jp:"時間がないから、急ぎましょう。", romaji:"Jikan ga nai kara, isogimashou.", id:"Karena tidak ada waktu, ayo bergegas."}
     ]}
  ]}
];
