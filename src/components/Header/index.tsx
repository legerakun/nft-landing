import { useContext, useEffect, useState } from "react";

import { HeaderDesktopAndTablet } from "@/components/Header/components/HeaderDesktopAndTablet";
import { HeaderMobile } from "@/components/Header/components/HeaderMobile";
import { showBackgroundPosition } from "@/components/Header/config";
import { LayoutContext } from "@/providers/LayoutProvider";
import { LogoSizes } from "@/components/Logo";
import { LayoutNames } from "@/config";

export const Header = () => {
  const [showBackground, setShowBackground] = useState(false);
  const { layout } = useContext(LayoutContext);

  useEffect(() => {
    const root = document.querySelector("#root");

    if (!root) return;

    const scrollListenerCallback = () => {
      const { scrollTop } = root;

      setShowBackground(scrollTop > showBackgroundPosition);
    };

    scrollListenerCallback();

    root.addEventListener("scroll", scrollListenerCallback);

    return () => {
      root.removeEventListener("scroll", scrollListenerCallback);
    };
  }, []);

  const logoSizes = {
    [LayoutNames.DESKTOP]: LogoSizes.BIG,
    [LayoutNames.TABLET]: LogoSizes.SMALL,
    [LayoutNames.MOBILE]: LogoSizes.MEDIUM,
  };

  return (
    <>
      {layout === LayoutNames.MOBILE ? (
        <HeaderMobile />
      ) : (
        <HeaderDesktopAndTablet
          showBackground={showBackground}
          logoSize={logoSizes[layout]}
        />
      )}
    </>
  );
};
