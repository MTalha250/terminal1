import React from "react";
import CTA from "@/components/common/CTA";
import Hero from "@/components/common/Hero";
import Mission from "@/components/home/Mission";
import Mission2 from "@/components/company/Mission";
import Section from "@/components/common/Section";

const Company = () => {
  return (
    <div>
      <Hero
        title="Energy Storage Solutions"
        subtitle="Secure and efficient energy storage services for petroleum products in Mauritius and beyond"
        img="/images/company-hero.jpg"
      />
      <Mission2 />
      <Mission />
      <Section
        title="Your Trusted Partner in Energy Storage Solutions"
        description="At Terminal One, we pride ourselves on providing secure, reliable, and efficient storage services for petroleum products. Our commitment ensures that your energy needs are met with the highest standards of safety and efficiency."
        blocks={[
          {
            title: "Reliable Storage",
            description:
              "Expertly designed facilities to safeguard your petroleum products with utmost reliability.",
          },
          {
            title: "Efficient Solutions",
            description:
              "Innovative approaches that streamline storage processes for optimal performance and cost-effectiveness.",
          },
        ]}
        link={{ text: "Enquire Now", href: "/contact" }}
        image="/images/company-partner.jpg"
      />
      <CTA />
    </div>
  );
};

export default Company;
