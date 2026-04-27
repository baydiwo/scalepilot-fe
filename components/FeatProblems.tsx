import React from 'react';
import Image from 'next/image';
import IconWarning from './IconWarning';

const problems = [
  '90% of media buyers scale based on &quot;gut feeling&quot; or incomplete data.',
  'Most tools just show you more charts. ScalePilot shows you what to do.',
  'If you&apos;re still obsessing over Ads Manager every hour, you&apos;re not scaling, you&apos;re reacting.'
]

const FeatProblems: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="max-w-(--mw) mx-auto relative border-x border-n20">
        <div className="grid lg:grid-cols-2">
          <div className="h-full">
            <ul className="flex flex-col h-full font-semibold">
              {problems.map((problem) => (
                <li
                  key={problem}
                  className="flex-1 px-6 py-6 flex items-center lg:py-4 border-b last:border-b-0 border-n20 relative group"
                >
                  <div
                    className="origin-left w-full h-full absolute inset-0 bg-spred-light/60 transition duration-300 ease-out scale-x-0 group-hover:scale-x-100"
                  ></div>
                  <span className="flex gap-6 items-start max-w-lg relative z-10">
                    <IconWarning className="size-10 text-n60 transition duration-200 group-hover:text-spred" />
                    <span className="text-n100 text-xl" dangerouslySetInnerHTML={{ __html: problem }}></span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full aspect-video relative">
            <Image
              src="/img/problems.jpg"
              alt="The Problem"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatProblems;
