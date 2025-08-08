import React from "react";

const Map = () => {
  return (
    <div className="py-10 md:py-20 px-8 md:px-16 bg-[#E0EAF4] flex flex-col gap-4">
      <h1 className="text-5xl tracking-wide">Location</h1>
      <p className="text-xl max-w-3xl">
        Discover our prime location in Port Louis, Mauritius, strategically
        positioned to facilitate your secure and efficient energy logistics
      </p>
      <div className="flex gap-10 mt-10">
        <div className="w-2/5">
          <div className="flex flex-col gap-4 max-w-sm pl-10 border-l-2 border-secondary">
            <h2 className="text-2xl font-bold text-secondary">
              Republic of Mauritius
            </h2>
            <p className="text-lg">
              Madrassa Lane, Allee Brillant, Castel, Phoenix, Republic of
              Mauritius
            </p>
            <p className="font-bold">View Map</p>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5913.176130331648!2d57.53031482133311!3d-20.286982453793208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217c5cbbfff9ede5%3A0xa0ab8bed217a02c7!2sVacoas-Phoenix%2C%20Mauritius!5e0!3m2!1sen!2s!4v1754670673154!5m2!1sen!2s"
          loading="lazy"
          className="w-3/5 h-[50vh] rounded-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
