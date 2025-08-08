import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-[90vh] 2xl:h-[60vh]">
      <img
        src="/images/hero.jpg"
        alt="hero"
        className="w-full h-full object-cover absolute top-0 left-0"
      />
      <div className="absolute top-0 left-0 w-full h-full backdrop-blur-[2px] bg-gradient-to-r from-black/80 to-transparent"></div>
      <div className="absolute w-full h-full flex flex-col justify-center text-white top-0 left-0 px-8 md:px-16 2xl:px-0">
        <div className="flex flex-col justify-center gap-4 max-w-screen-2xl mx-auto w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl w-full lg:w-1/2 tracking-wide">
            Your Trusted Partner in Independent Energy Logistics.
          </h1>
          <p className="w-full lg:w-1/2 text-lg sm:text-xl">
            Delivering world-class petroleum storage and marine fuel services
            with expertise and a commitment to operational excellence in
            Mauritius.
          </p>
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-secondary text-white px-4 py-3 w-fit rounded"
          >
            Enquire Now <ArrowRight />
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex absolute bottom-0 left-0 w-full justify-center items-center pb-12 gap-4">
        <img src="/images/plogo.png" alt="logo" className="w-36 xl:w-48" />
        <img src="/images/plogo.png" alt="logo" className="w-36 xl:w-48" />
        <img src="/images/plogo.png" alt="logo" className="w-36 xl:w-48" />
        <img src="/images/plogo.png" alt="logo" className="w-36 xl:w-48" />
        <img src="/images/plogo.png" alt="logo" className="w-36 xl:w-48" />
        <img src="/images/plogo.png" alt="logo" className="w-36 xl:w-48" />
      </div>
    </div>
  );
};

export default Hero;
