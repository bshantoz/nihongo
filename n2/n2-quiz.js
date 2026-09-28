// ===================================================================
// Qategori Nihongo - Bank Soal Kuis JLPT N2 (format mirip ujian asli)
// Kategori: kanji_yomi, hyouki, bunmyaku, bunpou, kumitate
// ===================================================================
window.N2_QUIZ = {

  // ===== 漢字読み =====
  kanji_yomi: [
    {mondai:"経済に大きな__影響__を及ぼした。", options:["えいきょう","えいこう","かげひびき","えいごう"], correct:0, penjelasan:"影響(えいきょう)＝pengaruh/dampak。"},
    {mondai:"新しい__規制__が導入された。", options:["きせい","きさだ","きしょう","きてい"], correct:0, penjelasan:"規制(きせい)＝regulasi。"},
    {mondai:"両者は__合意__に達した。", options:["ごうい","がつい","あわせい","ごうえ"], correct:0, penjelasan:"合意(ごうい)＝kesepakatan。"},
    {mondai:"会社の__業績__が好調だ。", options:["ぎょうせき","ぎょうせい","こうせき","かせき"], correct:0, penjelasan:"業績(ぎょうせき)＝kinerja usaha。"},
    {mondai:"彼はその研究に長年__携わって__きた。", options:["たずさわって","かかわって","たずわって","もずさわって"], correct:0, penjelasan:"携わる(たずさわる)＝terlibat dalam。"},
    {mondai:"目標を__遂げる__まで諦めない。", options:["とげる","つげる","なしとげる","すいげる"], correct:0, penjelasan:"遂げる(とげる)＝mencapai (tujuan)。"},
    {mondai:"経験__不足__ゆえに失敗した。", options:["ぶそく","ふそく","ふぞく","ぶぞく"], correct:1, penjelasan:"不足(ふそく)＝kekurangan。"},
    {mondai:"税金の__負担__が大きい。", options:["ふたん","ふうたん","ぶたん","おいたん"], correct:0, penjelasan:"負担(ふたん)＝beban (biaya)。"},
    {mondai:"若さ__ゆえ__の過ちだった。", options:["ゆえ","ゆへ","ゆうえ","ゆいえ"], correct:0, penjelasan:"ゆえ(故)＝karena/sebab。"},
    {mondai:"感情を__抑制__する必要がある。", options:["よくせい","おくせい","よくたい","あくせい"], correct:0, penjelasan:"抑制(よくせい)＝pengendalian。"},
    {mondai:"事故の__要因__を調べる。", options:["よういん","ようめ","がんいん","よういき"], correct:0, penjelasan:"要因(よういん)＝faktor penyebab。"},
    {mondai:"話に__矛盾__がある。", options:["むじゅん","もうじゅん","むしゅん","ぼうじゅん"], correct:0, penjelasan:"矛盾(むじゅん)＝kontradiksi。"}
  ],

  // ===== 表記 =====
  hyouki: [
    {mondai:"かいしゃは あかじが つづいている。", options:["赤字","赤地","赤治","赤事"], correct:0, penjelasan:"あかじ＝赤字(defisit)。"},
    {mondai:"けいざいせいさいが かされた。", options:["制裁","制栽","製裁","制済"], correct:0, penjelasan:"せいさい＝制裁(sanksi)。"},
    {mondai:"しょとくかくさが ひろがっている。", options:["格差","確差","隔差","格査"], correct:0, penjelasan:"かくさ＝格差(kesenjangan)。"},
    {mondai:"にんげんの けんりを そんちょうすべきだ。", options:["権利","権理","憲利","権理利"], correct:0, penjelasan:"けんり＝権利(hak)。"},
    {mondai:"かれは がんこな せいかくだ。", options:["頑固","頑個","岩固","頑故"], correct:0, penjelasan:"がんこ＝頑固(keras kepala)。"},
    {mondai:"しんちょうに はんだんすべきだ。", options:["慎重","真重","慎調","進重"], correct:0, penjelasan:"しんちょう＝慎重(hati-hati)。"},
    {mondai:"あたらしい がいねんを どうにゅうする。", options:["概念","概今","慨念","概念々"], correct:0, penjelasan:"がいねん＝概念(konsep)。"},
    {mondai:"データを けんしょうする ひつようがある。", options:["検証","検症","険証","検称"], correct:0, penjelasan:"けんしょう＝検証(verifikasi)。"},
    {mondai:"かちかんの ちがいを みとめあう。", options:["価値観","価値感","価直観","価置観"], correct:0, penjelasan:"かちかん＝価値観(pandangan nilai)。"},
    {mondai:"きぎょうの りんりが とわれている。", options:["倫理","輪理","倫利","論理"], correct:0, penjelasan:"りんり＝倫理(etika); catatan: 論理(ろんり)artinya logika, beda arti."},
    {mondai:"しんらいの もとに はんだんする。", options:["基","元","下","本"], correct:0, penjelasan:"もとに＝基に(sebagai dasar), ditulis dengan 基。"},
    {mondai:"けいざいせいちょうを そくしんする。", options:["促進","足進","促針","促深"], correct:0, penjelasan:"そくしん＝促進(percepatan/pendorongan)。"}
  ],

  // ===== 文脈規定 =====
  bunmyaku: [
    {mondai:"彼は天才という＿＿＿、努力家だ。", options:["より","こそ","のみ","ばかり"], correct:0, penjelasan:"というより＝lebih tepat dikatakan。"},
    {mondai:"忙しい＿＿＿、返事ぐらいできるはずだ。", options:["にしても","にしたら","にしては","にすれば"], correct:0, penjelasan:"にしても＝sekalipun/bahkan kalau。"},
    {mondai:"3日間に＿＿＿会議が行われた。", options:["わたって","かけて","とって","おうじて"], correct:0, penjelasan:"にわたって＝meliputi/sepanjang (rentang waktu)。"},
    {mondai:"収入に＿＿＿税金が変わる。", options:["応じて","沿って","基づいて","加えて"], correct:0, penjelasan:"に応じて＝menyesuaikan dengan。"},
    {mondai:"結婚を＿＿＿、新しい生活を始めた。", options:["機に","問わず","もとに","こたえて"], correct:0, penjelasan:"を機に＝dengan kesempatan itu。"},
    {mondai:"この仕事は給料がいい＿＿＿、責任も重い。", options:["反面","一方だ","あげく","末に"], correct:0, penjelasan:"反面＝di sisi lain (kontras dua sifat)。"},
    {mondai:"のどが渇いて＿＿＿。", options:["しょうがない","たまる","かねない","っこない"], correct:0, penjelasan:"てしょうがない＝sangat, tak tertahankan。"},
    {mondai:"こんな難しい問題、でき＿＿＿。", options:["っこない","かねる","ようがない","まい"], correct:0, penjelasan:"っこない＝mustahil (bentuk percakapan santai)。"},
    {mondai:"これはほんの一例に＿＿＿。", options:["すぎない","ほかならない","かぎらない","たえない"], correct:0, penjelasan:"にすぎない＝tidak lebih dari。"},
    {mondai:"この成功は努力の結果に＿＿＿。", options:["ほかならない","すぎない","相違ない","限らない"], correct:0, penjelasan:"にほかならない＝tidak lain adalah (penegasan)。"},
    {mondai:"忙しくて、旅行＿＿＿ではない。", options:["どころ","くらい","ばかり","さえ"], correct:0, penjelasan:"どころではない＝bukan saatnya/keadaan untuk。"},
    {mondai:"英語は＿＿＿、フランス語も話せる。", options:["もとより","はもとより","によって","にとって"], correct:1, penjelasan:"はもとより＝apalagi, tidak usah dikatakan lagi。"},
    {mondai:"寝不足の＿＿＿、頭がぼんやりする。", options:["せいか","ばかりに","もの","ことだし"], correct:0, penjelasan:"せいか＝mungkin karena (dugaan penyebab, bukan kepastian)。"},
    {mondai:"謝るまで気が＿＿＿。", options:["済まない","重い","配る","焼く"], correct:0, penjelasan:"気が済まない＝tidak lega (sampai suatu hal terjadi)。"},
    {mondai:"彼のやり方が気に＿＿＿。", options:["食わない","かかる","乗る","出す"], correct:0, penjelasan:"気に食わない＝tidak menyukai。"}
  ],

  // ===== 文法 =====
  bunpou: [
    {mondai:"一言余計なことを言った＿＿＿、喧嘩になった。", options:["ばかりに","せいか","ことだし","ものなら"], correct:0, penjelasan:"〜ばかりに＝gara-gara (akibat buruk tak terduga, penyesalan kuat)。"},
    {mondai:"努力し＿＿＿、成功はできない。", options:["ないかぎり","ないことには","ないまでも","ないにしても"], correct:0, penjelasan:"〜ないかぎり＝selama tidak...maka tidak akan。"},
    {mondai:"できる＿＿＿、今すぐ会いたい。", options:["ものなら","ことなら","はずなら","わけなら"], correct:0, penjelasan:"〜ものなら＝mengandaikan kemungkinan yang sulit/berisiko。"},
    {mondai:"長時間迷った＿＿＿、結局買わなかった。", options:["あげく","末に","次第","折に"], correct:0, penjelasan:"〜あげく(に)＝pada akhirnya (setelah proses, hasil biasanya negatif)。"},
    {mondai:"到着し＿＿＿、ご連絡いたします。", options:["次第","あげく","末に","かぎり"], correct:0, penjelasan:"〜次第＝begitu selesai, langsung。"},
    {mondai:"冗談＿＿＿、真剣に話しましょう。", options:["抜きで","を問わず","はもとより","もかまわず"], correct:0, penjelasan:"〜抜きで＝tanpa (unsur tertentu)。"},
    {mondai:"周りの目＿＿＿、大声で泣いた。", options:["もかまわず","を問わず","はもとより","に応じて"], correct:0, penjelasan:"〜もかまわず＝tidak peduli/mengabaikan。"},
    {mondai:"親に＿＿＿、子供はいつまでも子供だ。", options:["したら","しては","しても","よると"], correct:0, penjelasan:"〜にしたら＝kalau dari sudut pandang (pihak lain)。"},
    {mondai:"年を取る＿＿＿、体力が落ちる。", options:["につれて","にとって","において","にかけて"], correct:0, penjelasan:"〜につれて＝seiring dengan (perubahan gradual)。"},
    {mondai:"事実に＿＿＿報告する。", options:["基づいて","沿って","応じて","わたって"], correct:0, penjelasan:"〜に基づいて＝berdasarkan (fakta/data)。"},
    {mondai:"友人の紹介を＿＿＿、この仕事を始めた。", options:["きっかけに","もとに","めぐって","問わず"], correct:0, penjelasan:"〜をきっかけに＝dengan diawali oleh。"},
    {mondai:"感動して、泣か＿＿＿いられなかった。", options:["ないでは","なくては","ないと","なければ"], correct:0, penjelasan:"〜ないではいられない＝tidak bisa tidak melakukan (dorongan emosi kuat)。"},
    {mondai:"その質問にはお答えし＿＿＿。", options:["かねます","かねません","えません","がたいです"], correct:0, penjelasan:"〜かねる＝sulit untuk (menolak secara halus)。"},
    {mondai:"そんな運転は事故を起こし＿＿＿。", options:["かねない","かねる","っこない","まい"], correct:0, penjelasan:"〜かねない＝bisa jadi/mungkin saja terjadi hal buruk。"},
    {mondai:"二度と同じ失敗はする＿＿＿。", options:["まい","っこない","かねる","ようがない"], correct:0, penjelasan:"〜まい＝tidak akan (negasi niat, bentuk formal)。"}
  ],

  // ===== 文の組み立て =====
  kumitate: [
    {mondai:"電車を一本逃した＿＿★＿＿、遅刻してしまった。　（★に入るのは？）", options:["ばかりに","せいか","ことだし","ものなら"], correct:0,
     penjelasan:"電車を一本逃したばかりに、遅刻してしまった。〜ばかりに＝gara-gara (akibat buruk tak terduga)。"},
    {mondai:"謝る＿＿★＿＿、最初からやらない。　（★に入るのは？）", options:["くらいなら","ものなら","かぎり","あげく"], correct:0,
     penjelasan:"謝るくらいなら、最初からやらない。〜くらいなら＝daripada...lebih baik。"},
    {mondai:"長い議論の＿＿★＿＿、結論が出た。　（★に入るのは？）", options:["末に","あげくに","次第に","折に"], correct:0,
     penjelasan:"長い議論の末に、結論が出た。〜末に＝setelah melalui proses panjang。"},
    {mondai:"忙しくて、旅行＿＿★＿＿ではない。　（★に入るのは？）", options:["どころ","くらい","ばかり","さえ"], correct:0,
     penjelasan:"忙しくて、旅行どころではない。〜どころではない＝bukan saatnya untuk。"},
    {mondai:"年齢を＿＿★＿＿、誰でも参加できる。　（★に入るのは？）", options:["問わず","もとに","こたえて","応じて"], correct:0,
     penjelasan:"年齢を問わず、誰でも参加できる。〜を問わず＝tanpa memandang。"},
    {mondai:"経験から＿＿★＿＿、この方法が一番いい。　（★に入るのは？）", options:["言うと","したら","しては","しても"], correct:0,
     penjelasan:"経験から言うと、この方法が一番いい。〜からいうと＝dari sudut pandang。"},
    {mondai:"人口の増加に＿＿★＿＿、住宅問題が深刻化した。　（★に入るのは？）", options:["伴って","加えて","わたって","沿って"], correct:0,
     penjelasan:"人口の増加に伴って、住宅問題が深刻化した。〜に伴って＝seiring/bersamaan dengan。"},
    {mondai:"友人の紹介を＿＿★＿＿、この仕事を始めた。　（★に入るのは？）", options:["きっかけに","もとに","めぐって","応じて"], correct:0,
     penjelasan:"友人の紹介をきっかけに、この仕事を始めた。〜をきっかけに＝dengan diawali oleh。"},
    {mondai:"うれしくて＿＿★＿＿。　（★に入るのは？）", options:["たまらない","しかたがある","かねる","っこない"], correct:0,
     penjelasan:"うれしくてたまらない。〜てたまらない＝tak tertahankan。"},
    {mondai:"これはほんの一例に＿＿★＿＿。　（★に入るのは？）", options:["すぎない","ほかならない","相違ない","限らない"], correct:0,
     penjelasan:"これはほんの一例にすぎない。〜にすぎない＝tidak lebih dari。"}
  ]
};
