// ===================================================================
// Qategori Nihongo - Choukai (聴解 / Mendengarkan) JLPT N3
// Audio dibaca langsung oleh browser (Web Speech API, suara ja-JP), tanpa file suara.
// Tipe: kadai (課題理解 - tugas berikutnya), point (ポイント理解 - inti pembicaraan),
//       sokuji (即時応答 - respons cepat)
// ===================================================================
window.N3_CHOUKAI = [

  {tipe:"kadai", judul:"Di Kantor",
   dialog:[
     {speaker:"A", gender:"P", jp:"田中さん、明日の会議の資料はもうできましたか。", id:"Pak Tanaka, apakah materi rapat besok sudah selesai?", romaji:"Tanaka-san, ashita no kaigi no shiryou wa mou dekimashita ka."},
     {speaker:"B", gender:"L", jp:"はい、ほとんどできています。でも、グラフのデータをもう一度確認したいです。", id:"Ya, hampir selesai. Tapi saya ingin memeriksa sekali lagi data grafiknya.", romaji:"Hai, hotondo dekite imasu. Demo, gurafu no deeta o mou ichido kakunin shitai desu."},
     {speaker:"A", gender:"P", jp:"そうですか。じゃ、確認してから、印刷してコピーを10部お願いします。", id:"Begitu ya. Kalau begitu, setelah diperiksa, tolong cetak dan buat 10 salinan.", romaji:"Sou desu ka. Ja, kakunin shite kara, insatsu shite kopii o juubu onegai shimasu."},
     {speaker:"B", gender:"L", jp:"わかりました。今日中にやっておきます。", id:"Baik. Akan saya kerjakan hari ini juga.", romaji:"Wakarimashita. Kyoujuu ni yatte okimasu."}
   ],
   pertanyaan:"田中さんはこのあと、まず何をしますか。",
   options:["グラフのデータを確認する", "資料を10部コピーする", "会議の場所を予約する", "上司に報告する"],
   correct:0,
   penjelasan:"田中さんは「グラフのデータをもう一度確認したい」と言い、その後で印刷とコピーをすると流れが決まった。よって最初にするのはデータの確認。"},

  {tipe:"kadai", judul:"Di Rumah Sakit",
   dialog:[
     {speaker:"受付", gender:"P", jp:"すみません、初めてのご来院ですか。", id:"Permisi, apakah ini kunjungan pertama Anda ke sini?", romaji:"Sumimasen, hajimete no goraiin desu ka."},
     {speaker:"患者", gender:"L", jp:"はい、そうです。今日は熱と喉の痛みがあって来ました。", id:"Ya, benar. Hari ini saya datang karena demam dan sakit tenggorokan.", romaji:"Hai, sou desu. Kyou wa netsu to nodo no itami ga atte kimashita."},
     {speaker:"受付", gender:"P", jp:"わかりました。では、こちらの問診票に記入してから、待合室でお待ちください。", id:"Baik. Kalau begitu, silakan isi formulir pemeriksaan ini lalu tunggu di ruang tunggu.", romaji:"Wakarimashita. Dewa, kochira no monshinhyou ni kinyuu shite kara, machiaishitsu de omachi kudasai."},
     {speaker:"患者", gender:"L", jp:"はい、わかりました。", id:"Ya, baik.", romaji:"Hai, wakarimashita."}
   ],
   pertanyaan:"患者はこのあと、まず何をしますか。",
   options:["問診票に記入する", "薬をもらう", "熱を測る", "診察室に入る"],
   correct:0,
   penjelasan:"受付は「問診票に記入してから、待合室で待ってください」と言ったので、まず問診票への記入が先。"},

  {tipe:"kadai", judul:"Rencana Piknik",
   dialog:[
     {speaker:"A", gender:"L", jp:"今度の日曜日、天気がよければ公園でお花見をしませんか。", id:"Minggu depan, kalau cuacanya bagus, bagaimana kalau kita hanami di taman?", romaji:"Kondo no nichiyoubi, tenki ga yokereba kouen de ohanami o shimasen ka."},
     {speaker:"B", gender:"P", jp:"いいですね。でも、天気予報では雨が降るかもしれないと言っていましたよ。", id:"Boleh juga. Tapi ramalan cuaca bilang mungkin akan turun hujan, lho.", romaji:"Ii desu ne. Demo, tenki yohou dewa ame ga furu kamoshirenai to itte imashita yo."},
     {speaker:"A", gender:"L", jp:"そうなんですか。じゃ、土曜日の夜にもう一度天気予報を確認してから、決めましょう。", id:"Oh begitu. Kalau begitu, setelah memeriksa ramalan cuaca sekali lagi pada Sabtu malam, kita putuskan.", romaji:"Sou nan desu ka. Ja, doyoubi no yoru ni mou ichido tenki yohou o kakunin shite kara, kimemashou."},
     {speaker:"B", gender:"P", jp:"はい、そうしましょう。", id:"Ya, mari kita lakukan begitu.", romaji:"Hai, sou shimashou."}
   ],
   pertanyaan:"二人はこのあと、まず何をしますか。",
   options:["土曜日の夜に天気予報を確認する", "すぐに公園を予約する", "お弁当を作る", "お花見を中止する"],
   correct:0,
   penjelasan:"「土曜日の夜にもう一度天気予報を確認してから、決めましょう」と言っているので、まず天気予報の確認が先。"},

  {tipe:"point", judul:"Alasan Terlambat",
   dialog:[
     {speaker:"A", gender:"P", jp:"山田さん、今日はどうして遅刻したんですか。", id:"Pak Yamada, kenapa hari ini Anda terlambat?", romaji:"Yamada-san, kyou wa doushite chikoku shita n desu ka."},
     {speaker:"B", gender:"L", jp:"実は、電車が事故で止まってしまって、1時間も待たされたんです。", id:"Sebenarnya kereta berhenti karena kecelakaan, dan saya harus menunggu sampai satu jam.", romaji:"Jitsu wa, densha ga jiko de tomatte shimatte, ichijikan mo mataserareta n desu."},
     {speaker:"A", gender:"P", jp:"それは大変でしたね。寝坊したのかと思いました。", id:"Wah, itu berat ya. Saya kira Anda kesiangan.", romaji:"Sore wa taihen deshita ne. Nebou shita no ka to omoimashita."},
     {speaker:"B", gender:"L", jp:"いいえ、今日はいつもより早く家を出たんですけど…。", id:"Tidak, hari ini saya berangkat dari rumah lebih awal dari biasanya, tapi...", romaji:"Iie, kyou wa itsumo yori hayaku ie o deta n desu kedo…."}
   ],
   pertanyaan:"山田さんが遅刻した本当の理由は何ですか。",
   options:["電車が事故で止まったから", "寝坊したから", "家を出るのが遅かったから", "道に迷ったから"],
   correct:0,
   penjelasan:"山田さんは「電車が事故で止まってしまって」と説明しており、寝坊ではないと否定している。"},

  {tipe:"point", judul:"Alasan Pindah Kerja",
   dialog:[
     {speaker:"A", gender:"L", jp:"鈴木さん、転職を考えているそうですね。給料に不満があるんですか。", id:"Pak Suzuki, katanya Anda sedang mempertimbangkan pindah kerja. Apakah Anda tidak puas dengan gaji?", romaji:"Suzuki-san, tenshoku o kangaete iru sou desu ne. Kyuuryou ni fuman ga aru n desu ka."},
     {speaker:"B", gender:"P", jp:"いえ、給料は今のままでも十分です。それより、残業が多すぎて、家族との時間が全然取れないんです。", id:"Tidak, gaji seperti sekarang pun sudah cukup. Masalahnya, lembur terlalu banyak sehingga saya sama sekali tidak punya waktu dengan keluarga.", romaji:"Ie, kyuuryou wa ima no mama demo juubun desu. Sore yori, zangyou ga oosugite, kazoku to no jikan ga zenzen torenai n desu."},
     {speaker:"A", gender:"L", jp:"なるほど、それは辛いですね。", id:"Begitu ya, itu pasti berat.", romaji:"Naruhodo, sore wa tsurai desu ne."}
   ],
   pertanyaan:"鈴木さんが転職を考えている一番の理由は何ですか。",
   options:["残業が多くて家族との時間が取れないから", "給料が安いから", "上司と合わないから", "会社が遠いから"],
   correct:0,
   penjelasan:"給料には満足しており、「残業が多すぎて、家族との時間が取れない」ことが本当の理由。"},

  {tipe:"point", judul:"Pendapat tentang Kerja Jarak Jauh",
   dialog:[
     {speaker:"A", gender:"L", jp:"在宅勤務についてどう思いますか。", id:"Bagaimana pendapat Anda tentang bekerja dari rumah?", romaji:"Zaitaku kinmu ni tsuite dou omoimasu ka."},
     {speaker:"B", gender:"P", jp:"通勤時間がなくなるのはいいんですが、同僚とのコミュニケーションが減るのが心配です。", id:"Tidak perlu waktu perjalanan itu bagus, tapi saya khawatir komunikasi dengan rekan kerja berkurang.", romaji:"Tsuukin jikan ga naku naru no wa ii n desu ga, douryou to no komyunikeeshon ga heru no ga shinpai desu."},
     {speaker:"A", gender:"L", jp:"確かにそうですね。私も最初はそう思っていました。", id:"Memang benar. Saya juga awalnya berpikir begitu.", romaji:"Tashika ni sou desu ne. Watashi mo saisho wa sou omotte imashita."}
   ],
   pertanyaan:"Bさんが在宅勤務について心配していることは何ですか。",
   options:["同僚とのコミュニケーションが減ること", "通勤時間が長くなること", "給料が下がること", "仕事が増えること"],
   correct:0,
   penjelasan:"Bさんは通勤時間がなくなるのは良いと言いつつ、「同僚とのコミュニケーションが減るのが心配」と述べている。"},

  {tipe:"point", judul:"Evaluasi Produk Baru",
   dialog:[
     {speaker:"A", gender:"P", jp:"新しいスマホ、使ってみてどうですか。", id:"Bagaimana ponsel barunya setelah dicoba?", romaji:"Atarashii sumaho, tsukatte mite dou desu ka."},
     {speaker:"B", gender:"L", jp:"カメラの性能はすごくいいんですけど、バッテリーの持ちがあまり良くないんです。", id:"Performa kameranya sangat bagus, tapi daya tahan baterainya kurang baik.", romaji:"Kamera no seinou wa sugoku ii n desu kedo, batterii no mochi ga amari yokunai n desu."},
     {speaker:"A", gender:"P", jp:"へえ、そうなんですか。", id:"Oh, begitu ya.", romaji:"Hee, sou nan desu ka."}
   ],
   pertanyaan:"Bさんは新しいスマホの何が不満ですか。",
   options:["バッテリーの持ち", "カメラの性能", "画面の大きさ", "値段"],
   correct:0,
   penjelasan:"カメラは良いと評価しつつ、「バッテリーの持ちがあまり良くない」と不満を述べている。"},

  {tipe:"sokuji", judul:"Respons Cepat 1",
   dialog:[{speaker:"A", gender:"P", jp:"すみません、この資料、コピーしておいてもらえますか。", id:"Permisi, bisakah Anda tolong memfotokopi dokumen ini terlebih dahulu?", romaji:"Sumimasen, kono shiryou, kopii shite oite moraemasu ka."}],
   pertanyaan:"最も自然な返事はどれですか。",
   options:["はい、かしこまりました。何部必要ですか。", "はい、コピーしないでください。", "いいえ、資料はありません。", "コピーはもう届きました。"],
   correct:0,
   penjelasan:"依頼(コピーしてほしい)への自然な返答は、承諾＋確認の質問。「かしこまりました」は丁寧な承諾表現。"},

  {tipe:"sokuji", judul:"Respons Cepat 2",
   dialog:[{speaker:"A", gender:"L", jp:"今日、一緒に晩ご飯でもどうですか。", id:"Hari ini, bagaimana kalau kita makan malam bersama?", romaji:"Kyou, issho ni bangohan demo dou desu ka."}],
   pertanyaan:"最も自然な返事はどれですか。",
   options:["いいですね。何時ごろにしましょうか。", "はい、朝ごはんを食べました。", "いいえ、まだ来ていません。", "それはもったいないですね。"],
   correct:0,
   penjelasan:"誘い(食事の提案)への自然な返答は承諾＋詳細の相談。「何時ごろにしましょうか」が自然。"},

  {tipe:"sokuji", judul:"Respons Cepat 3",
   dialog:[{speaker:"A", gender:"P", jp:"この書類、明日までに提出しなければならないんですが、まだ半分しかできていません。", id:"Dokumen ini harus dikumpulkan paling lambat besok, tetapi baru separuh yang selesai.", romaji:"Kono shorui, ashita made ni teishutsu shinakereba naranai n desu ga, mada hanbun shika dekite imasen."}],
   pertanyaan:"最も自然な返事はどれですか。",
   options:["よかったら、私も手伝いましょうか。", "それはおめでとうございます。", "もう提出しなくてもいいですよ。", "私には関係ありません。"],
   correct:0,
   penjelasan:"相手が困っている状況(締め切りに間に合わない)への自然な返答は、助けを申し出ること。"},

  {tipe:"sokuji", judul:"Respons Cepat 4",
   dialog:[{speaker:"A", gender:"L", jp:"部長のおかげで、今回のプロジェクトが無事に終わりました。", id:"Berkat Kepala Departemen, proyek kali ini selesai dengan lancar.", romaji:"Buchou no okage de, konkai no purojekuto ga buji ni owarimashita."}],
   pertanyaan:"最も自然な返事はどれですか。",
   options:["いえいえ、皆さんの努力の結果ですよ。", "それは残念でしたね。", "私のせいで失敗しました。", "全然わかりません。"],
   correct:0,
   penjelasan:"感謝された時の謙遜した自然な返答として、「皆さんの努力の結果」と成果をチームに返す表現が適切。"},

  {tipe:"sokuji", judul:"Respons Cepat 5",
   dialog:[{speaker:"A", gender:"P", jp:"明日の会議、10時からでしたよね。", id:"Rapat besok mulai pukul 10, kan?", romaji:"Ashita no kaigi, juuji kara deshita yo ne."}],
   pertanyaan:"最も自然な返事はどれですか。",
   options:["いえ、9時半に変更になりましたよ。", "はい、それは高いですね。", "それは大変申し訳ございません。", "会議室はきれいですね。"],
   correct:0,
   penjelasan:"確認の質問に対しては、事実を答える(訂正情報を伝える)のが自然な返答。"}
];
