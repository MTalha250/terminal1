import React from "react";

const Services = () => {
  const services = [
    {
      img: "/images/home-s1.jpg",
      title: "Petroleum Product Storage",
      description: "Bulk storage for refined fuels like VLSFO, MGO, and HFO.",
    },
    {
      img: "/images/home-s2.jpg",
      title: "Bunkering Operations",
      description:
        "Seamless marine fuel deliveries via pipeline and on-site tanks.",
    },
    {
      img: "/images/home-s3.jpg",
      title: "Terminal Leasing",
      description:
        "Flexible storage capacity for local and international traders.",
    },
    {
      img: "/images/home-s4.jpg",
      title: "Ancillary Services",
      description:
        "Shore tank management, collateral transfers, and heating systems.",
    },
  ];

  return (
    <div className="py-10 md:py-20 px-8 md:px-16 max-w-screen-2xl mx-auto 2xl:px-0">
      <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-wide">
        Our Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 md:mt-10">
        {services.map((service) => (
          <div key={service.title} className="flex flex-col gap-3">
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-40 sm:h-52 xl:h-60 rounded-md"
            />
            <h2 className="text-xl xl:text-2xl text-secondary">
              {service.title}
            </h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
