// ===================================================================
// Qategori Nihongo - Choukai (聴解 / Mendengarkan) JLPT N4
// Audio dibaca langsung oleh browser (Web Speech API, suara ja-JP).
// Tipe: kadai (課題理解), point (ポイント理解), sokuji (即時応答)
// Tiap baris dialog punya gender ("L"=laki-laki, "P"=perempuan) untuk pemilihan suara TTS.
// ===================================================================
window.N4_CHOUKAI = [

  {tipe:"kadai", judul:"Belanja di Toko",
   dialog:[
     {speaker:"店員", gender:"P", jp:"いらっしゃいませ。何をお探しですか。", romaji:"Irasshaimase. Nani o osagashi desu ka."},
     {speaker:"客", gender:"L", jp:"すみません、傘はどこにありますか。", romaji:"Sumimasen, kasa wa doko ni arimasu ka."},
     {speaker:"店員", gender:"P", jp:"傘は2階にございます。エレベーターの隣です。", romaji:"Kasa wa nikai ni gozaimasu. Erebeetaa no tonari desu."},
     {speaker:"客", gender:"L", jp:"わかりました。ありがとうございます。", romaji:"Wakarimashita. Arigatou gozaimasu."}
   ],
   pertanyaan:"男の人はこのあと、まずどこへ行きますか。",
   options:["2階", "1階のレジ", "エレベーターの前", "傘売り場の隣の店"],
   correct:0,
   penjelasan:"店員が「傘は2階にございます」と教えたので、男の人はまず2階へ行く。"},

  {tipe:"kadai", judul:"Membuat Janji dengan Teman",
   dialog:[
     {speaker:"A", gender:"P", jp:"今度の日曜日、一緒に映画を見に行きませんか。", romaji:"Kondo no nichiyoubi, issho ni eiga o mi ni ikimasen ka."},
     {speaker:"B", gender:"L", jp:"いいですね。何時に会いましょうか。", romaji:"Ii desu ne. Nanji ni aimashou ka."},
     {speaker:"A", gender:"P", jp:"映画は2時からなので、1時半に駅で会いましょう。", romaji:"Eiga wa niji kara na node, ichiji han ni eki de aimashou."},
     {speaker:"B", gender:"L", jp:"わかりました。1時半に駅ですね。", romaji:"Wakarimashita. Ichiji han ni eki desu ne."}
   ],
   pertanyaan:"二人は何時にどこで会いますか。",
   options:["1時半に駅", "2時に駅", "1時半に映画館", "2時に映画館"],
   correct:0,
   penjelasan:"「1時半に駅で会いましょう」と言っているので、1時半に駅で会う。"},

  {tipe:"kadai", judul:"Izin Sakit ke Kantor",
   dialog:[
     {speaker:"部下", gender:"L", jp:"すみません、熱があるので、今日休ませてください。", romaji:"Sumimasen, netsu ga aru node, kyou yasumasete kudasai."},
     {speaker:"上司", gender:"P", jp:"わかりました。お大事に。病院には行きましたか。", romaji:"Wakarimashita. Odaiji ni. Byouin ni wa ikimashita ka."},
     {speaker:"部下", gender:"L", jp:"いいえ、まだです。これから行ってきます。", romaji:"Iie, mada desu. Korekara itte kimasu."},
     {speaker:"上司", gender:"P", jp:"そうですか。じゃ、お大事にしてください。", romaji:"Sou desu ka. Ja, odaiji ni shite kudasai."}
   ],
   pertanyaan:"男の人はこのあと、まず何をしますか。",
   options:["病院に行く", "会社に行く", "薬を飲む", "上司に電話する"],
   correct:0,
   penjelasan:"「これから病院に行ってきます」と言っているので、まず病院へ行く。"},

  {tipe:"point", judul:"Alasan Terlambat ke Sekolah",
   dialog:[
     {speaker:"先生", gender:"L", jp:"田中さん、今日はどうして遅れたんですか。", romaji:"Tanaka-san, kyou wa doushite okureta n desu ka."},
     {speaker:"学生", gender:"P", jp:"すみません、バスがなかなか来なくて。事故があったそうです。", romaji:"Sumimasen, basu ga nakanaka konakute. Jiko ga atta sou desu."},
     {speaker:"先生", gender:"L", jp:"そうですか。それは大変でしたね。", romaji:"Sou desu ka. Sore wa taihen deshita ne."}
   ],
   pertanyaan:"学生が遅刻した理由は何ですか。",
   options:["バスがなかなか来なかったから", "寝坊したから", "電車を間違えたから", "道がわからなかったから"],
   correct:0,
   penjelasan:"「バスがなかなか来なくて」と言っているので、バスが遅れたのが理由。"},

  {tipe:"point", judul:"Memesan Makanan",
   dialog:[
     {speaker:"店員", gender:"P", jp:"ご注文はお決まりですか。", romaji:"Gochuumon wa okimari desu ka."},
     {speaker:"客", gender:"L", jp:"ラーメンを一つお願いします。あ、でも辛い物が苦手なので、辛くしないでください。", romaji:"Raamen o hitotsu onegai shimasu. A, demo karai mono ga nigate na node, karaku shinaide kudasai."},
     {speaker:"店員", gender:"P", jp:"かしこまりました。辛くないラーメンですね。", romaji:"Kashikomarimashita. Karakunai raamen desu ne."}
   ],
   pertanyaan:"男の人はどんなラーメンを注文しましたか。",
   options:["辛くないラーメン", "とても辛いラーメン", "少し辛いラーメン", "冷たいラーメン"],
   correct:0,
   penjelasan:"「辛くしないでください」と頼んでいるので、辛くないラーメンを注文した。"},

  {tipe:"point", judul:"Pendapat tentang Cuaca",
   dialog:[
     {speaker:"A", gender:"L", jp:"今日は暑いですね。", romaji:"Kyou wa atsui desu ne."},
     {speaker:"B", gender:"P", jp:"そうですね。でも、昨日よりはましだと思います。昨日は本当に暑かったです。", romaji:"Sou desu ne. Demo, kinou yori wa mashi da to omoimasu. Kinou wa hontou ni atsukatta desu."},
     {speaker:"A", gender:"L", jp:"確かに、昨日は特に暑かったですね。", romaji:"Tashika ni, kinou wa toku ni atsukatta desu ne."}
   ],
   pertanyaan:"女の人は今日の天気について、どう思っていますか。",
   options:["昨日より少しましだ", "昨日より暑い", "去年より暑い", "明日はもっと暑くなる"],
   correct:0,
   penjelasan:"「昨日よりはましだと思います」と言っているので、今日のほうがまだましだと感じている。"},

  {tipe:"point", judul:"Masalah dengan Barang yang Dibeli",
   dialog:[
     {speaker:"客", gender:"P", jp:"すみません、昨日買ったこの時計、もう動かないんです。", romaji:"Sumimasen, kinou katta kono tokei, mou ugokanai n desu."},
     {speaker:"店員", gender:"L", jp:"それは申し訳ございません。レシートはお持ちですか。", romaji:"Sore wa moushiwake gozaimasen. Reshiito wa omochi desu ka."},
     {speaker:"客", gender:"P", jp:"はい、持っています。交換してもらえますか。", romaji:"Hai, motte imasu. Koukan shite moraemasu ka."},
     {speaker:"店員", gender:"L", jp:"かしこまりました。新しいものと交換いたします。", romaji:"Kashikomarimashita. Atarashii mono to koukan itashimasu."}
   ],
   pertanyaan:"女の人が困っていることは何ですか。",
   options:["買った時計が動かないこと", "レシートをなくしたこと", "時計が高かったこと", "店員の態度が悪いこと"],
   correct:0,
   penjelasan:"「この時計、もう動かないんです」と言っているので、時計が壊れて動かないことが問題。"},

  {tipe:"sokuji", judul:"Respons Cepat 1",
   dialog:[{speaker:"A", gender:"P", jp:"すみません、駅までどのくらいかかりますか。", romaji:"Sumimasen, eki made dono kurai kakarimasu ka."}],
   pertanyaan:"最も自然な返事はどれですか。",
   options:["歩いて10分ぐらいです。", "はい、駅です。", "いいえ、遠くないです。", "駅は大きいです。"],
   correct:0,
   penjelasan:"時間を聞かれているので、「歩いて10分ぐらいです」という具体的な時間で答えるのが自然。"},

  {tipe:"sokuji", judul:"Respons Cepat 2",
   dialog:[{speaker:"A", gender:"L", jp:"今晩、一緒に晩ご飯を食べませんか。", romaji:"Konban, issho ni bangohan o tabemasen ka."}],
   pertanyaan:"最も自然な返事はどれですか。",
   options:["いいですね。何を食べましょうか。", "はい、もう食べました。", "いいえ、まだ晩ご飯です。", "それは美味しくないです。"],
   correct:0,
   penjelasan:"誘いへの自然な返答は承諾＋提案の質問。「何を食べましょうか」が自然。"},

  {tipe:"sokuji", judul:"Respons Cepat 3",
   dialog:[{speaker:"A", gender:"P", jp:"あ、傘を持ってくるのを忘れました。", romaji:"A, kasa o motte kuru no o wasuremashita."}],
   pertanyaan:"最も自然な返事はどれですか。",
   options:["私のを貸しましょうか。", "それはおめでとうございます。", "傘はとても便利ですね。", "私も傘を忘れませんでした。"],
   correct:0,
   penjelasan:"傘を忘れて困っている相手への自然な返答は、貸してあげる申し出。"},

  {tipe:"sokuji", judul:"Respons Cepat 4",
   dialog:[{speaker:"A", gender:"L", jp:"日本語のテスト、思ったより難しかったですね。", romaji:"Nihongo no tesuto, omotta yori muzukashikatta desu ne."}],
   pertanyaan:"最も自然な返事はどれですか。",
   options:["本当ですね。私も全部わかりませんでした。", "それはよかったですね。", "テストは簡単ですね。", "私はテストを受けていません。"],
   correct:0,
   penjelasan:"相手が「難しかった」と言っているので、共感する返答が自然。"},

  {tipe:"sokuji", judul:"Respons Cepat 5",
   dialog:[{speaker:"A", gender:"P", jp:"すみません、この席、座ってもいいですか。", romaji:"Sumimasen, kono seki, suwatte mo ii desu ka."}],
   pertanyaan:"最も自然な返事はどれですか。",
   options:["はい、どうぞ。", "いいえ、座りません。", "席はあそこです。", "私も座りたいです。"],
   correct:0,
   penjelasan:"座ってもいいか許可を求められているので、「はい、どうぞ」と許可する返答が自然。"}
];
