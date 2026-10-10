// Kotoba N3 tambahan (batch 14). Dimuat setelah n3-kotoba.js.
(function(){
var R=[
["Kehidupan Sehari-hari", "歯磨き", "はみがき", "hamigaki", "menyikat gigi", "寝る前に歯磨きをする。", "Neru mae ni hamigaki o suru.", "Saya menyikat gigi sebelum tidur."],
["Kehidupan Sehari-hari", "化粧", "けしょう", "keshou", "rias wajah", "毎朝化粧をする。", "Maiasa keshou o suru.", "Setiap pagi saya berdandan."],
["Kehidupan Sehari-hari", "着替える", "きがえる", "kigaeru", "berganti pakaian", "急いで着替えた。", "Isoide kigaeta.", "Saya cepat-cepat berganti baju."],
["Kehidupan Sehari-hari", "脱ぐ", "ぬぐ", "nugu", "melepas", "玄関で靴を脱ぐ。", "Genkan de kutsu o nugu.", "Melepas sepatu di pintu masuk."],
["Kehidupan Sehari-hari", "干す", "ほす", "hosu", "menjemur", "洗濯物を外に干す。", "Sentakumono o soto ni hosu.", "Menjemur cucian di luar."],
["Kehidupan Sehari-hari", "畳む", "たたむ", "tatamu", "melipat", "服をきれいに畳む。", "Fuku o kirei ni tatamu.", "Melipat baju dengan rapi."],
["Kehidupan Sehari-hari", "焼く", "やく", "yaku", "memanggang", "魚を焼く。", "Sakana o yaku.", "Memanggang ikan."],
["Kehidupan Sehari-hari", "茹でる", "ゆでる", "yuderu", "merebus (air)", "卵を茹でる。", "Tamago o yuderu.", "Merebus telur."],
["Kehidupan Sehari-hari", "炒める", "いためる", "itameru", "menumis", "肉と野菜を炒める。", "Niku to yasai o itameru.", "Menumis daging dan sayur."],
["Kehidupan Sehari-hari", "揚げる", "あげる", "ageru", "menggoreng (banyak minyak)", "天ぷらを揚げる。", "Tenpura o ageru.", "Menggoreng tempura."],
["Kehidupan Sehari-hari", "混ぜる", "まぜる", "mazeru", "mencampur", "卵と砂糖を混ぜる。", "Tamago to satou o mazeru.", "Mencampur telur dan gula."],
["Kehidupan Sehari-hari", "冷める", "さめる", "sameru", "menjadi dingin", "スープが冷めてしまった。", "Suupu ga samete shimatta.", "Supnya sudah dingin."],
["Kehidupan Sehari-hari", "腐る", "くさる", "kusaru", "busuk", "牛乳が腐っている。", "Gyuunyuu ga kusatte iru.", "Susunya basi."],
["Kehidupan Sehari-hari", "こぼす", "こぼす", "kobosu", "menumpahkan", "コーヒーをこぼした。", "Koohii o koboshita.", "Saya menumpahkan kopi."],
["Kehidupan Sehari-hari", "溢れる", "あふれる", "afureru", "meluap", "川の水があふれた。", "Kawa no mizu ga afureta.", "Air sungai meluap."],
["Kehidupan Sehari-hari", "押す", "おす", "osu", "mendorong, menekan", "ボタンを押してください。", "Botan o oshite kudasai.", "Tolong tekan tombolnya."],
["Kehidupan Sehari-hari", "回す", "まわす", "mawasu", "memutar", "ハンドルを回す。", "Handoru o mawasu.", "Memutar setir."],
["Kehidupan Sehari-hari", "転ぶ", "ころぶ", "korobu", "terjatuh", "道で転んで膝を打った。", "Michi de koronde hiza o utta.", "Saya jatuh di jalan dan lutut terbentur."],
["Kehidupan Sehari-hari", "滑る", "すべる", "suberu", "tergelincir", "雪で道が滑りやすい。", "Yuki de michi ga suberiyasui.", "Jalan licin karena salju."],
["Kehidupan Sehari-hari", "蹴る", "ける", "keru", "menendang", "ボールを蹴る。", "Booru o keru.", "Menendang bola."],
["Kehidupan Sehari-hari", "投げる", "なげる", "nageru", "melempar", "ボールを遠くへ投げる。", "Booru o tooku e nageru.", "Melempar bola jauh-jauh."],
["Perasaan & Abstrak", "悔しい", "くやしい", "kuyashii", "kesal, penasaran", "負けて悔しかった。", "Makete kuyashikatta.", "Saya kesal karena kalah."],
["Perasaan & Abstrak", "寂しい", "さびしい", "sabishii", "kesepian", "一人で寂しい。", "Hitori de sabishii.", "Saya kesepian sendirian."],
["Perasaan & Abstrak", "迷う", "まよう", "mayou", "bimbang, tersesat", "どれを買うか迷っている。", "Dore o kau ka mayotte iru.", "Saya bimbang mau beli yang mana."],
["Perasaan & Abstrak", "悩む", "なやむ", "nayamu", "merisaukan", "進路について悩んでいる。", "Shinro ni tsuite nayande iru.", "Saya risau soal jalan hidup."],
["Perasaan & Abstrak", "諦める", "あきらめる", "akirameru", "menyerah", "最後まで諦めない。", "Saigo made akiramenai.", "Saya tak menyerah sampai akhir."],
["Perasaan & Abstrak", "慰める", "なぐさめる", "nagusameru", "menghibur", "泣いている友達を慰めた。", "Naite iru tomodachi o nagusameta.", "Saya menghibur teman yang menangis."],
["Perasaan & Abstrak", "褒める", "ほめる", "homeru", "memuji", "先生に褒められて嬉しい。", "Sensei ni homerarete ureshii.", "Saya senang dipuji guru."],
["Perasaan & Abstrak", "叱る", "しかる", "shikaru", "memarahi", "母に叱られた。", "Haha ni shikarareta.", "Saya dimarahi ibu."],
["Perasaan & Abstrak", "許す", "ゆるす", "yurusu", "memaafkan", "今回だけ許してあげる。", "Konkai dake yurushite ageru.", "Kali ini saja kumaafkan."],
["Perasaan & Abstrak", "願う", "ねがう", "negau", "berharap", "合格を願っている。", "Goukaku o negatte iru.", "Saya berharap lulus."],
["Perasaan & Abstrak", "祈る", "いのる", "inoru", "berdoa", "無事を祈っています。", "Buji o inotte imasu.", "Saya berdoa semoga selamat."],
["Perasaan & Abstrak", "惜しい", "おしい", "oshii", "sayang sekali", "あと少しで惜しかった。", "Ato sukoshi de oshikatta.", "Sayang sekali, tinggal sedikit lagi."]
];
window.N3_KOTOBA=window.N3_KOTOBA||[];
R.forEach(function(r){window.N3_KOTOBA.push({kat:r[0],kanji:r[1],kana:r[2],romaji:r[3],arti:r[4],contohJp:r[5],contohRomaji:r[6],contohId:r[7]});});
})();
