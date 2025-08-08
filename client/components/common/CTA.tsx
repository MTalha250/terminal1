import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CTA = () => {
  return (
    <div className="w-full relative h-[50vh] 2xl:h-[40vh]">
      <img
        src="/images/cta.jpg"
        alt="cta"
        className="w-full h-full object-cover scale-x-[-1]"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 flex flex-col items-center justify-center px-8 md:px-16 2xl:px-0 py-10 gap-6">
        <div className="flex flex-col items-center justify-center gap-6 max-w-screen-2xl mx-auto w-full">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide max-w-2xl text-center">
            Maximize your energy value. Partner with Terminal One.
          </h1>
          <p className="text-white text-lg sm:text-xl max-w-xl text-center">
            Contact us now for more details or to receive a personalized service
            quote tailored to you.
          </p>
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-primary px-4 py-3 w-fit rounded"
          >
            Let's Talk <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;
