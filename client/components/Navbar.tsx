"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import navLinks from "@/constants/navLinks";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full fixed z-50 top-0 left-0 px-8 md:px-16 py-3 flex justify-between items-center transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : ""
      }`}
    >
      <div className="flex items-center gap-10">
        <Link href="/">
          <img
            src={scrolled ? "/images/logo.png" : "/images/logo-white.png"}
            alt="logo"
            className="w-14"
          />
        </Link>
        <div
          className={`flex items-center gap-6 font-medium ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`hover:text-secondary transition duration-300 ${
                pathname === link.href
                  ? "underline underline-offset-[12px]"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <Link
        href="/contact"
        className="flex items-center gap-2 bg-black text-white px-4 py-3 w-fit rounded"
      >
        Enquire Now <ArrowRight />
      </Link>
    </div>
  );
};

export default Navbar;
