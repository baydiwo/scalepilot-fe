'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const DURATION = 8000;

const features = [
  {
    title: 'Verdict Engine',
    subtitle: 'Keputusan Iklan Otomatis & Berbasis Data di Ujung Jari Anda.',
    description: 'Tinggalkan tebak-tebakan dan rapat evaluasi yang melelahkan. Verdict Engine ScalePilot menganalisis ribuan titik data iklan Anda secara real-time dan memberikan instruksi matematis yang pasti: Scale Up, Hold, atau Kill.<br/><br/><strong>Mengapa Fitur Ini Penting?</strong> Kebanyakan pengiklan menghabiskan waktu berjam-jam mencoba memahami mengapa sebuah kampanye tiba-tiba merugi. Mesin kami memproses kalkulasi rumit di latar belakang, membandingkan performa historis dengan metrik hari ini, sehingga Anda bisa langsung fokus pada eksekusi.',
    icon: '/img/verdictengine-icon.svg',
    image: '/img/tab-verdict-engine.png',
    link: '#',
    ctaText: 'Lihat Cara Kerja Mesin Ini',
  },
  {
    title: 'Action Hub',
    subtitle: 'Pusat Komando Terpadu untuk Seluruh Operasi Iklan Meta Anda.',
    description: 'Mengapa harus membuka puluhan tab Meta Ads Manager yang lambat dan berat? Eksekusi, jadwalkan, dan tinjau semua perubahan kritis pada iklan Anda dari satu dashboard kilat yang didesain untuk kecepatan.<br/><br/><strong>Mengapa Fitur Ini Penting?</strong> Kecepatan eksekusi adalah kunci di dunia iklan digital. Meta Ads Manager seringkali laggy dan membutuhkan banyak klik hanya untuk mematikan satu iklan. Action Hub mengubah alur kerja 30 menit menjadi tugas 30 detik.',
    icon: '/img/actionhub-icon.svg',
    image: '/img/tab-action-hub.png',
    link: '#',
    ctaText: 'Sederhanakan Alur Kerja Anda',
  },
  {
    title: 'Scale Tracker',
    subtitle: 'Kembangkan Iklan Pemenang Anda dengan Percaya Diri & Kendali Penuh.',
    description: 'Menambahkan budget (Scaling) seringkali menjadi momen yang paling menakutkan karena berisiko merusak algoritma Meta. Pantau secara presisi bagaimana performa kampanye Anda bereaksi setiap detik setelah Anda menaikkan anggaran.<br/><br/><strong>Mengapa Fitur Ini Penting?</strong> Banyak bisnis mandek di pendapatan tertentu (revenue plateau) karena mereka takut melakukan scale up. Scale Tracker menghapus ketakutan tersebut dengan memberikan visibilitas total seperti instrumen kokpit pesawat.',
    icon: '/img/scaletracker-icon.svg',
    image: '/img/tab-scale-tracker.png',
    link: '#',
    ctaText: 'Mulai Scaling Hari Ini',
  },
  {
    title: 'Budget Revert',
    subtitle: 'Scale Tanpa Rasa Takut. Batalkan Kesalahan Secara Instan.',
    description: 'Inilah jaring pengaman (safety net) finansial terkuat untuk bisnis Anda. Jika keputusan scaling membuat performa iklan Anda tiba-tiba hancur, kembalikan budget ke titik aman sebelumnya hanya dalam hitungan detik.<br/><br/><strong>Mengapa Fitur Ini Penting?</strong> Setiap kali Anda menaikkan anggaran, Meta berpotensi me-reset fase pembelajaran (Learning Phase), yang bisa membuat Cost Per Acquisition (CPA) naik drastis. Dengan Budget Revert, Anda memiliki &quot;Tombol Undo&quot; untuk kesalahan yang bernilai jutaan rupiah.',
    icon: '/img/budgetrevert-icon.svg',
    image: '/img/tab-budget-revert.png',
    link: '#',
    ctaText: 'Scale dengan Aman Sekarang',
  },
];

const FeatSolution: React.FC = () => {
  const [featSelected, setFeatSelected] = useState(0);
  const [key, setKey] = useState(0); // For resetting animation
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setFeatSelected((prev) => (prev + 1) % features.length);
      setKey((prev) => prev + 1);
    }, DURATION);
  };

  const selectFeature = (idx: number) => {
    setFeatSelected(idx);
    setKey((prev) => prev + 1);
    startAutoplay();
  };

  useEffect(() => {
    startAutoplay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div>
    <div className="wrapper">
      <div className="max-w-(--mw) mx-auto relative border-x border-n20">
        <div
          id="feature-nav"
          className="grid grid-cols-4 divide-x divide-n20 border-b border-n20 sticky top-18 z-40 bg-white lg:static lg:bg-transparent"
        >
          {features.map((feat, idx) => (
            <button
              key={feat.title}
              className={`flex gap-3 items-center justify-center py-4 lg:py-6 relative group overflow-hidden ${
                featSelected === idx ? 'bg-brand-light' : 'bg-white lg:bg-transparent'
              }`}
              onClick={() => selectFeature(idx)}
            >
              {/* Background Progress Indicator */}
              {featSelected === idx && (
                <div
                  key={`indicator-${key}`}
                  className="indicator-fill w-full h-1 bg-brand absolute bottom-0 left-0 origin-left z-10"
                  style={{ animation: `progress ${DURATION}ms linear forwards` }}
                ></div>
              )}

              <Image
                src={feat.icon}
                alt={feat.title}
                width={32}
                height={32}
                className={`w-8 transition-all duration-300 pointer-events-none select-none ${
                  featSelected === idx ? '' : 'saturate-0 opacity-50 group-hover:opacity-100 group-hover:saturate-100'
                }`}
                style={{ height: 'auto' }}
              />
              <span
                className={`hidden lg:block font-semibold text-base lg:text-xl transition-colors duration-300 ${
                  featSelected === idx ? 'text-n100' : 'text-n60 group-hover:text-n100'
                }`}
              >
                {feat.title.split(' ')[0]}
                <span className="font-normal">{feat.title.split(' ')[1]}</span>
              </span>
            </button>
          ))}
        </div>

        <div className="w-full h-4 md:h-6 diagonal-lines border-b border-n20"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-n20">
          <div className="p-8">
            <div className="max-w-md">
              <span className="block mb-4 lg:mb-6 font-semibold text-lg lg:text-xl text-n100">
                {features[featSelected].title.split(' ')[0]}
                <span className="font-normal">{features[featSelected].title.split(' ')[1]}</span>
              </span>
              <h4 className="text-spgreen text-xl lg:text-2xl mb-4">{features[featSelected].subtitle}</h4>
              <p className="text-n100 font-medium text-base lg:text-lg leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: features[featSelected].description }}>
              </p>
              <a href={features[featSelected].link} className="inline-flex items-center justify-center bg-brand hover:bg-brand-dark text-white font-semibold py-3 px-6 rounded-full transition-colors duration-200">
                {features[featSelected].ctaText}
              </a>
            </div>
          </div>
          <div className="p-4">
            <div className="w-full overflow-hidden relative grid grid-cols-1 grid-rows-1">
              {features.map((feat, idx) => (
                  <Image
                  key={feat.title}
                  src={feat.image}
                  alt={feat.title}
                  width={800}
                  height={600}
                  className={`w-full col-start-1 row-start-1 pointer-events-none select-none transition-all duration-500 ease-in-out ${
                    featSelected === idx 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-5 pointer-events-none'
                  }`}
                  style={{ height: 'auto' }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FeatSolution;
