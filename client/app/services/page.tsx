import React from "react";
import CTA from "@/components/common/CTA";
import Hero from "@/components/common/Hero";
import Section from "@/components/common/Section";
import { MdStorage } from "react-icons/md";
import { MdTerminal } from "react-icons/md";
import { TbBinaryTree2 } from "react-icons/tb";

const Services = () => {
  return (
    <div>
      <Hero
        title="Comprehensive Energy Solutions"
        subtitle="Secure and efficient petroleum storage, terminal leasing, and specialized bunkering services tailored for your needs."
        img="/images/services-hero.jpg"
      />
      <Section
        tagline="Petroleum Product Storage"
        taglineColor="secondary"
        title="Comprehensive Petroleum Storage Solutions for Secure and Efficient Operations"
        description="At Terminal One, we offer state-of-the-art petroleum storage services designed to ensure the utmost security and efficiency. Our facilities are strategically located to support both regional and international bunkering needs."
        image="/images/home-s1.jpg"
        blocks={[
          {
            title: "Safety First",
            description:
              "Our storage solutions prioritize safety, ensuring compliance with industry regulations and standards.",
          },
          {
            title: "Reliable Access",
            description:
              "We provide 24/7 access to our facilities, ensuring uninterrupted service for our clients.",
          },
        ]}
        link={{ text: "Enquire Now", href: "/contact" }}
        reverse
      />
      <hr />
      <Section
        tagline="Terminal Leasing"
        taglineColor="secondary"
        title="Comprehensive Terminal Leasing Solutions for Your Needs"
        description="Our terminal leasing services provide flexible and secure options tailored to your business requirements. With state-of-the-art facilities, we ensure optimal storage and handling of petroleum products."
        image="/images/home-s2.jpg"
        list={[
          {
            icon: <TbBinaryTree2 className="text-2xl" />,
            description:
              "Flexible leasing terms to meet your operational needs.",
          },
          {
            icon: <MdStorage className="text-2xl" />,
            description:
              "Secure storage solutions for petroleum products available.",
          },
          {
            icon: <MdTerminal className="text-2xl" />,
            description: "Expert management for efficient terminal operations.",
          },
        ]}
        link={{ text: "Enquire Now", href: "/contact" }}
      />
      <hr />
      <Section
        tagline="Bunkering Operations"
        taglineColor="secondary"
        title="Comprehensive Bunkering Services for Your Needs"
        description="Our bunkering services ensure safe and efficient fuel transfers, tailored to meet the demands of both regional and international shipping. With our state-of-the-art facilities, we prioritize reliability and security in every operation."
        image="/images/home-s3.jpg"
        link={{ text: "Enquire Now", href: "/contact" }}
        reverse
      />
      <hr />
      <Section
        tagline="Ancillary Services"
        taglineColor="secondary"
        title="Comprehensive Ancillary Services for Your Needs"
        description="At Terminal One, we offer a range of ancillary services designed to enhance your storage experience. Our solutions are tailored to meet the diverse needs of our clients in the petroleum sector."
        image="/images/home-s4.jpg"
        list={[
          {
            title: "Shore Tank Management",
            description:
              "Expert management of shore tanks to ensure optimal performance and safety in storage operations.",
          },
          {
            title: "Collateral Management Transfers",
            description:
              "Streamlined processes for transferring collateral, ensuring security and efficiency in transactions.",
          },
          {
            title: "Heating Systems",
            description:
              "Advanced heating systems to maintain optimal temperatures for various petroleum products during storage.",
          },
        ]}
        link={{ text: "Enquire Now", href: "/contact" }}
      />
      <CTA />
    </div>
  );
};

export default Services;
