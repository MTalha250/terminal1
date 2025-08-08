"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import navLinks from "@/constants/navLinks";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
      className={`w-full fixed z-50 top-0 left-0 px-8 md:px-16 2xl:px-0 py-3 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : ""
      }`}
    >
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-5 xl:gap-10">
          <Link href="/">
            <img
              src={scrolled ? "/images/logo.png" : "/images/logo-white.png"}
              alt="logo"
              className="w-14"
            />
          </Link>
          <div
            className={`hidden lg:flex items-center gap-3 xl:gap-6 text-sm xl:text-base font-medium ${
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
          className="hidden lg:flex items-center gap-2 bg-black text-white px-4 py-3 w-fit rounded"
        >
          Enquire Now <ArrowRight />
        </Link>
        <Sheet>
          <SheetTrigger className="lg:hidden">
            <Menu
              className={`text-2xl ${scrolled ? "text-black" : "text-white"}`}
              strokeWidth={2}
              size={24}
            />
          </SheetTrigger>
          <SheetContent className="p-4">
            <SheetTitle>Menu</SheetTitle>
            <div className="flex flex-col gap-6 mt-10">
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href} className="text-lg">
                  <SheetClose>{link.label}</SheetClose>
                </Link>
              ))}
            </div>
            <Link
              href="/contact"
              className="bg-black text-white rounded w-fit mt-10"
            >
              <SheetClose className="flex items-center gap-2 px-4 py-3">
                Enquire Now <ArrowRight />
              </SheetClose>
            </Link>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
