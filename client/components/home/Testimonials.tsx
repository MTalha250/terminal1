"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      review:
        "Working with Terminal One has streamlined our supply chain. Their commitment to excellence is evident in every interaction.",
      name: "Janet Smith",
      title: "Manager, Logistics Inc",
      image: "/images/t1.jpg",
    },
    {
      id: 2,
      rating: 5,
      review:
        "Working with Terminal One has streamlined our supply chain. Their commitment to excellence is evident in every interaction.",
      name: "Janet Smith",
      title: "Manager, Logistics Inc",
      image: "/images/t1.jpg",
    },
    {
      id: 3,
      rating: 5,
      review:
        "Working with Terminal One has streamlined our supply chain. Their commitment to excellence is evident in every interaction.",
      name: "Janet Smith",
      title: "Manager, Logistics Inc",
      image: "/images/t1.jpg",
    },
  ];

  return (
    <div className="py-10 px-8 md:px-16">
      <h1 className="text-center text-2xl">Customer Testimonials</h1>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="mySwiper my-20"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="flex flex-col items-center justify-center gap-8 max-w-2xl mx-auto">
              <div className="flex items-center gap-1">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star
                    key={index}
                    className="w-5 h-5 text-primary"
                    fill="currentColor"
                  />
                ))}
              </div>
              <p className="text-center text-2xl tracking-wide">
                "{testimonial.review}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p>{testimonial.title}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-next after:text-white after:!text-base after:w-10 after:h-10 after:absolute after:bg-secondary after:flex after:items-center after:justify-center after:rounded-full" />
        <div className="swiper-button-prev after:text-white after:!text-base after:w-10 after:h-10 after:absolute after:bg-secondary after:flex after:items-center after:justify-center after:rounded-full" />
      </Swiper>
    </div>
  );
};

export default Testimonials;
