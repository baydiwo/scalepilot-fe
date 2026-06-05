import React from 'react';
import type { Metadata } from 'next';
import TitleAccentTriangle from '@/components/TitleAccentTriangle';
import CtaGeneral from '@/components/CtaGeneral';

type Props = {
  params: Promise<{ slug: string[] }>;
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = await params;
  const pageName = slug.join(' ').replace(/-/g, ' ');
  const capitalized = pageName.charAt(0).toUpperCase() + pageName.slice(1);
  return {
    title: `${capitalized} | ScalePilot`,
  };
}

export default async function PlaceholderPage({ params }: Props) {
  const { slug } = await params;
  const pageName = slug.join(' ').replace(/-/g, ' ');
  const capitalized = pageName.charAt(0).toUpperCase() + pageName.slice(1);

  return (
    <div>
      <section className="wrapper pt-32 pb-24 min-h-[60vh] flex items-center">
        <div className="max-w-(--mw) w-full mx-auto relative border border-n20 px-6 py-16 md:py-32 text-center bg-white shadow-xl shadow-n50/5">
          <div className="absolute inset-0 grid-background opacity-20 pointer-events-none"></div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="flex justify-center mb-8">
              <TitleAccentTriangle color="brand" className="w-16" />
            </div>
            <div className="inline-block px-4 py-1 bg-brand-light border border-brand text-brand-dark font-medium text-sm mb-6 rounded-full">
              Coming Soon
            </div>
            <h1 className="text-n100 text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6 capitalize">
              {capitalized}
            </h1>
            <p className="text-n70 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
              We&apos;re currently working hard on this page. It will be available shortly with all the details you need.
            </p>
            <div className="mt-12 flex gap-4 justify-center">
              <a
                href="/"
                className="px-8 py-3 font-semibold border bg-brand text-white transition duration-200 hover:bg-n100 hover:text-white"
              >
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaGeneral theme="brand" />
    </div>
  );
}
