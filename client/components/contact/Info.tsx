import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";

const info = [
  {
    icon: <MdOutlineEmail className="text-5xl" />,
    title: "Email",
    description: "For enquiries, please reach out to use via email.",
    contact: "info@terminaloneltd.com",
  },
  {
    icon: <MdOutlinePhone className="text-5xl" />,
    title: "Phone",
    description: "Call us for immediate assistance or questions.",
    contact: "(230) 5457 6535",
  },
  {
    icon: <MdOutlineLocationOn className="text-5xl" />,
    title: "Office",
    description: "Visit us at our office for more information.",
    contact:
      "Madrassa Lane, Allee Brillant, Castel, Phoenix, Republic of Mauritius",
  },
];

const Info = () => {
  return (
    <div className="bg-secondary py-10 md:py-20 px-8 md:px-16 flex flex-col md:flex-row  gap-10 justify-between max-w-screen-2xl mx-auto 2xl:px-0">
      {info.map((item) => (
        <div
          className="flex flex-col gap-4 items-center text-white text-center w-full"
          key={item.title}
        >
          {item.icon}
          <h2 className="text-xl sm:text-2xl md:text-3xl">{item.title}</h2>
          <p className="sm:text-lg font-semibold">{item.description}</p>
          <p className="text-sm sm:text-base">{item.contact}</p>
        </div>
      ))}
    </div>
  );
};

export default Info;
