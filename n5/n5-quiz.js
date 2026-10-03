// ===================================================================
// Qategori Nihongo - Kuis Bunpou (文法クイズ) JLPT N5
// Kategori: kanji_yomi, hyouki, bunmyaku, bunpou, kumitate
// Skema tiap soal: {mondai, options:[4], correct:idx, penjelasan}
// ===================================================================
window.N5_QUIZ = {

  // ---------------- 漢字読み (Baca Kanji) ----------------
  kanji_yomi: [
    {mondai:"毎朝＿学校＿に行きます。", options:["がっこう","がこう","がっこ","かっこう"], correct:0, penjelasan:"学校 dibaca 'gakkou' artinya sekolah."},
    {mondai:"＿父＿は先生です。", options:["ちち","はは","あに","あね"], correct:0, penjelasan:"父 dibaca 'chichi' artinya ayah (sendiri)."},
    {mondai:"＿今日＿は暑いです。", options:["きょう","きのう","あした","いま"], correct:0, penjelasan:"今日 dibaca 'kyou' artinya hari ini."},
    {mondai:"この＿本＿は面白いです。", options:["ほん","ぼん","もと","ほう"], correct:0, penjelasan:"本 dibaca 'hon' artinya buku."},
    {mondai:"＿水＿を飲みます。", options:["みず","みす","すい","みづ"], correct:0, penjelasan:"水 dibaca 'mizu' artinya air."},
    {mondai:"駅の＿右＿に銀行があります。", options:["みぎ","ひだり","うえ","した"], correct:0, penjelasan:"右 dibaca 'migi' artinya kanan."},
    {mondai:"＿新しい＿靴を買いました。", options:["あたらしい","ふるい","おおきい","ちいさい"], correct:0, penjelasan:"新しい dibaca 'atarashii' artinya baru."},
    {mondai:"＿友達＿と遊びます。", options:["ともだち","ゆうじん","かぞく","せんせい"], correct:0, penjelasan:"友達 dibaca 'tomodachi' artinya teman."},
    {mondai:"毎日＿勉強＿します。", options:["べんきょう","べんきょ","めんきょう","べんぎょう"], correct:0, penjelasan:"勉強 dibaca 'benkyou' artinya belajar."},
    {mondai:"＿病院＿へ行きます。", options:["びょういん","びよういん","ほういん","びょうい"], correct:0, penjelasan:"病院 dibaca 'byouin' artinya rumah sakit."},
    {mondai:"＿時間＿がありません。", options:["じかん","じがん","ときま","じこく"], correct:0, penjelasan:"時間 dibaca 'jikan' artinya waktu."},
    {mondai:"この問題は＿難しい＿です。", options:["むずかしい","やさしい","たのしい","おもしろい"], correct:0, penjelasan:"難しい dibaca 'muzukashii' artinya sulit."}
  ],

  // ---------------- 表記 (Pilih Kanji yang Tepat) ----------------
  hyouki: [
    {mondai:"わたしは がくせい です。", options:["学生","学性","字生","楽生"], correct:0, penjelasan:"'gakusei' (pelajar) ditulis 学生."},
    {mondai:"あには かいしゃいんです。", options:["会社員","会社院","回社員","会車員"], correct:0, penjelasan:"'kaishain' (karyawan) ditulis 会社員."},
    {mondai:"きょうは あめ です。", options:["雨","雪","雲","風"], correct:0, penjelasan:"'ame' (hujan) ditulis 雨."},
    {mondai:"この みせは やすいです。", options:["安い","高い","低い","速い"], correct:0, penjelasan:"'yasui' (murah) ditulis 安い."},
    {mondai:"にほんごを はなします。", options:["話します","語します","言します","話きます"], correct:0, penjelasan:"'hanashimasu' (berbicara) ditulis 話します."},
    {mondai:"まいにち しんぶんを よみます。", options:["新聞","新文","親聞","新間"], correct:0, penjelasan:"'shinbun' (koran) ditulis 新聞."},
    {mondai:"こどもが こうえんで あそびます。", options:["子供","子共","子伴","小供"], correct:0, penjelasan:"'kodomo' (anak) ditulis 子供."},
    {mondai:"えきの ちかくに ぎんこうが あります。", options:["銀行","金行","銀航","銀校"], correct:0, penjelasan:"'ginkou' (bank) ditulis 銀行."},
    {mondai:"あさ はやく おきます。", options:["朝","昼","夜","今"], correct:0, penjelasan:"'asa' (pagi) ditulis 朝."},
    {mondai:"この かばんは たかいです。", options:["高い","多い","長い","大きい"], correct:0, penjelasan:"'takai' (mahal) ditulis 高い."},
    {mondai:"せんせいに しつもんします。", options:["質問","質門","質間","質聞"], correct:0, penjelasan:"'shitsumon' (pertanyaan) ditulis 質問."},
    {mondai:"でんわを かけます。", options:["電話","電詰","電語","電活"], correct:0, penjelasan:"'denwa' (telepon) ditulis 電話."}
  ],

  // ---------------- 文脈規定 (Kata Sesuai Konteks) ----------------
  bunmyaku: [
    {mondai:"毎朝7時に＿＿＿。", options:["起きます","寝ます","休みます","働きます"], correct:0, penjelasan:"起きます (bangun) cocok dengan konteks pagi jam 7."},
    {mondai:"お腹がすいたので、ご飯を＿＿＿。", options:["食べます","飲みます","見ます","買います"], correct:0, penjelasan:"食べます (makan) cocok dengan konteks lapar."},
    {mondai:"喉が渇いたので、水を＿＿＿。", options:["飲みます","食べます","聞きます","読みます"], correct:0, penjelasan:"飲みます (minum) cocok dengan konteks haus."},
    {mondai:"この服は＿＿＿ので、買いません。", options:["高い","安い","易しい","楽しい"], correct:0, penjelasan:"高い (mahal) cocok dengan alasan tidak membeli."},
    {mondai:"今日は＿＿＿ので、セーターを着ます。", options:["寒い","暑い","にぎやか","静か"], correct:0, penjelasan:"寒い (dingin) cocok dengan alasan memakai sweater."},
    {mondai:"図書館はとても＿＿＿です。", options:["静か","にぎやか","有名","便利"], correct:0, penjelasan:"静か (tenang) cocok dengan sifat perpustakaan."},
    {mondai:"この道をまっすぐ行って、＿＿＿に曲がってください。", options:["右","上","中","前"], correct:0, penjelasan:"右 (kanan) cocok dengan instruksi arah jalan."},
    {mondai:"彼はいつも元気で、＿＿＿な人です。", options:["明るい","暗い","低い","少ない"], correct:0, penjelasan:"明るい (ceria) cocok dengan deskripsi orang yang selalu sehat."},
    {mondai:"日曜日は仕事がないので、＿＿＿です。", options:["暇","忙しい","大変","複雑"], correct:0, penjelasan:"暇 (senggang) cocok dengan konteks tidak ada pekerjaan."},
    {mondai:"この問題は＿＿＿ので、すぐ分かりました。", options:["易しい","難しい","重い","長い"], correct:0, penjelasan:"易しい (mudah) cocok dengan 'langsung mengerti'."},
    {mondai:"電車の中に人が＿＿＿います。", options:["たくさん","少し","あまり","全然"], correct:0, penjelasan:"たくさん (banyak) cocok untuk menggambarkan kereta penuh orang."},
    {mondai:"この店の服は＿＿＿、よく買います。", options:["安いので","高いので","遠いので","暗いので"], correct:0, penjelasan:"安いので (karena murah) cocok dengan kebiasaan sering membeli."},
    {mondai:"友達が来るので、部屋を＿＿＿。", options:["掃除します","洗います","捨てます","作ります"], correct:0, penjelasan:"掃除します (membersihkan) cocok dengan konteks menyambut tamu."},
    {mondai:"毎日運動しているので、とても＿＿＿です。", options:["元気","不便","複雑","危険"], correct:0, penjelasan:"元気 (sehat) cocok dengan kebiasaan berolahraga."},
    {mondai:"今朝は寝坊したので、学校に＿＿＿。", options:["遅れました","急ぎました","休みました","帰りました"], correct:0, penjelasan:"遅れました (terlambat) cocok dengan konteks bangun kesiangan."}
  ],

  // ---------------- 文法 (Pola Tata Bahasa) ----------------
  bunpou: [
    {mondai:"私＿＿＿学生です。", options:["は","を","に","で"], correct:0, penjelasan:"は menandai topik kalimat 'saya'."},
    {mondai:"パン＿＿＿食べます。", options:["を","が","に","と"], correct:0, penjelasan:"を menandai objek yang dikenai tindakan 'makan'."},
    {mondai:"7時＿＿＿起きます。", options:["に","で","を","と"], correct:0, penjelasan:"に menunjukkan waktu tertentu."},
    {mondai:"公園＿＿＿遊びます。", options:["で","に","を","へ"], correct:0, penjelasan:"で menunjukkan tempat terjadinya aktivitas."},
    {mondai:"これは私の＿＿＿です。", options:["本","の本","本の","を本"], correct:0, penjelasan:"'kepunyaan saya' cukup 私の本, bukan tambahan partikel lain."},
    {mondai:"今日は寒＿＿＿です。", options:["く","い","くない","かった"], correct:1, penjelasan:"Kalimat positif biasa kata sifat -i memakai bentuk dasar + です, yaitu 寒い."},
    {mondai:"この部屋は静か＿＿＿。", options:["です","いです","くないです","かったです"], correct:0, penjelasan:"Kata sifat -na memakai です langsung tanpa な di akhir kalimat."},
    {mondai:"ここに名前を書いて＿＿＿。", options:["ください","ましょう","ません","たいです"], correct:0, penjelasan:"〜てください = meminta sopan untuk melakukan sesuatu."},
    {mondai:"日本へ行き＿＿＿です。", options:["たい","ます","ません","ました"], correct:0, penjelasan:"〜たい = menyatakan keinginan sendiri."},
    {mondai:"一緒に映画を見＿＿＿か。", options:["ません","ます","たい","でした"], correct:0, penjelasan:"〜ませんか = mengajak dengan sopan."},
    {mondai:"猫より犬の＿＿＿好きです。", options:["ほうが","ほど","ように","だけ"], correct:0, penjelasan:"〜より〜のほうが = pola perbandingan dasar."},
    {mondai:"雨が降っている＿＿＿、傘を持って行きます。", options:["ので","でも","なら","ば"], correct:0, penjelasan:"ので menyatakan alasan sederhana."},
    {mondai:"宿題をして＿＿＿、遊びます。", options:["から","まで","ので","でも"], correct:0, penjelasan:"〜てから = setelah melakukan sesuatu."},
    {mondai:"音楽を聞き＿＿＿勉強します。", options:["ながら","てから","までに","のに"], correct:0, penjelasan:"〜ながら = melakukan dua hal bersamaan."},
    {mondai:"漢字を書く＿＿＿ができます。", options:["こと","もの","とき","ところ"], correct:0, penjelasan:"〜ことができる = menyatakan kemampuan melakukan sesuatu."}
  ],

  // ---------------- 文の組み立て (Susunan Kalimat) ----------------
  kumitate: [
    {mondai:"これ ★＿＿＿ です。（1.私の 2.本）", options:["私の・本","本・私の","です・私の","私の・です"], correct:0, penjelasan:"Susunan benar: これは私の本です。(Ini buku saya)."},
    {mondai:"毎朝 ★＿＿＿ 起きます。（1.7時に 2.学校へ行く前に）", options:["7時に","学校へ行く前に","起きます・7時に","7時に・起きます"], correct:0, penjelasan:"Susunan benar: 毎朝7時に起きます。(Setiap pagi saya bangun jam 7)."},
    {mondai:"図書館 ★＿＿＿ 静かです。（1.は 2.とても）", options:["は・とても","とても・は","静かです・は","は・静かです"], correct:0, penjelasan:"Susunan benar: 図書館はとても静かです。(Perpustakaan itu sangat tenang)."},
    {mondai:"友達 ★＿＿＿ 行きます。（1.と 2.映画を見に）", options:["と・映画を見に","映画を見に・と","行きます・と","と・行きます"], correct:0, penjelasan:"Susunan benar: 友達と映画を見に行きます。(Saya pergi menonton film bersama teman)."},
    {mondai:"この問題 ★＿＿＿ です。（1.は 2.とても難しい）", options:["は・とても難しい","とても難しい・は","です・は","は・です"], correct:0, penjelasan:"Susunan benar: この問題はとても難しいです。(Soal ini sangat sulit)."},
    {mondai:"駅の近く ★＿＿＿ あります。（1.に 2.銀行が）", options:["に・銀行が","銀行が・に","あります・に","に・あります"], correct:0, penjelasan:"Susunan benar: 駅の近くに銀行があります。(Ada bank dekat stasiun)."},
    {mondai:"宿題 ★＿＿＿ 遊びます。（1.をしてから 2.友達と）", options:["をしてから・友達と","友達と・をしてから","遊びます・をしてから","をしてから・遊びます"], correct:0, penjelasan:"Susunan benar: 宿題をしてから、友達と遊びます。(Setelah mengerjakan PR, saya bermain dengan teman)."},
    {mondai:"日本語 ★＿＿＿ 話せます。（1.が 2.少し）", options:["が・少し","少し・が","話せます・が","が・話せます"], correct:0, penjelasan:"Susunan benar: 日本語が少し話せます。(Saya bisa berbicara bahasa Jepang sedikit)."},
    {mondai:"猫 ★＿＿＿ 犬のほうが好きです。（1.より 2.私は）", options:["より・私は","私は・より","好きです・より","より・好きです"], correct:0, penjelasan:"Susunan benar: 私は猫より犬のほうが好きです。(Saya lebih suka anjing daripada kucing)."},
    {mondai:"寝る ★＿＿＿ 磨きます。（1.前に 2.歯を）", options:["前に・歯を","歯を・前に","磨きます・前に","前に・磨きます"], correct:0, penjelasan:"Susunan benar: 寝る前に歯を磨きます。(Saya gosok gigi sebelum tidur)."}
  ]
};
