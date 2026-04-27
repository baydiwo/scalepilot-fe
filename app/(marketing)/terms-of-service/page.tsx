import React from 'react';
import type { Metadata } from 'next';
import TitleAccentTriangle from '@/components/TitleAccentTriangle';
import CtaGeneral from '@/components/CtaGeneral';

export const metadata: Metadata = {
  title: 'Terms of Service | ScalePilot',
};

const TermsOfServicePage: React.FC = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="max-w-(--mw) mx-auto relative border-x border-n20 min-h-[60vh] px-6 py-20 md:px-20">
          <div className="max-w-3xl">
            <div className="flex gap-4 items-center mb-6">
              <TitleAccentTriangle className="w-10" color="green" />
              <span className="font-medium text-sm text-spgreen tracking-widest uppercase">Legal</span>
            </div>

            <h1 className="text-n100 text-5xl md:text-7xl leading-none mb-12">
              Terms of Service
            </h1>

            <div className="prose prose-n100 max-w-none space-y-12 text-n80 leading-relaxed">
              <section>
                <h2 className="text-2xl text-n100 font-semibold mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using ScalePilot (&quot;the Platform&quot;), you agree to be bound by these Terms of Service. If you are using the Platform on behalf of an agency or company, you represent that you have the authority to bind that entity to these terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-n100 font-semibold mb-4">2. Description of Service</h2>
                <p>
                  ScalePilot provides a &quot;Decision Engine&quot; for Meta Ads, offering automated verdicts (SCALE UP, STOP LOSS, etc.) and a Scale Tracker for historical data analysis. You understand that ScalePilot acts as a &quot;Co-Pilot,&quot; and the final execution of any advertising action is your responsibility.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-n100 font-semibold mb-4">3. Meta Platform Compliance</h2>
                <p>
                  ScalePilot interacts with your Meta Ads account via the Meta Ads API. You agree to comply with all Meta Advertising Policies and Platform Terms. ScalePilot is not responsible for any account suspensions or penalties imposed by Meta resulting from your advertising activities.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-n100 font-semibold mb-4">4. Subscriptions & Payments</h2>
                <p>
                  ScalePilot offers several subscription tiers (Starter, Pro, Agency). Fees are billed in advance on a monthly or annual basis. You agree to provide accurate billing information and authorize us to charge all accrued fees to your selected payment method.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-n100 font-semibold mb-4">5. Intellectual Property</h2>
                <p>
                  The Platform, including its proprietary ROAS Engine, source code, and design, is owned by ScalePilot. You retain all ownership rights to the advertising data and insights imported from your Meta accounts.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-n100 font-semibold mb-4">6. Limitation of Liability</h2>
                <p>
                  ScalePilot provides data-driven recommendations, but we do not guarantee specific advertising results. Under no circumstances shall ScalePilot be liable for any direct or indirect losses, including but not limited to lost ad spend, decreased ROAS, or business interruption.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-n100 font-semibold mb-4">7. Termination</h2>
                <p>
                  You may cancel your subscription at any time. ScalePilot reserves the right to suspend or terminate access to the Platform for any breach of these terms or non-payment of fees.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-n100 font-semibold mb-4">8. Governing Law</h2>
                <p>
                  These terms are governed by the laws of the Republic of Indonesia. Any disputes arising from these terms shall be resolved in the appropriate courts of Indonesia.
                </p>
              </section>

              <div className="pt-12 border-t border-n20 text-sm italic">
                Last updated: April 24, 2026
              </div>
            </div>
          </div>
        </div>
      </div>

      <CtaGeneral />
    </div>
  );
};

export default TermsOfServicePage;
