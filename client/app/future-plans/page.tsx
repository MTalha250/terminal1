import CTA from "@/components/common/CTA";
import Hero from "@/components/common/Hero";
import Section from "@/components/common/Section";
import Roadmap from "@/components/future-plans/Roadmap";
import React from "react";
import { MdStorage } from "react-icons/md";
import { MdExpand } from "react-icons/md";

const FuturePlans = () => {
  return (
    <div>
      <Hero
        title="Empowering Energy Storage"
        subtitle="Our vision is to lead the energy storage sector with innovative solutions and strategic partnerships."
        img="/images/future-hero.jpg"
      />
      <Section
        image="/images/future-plans1.jpg"
        title="Expanding Our Storage Capacity to Meet Growing Energy Demands"
        description="As demand for energy storage continues to rise, we are committed to expanding our facilities. Our strategic roadmap outlines innovative solutions to enhance our storage capabilities."
        blocks={[
          {
            icon: <MdStorage className="text-2xl" />,
            title: "Capacity Growth",
            description:
              "Investing in advanced technologies to increase our storage efficiency and reliability.",
          },
          {
            icon: <MdExpand className="text-2xl" />,
            title: "Strategic Expansion",
            description:
              "Positioning ourselves to support future energy needs across the region and beyond.",
          },
        ]}
      />
      <hr />
      <Section
        reverse
        image="/images/future-plans2.jpg"
        title="Innovating Storage Solutions: Our Vision for Advanced Energy Management"
        description="At Terminal One, we are committed to enhancing our technological capabilities to provide even more efficient storage solutions. Our strategic roadmap focuses on integrating cutting-edge technologies that ensure optimal performance and reliability in energy storage."
      />
      <hr />
      <Roadmap />
      <CTA />
    </div>
  );
};

export default FuturePlans;
