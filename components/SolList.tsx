import React from 'react';
import { useTranslations } from 'next-intl';

const SolList: React.FC = () => {
  const t = useTranslations('Solutions');
  const solutionKeys = ['fasterDecisions', 'scaleWinning', 'fixUnderperforming', 'reduceWasted'] as const;
  
  const solutions = solutionKeys.map((key, idx) => ({
    id: ['faster-decisions', 'scale-winning', 'fix-underperforming', 'reduce-wasted'][idx],
    title: t(`${key}.title`),
    problem: t(`${key}.problem`),
    solution: t(`${key}.solution`),
    benefit: t(`${key}.benefit`),
    cta: t(`${key}.cta`),
    features: ['Verdict Engine, Action Hub', 'Scale Tracker, Verdict Engine', 'Verdict Engine, Action Hub', 'Budget Revert, Verdict Engine'][idx]
  }));

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
                  <a href="https://app.scalepilot.id/login" className="inline-flex items-center justify-center bg-brand hover:bg-brand-dark text-white font-bold py-4 px-8 rounded-full transition-colors duration-200">
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
