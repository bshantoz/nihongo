// ===================================================================
// Qategori Nihongo - Materi Bunpou (文法) JLPT N4
// window.N4_GRAMMAR: array bab, tiap bab punya beberapa pola.
// ===================================================================
window.N4_GRAMMAR = [

  {bab:1, judul:"Bentuk Te Lanjutan", pola:[
    {bentuk:"〜ておく", arti:"melakukan ~ sebagai persiapan", penjelasan:"Menyatakan suatu tindakan dilakukan sebelumnya untuk persiapan atau supaya kondisinya tetap begitu.",
     contoh:[
       {jp:"旅行の前に切符を買っておきます。", romaji:"Ryokou no mae ni kippu o katte okimasu.", id:"Sebelum bepergian, saya beli tiket dulu (untuk persiapan)."},
       {jp:"ドアを開けておいてください。", romaji:"Doa o akete oite kudasai.", id:"Tolong biarkan pintunya terbuka."}
     ]},
    {bentuk:"〜てしまう", arti:"terlanjur/selesai melakukan ~ (kadang menyesal)", penjelasan:"Menyatakan sesuatu selesai total, atau terjadi tanpa sengaja/disesalkan.",
     contoh:[
       {jp:"宿題をもう終わってしまいました。", romaji:"Shukudai o mou owatte shimaimashita.", id:"PR saya sudah selesai semuanya."},
       {jp:"電車の中で寝てしまいました。", romaji:"Densha no naka de nete shimaimashita.", id:"Saya tanpa sadar tertidur di kereta."}
     ]},
    {bentuk:"〜てみる", arti:"mencoba melakukan ~", penjelasan:"Menyatakan mencoba melakukan sesuatu untuk melihat hasilnya.",
     contoh:[
       {jp:"この服を着てみてもいいですか。", romaji:"Kono fuku o kite mite mo ii desu ka.", id:"Boleh saya coba pakai baju ini?"},
       {jp:"一度富士山に登ってみたいです。", romaji:"Ichido Fujisan ni nobotte mitai desu.", id:"Saya ingin coba naik Gunung Fuji sekali."}
     ]},
    {bentuk:"〜てくる / 〜ていく", arti:"terjadi menuju ke sini / menuju ke sana (perubahan bertahap)", penjelasan:"てくる = perubahan yang mendekat/menuju sekarang; ていく = perubahan yang berlanjut ke depan.",
     contoh:[
       {jp:"だんだん暖かくなってきました。", romaji:"Dandan atatakaku natte kimashita.", id:"Cuaca semakin lama semakin hangat (menuju sekarang)."},
       {jp:"これからも日本語を勉強していきます。", romaji:"Korekara mo nihongo o benkyou shite ikimasu.", id:"Saya akan terus belajar bahasa Jepang ke depannya."}
     ]},
    {bentuk:"〜てある", arti:"sudah dalam keadaan ~ (hasil persiapan)", penjelasan:"Menyatakan hasil dari suatu tindakan yang sengaja dilakukan dan masih berlaku sekarang.",
     contoh:[
       {jp:"壁に絵が飾ってあります。", romaji:"Kabe ni e ga kazatte arimasu.", id:"Ada lukisan yang dipajang di dinding."},
       {jp:"もう予約してあります。", romaji:"Mou yoyaku shite arimasu.", id:"Sudah dipesan/dibooking sebelumnya."}
     ]}
  ]},

  {bab:2, judul:"Kemampuan, Izin & Larangan", pola:[
    {bentuk:"〜られる (kanoukei)", arti:"bisa melakukan ~", penjelasan:"Bentuk potensial kata kerja, menyatakan kemampuan melakukan sesuatu.",
     contoh:[
       {jp:"漢字が少し読めます。", romaji:"Kanji ga sukoshi yomemasu.", id:"Saya bisa membaca kanji sedikit."},
       {jp:"辛い物が食べられません。", romaji:"Karai mono ga taberaremasen.", id:"Saya tidak bisa makan yang pedas."}
     ]},
    {bentuk:"〜てもいい", arti:"boleh melakukan ~", penjelasan:"Memberi atau meminta izin untuk melakukan sesuatu.",
     contoh:[
       {jp:"ここに座ってもいいですか。", romaji:"Koko ni suwatte mo ii desu ka.", id:"Boleh saya duduk di sini?"},
       {jp:"写真を撮ってもいいです。", romaji:"Shashin o totte mo ii desu.", id:"Boleh mengambil foto."}
     ]},
    {bentuk:"〜てはいけない", arti:"tidak boleh melakukan ~", penjelasan:"Menyatakan larangan yang cukup tegas.",
     contoh:[
       {jp:"ここでたばこを吸ってはいけません。", romaji:"Koko de tabako o sutte wa ikemasen.", id:"Tidak boleh merokok di sini."},
       {jp:"授業中に携帯電話を使ってはいけません。", romaji:"Jugyouchuu ni keitaidenwa o tsukatte wa ikemasen.", id:"Tidak boleh pakai HP saat pelajaran."}
     ]},
    {bentuk:"〜なくてもいい", arti:"tidak perlu melakukan ~", penjelasan:"Menyatakan sesuatu tidak wajib dilakukan.",
     contoh:[
       {jp:"明日は来なくてもいいです。", romaji:"Ashita wa konakute mo ii desu.", id:"Besok tidak perlu datang."},
       {jp:"心配しなくてもいいですよ。", romaji:"Shinpai shinakute mo ii desu yo.", id:"Tidak perlu khawatir lho."}
     ]},
    {bentuk:"〜なければならない", arti:"harus melakukan ~", penjelasan:"Menyatakan kewajiban atau keharusan.",
     contoh:[
       {jp:"毎日薬を飲まなければなりません。", romaji:"Mainichi kusuri o nomanakereba narimasen.", id:"Harus minum obat setiap hari."},
       {jp:"レポートを明日までに出さなければなりません。", romaji:"Repooto o ashita made ni dasanakereba narimasen.", id:"Laporan harus dikumpulkan sebelum besok."}
     ]}
  ]},

  {bab:3, judul:"Keinginan, Rencana & Tujuan", pola:[
    {bentuk:"〜たい / 〜たがる", arti:"ingin melakukan ~ (diri sendiri / orang lain)", penjelasan:"たい dipakai untuk keinginan diri sendiri, たがる untuk menyatakan keinginan orang lain yang terlihat dari luar.",
     contoh:[
       {jp:"温泉に行きたいです。", romaji:"Onsen ni ikitai desu.", id:"Saya ingin pergi ke onsen."},
       {jp:"弟はゲームを買いたがっています。", romaji:"Otouto wa geemu o kaitagatte imasu.", id:"Adik laki-laki saya ingin membeli game."}
     ]},
    {bentuk:"〜つもりだ", arti:"berniat/berencana melakukan ~", penjelasan:"Menyatakan niat atau rencana pribadi yang sudah dipikirkan.",
     contoh:[
       {jp:"来年国へ帰るつもりです。", romaji:"Rainen kuni e kaeru tsumori desu.", id:"Tahun depan saya berencana pulang ke negara sendiri."},
       {jp:"今度の休みは何もしないつもりです。", romaji:"Kondo no yasumi wa nani mo shinai tsumori desu.", id:"Liburan kali ini saya berencana tidak melakukan apa-apa."}
     ]},
    {bentuk:"〜(よ)うと思う", arti:"berpikir akan melakukan ~", penjelasan:"Menyatakan niat/keputusan yang baru dipikirkan, lebih santai dari つもり.",
     contoh:[
       {jp:"来月引っ越そうと思います。", romaji:"Raigetsu hikkosou to omoimasu.", id:"Saya berpikir akan pindah rumah bulan depan."},
       {jp:"週末は家で休もうと思います。", romaji:"Shuumatsu wa ie de yasumou to omoimasu.", id:"Akhir pekan saya berpikir akan istirahat di rumah."}
     ]},
    {bentuk:"〜ために", arti:"demi/untuk tujuan ~", penjelasan:"Menyatakan tujuan dari suatu tindakan.",
     contoh:[
       {jp:"健康のために毎朝走っています。", romaji:"Kenkou no tame ni maiasa hashitte imasu.", id:"Demi kesehatan, saya lari setiap pagi."},
       {jp:"日本で働くために日本語を勉強しています。", romaji:"Nihon de hataraku tame ni nihongo o benkyou shite imasu.", id:"Saya belajar bahasa Jepang untuk bisa bekerja di Jepang."}
     ]},
    {bentuk:"〜予定だ", arti:"dijadwalkan/direncanakan ~", penjelasan:"Menyatakan jadwal atau rencana yang lebih resmi/pasti.",
     contoh:[
       {jp:"会議は3時に始まる予定です。", romaji:"Kaigi wa sanji ni hajimaru yotei desu.", id:"Rapat dijadwalkan dimulai jam 3."},
       {jp:"来週出張する予定です。", romaji:"Raishuu shucchou suru yotei desu.", id:"Minggu depan dijadwalkan dinas luar kota."}
     ]}
  ]},

  {bab:4, judul:"Perkiraan & Dugaan", pola:[
    {bentuk:"〜でしょう", arti:"mungkin ~, kan?", penjelasan:"Menyatakan perkiraan atau meminta konfirmasi dengan sopan.",
     contoh:[
       {jp:"明日は晴れるでしょう。", romaji:"Ashita wa hareru deshou.", id:"Besok mungkin cerah."},
       {jp:"これでいいでしょうか。", romaji:"Kore de ii deshou ka.", id:"Apakah ini sudah benar ya?"}
     ]},
    {bentuk:"〜かもしれない", arti:"mungkin/bisa jadi ~", penjelasan:"Menyatakan kemungkinan dengan tingkat keyakinan yang lebih rendah dari でしょう.",
     contoh:[
       {jp:"明日雨が降るかもしれません。", romaji:"Ashita ame ga furu kamoshiremasen.", id:"Besok mungkin hujan."},
       {jp:"彼はまだ知らないかもしれません。", romaji:"Kare wa mada shiranai kamoshiremasen.", id:"Dia mungkin belum tahu."}
     ]},
    {bentuk:"〜はずだ", arti:"seharusnya ~", penjelasan:"Menyatakan keyakinan kuat berdasarkan alasan/informasi yang logis.",
     contoh:[
       {jp:"彼はもう着いているはずです。", romaji:"Kare wa mou tsuite iru hazu desu.", id:"Dia seharusnya sudah tiba."},
       {jp:"今日は休みのはずです。", romaji:"Kyou wa yasumi no hazu desu.", id:"Hari ini seharusnya libur."}
     ]},
    {bentuk:"〜そうだ (様態)", arti:"kelihatannya ~ (dari penampilan)", penjelasan:"Menyatakan dugaan berdasarkan apa yang terlihat langsung.",
     contoh:[
       {jp:"このケーキは美味しそうです。", romaji:"Kono keeki wa oishisou desu.", id:"Kue ini kelihatannya enak."},
       {jp:"雨が降りそうです。", romaji:"Ame ga furisou desu.", id:"Kelihatannya akan turun hujan."}
     ]},
    {bentuk:"〜ようだ", arti:"sepertinya ~", penjelasan:"Menyatakan dugaan berdasarkan pengamatan/perasaan pembicara.",
     contoh:[
       {jp:"誰か来たようです。", romaji:"Dareka kita you desu.", id:"Sepertinya ada seseorang yang datang."},
       {jp:"彼は忙しいようです。", romaji:"Kare wa isogashii you desu.", id:"Dia sepertinya sibuk."}
     ]}
  ]},

  {bab:5, judul:"Perbandingan & Pilihan", pola:[
    {bentuk:"〜より〜のほうが", arti:"lebih ~ daripada ~", penjelasan:"Pola dasar perbandingan dua hal.",
     contoh:[
       {jp:"電車よりバスのほうが安いです。", romaji:"Densha yori basu no hou ga yasui desu.", id:"Bus lebih murah daripada kereta."},
       {jp:"夏より冬のほうが好きです。", romaji:"Natsu yori fuyu no hou ga suki desu.", id:"Saya lebih suka musim dingin daripada musim panas."}
     ]},
    {bentuk:"〜ほど〜ない", arti:"tidak se~ ~", penjelasan:"Menyatakan sesuatu tidak mencapai tingkat pembanding.",
     contoh:[
       {jp:"今日は昨日ほど暑くないです。", romaji:"Kyou wa kinou hodo atsukunai desu.", id:"Hari ini tidak sepanas kemarin."},
       {jp:"私は彼ほど上手に話せません。", romaji:"Watashi wa kare hodo jouzu ni hanasemasen.", id:"Saya tidak bisa bicara sefasih dia."}
     ]},
    {bentuk:"〜ほうがいい", arti:"sebaiknya ~", penjelasan:"Memberi saran untuk melakukan atau tidak melakukan sesuatu.",
     contoh:[
       {jp:"早く病院に行ったほうがいいです。", romaji:"Hayaku byouin ni itta hou ga ii desu.", id:"Sebaiknya cepat pergi ke rumah sakit."},
       {jp:"無理しないほうがいいですよ。", romaji:"Muri shinai hou ga ii desu yo.", id:"Sebaiknya jangan memaksakan diri lho."}
     ]},
    {bentuk:"〜たり〜たりする", arti:"kadang ~ kadang ~ (contoh kegiatan)", penjelasan:"Menyebutkan beberapa contoh tindakan yang dilakukan secara bergantian.",
     contoh:[
       {jp:"週末は映画を見たり本を読んだりします。", romaji:"Shuumatsu wa eiga o mitari hon o yondari shimasu.", id:"Akhir pekan kadang nonton film kadang baca buku."},
       {jp:"公園で走ったり遊んだりしました。", romaji:"Kouen de hashittari asondari shimashita.", id:"Di taman saya lari-lari dan bermain-main."}
     ]},
    {bentuk:"〜し〜し", arti:"selain itu ~, dan juga ~", penjelasan:"Menyebutkan beberapa alasan/sifat sekaligus.",
     contoh:[
       {jp:"この部屋は広いし、静かです。", romaji:"Kono heya wa hiroishi, shizuka desu.", id:"Kamar ini luas, dan juga tenang."},
       {jp:"高いし、おいしくないので買いません。", romaji:"Takaishi, oishikunai node kaimasen.", id:"Karena mahal dan tidak enak, saya tidak beli."}
     ]}
  ]},

  {bab:6, judul:"Sebab Akibat Dasar", pola:[
    {bentuk:"〜から", arti:"karena ~ (alasan subjektif)", penjelasan:"Menyatakan alasan menurut pandangan pembicara, sering diikuti ajakan/perintah.",
     contoh:[
       {jp:"寒いから窓を閉めましょう。", romaji:"Samui kara mado o shimemashou.", id:"Karena dingin, ayo tutup jendelanya."},
       {jp:"疲れたから休みます。", romaji:"Tsukareta kara yasumimasu.", id:"Karena lelah, saya akan istirahat."}
     ]},
    {bentuk:"〜ので", arti:"karena ~ (alasan lebih halus/objektif)", penjelasan:"Mirip から namun kesannya lebih sopan dan sering dipakai dalam kalimat formal.",
     contoh:[
       {jp:"雨が降っているので、傘を持って行きます。", romaji:"Ame ga futte iru node, kasa o motte ikimasu.", id:"Karena sedang hujan, saya membawa payung."},
       {jp:"体調が悪いので、休ませてください。", romaji:"Taichou ga warui node, yasumasete kudasai.", id:"Karena kondisi badan kurang baik, izinkan saya istirahat."}
     ]},
    {bentuk:"〜ため(に) (sebab)", arti:"karena/akibat ~", penjelasan:"Menyatakan sebab yang menimbulkan suatu keadaan/masalah, kesannya formal.",
     contoh:[
       {jp:"台風のため、電車が止まりました。", romaji:"Taifuu no tame, densha ga tomarimashita.", id:"Akibat topan, kereta berhenti beroperasi."},
       {jp:"事故のため、道が込んでいます。", romaji:"Jiko no tame, michi ga konde imasu.", id:"Karena kecelakaan, jalanan macet."}
     ]},
    {bentuk:"〜と (otomatis)", arti:"jika/begitu ~ maka ~ (hasil pasti)", penjelasan:"Menyatakan hubungan sebab-akibat yang otomatis/alami terjadi setiap kali syarat terpenuhi.",
     contoh:[
       {jp:"春になると、桜が咲きます。", romaji:"Haru ni naru to, sakura ga sakimasu.", id:"Kalau sudah musim semi, bunga sakura mekar."},
       {jp:"このボタンを押すと、ドアが開きます。", romaji:"Kono botan o osu to, doa ga akimasu.", id:"Kalau tombol ini ditekan, pintu terbuka."}
     ]},
    {bentuk:"〜ば", arti:"kalau/jika ~", penjelasan:"Bentuk pengandaian yang menekankan syarat untuk terjadinya sesuatu.",
     contoh:[
       {jp:"お金があれば、旅行に行きたいです。", romaji:"Okane ga areba, ryokou ni ikitai desu.", id:"Kalau ada uang, saya ingin pergi bepergian."},
       {jp:"急げば、間に合います。", romaji:"Isogeba, maniaimasu.", id:"Kalau bergegas, akan keburu."}
     ]}
  ]},

  {bab:7, judul:"Pasif & Kausatif Dasar", pola:[
    {bentuk:"〜られる (ukemi/pasif)", arti:"di~ (bentuk pasif)", penjelasan:"Menyatakan subjek dikenai suatu tindakan oleh pihak lain.",
     contoh:[
       {jp:"財布を盗まれました。", romaji:"Saifu o nusumaremashita.", id:"Dompet saya dicuri (oleh seseorang)."},
       {jp:"先生に褒められました。", romaji:"Sensei ni homeraremashita.", id:"Saya dipuji oleh guru."}
     ]},
    {bentuk:"〜させる (shieki/kausatif)", arti:"menyuruh/membiarkan ~", penjelasan:"Menyatakan seseorang menyuruh atau mengizinkan orang lain melakukan sesuatu.",
     contoh:[
       {jp:"母は私に部屋を掃除させました。", romaji:"Haha wa watashi ni heya o souji sasemashita.", id:"Ibu menyuruh saya membersihkan kamar."},
       {jp:"子供を自由に遊ばせます。", romaji:"Kodomo o jiyuu ni asobasemasu.", id:"Membiarkan anak bermain dengan bebas."}
     ]},
    {bentuk:"〜させられる (shieki-ukemi)", arti:"terpaksa disuruh melakukan ~", penjelasan:"Bentuk kausatif-pasif, menyatakan seseorang dipaksa melakukan sesuatu dengan berat hati.",
     contoh:[
       {jp:"部長に残業させられました。", romaji:"Buchou ni zangyou saseraremashita.", id:"Saya terpaksa disuruh lembur oleh manajer."},
       {jp:"毎日野菜を食べさせられています。", romaji:"Mainichi yasai o tabesaserarete imasu.", id:"Saya dipaksa makan sayur setiap hari."}
     ]},
    {bentuk:"〜てもらう / てくれる / てあげる (ringkasan)", arti:"menerima/memberi bantuan tindakan", penjelasan:"てもらう=menerima manfaat dari orang lain; てくれる=orang lain berbuat baik ke saya; てあげる=saya berbuat baik ke orang lain.",
     contoh:[
       {jp:"友達に日本語を教えてもらいました。", romaji:"Tomodachi ni nihongo o oshiete moraimashita.", id:"Saya diajari bahasa Jepang oleh teman."},
       {jp:"彼が荷物を持ってくれました。", romaji:"Kare ga nimotsu o motte kuremashita.", id:"Dia membawakan barang saya (baik hati)."}
     ]},
    {bentuk:"〜れる/られる (sonkei sederhana)", arti:"bentuk hormat sederhana", penjelasan:"Bentuk yang sama dengan pasif/potensial, dipakai untuk menghormati tindakan orang lain (atasan dsb).",
     contoh:[
       {jp:"社長はもう帰られました。", romaji:"Shachou wa mou kaeraremashita.", id:"Direktur sudah pulang (bentuk sopan)."},
       {jp:"先生は何を食べられますか。", romaji:"Sensei wa nani o taberaremasu ka.", id:"Bapak/Ibu guru mau makan apa?"}
     ]}
  ]},

  {bab:8, judul:"Kondisi & Pengandaian", pola:[
    {bentuk:"〜たら", arti:"kalau/setelah ~ (pengandaian umum)", penjelasan:"Bentuk pengandaian paling fleksibel, bisa dipakai untuk syarat maupun urutan waktu.",
     contoh:[
       {jp:"雨が降ったら、行きません。", romaji:"Ame ga futtara, ikimasen.", id:"Kalau hujan turun, saya tidak akan pergi."},
       {jp:"家に着いたら、電話してください。", romaji:"Ie ni tsuitara, denwa shite kudasai.", id:"Setelah sampai rumah, tolong telepon saya."}
     ]},
    {bentuk:"〜なら", arti:"kalau memang ~ (topik/saran)", penjelasan:"Menyatakan pengandaian berdasarkan topik yang disebutkan lawan bicara, sering dipakai untuk memberi saran.",
     contoh:[
       {jp:"日本へ行くなら、京都がおすすめです。", romaji:"Nihon e iku nara, Kyouto ga osusume desu.", id:"Kalau mau pergi ke Jepang, Kyoto direkomendasikan."},
       {jp:"時間があるなら、手伝ってください。", romaji:"Jikan ga aru nara, tetsudatte kudasai.", id:"Kalau ada waktu, tolong bantu saya."}
     ]},
    {bentuk:"〜ば (review) vs 〜と vs 〜たら", arti:"perbandingan pemakaian bentuk pengandaian", penjelasan:"ば menekankan syarat logis, と untuk hasil otomatis/kebiasaan, たら paling umum dan bisa untuk urutan kejadian.",
     contoh:[
       {jp:"薬を飲めば、治ります。", romaji:"Kusuri o nomeba, naorimasu.", id:"Kalau minum obat, akan sembuh."},
       {jp:"ボタンを押すと、音が出ます。", romaji:"Botan o osu to, oto ga demasu.", id:"Kalau tombol ditekan, keluar suara."}
     ]},
    {bentuk:"〜のに", arti:"padahal ~ (kontras/penyesalan)", penjelasan:"Menyatakan sesuatu yang bertentangan dengan harapan, sering mengandung nuansa kecewa/heran.",
     contoh:[
       {jp:"頑張ったのに、失敗しました。", romaji:"Ganbatta noni, shippai shimashita.", id:"Padahal sudah berusaha, tapi gagal."},
       {jp:"約束したのに、来ませんでした。", romaji:"Yakusoku shita noni, kimasen deshita.", id:"Padahal sudah janji, tapi tidak datang."}
     ]},
    {bentuk:"〜ても", arti:"walaupun/meskipun ~", penjelasan:"Menyatakan sesuatu tetap terjadi/berlaku meskipun ada kondisi tertentu.",
     contoh:[
       {jp:"雨が降っても、行きます。", romaji:"Ame ga futte mo, ikimasu.", id:"Meskipun hujan, saya akan tetap pergi."},
       {jp:"何度聞いても、わかりません。", romaji:"Nando kiite mo, wakarimasen.", id:"Meskipun sudah bertanya berkali-kali, tetap tidak mengerti."}
     ]}
  ]},

  {bab:9, judul:"Perubahan & Keadaan", pola:[
    {bentuk:"〜ようになる", arti:"jadi bisa/berubah menjadi ~", penjelasan:"Menyatakan perubahan kemampuan atau kebiasaan dari tidak menjadi bisa/terjadi.",
     contoh:[
       {jp:"漢字が読めるようになりました。", romaji:"Kanji ga yomeru you ni narimashita.", id:"Sekarang saya jadi bisa membaca kanji."},
       {jp:"毎日運動するようになりました。", romaji:"Mainichi undou suru you ni narimashita.", id:"Sekarang saya jadi berolahraga setiap hari."}
     ]},
    {bentuk:"〜ことになる", arti:"diputuskan/menjadi akan ~", penjelasan:"Menyatakan keputusan yang ditentukan oleh keadaan/pihak lain, bukan kehendak pribadi.",
     contoh:[
       {jp:"来月大阪に転勤することになりました。", romaji:"Raigetsu Oosaka ni tenkin suru koto ni narimashita.", id:"Bulan depan diputuskan saya pindah tugas ke Osaka."},
       {jp:"会議は中止することになりました。", romaji:"Kaigi wa chuushi suru koto ni narimashita.", id:"Rapat diputuskan untuk dibatalkan."}
     ]},
    {bentuk:"〜ことにする", arti:"memutuskan untuk ~ (kehendak sendiri)", penjelasan:"Menyatakan keputusan pribadi yang diambil dengan sengaja.",
     contoh:[
       {jp:"タバコをやめることにしました。", romaji:"Tabako o yameru koto ni shimashita.", id:"Saya memutuskan untuk berhenti merokok."},
       {jp:"毎朝走ることにしています。", romaji:"Maiasa hashiru koto ni shite imasu.", id:"Saya sudah memutuskan (dan menjalani kebiasaan) lari setiap pagi."}
     ]},
    {bentuk:"〜なくなる", arti:"jadi tidak lagi ~", penjelasan:"Menyatakan perubahan dari bisa/ada menjadi tidak bisa/tidak ada.",
     contoh:[
       {jp:"最近お酒を飲まなくなりました。", romaji:"Saikin osake o nomanaku narimashita.", id:"Akhir-akhir ini saya jadi tidak minum alkohol lagi."},
       {jp:"時間がなくなりました。", romaji:"Jikan ga nakunarimashita.", id:"Waktunya sudah habis."}
     ]},
    {bentuk:"〜てきた / 〜ていく (perubahan waktu)", arti:"berubah menuju sekarang / berubah ke depan", penjelasan:"Penekanan pada perubahan keadaan seiring waktu, てきた=sampai sekarang, ていく=mulai sekarang dan seterusnya.",
     contoh:[
       {jp:"日本語が上手になってきました。", romaji:"Nihongo ga jouzu ni natte kimashita.", id:"Bahasa Jepang saya jadi makin mahir (sampai sekarang)."},
       {jp:"これからも頑張っていきます。", romaji:"Korekara mo ganbatte ikimasu.", id:"Mulai sekarang saya akan terus berusaha."}
     ]}
  ]},

  {bab:10, judul:"Cara, Tingkat & Larangan", pola:[
    {bentuk:"〜方（かた）", arti:"cara melakukan ~", penjelasan:"Bentuk kata kerja (masu-kei) + 方 menyatakan cara/metode melakukan sesuatu.",
     contoh:[
       {jp:"この漢字の読み方がわかりません。", romaji:"Kono kanji no yomikata ga wakarimasen.", id:"Saya tidak tahu cara membaca kanji ini."},
       {jp:"作り方を教えてください。", romaji:"Tsukurikata o oshiete kudasai.", id:"Tolong ajari cara membuatnya."}
     ]},
    {bentuk:"〜すぎる", arti:"terlalu ~", penjelasan:"Menyatakan sesuatu melebihi batas wajar.",
     contoh:[
       {jp:"食べすぎて、お腹が痛いです。", romaji:"Tabesugite, onaka ga itai desu.", id:"Karena kebanyakan makan, perut saya sakit."},
       {jp:"この問題は難しすぎます。", romaji:"Kono mondai wa muzukashisugimasu.", id:"Soal ini terlalu sulit."}
     ]},
    {bentuk:"〜やすい / 〜にくい", arti:"mudah ~ / sulit ~", penjelasan:"Menyatakan tingkat kemudahan atau kesulitan melakukan sesuatu.",
     contoh:[
       {jp:"この本は読みやすいです。", romaji:"Kono hon wa yomiyasui desu.", id:"Buku ini mudah dibaca."},
       {jp:"この漢字は書きにくいです。", romaji:"Kono kanji wa kakinikui desu.", id:"Kanji ini sulit ditulis."}
     ]},
    {bentuk:"〜なさい", arti:"perintah untuk ~ (agak lembut, ke bawahan/anak)", penjelasan:"Bentuk perintah yang biasa dipakai orang tua/guru ke anak/murid.",
     contoh:[
       {jp:"早く寝なさい。", romaji:"Hayaku nenasai.", id:"Cepat tidur."},
       {jp:"宿題をしなさい。", romaji:"Shukudai o shinasai.", id:"Kerjakan PR-mu."}
     ]},
    {bentuk:"〜な (larangan kasar)", arti:"jangan ~ (kasar/akrab)", penjelasan:"Bentuk larangan langsung dari kata kerja bentuk kamus, terkesan kasar/akrab, sering dipakai laki-laki atau situasi mendesak.",
     contoh:[
       {jp:"ここに入るな。", romaji:"Koko ni hairu na.", id:"Jangan masuk ke sini."},
       {jp:"心配するな。", romaji:"Shinpai suru na.", id:"Jangan khawatir."}
     ]}
  ]}
];
