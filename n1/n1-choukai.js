// ===================================================================
// Qategori Nihongo - Choukai (聴解 / Mendengarkan) JLPT N1
// Audio dibaca langsung oleh browser (Web Speech API, suara ja-JP).
// Tipe: kadai (課題理解), point (ポイント理解), sokuji (即時応答)
// Tiap baris dialog punya gender ("L"=laki-laki, "P"=perempuan) untuk pemilihan suara TTS.
// Topik N1: diskusi bisnis, berita, akademik tingkat lanjut, formal.
// ===================================================================
window.N1_CHOUKAI = [

  {tipe:"kadai", judul:"Rapat Strategi Perusahaan",
   dialog:[
     {speaker:"部長", gender:"L", jp:"今期の業績を踏まえて、来期の戦略を見直す必要があります。", romaji:"Konki no gyouseki o fumaete, raiki no senryaku o minaosu hitsuyou ga arimasu."},
     {speaker:"課長", gender:"P", jp:"具体的には、どの分野に力を入れるべきでしょうか。", romaji:"Gutaiteki ni wa, dono bunya ni chikara o ireru beki deshou ka."},
     {speaker:"部長", gender:"L", jp:"海外市場への展開を優先すべきだと考えています。国内市場は飽和状態ですから。", romaji:"Kaigai shijou e no tenkai o yuusen subeki da to kangaete imasu. Kokunai shijou wa houwa joutai desu kara."},
     {speaker:"課長", gender:"P", jp:"分かりました。来週までに海外展開の具体案をまとめます。", romaji:"Wakarimashita. Raishuu made ni kaigai tenkai no gutaian o matomemasu."}
   ],
   pertanyaan:"部長は来期、何を優先すべきだと考えていますか。",
   options:["海外市場への展開", "国内市場の拡大", "人材の採用", "コスト削減"],
   correct:0,
   penjelasan:"「海外市場への展開を優先すべきだ」と述べているので、優先事項は海外展開。"},

  {tipe:"kadai", judul:"学会発表の準備",
   dialog:[
     {speaker:"教授", gender:"L", jp:"君の研究は仮説の検証がまだ不十分だと思う。", romaji:"Kimi no kenkyuu wa kasetsu no kenshou ga mada fujuubun da to omou."},
     {speaker:"学生", gender:"P", jp:"確かにデータ数が少ないという指摘を受けました。追加の調査を行うべきでしょうか。", romaji:"Tashika ni deeta suu ga sukunai to iu shiteki o ukemashita. Tsuika no chousa o okonau beki deshou ka."},
     {speaker:"教授", gender:"L", jp:"そうだね。少なくともサンプル数を倍にして、結論の妥当性を高めたほうがいい。", romaji:"Sou da ne. Sukunakutomo sanpuru suu o bai ni shite, ketsuron no datousei o takameta hou ga ii."},
     {speaker:"学生", gender:"P", jp:"分かりました。来月の発表までに追加調査を終わらせます。", romaji:"Wakarimashita. Raigetsu no happyou made ni tsuika chousa o owarasemasu."}
   ],
   pertanyaan:"教授は学生に何を求めていますか。",
   options:["サンプル数を増やすこと", "発表を中止すること", "新しい仮説を立てること", "指導教官を変えること"],
   correct:0,
   penjelasan:"「サンプル数を倍にして」と言っているので、求めているのはサンプル数を増やすこと。"},

  {tipe:"kadai", judul:"ニュース解説：経済政策",
   dialog:[
     {speaker:"アナウンサー", gender:"P", jp:"本日、政府は新たな経済対策を発表しました。詳しく解説していただけますか。", romaji:"Honjitsu, seifu wa aratana keizai taisaku o happyou shimashita. Kuwashiku kaisetsu shite itadakemasu ka."},
     {speaker:"解説者", gender:"L", jp:"はい。今回の対策は中小企業への融資拡大が柱となっています。資金繰りに苦しむ企業を支援する狙いです。", romaji:"Hai. Konkai no taisaku wa chuushou kigyou e no yuushi kakudai ga hashira to natte imasu. Shikinguri ni kurushimu kigyou o shien suru nerai desu."},
     {speaker:"アナウンサー", gender:"P", jp:"効果はどの程度期待できるのでしょうか。", romaji:"Kouka wa dono teido kitai dekiru no deshou ka."},
     {speaker:"解説者", gender:"L", jp:"短期的には一定の効果があるでしょうが、根本的な構造改革にはつながらないという指摘もあります。", romaji:"Tankiteki ni wa ittei no kouka ga aru deshou ga, konponteki na kouzou kaikaku ni wa tsunagaranai to iu shiteki mo arimasu."}
   ],
   pertanyaan:"今回の経済対策の中心は何ですか。",
   options:["中小企業への融資拡大", "大企業への減税", "輸出の促進", "公共事業の拡大"],
   correct:0,
   penjelasan:"「中小企業への融資拡大が柱となっています」と言っているので、中心は融資拡大。"},

  {tipe:"point", judul:"契約交渉の結果",
   dialog:[
     {speaker:"A", gender:"L", jp:"先方との交渉、どうなりましたか。", romaji:"Senpou to no koushou, dou narimashita ka."},
     {speaker:"B", gender:"P", jp:"価格面では折り合いがつきましたが、納期については依然として合意に至っていません。", romaji:"Kakaku men de wa oriai ga tsukimashita ga, nouki ni tsuite wa izen to shite goui ni itatte imasen."},
     {speaker:"A", gender:"L", jp:"そうですか。納期の問題はいつ解決しそうですか。", romaji:"Sou desu ka. Nouki no mondai wa itsu kaiketsu shisou desu ka."},
     {speaker:"B", gender:"P", jp:"来週、再度協議する予定です。", romaji:"Raishuu, saido kyougi suru yotei desu."}
   ],
   pertanyaan:"現在、交渉はどの段階にありますか。",
   options:["価格は合意したが納期は未合意", "すべて合意済み", "価格も納期も未合意", "交渉は決裂した"],
   correct:0,
   penjelasan:"「価格面では折り合いがつきましたが、納期については…合意に至っていません」と言っているため。"},

  {tipe:"point", judul:"研究発表への質疑応答",
   dialog:[
     {speaker:"質問者", gender:"L", jp:"今回の調査結果は、サンプルの偏りによる影響を受けていないと言えるでしょうか。", romaji:"Konkai no chousa kekka wa, sanpuru no katayori ni yoru eikyou o ukete inai to ieru deshou ka."},
     {speaker:"発表者", gender:"P", jp:"ご指摘の通り、地域的な偏りがある可能性は否定できません。ただし、年齢層については均等に分布するよう配慮しました。", romaji:"Goshiteki no toori, chiikiteki na katayori ga aru kanousei wa hitei dekimasen. Tadashi, nenreisou ni tsuite wa kintou ni bunpu suru you hairyo shimashita."},
     {speaker:"質問者", gender:"L", jp:"なるほど。地域的な偏りについては今後の課題ということですね。", romaji:"Naruhodo. Chiikiteki na katayori ni tsuite wa kongo no kadai to iu koto desu ne."}
   ],
   pertanyaan:"発表者が今後の課題として認めているのは何ですか。",
   options:["地域的な偏りがある可能性", "年齢層の分布", "調査方法全体の誤り", "サンプル数の不足"],
   correct:0,
   penjelasan:"「地域的な偏りがある可能性は否定できません」と認めているため。"},

  {tipe:"point", judul:"環境問題についての討論",
   dialog:[
     {speaker:"A", gender:"P", jp:"再生可能エネルギーへの転換は急務だと思いますが、コストの問題をどう考えますか。", romaji:"Saisei kanou enerugii e no tenkan wa kyuumu da to omoimasu ga, kosuto no mondai o dou kangaemasu ka."},
     {speaker:"B", gender:"L", jp:"確かに初期投資は大きいですが、長期的に見れば化石燃料への依存を減らすほうが経済的だという試算もあります。", romaji:"Tashika ni shoki toushi wa ookii desu ga, choukiteki ni mireba kaseki nenryou e no izon o herasu hou ga keizaiteki da to iu shisan mo arimasu."},
     {speaker:"A", gender:"P", jp:"つまり、短期的な負担より長期的な利益を重視すべきだということですね。", romaji:"Tsumari, tankiteki na futan yori choukiteki na rieki o juushi subeki da to iu koto desu ne."}
   ],
   pertanyaan:"Bの主張の要点は何ですか。",
   options:["長期的には再生可能エネルギーのほうが経済的", "化石燃料のほうが常に安い", "再生可能エネルギーは不要", "コストの問題は解決不可能"],
   correct:0,
   penjelasan:"「長期的に見れば…経済的だ」と述べているため、長期的には再生可能エネルギーが有利という主張。"},

  {tipe:"point", judul:"人事評価についての相談",
   dialog:[
     {speaker:"上司", gender:"L", jp:"今期の評価だが、君の提案した企画は顕著な成果を上げた。ただ、チーム内の連携にはまだ課題が残っている。", romaji:"Konki no hyouka da ga, kimi no teian shita kikaku wa kenchona seika o ageta. Tada, chiimu-nai no renkei ni wa mada kadai ga nokotte iru."},
     {speaker:"部下", gender:"P", jp:"ご指摘ありがとうございます。連携の面については、次期から改善に取り組みます。", romaji:"Goshiteki arigatou gozaimasu. Renkei no men ni tsuite wa, jiki kara kaizen ni torikumimasu."}
   ],
   pertanyaan:"上司が指摘した課題は何ですか。",
   options:["チーム内の連携", "企画の成果", "勤務態度", "報告書の内容"],
   correct:0,
   penjelasan:"「チーム内の連携にはまだ課題が残っている」と指摘しているため。"},

  {tipe:"sokuji", judul:"応答1",
   dialog:[{speaker:"A", gender:"L", jp:"この計画、少々無理があるのではないでしょうか。", romaji:"Kono keikaku, shoushou muri ga aru no de wa nai deshou ka."}],
   pertanyaan:"最も自然な返事はどれですか。",
   options:["おっしゃる通りです。もう一度見直しましょう。", "はい、とても美味しいです。", "いいえ、天気がいいです。", "それは残念なことです。"],
   correct:0,
   penjelasan:"計画の懸念点を指摘されているので、同意して見直す提案が自然な応答。"},

  {tipe:"sokuji", judul:"応答2",
   dialog:[{speaker:"A", gender:"P", jp:"この報告書、至急仕上げていただけますか。", romaji:"Kono houkokusho, shikyuu shiagete itadakemasu ka."}],
   pertanyaan:"最も自然な返事はどれですか。",
   options:["承知しました。今日中に仕上げます。", "どういたしまして。", "それはおめでとうございます。", "はい、暑いですね。"],
   correct:0,
   penjelasan:"至急の依頼に対して、承諾と期限を伝える応答が自然。"},

  {tipe:"sokuji", judul:"応答3",
   dialog:[{speaker:"A", gender:"L", jp:"この件については、担当者に確認せずにはいられませんね。", romaji:"Kono ken ni tsuite wa, tantousha ni kakunin sezu ni wa iraremasen ne."}],
   pertanyaan:"最も自然な返事はどれですか。",
   options:["ええ、私もそう思います。すぐに連絡してみます。", "いいえ、それは安いです。", "はい、とても眠いです。", "それはすごく楽しいです。"],
   correct:0,
   penjelasan:"確認の必要性に同意し、行動を申し出る応答が自然。"},

  {tipe:"sokuji", judul:"応答4",
   dialog:[{speaker:"A", gender:"P", jp:"彼の発言には矛盾が感じられませんでしたか。", romaji:"Kare no hatsugen ni wa mujun ga kanjiraremasendeshita ka."}],
   pertanyaan:"最も自然な返事はどれですか。",
   options:["確かに、前の説明と食い違っている部分がありました。", "はい、とても甘いです。", "いいえ、近いです。", "それはよかったですね。"],
   correct:0,
   penjelasan:"矛盾を感じたかという問いに対して、具体的に食い違いを指摘する応答が自然。"},

  {tipe:"sokuji", judul:"応答5",
   dialog:[{speaker:"A", gender:"L", jp:"この結果を踏まえて、今後どう対応すべきでしょうか。", romaji:"Kono kekka o fumaete, kongo dou taiou subeki deshou ka."}],
   pertanyaan:"最も自然な返事はどれですか。",
   options:["まずは原因を分析し、対策を検討する必要があると思います。", "はい、とても寒いです。", "いいえ、好きではありません。", "それはすばらしい天気ですね。"],
   correct:0,
   penjelasan:"今後の対応を聞かれているので、具体的な方針（原因分析と対策検討）を述べる応答が自然。"}
];
