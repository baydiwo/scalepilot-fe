import React from 'react';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import VisualGrid from '@/components/VisualGrid';
import FeatHeroImage from '@/components/FeatHeroImage';
import BlockDiagonal from '@/components/BlockDiagonal';
import FlagAccent from '@/components/FlagAccent';
import TitleAccentTriangle from '@/components/TitleAccentTriangle';
import FeatProblems from '@/components/FeatProblems';
import FeatSolution from '@/components/FeatSolution';
import FeatTestimonials from '@/components/FeatTestimonials';
import CtaGeneral from '@/components/CtaGeneral';
import FeatFlow from '@/components/FeatFlow';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Hero' });
  return {
    title: 'ScalePilot | Decision Engine for Meta Ads',
    description: t('description'),
    openGraph: {
      title: 'ScalePilot | Decision Engine for Meta Ads',
      description: t('description'),
      images: ['/scalepilot.png'],
    },
    twitter: {
      card: 'summary_large_image',
    },
  };
}

export default async function Home() {
  const tHero = await getTranslations('Hero');
  const tProb = await getTranslations('Problem');
  const tSol = await getTranslations('SolutionSection');
  const tTesti = await getTranslations('Testimonials');

  return (
    <div>
      <section id="hero" className="wrapper">
        <div className="max-w-(--mw) mx-auto relative">
          <div
            id="hero-headline"
            className="w-full border-r border-n20 flex items-center justify-center flex-col py-12 relative"
          >
            <VisualGrid />
            <h1 className="text-n100 text-center text-[clamp(2.75rem,9vw,6rem)] leading-[0.95]">
              {tHero('headline1')}<br />
              <span className="text-spgreen">{tHero('headline1Span')}</span>
            </h1>
            <p className="px-4 md:px-0 mt-6 text-n80 text-base md:text-xl text-center max-w-xl">
              {tHero('description')}
            </p>
          </div>
          <div id="hero-cta" className="relative">
            <div className="h-full w-80 diagonal-lines border-y top-0 border-n20 absolute right-full"></div>
            <div className="h-full w-80 diagonal-lines border-y top-0 border-n20 absolute left-full"></div>

            <div className="border border-n20 w-full flex items-stretch justify-center gap-6">
              <a
                href="https://app.scalepilot.id"
                className="p-4 font-semibold border-x border-brand hover:border-x-n100 bg-brand text-n100 transition duration-200 hover:bg-n100 hover:text-brand flex items-center"
              >
                {tHero('startScaling')}
              </a>
              <a
                href="/features"
                className="p-4 font-semibold border-x border-n20 text-n100 transition duration-200 hover:bg-n100 hover:border-n100 hover:text-white flex items-center"
              >
                {tHero('exploreFeatures')}
              </a>
            </div>
          </div>

          <FeatHeroImage />
        </div>
      </section>

      <BlockDiagonal />

      {/* THE PROBLEM */}
      <section id="problem" className="pt-16 bg-linear-to-b from-white to-transparent">
        <div className="header border-b border-n20">
          <div className="wrapper">
            <div className="max-w-(--mw) mx-auto relative">
              <FlagAccent icon="alarm" />
              <div className="py-18">
                <div className="flex gap-4 items-center mb-4">
                  <TitleAccentTriangle className="w-10" color="red" />
                  <span className="font-medium text-sm text-spred">{tProb('tag')}</span>
                </div>
                <div className="grid lg:grid-cols-2">
                  <div className="max-w-xl">
                    <h2 className="text-n100 text-5xl md:text-5xl leading-none">
                      {tProb('headline')} <span className="text-spred">{tProb('headlineSpan')}</span>
                    </h2>
                  </div>
                  <div className="mt-6 lg:mt-0 max-w-xl lg:px-14 xl:px-0">
                    <p className="leading-relaxed">
                      {tProb('description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FeatProblems />
      </section>

      <BlockDiagonal className="mb-16" />

      {/* THE SOLUTION */}
      <section id="solution">
        <div className="header border-b border-n20">
          <div className="wrapper">
            <div className="max-w-(--mw) mx-auto relative">
              <FlagAccent icon="sp" />
              <div className="py-18">
                <div className="flex gap-4 items-center mb-4">
                  <TitleAccentTriangle
                    className="w-10"
                    color="green"
                  />
                  <span className="font-medium text-sm text-spgreen">{tSol('tag')}</span>
                </div>
                <div className="grid lg:grid-cols-2">
                  <div className="max-w-xl">
                    <h2 className="text-n100 text-5xl md:text-5xl leading-none">
                      <span className="text-brand-dark">{tSol('headline')}</span> {tSol('headlineSpan')}
                    </h2>
                  </div>
                  <div className="mt-6 lg:mt-0 max-w-xl lg:px-14 xl:px-0">
                    <p className="leading-relaxed">
                      {tSol('description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FeatSolution />
      </section>

      <BlockDiagonal />

      <section id="flow" className="relative bg-[#0C3E25]">
              <div className="inset-0 absolute grid-background mask-circle-hole opacity-5"></div>
          <div className="wrapper">
            <div className="max-w-(--mw) mx-auto relative">
              <FeatFlow className="w-full relative z-10" />
            </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        id="testimonials"
        className="mb-20 bg-linear-to-b from-brand-light border-t-8 border-spgreen"
      >
        <div className="header border-b border-n20">
          <div className="wrapper">
            <div className="max-w-(--mw) mx-auto relative">
              <FlagAccent icon="heart" />
              <div className="py-18">
                <div className="flex gap-4 items-center mb-4">
                  <TitleAccentTriangle
                    className="w-10"
                    color="green"
                  />
                  <span className="font-medium text-sm">{tTesti('tag')}</span>
                </div>
                <div className="grid lg:grid-cols-2">
                  <div className="max-w-xl">
                    <h2 className="text-n100 text-5xl md:text-5xl leading-none">{tTesti('headline')} <span
                      className="text-brand-dark"
                    >{tTesti('headlineSpan')}</span>
                    </h2>
                  </div>
                  <div className="mt-6 lg:mt-0 max-w-xl lg:px-14 xl:px-0">
                    <p className="leading-relaxed">{tTesti('description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FeatTestimonials />
      </section>

      <CtaGeneral />
    </div>
  );
}
