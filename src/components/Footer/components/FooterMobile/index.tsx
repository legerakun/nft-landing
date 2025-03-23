import { Logo, LogoSizes } from "@/components/Logo";
import { imagePath } from "@/config";

import s from "./index.module.scss";

export const FooterMobile = () => (
  <footer className={s.footer}>
    <div className={s.info}>
      <div className={s.logo}>
        <Logo size={LogoSizes.MEDIUM} />
        <p>DiveSea</p>
      </div>
      <div className={s.socials}>
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
    <div className={s.buttons}>
      <button>Privacy Policy</button>
      <button>Term & Conditions</button>
      <button>About Us</button>
      <button>Contact</button>
    </div>
    <hr className={s.separator} />
    <p className={s.rights}>© 2023 DiveSea All Rights Reserved.</p>
  </footer>
);
