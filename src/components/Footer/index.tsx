import { useContext } from "react";

import { LayoutContext } from "@/providers/LayoutProvider";
import { Logo, LogoSizes } from "@/components/Logo";
import { imagePath, LayoutNames } from "@/config";

import s from "./index.module.scss";

export const Footer = () => {
  const { layout } = useContext(LayoutContext);

  const logoSizes = {
    [LayoutNames.DESKTOP]: LogoSizes.BIG,
    [LayoutNames.TABLET]: LogoSizes.MEDIUM,
    [LayoutNames.MOBILE]: LogoSizes.SMALL,
  };

  return (
    <footer className={s.footer}>
      <div className={s.info}>
        <div className={s.logo}>
          <Logo size={logoSizes[layout]} />
          <p>DiveSea</p>
        </div>
        <div className={s.buttons}>
          <button>Privacy Policy</button>
          <button>Term & Conditions</button>
          <button>About Us</button>
          <button>Contact</button>
        </div>
      </div>
      <hr className={s.separator} />
      <div className={s.socials}>
        <p>© 2023</p>
        <div className={s.links}>
          <button>
            <img
              src={`${imagePath}images-socials/Instagram.svg`}
              alt="Instagram"
            />
          </button>
          <button>
            <img
              src={`${imagePath}images-socials/LinkedIn.svg`}
              alt="LinkedIn"
            />
          </button>
          <button>
            <img
              src={`${imagePath}images-socials/Facebook.svg`}
              alt="Facebook"
            />
          </button>
          <button>
            <img src={`${imagePath}images-socials/Twitter.svg`} alt="Twitter" />
          </button>
        </div>
      </div>
    </footer>
  );
};
