import CTA from "@/components/common/CTA";
import Hero from "@/components/common/Hero";
import Section from "@/components/common/Section";
import Testimonials from "@/components/home/Testimonials";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { MdReduceCapacity } from "react-icons/md";
import { MdSecurity } from "react-icons/md";
import React from "react";
import Banner from "@/components/Infrastructure/Banner";

const Infrastructure = () => {
  return (
    <div>
      <Hero
        title="Reliable Energy Storage"
        subtitle="Our state-of-the-art facilities offer secure, efficient infrastructure for your energy storage and logistics in the Indian Ocean."
        img="/images/infrastructure-hero.jpg"
      />
      <Section
        reverse
        image="/images/infrastructure.jpg"
        title="Discover Our Advanced Energy Storage Facilities in Mauritius"
        description="Our state-of-the-art facilities are designed to ensure maximum efficiency and safety. With robust compliance standards, we provide reliable storage solutions for petroleum products."
        list={[
          {
            icon: <MdOutlineEnergySavingsLeaf className="text-2xl" />,
            description: "Cutting-edge technology for secure energy storage.",
          },
          {
            icon: <MdReduceCapacity className="text-2xl" />,
            description:
              "Capacity designed to meet regional and international demands.",
          },
          {
            icon: <MdSecurity className="text-2xl" />,
            description:
              "Compliance with industry standards for peace of mind.",
          },
        ]}
      />
      <Banner />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Infrastructure;
