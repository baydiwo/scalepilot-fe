import React from 'react';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import TitleAccentTriangle from '@/components/TitleAccentTriangle';
import BlockDiagonal from '@/components/BlockDiagonal';
import CtaGeneral from '@/components/CtaGeneral';
import SolList from '@/components/SolList';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'SolutionsPage' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function SolutionsPage() {
  const t = await getTranslations('SolutionsPage');
  
  return (
    <div>
      <section className="wrapper pt-20 pb-12">
        <div className="max-w-(--mw) mx-auto relative border-x border-n20 px-6 py-12 md:py-20 text-center">
          <div className="flex justify-center mb-6">
            <TitleAccentTriangle color="brand" className="w-12" />
          </div>
          <h1 className="text-n100 text-5xl md:text-7xl font-semibold leading-tight tracking-tight mb-6">
            {t('headline')} <br className="hidden md:block" />
            <span className="text-brand">{t('headlineSpan')}</span>
          </h1>
          <p className="text-n70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {t('subheadline')}
          </p>
        </div>
      </section>

      <BlockDiagonal />

      <SolList />

      <CtaGeneral />
    </div>
  );
}
