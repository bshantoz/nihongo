// ===================================================================
// Qategori Nihongo - Kuis Bunpou (文法クイズ) JLPT N4
// Kategori: kanji_yomi, hyouki, bunmyaku, bunpou, kumitate
// Skema tiap soal: {mondai, options:[4], correct:idx, penjelasan}
// ===================================================================
window.N4_QUIZ = {

  // ---------------- 漢字読み (Baca Kanji) ----------------
  kanji_yomi: [
    {mondai:"毎朝六時に＿起きます＿。", options:["おきます","あきます","おこります","うごきます"], correct:0, penjelasan:"起きます dibaca 'okimasu' artinya bangun."},
    {mondai:"財布を＿忘れました＿。", options:["わすれました","おくれました","こわれました","つかれました"], correct:0, penjelasan:"忘れました dibaca 'wasuremashita' artinya lupa."},
    {mondai:"この道は＿危険＿です。", options:["きけん","きげん","きんけん","きけい"], correct:0, penjelasan:"危険 dibaca 'kiken' artinya berbahaya."},
    {mondai:"娘は＿元気＿です。", options:["げんき","げんい","けんき","げんぎ"], correct:0, penjelasan:"元気 dibaca 'genki' artinya sehat/bersemangat."},
    {mondai:"彼女はとても＿親切＿です。", options:["しんせつ","しんぜつ","しんせち","しんせい"], correct:0, penjelasan:"親切 dibaca 'shinsetsu' artinya baik hati."},
    {mondai:"この問題は＿複雑＿です。", options:["ふくざつ","ふくさつ","ふっさつ","ふくたつ"], correct:0, penjelasan:"複雑 dibaca 'fukuzatsu' artinya rumit."},
    {mondai:"来月＿引っ越し＿します。", options:["ひっこし","いんこし","ひきこし","いんごし"], correct:0, penjelasan:"引っ越し dibaca 'hikkoshi' artinya pindah rumah."},
    {mondai:"母の＿健康＿が心配です。", options:["けんこう","けんこ","げんこう","けんごう"], correct:0, penjelasan:"健康 dibaca 'kenkou' artinya kesehatan."},
    {mondai:"駅の＿近く＿に住んでいます。", options:["ちかく","きんく","ちんく","ちかき"], correct:0, penjelasan:"近く dibaca 'chikaku' artinya dekat/sekitar."},
    {mondai:"傘を＿忘れずに＿持って行きます。", options:["わすれずに","わすれないに","おぼれずに","おくれずに"], correct:0, penjelasan:"忘れずに dibaca 'wasurezu ni' artinya tanpa lupa."},
    {mondai:"祖父は＿80歳＿です。", options:["はちじっさい","はちじゅうさい","やそさい","はっさい"], correct:1, penjelasan:"80歳 dibaca 'hachijussai' (bisa juga hachijuu-sai), pilihan yang benar 'はちじゅうさい'."},
    {mondai:"この魚は＿新鮮＿です。", options:["しんせん","しんぜん","しんぜい","しんせい"], correct:0, penjelasan:"新鮮 dibaca 'shinsen' artinya segar."}
  ],

  // ---------------- 表記 (Pilih Kanji yang Tepat) ----------------
  hyouki: [
    {mondai:"あぶない道ですから、気をつけてください。", options:["危ない","危い","険ない","危所"], correct:0, penjelasan:"'abunai' (berbahaya) ditulis 危ない."},
    {mondai:"つごうがよければ、来てください。", options:["都合","通合","都号","通号"], correct:0, penjelasan:"'tsugou' (kesempatan/kecocokan waktu) ditulis 都合."},
    {mondai:"しんぱいしないでください。", options:["心配","心備","信配","心杯"], correct:0, penjelasan:"'shinpai' (khawatir) ditulis 心配."},
    {mondai:"このアプリはべんりです。", options:["便利","便理","勉利","便理"], correct:0, penjelasan:"'benri' (praktis) ditulis 便利."},
    {mondai:"けいけんがあります。", options:["経験","経検","経験","径験"], correct:0, penjelasan:"'keiken' (pengalaman) ditulis 経験."},
    {mondai:"よていを確認します。", options:["予定","預定","余定","予訂"], correct:0, penjelasan:"'yotei' (jadwal) ditulis 予定."},
    {mondai:"やくそくを忘れないでください。", options:["約束","訳束","約速","約則"], correct:0, penjelasan:"'yakusoku' (janji) ditulis 約束."},
    {mondai:"しゅみは読書です。", options:["趣味","趣未","趣身","取味"], correct:0, penjelasan:"'shumi' (hobi) ditulis 趣味."},
    {mondai:"りょうしんは田舎に住んでいます。", options:["両親","両新","両視","良親"], correct:0, penjelasan:"'ryoushin' (orang tua) ditulis 両親."},
    {mondai:"さいきん忙しいです。", options:["最近","最今","再近","最緊"], correct:0, penjelasan:"'saikin' (akhir-akhir ini) ditulis 最近."},
    {mondai:"にゅういんすることになりました。", options:["入院","入員","入院","乳院"], correct:0, penjelasan:"'nyuuin' (masuk rumah sakit/rawat inap) ditulis 入院."},
    {mondai:"しょうらい医者になりたいです。", options:["将来","招来","将耒","相来"], correct:0, penjelasan:"'shourai' (masa depan) ditulis 将来."}
  ],

  // ---------------- 文脈規定 (Kata Sesuai Konteks) ----------------
  bunmyaku: [
    {mondai:"このケーキはとても＿＿＿です。", options:["甘い","苦しい","狭い","眠い"], correct:0, penjelasan:"Kue biasanya dideskripsikan 甘い (manis)."},
    {mondai:"今週はとても＿＿＿ので、休む時間がありません。", options:["忙しい","涼しい","珍しい","かゆい"], correct:0, penjelasan:"忙しい (sibuk) cocok dengan konteks tidak ada waktu istirahat."},
    {mondai:"財布を＿＿＿、困っています。", options:["なくして","わたして","かして","さがして"], correct:0, penjelasan:"なくして (kehilangan) cocok dengan 'sedang kesulitan'."},
    {mondai:"この道は暗くて＿＿＿ですから、気をつけてください。", options:["危ない","便利","簡単","元気"], correct:0, penjelasan:"危ない (berbahaya) cocok dengan konteks jalan gelap."},
    {mondai:"インターネットで＿＿＿から、教えます。", options:["調べます","忘れます","捨てます","困ります"], correct:0, penjelasan:"調べます (meneliti/mencari tahu) cocok dengan konteks lewat internet."},
    {mondai:"部長に＿＿＿、レポートを書き直しました。", options:["怒られて","笑われて","教えられて","呼ばれて"], correct:0, penjelasan:"怒られて (dimarahi) cocok dengan konteks harus menulis ulang laporan."},
    {mondai:"バスが＿＿＿来ないので、遅刻しそうです。", options:["なかなか","だんだん","やっと","ずっと"], correct:0, penjelasan:"なかなか (tidak kunjung) cocok untuk 'bus tidak datang-datang'."},
    {mondai:"この店の料理は＿＿＿新鮮です。", options:["とても","あまり","少しも","全然"], correct:0, penjelasan:"とても (sangat) cocok untuk pernyataan positif."},
    {mondai:"約束の時間に＿＿＿ように、早く出ます。", options:["間に合う","足りる","かかる","終わる"], correct:0, penjelasan:"間に合う (tepat waktu) cocok dengan konteks janji waktu."},
    {mondai:"引っ越しの準備で＿＿＿でした。", options:["大変","便利","簡単","元気"], correct:0, penjelasan:"大変 (berat/susah) cocok dengan konteks persiapan pindah rumah."},
    {mondai:"彼はいつも約束を守るので、＿＿＿な人です。", options:["信用できる","うるさい","かゆい","狭い"], correct:0, penjelasan:"信用できる (bisa dipercaya) cocok dengan orang yang selalu menepati janji."},
    {mondai:"この本は難しくて＿＿＿ので、まだ読み終わっていません。", options:["時間がかかる","味がいい","値段が高い","色が濃い"], correct:0, penjelasan:"時間がかかる (memakan waktu) cocok karena buku sulit sehingga belum selesai dibaca."},
    {mondai:"熱があるので、病院で＿＿＿もらいました。", options:["薬を出して","荷物を届けて","服を洗って","道を教えて"], correct:0, penjelasan:"薬を出して (diberi resep obat) cocok dengan konteks demam di rumah sakit."},
    {mondai:"日本に住んでいる＿＿＿、日本語が上手になりました。", options:["うちに","たびに","ように","とおりに"], correct:0, penjelasan:"うちに (selama masih) cocok dengan konteks perubahan seiring waktu tinggal."},
    {mondai:"彼女は毎日運動しているので、とても＿＿＿です。", options:["元気","不便","複雑","危険"], correct:0, penjelasan:"元気 (sehat/bugar) cocok dengan konteks rajin olahraga."}
  ],

  // ---------------- 文法 (Pola Tata Bahasa) ----------------
  bunpou: [
    {mondai:"旅行の前に、切符を買って＿＿＿。", options:["おきます","みます","しまいます","あげます"], correct:0, penjelasan:"〜ておく = melakukan sesuatu sebagai persiapan."},
    {mondai:"宿題をもう終わって＿＿＿。", options:["しまいました","おきました","いきました","もらいました"], correct:0, penjelasan:"〜てしまう = menyatakan sesuatu sudah selesai total."},
    {mondai:"この服を着て＿＿＿もいいですか。", options:["み","おき","しまい","あげ"], correct:0, penjelasan:"〜てみる = mencoba melakukan sesuatu."},
    {mondai:"だんだん暖かくなって＿＿＿ました。", options:["き","いき","おき","しまい"], correct:0, penjelasan:"〜てくる = perubahan yang menuju/mendekati sekarang."},
    {mondai:"漢字が少し読め＿＿＿。", options:["ます","させます","られます","てあります"], correct:0, penjelasan:"読めます adalah bentuk potensial dari 読む, artinya 'bisa membaca'."},
    {mondai:"ここでたばこを吸って＿＿＿いけません。", options:["は","も","でも","にも"], correct:0, penjelasan:"〜てはいけない = tidak boleh melakukan sesuatu (larangan)."},
    {mondai:"毎日薬を飲まなければ＿＿＿。", options:["なりません","いけます","かまいません","たまりません"], correct:0, penjelasan:"〜なければならない = harus melakukan sesuatu (kewajiban)."},
    {mondai:"来年国へ帰る＿＿＿です。", options:["つもり","はず","そう","よう"], correct:0, penjelasan:"〜つもりだ = menyatakan niat/rencana pribadi."},
    {mondai:"健康の＿＿＿毎朝走っています。", options:["ために","ように","とおりに","かわりに"], correct:0, penjelasan:"〜ために = menyatakan tujuan dari suatu tindakan."},
    {mondai:"彼はもう着いている＿＿＿です。", options:["はず","そう","よう","つもり"], correct:0, penjelasan:"〜はずだ = seharusnya begitu (keyakinan berdasarkan alasan logis)."},
    {mondai:"このケーキは美味し＿＿＿です。", options:["そう","よう","はず","つもり"], correct:0, penjelasan:"〜そうだ（様態）= kelihatannya begitu berdasarkan penampilan."},
    {mondai:"電車よりバスの＿＿＿安いです。", options:["ほうが","ほど","ように","とおりに"], correct:0, penjelasan:"〜より〜のほうが = pola perbandingan 'lebih ~ daripada ~'."},
    {mondai:"今日は昨日＿＿＿暑くないです。", options:["ほど","より","ように","だけ"], correct:0, penjelasan:"〜ほど〜ない = tidak mencapai tingkat pembanding."},
    {mondai:"雨が降っている＿＿＿、傘を持って行きます。", options:["ので","のに","ても","なら"], correct:0, penjelasan:"〜ので = menyatakan alasan dengan nuansa lebih sopan/objektif."},
    {mondai:"頑張った＿＿＿、失敗しました。", options:["のに","ので","から","ため"], correct:0, penjelasan:"〜のに = menyatakan hal yang bertentangan dengan harapan (kontras/kecewa)."}
  ],

  // ---------------- 文の組み立て (Susunan Kalimat) ----------------
  kumitate: [
    {mondai:"雨が ★＿＿＿ ましょう。（1.降ったら 2.家に 3.いる）", options:["降ったら・家に・いる","家に・降ったら・いる","いる・家に・降ったら","家に・いる・降ったら"], correct:0, penjelasan:"Susunan benar: 雨が降ったら、家にいましょう。(Kalau hujan turun, ayo tetap di rumah)."},
    {mondai:"彼は ★＿＿＿ です。（1.日本語が 2.とても 3.上手）", options:["日本語が・とても・上手","とても・日本語が・上手","上手・とても・日本語が","日本語が・上手・とても"], correct:0, penjelasan:"Susunan benar: 彼は日本語がとても上手です。(Bahasa Jepangnya sangat mahir)."},
    {mondai:"この漢字の ★＿＿＿ わかりません。（1.読み方が 2.全然）", options:["読み方が・全然","全然・読み方が","わかりません・読み方が","読み方が・わかりません"], correct:0, penjelasan:"Susunan benar: この漢字の読み方が全然わかりません。(Sama sekali tidak tahu cara baca kanji ini)."},
    {mondai:"薬を ★＿＿＿ なりました。（1.飲んだら 2.元気に）", options:["飲んだら・元気に","元気に・飲んだら","なりました・飲んだら","元気に・なりました"], correct:0, penjelasan:"Susunan benar: 薬を飲んだら、元気になりました。(Setelah minum obat, jadi sehat kembali)."},
    {mondai:"日本語が ★＿＿＿ なりました。（1.話せる 2.ように）", options:["話せる・ように","ように・話せる","なりました・話せる","話せる・なりました"], correct:0, penjelasan:"Susunan benar: 日本語が話せるようになりました。(Sekarang jadi bisa berbicara bahasa Jepang)."},
    {mondai:"薬を ★＿＿＿ 治りません。（1.飲んでも 2.なかなか）", options:["飲んでも・なかなか","なかなか・飲んでも","治りません・飲んでも","飲んでも・治りません"], correct:0, penjelasan:"Susunan benar: 薬を飲んでも、なかなか治りません。(Meskipun sudah minum obat, tetap tidak kunjung sembuh)。"},
    {mondai:"彼は ★＿＿＿ と思います。（1.忙しい 2.たぶん）", options:["たぶん・忙しい","忙しい・たぶん","と思います・たぶん","たぶん・と思います"], correct:0, penjelasan:"Susunan benar: 彼はたぶん忙しいと思います。(Saya pikir dia mungkin sibuk)."},
    {mondai:"母に ★＿＿＿ もらいました。（1.料理を 2.教えて）", options:["料理を・教えて","教えて・料理を","もらいました・料理を","料理を・もらいました"], correct:0, penjelasan:"Susunan benar: 母に料理を教えてもらいました。(Saya diajari memasak oleh ibu)."},
    {mondai:"駅に ★＿＿＿ 電話します。（1.着いたら 2.すぐ）", options:["着いたら・すぐ","すぐ・着いたら","電話します・着いたら","着いたら・電話します"], correct:0, penjelasan:"Susunan benar: 駅に着いたら、すぐ電話します。(Setelah sampai stasiun, langsung menelepon)."},
    {mondai:"この問題は ★＿＿＿ すぎます。（1.難し 2.ちょっと）", options:["ちょっと・難し","難し・ちょっと","すぎます・難し","難し・すぎます"], correct:0, penjelasan:"Susunan benar: この問題はちょっと難しすぎます。(Soal ini agak terlalu sulit)."}
  ]
};
