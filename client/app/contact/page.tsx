import Hero from "@/components/common/Hero";
import Form from "@/components/contact/Form";
import Info from "@/components/contact/Info";
import Map from "@/components/contact/Map";
import React from "react";

const Contact = () => {
  return (
    <div>
      <Hero
        title="Get in Touch"
        subtitle="We're here to assist you with any inquiries or support you may need."
        img="/images/contact-hero.jpg"
      />
      <Info />
      <Form />
      <Map />
    </div>
  );
};

export default Contact;
