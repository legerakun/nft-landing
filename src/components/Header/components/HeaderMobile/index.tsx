import { Logo, LogoSizes } from "@/components/Logo";

import s from "./index.module.scss";

export const HeaderMobile = () => (
  <header>
    <div className={s.logo}>
      <Logo size={LogoSizes.BIG} />
      <p>DiveSea</p>
    </div>
    <button></button>
  </header>
);
