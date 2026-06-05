import React from 'react';
import type { Metadata } from 'next';
import TitleAccentTriangle from '@/components/TitleAccentTriangle';
import FeatSolution from '@/components/FeatSolution';
import BlockDiagonal from '@/components/BlockDiagonal';
import CtaGeneral from '@/components/CtaGeneral';

export const metadata: Metadata = {
  title: 'Features | ScalePilot',
  description: 'Explore the features of ScalePilot, the real-time verdict engine for Meta Ads.',
};

export default function FeaturesPage() {
  return (
    <div>
      <section className="wrapper pt-20 pb-12">
        <div className="max-w-(--mw) mx-auto relative border-x border-n20 px-6 py-12 md:py-20 text-center">
          <div className="flex justify-center mb-6">
            <TitleAccentTriangle color="brand" className="w-12" />
          </div>
          <h1 className="text-n100 text-5xl md:text-7xl font-semibold leading-tight tracking-tight mb-6">
            Semua yang Anda butuhkan untuk <br className="hidden md:block" />
            <span className="text-brand">scale dengan profit.</span>
          </h1>
          <p className="text-n70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            ScalePilot memberikan Anda serangkaian fitur lengkap yang membantu Anda mengambil keputusan lebih baik untuk mengoptimalkan ad spend dan mendapatkan ROAS yang lebih tinggi.
          </p>
        </div>
      </section>

      <BlockDiagonal />

      <section className="pb-20">
        <FeatSolution />
      </section>

      <CtaGeneral />
    </div>
  );
}
