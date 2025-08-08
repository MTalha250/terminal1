import CTA from "@/components/common/CTA";
import Hero from "@/components/common/Hero";
import Section from "@/components/common/Section";
import About from "@/components/strategic-location/About";
import React from "react";

const StrategicLocation = () => {
  return (
    <div>
      <Hero
        title="Gateway to Growth"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
        img="/images/strategic-hero.jpg"
      />
      <About />
      <Section
        image="/images/strategic-excellence.jpg"
        tagline="Excellence"
        taglineColor="black"
        title="Strategically Positioned for Energy Storage Solutions"
        description="Our state-of-the-art facilities are designed to ensure maximum efficiency and security in energy storage. Located in Mauritius, we leverage the island's strategic position to serve both regional and international markets."
      />
      <hr />
      <Section
        image="/images/home-about.jpg"
        tagline="Strategic"
        taglineColor="black"
        title="Unlocking the Potential of Mauritius as a Hub"
        description="Terminal One offers unparalleled energy storage solutions tailored for the bunkering industry. Our strategic location in Mauritius enhances accessibility and efficiency for regional and international operations."
        blocks={[
          {
            title: "Global Reach",
            description:
              "Connect with major shipping routes for seamless fuel supply.",
          },
          {
            title: "Reliable Services",
            description:
              "Ensure secure and efficient storage for your petroleum products.",
          },
        ]}
        reverse
      />
      <CTA />
    </div>
  );
};

export default StrategicLocation;
