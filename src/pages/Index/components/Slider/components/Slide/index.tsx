import { useEffect, useRef, useState } from "react";

import {
  maxNftTimer,
  minNftTimer,
} from "@/pages/Index/components/Slider/config";
import { converSecondsToTime } from "@/utils/converSecondsToTime";
import { cryptoImages, CryptoTypes, ImageSizes } from "@/config";
import { getRandomInt } from "@/utils/getRandomInt";

import s from "./index.module.scss";

type SlideProps = {
  imagePath: string;
  name: string;
  cryptoType: CryptoTypes;
  bid: number;
  href: string;
};

export const Slide = ({
  imagePath,
  name,
  bid,
  cryptoType,
  href,
}: SlideProps) => {
  const cryptoImageSizes = cryptoImages[cryptoType];
  const [timer, setTimer] = useState(getRandomInt(minNftTimer, maxNftTimer));
  const [cryptoImage, setCryptoImage] = useState(
    cryptoImageSizes[ImageSizes.DESKTOP]
  );
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const imgRef = useRef(ImageSizes.DESKTOP);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);

      timerRef.current = null;
    }

    const counter = setTimeout(() => {
      setTimer((old) => old - 1);
    }, 1000);

    timerRef.current = counter;

    const resizeListenerCallback = () => {
      const { innerWidth } = window;

      const handleImageSize = (newSize: ImageSizes) => {
        if (imgRef.current === newSize) return;
        imgRef.current = newSize;
        setCryptoImage(cryptoImageSizes[newSize]);
      };

      if (innerWidth > 1440) {
        handleImageSize(ImageSizes.DESKTOP);
      } else if (innerWidth > 1024) {
        handleImageSize(ImageSizes.TABLET);
      } else if (innerWidth > 375) {
        handleImageSize(ImageSizes.MOBILE);
      }
    };

    resizeListenerCallback();

    window.addEventListener("resize", resizeListenerCallback);

    return () => {
      window.removeEventListener("rezise", resizeListenerCallback);
    };
  });

  const handlePlaceBid = () => {
    console.log(`Navigate to ${href}`);
  };

  return (
    <div className={s.slide}>
      <div className={s.imageContainter}>
        <img className={s.image} src={imagePath} alt={`Slide ${name}`} />
        <label className={s.timer}>
          <p>{converSecondsToTime(timer)}</p>
        </label>
      </div>
      <h3 className={s.name}>{name}</h3>
      <div className={s.info}>
        <div className={s.bid}>
          <h5>Current bid</h5>
          <div className={s.bidCard}>
            <img src={cryptoImage} alt={`${cryptoType} image`} />
            <p>{bid}</p>
          </div>
        </div>
        <button className={s.bidButton} onClick={handlePlaceBid}>
          PLACE BID
        </button>
      </div>
    </div>
  );
};
