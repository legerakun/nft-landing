import { useEffect, useMemo, useRef, useState } from "react";

import { ImageOne } from "@/pages/Index/components/Hero/components/ImageOne";
import { ImageTwo } from "@/pages/Index/components/Hero/components/ImageTwo";
import { Buttons } from "@/pages/Index/components/Hero/components/Buttons";
import { Metrics } from "@/pages/Index/components/Hero/components/Metrics";
import { Text } from "@/pages/Index/components/Hero/components/Text";
import { handleImageSize } from "@/utils/handleImageSize";
import { imagePath, ImageSizes } from "@/config";

import s from "./index.module.scss";

const arrowSizes = {
  [ImageSizes.DESKTOP]: `${imagePath}images/hero_arrow.svg`,
  [ImageSizes.TABLET]: `${imagePath}images/hero_tablet_arrow.svg`,
  [ImageSizes.MOBILE]: `${imagePath}images/hero_tablet_arrow.svg`,
};

const dotsSizes = {
  [ImageSizes.DESKTOP]: `${imagePath}images/hero_dots.svg`,
  [ImageSizes.TABLET]: `${imagePath}images/hero_tablet_dots.svg`,
  [ImageSizes.MOBILE]: `${imagePath}images/hero_tablet_dots.svg`,
};

export const Hero = () => {
  const [showArrow, setShowArrow] = useState(false);
  const [arrowImage, setArrowImage] = useState(arrowSizes[ImageSizes.DESKTOP]);
  const [dotsImage, setDotsImage] = useState(dotsSizes[ImageSizes.DESKTOP]);
  const imgRef = useRef(ImageSizes.DESKTOP);

  const resizeListenerCallback = useMemo(
    () =>
      handleImageSize(imgRef, (newSize) => {
        setArrowImage(arrowSizes[newSize]);
        setDotsImage(dotsSizes[newSize]);
      }),
    []
  );

  useEffect(() => {
    setTimeout(() => {
      setShowArrow(true);
    }, 1300);

    resizeListenerCallback();

    window.addEventListener("resize", resizeListenerCallback);

    return () => {
      window.removeEventListener("rezise", resizeListenerCallback);
    };
  }, []);

  return (
    <section className={s.hero}>
      <hr className={s.separator} />
      <Text />
      <Buttons />
      <Metrics />
      <img
        className={`${s.arrow} ${showArrow ? s.arrowShow : ""}`.trim()}
        src={arrowImage}
        alt="Arrow"
      />
      <img className={s.dots} src={dotsImage} alt="Dots" />
      <ImageOne />
      <ImageTwo />
    </section>
  );
};
