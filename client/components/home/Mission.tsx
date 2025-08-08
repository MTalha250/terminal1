import React from "react";

const Mission = () => {
  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] 2xl:h-[40vh]">
      <video
        className="w-full h-full object-cover"
        src="/images/video.mp4"
        autoPlay
        muted
        loop
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/80 to-black/30 flex flex-col justify-center  px-8 md:px-16 2xl:px-0 py-10">
        <div className="flex flex-col justify-center max-w-screen-2xl mx-auto w-full gap-6">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl tracking-wide">
            Our Mission
          </h1>
          <p className="text-white text-lg sm:text-xl max-w-lg">
            We aim to be the leading independent energy storage partner in the
            Indian Ocean, ensuring reliable logistics while championing safety,
            compliance, and environmental stewardship for a cleaner tomorrow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
