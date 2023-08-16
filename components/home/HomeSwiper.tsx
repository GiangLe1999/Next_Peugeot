"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import NextImage from "../common/NextImage";

const arr = [1, 2, 3];

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        className="mainSwiper"
      >
        {arr.map((i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full">
              <NextImage
                src={`/home/swiper/${i}.jpg`}
                alt={`Peugeot Home Banner ${i}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
