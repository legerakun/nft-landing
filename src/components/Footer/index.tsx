import { useContext } from "react";

import { FooterDesktopAndTablet } from "@/components/Footer/components/FooterDesktopAndTablet";
import { FooterMobile } from "@/components/Footer/components/FooterMobile";
import { LayoutContext } from "@/providers/LayoutProvider";
import { LogoSizes } from "@/components/Logo";
import { LayoutNames } from "@/config";

export const Footer = () => {
  const { layout } = useContext(LayoutContext);

  const logoSizes = {
    [LayoutNames.DESKTOP]: LogoSizes.BIG,
    [LayoutNames.TABLET]: LogoSizes.MEDIUM,
    [LayoutNames.MOBILE]: LogoSizes.SMALL,
  };

  return (
    <>
      {layout === LayoutNames.MOBILE ? (
        <FooterMobile />
      ) : (
        <FooterDesktopAndTablet logoSize={logoSizes[layout]} />
      )}
    </>
  );
};
