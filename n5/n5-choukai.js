// ===================================================================
// Qategori Nihongo - Choukai (聴解 / Mendengarkan) JLPT N5
// Audio dibaca langsung oleh browser (Web Speech API, suara ja-JP).
// Tipe: kadai (課題理解), point (ポイント理解), sokuji (即時応答)
// Tiap baris dialog punya gender ("L"=laki-laki, "P"=perempuan) untuk pemilihan suara TTS.
// ===================================================================
window.N5_CHOUKAI = [

  {tipe:"kadai", judul:"Perkenalan Diri",
   dialog:[
     {speaker:"A", gender:"L", jp:"はじめまして。田中です。どうぞよろしく。", romaji:"Hajimemashite. Tanaka desu. Douzo yoroshiku."},
     {speaker:"B", gender:"P", jp:"はじめまして。リナです。よろしくお願いします。", romaji:"Hajimemashite. Rina desu. Yoroshiku onegaishimasu."},
     {speaker:"A", gender:"L", jp:"リナさんは学生ですか。", romaji:"Rina-san wa gakusei desu ka."},
     {speaker:"B", gender:"P", jp:"はい、学生です。大学で日本語を勉強しています。", romaji:"Hai, gakusei desu. Daigaku de nihongo o benkyou shite imasu."}
   ],
   pertanyaan:"リナさんは何をしていますか。",
   options:["大学で日本語を勉強しています", "会社で働いています", "病院で働いています", "学校で教えています"],
   correct:0,
   penjelasan:"「大学で日本語を勉強しています」と言っているので、リナさんは大学で日本語を勉強している。"},

  {tipe:"kadai", judul:"Belanja di Minimarket",
   dialog:[
     {speaker:"店員", gender:"P", jp:"いらっしゃいませ。", romaji:"Irasshaimase."},
     {speaker:"客", gender:"L", jp:"すみません、水はどこですか。", romaji:"Sumimasen, mizu wa doko desu ka."},
     {speaker:"店員", gender:"P", jp:"水はあそこです。パンの隣にあります。", romaji:"Mizu wa asoko desu. Pan no tonari ni arimasu."},
     {speaker:"客", gender:"L", jp:"ありがとうございます。", romaji:"Arigatou gozaimasu."}
   ],
   pertanyaan:"水はどこにありますか。",
   options:["パンの隣", "レジの前", "店の外", "野菜の隣"],
   correct:0,
   penjelasan:"店員が「パンの隣にあります」と教えたので、水はパンの隣にある。"},

  {tipe:"kadai", judul:"Bertanya Arah",
   dialog:[
     {speaker:"A", gender:"P", jp:"すみません、駅はどこですか。", romaji:"Sumimasen, eki wa doko desu ka."},
     {speaker:"B", gender:"L", jp:"この道をまっすぐ行って、右に曲がってください。", romaji:"Kono michi o massugu itte, migi ni magatte kudasai."},
     {speaker:"A", gender:"P", jp:"まっすぐ行って、右ですね。ありがとうございます。", romaji:"Massugu itte, migi desu ne. Arigatou gozaimasu."}
   ],
   pertanyaan:"駅へ行くには、どうすればいいですか。",
   options:["まっすぐ行って、右に曲がる", "まっすぐ行って、左に曲がる", "右に曲がって、まっすぐ行く", "後ろに戻る"],
   correct:0,
   penjelasan:"「まっすぐ行って、右に曲がってください」と教えているので、まっすぐ行ってから右に曲がる。"},

  {tipe:"point", judul:"Suka dan Tidak Suka",
   dialog:[
     {speaker:"A", gender:"L", jp:"リナさんは何のスポーツが好きですか。", romaji:"Rina-san wa nan no supootsu ga suki desu ka."},
     {speaker:"B", gender:"P", jp:"テニスが好きです。でも、水泳はあまり好きじゃありません。", romaji:"Tenisu ga suki desu. Demo, suiei wa amari suki ja arimasen."},
     {speaker:"A", gender:"L", jp:"そうですか。私もテニスが好きです。", romaji:"Sou desu ka. Watashi mo tenisu ga suki desu."}
   ],
   pertanyaan:"リナさんが好きなスポーツは何ですか。",
   options:["テニス", "水泳", "サッカー", "バスケットボール"],
   correct:0,
   penjelasan:"「テニスが好きです」と言っているので、好きなスポーツはテニス。"},

  {tipe:"point", judul:"Rencana Akhir Pekan",
   dialog:[
     {speaker:"A", gender:"P", jp:"週末は何をしますか。", romaji:"Shuumatsu wa nani o shimasu ka."},
     {speaker:"B", gender:"L", jp:"友達と映画を見ます。それから、晩ご飯を食べます。", romaji:"Tomodachi to eiga o mimasu. Sore kara, bangohan o tabemasu."},
     {speaker:"A", gender:"P", jp:"楽しそうですね。", romaji:"Tanoshisou desu ne."}
   ],
   pertanyaan:"男の人は週末、最初に何をしますか。",
   options:["映画を見る", "晩ご飯を食べる", "勉強する", "買い物をする"],
   correct:0,
   penjelasan:"「友達と映画を見ます。それから、晩ご飯を食べます」の順番なので、最初は映画を見ること。"},

  {tipe:"point", judul:"Cuaca Hari Ini",
   dialog:[
     {speaker:"A", gender:"L", jp:"今日は寒いですね。", romaji:"Kyou wa samui desu ne."},
     {speaker:"B", gender:"P", jp:"そうですね。でも、明日はもっと寒くなるそうです。", romaji:"Sou desu ne. Demo, ashita wa motto samuku naru sou desu."},
     {speaker:"A", gender:"L", jp:"じゃ、コートを着たほうがいいですね。", romaji:"Ja, kooto o kita hou ga ii desu ne."}
   ],
   pertanyaan:"明日の天気はどうなりますか。",
   options:["今日よりもっと寒くなる", "今日より暖かくなる", "雨が降る", "雪が降る"],
   correct:0,
   penjelasan:"「明日はもっと寒くなるそうです」と言っているので、明日はもっと寒くなる。"},

  {tipe:"point", judul:"Jam Buka Toko",
   dialog:[
     {speaker:"A", gender:"P", jp:"このお店は何時から何時までですか。", romaji:"Kono omise wa nanji kara nanji made desu ka."},
     {speaker:"B", gender:"L", jp:"9時から8時までです。日曜日は休みです。", romaji:"Kuji kara hachiji made desu. Nichiyoubi wa yasumi desu."},
     {speaker:"A", gender:"P", jp:"わかりました。ありがとうございます。", romaji:"Wakarimashita. Arigatou gozaimasu."}
   ],
   pertanyaan:"この店は何曜日が休みですか。",
   options:["日曜日", "土曜日", "月曜日", "毎日"],
   correct:0,
   penjelasan:"「日曜日は休みです」と言っているので、休みの日は日曜日。"},

  {tipe:"sokuji", judul:"Respons Cepat 1",
   dialog:[{speaker:"A", gender:"P", jp:"お誕生日はいつですか。", romaji:"Otanjoubi wa itsu desu ka."}],
   pertanyaan:"最も自然な返事はどれですか。",
   options:["3月10日です。", "東京です。", "学生です。", "好きです。"],
   correct:0,
   penjelasan:"誕生日(日付)を聞かれているので、日付で答えるのが自然。"},

  {tipe:"sokuji", judul:"Respons Cepat 2",
   dialog:[{speaker:"A", gender:"L", jp:"すみません、今何時ですか。", romaji:"Sumimasen, ima nanji desu ka."}],
   pertanyaan:"最も自然な返事はどれですか。",
   options:["3時半です。", "3月です。", "3人です。", "3回です。"],
   correct:0,
   penjelasan:"時間を聞かれているので、「3時半です」のように時刻で答えるのが自然。"},

  {tipe:"sokuji", judul:"Respons Cepat 3",
   dialog:[{speaker:"A", gender:"P", jp:"一緒にお昼ご飯を食べませんか。", romaji:"Issho ni ohirugohan o tabemasen ka."}],
   pertanyaan:"最も自然な返事はどれですか。",
   options:["いいですね。何を食べましょうか。", "いいえ、もう朝です。", "それはおめでとうございます。", "昼ご飯は美味しくないです。"],
   correct:0,
   penjelasan:"誘いへの自然な返答は承諾＋提案の質問。「何を食べましょうか」が自然。"},

  {tipe:"sokuji", judul:"Respons Cepat 4",
   dialog:[{speaker:"A", gender:"L", jp:"この問題、分かりますか。", romaji:"Kono mondai, wakarimasu ka."}],
   pertanyaan:"最も自然な返事はどれですか。",
   options:["いいえ、分かりません。教えてください。", "はい、とても美味しいです。", "いいえ、高くないです。", "はい、とても元気です。"],
   correct:0,
   penjelasan:"分かるかどうか聞かれているので、分かる/分からないで答えるのが自然。"},

  {tipe:"sokuji", judul:"Respons Cepat 5",
   dialog:[{speaker:"A", gender:"P", jp:"すみません、この席、空いていますか。", romaji:"Sumimasen, kono seki, aite imasu ka."}],
   pertanyaan:"最も自然な返事はどれですか。",
   options:["はい、どうぞ。", "いいえ、重いです。", "はい、おいしいです。", "いいえ、遠いです。"],
   correct:0,
   penjelasan:"席が空いているか聞かれているので、「はい、どうぞ」と答えるのが自然。"}
];
