"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "./TestimonialCard";
import Image from "next/image";
import Animation from "../animation/Animation";

import arrowLeft from "../../../public/assets/icon/arrow-left.svg";

import "swiper/css";
import { fadeIn, slideInFromTop } from "@/app/utils/animations";

export default function TestimonialSlider() {
  const swiperRef = useRef(null);
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 900) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const testimonials = [
    {
      quote:
        "Buyer buzz partner network disruptive non-disclosure agreement business",
      name: "Albus Dumbledore",
      role: "Manager @ Howarts",
      imageSrc: "/assets/img/testimonial-img-1.png",
    },
    {
      quote:
        "Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.",
      name: "Severus Snape",
      role: "Manager @ Slytherin",
      imageSrc: "/assets/img/testimonial-img-2.png",
    },
    {
      quote:
        "Release facebook responsive web design business model canvas seed money monetization.",
      name: "Harry Potter",
      role: "Team Leader @ Gryffindor",
      imageSrc: "/assets/img/testimonial-img-3.png",
    },
  ];

  return (
    <div className="grid grid-cols-12 p-6">
      <Animation
        className="col-span-12 mb-16 max-w-[700px] md:col-span-8"
        variants={slideInFromTop()}
      >
        <h1 className="text-white">
          An enterprise template to ramp up your company website
        </h1>
      </Animation>
      <div className="col-span-12 mb-16 flex justify-end gap-7 md:col-span-4">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="z-10 self-end rounded-full bg-white p-4 shadow-md"
        >
          <Image src={arrowLeft} height={36} width={36} alt="decorative" />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="z-10 self-end rounded-full bg-white p-4 shadow-md"
        >
          <Image
            className="-scale-x-100 transform"
            src={arrowLeft}
            height={36}
            width={36}
            alt="decorative"
          />
        </button>
      </div>
      <Animation className="col-span-12 w-full" variants={fadeIn()}>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          loop={true}
          spaceBetween={30}
          slidesPerView={slidesPerView}
          centeredSlides={true}
          
        >
          {testimonials.length >= 2 * slidesPerView
            ? testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <TestimonialCard
                    quote={testimonial.quote}
                    name={testimonial.name}
                    role={testimonial.role}
                    imageSrc={testimonial.imageSrc}
                  />
                </SwiperSlide>
              ))
            : [...testimonials, ...testimonials].map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <TestimonialCard
                    quote={testimonial.quote}
                    name={testimonial.name}
                    role={testimonial.role}
                    imageSrc={testimonial.imageSrc}
                  />
                </SwiperSlide>
              ))}
        </Swiper>
      </Animation>
    </div>
  );
}
