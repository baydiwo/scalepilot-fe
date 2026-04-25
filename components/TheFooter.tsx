'use client';

import React from 'react';
import Link from 'next/link';
import CtaStartFree from './CtaStartFree';
import IconGlobe from './IconGlobe';
import IconUpTriangle from './IconUpTriangle';
import ScalePilotGiant from './ScalePilotGiant';

const footers = [
  {
    title: "Solutions",
    menus: [
      { title: "Meta Ad Optimization", link: "/" },
      { title: "Verdict Engine", link: "/" },
      { title: "Scale Tracker", link: "/" },
      { title: "Action Hub", link: "/" },
      { title: "Scale Intelligence", link: "/" },
      { title: "Auto-Scaling", link: "/" },
    ]
  },
  {
    title: "Resources",
    menus: [
      { title: "Why ScalePilot", link: "/" },
      { title: "Support", link: "/" },
      { title: "Community", link: "/" },
      { title: "Knowledge Base", link: "/" }
    ]
  },
  {
    title: "Company",
    menus: [
      { title: "About Us", link: "/" },
      { title: "Blog", link: "/" },
      { title: "Brand Assets", link: "/" }
    ]
  },
];

const legals = [
  { title: "Terms of Service", link: "/terms-of-service" },
  { title: "Privacy Policy", link: "/privacy-policy" },
  { title: "Cookies", link: "#" },
  { title: "Website Terms", link: "#" }
];

const socials = [
  { title: "Instagram", link: "/" },
  { title: "TikTok", link: "/" },
  { title: "Facebook", link: "/" },
  { title: "LinkedIn", link: "/" }
];

const TheFooter: React.FC = () => {
  const [year, setYear] = React.useState<number | string>('');

  React.useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <footer className="mt-20">
      <CtaStartFree />
      <div className="border-t border-n20">
        <div className="wrapper">
          <div className="max-w-(--mw) mx-auto relative px-6 py-6 border-x border-n20">
            <img
              src="/scalepilot-logo/svg/scalepilot-logo-default.svg"
              alt="ScalePilot"
              className="w-32"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-n20">
        <div className="wrapper">
          <div className="max-w-(--mw) mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-6 border-x border-n20">
              <div className="lg:col-span-4 gap-6 grid sm:grid-cols-2 md:grid-cols-6 px-6 py-10">
                {footers.map((item) => (
                  <div key={item.title} className="col-span-2">
                    <span className="block mb-2 font-semibold">{item.title}</span>
                    <ul className="grid gap-y-2">
                      {item.menus.map((menu) => (
                        <li key={menu.title}>
                          <Link
                            href={menu.link}
                            className="text-sm lg:text-base text-n70 hover:text-brand-dark transition-colors"
                          >
                            {menu.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-2">
                <div className="h-full flex flex-col lg:border-l border-n20">
                  <div className="lg:flex-1 h-10 lg:h-full diagonal-lines lg:border-b border-y lg:border-y-0 border-n20">
                  </div>
                  <div className="px-6 py-10">
                    <div className="mb-8">
                      <span className="block font-semibold mb-1">Follow us on socials</span>
                      <div className="flex items-center gap-3">
                        {socials.map((item) => (
                          <Link
                            key={item.title}
                            href={item.link}
                            className="text-n70 text-sm hover:text-brand-dark transition-colors"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="size-2.5 bg-brand rounded-full"></div>
                      <span className="block text-n60 text-xs tracking-base">Service status: normal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div className="max-w-(--mw) mx-auto relative">
          <div className="h-14 diagonal-lines border-x border-t border-n20"></div>
        </div>
      </div>

      <div className="wrapper">
        <div className="max-w-(--mw) mx-auto relative">
          <ul
            className="flex md:items-center md:justify-between flex-wrap md:h-16 border-x border-t border-n20 text-sm py-3 lg:py-0"
          >
            <li className="w-1/2 md:w-auto px-6 py-2 md:py-0 text-n60">
              © {year} Scalepilot. All rights reserved.
            </li>
            {legals.map((item) => (
              <li
                key={item.title}
                className="w-1/2 md:w-auto px-6 py-2 md:py-0 text-n60 hover:text-n100 transition duration-200"
              >
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))}
            <li className="w-1/2 md:w-auto px-6 py-2 md:py-0 flex items-center gap-1">
              <IconGlobe className="size-4" />
              <span>English</span>
              <IconUpTriangle className="size-6" />
            </li>
          </ul>
        </div>
      </div>

      <div className="py-6 border-t border-n20">
        <div className="wrapper">
          <ScalePilotGiant className="w-full text-n20" />
        </div>
      </div>
    </footer>
  );
};

export default TheFooter;
