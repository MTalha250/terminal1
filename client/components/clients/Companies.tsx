import React from "react";

const Companies = () => {
  return (
    <div className="py-10 md:py-20 px-8 md:px-16 bg-secondary flex flex-col justify-center items-center">
      <h2 className="text-white text-xl tracking-wide">
        Trusted by top companies worldwide
      </h2>
      <div className="flex justify-center items-center gap-4 mt-10">
        <img src="/images/plogo.png" alt="logo" className="w-52" />
        <img src="/images/plogo.png" alt="logo" className="w-52" />
        <img src="/images/plogo.png" alt="logo" className="w-52" />
        <img src="/images/plogo.png" alt="logo" className="w-52" />
      </div>
    </div>
  );
};

export default Companies;
