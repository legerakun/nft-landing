import { useRef } from "react";
import { Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { SliderController } from "@/pages/Index/components/Slider/components/SliderControls";
import { Slide } from "@/pages/Index/components/Slider/components/Slide";
import { result } from "@/pages/Index/components/Slider/config";

import s from "./index.module.scss";

export const Slider = () => {
  const swiperRef = useRef(null);

  const slides = result.map((nft, index) => (
    <SwiperSlide key={`slide-${index}`}>
      <Slide
        imagePath={nft.imagePath}
        name={nft.name}
        bid={nft.bid}
        cryptoType={nft.cryptoType}
        href={nft.href}
      />
    </SwiperSlide>
  ));

  return (
    <section className={s.slider}>
      <h2 className={s.header}>Weekly - Top NFT</h2>
      <Swiper
        ref={swiperRef}
        className={s.swiper}
        modules={[Keyboard]}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          0: {
            spaceBetween: 0,
            slidesPerView: 1
          },
          375: {
            spaceBetween: 120,
            slidesPerView: 2
          },
          1024: {
            spaceBetween: -62,
            slidesPerView: 4
          },
          1440: {
            spaceBetween: -162,
            slidesPerView: 4
          },
        }}
        centeredSlides
        loop={true}
      >
        {slides}
      </Swiper>
      <SliderController swiperRef={swiperRef} />
    </section>
  );
};
