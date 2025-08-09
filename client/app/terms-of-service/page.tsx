import React from "react";
import Hero from "@/components/common/Hero";

function TermsOfService() {
  return (
    <div>
      <Hero
        title="Terms of Service"
        subtitle="The rules and conditions for using Terminal One's website and services."
        img="/images/future-hero.jpg"
      />
      <main className="max-w-4xl mx-auto px-8 md:px-16 py-10 md:py-20">
        <p className="text-slate-600 mb-10">Last updated: August 2025</p>

        <section className="space-y-6 text-slate-700 leading-relaxed">
          <p>
            These Terms of Service ("Terms") govern your use of the Terminal One
            website and services. By accessing or using our site, you agree to
            be bound by these Terms.
          </p>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              Use of Services
            </h2>
            <p>
              You agree to use our services in compliance with applicable laws
              and regulations, and to not engage in any activity that disrupts
              or harms our infrastructure.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              Accounts and Submissions
            </h2>
            <p>
              If you submit an inquiry or provide contact information, you are
              responsible for ensuring it is accurate and up to date.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              Intellectual Property
            </h2>
            <p>
              All content, trademarks, and logos on this site are the property
              of Terminal One or its licensors and may not be used without prior
              permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              Disclaimer of Warranties
            </h2>
            <p>
              Our services are provided on an "as is" and "as available" basis
              without warranties of any kind, express or implied.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, Terminal One shall not be
              liable for any indirect, incidental, special, or consequential
              damages arising from your use of the site or services.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              Third-Party Links
            </h2>
            <p>
              Our site may contain links to third-party websites. We are not
              responsible for the content or practices of those websites.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              Changes to Terms
            </h2>
            <p>
              We may update these Terms from time to time. Continued use of the
              site after changes are posted constitutes acceptance of the
              revised Terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              Governing Law
            </h2>
            <p>
              These Terms are governed by the laws of the Republic of Mauritius,
              without regard to conflict of law principles.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              Contact Us
            </h2>
            <p>
              For questions about these Terms, contact us at
              <span className="font-semibold"> info@terminaloneltd.com</span>.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default TermsOfService;
