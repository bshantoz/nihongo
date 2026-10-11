// ===================================================================
// Qategori Nihongo - Choukai (聴解 / Mendengarkan) JLPT N2
// Audio dibaca langsung oleh browser (Web Speech API, suara ja-JP).
// Tipe: kadai (課題理解), point (ポイント理解), sokuji (即時応答)
// Tiap baris dialog punya gender ("L"=laki-laki, "P"=perempuan) untuk pemilihan suara TTS.
// ===================================================================
window.N2_CHOUKAI = [

  {tipe:"kadai", judul:"Rapat Proyek",
   dialog:[
     {speaker:"A", gender:"P", jp:"部長、来月のプロジェクトの件ですが、予算が予定より大幅に増えそうです。", id:"Pak Kepala, soal proyek bulan depan, anggarannya sepertinya akan naik jauh dari rencana.", romaji:"Buchou, raigetsu no purojekuto no ken desu ga, yosan ga yotei yori oohaba ni fuesou desu."},
     {speaker:"B", gender:"L", jp:"それは困ったな。原因は何だ。", id:"Wah, repot juga. Apa penyebabnya?", romaji:"Sore wa komatta na. Gen'in wa nan da."},
     {speaker:"A", gender:"P", jp:"材料費が値上がりしたことに加えて、人手も足りていません。", id:"Selain harga bahan naik, tenaga kerja juga kurang.", romaji:"Zairyouhi ga neagari shita koto ni kuwaete, hitode mo tarite imasen."},
     {speaker:"B", gender:"L", jp:"わかった。まず見積もりを見直して、来週までに再提出してくれ。", id:"Baik. Pertama tinjau ulang estimasinya, lalu ajukan lagi sampai minggu depan.", romaji:"Wakatta. Mazu mitsumori o minaoshite, raishuu made ni saiteishutsu shite kure."}
   ],
   pertanyaan:"女の人はこのあと、まず何をしますか。",
   options:["見積もりを見直す", "人を新しく雇う", "材料を注文する", "部長に予算を追加してもらう"],
   correct:0,
   penjelasan:"部長は「見積もりを見直して、来週までに再提出してくれ」と指示しているので、まず見積もりの見直しが先。"},

  {tipe:"kadai", judul:"Konsultasi Akademik",
   dialog:[
     {speaker:"教授", gender:"L", jp:"卒業論文のテーマ、もう決まりましたか。", id:"Apakah tema skripsimu sudah ditentukan?", romaji:"Sotsugyou ronbun no teema, mou kimarimashita ka."},
     {speaker:"学生", gender:"P", jp:"はい、少子高齢化について書こうと思っています。ただ、範囲が広すぎて絞り込めていません。", id:"Ya, saya berencana menulis tentang masyarakat dengan kelahiran rendah dan penuaan penduduk. Tapi cakupannya terlalu luas dan belum bisa saya persempit.", romaji:"Hai, shoushi koureika ni tsuite kakou to omotte imasu. Tada, han'i ga hirosugite shiborikomete imasen."},
     {speaker:"教授", gender:"L", jp:"それなら、まず先行研究をいくつか読んで、扱う地域や年代を絞ってみてはどうですか。", id:"Kalau begitu, coba baca beberapa penelitian terdahulu dulu, lalu persempit wilayah dan tahun yang dibahas.", romaji:"Sore nara, mazu senkou kenkyuu o ikutsu ka yonde, atsukau chiiki ya nendai o shibotte mite wa dou desu ka."},
     {speaker:"学生", gender:"P", jp:"わかりました。来週までに先行研究を読んでみます。", id:"Baik. Sampai minggu depan saya akan coba membaca penelitian terdahulu.", romaji:"Wakarimashita. Raishuu made ni senkou kenkyuu o yonde mimasu."}
   ],
   pertanyaan:"学生はこのあと、まず何をしますか。",
   options:["先行研究を読む", "教授にテーマを決めてもらう", "論文をすぐ書き始める", "アンケート調査をする"],
   correct:0,
   penjelasan:"教授の助言を受けて、学生は「来週までに先行研究を読んでみます」と答えているので、まず先行研究を読むのが先。"},

  {tipe:"kadai", judul:"Persiapan Acara",
   dialog:[
     {speaker:"A", gender:"L", jp:"来週のイベント、会場の準備はどこまで進んでいますか。", id:"Persiapan tempat untuk acara minggu depan sudah sampai mana?", romaji:"Raishuu no ibento, kaijou no junbi wa doko made susunde imasu ka."},
     {speaker:"B", gender:"P", jp:"椅子と机の手配は終わりましたが、音響設備の確認がまだです。", id:"Pengaturan kursi dan meja sudah selesai, tetapi pengecekan perangkat suara belum.", romaji:"Isu to tsukue no tehai wa owarimashita ga, onkyou setsubi no kakunin ga mada desu."},
     {speaker:"A", gender:"L", jp:"それは今日中に済ませておいてください。それから、案内状の発送状況も教えてください。", id:"Itu tolong selesaikan hari ini. Lalu beri tahu juga status pengiriman undangannya.", romaji:"Sore wa kyoujuu ni sumasete oite kudasai. Sore kara, annaijou no hassou joukyou mo oshiete kudasai."},
     {speaker:"B", gender:"P", jp:"はい、音響設備の確認を先に済ませます。", id:"Baik, saya selesaikan dulu pengecekan perangkat suara.", romaji:"Hai, onkyou setsubi no kakunin o saki ni sumasemasu."}
   ],
   pertanyaan:"女の人はこのあと、まず何をしますか。",
   options:["音響設備を確認する", "案内状を発送する", "椅子と机を手配する", "会場を予約する"],
   correct:0,
   penjelasan:"女の人自身が「音響設備の確認を先に済ませます」と言っているので、それが最初にすること。"},

  {tipe:"point", judul:"Alasan Menolak Tawaran",
   dialog:[
     {speaker:"A", gender:"L", jp:"転職の話、結局断ったそうですね。給料が低かったんですか。", id:"Katanya tawaran pindah kerja itu akhirnya kamu tolak. Apa gajinya rendah?", romaji:"Tenshoku no hanashi, kekkyoku kotowatta sou desu ne. Kyuuryou ga hikukatta n desu ka."},
     {speaker:"B", gender:"P", jp:"いえ、給料はむしろ今より良かったんです。ただ、勤務地が遠くて、通勤に3時間もかかることがわかって。", id:"Bukan, gajinya justru lebih baik dari sekarang. Hanya saja lokasi kerjanya jauh, dan ternyata perjalanan pergi saja butuh tiga jam.", romaji:"Ie, kyuuryou wa mushiro ima yori yokatta n desu. Tada, kinmuchi ga tookute, tsuukin ni sanjikan mo kakaru koto ga wakatte."},
     {speaker:"A", gender:"L", jp:"それは大変ですね。", id:"Wah, itu berat ya.", romaji:"Sore wa taihen desu ne."}
   ],
   pertanyaan:"女の人が転職の話を断った本当の理由は何ですか。",
   options:["通勤時間が長すぎるから", "給料が低いから", "仕事の内容が合わないから", "会社の評判が悪いから"],
   correct:0,
   penjelasan:"給料はむしろ良かったと述べており、「通勤に3時間もかかる」ことが断った本当の理由。"},

  {tipe:"point", judul:"Pendapat tentang Kebijakan Baru",
   dialog:[
     {speaker:"A", gender:"P", jp:"新しい在宅勤務の制度、どう思いますか。", id:"Bagaimana pendapatmu tentang sistem kerja dari rumah yang baru?", romaji:"Atarashii zaitaku kinmu no seido, dou omoimasu ka."},
     {speaker:"B", gender:"L", jp:"制度自体はいいと思うんですが、評価基準が曖昧なのが気になります。成果をどう測るのか、まだはっきりしていません。", id:"Sistemnya sendiri menurut saya bagus, tetapi saya khawatir kriteria penilaiannya tidak jelas. Bagaimana hasil kerja diukur, belum jelas.", romaji:"Seido jitai wa ii to omou n desu ga, hyouka kijun ga aimai na no ga ki ni narimasu. Seika o dou hakaru no ka, mada hakkiri shite imasen."},
     {speaker:"A", gender:"P", jp:"確かに、そこが不安ですね。", id:"Memang, di situ yang mengkhawatirkan.", romaji:"Tashika ni, soko ga fuan desu ne."}
   ],
   pertanyaan:"男の人が新しい制度について心配していることは何ですか。",
   options:["評価基準が曖昧なこと", "在宅勤務ができないこと", "給料が下がること", "制度が複雑すぎること"],
   correct:0,
   penjelasan:"男の人は制度自体は良いとしながら、「評価基準が曖昧なのが気になる」と述べている。"},

  {tipe:"point", judul:"Evaluasi Layanan Pelanggan",
   dialog:[
     {speaker:"A", gender:"L", jp:"新しいカスタマーサポート、利用してみてどうでしたか。", id:"Bagaimana setelah mencoba layanan pelanggan yang baru?", romaji:"Atarashii kasutamaa sapooto, riyou shite mite dou deshita ka."},
     {speaker:"B", gender:"P", jp:"対応は丁寧でしたが、電話がなかなかつながらなくて、30分も待たされました。", id:"Penanganannya sopan, tetapi teleponnya susah tersambung dan saya sampai disuruh menunggu 30 menit.", romaji:"Taiou wa teinei deshita ga, denwa ga nakanaka tsunagaranakute, sanjuppun mo mataseraremashita."},
     {speaker:"A", gender:"L", jp:"それは不便ですね。", id:"Itu tidak praktis ya.", romaji:"Sore wa fuben desu ne."}
   ],
   pertanyaan:"女の人は新しいカスタマーサポートの何が不満ですか。",
   options:["電話がつながりにくいこと", "対応が丁寧すぎること", "料金が高いこと", "営業時間が短いこと"],
   correct:0,
   penjelasan:"対応は丁寧だったと評価しつつ、「電話がなかなかつながらない」ことに不満を述べている。"},

  {tipe:"point", judul:"Diskusi Kebijakan Lingkungan",
   dialog:[
     {speaker:"A", gender:"P", jp:"プラスチック製品の規制について、企業側はどう反応していますか。", id:"Bagaimana reaksi pihak perusahaan terhadap regulasi produk plastik?", romaji:"Purasuchikku seihin no kisei ni tsuite, kigyougawa wa dou hannou shite imasu ka."},
     {speaker:"B", gender:"L", jp:"環境への配慮という方向性には賛成しているようですが、代替素材のコストが高く、対応に苦労しているようです。", id:"Mereka tampaknya setuju dengan arah kepedulian lingkungan, tetapi biaya bahan pengganti tinggi sehingga kesulitan menyesuaikan diri.", romaji:"Kankyou e no hairyo to iu houkousei ni wa sansei shite iru you desu ga, daitai sozai no kosuto ga takaku, taiou ni kurou shite iru you desu."}
   ],
   pertanyaan:"企業側が困っていることは何ですか。",
   options:["代替素材のコストが高いこと", "規制に反対していること", "環境問題に関心がないこと", "消費者からの苦情が多いこと"],
   correct:0,
   penjelasan:"企業側は規制の方向性自体には賛成しているが、「代替素材のコストが高く、対応に苦労している」と説明されている。"},

  {tipe:"sokuji", judul:"Respons Cepat 1",
   dialog:[{speaker:"A", gender:"P", jp:"この件について、部長に相談してからでないと決められません。", id:"Soal ini, saya tidak bisa memutuskan kalau belum berkonsultasi dengan kepala bagian.", romaji:"Kono ken ni tsuite, buchou ni soudan shite kara denai to kimeraremasen."}],
   pertanyaan:"最も自然な返事はどれですか。",
   options:["わかりました。相談してからまたご連絡ください。", "それはおめでとうございます。", "もう決まったんですね。", "私には関係のないことです。"],
   correct:0,
   penjelasan:"相手が「相談してからでないと決められない」と言っているので、それを了承し次の連絡を待つ返答が自然。"},

  {tipe:"sokuji", judul:"Respons Cepat 2",
   dialog:[{speaker:"A", gender:"L", jp:"申し訳ありませんが、その日は他の予定と重なっておりまして。", id:"Mohon maaf, pada hari itu jadwal saya bentrok dengan acara lain.", romaji:"Moushiwake arimasen ga, sono hi wa hoka no yotei to kasanatte orimashite."}],
   pertanyaan:"最も自然な返事はどれですか。",
   options:["でしたら、別の日に調整しましょうか。", "それはよかったですね。", "予定がなくて暇なんですね。", "では、その日にしましょう。"],
   correct:0,
   penjelasan:"相手が日程の都合が悪いと伝えているので、代替案を提示する返答が自然。"},

  {tipe:"sokuji", judul:"Respons Cepat 3",
   dialog:[{speaker:"A", gender:"P", jp:"この資料、専門用語が多くて、正直理解しかねる部分があります。", id:"Dokumen ini banyak istilah teknis, terus terang ada bagian yang sulit saya pahami.", romaji:"Kono shiryou, senmon yougo ga ookute, shoujiki rikai shikaneru bubun ga arimasu."}],
   pertanyaan:"最も自然な返事はどれですか。",
   options:["どの部分がわかりにくいか、教えていただけますか。", "それはよく理解できましたね。", "専門用語は使っていません。", "資料はもう捨てました。"],
   correct:0,
   penjelasan:"相手が理解しづらいと言っているので、具体的にどこが分かりにくいか尋ねる返答が自然。"},

  {tipe:"sokuji", judul:"Respons Cepat 4",
   dialog:[{speaker:"A", gender:"L", jp:"今回の企画、部長のおかげで無事に承認していただけました。", id:"Berkat kepala bagian, proyek kali ini berhasil disetujui dengan lancar.", romaji:"Konkai no kikaku, buchou no okage de buji ni shounin shite itadakemashita."}],
   pertanyaan:"最も自然な返事はどれですか。",
   options:["いえいえ、あなたの努力の賜物ですよ。", "それは残念な結果でしたね。", "承認されなくて残念です。", "私はまったく関わっていません。"],
   correct:0,
   penjelasan:"感謝された時の謙遜した自然な返答として、相手の努力を称える表現が適切。"},

  {tipe:"sokuji", judul:"Respons Cepat 5",
   dialog:[{speaker:"A", gender:"P", jp:"この案、悪くはないんですが、コスト面でちょっと引っかかるところがあります。", id:"Usulan ini tidak buruk, tetapi ada hal yang mengganjal dari segi biaya.", romaji:"Kono an, warukunai n desu ga, kosuto men de chotto hikkakaru tokoro ga arimasu."}],
   pertanyaan:"最も自然な返事はどれですか。",
   options:["具体的にどの部分のコストが気になりますか。", "コストのことは気にしなくていいです。", "この案は完璧ですね。", "もう決定したので変更できません。"],
   correct:0,
   penjelasan:"相手がコスト面に懸念を示しているので、具体的に何が気になるか掘り下げる返答が自然。"}
];
