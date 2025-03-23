import { Logo, LogoColors, LogoSizes } from "@/components/Logo";

import s from "./index.module.scss";

type HeaderDesktopAndTabletProps = {
  showBackground: boolean;
  logoSize: LogoSizes;
};

export const HeaderDesktopAndTablet = ({
  showBackground,
  logoSize,
}: HeaderDesktopAndTabletProps) => (
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
