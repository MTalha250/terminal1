import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white px-8 py-10 md:px-16">
      <div className="flex flex-col md:flex-row justify-between gap-8 max-w-6xl">
        <div className="flex-1">
          <img
            src="/images/logo-white.png"
            alt="Terminal One"
            className="w-32"
          />

          <div className="mb-2 text-sm">
            <h4 className="font-semibold mb-2">Address:</h4>
            <p className="text-blue-100">
              Madrassa Lane, Allee Brillant,
              <br />
              Castel, Phoenix, Republic of Mauritius
            </p>
          </div>

          <div className="mb-4 text-sm">
            <h4 className="font-semibold mb-2">Contact:</h4>
            <p className="text-blue-100">(230) 5457 6535</p>
            <a
              href="mailto:info@terminaloneltd.com"
              className="text-blue-100 hover:text-white"
            >
              info@terminaloneltd.com
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-3">
            <Facebook className="w-5 h-5" />
            <Instagram className="w-5 h-5" />
            <Twitter className="w-5 h-5" />
            <Linkedin className="w-5 h-5" />
            <Youtube className="w-5 h-5" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div>
            <ul className="space-y-2 text-blue-100">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-2 text-blue-100">
              <li>
                <Link href="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-white">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-white">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="border-t border-blue-500 mt-8 pt-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-blue-100">
          <p>© 2025 Terminal One. All rights reserved.</p>
          <div className="flex space-x-6 mt-2 md:mt-0">
            <Link href="/privacy" className="hover:text-white underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white underline">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-white underline">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
