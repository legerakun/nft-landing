import { Logo, LogoSizes } from "@/components/Logo";
import { imagePath } from "@/config";

import s from "./index.module.scss";

type FooterDesktopAndTabletProps = {
  logoSize: LogoSizes;
};

export const FooterDesktopAndTablet = ({
  logoSize,
}: FooterDesktopAndTabletProps) => (
  <footer className={s.footer}>
    <div className={s.info}>
      <div className={s.logo}>
        <Logo size={logoSize} />
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
          <img src={`${imagePath}images-socials/LinkedIn.svg`} alt="LinkedIn" />
        </button>
        <button>
          <img src={`${imagePath}images-socials/Facebook.svg`} alt="Facebook" />
        </button>
        <button>
          <img src={`${imagePath}images-socials/Twitter.svg`} alt="Twitter" />
        </button>
      </div>
    </div>
  </footer>
);
