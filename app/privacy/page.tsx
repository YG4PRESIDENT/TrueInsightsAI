import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white flex justify-center">
        <div className="w-full">
          {/* Top spacing to clear navbar */}
          <div className="h-24"></div>
          
          <div className="max-w-3xl mx-auto px-6 py-12 pb-20">
          <h1 className="text-4xl font-bold text-black mb-8">Privacy Policy</h1>
          
          <div className="space-y-6 text-gray-700">
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="font-semibold text-black">Effective Date: November 1, 2025</p>
              <p className="text-sm mt-1">Last Updated: November 1, 2025</p>
            </div>

            <p>
              Think Outside The Box Ventures, LLC ("Company," "we," "us," or "our") operates Rankett.com ("Service"). This Privacy Policy explains how we collect, use, and protect your personal data.
            </p>

            <p>
              We comply with applicable data protection laws, including the EU General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">1. Information We Collect</h2>
              <ul className="space-y-3 ml-4">
                <li>
                  <strong className="text-black">Account Data:</strong> Name, email address, billing address, and payment details (processed via Stripe). Our database stores only your email address and subscription ID.
                </li>
                <li>
                  <strong className="text-black">Usage Data:</strong> Login/authentication data, session data (via Microsoft Clarity), and analytics such as device type, browser, IP address, geolocation, and interactions with the Service (via Google Analytics).
                </li>
                <li>
                  <strong className="text-black">Third-Party Data:</strong> Information obtained from OpenAI (ChatGPT), Google Gemini, Perplexity, and SimilarWeb, as well as data submitted by customers about their websites or brands.
                </li>
                <li>
                  <strong className="text-black">Customer Input Data:</strong> Any information you choose to submit. We do not intentionally collect personal data of your end-users; if you provide such data, you are responsible for ensuring appropriate rights and consents.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">2. Cookies & Tracking</h2>
              <p>
                We use cookies and similar technologies to operate the Service, enable authentication, analyze performance, and improve functionality. You can control cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">3. How We Use Data</h2>
              <p className="mb-2">We use personal data to:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Provide and operate the Service.</li>
                <li>Generate reports and analytics.</li>
                <li>Process payments and manage subscriptions.</li>
                <li>Improve and secure the Service.</li>
                <li>Communicate with you.</li>
                <li>Comply with legal obligations.</li>
                <li>Send marketing communications if you have opted in (you may withdraw consent at any time).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">4. Legal Basis (GDPR)</h2>
              <p className="mb-2">For users in the EEA/UK, we process personal data based on:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Performance of a contract (providing the Service).</li>
                <li>Legitimate interests (improving and securing the Service).</li>
                <li>Compliance with legal obligations.</li>
                <li>Consent, where required (e.g., for marketing).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">5. Third-Party Service Providers</h2>
              <p className="mb-2">We use trusted third-party providers to operate the Service, including:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Stripe – Payments</li>
                <li>Vercel – Hosting</li>
                <li>Microsoft Clarity – Session analytics</li>
                <li>Google Analytics – Web analytics</li>
                <li>OpenAI (ChatGPT) – AI data processing</li>
                <li>Google Gemini – AI data processing</li>
                <li>Perplexity – AI data processing</li>
                <li>SimilarWeb – Data enrichment</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">6. International Transfers</h2>
              <p>
                If you are located in the EEA, UK, or Switzerland, your data may be transferred to the U.S. We rely on Standard Contractual Clauses (SCCs) and implement safeguards to protect your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">7. Data Retention</h2>
              <p>
                We retain personal data as long as your account is active or as needed to provide the Service, and as required by law thereafter.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">8. Your Rights</h2>
              <p className="mb-2"><strong className="text-black">GDPR:</strong> Right to access, correct, delete, restrict, port, and object.</p>
              <p className="mb-2"><strong className="text-black">CCPA:</strong> Right to know, delete, and opt out of "sale" (we do not sell data).</p>
              <p className="mb-2"><strong className="text-black">Requests:</strong> 📩 team@rankett.com</p>
              <p>We will respond within the required timeframe (generally 30 days).</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">9. Lawful Disclosure</h2>
              <p>
                We may disclose your information if required by law, legal process, or government request.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">10. Security</h2>
              <p>
                We implement appropriate safeguards to protect your data. No system is completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">11. Breach Notification</h2>
              <p>
                If a data breach occurs that affects your personal data, we will notify you and relevant authorities as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">12. Children's Data</h2>
              <p>
                The Service is not directed to individuals under 18.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">13. Aggregated & Anonymized Data</h2>
              <p>
                We may use anonymized or aggregated data for analytics, benchmarking, and product improvement. Such data does not identify individuals.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">14. Data Processing Addendum (DPA)</h2>
              <p>
                Enterprise customers requiring a GDPR Data Processing Addendum (DPA) may request one by contacting us at team@rankett.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">15. Changes</h2>
              <p>
                We may update this Privacy Policy from time to time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">16. Contact</h2>
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

