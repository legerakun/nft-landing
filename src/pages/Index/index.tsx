import { useEffect } from "react";

import { Slider } from "@/pages/Index/components/Slider";
import { Banner } from "@/pages/Index/components/Banner";
import { Hero } from "@/pages/Index/components/Hero";
import { Layout } from "@/config";

export const Index = () => {
  useEffect(() => {
    const root = document.querySelector("#root") as HTMLElement;

    if (!root) return;

    const resizeCallback = () => {
      const { innerWidth } = window;

      if (innerWidth < 1440) return;

      const scale = innerWidth / Layout.DESKTOP;

      root.style.zoom = scale.toString();
    };

    resizeCallback();

    window.addEventListener("resize", resizeCallback);

    return () => {
      window.removeEventListener("resize", resizeCallback);
    };
  }, []);

  return (
    <>
      <Hero />
      <Slider />
      <Banner />
    </>
  );
};
