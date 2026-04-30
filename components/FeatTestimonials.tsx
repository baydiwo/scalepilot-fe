import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Irvan Nugraha',
    role: 'Business Owner',
    quote: 'ScalePilot has completely stabilized our growth. We used to hit a ceiling every time we scaled, but now the Verdict Engine handles the risk for us. It&apos;s like having a senior media buyer on call 24/7.',
    avatar: '/img/user1.jpg',
  },
  {
    name: 'Destin Siahaan',
    role: 'Professional Marketer',
    quote: 'The speed of decision-making is what sets ScalePilot apart. I no longer waste hours staring at dashboard trends. If an ad is winning, we scale it instantly. If it&apos;s not, we&apos;re out before it drains the budget.',
    avatar: '/img/user2.jpg',
  },
  {
    name: 'Tio Bagas Abimanyu',
    role: 'Advertising Manager',
    quote: 'Managing 50+ ad accounts manually is impossible. ScalePilot gives my team the control they need to maintain high performance across the board. It turned our reactive management into a proactive scaling machine.',
    avatar: '/img/user3.jpg',
  }
];

const FeatTestimonials: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="max-w-(--mw) mx-auto relative">
        <div className="h-[calc(100%+2px)] w-80 diagonal-lines border-y -top-px border-n20 absolute right-full"></div>
        <div className="h-[calc(100%+2px)] w-80 diagonal-lines border-y -top-px border-n20 absolute left-full"></div>

        <div className="grid lg:grid-cols-3 min-h-80 border-b border-n20">
          {testimonials.map((testimonial, idx) => (
            <div
              key={testimonial.name}
              className="flex flex-col lg:flex-row"
            >
              <div className="bg-white flex flex-col border-x border-n20 relative">
                <div className="flex-1 p-9 relative z-10">
                  <p className="leading-relaxed font-medium text-lg" dangerouslySetInnerHTML={{ __html: testimonial.quote }}></p>
                </div>

                <div className="flex items-center gap-4 mb-9 px-9 border-y border-n20">
                  <div className="border-x border-n20">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={72}
                      height={72}
                      className="size-18 object-cover"
                    />
                  </div>
                  <div>
                    <span className="block text-lg font-semibold">{testimonial.name}</span>
                    <span className="block text-n80 text-sm font-medium">{testimonial.role}</span>
                  </div>
                </div>
              </div>

              {idx !== testimonials.length - 1 && (
                <div className="shrink-0 w-full h-6 lg:w-6 lg:h-full diagonal-lines"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatTestimonials;
