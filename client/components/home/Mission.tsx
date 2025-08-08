import React from "react";

const Mission = () => {
  return (
    <div className="relative w-full h-[80vh]">
      <video
        className="w-full h-full object-cover"
        src="/images/video.mp4"
        autoPlay
        muted
        loop
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/80 to-black/30 flex flex-col justify-center px-8 md:px-16 py-10 gap-6">
        <h1 className="text-white text-5xl tracking-wide">Our Mission</h1>
        <p className="text-white text-xl max-w-lg">
          We aim to be the leading independent energy storage partner in the
          Indian Ocean, ensuring reliable logistics while championing safety,
          compliance, and environmental stewardship for a cleaner tomorrow.
        </p>
      </div>
    </div>
  );
};

export default Mission;
