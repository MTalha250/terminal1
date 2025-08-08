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
      className={`w-full py-10 md:py-20 px-8 md:px-16 flex gap-10 ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <img
        src={image}
        alt="partner"
        className="w-full md:w-1/2 object-cover rounded-lg"
      />
      <div className="w-full md:w-1/2 flex flex-col justify-center gap-8">
        {tagline && (
          <p className={`text-${taglineColor} text-lg font-semibold`}>
            {tagline}
          </p>
        )}
        <h1 className="text-5xl tracking-wide">{title}</h1>
        <p className="text-xl">{description}</p>
        {blocks && (
          <div className="flex gap-5">
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
                  {item.icon}
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
