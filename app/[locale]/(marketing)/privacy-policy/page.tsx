import React from 'react';
import type { Metadata } from 'next';
import TitleAccentTriangle from '@/components/TitleAccentTriangle';
import CtaGeneral from '@/components/CtaGeneral';

export const metadata: Metadata = {
  title: 'Privacy Policy | ScalePilot',
};

const PrivacyPolicyPage: React.FC = () => {
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
              Privacy Policy
            </h1>

            <div className="prose prose-n100 max-w-none space-y-12 text-n80 leading-relaxed">
              <section>
                <h2 className="text-2xl text-n100 font-semibold mb-4">1. Introduction</h2>
                <p>
                  At ScalePilot, we understand that your advertising data is your competitive advantage. Our &quot;Decision Engine&quot; is built on a foundation of trust and transparency. This Privacy Policy outlines how we collect, process, and protect your data when you use our Meta Ads optimization platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-n100 font-semibold mb-4">2. Data We Collect</h2>
                <p>To provide our real-time verdicts and historical tracking, we collect the following types of information:</p>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                  <li><strong className="text-n100">Account Information:</strong> Name, email address, and authentication tokens provided through Meta OAuth and Supabase.</li>
                  <li><strong className="text-n100">Advertising Insights:</strong> Campaign names, ad set details, ad creatives, and performance metrics (Spend, ROAS, CPA, CTR) fetched via the Meta Ads API.</li>
                  <li><strong className="text-n100">Activity Logs:</strong> Records of actions taken within the ScalePilot platform, such as budget adjustments, &quot;Scale Up&quot; decisions, and &quot;Stop Loss&quot; triggers.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-n100 font-semibold mb-4">3. How We Use Your Data</h2>
                <p>Your data is used exclusively to power the ScalePilot features described in our framework:</p>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                  <li><strong className="text-n100">Verdict Generation:</strong> Processing real-time Meta Ads data to provide SCALE UP, STOP LOSS, or MONITOR recommendations.</li>
                  <li><strong className="text-n100">Scale Tracker:</strong> Maintaining a historical record of your scaling decisions to help you learn from past performance.</li>
                  <li><strong className="text-n100">Automation:</strong> Executing budget updates or reverts based on your explicit commands within the Action Hub.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-n100 font-semibold mb-4">4. Data Security & Access</h2>
                <p>
                  We implement strict security measures to ensure your data remains confidential:
                </p>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                  <li><strong className="text-n100">Role-Based Access:</strong> Access is limited based on user roles (e.g., Kepala-SPPG) and strictly enforced per Client ID.</li>
                  <li><strong className="text-n100">Encryption:</strong> All data in transit and at rest is encrypted using industry-standard protocols.</li>
                  <li><strong className="text-n100">No Data Selling:</strong> We never sell your advertising data to third parties. Your campaign performance is yours alone.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-n100 font-semibold mb-4">5. Third-Party Integrations</h2>
                <p>
                  ScalePilot integrates directly with the Meta Ads API. Your use of our platform is also subject to the Meta Platform Terms and Privacy Policy. We use Supabase for secure database management and authentication.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-n100 font-semibold mb-4">6. Your Rights</h2>
                <p>
                  You have the right to access, correct, or delete your personal and advertising data stored on our platform. You can disconnect your Meta account at any time, which will revoke our access to your advertising insights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-n100 font-semibold mb-4">7. Contact Us</h2>
                <p>
                  If you have any questions regarding this Privacy Policy or our data practices, please contact our team at support@scalepilot.id.
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

export default PrivacyPolicyPage;
