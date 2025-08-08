import React from "react";
import { FaGlobe } from "react-icons/fa";
import { GiWindTurbine } from "react-icons/gi";

const About = () => {
  return (
    <div className="py-10 md:py-20 px-8 md:px-16 max-w-screen-2xl mx-auto 2xl:px-0">
      <div className="flex flex-col md:flex-row gap-10 mb-10">
        <h1 className="w-full md:w-2/5 text-3xl sm:text-4xl md:text-5xl tracking-wide">
          Harnessing Mauritius Strategic Location for Energy Storage Excellence
        </h1>
        <div className="w-full md:w-3/5">
          <p>
            Mauritius serves as a pivotal maritime crossroads, enhancing global
            trade routes. Terminal One leverages this strategic position to
            provide unparalleled energy storage solutions.
          </p>
          <div className="flex flex-col md:flex-row gap-5 mt-5 md:mt-10">
            <div className="flex flex-col gap-4">
              <FaGlobe className="text-4xl" />
              <h2 className="font-bold">Global Connectivity</h2>
              <p>
                Easily accessible from major shipping lanes, facilitating
                efficient energy distribution.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <GiWindTurbine className="text-4xl" />
              <h2 className="font-bold">Economic Benefits</h2>
              <p>
                Attracting investment and fostering growth in the energy sector
                through strategic positioning.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/images/strategic-location.jpg.webp"
        alt="About"
        className="w-full object-cover rounded-lg"
      />
    </div>
  );
};

export default About;
