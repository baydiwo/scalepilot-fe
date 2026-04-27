'use client';

import React, { useState } from 'react';
import FlagAccent from '@/components/FlagAccent';
import TitleAccentTriangle from '@/components/TitleAccentTriangle';
import BaseTooltip from '@/components/BaseTooltip';
import IconInfo from '@/components/IconInfo';
import IconYes from '@/components/IconYes';
import IconNo from '@/components/IconNo';
import CtaGeneral from '@/components/CtaGeneral';

const pricingData = [
  {
    name: "Basic",
    id: "basic",
    bestFor: "Those who just started and want to try the power of ScalePilot",
    price: { month: "0", year: "0" },
    currency: "Rp",
    period: "/ month",
    color: "bg-spblue",
    hoverH: "lg:group-hover:h-1",
    features: [
      { text: "1 Meta Ad Account", info: true },
      { text: "3 Verdict Types" },
      { text: "3 Days Data History" },
      { text: "Community Support" },
      { text: "1 Team Member" }
    ],
    comparison: {
      metaAdAccount: "1",
      verdictTypes: {
        text: "3 modules",
        info: true,
        tooltip: { title: "Verdict Types", items: ["Monitor", "Learning", "Paused"] }
      },
      adLevelVerdicts: false,
      scaleIntelligence: false,
      dataHistory: "3 Days",
      actionHub: false,
      revertBudget: false,
      autoScalingRules: false,
      support: "Community",
      teamMembers: "1",
      whiteLabel: false,
      sla: false
    },
    cta: "Start for free"
  },
  {
    name: "Starter",
    id: "starter",
    bestFor: "More advance user that wants access to complete tooling",
    price: { month: "199.000", year: "1.990.000" },
    currency: "Rp",
    period: "/ month",
    color: "bg-sporange",
    hoverH: "lg:group-hover:h-2",
    features: [
      { text: "1 Meta Ad Account" },
      { text: "7 Verdict Types" },
      { text: "14 Days Data History" },
      { text: "20% Action Hub" },
      { text: "Email Support" },
      { text: "1 Team Member" }
    ],
    comparison: {
      metaAdAccount: "1",
      verdictTypes: {
        text: "7 modules",
        info: true,
        tooltip: {
          title: "Verdict Types",
          items: ["Monitor", "Learning", "Paused", "Scale Up", "Scale Out", "Stop Loss", "Hard Kill", "Soft Kill"]
        }
      },
      adLevelVerdicts: false,
      scaleIntelligence: false,
      dataHistory: "14 Days",
      actionHub: "Quick-scale",
      revertBudget: false,
      autoScalingRules: false,
      support: {
        text: "Email",
        info: true,
        tooltip: { title: "Support", items: ["Email ticketing", "Mon-Fri Support"] }
      },
      teamMembers: "1",
      whiteLabel: false,
      sla: false
    },
    cta: "Subscribe"
  },
  {
    name: "Growth",
    id: "growth",
    bestFor: "Professional that aims to further maximize profits with advance tooling",
    price: { month: "499.000", year: "4.990.000" },
    currency: "Rp",
    period: "/ month",
    color: "bg-brand",
    hoverH: "lg:group-hover:h-4",
    features: [
      { text: "2 Meta Ad Account" },
      { text: "Full Verdict Engine" },
      { text: "Ad-Level Verdicts" },
      { text: "30 Days Data History" },
      { text: "20% + Custom Action Hub" },
      { text: "5 Auto-Scaling Rules" },
      { text: "Chat Support" },
      { text: "2 Team Members" }
    ],
    comparison: {
      metaAdAccount: "2",
      verdictTypes: {
        text: "Full",
        info: true,
        tooltip: {
          title: "Verdict Types",
          items: ["Monitor", "Learning", "Paused", "Scale Up", "Scale Out", "Stop Loss", "Hard Kill", "Soft Kill"]
        }
      },
      adLevelVerdicts: true,
      scaleIntelligence: false,
      dataHistory: "30 Days",
      actionHub: {
        text: "Complete",
        info: true,
        tooltip: { title: "Action Hub", items: ["Quick-scale", "Custom-scale", "Revert Budget"] }
      },
      revertBudget: false,
      autoScalingRules: "5 Presets",
      support: {
        text: "Chat",
        info: true,
        tooltip: { title: "Support", items: ["Live Chat", "Mon-Sat Support"] }
      },
      teamMembers: "2",
      whiteLabel: false,
      sla: false
    },
    cta: "Subscribe"
  },
  {
    name: "Pro",
    id: "pro",
    bestFor: "Expert who handles multi-accounts with the needs of power tools",
    price: { month: "899.000", year: "8.990.000" },
    currency: "Rp",
    period: "/ month",
    color: "bg-sppurple",
    hoverH: "lg:group-hover:h-6",
    features: [
      { text: "5 Meta Ad Account" },
      { text: "AI Verdict Engine" },
      { text: "Ad-Level Verdicts" },
      { text: "Scale Intelligence" },
      { text: "Maximum Data History" },
      { text: "20% + Custom Action Hub" },
      { text: "24 Hour Revert Budget" },
      { text: "Unlimited Auto-Scaling Rules" },
      { text: "Priority Support" },
      { text: "5 Team Members" }
    ],
    comparison: {
      metaAdAccount: "5",
      verdictTypes: {
        text: "Full + AI",
        info: true,
        tooltip: {
          title: "Verdict Types",
          items: ["Monitor", "Learning", "Paused", "Scale Up", "Scale Out", "Stop Loss", "Hard Kill", "Soft Kill", "AI-Optimization"]
        }
      },
      adLevelVerdicts: true,
      scaleIntelligence: true,
      dataHistory: "Maximum",
      actionHub: {
        text: "Complete",
        info: true,
        tooltip: { title: "Action Hub", items: ["Quick-scale", "Custom-scale", "Revert Budget", "Auto-Scaling"] }
      },
      revertBudget: "24 Hour",
      autoScalingRules: "Unlimited",
      support: {
        text: "Priority Email & Chat",
        info: true,
        tooltip: { title: "Support", items: ["Priority Email", "Live Chat", "Mon-Sat Support"] }
      },
      teamMembers: "5",
      whiteLabel: false,
      sla: false
    },
    cta: "Subscribe"
  },
  {
    name: "Max",
    id: "max",
    bestFor: "Big team, agency & anyone who wants ultimate ScalePilot experience",
    price: { month: "Custom", year: "Custom" },
    currency: "",
    period: "Billed year",
    color: "bg-spred",
    hoverH: "lg:group-hover:h-8",
    features: [
      { text: "Unlimited Meta Ad Account" },
      { text: "Custom AI Verdict Engine" },
      { text: "Ad-Level Verdicts" },
      { text: "Scale Intelligence" },
      { text: "Maximum Data History" },
      { text: "20% + Custom Action Hub" },
      { text: "72 Hour Revert Budget" },
      { text: "Unlimited Auto-Scaling Rules" },
      { text: "Dedicated Support" },
      { text: "Unlimited Team Members" },
      { text: "White-Label" },
      { text: "99.9% SLA" }
    ],
    comparison: {
      metaAdAccount: "Unlimited",
      verdictTypes: {
        text: "Custom AI",
        info: true,
        tooltip: {
          title: "Verdict Types",
          items: ["Monitor", "Learning", "Paused", "Scale Up", "Scale Out", "Stop Loss", "Hard Kill", "Soft Kill", "Custom AI"]
        }
      },
      adLevelVerdicts: true,
      scaleIntelligence: true,
      dataHistory: "Maximum",
      actionHub: {
        text: "Complete",
        info: true,
        tooltip: { title: "Action Hub", items: ["Full Action Suite", "Dedicated Rules"] }
      },
      revertBudget: "72 Hour",
      autoScalingRules: "Unlimited",
      support: {
        text: "Dedicated",
        info: true,
        tooltip: { title: "Support", items: ["Account Manager", "24/7 Priority Support"] }
      },
      teamMembers: "Unlimited",
      whiteLabel: true,
      sla: true
    },
    cta: "Contact sales"
  }
];

const comparisonRows = [
  { label: 'Meta Ad Account', key: 'metaAdAccount' },
  { label: 'Verdict Types', key: 'verdictTypes' },
  { label: 'Ad-Level Verdicts', key: 'adLevelVerdicts', isBoolean: true },
  { label: 'Scale Intelligence', key: 'scaleIntelligence', isBoolean: true },
  { label: 'Data History', key: 'dataHistory' },
  { label: 'Action Hub', key: 'actionHub' },
  { label: 'Revert Budget', key: 'revertBudget' },
  { label: 'Auto-Scaling Rules', key: 'autoScalingRules' },
  { label: 'Support', key: 'support' },
  { label: 'Team Members', key: 'teamMembers' },
  { label: 'White-Label', key: 'whiteLabel', isBoolean: true },
  { label: 'SLA', key: 'sla', isBoolean: true },
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedComparePlan, setSelectedComparePlan] = useState(2); // Defaults to Growth

  const toggleBilling = () => setIsYearly(!isYearly);
  const currentPeriod = isYearly ? 'year' : 'month';

  const renderComparisonValue = (plan: typeof pricingData[0], row: typeof comparisonRows[0]) => {
    const val = (plan.comparison as any)[row.key];

    if (row.isBoolean) {
      return val ? (
        <div className="text-n90 shrink-0"><IconYes className="size-5" /></div>
      ) : (
        <div className="text-n40 shrink-0"><IconNo className="size-5" /></div>
      );
    }

    if (typeof val === 'object' && val !== null) {
      return (
        <div className="flex items-center gap-1.5">
          <span className="text-sm text-n90">{val.text}</span>
          {val.info && (
            <BaseTooltip
              title={val.tooltip?.title}
              items={val.tooltip?.items}
              position="right"
              trigger={<IconInfo className="size-4 text-n60 shrink-0" />}
            />
          )}
        </div>
      );
    }

    if (val === false) {
      return <span className="text-n40 flex justify-start w-full"><IconNo className="size-5" /></span>;
    }

    return <span className="text-sm text-n90">{val}</span>;
  };

  return (
    <div>
      <section className="wrapper">
        <div className="max-w-(--mw) mx-auto relative pt-10 pb-10">
          <div className="flex items-center justify-start">
            <div className="flex-1 lg:shrink-0">
              <div className="flex items-center gap-4">
                <span className="text-brand-dark font-semibold uppercase tracking-widest text-xs">Pricing</span>
              </div>
              <h1 className="mt-6 font-semibold text-5xl">
                <span className="text-brand-dark">Simple pricing</span> based on your needs, upgrade as you grows.
              </h1>
            </div>
            <div className="lg:flex w-1/2 px-10 hidden">
              <img src="/img/roas.png" alt="roas" className="w-full pointer-events-none select-none" />
            </div>
          </div>
          <FlagAccent />
        </div>
      </section>

      <section className="wrapper mb-20">
        <div className="max-w-(--mw) mx-auto relative">
          <div className="border border-n20 flex items-center justify-center py-4 w-full gap-4">
            <button 
              type="button"
              onClick={toggleBilling} 
              className="flex items-center justify-center gap-4 cursor-pointer border-none bg-transparent group"
            >
              <span className={`title block transition duration-200 select-none ${!isYearly ? 'text-n100' : 'text-n60'}`}>
                Monthly
              </span>
              <div className="w-8 h-4.5 rounded-full p-0.5 bg-n30 flex items-center inset-shadow-xs">
                <div className={`rounded-full size-3.5 bg-white shadow-sm transition-transform duration-200 ${isYearly ? 'translate-x-3.5' : 'translate-x-0'}`}></div>
              </div>
              <span className={`title block relative transition duration-200 select-none ${isYearly ? 'text-n100' : 'text-n60'}`}>
                Yearly
                <span className={`block absolute text-[9px] -top-2 left-[120%] bg-brand text-n100 tracking-base whitespace-nowrap pointer-events-none select-none transition pr-2.5 duration-200 leading-none p-1 rounded-xs [clip-path:polygon(100%_0%,90%_50%,100%_100%,0%_100%,0_48%,0%_0%)] ${isYearly ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-0.5'}`}>
                  Save 10%
                </span>
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-4 xl:gap-x-6 lg:border-x border-n20">
            {pricingData.map((plan, idx) => (
              <div key={plan.id} className="border-x lg:first:border-l-0 first:border-l border-n20 lg:last:border-r-0 last:border-b flex flex-col group last:col-span-1 md:last:col-span-2 lg:last:col-span-1">
                <div className="h-8 flex items-end">
                  <div className={`w-full h-0.5 transition-all duration-300 ${plan.color} ${plan.hoverH}`}></div>
                </div>
                <div className="p-4 border-b border-n20 relative min-h-[87px]">
                  {idx === 0 && <div className="h-[calc(100%+2px)] w-80 diagonal-lines border-y -top-px border-n20 absolute right-full"></div>}
                  {idx === pricingData.length - 1 && <div className="h-[calc(100%+2px)] w-80 diagonal-lines border-y -top-px border-n20 absolute left-full"></div>}
                  {idx !== 0 && <div className="h-[calc(100%+2px)] w-4 xl:w-6 diagonal-lines border-y -top-px border-n20 absolute right-full"></div>}
                  <h3 className="title text-xl text-n100">{plan.name}</h3>
                  <div className={`mt-1 flex items-baseline ${plan.price[currentPeriod] !== 'Custom' ? 'gap-1' : ''}`}>
                    {plan.price[currentPeriod] !== 'Custom' ? (
                      <>
                        <span className="text-xs font-bold text-n100">{plan.currency}</span>
                        <span className="text-xl font-semibold text-n100">
                          {plan.price[currentPeriod].includes('.') ? plan.price[currentPeriod].substring(0, plan.price[currentPeriod].lastIndexOf('.')) : plan.price[currentPeriod]}
                          {plan.price[currentPeriod].includes('.') && (
                            <span className="text-[10px] align-top relative top-[3px] left-0.5">
                              {plan.price[currentPeriod].substring(plan.price[currentPeriod].lastIndexOf('.'))}
                            </span>
                          )}
                        </span>
                        {plan.price[currentPeriod] !== '0' && <span className="text-xs text-n60 font-medium ml-0.5">/ {currentPeriod}</span>}
                      </>
                    ) : (
                      <span className="text-base text-n60">Billed {currentPeriod}ly</span>
                    )}
                  </div>
                </div>
                <div className="p-4 grow">
                  <ul className="space-y-2">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="text-sm text-n90 flex items-center gap-2 leading-relaxed">
                        <span className="block">{feature.text}</span>
                        {feature.info && <span className="block text-n60"><IconInfo className="size-4" /></span>}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="h-2 border-t border-n20"></div>
                <div className="border-y border-n20">
                  <button className={`p-4 title text-base w-full text-left flex items-center justify-between group/action relative cursor-pointer border-none bg-transparent ${(plan.id === 'starter' || plan.id === 'growth') ? 'text-n100' : 'text-white lg:text-current lg:hover:text-white'}`}>
                    <div className={`absolute w-full h-full lg:h-0.5 left-0 bottom-0 lg:group-hover/action:h-full transition-all duration-200 z-0 ${plan.color}`}></div>
                    <span className="relative z-10">{plan.cta}</span>
                    <svg className="size-6 lg:opacity-0 lg:group-hover/action:opacity-100 lg:-translate-x-2 lg:group-hover/action:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wrapper mb-20">
        <div className="max-w-(--mw) mx-auto relative">
          <div className="max-w-2xl pt-20 pb-10">
            <TitleAccentTriangle />
            <h2 className="mt-4 font-semibold text-3xl sm:text-4xl lg:text-5xl">Compare package details</h2>
          </div>
          <FlagAccent icon="plus" />
        </div>

        <div className="max-w-(--mw) mx-auto relative">
          {/* Mobile Dynamic View */}
          <div className="lg:hidden">
            <div className="sticky top-18 z-40 border-y border-n20 -mx-4 px-4 flex overflow-x-auto no-scrollbar divide-x bg-backdrop">
              {pricingData.map((plan, i) => (
                <button
                  key={plan.id}
                  onClick={() => setSelectedComparePlan(i)}
                  className={`shrink-0 title text-sm p-4 transition duration-200 flex-1 first:border-l last:border-r border-n20 border-none ${selectedComparePlan === i ? `${plan.color} ${(plan.id === 'starter' || plan.id === 'growth') ? 'text-n100' : 'text-white'}` : 'bg-backdrop text-n70'}`}
                >
                  {plan.name}
                </button>
              ))}
            </div>
            <div className="border-x border-n20">
              {comparisonRows.map(row => (
                <div key={row.key} className="flex items-center justify-between p-4 border-b border-n20">
                  <span className="text-sm font-bold text-n100">{row.label}</span>
                  <div className="flex items-center gap-1.5 text-right">
                    {renderComparisonValue(pricingData[selectedComparePlan], row)}
                  </div>
                </div>
              ))}
            </div>
            <div>
              <button className={`w-full py-4 title text-base transition-all duration-200 hover:brightness-110 active:scale-[0.98] cursor-pointer border-none ${pricingData[selectedComparePlan].color} ${(pricingData[selectedComparePlan].id === 'starter' || pricingData[selectedComparePlan].id === 'growth') ? 'text-n100' : 'text-white'}`}>
                Sign up for {pricingData[selectedComparePlan].name}
              </button>
            </div>
          </div>

          {/* Desktop View */}
          <div className="hidden lg:grid grid-cols-6 border-l border-t border-n20">
            <div className="p-4 flex items-start border-b border-r border-n20">
              <span className="font-bold text-n100">Best for</span>
            </div>
            {pricingData.map(plan => (
              <div key={`best-${plan.id}`} className="p-4 flex items-start border-b border-r border-n20 last:border-r-0 text-sm text-n90 leading-relaxed">
                {plan.bestFor}
              </div>
            ))}

            <div className="p-4 h-14 flex items-center border-b border-r border-n20 sticky top-18 z-20 bg-backdrop">
              <span className="font-bold text-n100">Features</span>
            </div>
            {pricingData.map(plan => (
              <div key={`header-${plan.id}`} className="h-14 flex flex-col border-b border-r last:border-r-0 border-n20 sticky top-18 z-20 bg-backdrop">
                <div className={`h-1 w-full ${plan.color}`}></div>
                <div className="flex-1 flex items-center px-4 font-bold text-n100">{plan.name}</div>
              </div>
            ))}

            {comparisonRows.map(row => (
              <React.Fragment key={row.key}>
                <div className="p-4 h-14 flex items-center border-b border-r border-n20">
                  <span className="text-sm xl:text-base font-bold text-n100">{row.label}</span>
                </div>
                {pricingData.map(plan => (
                  <div key={`${plan.id}-${row.key}`} className="h-14 border-b border-r border-n20 flex items-center px-4 relative">
                    <div className="flex items-center gap-1.5 w-full">
                      {renderComparisonValue(plan, row)}
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))}

            <div className="h-14 border-b border-r border-n20 diagonal-lines"></div>
            {pricingData.map(plan => (
              <div key={`cta-row-${plan.id}`} className="h-14 border-b border-r border-n20 flex items-stretch overflow-hidden">
                <button className={`w-full h-full flex items-center justify-center title font-semibold transition-all duration-200 hover:brightness-115 active:brightness-90 cursor-pointer whitespace-nowrap px-2 relative group border-none bg-transparent ${(plan.id === 'starter' || plan.id === 'growth') ? 'text-n100' : 'hover:text-white'}`}>
                  <div className={`absolute w-full h-0.5 bottom-0 group-hover:h-full transition-all duration-200 z-0 ${plan.color}`}></div>
                  <span className="relative z-10">Sign up for {plan.name}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaGeneral />
    </div>
  );
}
