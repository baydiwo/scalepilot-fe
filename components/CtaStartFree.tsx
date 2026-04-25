import React from 'react';

const CtaStartFree: React.FC = () => {
  return (
    <section className="mb-6 border-y border-n20">
      <div className="wrapper overflow-hidden">
        <div className="max-w-(--mw) mx-auto relative min-h-32 p-10 lg:p-4 flex flex-col lg:flex-row sm:items-center bg-brand text-backdrop sm:justify-center gap-6 lg:gap-10 border-x border-n20/25">
          <div className="h-[calc(100%+2px)] w-80 diagonal-lines -top-px absolute right-[calc(100%+1px)]"></div>
          <div className="h-[calc(100%+2px)] w-80 diagonal-lines -top-px absolute left-[calc(100%+1px)]"></div>

          <div className="w-full h-full absolute inset-0 dotted-background mask-ellipse z-0 pointer-events-none"></div>

          <div className="relative z-10">
            <span className="tracking-dense font-semibold text-2xl sm:text-3xl lg:text-3xl text-n110 text-center block lg:text-left">
              Start optimize your profit. Get started free today.
            </span>
          </div>
          <button className="px-8 py-3 bg-n110 text-xl font-semibold text-brand transition duration-200 hover:scale-105 cursor-pointer hover:shadow-n110/75 shadow-2xl shadow-transparent">
            Sign up free
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaStartFree;
