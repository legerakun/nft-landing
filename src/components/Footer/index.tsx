import { useEffect, useRef, useState } from "react";

import { Logo, LogoSizes } from "@/components/Logo";
import { imagePath, ImageSizes } from "@/config";

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

  useEffect(() => {
    const root = document.querySelector("#root");

    if (!root) return;

    const resizeListenerCallback = () => {
      const { innerWidth } = window;

      const handleLogoSize = (newLogoSize: LogoSizes) => {
        if (logoSizeRef.current === newLogoSize) return;
        logoSizeRef.current = newLogoSize;
        setLogoSize(newLogoSize);
      };

      const handleImageSize = (newImageSize: ImageSizes) => {
        if (imgRef.current === newImageSize) return;
        imgRef.current = newImageSize;
        setSocialsImages(socialsSizes[newImageSize]);
      };

      if (innerWidth > 1440) {
        handleLogoSize(LogoSizes.BIG);
        handleImageSize(ImageSizes.DESKTOP);
      } else if (innerWidth > 1024) {
        handleLogoSize(LogoSizes.MEDIUM);
        handleImageSize(ImageSizes.TABLET);
      } else if (innerWidth > 375) {
        handleLogoSize(LogoSizes.MEDIUM);
        handleImageSize(ImageSizes.MOBILE);
      }
    };

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
