import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface SectionProps {
  tagline?: string;
  taglineColor?: string;
  title: string;
  description: string;
  image: string;
  link?: {
    text: string;
    href: string;
  };
  reverse?: boolean;
  blocks?: {
    icon?: React.ReactNode;
    title: string;
    description: string;
  }[];
  list?: {
    icon?: React.ReactNode;
    title?: string;
    description: string;
  }[];
}

const Section = ({
  tagline,
  taglineColor,
  title,
  description,
  image,
  link,
  reverse,
  blocks,
  list,
}: SectionProps) => {
  return (
    <div
      className={`w-full py-10 md:py-20 px-8 md:px-16 flex gap-10 max-w-screen-2xl mx-auto 2xl:px-0 ${
        reverse
          ? "flex-col-reverse md:flex-row-reverse"
          : "flex-col md:flex-row"
      }`}
    >
      <img
        src={image}
        alt="partner"
        className="w-full md:w-1/2 object-cover rounded-lg"
      />
      <div className="w-full md:w-1/2 flex flex-col justify-center gap-4 md:gap-8">
        {tagline && (
          <p className={`text-${taglineColor} text-lg font-semibold`}>
            {tagline}
          </p>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-wide">
          {title}
        </h1>
        <p className="text-lg sm:text-xl">{description}</p>
        {blocks && (
          <div className="flex flex-col md:flex-row gap-5">
            {blocks.map((block, index) => (
              <div className="flex flex-col gap-2" key={index}>
                {block.icon}
                <h2 className="font-bold">{block.title}</h2>
                <p>{block.description}</p>
              </div>
            ))}
          </div>
        )}
        {list && (
          <div className="flex flex-col gap-2">
            {list.map((item, index) => (
              <div className="flex flex-col gap-2" key={index}>
                <h2 className="font-bold">{item.title}</h2>
                <div className="flex items-center gap-4">
                  <div>{item.icon}</div>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {link && (
          <Link
            href={link.href}
            className="flex items-center gap-2 bg-secondary text-white px-4 py-3 w-fit rounded"
          >
            {link.text} <ArrowRight />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Section;
