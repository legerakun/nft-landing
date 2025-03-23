import { useContext, useEffect, useState } from "react";

import { TopLine } from "@/pages/Index/components/Hero/components/TopLine/TopLine";
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

  return (
    <section className={s.hero}>
      <TopLine />
      <Text />
      <Buttons />
      {layout !== LayoutNames.MOBILE && <Metrics />}
      <img
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
