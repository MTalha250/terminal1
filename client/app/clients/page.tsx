import Companies from "@/components/clients/Companies";
import CTA from "@/components/common/CTA";
import Hero from "@/components/common/Hero";
import Testimonials from "@/components/home/Testimonials";
import React from "react";

const Clients = () => {
  return (
    <div>
      <Hero
        title="Our Valued Clients"
        subtitle="Discover our esteemed clients and partners who trust us for their energy storage needs."
        img="/images/clients-hero.jpg"
      />
      <Companies />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Clients;
