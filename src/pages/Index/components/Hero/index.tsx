import { useContext, useEffect, useState } from "react";

import { ImageOne } from "@/pages/Index/components/Hero/components/ImageOne";
import { ImageTwo } from "@/pages/Index/components/Hero/components/ImageTwo";
import { Buttons } from "@/pages/Index/components/Hero/components/Buttons";
import { Metrics } from "@/pages/Index/components/Hero/components/Metrics";
import { Text } from "@/pages/Index/components/Hero/components/Text";
import { LayoutContext } from "@/providers/LayoutProvider";
import { imagePath, LayoutNames } from "@/config";

import s from "./index.module.scss";

export const Hero = () => {
  const [showArrow, setShowArrow] = useState(false);
  const { layout } = useContext(LayoutContext);

  useEffect(() => {
    setTimeout(() => {
      setShowArrow(true);
    }, 1300);
  }, []);

  const arrowSizes = {
    [LayoutNames.DESKTOP]: { width: "128.78px", height: "124.22px" },
    [LayoutNames.TABLET]: { width: "91.59px", height: "88.34px" },
    [LayoutNames.MOBILE]: { width: "58.79px", height: "56.71px" },
  };

  return (
    <section className={s.hero}>
      <hr className={s.separator} />
      <Text />
      <Buttons />
      <Metrics />
      <img
        style={{
          width: arrowSizes[layout].width,
          height: arrowSizes[layout].height,
        }}
        className={`${s.arrow} ${showArrow ? s.arrowShow : ""}`.trim()}
        src={`${imagePath}icons/hero/HeroArrow.svg`}
        alt="Arrow"
      />
      <img
        className={s.dots}
        src={`${imagePath}icons/hero/HeroDots.svg`}
        alt="Dots"
      />
      <ImageOne />
      <ImageTwo />
    </section>
  );
};
