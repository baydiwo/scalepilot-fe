const fs = require('fs');
const path = require('path');

const en = {
  Nav: {
    solutions: "Solutions",
    features: "Features",
    pricing: "Pricing",
    resources: "Resources",
    startScaling: "Start scaling now",
    bookDemo: "Book a Demo",
    featuresItems: [
      {
        title: 'Verdict Engine',
        description: 'Real-time AI-powered decision system that moves beyond simple data.'
      },
      {
        title: 'Action Hub',
        description: 'One-click command center for quick budget boosts and manual adjustments.'
      },
      {
        title: 'Scale Tracker',
        description: 'Full historical audit of every scaling decision and its marginal ROI impact.'
      },
      {
        title: 'Budget Revert',
        description: 'Instantly undo underperforming scales and restore previous budget levels.'
      }
    ],
    solutionsItems: [
      {
        title: "Make faster decisions",
        description: "Stop analyzing ads. Start acting on them."
      },
      {
        title: "Scale Winning Campaigns",
        description: "You have a winner. Now don't kill it, because winning is easy, scaling is hard."
      },
      {
        title: "Fix Underperforming Ads",
        "description": "Get clear, actionable fixes for every underperforming campaign."
      },
      {
        title: "Reduce Wasted Ad Spend",
        description: "You're losing money, but most of the time you just don't see it yet."
      }
    ]
  },
  Hero: {
    headline1: "Decide Faster.",
    headline1Span: "Scale Bigger.",
    description: "ScalePilot is the real-time verdict engine for Meta Ads. Scale winners instantly and stop losers before they burn your profits. Built for those who demand precision over data-noise.",
    startScaling: "Start scaling now",
    exploreFeatures: "Explore features"
  },
  Problem: {
    tag: "The Problem",
    headline: "Monitoring isn't Scaling.",
    headlineSpan: "It's Reacting.",
    description: "Most tools give you more data. ScalePilot gives you more decisions. Don't just watch your spend, command it. Because every minute you spend 'analyzing' is a minute your competitor spends scaling."
  },
  SolutionSection: {
    tag: "The Solution",
    headline: "Your Data. Our Engine.",
    headlineSpan: "Zero Guesswork.",
    description: "ScalePilot provides you with the complete suite that helps you make better decisions to optimize your ad spend and get better ROAS. Connect data from your Meta ad platform and get AI-powered insights to improve your campaigns."
  },
  Testimonials: {
    tag: "User's Stories",
    headline: "Others has scaled up.",
    headlineSpan: "Successfully.",
    description: "From business owners, to professional marketers, to managers handling multiple clients with hundreds of ad accounts. Here's what they have to say about ScalePilot."
  },
  Features: {
    verdictEngine: {
      title: "Verdict Engine",
      subtitle: "Automated & Data-Driven Ad Decisions at Your Fingertips.",
      description: "Leave behind the guesswork and exhausting evaluation meetings. ScalePilot's Verdict Engine analyzes thousands of your ad data points in real-time and provides definitive mathematical instructions: Scale Up, Hold, or Kill.<br/><br/><strong>Why This Feature Matters:</strong> Most advertisers spend hours trying to understand why a campaign suddenly loses money. Our engine processes complex calculations in the background, comparing historical performance with today's metrics, so you can immediately focus on execution.",
      ctaText: "See How This Engine Works"
    },
    actionHub: {
      title: "Action Hub",
      subtitle: "The Unified Command Center for All Your Meta Ad Operations.",
      description: "Why open dozens of slow, heavy Meta Ads Manager tabs? Execute, schedule, and review all critical changes to your ads from a single lightning-fast dashboard designed for speed.<br/><br/><strong>Why This Feature Matters:</strong> Execution speed is key in the digital ad world. Meta Ads Manager is often laggy and requires multiple clicks just to pause a single ad. Action Hub turns a 30-minute workflow into a 30-second task.",
      ctaText: "Streamline Your Workflow"
    },
    scaleTracker: {
      title: "Scale Tracker",
      subtitle: "Grow Your Winning Ads with Confidence & Total Control.",
      description: "Adding budget (Scaling) is often the most terrifying moment because it risks breaking Meta's algorithm. Precisely monitor how your campaign performance reacts every second after you increase the budget.<br/><br/><strong>Why This Feature Matters:</strong> Many businesses are stuck at a revenue plateau because they are afraid to scale up. Scale Tracker eliminates that fear by providing total visibility, much like an aircraft's cockpit instruments.",
      ctaText: "Start Scaling Today"
    },
    budgetRevert: {
      title: "Budget Revert",
      subtitle: "Scale Without Fear. Undo Mistakes Instantly.",
      description: "This is the strongest financial safety net for your business. If a scaling decision suddenly ruins your ad performance, revert the budget back to its previous safe point in mere seconds.<br/><br/><strong>Why This Feature Matters:</strong> Every time you increase a budget, Meta has the potential to reset the Learning Phase, which can cause Cost Per Acquisition (CPA) to spike dramatically. With Budget Revert, you have an \"Undo Button\" for mistakes that could cost millions of rupiah.",
      ctaText: "Scale Safely Now"
    }
  },
  Solutions: {
    fasterDecisions: {
      title: "Make Decisions Faster",
      problem: "As an advertiser, you are constantly drowning in a sea of data. You have to export CSVs from Meta, match them with Google Analytics data, load them into complex spreadsheets, and argue over conflicting metrics. This lengthy process causes Analysis Paralysis—delaying critical decisions that should be executed today, causing golden momentum to slip away.",
      solution: "ScalePilot acts as your personal data analyst working in milliseconds. We cut through all the noise of conventional dashboards. We automatically synthesize thousands of rows of metric data into a crystal clear, transparent, and instantly actionable verdict (Scale, Hold, Kill).",
      benefit: "Reclaim your productive hours. You can perform your daily optimization routine while drinking your morning coffee in 5 minutes, and take action to capitalize on winning campaign trends days before your competitors even notice them.",
      cta: "Speed Up Your Workflow"
    },
    scaleWinning: {
      title: "Scale Winning Campaigns",
      problem: "It's the classic Meta Ads dilemma: You finally find one ad (creative or audience) that works exceptionally well on a low budget. But the nightmare unfolds every time you double the budget; the performance falls apart. The algorithm gets confused, CPA skyrockets, ROAS plummets, and your momentum along with massive revenue potential vanishes instantly.",
      solution: "Abandon reckless scaling methods. ScalePilot enables an incremental, systematized scaling approach that is monitored second by second and fully recommended by quantitative AI analysis. We track Marginal ROAS metrics to ensure you maximize profitability while slowly opening the tap on expenditure volume.",
      benefit: "Break out of the stagnant zone. Shatter your business's revenue plateau in a measurable, consistent, predictable way, and most importantly: proven to be profitable by Net Margin.",
      cta: "Unlock Your Scaling Potential"
    },
    fixUnderperforming: {
      title: "Fix Underperforming Ads",
      problem: "There are times when a flagship campaign that usually serves as the backbone of your revenue suddenly dies a slow death. You continue to burn money on this once highly-effective ad, but you are blind to the exact reason why. Are audiences bored? Is the offer stale? This ignorance leaves you confused about how to recover its performance.",
      solution: "Our platform offers instant identification of the creative fatigue phenomenon. ScalePilot doesn't just tell you that performance is dropping; it highlights the core issue (such as frequency being too high within a narrow audience) and provides immediate actionable steps to rotate ads, pivot angles, or force a pause to let the audience recover.",
      benefit: "Identify and cut your losses instantly. Kill cash-draining ads (losers) without hesitation, and detect winning campaign fatigue early before they suck up the rest of your daily budget with zero returns.",
      cta: "Stop the Bleeding Now"
    },
    reduceWasted: {
      title: "Reduce Wasted Ad Spend",
      problem: "Try to calculate how much money was lost last month because you (or your agency staff) were late to pause a failing campaign. Far too often, marketers let poorly performing ads run for too long with the false hope that performance will improve tomorrow. A checking delay of just 1-2 days already results in millions of rupiah in irrecoverable losses.",
      solution: "We replace false hope with data-driven discipline. ScalePilot implements ultra-strict budget controls via automated kill rules, instant scale reversals (rollback), and proactive alerts to halt funding on every cent that fails to hit your business's Return on Ad Spend targets.",
      benefit: "Solid defense creates room for growth. Aggressively protect your company's profit margins, cut invisible budget leaks, and ensure every single rupiah you invest works as hard as possible to generate real revenue for your business.",
      cta: "Protect Your Profit Margins"
    }
  }
};

const id = {
  Nav: {
    solutions: "Solusi",
    features: "Fitur",
    pricing: "Harga",
    resources: "Sumber Daya",
    startScaling: "Mulai Scale Sekarang",
    bookDemo: "Jadwalkan Demo",
    featuresItems: [
      {
        title: 'Verdict Engine',
        description: 'Sistem keputusan AI real-time yang melampaui data biasa.'
      },
      {
        title: 'Action Hub',
        description: 'Pusat komando sekali klik untuk penyesuaian manual dan peningkatan budget.'
      },
      {
        title: 'Scale Tracker',
        description: 'Audit historis lengkap untuk setiap keputusan scaling dan dampaknya pada ROI.'
      },
      {
        title: 'Budget Revert',
        description: 'Batalkan peningkatan budget yang buruk secara instan.'
      }
    ],
    solutionsItems: [
      {
        title: "Ambil Keputusan Lebih Cepat & Tepat",
        description: "Berhenti menganalisis iklan. Mulai bertindak dengan tepat."
      },
      {
        title: "Scale Kampanye Pemenang",
        description: "Anda punya winner. Jangan dibunuh karena salah scale."
      },
      {
        title: "Perbaiki Iklan Boncos",
        description: "Dapatkan solusi instan untuk setiap kampanye yang menurun."
      },
      {
        title: "Kurangi Pemborosan Iklan",
        description: "Hentikan kebocoran anggaran yang tak terlihat sebelum kas terkuras."
      }
    ]
  },
  Hero: {
    headline1: "Decide Faster.",
    headline1Span: "Scale Bigger.",
    description: "ScalePilot adalah mesin keputusan real-time untuk Meta Ads. Scale pemenang secara instan dan matikan yang boncos sebelum membakar profit Anda.",
    startScaling: "Mulai Scale Sekarang",
    exploreFeatures: "Eksplorasi Fitur"
  },
  Problem: {
    tag: "The Problem",
    headline: "Memantau bukanlah Scaling.",
    headlineSpan: "Itu hanya Bereaksi.",
    description: "Sebagian besar alat memberi Anda lebih banyak data. ScalePilot memberi Anda lebih banyak keputusan. Jangan hanya perhatikan pengeluaran Anda, kendalikan. Karena setiap menit yang Anda habiskan untuk 'menganalisis' adalah menit yang dihabiskan pesaing Anda untuk scaling."
  },
  SolutionSection: {
    tag: "The Solution",
    headline: "Data Anda. Mesin Kami.",
    headlineSpan: "Tanpa Tebak-tebakan.",
    description: "ScalePilot memberi Anda solusi lengkap yang membantu Anda mengambil keputusan lebih baik untuk optimasi budget dan mencapai ROAS lebih baik."
  },
  Testimonials: {
    tag: "User's Stories",
    headline: "Mereka telah berhasil Scale Up.",
    headlineSpan: "Dengan Sukses.",
    description: "Dari pemilik bisnis, pemasar profesional, hingga manajer yang menangani ratusan akun iklan. Berikut kata mereka tentang ScalePilot."
  },
  Features: {
    verdictEngine: {
      title: "Verdict Engine",
      subtitle: "Keputusan Iklan Otomatis & Berbasis Data di Ujung Jari Anda.",
      description: "Tinggalkan tebak-tebakan dan rapat evaluasi yang melelahkan. Verdict Engine ScalePilot menganalisis ribuan titik data iklan Anda secara real-time dan memberikan instruksi matematis yang pasti: Scale Up, Hold, atau Kill.<br/><br/><strong>Mengapa Fitur Ini Penting?</strong> Kebanyakan pengiklan menghabiskan waktu berjam-jam mencoba memahami mengapa sebuah kampanye tiba-tiba merugi. Mesin kami memproses kalkulasi rumit di latar belakang, membandingkan performa historis dengan metrik hari ini, sehingga Anda bisa langsung fokus pada eksekusi.",
      ctaText: "Lihat Cara Kerja Mesin Ini"
    },
    actionHub: {
      title: "Action Hub",
      subtitle: "Pusat Komando Terpadu untuk Seluruh Operasi Iklan Meta Anda.",
      description: "Mengapa harus membuka puluhan tab Meta Ads Manager yang lambat dan berat? Eksekusi, jadwalkan, dan tinjau semua perubahan kritis pada iklan Anda dari satu dashboard kilat yang didesain untuk kecepatan.<br/><br/><strong>Mengapa Fitur Ini Penting?</strong> Kecepatan eksekusi adalah kunci di dunia iklan digital. Meta Ads Manager seringkali laggy dan membutuhkan banyak klik hanya untuk mematikan satu iklan. Action Hub mengubah alur kerja 30 menit menjadi tugas 30 detik.",
      ctaText: "Sederhanakan Alur Kerja Anda"
    },
    scaleTracker: {
      title: "Scale Tracker",
      subtitle: "Kembangkan Iklan Pemenang Anda dengan Percaya Diri & Kendali Penuh.",
      description: "Menambahkan budget (Scaling) seringkali menjadi momen yang paling menakutkan karena berisiko merusak algoritma Meta. Pantau secara presisi bagaimana performa kampanye Anda bereaksi setiap detik setelah Anda menaikkan anggaran.<br/><br/><strong>Mengapa Fitur Ini Penting?</strong> Banyak bisnis mandek di pendapatan tertentu (revenue plateau) karena mereka takut melakukan scale up. Scale Tracker menghapus ketakutan tersebut dengan memberikan visibilitas total seperti instrumen kokpit pesawat.",
      ctaText: "Mulai Scaling Hari Ini"
    },
    budgetRevert: {
      title: "Budget Revert",
      subtitle: "Scale Tanpa Rasa Takut. Batalkan Kesalahan Secara Instan.",
      description: "Inilah jaring pengaman (safety net) finansial terkuat untuk bisnis Anda. Jika keputusan scaling membuat performa iklan Anda tiba-tiba hancur, kembalikan budget ke titik aman sebelumnya hanya dalam hitungan detik.<br/><br/><strong>Mengapa Fitur Ini Penting?</strong> Setiap kali Anda menaikkan anggaran, Meta berpotensi me-reset fase pembelajaran (Learning Phase), yang bisa membuat Cost Per Acquisition (CPA) naik drastis. Dengan Budget Revert, Anda memiliki \"Tombol Undo\" untuk kesalahan yang bernilai jutaan rupiah.",
      ctaText: "Scale dengan Aman Sekarang"
    }
  },
  Solutions: {
    fasterDecisions: {
      title: "Ambil Keputusan Lebih Cepat & Tepat",
      problem: "Sebagai pengiklan, Anda terus-menerus tenggelam dalam lautan data. Anda harus mengekspor CSV dari Meta, mencocokkannya dengan data Google Analytics, memuatnya ke tabulasi spreadsheet yang rumit, dan berdebat dengan metrik yang saling bertentangan. Proses panjang ini menyebabkan Analysis Paralysis—menunda keputusan kritis yang seharusnya dieksekusi hari ini juga, sehingga momentum emas terlewatkan.",
      solution: "ScalePilot bertindak sebagai analis data pribadi Anda yang bekerja dalam hitungan milidetik. Kami memotong semua kebisingan dashboard konvensional. Kami secara otomatis mensintesis ribuan baris data metrik menjadi sebuah verdict (keputusan akhir: Scale, Hold, Kill) yang jernih, transparan, dan dapat langsung ditindaklanjuti.",
      benefit: "Dapatkan kembali jam kerja produktif Anda. Anda dapat melakukan rutinitas optimasi harian sambil meminum kopi pagi Anda dalam waktu 5 menit, dan bertindaklah mengkapitalisasi tren winning campaign berhari-hari sebelum kompetitor Anda menyadarinya.",
      cta: "Percepat Alur Kerja Anda"
    },
    scaleWinning: {
      title: "Scale Kampanye Pemenang",
      problem: "Ini adalah dilema klasik Meta Ads: Anda akhirnya menemukan satu iklan (creative atau audience) yang bekerja dengan luar biasa di anggaran rendah. Namun, impian buruk terjadi setiap kali Anda melipatgandakan anggarannya; performanya hancur berantakan. Algoritma kebingungan, CPA meroket tajam, ROAS anjlok, dan momentum serta potensi pendapatan besar lenyap seketika.",
      solution: "Tinggalkan metode scaling yang serampangan. ScalePilot memungkinkan pendekatan scaling yang inkremental, tersistem, terpantau detik demi detik, dan direkomendasikan penuh oleh analisis kuantitatif AI. Kami melacak metrik Marginal ROAS untuk memastikan Anda memaksimalkan profitabilitas, selagi perlahan membuka keran volume pengeluaran.",
      benefit: "Keluar dari zona stagnan. Tembus batas stagnasi pendapatan (revenue plateau) bisnis Anda secara terukur, konsisten, terprediksi, dan yang terpenting: terbukti menguntungkan secara Net Margin.",
      cta: "Buka Potensi Skala Anda"
    },
    fixUnderperforming: {
      title: "Perbaiki Iklan Boncos",
      problem: "Ada kalanya kampanye andalan yang biasa menjadi tulang punggung omzet Anda tiba-tiba mati perlahan. Anda terus membakar uang pada iklan yang dulunya bekerja sangat baik ini, namun Anda buta terhadap alasan pastinya. Apakah audiens sudah bosan? Apakah penawarannya basi? Ketidaktahuan ini membuat Anda bingung bagaimana cara memulihkan kinerjanya.",
      solution: "Platform kami menawarkan identifikasi instan terhadap fenomena creative fatigue (kelelahan materi iklan). ScalePilot tidak hanya memberitahu Anda bahwa performa sedang turun, tetapi juga menyoroti titik masalahnya (seperti frekuensi yang terlalu tinggi di audiens sempit) dan menyajikan langkah actionable langsung untuk melakukan rotasi iklan, pivot angle, atau jeda paksa untuk pemulihan audiens.",
      benefit: "Identifikasi dan potong kerugian secara instan. Matikan iklan yang menguras kas (losers) dengan tanpa ragu, serta deteksi kelelahan kampanye pemenang (fatigue) sejak dini sebelum mereka mengisap habis sisa budget harian Anda tanpa memberikan hasil.",
      cta: "Hentikan Keboncosan Sekarang"
    },
    reduceWasted: {
      title: "Kurangi Pemborosan Iklan",
      problem: "Coba hitung berapa banyak uang yang hilang bulan lalu karena Anda (atau staf agensi Anda) telat mematikan kampanye yang gagal. Terlalu sering pemasar membiarkan iklan berkinerja buruk berjalan terlalu lama dengan harapan kosong bahwa esok hari performanya akan membaik. Keterlambatan pengecekan 1-2 hari saja sudah berujung pada kerugian jutaan rupiah yang tidak bisa dikembalikan.",
      solution: "Kami menggantikan harapan kosong dengan disiplin berbasis data. ScalePilot menerapkan kontrol anggaran yang sangat ketat melalui fitur pembatasan (kill rules otomatis), pembatalan skala instan (rollback), dan peringatan proaktif untuk menghentikan pendanaan pada setiap sen yang gagal mencapai target Return on Ad Spend bisnis Anda.",
      benefit: "Pertahanan yang solid menciptakan ruang untuk pertumbuhan. Lindungi margin profit perusahaan Anda secara agresif, potong kebocoran anggaran yang tak terlihat, dan pastikan setiap lembar rupiah yang Anda investasikan benar-benar bekerja sekeras mungkin untuk mendatangkan omzet riil bagi bisnis Anda.",
      cta: "Lindungi Margin Profit Anda"
    }
  }
};

fs.mkdirSync(path.join(__dirname, 'messages'), { recursive: true });
fs.writeFileSync(path.join(__dirname, 'messages', 'en.json'), JSON.stringify(en, null, 2));
fs.writeFileSync(path.join(__dirname, 'messages', 'id.json'), JSON.stringify(id, null, 2));

console.log('Dictionaries generated.');
