import { useContext } from "react";

import { BannerDesktopAndTablet } from "@/pages/Index/components/Banner/components/BannerDesktopAndTablet";
import { BannerMobile } from "@/pages/Index/components/Banner/components/BannerMobile";
import { LayoutContext } from "@/providers/LayoutProvider";
import { LayoutNames } from "@/config";

export const Banner = () => {
  const { layout } = useContext(LayoutContext);

  return (
    <>
      {layout === LayoutNames.MOBILE ? (
        <BannerMobile />
      ) : (
        <BannerDesktopAndTablet />
      )}
    </>
  );
};
