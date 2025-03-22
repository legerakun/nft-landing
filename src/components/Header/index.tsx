import { useEffect, useRef, useState } from "react";

import { showBackgroundPosition } from "@/components/Header/config";
import { Logo, LogoColors, LogoSizes } from "@/components/Logo";

import s from "./index.module.scss";

export const Header = () => {
  const [showBackground, setShowBackground] = useState(false);
  const [logoSize, setLogoSize] = useState(LogoSizes.BIG);
  const logoSizeRef = useRef(LogoSizes.BIG);

  useEffect(() => {
    const root = document.querySelector("#root");

    if (!root) return;

    const scrollListenerCallback = () => {
      const { scrollTop } = root;

      setShowBackground(scrollTop > showBackgroundPosition);
    };

    scrollListenerCallback();

    root.addEventListener("scroll", scrollListenerCallback);

    const resizeListenerCallback = () => {
      const { innerWidth } = window;

      const handleLogoSize = (newLogoSize: LogoSizes) => {
        if (logoSizeRef.current === newLogoSize) return;
        logoSizeRef.current = newLogoSize;
        setLogoSize(newLogoSize);
      };

      if (innerWidth > 1440) {
        handleLogoSize(LogoSizes.BIG);
      } else if (innerWidth > 1024) {
        handleLogoSize(LogoSizes.SMALL);
      } else if (innerWidth > 375) {
        handleLogoSize(LogoSizes.MEDIUM);
      }
    };

    resizeListenerCallback();

    window.addEventListener("resize", resizeListenerCallback);

    return () => {
      root.removeEventListener("scroll", scrollListenerCallback);
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
