'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const WaitlistPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Custom Header for Waitlist */}
      <div className="h-18 border-b border-n20 flex items-center">
        <div className="wrapper w-full">
          <div className="max-w-(--mw) mx-auto relative flex items-center justify-between h-full">
            <Link href="/">
              <Image
                src="/scalepilot-logo/svg/scalepilot-logo-default.svg"
                alt="ScalePilot"
                width={160}
                height={40}
                className="w-40 h-auto"
                priority
                style={{ width: '160px', height: 'auto' }}
              />
            </Link>
            <div className="flex items-center gap-6 text-n80">
              <Link
                href="/pricing"
                className="font-semibold border border-n20 px-4 py-3 text-n100 transition duration-200 hover:bg-n100 hover:text-white"
              >
                Check Pricing &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div id="hero" className="wrapper flex-1 flex flex-col justify-center">
          <div className="max-w-(--mw) mx-auto relative w-full">
            <div className="absolute inset-0 opacity-50 pointer-events-none grid-background mask-ellipse-center"></div>

            <div
              id="hero-headline"
              className="w-full border-x border-n20 flex items-center justify-center flex-col py-10 relative z-10"
            >
              <span className="block mb-10 px-7 py-2 font-semibold bg-brand-light border border-spgreen text-spgreen">
                Something big is coming
              </span>
              <h1 className="text-n100 text-center text-[clamp(2.75rem,9vw,6rem)] leading-none!">
                The future of<br />
                <span className="text-spgreen">scaling</span> is agentic.
              </h1>
              <p className="px-4 md:px-0 mt-6 text-n80 text-base md:text-xl text-center max-w-xl">
                ScalePilot is an AI-powered scaling platform designed to optimize your business operations and maximize your profit in real-time.
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 h-full pb-10">
          <div className="w-full diagonal-lines border-y border-n20">
            <div className="wrapper py-6">
              <div className="max-w-(--mw) mx-auto relative flex items-center justify-center">
                <div className="w-full max-w-xl flex items-center justify-center border-x border-n20 bg-white">
                  <input
                    type="text"
                    className="w-full flex-1 p-4 border border-transparent focus:outline-none focus:border-brand text-base bg-backdrop placeholder:text-n70"
                    placeholder="Your email address"
                  />
                  <button className="cursor-pointer px-6 py-4 bg-spgreen text-n100 whitespace-nowrap font-semibold transition duration-200 hover:bg-n100 hover:text-white border-none">
                    Join the waitlist
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="wrapper mt-6">
            <div className="max-w-(--mw) mx-auto relative flex items-center justify-center">
              <small className="text-n80 tracking-dense">Be the first to know when we launch. No spam, ever.</small>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Footer for Waitlist */}
      <div className="h-18 border-t border-n20">
        <div className="wrapper h-full">
          <div className="max-w-(--mw) mx-auto relative flex items-center justify-between h-full">
            <small className="text-n80">© 2026 Scalepilot. All rights reserved.</small>
            <div className="flex items-center gap-6 text-n80">
              <a href="#" className="hover:text-n100 transition-colors">Instagram</a>
              <a href="#" className="hover:text-n100 transition-colors">TikTok</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitlistPage;
