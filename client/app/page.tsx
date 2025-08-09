import React from "react";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Mission from "@/components/home/Mission";
import CTA from "@/components/common/CTA";
import Testimonials from "@/components/home/Testimonials";
import Section from "@/components/common/Section";

const Home = () => {
  return (
    <div>
      <Hero />
      <Section
        title="We Partner with You for Tomorrow's Energy Solutions"
        description="Strategically located in Port Louis, Mauritius, we provide secure, reliable, and efficient independent storage and marine logistics for diverse petroleum products, upholding the highest standards of safety, compliance, and environmental responsibility."
        image="/images/home-about.jpg"
        link={{ text: "Learn More", href: "/company" }}
        reverse
      />
      <Services />
      <Mission />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;
