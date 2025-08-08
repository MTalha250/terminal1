import React from "react";
import { MdSecurity } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="relative w-full h-[90vh] md:h-[80vh] 2xl:h-[60vh]">
      <img
        className="w-full h-full object-cover scale-x-[-1]"
        src="/images/infrastructure-banner.webp"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/80 to-black/30 flex flex-col justify-center px-8 md:px-16 2xl:px-0 py-10">
        <div className="flex flex-col justify-center max-w-screen-2xl mx-auto w-full">
          <div className="flex flex-col gap-3 md:gap-6 max-w-xl text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-wide">
              Ensuring Safety and Compliance in Energy Storage Solutions
            </h1>
            <p className="text-lg sm:text-xl">
              At Terminal One, we prioritize compliance with international
              safety standards. Our state-of-the-art facilities guarantee secure
              and efficient storage for petroleum products.
            </p>
            <div className="flex gap-5 mt-5 md:mt-10">
              <div className="flex flex-col gap-4">
                <MdSecurity className="text-2xl sm:text-3xl md:text-4xl" />
                <h2 className="font-bold">Safety First</h2>
                <p className="text-sm sm:text-base">
                  Adhering to rigorous safety protocols to protect our
                  operations and the environment.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <FaGlobe className="text-2xl sm:text-3xl md:text-4xl" />
                <h2 className="font-bold">Global Standards</h2>
                <p className="text-sm sm:text-base">
                  Meeting international compliance requirements to ensure
                  reliability and trust in our services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
