'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import IconMenu from './IconMenu';
import IconClose from './IconClose';
import IconDownArrow from './IconDownArrow';
import TitleAccentTriangle from './TitleAccentTriangle';
import IconArrowUpRight from './IconArrowUpRight';

// Data items
const featureItems = [
  { title: 'Verdict Engine', description: 'Real-time AI-powered decision system that moves beyond simple data.', icon: 'verdictengine-icon', link: '#' },
  { title: 'Action Hub', description: 'One-click command center for quick budget boosts and manual adjustments.', icon: 'actionhub-icon', link: '#' },
  { title: 'Scale Tracker', description: 'Full historical audit of every scaling decision and its marginal ROI impact.', icon: 'scaletracker-icon', link: '#' },
  { title: 'Budget Revert', description: 'Instantly undo underperforming scales and restore previous budget levels.', icon: 'budgetrevert-icon', link: '#' },
];

const solutionsItems = [
  { title: "Make faster decisions", description: "Stop analyzing ads. Start acting on them.", image: "/img/faster-decisions.jpg", link: "#" },
  { title: "Scale Winning Campaigns", description: "You have a winner. Now don't kill it, because winning is easy, scaling is hard.", image: "/img/scale-campaign.jpg", link: "#" },
  { title: "Fix Underperforming Ads", description: "Get clear, actionable fixes for every underperforming campaign.", image: "/img/fix-ads.jpg", link: "#" },
  { title: "Reduce Wasted Ad Spend", description: "You're losing money, but most of the time you just don't see it yet.", image: "/img/ad-spend.jpg", link: "#" }
];

const resourceItems = [
  { title: 'Blog', description: 'News and update about marketing, ad buying and ad management.', icon: 'blog-icon', link: '#' },
  { title: 'Testimonials', description: 'How our users utilize ScalePilot to scale smarter.', icon: 'case-icon', link: '#' },
  { title: 'Knowledge Center', description: 'Find answers to everything you need to know about ScalePilot.', icon: 'docs-icon', link: '#' }
];

const TheNav: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [currentHeight, setCurrentHeight] = useState(0);
  
  const submenuContentRef = useRef<HTMLDivElement>(null);
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll lock and resize handler
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!submenuContentRef.current) return;

    const observer = new ResizeObserver(() => {
      if (!activeMenu) {
        setCurrentHeight(0);
        return;
      }

      const activeEl = submenuContentRef.current?.querySelector(`[data-menu="${activeMenu}"]`);
      if (activeEl) {
        setCurrentHeight((activeEl as HTMLElement).offsetHeight);
      }
    });

    observer.observe(submenuContentRef.current);
    return () => observer.disconnect();
  }, [activeMenu]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMenu(null);
    setActiveMobileMenu(null);
  }, [pathname]);

  const handleMouseEnter = (menu: string | null) => {
    if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    leaveTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  return (
    <nav
      className={`sticky top-0 z-50 h-18 transition-all duration-200 border-b ${
        (scrollY > 10 || activeMenu || isMobileMenuOpen) ? 'bg-backdrop border-n20' : 'border-transparent bg-transparent'
      }`}
    >
      <div className="wrapper h-full">
        <div className="max-w-(--mw) h-full mx-auto flex items-center relative">
          <Link href="/">
            <img src="/scalepilot-logo/svg/scalepilot-logo-default.svg" alt="ScalePilot" className="w-40" />
          </Link>

          <div className="flex-1 px-10 xl:px-20 h-full">
            <div className="hidden lg:flex font-medium text-n90 h-full items-center justify-center gap-6 text-sm xl:text-[15px]" onMouseLeave={handleMouseLeave}>
              <button 
                className={`cursor-pointer transition-all h-full px-2 outline-none ${activeMenu === 'features' ? 'text-n100 opacity-100' : 'text-n90'} ${activeMenu && activeMenu !== 'features' ? 'opacity-50' : ''}`} 
                onMouseEnter={() => handleMouseEnter('features')}
              >
                Features
              </button>
              <button 
                className={`cursor-pointer transition-all h-full px-2 outline-none ${activeMenu === 'solutions' ? 'text-n100 opacity-100' : 'text-n90'} ${activeMenu && activeMenu !== 'solutions' ? 'opacity-50' : ''}`} 
                onMouseEnter={() => handleMouseEnter('solutions')}
              >
                Solutions
              </button>
              <button 
                className={`cursor-pointer transition-all h-full px-2 outline-none ${activeMenu === 'resources' ? 'text-n100 opacity-100' : 'text-n90'} ${activeMenu && activeMenu !== 'resources' ? 'opacity-50' : ''}`} 
                onMouseEnter={() => handleMouseEnter('resources')}
              >
                Resources
              </button>
              <Link 
                href="/pricing" 
                className={`cursor-pointer transition-all h-full px-2 flex items-center ${activeMenu ? 'opacity-50' : ''}`} 
                onMouseEnter={() => handleMouseEnter(null)}
              >
                Pricing
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
             <div className="hidden sm:flex items-center gap-2">
                {/* <Link href="https://app.scalepilot.id" className="hover:bg-n100 hover:text-white border border-n20 h-11 text-sm lg:text-[15px] px-5 py-2 font-semibold transition-colors flex items-center">Log in</Link>
                <Link href="https://app.scalepilot.id" className="h-11 hover:bg-n100 hover:text-white px-5 py-2 text-sm lg:text-base font-semibold bg-brand text-n100 transition-all flex items-center">Start free</Link> */}
                <Link href="/pricing" className="h-11 hover:bg-n100 hover:text-white px-5 py-2 text-sm lg:text-base font-semibold bg-brand text-n100 transition-all flex items-center">See Pricing &rarr;</Link>
             </div>
             <button className="lg:hidden p-2 text-n100 focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <IconClose className="size-6" /> : <IconMenu className="size-6" />}
             </button>
          </div>
        </div>
      </div>

      {/* Desktop Submenu */}
      <motion.div
        className="hidden lg:block absolute top-18 left-0 w-full bg-backdrop overflow-hidden z-50 shadow-xl shadow-n50/50"
        initial={false}
        animate={{ 
            height: activeMenu ? currentHeight : 0,
            opacity: activeMenu ? 1 : 0,
            borderBottomWidth: activeMenu ? 1 : 0,
            pointerEvents: (activeMenu as any) ? 'auto' : 'none'
        }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.1, 1] }}
        onMouseEnter={() => { if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current); }}
        onMouseLeave={handleMouseLeave}
        style={{ borderBottomColor: 'var(--color-n20)' }}
      >
        <div ref={submenuContentRef} className="relative flex flex-col">
            <div className="wrapper">
                <div className="max-w-(--mw) mx-auto border-x border-n20 relative">
                    <AnimatePresence mode="popLayout">
                        {activeMenu === 'features' && (
                            <motion.div 
                                key="features" 
                                data-menu="features"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                                className="grid grid-cols-11 w-full"
                            >
                            <div className="col-span-3 p-6">
                                <TitleAccentTriangle className="w-6" />
                                <h2 className="mt-3 text-xl font-semibold tracking-tight mb-4">This isn't a dashboard, <span className="block text-spgreen">it's a decision engine.</span></h2>
                                <p className="max-w-64 text-n70 text-sm leading-relaxed mb-8">A suite of agentic tools designed to analyze your ROAS in real-time and deliver the scaling verdicts you need to grow.</p>
                            </div>
                            <div className="col-span-8 grid grid-cols-2 bg-n20 gap-px pl-px relative">
                                {featureItems.map((feat) => (
                                    <div key={feat.title} className="p-8 xl:p-10 bg-backdrop hover:bg-brand-light transition-all cursor-pointer group relative overflow-hidden">
                                        <img src={`/img/${feat.icon}.svg`} alt={feat.title} className="h-[80%] absolute top-1/2 -translate-y-1/2 -right-6 group-hover:opacity-10 group-hover:translate-x-0 transition duration-200 opacity-0 translate-x-2" />
                                        <div className="flex items-center gap-3 mb-3">
                                            <img src={`/img/${feat.icon}.svg`} alt={feat.title} className="w-6" />
                                            <h4 className="font-semibold text-lg text-n100">{feat.title.split(' ')[0]} <span className="font-normal">{feat.title.split(' ')[1]}</span></h4>
                                        </div>
                                        <p className="max-w-80 text-sm xl:text-base text-n70 leading-snug">{feat.description}</p>
                                    </div>
                                ))}
                                <img src="/img/splogo-center.svg" alt="ScalePilot icon" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5" />
                            </div>
                            <div className="col-span-full h-10 diagonal-lines border-t border-n20 bg-backdrop"></div>
                        </motion.div>
                    )}
                    {activeMenu === 'solutions' && (
                        <motion.div 
                            key="solutions" 
                            data-menu="solutions"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                            className="grid grid-cols-11 w-full"
                        >
                            <div className="col-span-3 p-6">
                                <TitleAccentTriangle className="w-6" />
                                <h2 className="mt-3 text-xl font-semibold tracking-tight mb-4">See how ScalePilot solves the challenges in managing ads.</h2>
                                <p className="max-w-64 text-n70 text-sm leading-relaxed mb-8">ScalePilot helps you make data-driven decisions to optimize your marketing spend and improve your ROAS.</p>
                            </div>
                            <div className="col-span-8 grid grid-cols-4 gap-px bg-n20 pl-px">
                                {solutionsItems.map((sol) => (
                                    <a key={sol.title} href={sol.link} className="group cursor-pointer block p-6 bg-backdrop transition duration-200 hover:bg-brand-light">
                                        <div className="aspect-video bg-n10 mb-4 relative overflow-hidden border border-n20 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-brand/5">
                                            <img src={sol.image} alt={sol.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-n110/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                                                <span className="text-white text-xs font-semibold translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Learn more &rarr;</span>
                                            </div>
                                        </div>
                                        <h3 className="font-semibold mb-2 text-n100 group-hover:text-spgreen transition-colors">{sol.title}</h3>
                                        <p className="text-n70 text-sm leading-relaxed">{sol.description}</p>
                                    </a>
                                ))}
                            </div>
                            <div className="col-span-full border-t border-n20 h-10 diagonal-lines bg-backdrop"></div>
                        </motion.div>
                    )}
                    {activeMenu === 'resources' && (
                        <motion.div 
                            key="resources" 
                            data-menu="resources"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                            className="grid grid-cols-11 w-full"
                        >
                            <div className="col-span-3 p-2">
                                <div className="w-full h-full bg-spgreen p-6 relative overflow-hidden">
                                    <div className="absolute inset-0 dotted-background mask-ellipse-top-right opacity-50"></div>
                                    <div className="relative h-full z-10 flex flex-col justify-between">
                                        <div>
                                            <img src="/img/sp-academy.svg" alt="ScalePilot Academy" className="w-12 mb-2" />
                                            <h2 className="text-3xl xl:text-4xl font-semibold tracking-tight mb-2 text-white leading-snug">ScalePilot<br />Academy</h2>
                                            <p className="max-w-64 text-brand-light text-sm leading-relaxed mb-8">Master the verdict system and maximize your ROI with our free courses.</p>
                                        </div>
                                        <div className="w-full py-3 bg-brand-dark text-white flex items-center justify-center font-semibold">Coming soon</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-8 grid grid-cols-3 bg-n20 gap-px pl-px">
                                {resourceItems.map((res) => (
                                    <a key={res.title} href={res.link} className="p-6 flex flex-col justify-between bg-backdrop hover:bg-brand-light transition-all cursor-pointer group">
                                        <div>
                                            <div className="flex flex-col gap-3 mb-3">
                                                <img src={`/img/${res.icon}.svg`} alt={res.title} className="w-6" />
                                                <h4 className="font-semibold text-lg text-n100">{res.title}</h4>
                                            </div>
                                            <p className="max-w-80 text-sm xl:text-base text-n70 leading-snug">{res.description}</p>
                                        </div>
                                        <div className="flex justify-end">
                                            <div className="size-10 flex items-center justify-center overflow-hidden">
                                                <div className="-translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition duration-200">
                                                    <IconArrowUpRight className="size-8 text-brand" />
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                            <div className="col-span-full h-10 diagonal-lines border-t border-n20 bg-backdrop"></div>
                        </motion.div>
                    )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed top-18 left-0 w-full h-[calc(100vh-4.5rem)] bg-backdrop z-40 overflow-y-auto"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'calc(100vh - 4.5rem)', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.1, 1] }}
          >
             <div className="wrapper px-6 py-8 h-full">
                <div className="max-w-(--mw) mx-auto flex flex-col border-x border-n20 h-full">
                    {/* Features Mobile */}
                    <div className="border-b border-n20">
                        <button 
                            className={`w-full p-4 flex items-center justify-between text-xl font-semibold outline-none ${activeMobileMenu === 'features' ? 'bg-brand-mute' : ''}`}
                            onClick={() => setActiveMobileMenu(activeMobileMenu === 'features' ? null : 'features')}
                        >
                            <span className={activeMobileMenu === 'features' ? 'text-brand-dark' : ''}>Features</span>
                            <IconDownArrow className={`w-6 text-n50 transition-transform ${activeMobileMenu === 'features' ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                        {activeMobileMenu === 'features' && (
                            <motion.div 
                                initial={{ height: 0 }} 
                                animate={{ height: 'auto' }} 
                                exit={{ height: 0 }}
                                className="overflow-hidden border-t border-n20"
                            >
                                {featureItems.map(feat => (
                                    <Link key={feat.title} href={feat.link} className="p-4 bg-n5 border-b border-n20 flex items-start gap-4">
                                        <img src={`/img/${feat.icon}.svg`} alt={feat.title} className="w-6" />
                                        <div>
                                            <h4 className="font-semibold text-lg text-n100 mb-1">{feat.title}</h4>
                                            <p className="text-sm text-n60">{feat.description}</p>
                                        </div>
                                    </Link>
                                ))}
                                <div className="h-10 diagonal-lines"></div>
                            </motion.div>
                        )}
                        </AnimatePresence>
                    </div>

                    {/* Solutions Mobile */}
                    <div className="border-b border-n20">
                        <button 
                            className={`w-full p-4 flex items-center justify-between text-xl font-semibold outline-none ${activeMobileMenu === 'solutions' ? 'bg-brand-mute' : ''}`}
                            onClick={() => setActiveMobileMenu(activeMobileMenu === 'solutions' ? null : 'solutions')}
                        >
                            <span className={activeMobileMenu === 'solutions' ? 'text-brand-dark' : ''}>Solutions</span>
                            <IconDownArrow className={`w-6 text-n50 transition-transform ${activeMobileMenu === 'solutions' ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                        {activeMobileMenu === 'solutions' && (
                            <motion.div 
                                initial={{ height: 0 }} 
                                animate={{ height: 'auto' }} 
                                exit={{ height: 0 }}
                                className="overflow-hidden border-t border-n20"
                            >
                                {solutionsItems.map(sol => (
                                    <Link key={sol.title} href={sol.link} className="p-4 bg-n5 border-b border-n20 flex items-start gap-4">
                                        <img src={sol.image} alt={sol.title} className="w-10" />
                                        <div>
                                            <h4 className="font-semibold text-lg text-n100 mb-1">{sol.title}</h4>
                                            <p className="text-sm text-n60">{sol.description}</p>
                                        </div>
                                    </Link>
                                ))}
                                <div className="h-10 diagonal-lines"></div>
                            </motion.div>
                        )}
                        </AnimatePresence>
                    </div>

                    {/* Resources Mobile */}
                    <div className="border-b border-n20">
                        <button 
                            className={`w-full p-4 flex items-center justify-between text-xl font-semibold outline-none ${activeMobileMenu === 'resources' ? 'bg-brand-mute' : ''}`}
                            onClick={() => setActiveMobileMenu(activeMobileMenu === 'resources' ? null : 'resources')}
                        >
                            <span className={activeMobileMenu === 'resources' ? 'text-brand-dark' : ''}>Resources</span>
                            <IconDownArrow className={`w-6 text-n50 transition-transform ${activeMobileMenu === 'resources' ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                        {activeMobileMenu === 'resources' && (
                            <motion.div 
                                initial={{ height: 0 }} 
                                animate={{ height: 'auto' }} 
                                exit={{ height: 0 }}
                                className="overflow-hidden border-t border-n20"
                            >
                                <div className="p-4 bg-n5 border-b border-n20 flex items-start gap-4">
                                    <IconArrowUpRight className="size-5 text-n50 mt-1" />
                                    <div className="flex items-center gap-3">
                                        <h4 className="font-semibold text-lg text-n100 mb-1">ScalePilot Academy</h4>
                                        <div className="text-xs bg-brand-light border border-spgreen px-2 text-brand-dark py-1">Coming soon</div>
                                    </div>
                                </div>
                                {resourceItems.map(res => (
                                    <Link key={res.title} href={res.link} className="p-4 bg-n5 border-b border-n20 flex items-start gap-4">
                                        <IconArrowUpRight className="size-5 text-n50 mt-1" />
                                        <h4 className="font-semibold text-lg text-n100 mb-1">{res.title}</h4>
                                    </Link>
                                ))}
                                <div className="h-10 diagonal-lines"></div>
                            </motion.div>
                        )}
                        </AnimatePresence>
                    </div>

                    <Link href="/pricing" className="p-4 text-xl font-semibold text-n100 border-b border-n20">Pricing</Link>

                    <div className="px-4 mt-6 flex gap-4 pb-6 mb-20 border-b border-n20">
                        {/* <button className="w-full h-14 bg-n5 text-n100 font-semibold border border-n20">Log in</button>
                        <button className="w-full h-14 bg-brand text-n100 font-semibold">Start free</button> */}
                        <Link href="/pricing" className="w-full h-14 bg-brand text-n100 font-semibold flex items-center justify-center">See Pricing &rarr;</Link>
                    </div>
                </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default TheNav;
