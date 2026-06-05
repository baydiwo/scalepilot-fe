import React from 'react';
import type { Metadata } from 'next';
import TitleAccentTriangle from '@/components/TitleAccentTriangle';
import BlockDiagonal from '@/components/BlockDiagonal';
import CtaGeneral from '@/components/CtaGeneral';
import SolList from '@/components/SolList';

export const metadata: Metadata = {
  title: 'Solutions | ScalePilot',
  description: 'Solusi Nyata untuk Masalah Meta Ads Anda.',
};

export default function SolutionsPage() {
  return (
    <div>
      <section className="wrapper pt-20 pb-12">
        <div className="max-w-(--mw) mx-auto relative border-x border-n20 px-6 py-12 md:py-20 text-center">
          <div className="flex justify-center mb-6">
            <TitleAccentTriangle color="brand" className="w-12" />
          </div>
          <h1 className="text-n100 text-5xl md:text-7xl font-semibold leading-tight tracking-tight mb-6">
            Solusi Nyata untuk <br className="hidden md:block" />
            <span className="text-brand">Masalah Meta Ads Anda.</span>
          </h1>
          <p className="text-n70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Hentikan keboncosan dan scale kampanye pemenang Anda tanpa menghancurkan performa. Kami mengatasi pain points Anda dengan teknologi AI analitik terdepan.
          </p>
        </div>
      </section>

      <BlockDiagonal />

      <SolList />

      <CtaGeneral />
    </div>
  );
}
