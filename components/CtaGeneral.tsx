import React from 'react';
import Image from 'next/image';
import TitleAccentTriangle from './TitleAccentTriangle';

interface CtaGeneralProps {
  theme?: 'brand' | 'dark';
}

const CtaGeneral: React.FC<CtaGeneralProps> = ({ theme = 'dark' }) => {
  return (
    <section>
      <div
        className={`h-10 w-full border-b ${
          theme === 'brand' ? 'bg-brand border-brand-dark' : 'bg-n110 border-n90/75'
        }`}
      >
        <div className="wrapper h-full">
          <div
            className={`max-w-(--mw) h-full mx-auto relative border-x ${
              theme === 'brand' ? 'border-brand-dark' : 'border-n90/75'
            }`}
          ></div>
        </div>
      </div>
      <div
        className={`wrapper ${
          theme === 'brand' ? 'bg-brand text-n110' : 'bg-n110 text-backdrop'
        }`}
      >
        <div
          className={`max-w-(--mw) mx-auto relative lg:h-96 flex flex-col lg:flex-row lg:items-center gap-10 border-x ${
            theme === 'brand' ? 'border-brand-dark' : 'border-n90/75'
          }`}
        >
          <div className="order-2 lg:order-1 lg:w-1/2 shrink-0 p-10">
            <div className="lg:max-w-lg">
              <TitleAccentTriangle />
              <span className="mt-6 block tracking-heading font-medium text-3xl lg:text-4xl text-brand">
                Scaling decisions in real-time, not just data.
              </span>
              <p className="mt-4 text-[#bfbfbf] leading-relaxed">
                ScalePilot helps you make better decisions to optimize your ad spend and get better ROAS. Connect data from your Meta ad platform and get AI-powered insights to improve your campaigns.
              </p>
            </div>
            <div className="flex gap-2 mt-12">
              <a
                href="/pricing"
                className="px-8 py-3 font-semibold border bg-brand text-n110 transition duration-200 hover:bg-white hover:text-n100"
              >
                Pricing Plans
              </a>
              <a
                href="#"
                className="block px-8 py-3 font-semibold transition duration-200 hover:text-brand"
              >
                Learn more &rarr;
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 w-full lg:h-full lg:flex-1 overflow-hidden group relative min-h-[300px]">
            <Image
              src="/img/spimage1.png"
              className="object-contain xl:object-cover object-center lg:object-left max-w-2xl mx-auto lg:max-w-none"
              alt="ScalePilot Decision Engine"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              fill
            />
          </div>
        </div>
      </div>
      <div
        className={`h-10 w-full border-t ${
          theme === 'brand' ? 'bg-brand text-n110 border-brand-dark' : 'bg-n110 text-backdrop border-n90/75'
        }`}
      >
        <div className="wrapper h-full">
          <div
            className={`max-w-(--mw) h-full mx-auto relative border-x ${
              theme === 'brand' ? 'border-brand-dark' : 'border-n90/75'
            }`}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default CtaGeneral;
