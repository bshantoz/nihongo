// ===================================================================
// Qategori Nihongo - Kuis Bunpou (文法クイズ) JLPT N1
// Kategori: kanji_yomi, hyouki, bunmyaku, bunpou, kumitate
// Skema tiap soal: {mondai, options:[4], correct:idx, penjelasan}
// ===================================================================
window.N1_QUIZ = {

  // ---------------- 漢字読み (Baca Kanji) ----------------
  kanji_yomi: [
    {mondai:"彼の行動には＿矛盾＿がある。", options:["むじゅん","むうじゅん","ぼうじゅん","むうしゅん"], correct:0, penjelasan:"矛盾 dibaca 'mujun' artinya kontradiksi."},
    {mondai:"この政策は＿妥当＿だと思う。", options:["だとう","たとう","だどう","たどう"], correct:0, penjelasan:"妥当 dibaca 'datou' artinya tepat/wajar."},
    {mondai:"事件の＿背景＿を調べる。", options:["はいけい","はいきょう","はいけん","はいきん"], correct:0, penjelasan:"背景 dibaca 'haikei' artinya latar belakang."},
    {mondai:"彼女は＿曖昧＿な返事をした。", options:["あいまい","あいまん","あいめい","あいばい"], correct:0, penjelasan:"曖昧 dibaca 'aimai' artinya ambigu/samar."},
    {mondai:"その理論は＿顕著＿な効果を示した。", options:["けんちょ","げんちょ","けんじょ","けんちょう"], correct:0, penjelasan:"顕著 dibaca 'kencho' artinya nyata/mencolok."},
    {mondai:"経済の＿格差＿が広がっている。", options:["かくさ","かくざ","こうさ","かくそ"], correct:0, penjelasan:"格差 dibaca 'kakusa' artinya kesenjangan."},
    {mondai:"彼は会議で＿貫いた＿主張をした。", options:["つらぬいた","つかぬいた","つなぬいた","つちぬいた"], correct:0, penjelasan:"貫いた dibaca 'tsuranuita' artinya mempertahankan/menjalankan konsisten."},
    {mondai:"新しい法律の＿是正＿が求められている。", options:["ぜせい","ぜしょう","せせい","ぜいせい"], correct:0, penjelasan:"是正 dibaca 'zesei' artinya koreksi/perbaikan."},
    {mondai:"この結果は＿偏見＿に基づいている。", options:["へんけん","へんげん","へんみ","へんかん"], correct:0, penjelasan:"偏見 dibaca 'henken' artinya prasangka."},
    {mondai:"会社の＿倒産＿が報じられた。", options:["とうさん","とうざん","どうさん","とうせい"], correct:0, penjelasan:"倒産 dibaca 'tousan' artinya bangkrut."},
    {mondai:"政府は＿融資＿を拡大する方針だ。", options:["ゆうし","ゆうじ","ゆんし","ゆし"], correct:0, penjelasan:"融資 dibaca 'yuushi' artinya pembiayaan/kredit."},
    {mondai:"彼の説明には＿根拠＿がない。", options:["こんきょ","こんこ","ねきょ","こんぎょ"], correct:0, penjelasan:"根拠 dibaca 'konkyo' artinya dasar/landasan."}
  ],

  // ---------------- 表記 (Pilih Kanji yang Tepat) ----------------
  hyouki: [
    {mondai:"かんきょうもんだいを解決する。", options:["環境問題","環況問題","還境問題","環鏡問題"], correct:0, penjelasan:"'kankyou mondai' (masalah lingkungan) ditulis 環境問題."},
    {mondai:"けいざいの動向をぶんせきする。", options:["分析","分折","分祈","文析"], correct:0, penjelasan:"'bunseki' (analisis) ditulis 分析."},
    {mondai:"かのじょはろんりてきに話す。", options:["論理的","論裏的","輪理的","論利的"], correct:0, penjelasan:"'ronriteki' (logis) ditulis 論理的."},
    {mondai:"じぞくかのうな開発を目指す。", options:["持続可能","持続化能","持続加能","維続可能"], correct:0, penjelasan:"'jizoku kanou' (berkelanjutan) ditulis 持続可能."},
    {mondai:"かのじょはしんらいできる人物だ。", options:["信頼","信疑","信瀬","親頼"], correct:0, penjelasan:"'shinrai' (kepercayaan) ditulis 信頼."},
    {mondai:"この主張にはむじゅんがある。", options:["矛盾","矛循","予盾","矛準"], correct:0, penjelasan:"'mujun' (kontradiksi) ditulis 矛盾."},
    {mondai:"政府はきせいを緩和した。", options:["規制","規正","規製","規征"], correct:0, penjelasan:"'kisei' (regulasi) ditulis 規制."},
    {mondai:"そのデータにはかたよりがある。", options:["偏り","編り","遍り","片より"], correct:0, penjelasan:"'katayori' (bias) ditulis 偏り."},
    {mondai:"新しい概念をていぎする。", options:["定義","定議","定儀","定技"], correct:0, penjelasan:"'teigi' (definisi) ditulis 定義."},
    {mondai:"彼はかせつを立てて実験した。", options:["仮説","仮設","仮節","仮折"], correct:0, penjelasan:"'kasetsu' (hipotesis) ditulis 仮説."},
    {mondai:"社会のたようせいを尊重する。", options:["多様性","多洋性","多用性","他様性"], correct:0, penjelasan:"'tayousei' (keberagaman) ditulis 多様性."},
    {mondai:"この結果はきゃっかんてきなデータに基づく。", options:["客観的","客観的","客感的","各観的"], correct:0, penjelasan:"'kyakkanteki' (objektif) ditulis 客観的."}
  ],

  // ---------------- 文脈規定 (Kata Sesuai Konteks) ----------------
  bunmyaku: [
    {mondai:"彼の意見は論理が＿＿＿おり、説得力がある。", options:["一貫して","曖昧にして","矛盾して","偏って"], correct:0, penjelasan:"一貫している (konsisten) cocok dengan 'memiliki daya persuasi'."},
    {mondai:"この政策には多くの＿＿＿が指摘されている。", options:["問題点","安心感","満足度","信頼性"], correct:0, penjelasan:"問題点 (titik permasalahan) cocok dengan konteks 'banyak ditunjukkan'."},
    {mondai:"彼女は困難な状況でも＿＿＿な態度を崩さなかった。", options:["冷静","曖昧","矛盾","杜撰"], correct:0, penjelasan:"冷静 (tenang) cocok dengan sikap dalam situasi sulit."},
    {mondai:"この研究は従来の説を＿＿＿結果となった。", options:["覆す","支持する","是正する","踏まえる"], correct:0, penjelasan:"覆す (membalikkan) cocok karena penelitian ini bertentangan dengan teori lama."},
    {mondai:"少子高齢化は社会に＿＿＿影響を及ぼしている。", options:["深刻な","軽微な","曖昧な","円滑な"], correct:0, penjelasan:"深刻な (serius) cocok dengan dampak sosial dari penurunan kelahiran dan penuaan."},
    {mondai:"彼の発言は＿＿＿を招き、批判が殺到した。", options:["誤解","信頼","納得","安心"], correct:0, penjelasan:"誤解 (kesalahpahaman) cocok dengan 'menimbulkan kritik yang bertubi-tubi'."},
    {mondai:"この製品は品質の面で＿＿＿が見られる。", options:["ばらつき","一貫性","透明性","柔軟性"], correct:0, penjelasan:"ばらつき (variasi/ketidakseragaman) cocok dengan masalah kualitas produk."},
    {mondai:"交渉は難航したが、最終的に＿＿＿に至った。", options:["合意","矛盾","偏見","誤解"], correct:0, penjelasan:"合意 (kesepakatan) cocok dengan hasil akhir negosiasi."},
    {mondai:"彼は自分の非を認めず、＿＿＿な態度を取り続けた。", options:["頑な","柔軟","謙虚","率直"], correct:0, penjelasan:"頑な (keras kepala) cocok dengan tidak mau mengakui kesalahan."},
    {mondai:"この報告書は事実を＿＿＿書かれている。", options:["客観的に","主観的に","曖昧に","感情的に"], correct:0, penjelasan:"客観的に (secara objektif) cocok dengan laporan berdasarkan fakta."},
    {mondai:"急激な円安は輸入企業に＿＿＿打撃を与えた。", options:["大きな","些細な","円滑な","柔軟な"], correct:0, penjelasan:"大きな (besar) cocok dengan dampak pelemahan yen bagi perusahaan importir."},
    {mondai:"彼の説明は専門用語が多く、＿＿＿にとっては理解しにくい。", options:["素人","専門家","研究者","技術者"], correct:0, penjelasan:"素人 (orang awam) cocok karena istilah teknis sulit dipahami oleh non-ahli."},
    {mondai:"その提案は実現可能性が低く、＿＿＿と言わざるを得ない。", options:["非現実的だ","画期的だ","効果的だ","合理的だ"], correct:0, penjelasan:"非現実的だ (tidak realistis) cocok dengan kemungkinan terwujud yang rendah."},
    {mondai:"彼女は周囲の期待に＿＿＿、見事な成果を上げた。", options:["応えて","反して","逆らって","惑わされて"], correct:0, penjelasan:"応えて (menjawab/memenuhi) cocok dengan hasil memuaskan sesuai harapan."},
    {mondai:"企業は環境保護の観点から、＿＿＿な取り組みを進めている。", options:["持続可能","一時的","表面的","場当たり的"], correct:0, penjelasan:"持続可能 (berkelanjutan) cocok dengan upaya perlindungan lingkungan jangka panjang."}
  ],

  // ---------------- 文法 (Pola Tata Bahasa) ----------------
  bunpou: [
    {mondai:"努力した＿＿＿、試験に落ちてしまった。", options:["にもかかわらず","ばかりに","あまり","かたわら"], correct:0, penjelasan:"〜にもかかわらず = meskipun ~ (bertentangan dengan harapan)。"},
    {mondai:"専門家＿＿＿、すべてを知っているわけではない。", options:["とはいえ","というより","にしては","にしても"], correct:0, penjelasan:"〜とはいえ = meskipun dikatakan ~, namun kenyataannya tidak sepenuhnya begitu。"},
    {mondai:"本日＿＿＿、営業を終了いたします。", options:["をもって","にあたって","において","にかけて"], correct:0, penjelasan:"〜をもって = dengan ini / pada saat ~ (formal, untuk penutupan)。"},
    {mondai:"事実＿＿＿報告書を作成した。", options:["に基づいて","にこたえて","にそって","にかわって"], correct:0, penjelasan:"〜に基づいて = berdasarkan ~。"},
    {mondai:"この映画は観客を感動させ＿＿＿。", options:["ずにはおかない","ないではすまない","ないともかぎらない","ずにすむ"], correct:0, penjelasan:"〜ずにはおかない = pasti akan ~ (secara alami/emosional)。"},
    {mondai:"あの光景を見たら、涙を流さ＿＿＿。", options:["ないではいられない","ないかぎりだ","ないまでもない","ずにはすまされる"], correct:0, penjelasan:"〜ないではいられない = tidak bisa menahan diri untuk tidak ~。"},
    {mondai:"その悲惨な状況に同情を＿＿＿。", options:["禁じ得ない","禁じかねない","禁じるまでもない","禁じきれる"], correct:0, penjelasan:"〜を禁じ得ない = tidak bisa menahan suatu emosi (formal)。"},
    {mondai:"毎日とは言わ＿＿＿、週に一度は運動すべきだ。", options:["ないまでも","ないにしては","ないかぎり","ずにはおかず"], correct:0, penjelasan:"〜ないまでも = meski tidak sampai ~, setidaknya。"},
    {mondai:"弟＿＿＿、全く勉強しようとしない。", options:["に至っては","にかけては","にしたら","にこたえて"], correct:0, penjelasan:"〜に至っては = khususnya mengenai ~ (kasus ekstrem, bernada kritis)。"},
    {mondai:"ベルが鳴る＿＿＿、生徒たちは教室を飛び出した。", options:["や否や","かたわら","そばから","なり"], correct:0, penjelasan:"〜や否や = begitu ~, segera terjadi hal berikutnya。"},
    {mondai:"片付ける＿＿＿、子供が散らかす。", options:["そばから","や否や","が早いか","なり"], correct:0, penjelasan:"〜そばから = begitu dilakukan, langsung terjadi lagi (berulang, negatif)。"},
    {mondai:"貧しさ＿＿＿、彼は学校へ通えなかった。", options:["ゆえに","ばかりに","かたわら","もさることながら"], correct:0, penjelasan:"〜ゆえに = karena ~ (formal/sastra, sebab-akibat)。"},
    {mondai:"約束した＿＿＿、今さら断れない。", options:["手前","ところ","あげく","かたわら"], correct:0, penjelasan:"〜手前 = karena posisi/janji yang sudah dibuat, tidak bisa mundur。"},
    {mondai:"お客様＿＿＿の商売だ。", options:["あって","あっての","あるまじき","あればこそ"], correct:1, penjelasan:"〜あっての = berkat adanya ~ (baru bisa ada hal berikutnya)。"},
    {mondai:"この成功は皆様のご協力＿＿＿。", options:["に他ならない","にすぎない","にほかならず","でしかない"], correct:0, penjelasan:"〜に他ならない = tidak lain adalah ~ (penegasan penyebab sebenarnya)。"}
  ],

  // ---------------- 文の組み立て (Susunan Kalimat) ----------------
  kumitate: [
    {mondai:"台風が ★＿＿＿ 行われた。（1.にもかかわらず 2.会議は 3.接近した）", options:["接近した・にもかかわらず・会議は","会議は・接近した・にもかかわらず","にもかかわらず・接近した・会議は","接近した・会議は・にもかかわらず"], correct:0, penjelasan:"Susunan benar: 台風が接近したにもかかわらず、会議は行われた。(Meski topan mendekat, rapat tetap dilaksanakan)."},
    {mondai:"彼は ★＿＿＿ 進めた。（1.反対を 2.周囲の 3.よそに）", options:["周囲の・反対を・よそに","反対を・周囲の・よそに","よそに・周囲の・反対を","周囲の・よそに・反対を"], correct:0, penjelasan:"Susunan benar: 彼は周囲の反対をよそに、計画を進めた。(Mengabaikan penolakan sekitarnya, dia melanjutkan rencananya)."},
    {mondai:"彼の実力 ★＿＿＿ 間違いない。（1.すれば 2.をもって 3.合格は）", options:["をもって・すれば・合格は","すれば・をもって・合格は","合格は・をもって・すれば","をもって・合格は・すれば"], correct:0, penjelasan:"Susunan benar: 彼の実力をもってすれば、合格は間違いない。(Dengan kemampuannya, pasti lulus)."},
    {mondai:"このような ★＿＿＿ です。（1.光栄の 2.いただき 3.賞を 4.極み）", options:["賞を・いただき・光栄の・極み","いただき・賞を・光栄の・極み","光栄の・賞を・いただき・極み","賞を・光栄の・いただき・極み"], correct:0, penjelasan:"Susunan benar: このような賞をいただき、光栄の極みです。(Menerima penghargaan ini sungguh kehormatan besar)."},
    {mondai:"彼女は ★＿＿＿ 出た。（1.心配を 2.親の 3.よそに 4.一人で旅に）", options:["親の・心配を・よそに・一人で旅に","心配を・親の・よそに・一人で旅に","よそに・親の・心配を・一人で旅に","親の・よそに・心配を・一人で旅に"], correct:0, penjelasan:"Susunan benar: 親の心配をよそに、彼女は一人で旅に出た。(Mengabaikan kekhawatiran orang tuanya, dia pergi sendiri)."},
    {mondai:"医者 ★＿＿＿ とは。（1.ともあろう 2.ミスをする 3.者が 4.そんな初歩的な）", options:["ともあろう・者が・そんな初歩的な・ミスをする","者が・ともあろう・そんな初歩的な・ミスをする","ともあろう・そんな初歩的な・者が・ミスをする","そんな初歩的な・ともあろう・者が・ミスをする"], correct:0, penjelasan:"Susunan benar: 医者ともあろう者が、そんな初歩的なミスをするとは。(Tidak disangka seorang dokter membuat kesalahan sedasar itu)."},
    {mondai:"努力 ★＿＿＿ あり得ない。（1.成功は 2.なくして）", options:["なくして・成功は","成功は・なくして","あり得ない・成功は","成功は・あり得ない・なくして"], correct:0, penjelasan:"Susunan benar: 努力なくして成功はあり得ない。(Tanpa usaha, kesuksesan tidak mungkin ada)."},
    {mondai:"失敗する ★＿＿＿ できない。（1.ことなしに 2.成長する 3.ことは）", options:["ことなしに・成長する・ことは","成長する・ことなしに・ことは","ことは・ことなしに・成長する","成長する・ことは・ことなしに"], correct:0, penjelasan:"Susunan benar: 失敗することなしに、成長することはできない。(Tanpa gagal, tidak ada pertumbuhan)."},
    {mondai:"夢を ★＿＿＿ 捧げた。（1.がために 2.彼は全てを 3.叶えん）", options:["叶えん・がために・彼は全てを","がために・叶えん・彼は全てを","彼は全てを・叶えん・がために","叶えん・彼は全てを・がために"], correct:0, penjelasan:"Susunan benar: 夢を叶えんがために、彼は全てを捧げた。(Demi mewujudkan mimpinya, dia mengorbankan segalanya)."},
    {mondai:"専門家 ★＿＿＿ 知らない。（1.答えを 2.ですら 3.この問題の）", options:["ですら・この問題の・答えを","この問題の・答えを・ですら","答えを・ですら・この問題の","ですら・答えを・この問題の"], correct:0, penjelasan:"Susunan benar: 専門家ですら、この問題の答えを知らない。(Bahkan ahli pun tidak tahu jawabannya)."}
  ]
};
