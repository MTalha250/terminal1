import React from "react";
import Hero from "@/components/common/Hero";

const PrivacyPolicy = () => {
  return (
    <div>
      <Hero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information at Terminal One."
        img="/images/home-about.jpg"
      />
      <main className="max-w-4xl mx-auto px-8 md:px-16 py-10 md:py-20">
        <h1 className="text-3xl md:text-5xl font-semibold mb-6">
          Privacy Policy
        </h1>
        <p className="text-slate-600 mb-10">Last updated: August 2025</p>

        <section className="space-y-6 text-slate-700 leading-relaxed">
          <p>
            Terminal One ("we", "our", "us") is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you interact with our website
            and services.
          </p>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              Information We Collect
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Contact Information: such as first name, last name, email,
                phone, and any message you provide via our contact forms.
              </li>
              <li>
                Usage Data: pages visited, interactions, browser type, device
                identifiers, and approximate location (through analytics tools).
              </li>
              <li>
                Cookies and Similar Technologies: to enhance site functionality
                and analyze usage trends.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              How We Use Information
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to inquiries and provide customer support.</li>
              <li>
                To operate, maintain, and improve our website and services.
              </li>
              <li>
                To communicate updates, announcements, and marketing (where
                permitted).
              </li>
              <li>
                To comply with legal obligations and enforce our agreements.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">Cookies</h2>
            <p>
              We use cookies to remember your preferences and analyze traffic.
              You can control cookies via your browser settings. Disabling
              cookies may impact certain site features.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              Data Sharing
            </h2>
            <p>
              We do not sell personal information. We may share data with
              service providers who assist us in operating our website (e.g.,
              hosting, analytics), under confidentiality obligations, or when
              required by law.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              Data Security
            </h2>
            <p>
              We implement reasonable administrative, technical, and physical
              safeguards to protect personal information. However, no method of
              transmission over the internet is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              Your Rights
            </h2>
            <p>
              Depending on your location, you may have rights to access,
              correct, or delete your personal information. To exercise these
              rights, please contact us using the details below.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              International Transfers
            </h2>
            <p>
              If you access our services from outside our operating regions,
              your information may be transferred and processed in countries
              with different data protection laws.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will post
              the new effective date when changes are made.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              Contact Us
            </h2>
            <p>
              For questions about this Privacy Policy, contact us at
              <span className="font-semibold"> info@terminaloneltd.com</span> or
              by mail at Madrassa Lane, Allee Brillant, Castel, Phoenix,
              Republic of Mauritius.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
