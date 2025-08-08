import React from "react";

const Roadmap = () => {
  const roadmap = [
    {
      year: 2024,
      title: "Initial Expansion Phase",
      description:
        "We will commence our first phase of expansion in 2024. This includes enhancing our storage capacity and upgrading our facilities.",
    },
    {
      year: 2025,
      title: "New Partnerships Formed",
      description:
        "In 2025, we aim to establish strategic partnerships to enhance our service offerings. This will position us as a leader in the energy storage market.",
    },
    {
      year: 2026,
      title: "Technology Updates Implemented",
      description:
        "By 2026, we will implement cutting-edge technology to optimize our operations. This will enhance efficiency and reliability for our clients.",
    },
    {
      year: 2027,
      title: "Sustainability Initiatives Launched",
      description:
        "In 2027, we will launch sustainability initiatives to reduce our environmental impact. Our commitment to green energy will strengthen our market position.",
    },
  ];

  return (
    <div className="py-10 md:py-20 px-8 md:px-16 flex flex-col gap-10 md:gap-0 md:flex-row max-w-screen-2xl mx-auto 2xl:px-0">
      <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-8 md:pr-10">
        <p className="text-black text-lg font-semibold">Expansion</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-wide">
          Our Roadmap to Future Growth
        </h1>
        <p className="text-lg sm:text-xl">
          Explore our strategic milestones as we expand our energy storage
          capabilities. Join us on this journey towards sustainable energy
          solutions.
        </p>
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        {roadmap.map((item) => (
          <div className="flex gap-5" key={item.year}>
            <div className="flex flex-col gap-4 items-center mt-4">
              <div className="h-4 w-4 bg-primary rounded-full shrink-0"></div>
              <div className="h-full w-1 bg-primary"></div>
            </div>
            <div className="flex flex-col gap-4 pb-8">
              <h2 className="text-primary  text-3xl sm:text-4xl md:text-5xl">
                {item.year}
              </h2>
              <h2 className="text-secondary text-xl sm:text-2xl md:text-3xl">
                {item.title}
              </h2>
              <p className="sm:text-lg max-w-xl">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
