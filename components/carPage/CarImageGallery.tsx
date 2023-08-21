"use client";

import React, { FC } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NextImage from "../common/NextImage";

interface Props {
  images: string[];
}

const CarImageGallery: FC<Props> = ({ images }): JSX.Element => {
  return (
    <div>
      <Carousel
        emulateTouch
        infiniteLoop
        // autoPlay
        renderThumbs={() =>
          images.map((img, index) => (
            <div key={index} className="w-full aspect-video relative">
              <NextImage src={img} alt="" />
            </div>
          ))
        }
      >
        {images.map((image, index) => (
          <div
            key={image}
            className="relative w-full aspect-6/4 cursor-pointer"
          >
            <NextImage
              key={image}
              src={image}
              alt={`${image} preview`}
              priority={index === 0}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarImageGallery;