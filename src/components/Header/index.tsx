import { useEffect, useMemo, useRef, useState } from "react";

import { showBackgroundPosition } from "@/components/Header/config";
import { Logo, LogoColors, LogoSizes } from "@/components/Logo";
import { handleLogoSize } from "@/utils/handleLogoSize";
import { Layout } from "@/config";

import s from "./index.module.scss";

export const Header = () => {
  const [showBackground, setShowBackground] = useState(false);
  const [logoSize, setLogoSize] = useState(LogoSizes.BIG);
  const logoSizeRef = useRef(LogoSizes.BIG);

  const resizeListenerCallback = useMemo(() => {
    const sizes = {
      [Layout.DESKTOP]: LogoSizes.BIG,
      [Layout.TABLET]: LogoSizes.SMALL,
      [Layout.MOBILE]: LogoSizes.MEDIUM,
    };

    return handleLogoSize(logoSizeRef, sizes, (newSize) => {
      setLogoSize(newSize);
    });
  }, []);

  useEffect(() => {
    const scrollListenerCallback = () => {
      const root = document.querySelector("#root");

      if (!root) return;

      const { scrollTop } = root;

      setShowBackground(scrollTop > showBackgroundPosition);
    };

    scrollListenerCallback();

    const root = document.querySelector("#root");

    if (root) {
      root.addEventListener("scroll", scrollListenerCallback);
    }

    resizeListenerCallback();

    window.addEventListener("resize", resizeListenerCallback);

    return () => {
      if (root) {
        root.removeEventListener("scroll", scrollListenerCallback);
      }

      window.removeEventListener("rezise", resizeListenerCallback);
    };
  }, []);

  return (
    <header
      className={`${s.header} ${showBackground ? s.showBackground : ""}`.trim()}
    >
      <button className={s.logoLink}>
        <Logo size={logoSize} color={LogoColors.CONTRAST} />
      </button>
      <div className={s.links}>
        <button>discover</button>
        <button>creators</button>
        <button>sell</button>
        <button>stats</button>
      </div>
      <button className={s.connectWalletButton}>connect wallet</button>
    </header>
  );
};
