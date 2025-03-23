import { RefObject } from "react";

import { LogoSizes } from "@/components/Logo";
import { Layout } from "@/config";

type Sizes = {
  [Layout.DESKTOP]: LogoSizes;
  [Layout.TABLET]: LogoSizes;
  [Layout.MOBILE]: LogoSizes;
};

export const handleLogoSize = (
  imgRef: RefObject<LogoSizes>,
  sizes: Sizes,
  saveCallback: (newSize: LogoSizes) => void
) => {
  return () => {
    const { innerWidth } = window;

    const onLogoSize = (newSize: LogoSizes) => {
      if (imgRef.current === newSize) return;

      imgRef.current = newSize;

      saveCallback(newSize);
    };

    if (innerWidth > 1440) {
      onLogoSize(sizes[Layout.DESKTOP]);
    } else if (innerWidth > 1024) {
      onLogoSize(sizes[Layout.TABLET]);
    } else if (innerWidth > 375) {
      onLogoSize(sizes[Layout.MOBILE]);
    }
  };
};
