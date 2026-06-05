import React from 'react';

const solutions = [
  {
    id: 'faster-decisions',
    title: 'Ambil Keputusan Lebih Cepat & Tepat',
    problem: 'Sebagai pengiklan, Anda terus-menerus tenggelam dalam lautan data. Anda harus mengekspor CSV dari Meta, mencocokkannya dengan data Google Analytics, memuatnya ke tabulasi spreadsheet yang rumit, dan berdebat dengan metrik yang saling bertentangan. Proses panjang ini menyebabkan Analysis Paralysis—menunda keputusan kritis yang seharusnya dieksekusi hari ini juga, sehingga momentum emas terlewatkan.',
    solution: 'ScalePilot bertindak sebagai analis data pribadi Anda yang bekerja dalam hitungan milidetik. Kami memotong semua kebisingan dashboard konvensional. Kami secara otomatis mensintesis ribuan baris data metrik menjadi sebuah verdict (keputusan akhir: Scale, Hold, Kill) yang jernih, transparan, dan dapat langsung ditindaklanjuti.',
    features: 'Verdict Engine, Action Hub',
    benefit: 'Dapatkan kembali jam kerja produktif Anda. Anda dapat melakukan rutinitas optimasi harian sambil meminum kopi pagi Anda dalam waktu 5 menit, dan bertindaklah mengkapitalisasi tren winning campaign berhari-hari sebelum kompetitor Anda menyadarinya.',
    cta: 'Percepat Alur Kerja Anda'
  },
  {
    id: 'scale-winning',
    title: 'Scale Kampanye Pemenang Tanpa Menghancurkan Performa',
    problem: 'Ini adalah dilema klasik Meta Ads: Anda akhirnya menemukan satu iklan (creative atau audience) yang bekerja dengan luar biasa di anggaran rendah. Namun, impian buruk terjadi setiap kali Anda melipatgandakan anggarannya; performanya hancur berantakan. Algoritma kebingungan, CPA meroket tajam, ROAS anjlok, dan momentum serta potensi pendapatan besar lenyap seketika.',
    solution: 'Tinggalkan metode scaling yang serampangan. ScalePilot memungkinkan pendekatan scaling yang inkremental, tersistem, terpantau detik demi detik, dan direkomendasikan penuh oleh analisis kuantitatif AI. Kami melacak metrik Marginal ROAS untuk memastikan Anda memaksimalkan profitabilitas, selagi perlahan membuka keran volume pengeluaran.',
    features: 'Scale Tracker, Verdict Engine',
    benefit: 'Keluar dari zona stagnan. Tembus batas stagnasi pendapatan (revenue plateau) bisnis Anda secara terukur, konsisten, terprediksi, dan yang terpenting: terbukti menguntungkan secara Net Margin.',
    cta: 'Buka Potensi Skala Anda'
  },
  {
    id: 'fix-underperforming',
    title: 'Perbaiki Iklan yang Boncos Sebelum Terlambat',
    problem: 'Ada kalanya kampanye andalan yang biasa menjadi tulang punggung omzet Anda tiba-tiba mati perlahan. Anda terus membakar uang pada iklan yang dulunya bekerja sangat baik ini, namun Anda buta terhadap alasan pastinya. Apakah audiens sudah bosan? Apakah penawarannya basi? Ketidaktahuan ini membuat Anda bingung bagaimana cara memulihkan kinerjanya.',
    solution: 'Platform kami menawarkan identifikasi instan terhadap fenomena creative fatigue (kelelahan materi iklan). ScalePilot tidak hanya memberitahu Anda bahwa performa sedang turun, tetapi juga menyoroti titik masalahnya (seperti frekuensi yang terlalu tinggi di audiens sempit) dan menyajikan langkah actionable langsung untuk melakukan rotasi iklan, pivot angle, atau jeda paksa untuk pemulihan audiens.',
    features: 'Verdict Engine, Action Hub',
    benefit: 'Identifikasi dan potong kerugian secara instan. Matikan iklan yang menguras kas (losers) dengan tanpa ragu, serta deteksi kelelahan kampanye pemenang (fatigue) sejak dini sebelum mereka mengisap habis sisa budget harian Anda tanpa memberikan hasil.',
    cta: 'Hentikan Keboncosan Sekarang'
  },
  {
    id: 'reduce-wasted',
    title: 'Kurangi Pemborosan Iklan & Lindungi Kas Perusahaan',
    problem: 'Coba hitung berapa banyak uang yang hilang bulan lalu karena Anda (atau staf agensi Anda) telat mematikan kampanye yang gagal. Terlalu sering pemasar membiarkan iklan berkinerja buruk berjalan terlalu lama dengan harapan kosong bahwa esok hari performanya akan membaik. Keterlambatan pengecekan 1-2 hari saja sudah berujung pada kerugian jutaan rupiah yang tidak bisa dikembalikan.',
    solution: 'Kami menggantikan harapan kosong dengan disiplin berbasis data. ScalePilot menerapkan kontrol anggaran yang sangat ketat melalui fitur pembatasan (kill rules otomatis), pembatalan skala instan (rollback), dan peringatan proaktif untuk menghentikan pendanaan pada setiap sen yang gagal mencapai target Return on Ad Spend bisnis Anda.',
    features: 'Budget Revert, Verdict Engine',
    benefit: 'Pertahanan yang solid menciptakan ruang untuk pertumbuhan. Lindungi margin profit perusahaan Anda secara agresif, potong kebocoran anggaran yang tak terlihat, dan pastikan setiap lembar rupiah yang Anda investasikan benar-benar bekerja sekeras mungkin untuk mendatangkan omzet riil bagi bisnis Anda.',
    cta: 'Lindungi Margin Profit Anda'
  }
];

const SolList: React.FC = () => {
  return (
    <div className="wrapper py-20">
      <div className="max-w-(--mw) mx-auto relative border-x border-n20">
        <div className="grid gap-16 md:gap-24">
          {solutions.map((item) => (
            <div key={item.id} id={item.id} className="p-6 md:p-12 border-y border-n20 bg-n10 relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-2 h-full bg-brand"></div>
               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-n100 mb-8 max-w-4xl">{item.title}</h2>
               
               <div className="grid md:grid-cols-2 gap-12">
                 <div>
                    <h3 className="text-xl font-semibold text-spred mb-3 flex items-center gap-2">
                       The Problem
                    </h3>
                    <p className="text-n70 leading-relaxed text-lg">{item.problem}</p>
                 </div>
                 <div>
                    <h3 className="text-xl font-semibold text-spgreen mb-3 flex items-center gap-2">
                       The Solution
                    </h3>
                    <p className="text-n100 leading-relaxed text-lg font-medium">{item.solution}</p>
                 </div>
               </div>

               <div className="mt-12 pt-8 border-t border-n20 flex flex-col md:flex-row gap-8 justify-between items-start md:items-center">
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-n60 font-semibold mb-2">Key Benefit</h4>
                    <p className="text-n100 font-semibold max-w-2xl">{item.benefit}</p>
                  </div>
                  <div className="shrink-0 text-left md:text-right">
                    <h4 className="text-sm uppercase tracking-wider text-n60 font-semibold mb-2">Fitur Pendukung</h4>
                    <p className="text-brand font-bold">{item.features}</p>
                  </div>
               </div>
               
               <div className="mt-8 pt-8 border-t border-n20">
                  <a href="#" className="inline-flex items-center justify-center bg-brand hover:bg-brand-dark text-white font-bold py-4 px-8 rounded-full transition-colors duration-200">
                    {item.cta}
                  </a>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolList;
