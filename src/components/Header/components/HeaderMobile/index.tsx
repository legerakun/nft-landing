import { useState } from "react";
import { createPortal } from "react-dom";

import { HeaderMenu } from "@/components/Header/components/HeaderMobile/components/Menu";
import { Logo, LogoColors, LogoSizes } from "@/components/Logo";
import { imagePath } from "@/config";

import s from "./index.module.scss";

export const HeaderMobile = () => {
  const [isMenuOpened, setMenuOpened] = useState(false);

  return (
    <>
      <header className={s.header}>
        <div className={s.logo}>
          <Logo size={LogoSizes.MEDIUM} color={LogoColors.CONTRAST} />
          <p>DiveSea</p>
        </div>
        <button
          className={s.menuButton}
          onClick={() => setMenuOpened((old) => !old)}
        >
          <img src={`${imagePath}icons/Menu.svg`} alt="Menu" />
        </button>
      </header>
      
      {createPortal(<HeaderMenu opened={isMenuOpened} />, document.body)}
    </>
  );
};
