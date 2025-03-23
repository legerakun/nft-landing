import { RefObject, useContext } from "react";
import { SwiperRef } from "swiper/react";

import { LayoutContext } from "@/providers/LayoutProvider";
import { imagePath, LayoutNames } from "@/config";

import s from "./index.module.scss";

type SliderControllerProps = {
  swiperRef: RefObject<SwiperRef | null>;
};

export const SliderController = ({ swiperRef }: SliderControllerProps) => {
  const { layout } = useContext(LayoutContext);

  const handlePrev = () => {
    if (!swiperRef.current) return;

    swiperRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    if (!swiperRef.current) return;

    swiperRef.current.swiper.slideNext();
  };

  const arrowSizes = {
    [LayoutNames.DESKTOP]: "24px",
    [LayoutNames.TABLET]: "18px",
    [LayoutNames.MOBILE]: "18px",
  };

  const imageSrc = `${imagePath}icons/ArrowLeft.svg`;

  return (
    <div className={s.sliderController}>
      <button className={s.left} onClick={handlePrev}>
        <img
          style={{ width: arrowSizes[layout], height: arrowSizes[layout] }}
          src={imageSrc}
          alt="Swipe left"
        />
      </button>
      <hr className={s.hr} />
      <button className={s.right} onClick={handleNext}>
        <img
          style={{ width: arrowSizes[layout], height: arrowSizes[layout] }}
          src={imageSrc}
          alt="Swipe left"
        />
      </button>
    </div>
  );
};
