import { RefObject, useEffect, useRef, useState } from "react";
import { SwiperRef } from "swiper/react";

import { imagePath, ImageSizes } from "@/config";

import s from "./index.module.scss";

type SliderControllerProps = {
  swiperRef: RefObject<SwiperRef | null>;
};

const arrowSizes = {
  [ImageSizes.DESKTOP]: `${imagePath}images/ArrowLeft.svg`,
  [ImageSizes.TABLET]: `${imagePath}images/ArrowLeftTablet.svg`,
  [ImageSizes.MOBILE]: `${imagePath}images/ArrowLeftTablet.svg`,
};

export const SliderController = ({ swiperRef }: SliderControllerProps) => {
  const [arrowImage, setArrowImage] = useState(arrowSizes[ImageSizes.DESKTOP]);
  const imgRef = useRef(ImageSizes.DESKTOP);

  useEffect(() => {
    const resizeListenerCallback = () => {
      const { innerWidth } = window;

      const handleImageSize = (newSize: ImageSizes) => {
        if (imgRef.current === newSize) return;
        imgRef.current = newSize;
        setArrowImage(arrowSizes[newSize]);
      };

      if (innerWidth > 1440) {
        handleImageSize(ImageSizes.DESKTOP);
      } else if (innerWidth > 1024) {
        handleImageSize(ImageSizes.TABLET);
      } else if (innerWidth > 375) {
        handleImageSize(ImageSizes.MOBILE);
      }
    };

    resizeListenerCallback();

    window.addEventListener("resize", resizeListenerCallback);

    return () => {
      window.removeEventListener("rezise", resizeListenerCallback);
    };
  }, []);

  const handlePrev = () => {
    if (!swiperRef.current) return;

    swiperRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    if (!swiperRef.current) return;

    swiperRef.current.swiper.slideNext();
  };

  return (
    <div className={s.sliderController}>
      <button className={s.left} onClick={handlePrev}>
        <img src={arrowImage} alt="Swipe left" />
      </button>
      <hr className={s.hr} />
      <button className={s.right} onClick={handleNext}>
        <img src={arrowImage} alt="Swipe left" />
      </button>
    </div>
  );
};
