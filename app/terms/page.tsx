/* eslint-disable react/no-unescaped-entities */
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white flex justify-center">
        <div className="w-full">
          {/* Top spacing to clear navbar */}
          <div className="h-24"></div>
          
          <div className="max-w-3xl mx-auto px-6 py-12 pb-20">
          <h1 className="text-4xl font-bold text-black mb-8">Terms and Conditions</h1>
          
          <div className="space-y-6 text-gray-700">
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="font-semibold text-black">Effective Date: November 1, 2025</p>
              <p className="text-sm mt-1">Last Updated: November 1, 2025</p>
            </div>

            <p>
              These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of Rankett.com (the &quot;Service&quot;), operated by Think Outside The Box Ventures, LLC, a Wyoming limited liability company (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing or using the Service, you agree to be bound by these Terms.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">1. Contracting Entity</h2>
              <p>
                Rankett.com is a trade name of Think Outside The Box Ventures, LLC. When you use the Service, you are entering into a contract with Think Outside The Box Ventures, LLC, located at 30 N Gould St Ste R, Sheridan, WY 82801.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">2. Eligibility</h2>
              <p>
                You must be at least 18 years old and legally able to form a binding contract to use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">3. Description of Service</h2>
              <p>
                Rankett.com is a subscription-based analytics platform designed to measure and monitor brand visibility within AI-generated search results from AI search engines, including but not limited to ChatGPT, Gemini, and Perplexity. The Service provides GEO (Generative Engine Optimization) insights, local search intelligence, and helps businesses track and optimize their presence across AI platforms. The Service identifies whether and how a brand appears in AI outputs, analyzes the sources cited by large language models (LLMs), and tracks changes to visibility over time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">4. Account Registration</h2>
              <p>
                You agree to provide accurate and complete information when creating your account and to keep your credentials secure. You are responsible for all activity under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">5. Free AI Visibility Report</h2>
              <p>
                We may offer a free AI Visibility Report in exchange for providing your email address. This report is provided &quot;as is,&quot; without warranty of any kind.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">6. Subscriptions, Fees, and Payment</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>Fees are billed in advance through our payment provider, Stripe.</li>
                <li>You are solely responsible for managing and cancelling your subscription if you no longer wish to continue. Cancellation takes effect at the end of the billing cycle, and no refunds are issued for unused time.</li>
                <li>Refunds are not provided except where required by law. In limited cases where a billing error occurs through no fault of your own (e.g., a failed payment webhook), we may issue a refund or credit at our sole discretion.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">7. API Access</h2>
              <p>
                API access is available only to paid customers on a custom enterprise plan, subject to additional terms provided separately. Contact team@rankett.com for details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">8. Acceptable Use</h2>
              <p className="mb-2">You agree not to misuse the Service, including by:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Using it for unlawful purposes.</li>
                <li>Reverse engineering or attempting to extract source code.</li>
                <li>Interfering with the security or functionality of the Service.</li>
                <li>Uploading or transmitting unlawful, infringing, or harmful content.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">9. Intellectual Property</h2>
              <p>
                All rights, title, and interest in the Service (excluding customer-provided content and third-party tools) remain with the Company and its licensors.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">10. Service Availability & Beta Features</h2>
              <p>
                The Service is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We do not guarantee uninterrupted or error-free availability. Certain features may be offered as beta, preview, or trial services. These are provided without warranty and may be modified or discontinued at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">11. Data & Privacy</h2>
              <p>
                Your use of the Service is subject to our Privacy Policy, which explains how we collect, use, and process data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">12. AI Accuracy Disclaimer</h2>
              <p>
                Reports and analytics are generated using third-party AI providers. Results may not be &quot;accurate or complete,&quot; and are provided for informational purposes only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">13. Aggregated Data</h2>
              <p>
                We may use aggregated and anonymized data derived from use of the Service for analysis, benchmarking, and product improvement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">14. Termination</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>We may suspend or terminate your access immediately if you breach these Terms, fail to pay, or misuse the Service.</li>
                <li>We may terminate at our convenience with 30 days' notice.</li>
                <li>You may cancel at any time, but fees already paid are non-refundable.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">15. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless the Company, its affiliates, and employees from any claims, damages, liabilities, costs, or expenses arising from your use of the Service, violation of these Terms, or infringement of third-party rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">16. DMCA & IP Infringement</h2>
              <p>
                If you believe content within the Service infringes your intellectual property rights, please notify us at team@rankett.com with sufficient details, and we will respond in accordance with applicable law, including the Digital Millennium Copyright Act (DMCA).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">17. Confidentiality</h2>
              <p>
                Each party agrees to protect the other&apos;s confidential information and not disclose it except as necessary to perform under these Terms or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">18. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, our liability for any claim is limited to the fees you paid in the 12 months preceding the claim. We are not liable for indirect, incidental, or consequential damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">19. Force Majeure</h2>
              <p>
                We are not liable for delays or failures caused by circumstances beyond our reasonable control, including internet outages, hosting provider failures, natural disasters, war, or government actions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">20. Assignment</h2>
              <p>
                You may not assign these Terms without our prior written consent. We may assign these Terms in connection with a merger, acquisition, or sale of assets.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">21. Marketing Use</h2>
              <p>
                Unless you opt out in writing, you grant us the right to use your company name and logo for marketing purposes. Testimonials and endorsements require your prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">22. Entire Agreement & Severability</h2>
              <p>
                These Terms constitute the entire agreement between you and us. If any provision is found unenforceable, the remaining provisions remain in full effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">23. Governing Law & Venue</h2>
              <p>
                These Terms are governed by the laws of Wyoming, without regard to conflict of law principles. Any dispute shall be resolved exclusively in the state or federal courts of Wyoming.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">24. Changes</h2>
              <p>
                We may update these Terms from time to time. Continued use of the Service constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">25. Contact</h2>
              <p>
                📩 <a href="mailto:team@rankett.com" className="text-blue-600 hover:underline">team@rankett.com</a>
              </p>
            </section>
          </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

