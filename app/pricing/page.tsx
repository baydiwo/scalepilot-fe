import Image from "next/image";
import Link from "next/link";

const plans = [
  {
    name: "Basic",
    price: "0",
    description: "Those who just started and want to try the power of ScalePilot",
    cta: "Start for free",
    features: [
      "1 Meta Ad Account",
      "3 Verdict Types",
      "3 Days Data History",
      "Community Support",
      "1 Team Member"
    ],
    color: "zinc-400"
  },
  {
    name: "Starter",
    price: "199.000",
    description: "More advance user that wants access to complete tooling",
    cta: "Subscribe",
    features: [
      "1 Meta Ad Account",
      "7 Verdict Types",
      "14 Days Data History",
      "20% Action Hub",
      "Email Support",
      "1 Team Member"
    ],
    color: "primary"
  },
  {
    name: "Growth",
    price: "499.000",
    description: "Professional that aims to further maximize profits with advance tooling",
    cta: "Subscribe",
    features: [
      "2 Meta Ad Account",
      "Full Verdict Engine",
      "Ad-Level Verdicts",
      "30 Days Data History",
      "20% + Custom Action Hub",
      "5 Auto-Scaling Rules",
      "Chat Support",
      "2 Team Members"
    ],
    color: "primary"
  },
  {
    name: "Pro",
    price: "899.000",
    description: "Expert who handles multi-accounts with the needs of power tools",
    cta: "Subscribe",
    features: [
      "5 Meta Ad Account",
      "AI Verdict Engine",
      "Ad-Level Verdicts",
      "Scale Intelligence",
      "Maximum Data History",
      "20% + Custom Action Hub",
      "24 Hour Revert Budget",
      "Unlimited Auto-Scaling Rules",
      "Priority Support",
      "5 Team Members"
    ],
    color: "purple-500"
  },
  {
    name: "Max",
    price: "2.499.000",
    description: "Big team, agency & anyone who wants ultimate ScalePilot experience",
    cta: "Contact sales",
    features: [
      "Unlimited Meta Ad Account",
      "Custom AI Verdict Engine",
      "Ad-Level Verdicts",
      "Scale Intelligence",
      "Maximum Data History",
      "20% + Custom Action Hub",
      "72 Hour Revert Budget",
      "Unlimited Auto-Scaling Rules",
      "Dedicated Support",
      "Unlimited Team Members",
      "White-Label",
      "99.9% SLA"
    ],
    color: "rose-500"
  }
];

const comparisonFeatures = [
  { name: "Meta Ad Account", key: "ad_account" },
  { name: "Verdict Types", key: "verdict_types" },
  { name: "Ad-Level Verdicts", key: "ad_level_verdicts" },
  { name: "Scale Intelligence", key: "scale_intelligence" },
  { name: "Data History", key: "data_history" },
  { name: "Action Hub", key: "action_hub" },
  { name: "Revert Budget", key: "revert_budget" },
  { name: "Auto-Scaling Rules", key: "auto_scaling" },
  { name: "Support", key: "support" },
  { name: "Team Members", key: "team_members" },
  { name: "White-Label", key: "white_label" },
  { name: "SLA", key: "sla" },
];

const comparisonData = {
  Basic: {
    ad_account: "1",
    verdict_types: "3 modules",
    ad_level_verdicts: false,
    scale_intelligence: false,
    data_history: "3 Days",
    action_hub: false,
    revert_budget: false,
    auto_scaling: false,
    support: "Community",
    team_members: "1",
    white_label: false,
    sla: false,
  },
  Starter: {
    ad_account: "1",
    verdict_types: "7 modules",
    ad_level_verdicts: false,
    scale_intelligence: false,
    data_history: "14 Days",
    action_hub: "Quick-scale",
    revert_budget: false,
    auto_scaling: false,
    support: "Email",
    team_members: "1",
    white_label: false,
    sla: false,
  },
  Growth: {
    ad_account: "2",
    verdict_types: "Full",
    ad_level_verdicts: true,
    scale_intelligence: false,
    data_history: "30 Days",
    action_hub: "Complete",
    revert_budget: false,
    auto_scaling: "5 Presets",
    support: "Chat",
    team_members: "2",
    white_label: false,
    sla: false,
  },
  Pro: {
    ad_account: "5",
    verdict_types: "Full + AI",
    ad_level_verdicts: true,
    scale_intelligence: true,
    data_history: "Maximum",
    action_hub: "Complete",
    revert_budget: "24 Hour",
    auto_scaling: "Unlimited",
    support: "Priority Email & Chat",
    team_members: "5",
    white_label: false,
    sla: false,
  },
  Max: {
    ad_account: "Unlimited",
    verdict_types: "Custom AI",
    ad_level_verdicts: true,
    scale_intelligence: true,
    data_history: "Maximum",
    action_hub: "Complete",
    revert_budget: "72 Hour",
    auto_scaling: "Unlimited",
    support: "Dedicated",
    team_members: "Unlimited",
    white_label: true,
    sla: true,
  },
};

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg className="w-5 h-5 text-zinc-300" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  );
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/scalepilot-logo/svg/scalepilot-logo-default.svg"
            alt="ScalePilot Logo"
            width={150}
            height={32}
            className="h-8 w-auto"
          />
        </div>
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-zinc-600">
          <Link href="#" className="hover:text-zinc-900 transition-colors">Solutions</Link>
          <Link href="#" className="hover:text-zinc-900 transition-colors">Pricing</Link>
          <Link href="#" className="hover:text-zinc-900 transition-colors">Resources</Link>
          <Link href="#" className="hover:text-zinc-900 transition-colors">Company</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Log in</button>
          <button className="bg-primary text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">Sign up free</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <div className="inline-block bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-sm mb-4">
              Pricing
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-none tracking-tight mb-6">
              Simple <span className="text-primary underline decoration-4 underline-offset-8">pricing</span> based on your needs, upgrade as you grows.
            </h1>
          </div>
          <div className="relative w-full max-w-md">
            {/* Visual element placeholder matching Figma */}
            <div className="aspect-square bg-zinc-50 rounded-full flex items-center justify-center overflow-hidden border border-zinc-100 shadow-xl">
               <div className="absolute top-10 right-0 bg-white p-4 rounded-xl shadow-lg border border-zinc-100 flex flex-col gap-2 scale-90 md:scale-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-primary rounded-full" />
                    </div>
                    <span className="text-xs font-bold text-zinc-400">Overall ROAS</span>
                  </div>
                  <div className="text-2xl font-bold">4.50x <span className="text-primary text-xs">▲ 15%</span></div>
                  <div className="w-full h-8 bg-primary/5 rounded relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/10" style={{ clipPath: 'polygon(0 80%, 20% 60%, 40% 70%, 60% 40%, 80% 50%, 100% 20%, 100% 100%, 0 100%)' }} />
                  </div>
               </div>
               
               <div className="absolute bottom-10 left-4 bg-primary text-white p-3 rounded-full shadow-lg flex items-center gap-2 scale-90 md:scale-100">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  </div>
                  <span className="text-sm font-bold">Scale up</span>
               </div>
               
               <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl relative z-10">
                  <Image 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80" 
                    alt="Founder" 
                    fill 
                    sizes="192px"
                    className="object-cover" 
                  />
               </div>
               
               {/* Grid background effect */}
               <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#15CB72 0.5px, transparent 0.5px)', backgroundSize: '16px 16px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Monthly/Yearly Toggle */}
      <div className="flex justify-center items-center gap-4 mb-16">
        <span className="text-sm font-medium text-zinc-500">Monthly</span>
        <button className="w-12 h-6 bg-zinc-200 rounded-full relative p-1 transition-colors hover:bg-zinc-300">
          <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
        </button>
        <span className="text-sm font-medium text-zinc-900">Yearly</span>
      </div>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden border border-zinc-200">
          {plans.map((plan, idx) => (
            <div key={plan.name} className={`flex flex-col border-r last:border-r-0 border-zinc-200 bg-white transition-all hover:z-10 hover:shadow-2xl hover:scale-[1.02] ${idx === 2 ? 'bg-zinc-50/50' : ''}`}>
              <div className="p-8 border-b border-zinc-200 flex-1">
                <div className="h-1 w-full bg-zinc-200 mb-6 rounded-full overflow-hidden">
                   <div className={`h-full w-full ${plan.color === 'primary' ? 'bg-primary' : plan.color === 'purple-500' ? 'bg-purple-500' : plan.color === 'rose-500' ? 'bg-rose-500' : 'bg-zinc-400'}`} />
                </div>
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-xs font-bold text-zinc-400">Rp</span>
                  <span className="text-2xl font-bold">{plan.price}</span>
                  {plan.name !== 'Basic' && <span className="text-xs font-medium text-zinc-500">/ month</span>}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.slice(0, 5).map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-zinc-600">
                      <CheckIcon />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6">
                <button className={`w-full py-3 px-4 rounded-xl text-sm font-bold flex items-center justify-between group transition-all ${plan.name === 'Basic' ? 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200' : 'bg-white border border-zinc-200 hover:border-primary hover:text-primary'}`}>
                  {plan.cta}
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="mb-12">
           <div className="w-12 h-1 bg-primary mb-4" />
           <h2 className="text-3xl md:text-4xl font-bold">Compare package details</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-200">
                <th className="py-6 px-4 text-sm font-bold text-zinc-400 w-1/4">Best for</th>
                {plans.map((plan) => (
                  <th key={plan.name} className="py-6 px-4 text-sm font-medium text-zinc-500 w-[15%]">
                    {plan.description}
                  </th>
                ))}
              </tr>
              <tr className="bg-zinc-50/50">
                <th className="py-4 px-4 text-sm font-bold text-zinc-900">Features</th>
                {plans.map((plan) => (
                  <th key={plan.name} className="py-4 px-4 text-sm font-bold text-zinc-900">
                    <div className="h-1 w-full bg-zinc-200 mb-2">
                       <div className={`h-full w-full ${plan.color === 'primary' ? 'bg-primary' : plan.color === 'purple-500' ? 'bg-purple-500' : plan.color === 'rose-500' ? 'bg-rose-500' : 'bg-zinc-400'}`} />
                    </div>
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((feature) => (
                <tr key={feature.name} className="border-b border-zinc-100 hover:bg-zinc-50/30 transition-colors">
                  <td className="py-4 px-4 text-sm font-medium text-zinc-900">{feature.name}</td>
                  {plans.map((plan) => {
                    const planData = comparisonData[plan.name as keyof typeof comparisonData];
                    const value = planData[feature.key as keyof typeof planData];
                    return (
                      <td key={plan.name} className="py-4 px-4 text-sm text-zinc-600">
                        {typeof value === 'boolean' ? (
                          value ? <CheckIcon /> : <CrossIcon />
                        ) : (
                          value as string
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
              <tr className="border-t-2 border-zinc-200">
                <td className="py-8 px-4" />
                {plans.map((plan) => (
                  <td key={plan.name} className="py-8 px-4">
                    <button className="bg-primary text-white text-[10px] font-bold uppercase tracking-wider py-2 px-4 rounded transition-opacity hover:opacity-90 whitespace-nowrap">
                      Sign up for {plan.name}
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Dark Real-time Section */}
      <section className="bg-black text-white py-32 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
                Scaling decisions in <span className="text-primary italic">real-time</span>, not just data.
              </h2>
              <p className="text-zinc-400 text-lg mb-12 max-w-xl">
                ScalePilot helps you make better decisions to optimize your ad spend and get better ROAS. Connect data from your Meta ad platform and get AI-powered insights to improve your campaigns.
              </p>
              <button className="bg-primary text-black font-bold py-4 px-8 rounded-full hover:opacity-90 transition-opacity">
                Learn more
              </button>
            </div>
            <div className="flex-1 relative w-full aspect-video md:aspect-auto md:h-[500px]">
               {/* Visual composition mimicking Figma */}
               <div className="absolute inset-0 bg-zinc-900 rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                  <Image 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
                    alt="Dashboard" 
                    fill 
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover opacity-50" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  
                  {/* Floating pills */}
                  <div className="absolute top-1/4 left-1/4 bg-black/80 backdrop-blur border border-white/20 p-4 rounded-xl flex items-center gap-3 animate-pulse">
                    <div className="w-8 h-8 bg-primary/20 rounded flex items-center justify-center"><CheckIcon /></div>
                    <span className="font-bold">VerdictEngine</span>
                  </div>
                  
                  <div className="absolute top-1/3 right-1/4 bg-black/80 backdrop-blur border border-white/20 p-4 rounded-xl flex items-center gap-3 delay-75 animate-pulse">
                    <div className="w-8 h-8 bg-blue-500/20 rounded flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" /></svg>
                    </div>
                    <span className="font-bold">ActionHub</span>
                  </div>
                  
                  <div className="absolute bottom-1/4 left-1/3 bg-black/80 backdrop-blur border border-white/20 p-4 rounded-xl flex items-center gap-3 delay-150 animate-pulse">
                    <div className="w-8 h-8 bg-purple-500/20 rounded flex items-center justify-center">
                       <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" /></svg>
                    </div>
                    <span className="font-bold">ScaleTracker</span>
                  </div>
                  
                  <div className="absolute bottom-1/3 right-1/3 bg-black/80 backdrop-blur border border-white/20 p-4 rounded-xl flex items-center gap-3 delay-300 animate-pulse">
                    <div className="w-8 h-8 bg-rose-500/20 rounded flex items-center justify-center">
                       <svg className="w-4 h-4 text-rose-500" fill="currentColor" viewBox="0 0 20 20"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.363.242.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" /><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.184a4.535 4.535 0 00-1.676.662C6.602 13.234 6 14.009 6 15c0 .991.602 1.765 1.324 2.246A4.535 4.535 0 009 17.908V18a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662c.722-.481 1.324-1.256 1.324-2.246 0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 12.092V10.91c.622-.117 1.196-.341 1.676-.662C13.398 9.766 14 8.991 14 8c0-.991-.602-1.765-1.324-2.246A4.535 4.535 0 0011 5.092V5z" clipRule="evenodd" /></svg>
                    </div>
                    <span className="font-bold">BudgetReverse</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
        
        {/* Grid background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-primary rounded-[2rem] p-12 md:p-16 text-center relative overflow-hidden group">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <h2 className="text-3xl md:text-4xl font-bold text-black max-w-xl text-left">
              Start optimize your profit. Get started free today.
            </h2>
            <button className="bg-black text-white font-bold py-5 px-10 rounded-full hover:scale-105 transition-transform whitespace-nowrap">
              Sign up free
            </button>
          </div>
          
          {/* Decorative circles */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl transition-transform group-hover:scale-150" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-black/10 rounded-full blur-3xl transition-transform group-hover:scale-150" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-24 pb-12 border-t border-zinc-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-24">
            <div className="col-span-2 md:col-span-1">
              <Image
                src="/scalepilot-logo/svg/scalepilot-logo-default.svg"
                alt="ScalePilot Logo"
                width={150}
                height={32}
                className="h-8 w-auto mb-8"
              />
              <div className="flex flex-col gap-2">
                 <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-xs font-medium text-zinc-500">Service status: normal</span>
                 </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Solutions</h4>
              <ul className="space-y-4 text-sm text-zinc-500">
                <li><Link href="#" className="hover:text-primary transition-colors">Meta Ad Optimization</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Verdict Engine</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Scale Tracker</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Action Hub</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Scale Intelligence</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Auto-Scaling</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-zinc-500">
                <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Team</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Career</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Brand Assets</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Resources</h4>
              <ul className="space-y-4 text-sm text-zinc-500">
                <li><Link href="#" className="hover:text-primary transition-colors">Why ScalePilot</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Support</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Docs</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Community</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Knowledge Base</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Legal</h4>
              <ul className="space-y-4 text-sm text-zinc-500">
                <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li className="pt-4 font-bold text-zinc-900">Follow our socials</li>
                <li className="flex flex-wrap gap-3 text-xs">
                  <Link href="#" className="hover:text-primary transition-colors">Instagram</Link>
                  <Link href="#" className="hover:text-primary transition-colors">Facebook</Link>
                  <Link href="#" className="hover:text-primary transition-colors">X</Link>
                  <Link href="#" className="hover:text-primary transition-colors">LinkedIn</Link>
                  <Link href="#" className="hover:text-primary transition-colors">YouTube</Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex justify-between items-center text-xs text-zinc-400">
            <p>© 2026 ScalePilot. All rights reserved.</p>
          </div>
        </div>
        
        {/* Large background text */}
        <div className="absolute -bottom-20 left-0 right-0 text-[20vw] font-black text-zinc-100 select-none pointer-events-none text-center whitespace-nowrap opacity-50">
          ScalePilot
        </div>
      </footer>
    </div>
  );
}
