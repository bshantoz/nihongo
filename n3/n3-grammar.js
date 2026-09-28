// ===================================================================
// Qategori Nihongo - Materi Pola Kalimat (Bunpou) JLPT N3
// 10 Bab (tab), tiap bab berisi 5 pola. Struktur mengikuti materi TG2 (per-bab, lazy tab).
// ===================================================================
window.N3_GRAMMAR = [

// ============ BAB 1 ============
{bab:1, judul:"Alasan & Akibat", pola:[
  {bentuk:"〜ため(に)", arti:"karena ~ / demi ~", penjelasan:"Menyatakan alasan (formal) atau tujuan. Diikuti kata benda+の, kata kerja bentuk kamus, atau kata sifat. Lebih formal daripada から.",
   contoh:[
     {jp:"事故のため、電車が遅れています。", romaji:"Jiko no tame, densha ga okurete imasu.", id:"Karena kecelakaan, kereta terlambat."},
     {jp:"家族を養うために、一生懸命働いています。", romaji:"Kazoku o yashinau tame ni, isshoukenmei hataraite imasu.", id:"Demi menafkahi keluarga, saya bekerja keras."}
   ]},
  {bentuk:"〜おかげで", arti:"berkat ~", penjelasan:"Menyatakan akibat positif berkat sesuatu/seseorang. Nuansa rasa terima kasih.",
   contoh:[
     {jp:"先生のおかげで、試験に合格できました。", romaji:"Sensei no okage de, shiken ni goukaku dekimashita.", id:"Berkat guru, saya bisa lulus ujian."},
     {jp:"天気が良かったおかげで、旅行が楽しかった。", romaji:"Tenki ga yokatta okage de, ryokou ga tanoshikatta.", id:"Berkat cuaca yang bagus, liburannya menyenangkan."}
   ]},
  {bentuk:"〜せいで", arti:"gara-gara ~", penjelasan:"Menyatakan akibat negatif, menyalahkan sesuatu/seseorang. Kebalikan dari おかげで.",
   contoh:[
     {jp:"渋滞のせいで、会議に遅れた。", romaji:"Juutai no sei de, kaigi ni okureta.", id:"Gara-gara macet, saya terlambat rapat."},
     {jp:"寝坊したせいで、朝ごはんを食べられなかった。", romaji:"Nebou shita sei de, asagohan o taberarenakatta.", id:"Gara-gara kesiangan, saya tidak sempat sarapan."}
   ]},
  {bentuk:"〜ことから", arti:"berdasarkan hal bahwa ~ / karena ~", penjelasan:"Menyatakan alasan yang menjadi dasar suatu kesimpulan/nama, sering dipakai dalam penjelasan asal-usul.",
   contoh:[
     {jp:"この町は温泉が多いことから「温泉の町」と呼ばれている。", romaji:"Kono machi wa onsen ga ooi koto kara \"onsen no machi\" to yobarete iru.", id:"Karena banyak pemandian air panas, kota ini disebut \"kota onsen\"."},
     {jp:"顔が似ていることから、姉妹だとわかった。", romaji:"Kao ga nite iru koto kara, shimai da to wakatta.", id:"Karena wajahnya mirip, jadi ketahuan kalau mereka bersaudara."}
   ]},
  {bentuk:"〜あまり", arti:"karena terlalu ~", penjelasan:"Menyatakan bahwa suatu keadaan/perasaan berlebihan menyebabkan akibat tertentu (biasanya negatif).",
   contoh:[
     {jp:"緊張のあまり、声が震えてしまった。", romaji:"Kinchou no amari, koe ga furuete shimatta.", id:"Karena terlalu tegang, suara saya sampai bergetar."},
     {jp:"嬉しさのあまり、涙が出た。", romaji:"Ureshisa no amari, namida ga deta.", id:"Karena terlalu senang, air mata saya keluar."}
   ]}
]},

// ============ BAB 2 ============
{bab:2, judul:"Syarat & Pengandaian", pola:[
  {bentuk:"〜さえ〜ば", arti:"asalkan ~", penjelasan:"Menyatakan syarat minimal yang cukup untuk terjadinya sesuatu. Pola: N/Vます形+さえ+すれば/条件形.",
   contoh:[
     {jp:"お金さえあれば、何でも買える。", romaji:"Okane sae areba, nan demo kaeru.", id:"Asalkan ada uang, apa saja bisa dibeli."},
     {jp:"練習さえすれば、上手になります。", romaji:"Renshuu sae sureba, jouzu ni narimasu.", id:"Asalkan berlatih, pasti akan mahir."}
   ]},
  {bentuk:"〜としたら／とすれば", arti:"seandainya ~", penjelasan:"Mengandaikan suatu situasi hipotetis lalu menyampaikan konsekuensinya.",
   contoh:[
     {jp:"宝くじが当たったとしたら、何を買いますか。", romaji:"Takarakuji ga atatta to shitara, nani o kaimasu ka.", id:"Seandainya menang lotre, kamu akan membeli apa?"},
     {jp:"もし失敗するとすれば、準備不足が原因だろう。", romaji:"Moshi shippai suru to sureba, junbi busoku ga gen'in darou.", id:"Kalau seandainya gagal, penyebabnya mungkin kurang persiapan."}
   ]},
  {bentuk:"〜ば〜ほど", arti:"semakin ~ semakin ~", penjelasan:"Menyatakan perubahan berbanding lurus: semakin A, semakin B.",
   contoh:[
     {jp:"漢字は勉強すればするほど面白くなる。", romaji:"Kanji wa benkyou sureba suru hodo omoshiroku naru.", id:"Kanji, semakin dipelajari semakin menarik."},
     {jp:"このゲームは難しければ難しいほど楽しい。", romaji:"Kono geemu wa muzukashikereba muzukashii hodo tanoshii.", id:"Game ini, semakin sulit semakin menyenangkan."}
   ]},
  {bentuk:"〜たとえ〜ても", arti:"walaupun (seandainya) ~", penjelasan:"Menyatakan bahwa hasilnya tetap sama meskipun syarat hipotetis terpenuhi. Sering berpasangan dengan ても/でも.",
   contoh:[
     {jp:"たとえ雨が降っても、試合は行われます。", romaji:"Tatoe ame ga futte mo, shiai wa okonawaremasu.", id:"Walaupun hujan turun, pertandingan tetap dilaksanakan."},
     {jp:"たとえ無理だとしても、挑戦してみたい。", romaji:"Tatoe muri da to shite mo, chousen shite mitai.", id:"Walaupun seandainya mustahil, saya ingin mencobanya."}
   ]},
  {bentuk:"〜ないことには", arti:"kalau tidak ~ (maka tidak akan)", penjelasan:"Menyatakan bahwa tanpa syarat tersebut, hal berikutnya tidak dapat terjadi.",
   contoh:[
     {jp:"実際に見ないことには、決められません。", romaji:"Jissai ni minai koto ni wa, kimeraremasen.", id:"Kalau tidak lihat langsung, saya tidak bisa memutuskan."},
     {jp:"やってみないことには、成功するかわからない。", romaji:"Yatte minai koto ni wa, seikou suru ka wakaranai.", id:"Kalau tidak mencobanya, tidak akan tahu apakah berhasil."}
   ]}
]},

// ============ BAB 3 ============
{bab:3, judul:"Ungkapan Waktu", pola:[
  {bentuk:"〜うちに", arti:"selagi ~ (sebelum berubah)", penjelasan:"Menyatakan melakukan sesuatu selama suatu kondisi masih berlangsung, sebelum berubah.",
   contoh:[
     {jp:"温かいうちに食べてください。", romaji:"Atatakai uchi ni tabete kudasai.", id:"Silakan makan selagi masih hangat."},
     {jp:"若いうちにいろいろな経験をしたほうがいい。", romaji:"Wakai uchi ni iroiro na keiken o shita hou ga ii.", id:"Sebaiknya mencoba banyak pengalaman selagi masih muda."}
   ]},
  {bentuk:"〜間に", arti:"selama ~ (di sela waktu itu)", penjelasan:"Menyatakan sesuatu terjadi di dalam rentang waktu tertentu (sekali saja, bukan berkelanjutan).",
   contoh:[
     {jp:"子供が寝ている間に、家事を済ませた。", romaji:"Kodomo ga nete iru aida ni, kaji o sumaseta.", id:"Selama anak sedang tidur, saya menyelesaikan pekerjaan rumah."},
     {jp:"休憩の間に、コーヒーを飲んだ。", romaji:"Kyuukei no aida ni, koohii o nonda.", id:"Di sela istirahat, saya minum kopi."}
   ]},
  {bentuk:"〜たとたん(に)", arti:"begitu ~ langsung ~", penjelasan:"Menyatakan sesuatu terjadi persis setelah suatu aksi selesai, tanpa jeda, sering mengandung kejutan.",
   contoh:[
     {jp:"ドアを開けたとたん、猫が飛び出した。", romaji:"Doa o aketa totan, neko ga tobidashita.", id:"Begitu pintu dibuka, kucingnya langsung melompat keluar."},
     {jp:"彼の顔を見たとたん、名前を思い出した。", romaji:"Kare no kao o mita totan, namae o omoidashita.", id:"Begitu melihat wajahnya, saya langsung ingat namanya."}
   ]},
  {bentuk:"〜て以来", arti:"sejak ~", penjelasan:"Menyatakan suatu keadaan berlanjut sejak suatu peristiwa terjadi.",
   contoh:[
     {jp:"日本に来て以来、一度も国に帰っていません。", romaji:"Nihon ni kite irai, ichido mo kuni ni kaette imasen.", id:"Sejak datang ke Jepang, saya belum pernah pulang ke negara asal sekali pun."},
     {jp:"卒業して以来、彼とは会っていない。", romaji:"Sotsugyou shite irai, kare to wa atte inai.", id:"Sejak lulus, saya belum pernah bertemu dengannya."}
   ]},
  {bentuk:"〜たびに", arti:"setiap kali ~", penjelasan:"Menyatakan sesuatu selalu terjadi setiap kali suatu peristiwa/tindakan berlangsung.",
   contoh:[
     {jp:"この写真を見るたびに、故郷を思い出す。", romaji:"Kono shashin o miru tabi ni, kokyou o omoidasu.", id:"Setiap kali melihat foto ini, saya teringat kampung halaman."},
     {jp:"彼女に会うたびに、元気をもらう。", romaji:"Kanojo ni au tabi ni, genki o morau.", id:"Setiap kali bertemu dia, saya jadi bersemangat."}
   ]}
]},

// ============ BAB 4 ============
{bab:4, judul:"Perkiraan & Kemungkinan", pola:[
  {bentuk:"〜らしい", arti:"katanya ~ / kelihatannya ~", penjelasan:"Perkiraan berdasarkan informasi dari luar (dengar/baca). Berbeda dengan ようだ yang lebih berdasar pengamatan langsung.",
   contoh:[
     {jp:"天気予報によると、明日は雨らしい。", romaji:"Tenki yohou ni yoru to, ashita wa ame rashii.", id:"Menurut ramalan cuaca, katanya besok akan hujan."},
     {jp:"あの店のラーメンはとても美味しいらしい。", romaji:"Ano mise no raamen wa totemo oishii rashii.", id:"Katanya ramen di toko itu sangat enak."}
   ]},
  {bentuk:"〜ようだ", arti:"sepertinya ~ (berdasarkan pengamatan)", penjelasan:"Perkiraan subjektif berdasarkan apa yang dilihat/dirasakan sendiri oleh pembicara.",
   contoh:[
     {jp:"隣の部屋に誰かいるようだ。", romaji:"Tonari no heya ni dareka iru you da.", id:"Sepertinya ada seseorang di kamar sebelah."},
     {jp:"彼は今日、元気がないようだ。", romaji:"Kare wa kyou, genki ga nai you da.", id:"Sepertinya dia hari ini kurang bersemangat."}
   ]},
  {bentuk:"〜みたいだ", arti:"kelihatannya ~ (versi santai dari ようだ)", penjelasan:"Sama makna dengan ようだ tetapi digunakan dalam percakapan santai (bisa langsung menempel ke kata benda/na-keiyoushi tanpa の/な).",
   contoh:[
     {jp:"外は雨が降っているみたいだ。", romaji:"Soto wa ame ga futte iru mitai da.", id:"Kelihatannya di luar sedang hujan."},
     {jp:"彼女は猫みたいな性格だ。", romaji:"Kanojo wa neko mitai na seikaku da.", id:"Kepribadiannya seperti kucing."}
   ]},
  {bentuk:"〜かもしれない", arti:"mungkin ~", penjelasan:"Menyatakan kemungkinan dengan tingkat keyakinan rendah-sedang.",
   contoh:[
     {jp:"彼は今日来ないかもしれない。", romaji:"Kare wa kyou konai kamoshirenai.", id:"Mungkin dia hari ini tidak datang."},
     {jp:"このニュースはうそかもしれない。", romaji:"Kono nyuusu wa uso kamoshirenai.", id:"Berita ini mungkin bohong."}
   ]},
  {bentuk:"〜にちがいない", arti:"pasti ~", penjelasan:"Menyatakan keyakinan tinggi bahwa sesuatu benar, berdasarkan bukti/alasan kuat.",
   contoh:[
     {jp:"この字は田中さんが書いたに違いない。", romaji:"Kono ji wa Tanaka-san ga kaita ni chigainai.", id:"Tulisan ini pasti ditulis oleh Pak/Bu Tanaka."},
     {jp:"あんなに練習したのだから、合格するに違いない。", romaji:"Anna ni renshuu shita no dakara, goukaku suru ni chigainai.", id:"Karena sudah berlatih sebanyak itu, pasti akan lulus."}
   ]}
]},

// ============ BAB 5 ============
{bab:5, judul:"Perubahan & Kecenderungan", pola:[
  {bentuk:"〜ようになる", arti:"menjadi bisa/terbiasa ~", penjelasan:"Menyatakan perubahan kemampuan atau kebiasaan dari tidak bisa/tidak terjadi menjadi bisa/terjadi.",
   contoh:[
     {jp:"毎日練習して、泳げるようになった。", romaji:"Mainichi renshuu shite, oyogeru you ni natta.", id:"Karena berlatih tiap hari, saya jadi bisa berenang."},
     {jp:"最近、野菜を食べるようになった。", romaji:"Saikin, yasai o taberu you ni natta.", id:"Akhir-akhir ini, saya jadi (terbiasa) makan sayur."}
   ]},
  {bentuk:"〜つつある", arti:"sedang berlangsung menuju ~", penjelasan:"Menyatakan suatu perubahan sedang berlangsung secara bertahap (gaya formal/tulisan).",
   contoh:[
     {jp:"景気は少しずつ回復しつつある。", romaji:"Keiki wa sukoshizutsu kaifuku shitsutsu aru.", id:"Kondisi ekonomi sedang berangsur pulih."},
     {jp:"高齢化が進みつつある社会。", romaji:"Koureika ga susumitsutsu aru shakai.", id:"Masyarakat yang penuaan populasinya sedang berkembang."}
   ]},
  {bentuk:"〜がちだ", arti:"cenderung sering ~", penjelasan:"Menyatakan kecenderungan suatu hal (biasanya negatif) sering terjadi.",
   contoh:[
     {jp:"最近、体調を崩しがちだ。", romaji:"Saikin, taichou o kuzushigachi da.", id:"Akhir-akhir ini, kondisi tubuh saya cenderung sering drop."},
     {jp:"雨の日は忘れ物をしがちだ。", romaji:"Ame no hi wa wasuremono o shigachi da.", id:"Di hari hujan, cenderung sering lupa barang."}
   ]},
  {bentuk:"〜っぽい", arti:"kelihatan seperti ~ / mudah ~", penjelasan:"Menyatakan kesan atau kecenderungan suatu sifat (agak informal).",
   contoh:[
     {jp:"彼は子供っぽい性格だ。", romaji:"Kare wa kodomoppoi seikaku da.", id:"Dia berkepribadian seperti anak kecil."},
     {jp:"このシャツは白っぽい色だ。", romaji:"Kono shatsu wa shiroppoi iro da.", id:"Kemeja ini warnanya keputih-putihan."}
   ]},
  {bentuk:"〜気味", arti:"agak/sedikit ~ (kecenderungan ringan)", penjelasan:"Menyatakan kecenderungan ringan pada suatu keadaan (biasanya negatif), dilekatkan pada kata benda/kata kerja ます形.",
   contoh:[
     {jp:"最近、疲れ気味です。", romaji:"Saikin, tsukare-gimi desu.", id:"Akhir-akhir ini agak lelah."},
     {jp:"風邪気味なので、早く寝ます。", romaji:"Kaze-gimi na node, hayaku nemasu.", id:"Karena agak flu, saya akan tidur lebih awal."}
   ]}
]},

// ============ BAB 6 ============
{bab:6, judul:"Kewajiban & Larangan", pola:[
  {bentuk:"〜べきだ", arti:"seharusnya ~", penjelasan:"Menyatakan kewajiban moral/anjuran kuat bahwa sesuatu sepatutnya dilakukan.",
   contoh:[
     {jp:"約束は守るべきだ。", romaji:"Yakusoku wa mamoru beki da.", id:"Janji seharusnya ditepati."},
     {jp:"もっと早く相談するべきだった。", romaji:"Motto hayaku soudan suru beki datta.", id:"Seharusnya saya berkonsultasi lebih cepat."}
   ]},
  {bentuk:"〜わけにはいかない", arti:"tidak bisa begitu saja ~", penjelasan:"Menyatakan tidak bisa melakukan sesuatu karena alasan sosial/moral/tanggung jawab, walau ingin.",
   contoh:[
     {jp:"明日は大事な会議があるので、休むわけにはいかない。", romaji:"Ashita wa daiji na kaigi ga aru node, yasumu wake ni wa ikanai.", id:"Karena besok ada rapat penting, saya tidak bisa begitu saja libur."},
     {jp:"約束したのだから、行かないわけにはいかない。", romaji:"Yakusoku shita no dakara, ikanai wake ni wa ikanai.", id:"Karena sudah berjanji, saya tidak bisa begitu saja tidak pergi."}
   ]},
  {bentuk:"〜ざるをえない", arti:"terpaksa ~", penjelasan:"Menyatakan keadaan di mana pembicara terpaksa melakukan sesuatu meski tidak ingin (bentuk formal, dari Vない形 diganti ざるを得ない, kecuali する→せざるを得ない).",
   contoh:[
     {jp:"上司の命令なので、従わざるを得ない。", romaji:"Joushi no meirei na node, shitagawazaru o enai.", id:"Karena perintah atasan, saya terpaksa mematuhinya."},
     {jp:"台風のため、旅行を中止せざるを得なかった。", romaji:"Taifuu no tame, ryokou o chuushi sezaru o enakatta.", id:"Karena topan, terpaksa membatalkan perjalanan."}
   ]},
  {bentuk:"〜ことになっている", arti:"sudah ditetapkan/aturannya ~", penjelasan:"Menyatakan aturan, jadwal, atau kesepakatan yang berlaku secara tetap.",
   contoh:[
     {jp:"このクラスでは日本語で話すことになっている。", romaji:"Kono kurasu de wa nihongo de hanasu koto ni natte iru.", id:"Di kelas ini sudah menjadi aturan untuk berbicara dalam bahasa Jepang."},
     {jp:"会議は毎週月曜日に行うことになっている。", romaji:"Kaigi wa maishuu getsuyoubi ni okonau koto ni natte iru.", id:"Sudah ditetapkan rapat diadakan setiap hari Senin."}
   ]},
  {bentuk:"〜ないと(いけない)", arti:"harus ~ (bentuk percakapan)", penjelasan:"Bentuk singkat percakapan dari 〜なければならない, menyatakan kewajiban.",
   contoh:[
     {jp:"もう帰らないと。", romaji:"Mou kaeranai to.", id:"Sudah harus pulang nih."},
     {jp:"早く準備しないと、遅刻するよ。", romaji:"Hayaku junbi shinai to, chikoku suru yo.", id:"Kalau tidak segera bersiap, nanti terlambat lho."}
   ]}
]},

// ============ BAB 7 ============
{bab:7, judul:"Kontras & Perlawanan", pola:[
  {bentuk:"〜にもかかわらず", arti:"meskipun ~ (tetap saja)", penjelasan:"Menyatakan hasil yang berlawanan dengan yang diharapkan dari kondisi sebelumnya (formal).",
   contoh:[
     {jp:"雨が降っているにもかかわらず、試合が行われた。", romaji:"Ame ga futte iru ni mo kakawarazu, shiai ga okonawareta.", id:"Meskipun hujan turun, pertandingan tetap dilaksanakan."},
     {jp:"努力したにもかかわらず、結果は出なかった。", romaji:"Doryoku shita ni mo kakawarazu, kekka wa denakatta.", id:"Meskipun sudah berusaha, hasilnya tidak keluar."}
   ]},
  {bentuk:"〜くせに", arti:"padahal ~ (nada mencela)", penjelasan:"Menyatakan kontras dengan nada kritis/mencela, biasanya pada orang lain.",
   contoh:[
     {jp:"下手なくせに、自信満々だ。", romaji:"Heta na kuse ni, jishin manman da.", id:"Padahal tidak jago, tapi percaya diri sekali."},
     {jp:"知っているくせに、教えてくれない。", romaji:"Shitte iru kuse ni, oshiete kurenai.", id:"Padahal tahu, tapi tidak mau memberi tahu."}
   ]},
  {bentuk:"〜ものの", arti:"walaupun ~ (tetapi ada kesenjangan)", penjelasan:"Menyatakan kondisi yang diakui benar, tetapi hasil/kelanjutannya tidak sesuai harapan.",
   contoh:[
     {jp:"日本語を勉強したものの、まだ上手に話せない。", romaji:"Nihongo o benkyou shita mono no, mada jouzu ni hanasenai.", id:"Walaupun sudah belajar bahasa Jepang, masih belum bisa bicara dengan lancar."},
     {jp:"薬を飲んだものの、熱が下がらない。", romaji:"Kusuri o nonda mono no, netsu ga sagaranai.", id:"Walaupun sudah minum obat, demamnya tidak turun."}
   ]},
  {bentuk:"〜わりに(は)", arti:"padahal (dibandingkan) ~", penjelasan:"Menyatakan hasil yang tidak sesuai/melebihi ekspektasi dibandingkan kondisi yang disebutkan.",
   contoh:[
     {jp:"値段が高いわりに、味はあまり良くない。", romaji:"Nedan ga takai wari ni, aji wa amari yokunai.", id:"Padahal harganya mahal, rasanya kurang enak."},
     {jp:"練習しなかったわりには、うまくできた。", romaji:"Renshuu shinakatta wari ni wa, umaku dekita.", id:"Padahal tidak berlatih, hasilnya lumayan bagus."}
   ]},
  {bentuk:"〜つつ(も)", arti:"sambil ~ (namun bertentangan)", penjelasan:"Menyatakan dua hal yang bertentangan terjadi bersamaan: menyadari A tetapi tetap melakukan B.",
   contoh:[
     {jp:"体に悪いと知りつつも、タバコをやめられない。", romaji:"Karada ni warui to shiritsutsu mo, tabako o yamerarenai.", id:"Meskipun tahu buruk bagi tubuh, tetap tidak bisa berhenti merokok."},
     {jp:"申し訳ないと思いつつ、また遅刻してしまった。", romaji:"Moushiwakenai to omoitsutsu, mata chikoku shite shimatta.", id:"Meski merasa tidak enak, saya terlambat lagi."}
   ]}
]},

// ============ BAB 8 ============
{bab:8, judul:"Ukemi, Shieki & Sonkeigo Ringan", pola:[
  {bentuk:"〜(ら)れる (受身/Ukemi)", arti:"bentuk pasif: di~", penjelasan:"Menyatakan subjek dikenai suatu aksi. Godan: え段+れる, Ichidan: 語幹+られる, する→される, 来る→来られる.",
   contoh:[
     {jp:"財布を盗まれました。", romaji:"Saifu o nusumaremashita.", id:"Dompet saya dicuri."},
     {jp:"先生に褒められて嬉しかった。", romaji:"Sensei ni homerarete ureshikatta.", id:"Saya senang dipuji oleh guru."}
   ]},
  {bentuk:"〜(さ)せる (使役/Shieki)", arti:"bentuk kausatif: menyuruh/membiarkan ~", penjelasan:"Menyatakan menyuruh atau membiarkan seseorang melakukan sesuatu. Godan: あ段+せる, Ichidan: 語幹+させる, する→させる, 来る→来させる.",
   contoh:[
     {jp:"先生は学生に本を読ませた。", romaji:"Sensei wa gakusei ni hon o yomaseta.", id:"Guru menyuruh murid membaca buku."},
     {jp:"子供を一人で行かせるのは心配だ。", romaji:"Kodomo o hitori de ikaseru no wa shinpai da.", id:"Membiarkan anak pergi sendirian itu mengkhawatirkan."}
   ]},
  {bentuk:"〜(さ)せられる (使役受身)", arti:"terpaksa disuruh ~", penjelasan:"Gabungan kausatif+pasif, menyatakan pembicara terpaksa melakukan sesuatu karena disuruh orang lain.",
   contoh:[
     {jp:"上司に残業させられた。", romaji:"Joushi ni zangyou saserareta.", id:"Saya disuruh (terpaksa) lembur oleh atasan."},
     {jp:"子供の頃、嫌いな野菜を食べさせられた。", romaji:"Kodomo no koro, kirai na yasai o tabesaserareta.", id:"Waktu kecil, saya dipaksa makan sayur yang tidak disukai."}
   ]},
  {bentuk:"〜(さ)せてもらう／いただく", arti:"mohon izin untuk ~", penjelasan:"Meminta izin secara sopan untuk melakukan sesuatu demi kepentingan sendiri; いただく lebih sopan (kepada atasan/orang lain).",
   contoh:[
     {jp:"今日は早く帰らせていただきます。", romaji:"Kyou wa hayaku kaerasete itadakimasu.", id:"Hari ini mohon izin untuk pulang lebih awal."},
     {jp:"少し休ませてもらえますか。", romaji:"Sukoshi yasumasete moraemasu ka.", id:"Bolehkah saya beristirahat sebentar?"}
   ]},
  {bentuk:"お／ご〜になる、お／ご〜する", arti:"bentuk sonkeigo/kenjougo dasar", penjelasan:"お/ご+Vます形+になる untuk meninggikan lawan bicara (sonkeigo); お/ご+Vます形+する untuk merendahkan diri (kenjougo).",
   contoh:[
     {jp:"社長はもうお帰りになりました。", romaji:"Shachou wa mou okaeri ni narimashita.", id:"Direktur sudah pulang (bentuk hormat)."},
     {jp:"荷物をお持ちしましょうか。", romaji:"Nimotsu o omochi shimashou ka.", id:"Izinkan saya membawakan barangnya."}
   ]}
]},

// ============ BAB 9 ============
{bab:9, judul:"Penekanan & Batasan", pola:[
  {bentuk:"〜さえ", arti:"bahkan ~ saja", penjelasan:"Menekankan contoh ekstrem untuk menunjukkan hal lain pasti juga berlaku; sering berarti 'bahkan...saja (apalagi yang lain)'.",
   contoh:[
     {jp:"漢字どころか、ひらがなさえ読めない。", romaji:"Kanji dokoro ka, hiragana sae yomenai.", id:"Jangankan kanji, hiragana saja tidak bisa dibaca."},
     {jp:"忙しくて、昼ご飯を食べる時間さえない。", romaji:"Isogashikute, hirugohan o taberu jikan sae nai.", id:"Sangat sibuk sampai waktu untuk makan siang saja tidak ada."}
   ]},
  {bentuk:"〜てでも", arti:"walau harus ~ sekalipun", penjelasan:"Menyatakan tekad kuat untuk melakukan sesuatu meski harus mengorbankan hal lain.",
   contoh:[
     {jp:"借金をしてでも、店を続けたい。", romaji:"Shakkin o shite demo, mise o tsuzuketai.", id:"Walau harus berutang sekalipun, saya ingin melanjutkan toko ini."},
     {jp:"徹夜をしてでも、レポートを終わらせる。", romaji:"Tetsuya o shite demo, repooto o owaraseru.", id:"Walau harus begadang sekalipun, saya akan selesaikan laporan ini."}
   ]},
  {bentuk:"〜しか〜ない", arti:"hanya ~ (tidak lebih)", penjelasan:"Menyatakan pembatasan tegas, hanya ada satu pilihan/jumlah tersebut, selalu diikuti bentuk negatif.",
   contoh:[
     {jp:"財布に千円しかない。", romaji:"Saifu ni sen'en shika nai.", id:"Di dompet hanya ada seribu yen."},
     {jp:"あきらめるしかなかった。", romaji:"Akirameru shika nakatta.", id:"Tidak ada pilihan lain selain menyerah."}
   ]},
  {bentuk:"〜に限って", arti:"khusus/justru pada saat ~ (nuansa sial)", penjelasan:"Menyatakan sesuatu yang tidak diinginkan justru terjadi pada momen tertentu.",
   contoh:[
     {jp:"急いでいる時に限って、電車が遅れる。", romaji:"Isoide iru toki ni kagitte, densha ga okureru.", id:"Justru saat sedang buru-buru, keretanya terlambat."},
     {jp:"傘を持たない日に限って雨が降る。", romaji:"Kasa o motanai hi ni kagitte ame ga furu.", id:"Justru di hari tidak bawa payung, hujan turun."}
   ]},
  {bentuk:"〜どころか", arti:"jangankan ~, malah ~", penjelasan:"Menekankan bahwa kenyataan jauh berbeda (lebih ekstrem) dari yang disebutkan pertama.",
   contoh:[
     {jp:"忙しいどころか、暇で仕方がない。", romaji:"Isogashii dokoro ka, hima de shikata ga nai.", id:"Jangankan sibuk, malah senggang sekali."},
     {jp:"貯金するどころか、借金が増えている。", romaji:"Chokin suru dokoro ka, shakkin ga fuete iru.", id:"Jangankan menabung, utang malah bertambah."}
   ]}
]},

// ============ BAB 10 ============
{bab:10, judul:"Ungkapan Formal & Ujian", pola:[
  {bentuk:"〜ものだ", arti:"memang seharusnya begitu / dulu biasa ~", penjelasan:"Menyatakan kebenaran umum/norma (harus begitu), atau kebiasaan/kenangan masa lalu.",
   contoh:[
     {jp:"年上の人には敬語を使うものだ。", romaji:"Toshiue no hito ni wa keigo o tsukau mono da.", id:"Kepada orang yang lebih tua memang seharusnya memakai bahasa hormat."},
     {jp:"子供の頃、よくこの川で泳いだものだ。", romaji:"Kodomo no koro, yoku kono kawa de oyoida mono da.", id:"Waktu kecil, saya dulu sering berenang di sungai ini."}
   ]},
  {bentuk:"〜わけだ", arti:"pantas saja ~ / berarti ~", penjelasan:"Menyatakan kesimpulan logis dari suatu fakta/alasan yang sudah diketahui.",
   contoh:[
     {jp:"3年间日本に住んでいた。だから日本語が上手なわけだ。", romaji:"San-nen kan Nihon ni sunde ita. Dakara nihongo ga jouzu na wake da.", id:"Dia tinggal 3 tahun di Jepang. Pantas saja bahasa Jepangnya lancar."},
     {jp:"12時か。もう眠いわけだ。", romaji:"Juuni-ji ka. Mou nemui wake da.", id:"Sudah jam 12. Pantas saja sudah mengantuk."}
   ]},
  {bentuk:"〜というものだ", arti:"itulah yang namanya ~", penjelasan:"Menyatakan penilaian/kesimpulan umum pembicara tentang suatu hal, sering dipakai untuk menegaskan pendapat.",
   contoh:[
     {jp:"困っている人を助けるのが友達というものだ。", romaji:"Komatte iru hito o tasukeru no ga tomodachi to iu mono da.", id:"Menolong orang yang kesusahan, itulah yang namanya teman."},
     {jp:"それは少し無理というものだ。", romaji:"Sore wa sukoshi muri to iu mono da.", id:"Itu namanya agak mustahil."}
   ]},
  {bentuk:"〜一方だ", arti:"terus-menerus semakin ~", penjelasan:"Menyatakan suatu perubahan (biasanya searah) yang terus berlanjut tanpa henti.",
   contoh:[
     {jp:"物価は上がる一方だ。", romaji:"Bukka wa agaru ippou da.", id:"Harga barang terus-menerus naik."},
     {jp:"人口は減る一方だ。", romaji:"Jinkou wa heru ippou da.", id:"Populasi terus-menerus berkurang."}
   ]},
  {bentuk:"〜上で", arti:"dalam rangka ~ / setelah ~", penjelasan:"(1) N/V-る+上で: dalam proses/rangka melakukan sesuatu. (2) V-た+上で: setelah melakukan sesuatu (baru melakukan yang berikutnya).",
   contoh:[
     {jp:"日本で働く上で、ルールを守ることが大切だ。", romaji:"Nihon de hataraku ue de, ruuru o mamoru koto ga taisetsu da.", id:"Dalam bekerja di Jepang, mematuhi aturan itu penting."},
     {jp:"よく考えた上で、返事をします。", romaji:"Yoku kangaeta ue de, henji o shimasu.", id:"Setelah dipikirkan matang-matang, saya akan memberi jawaban."}
   ]}
]}
];
