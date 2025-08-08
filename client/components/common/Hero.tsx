import React from "react";

interface Props {
  img: string;
  title: string;
  subtitle: string;
}

const Hero = ({ img, title, subtitle }: Props) => {
  return (
    <div className="relative h-[60vh] w-full">
      <img
        src={img}
        alt="hero"
        className="w-full h-full object-cover absolute top-0 left-0"
      />
      <div className="absolute top-0 left-0 text-white w-full h-full bg-black/65 flex flex-col items-center justify-center px-8 md:px-16 gap-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center tracking-wider">
          {title}
        </h1>
        <p className="text-lg sm:text-xl max-w-3xl text-center tracking-wide">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default Hero;
