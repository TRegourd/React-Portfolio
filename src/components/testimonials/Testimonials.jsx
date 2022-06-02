import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.png";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Wendy Montagnon",
    review: `J'ai eu l'occasion de former Thomas sur React-Native et j'ai été bluffé par sa capacité a être autonome très rapidement sur cette technologie. Dynamique, et toujours positif, son enthousiasme pour les nouvelles technologies lui ont permis d'acquérir des bases solides pour mener un projet Fullstack mobile ou web . Je recommande Thomas pour vos projets d'applications web et mobile .`,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
