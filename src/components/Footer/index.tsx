import { useEffect, useMemo, useRef, useState } from "react";

import { handleImageSize } from "@/utils/handleImageSize";
import { imagePath, ImageSizes, Layout } from "@/config";
import { handleLogoSize } from "@/utils/handleLogoSize";
import { Logo, LogoSizes } from "@/components/Logo";

import s from "./index.module.scss";

const socialsSizes = {
  [ImageSizes.DESKTOP]: [
    `${imagePath}images-socials/Instagram.svg`,
    `${imagePath}images-socials/LinkedIn.svg`,
    `${imagePath}images-socials/Facebook.svg`,
    `${imagePath}images-socials/Twitter.svg`,
  ],
  [ImageSizes.TABLET]: [
    `${imagePath}images-socials/Instagram-tablet.svg`,
    `${imagePath}images-socials/LinkedIn-tablet.svg`,
    `${imagePath}images-socials/Facebook-tablet.svg`,
    `${imagePath}images-socials/Twitter-tablet.svg`,
  ],
  [ImageSizes.MOBILE]: [
    `${imagePath}images-socials/Instagram-tablet.svg`,
    `${imagePath}images-socials/LinkedIn-tablet.svg`,
    `${imagePath}images-socials/Facebook-tablet.svg`,
    `${imagePath}images-socials/Twitter-tablet.svg`,
  ],
};

export const Footer = () => {
  const [socialsImages, setSocialsImages] = useState(
    socialsSizes[ImageSizes.DESKTOP]
  );
  const [logoSize, setLogoSize] = useState(LogoSizes.BIG);
  const logoSizeRef = useRef(LogoSizes.BIG);
  const imgRef = useRef(ImageSizes.DESKTOP);

  const resizeListenerCallback = useMemo(() => {
    const sizes = {
      [Layout.DESKTOP]: LogoSizes.BIG,
      [Layout.TABLET]: LogoSizes.MEDIUM,
      [Layout.MOBILE]: LogoSizes.SMALL,
    };

    const imageResize = handleImageSize(imgRef, (newSize) => {
      setSocialsImages(socialsSizes[newSize]);
    });

    const logoResize = handleLogoSize(logoSizeRef, sizes, (newSize) => {
      setLogoSize(newSize);
    });

    return () => {
      imageResize();
      logoResize();
    };
  }, []);

  useEffect(() => {
    resizeListenerCallback();

    window.addEventListener("resize", resizeListenerCallback);

    return () => {
      window.removeEventListener("rezise", resizeListenerCallback);
    };
  }, []);

  return (
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
            <img src={socialsImages[0]} alt="Instagram" />
          </button>
          <button>
            <img src={socialsImages[1]} alt="LinkedIn" />
          </button>
          <button>
            <img src={socialsImages[2]} alt="Facebook" />
          </button>
          <button>
            <img src={socialsImages[3]} alt="Twitter" />
          </button>
        </div>
      </div>
    </footer>
  );
};
