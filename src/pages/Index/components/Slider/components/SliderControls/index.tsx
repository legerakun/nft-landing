import { RefObject, useEffect, useMemo, useRef, useState } from "react";
import { SwiperRef } from "swiper/react";

import { handleImageSize } from "@/utils/handleImageSize";
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

  const resizeListenerCallback = useMemo(
    () =>
      handleImageSize(imgRef, (newSize) => {
        setArrowImage(arrowSizes[newSize]);
      }),
    []
  );

  useEffect(() => {
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
