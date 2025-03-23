import { imagePath } from "@/config";
import s from "./index.module.scss";

type HeaderMenuProps = {
  opened: boolean;
};

export const HeaderMenu = ({ opened }: HeaderMenuProps) => {
  return (
    <menu className={`${s.menu} ${opened ? s.menuOpened : ""}`.trim()}>
      <ul className={s.navigation}>
        <li>
          <button>Discover</button>
        </li>
        <li>
          <button>creators</button>
        </li>
        <li>
          <button>Sell</button>
        </li>
        <li>
          <button>stats</button>
        </li>
      </ul>
      <ul className={s.socials}>
        <li>
          <button>
            <img
              src={`${imagePath}images-socials/Instagram.svg`}
              alt="Instagram"
            />
          </button>
        </li>
        <li>
          <button>
            <img
              src={`${imagePath}images-socials/LinkedIn.svg`}
              alt="LinkedIn"
            />
          </button>
        </li>
        <li>
          <button>
            <img
              src={`${imagePath}images-socials/Facebook.svg`}
              alt="Facebook"
            />
          </button>
        </li>
        <li>
          <button>
            <img src={`${imagePath}images-socials/TwitterGray.svg`} alt="Twitter" />
          </button>
        </li>
      </ul>
      <button className={s.connectWalletButton}>Connect Wallet</button>
    </menu>
  );
};
