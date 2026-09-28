// ===================================================================
// Qategori Nihongo - Bank Soal Kuis JLPT N3 (format mirip ujian asli)
// Kategori: kanji_yomi, hyouki, bunmyaku, bunpou, kumitate
// Tiap soal: { mondai, options[4], correct(index 0-3), penjelasan }
// ===================================================================
window.N3_QUIZ = {

  // ===== 漢字読み: baca kanji yang digarisbawahi =====
  kanji_yomi: [
    {mondai:"荷物が今日__届き__ました。", options:["とどき","とうき","とどけ","とうどき"], correct:0, penjelasan:"届く(とどく)＝sampai/terkirim。"},
    {mondai:"子供を__育てる__のは大変だ。", options:["そだてる","いくてる","はぐてる","そたてる"], correct:0, penjelasan:"育てる(そだてる)＝membesarkan。"},
    {mondai:"約束を__守る__べきだ。", options:["まもる","もる","たもる","のこる"], correct:0, penjelasan:"守る(まもる)＝menjaga/menepati。"},
    {mondai:"上司の__命令__に従った。", options:["めいれい","めいりょう","みょうれい","めいろう"], correct:0, penjelasan:"命令(めいれい)＝perintah。"},
    {mondai:"最近、__景気__が悪いそうだ。", options:["けいき","けしき","けいけ","けいぎ"], correct:0, penjelasan:"景気(けいき)＝kondisi ekonomi。"},
    {mondai:"彼は__責任__を持って仕事をする。", options:["せきにん","せきむ","せいにん","せきじん"], correct:0, penjelasan:"責任(せきにん)＝tanggung jawab。"},
    {mondai:"__高齢化__が進んでいる社会。", options:["こうれいか","こうねんか","こうれいけ","こうりょうか"], correct:0, penjelasan:"高齢化(こうれいか)＝penuaan populasi。"},
    {mondai:"財布を__盗まれ__ました。", options:["ぬすまれ","とられまれ","うばまれ","かくまれ"], correct:0, penjelasan:"盗む(ぬすむ)→盗まれる＝dicuri。"},
    {mondai:"努力したにも__関わらず__、失敗した。", options:["かかわらず","かかわず","かんわらず","かかはらず"], correct:0, penjelasan:"関わらず(かかわらず)＝meskipun。"},
    {mondai:"薬を飲んだが、__熱__が下がらない。", options:["ねつ","あつ","ねち","ねっ"], correct:0, penjelasan:"熱(ねつ)＝demam/panas。"},
    {mondai:"この川は__深い__から気をつけて。", options:["ふかい","あさい","こわい","つよい"], correct:0, penjelasan:"深い(ふかい)＝dalam。"},
    {mondai:"娘は__性格__が明るい。", options:["せいかく","せいかつ","しょうかく","せいがく"], correct:0, penjelasan:"性格(せいかく)＝kepribadian。"}
  ],

  // ===== 表記: pilih kanji yang benar dari kata dalam hiragana =====
  hyouki: [
    {mondai:"かれは しごとに たいして せきにんを もっている。", options:["責任","積任","責認","積認"], correct:0, penjelasan:"せきにん＝責任。"},
    {mondai:"あめの ため、しあいが ちゅうしに なった。", options:["中止","中心","中誌","注止"], correct:0, penjelasan:"ちゅうし＝中止(dibatalkan)。"},
    {mondai:"かのじょは にほんの ぶんかに きょうみが ある。", options:["興味","協味","興見","強味"], correct:0, penjelasan:"きょうみ＝興味(minat)。"},
    {mondai:"けいざいの じょうたいが よくない。", options:["状態","状体","常態","上体"], correct:0, penjelasan:"じょうたい＝状態(keadaan)。"},
    {mondai:"かれは にんげんかんけいに なやんでいる。", options:["悩んで","脳んで","悔んで","苦んで"], correct:0, penjelasan:"なやむ＝悩む(khawatir/galau)。"},
    {mondai:"しょくじの まなーを まもりましょう。", options:["マナー","マーナ","ナマー","マラー"], correct:0, penjelasan:"マナー＝tata krama (katakana)。"},
    {mondai:"かんきょうを まもることが たいせつだ。", options:["環境","環況","循境","環鏡"], correct:0, penjelasan:"かんきょう＝環境(lingkungan)。"},
    {mondai:"にほんごの べんきょうを つづけている。", options:["続けて","統けて","続げて","積けて"], correct:0, penjelasan:"つづける＝続ける(melanjutkan)。"},
    {mondai:"かれの たいどが きになる。", options:["態度","対度","態渡","体度"], correct:0, penjelasan:"たいど＝態度(sikap)。"},
    {mondai:"むすこは やさいが にがてだ。", options:["苦手","若手","苦垂","苦弟"], correct:0, penjelasan:"にがて＝苦手(kurang suka/tidak jago)。"},
    {mondai:"かいしゃの けいえいが むずかしくなった。", options:["経営","経栄","経験","経営々"], correct:0, penjelasan:"けいえい＝経営(manajemen usaha)。"},
    {mondai:"しあいの けっかに まんぞくしている。", options:["満足","満息","満促","万足"], correct:0, penjelasan:"まんぞく＝満足(puas)。"}
  ],

  // ===== 文脈規定: pilih kata yang sesuai konteks =====
  bunmyaku: [
    {mondai:"すみません、＿＿＿ですが、駅までどう行けばいいですか。", options:["恐縮","感激","満足","得意"], correct:0, penjelasan:"恐縮(きょうしゅく)ですが＝permisi/maaf mengganggu, ungkapan sopan sebelum bertanya."},
    {mondai:"彼は約束の時間に＿＿＿来なかった。", options:["とうとう","なるべく","わざわざ","せっかく"], correct:0, penjelasan:"とうとう＝pada akhirnya (tidak datang sampai akhir)。"},
    {mondai:"このレポートは＿＿＿な例を挙げて説明してください。", options:["具体的","抽象的","消極的","一般的"], correct:0, penjelasan:"具体的(ぐたいてき)な例＝contoh yang konkret，sesuai konteks 'jelaskan dengan'。"},
    {mondai:"彼女はいつも＿＿＿笑っている。", options:["にこにこ","いらいら","がっかり","びっくり"], correct:0, penjelasan:"にこにこ＝tersenyum-senyum, cocok dengan 'selalu tertawa'。"},
    {mondai:"台風の＿＿＿で、大きな被害が出た。", options:["せい","おかげ","ため息","つもり"], correct:0, penjelasan:"せいで＝gara-gara (akibat negatif) sesuai konteks 'kerugian besar'。"},
    {mondai:"急いでいたので、＿＿＿財布を忘れてしまった。", options:["うっかり","しっかり","はっきり","すっきり"], correct:0, penjelasan:"うっかり＝lengah/ceroboh, cocok dengan 'lupa dompet'。"},
    {mondai:"彼の説明は＿＿＿すぎて理解できなかった。", options:["抽象的","具体的","積極的","現実的"], correct:0, penjelasan:"抽象的(ちゅうしょうてき)＝abstrak, sesuai 'sulit dipahami'。"},
    {mondai:"面接の前で、胸が＿＿＿した。", options:["どきどき","のんびり","ゆっくり","すっきり"], correct:0, penjelasan:"どきどき＝deg-degan, sesuai konteks sebelum wawancara。"},
    {mondai:"忙しくて、昼ご飯を食べる時間＿＿＿ない。", options:["さえ","でも","しか","ばかり"], correct:0, penjelasan:"さえ＝bahkan (waktu makan siang saja tidak ada)。"},
    {mondai:"彼は日本に来て＿＿＿、一度も国に帰っていない。", options:["以来","以降は","うちに","まま"], correct:0, penjelasan:"て以来＝sejak, sesuai konteks belum pernah pulang。"},
    {mondai:"合格できたのは、先生の＿＿＿だ。", options:["おかげ","せい","ため","もの"], correct:0, penjelasan:"おかげ＝berkat (hasil positif)。"},
    {mondai:"あの店のラーメンは美味しい＿＿＿。食べに行ってみよう。", options:["らしい","そうだった","ようだった","みたいだった"], correct:0, penjelasan:"らしい＝katanya (info dari orang lain), cocok dengan ajakan 'coba pergi makan'。"},
    {mondai:"雨が降っている＿＿＿にもかかわらず、試合が行われた。", options:["の","こと","もの","わけ"], correct:0, penjelasan:"にもかかわらず didahului oleh の (nominalisasi) bila sebelum kata benda/kata sifat-na。"},
    {mondai:"物価は＿＿＿一方だ。", options:["上がる","上がった","上がろう","上がれば"], correct:0, penjelasan:"一方だ didahului bentuk kamus (辞書形)，menyatakan tren terus berlanjut。"},
    {mondai:"彼女は仕事に対してとても＿＿＿だ。", options:["熱心","熱い","熱する","熱さ"], correct:0, penjelasan:"熱心(ねっしん)だ＝tekun/antusias, bentuk na-keiyoushi。"}
  ],

  // ===== 文法: pilih pola tata bahasa yang benar untuk blank =====
  bunpou: [
    {mondai:"お金＿＿＿あれば、何でも買える。", options:["さえ","でも","しか","こそ"], correct:0, penjelasan:"〜さえ〜ば＝asalkan。"},
    {mondai:"漢字は勉強すれば＿＿＿面白くなる。", options:["するほど","するのに","するには","するくらい"], correct:0, penjelasan:"〜ば〜ほど＝semakin...semakin。"},
    {mondai:"ドアを開けた＿＿＿、猫が飛び出した。", options:["とたん","うちに","あいだ","たびに"], correct:0, penjelasan:"〜たとたん＝begitu...langsung。"},
    {mondai:"下手な＿＿＿、自信満々だ。", options:["くせに","ものの","わりに","つつ"], correct:0, penjelasan:"〜くせに＝padahal (nada mencela)。"},
    {mondai:"上司の命令なので、従わ＿＿＿を得ない。", options:["ざる","ない","なく","ぬ"], correct:0, penjelasan:"〜ざるを得ない＝terpaksa (dari V-ない形 diganti ざる)。"},
    {mondai:"今日は早く帰ら＿＿＿いただきます。", options:["せて","れて","させ","され"], correct:0, penjelasan:"〜(さ)せていただく＝mohon izin untuk melakukan。帰る→帰らせて。"},
    {mondai:"社長はもうお帰りに＿＿＿。", options:["なりました","しました","されました","いたしました"], correct:0, penjelasan:"お＋Vます形＋になる＝bentuk sonkeigo (menghormati)。"},
    {mondai:"忙しい＿＿＿、暇で仕方がない。", options:["どころか","からこそ","にしては","というより"], correct:0, penjelasan:"〜どころか＝jangankan...malah。"},
    {mondai:"急いでいる時＿＿＿、電車が遅れる。", options:["に限って","にとって","にかけて","において"], correct:0, penjelasan:"〜に限って＝khusus/justru pada saat itu (nuansa sial)。"},
    {mondai:"体に悪いと知り＿＿＿、タバコをやめられない。", options:["つつ","ながらに","かけて","がち"], correct:0, penjelasan:"〜つつ(も)＝meski menyadari...tetap。"},
    {mondai:"3年も日本に住んでいた。だから日本語が上手な＿＿＿だ。", options:["わけ","もの","はず","つもり"], correct:0, penjelasan:"〜わけだ＝pantas saja (kesimpulan logis)。"},
    {mondai:"よく考えた＿＿＿で、返事をします。", options:["上","末","あげく","結果"], correct:0, penjelasan:"〜上で＝setelah melakukan (baru melangkah berikutnya)。"},
    {mondai:"温かい＿＿＿食べてください。", options:["うちに","あいだに","ときに","うえに"], correct:0, penjelasan:"〜うちに＝selagi (sebelum kondisinya berubah)。"},
    {mondai:"実際に見ない＿＿＿には、決められません。", options:["こと","もの","わけ","はず"], correct:0, penjelasan:"〜ないことには＝kalau tidak...maka tidak akan。"},
    {mondai:"たとえ雨が降っ＿＿＿、試合は行われます。", options:["ても","たら","ては","ながら"], correct:0, penjelasan:"たとえ〜ても＝walaupun seandainya。"}
  ],

  // ===== 文の組み立て: pilih potongan yang tepat mengisi posisi ★ dalam kalimat =====
  kumitate: [
    {mondai:"事故の＿＿＿＿★＿＿＿＿、電車が遅れています。　（★に入るのは？）", options:["ため","せいで","ことで","ように"], correct:0,
     penjelasan:"事故のため、電車が遅れています。〜ため(に)＝alasan formal netral, cocok untuk pengumuman."},
    {mondai:"漢字は勉強すれば＿＿★＿＿面白くなる。　（★に入るのは？）", options:["するほど","するとしたら","しないうちに","したとたん"], correct:0,
     penjelasan:"漢字は勉強すればするほど面白くなる。〜ば〜ほど＝semakin...semakin."},
    {mondai:"忙しくて、昼ご飯を食べる＿＿★＿＿ない。　（★に入るのは？）", options:["時間さえ","時間だけ","時間ばかり","時間のみ"], correct:0,
     penjelasan:"昼ご飯を食べる時間さえない。〜さえ〜ない＝bahkan...saja tidak ada."},
    {mondai:"上司の命令なので、＿＿★＿＿。　（★に入るのは？）", options:["従わざるを得ない","従うわけにはいかない","従うことになっている","従うべきではない"], correct:0,
     penjelasan:"従わざるを得ない＝terpaksa mematuhi karena situasi memaksa (perintah atasan)."},
    {mondai:"日本語を＿＿★＿＿、まだ上手に話せない。　（★に入るのは？）", options:["勉強したものの","勉強しつつ","勉強するくせに","勉強するにしては"], correct:0,
     penjelasan:"勉強したものの＝walaupun sudah belajar, hasil belum sesuai harapan."},
    {mondai:"財布に千円＿＿★＿＿ない。　（★に入るのは？）", options:["しか","さえ","ばかり","ほど"], correct:0,
     penjelasan:"千円しかない＝hanya seribu yen (jumlah terbatas, tidak lebih)。"},
    {mondai:"努力した＿＿★＿＿、結果は出なかった。　（★に入るのは？）", options:["にもかかわらず","からといって","としたら","というより"], correct:0,
     penjelasan:"努力したにもかかわらず＝meskipun sudah berusaha, hasil tetap tidak sesuai harapan。"},
    {mondai:"社長はもう＿＿★＿＿なりました。　（★に入るのは？）", options:["お帰りに","お帰りを","お帰りが","お帰りは"], correct:0,
     penjelasan:"お帰りになりました＝bentuk sonkeigo untuk 帰る (menghormati atasan)。"},
    {mondai:"急いでいる時に＿＿★＿＿、電車が遅れる。　（★に入るのは？）", options:["限って","対して","かけて","とって"], correct:0,
     penjelasan:"時に限って＝justru pada saat itu (hal tak diinginkan terjadi)。"},
    {mondai:"体に悪いと知り＿＿★＿＿、タバコをやめられない。　（★に入るのは？）", options:["つつも","ながらに","かけては","気味で"], correct:0,
     penjelasan:"知りつつも＝meskipun menyadari sesuatu buruk, tetap melakukannya。"}
  ]
};
