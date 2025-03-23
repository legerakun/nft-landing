import { useEffect, useMemo, useRef, useState } from "react";

import {
  maxNftTimer,
  minNftTimer,
} from "@/pages/Index/components/Slider/config";
import { converSecondsToTime } from "@/utils/converSecondsToTime";
import { cryptoImages, CryptoTypes, ImageSizes } from "@/config";
import { handleImageSize } from "@/utils/handleImageSize";
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
  const [counter, setCounter] = useState(
    getRandomInt(minNftTimer, maxNftTimer)
  );
  const [cryptoImage, setCryptoImage] = useState(
    cryptoImageSizes[ImageSizes.DESKTOP]
  );
  const counterRef = useRef<NodeJS.Timeout | null>(null);
  const imgRef = useRef(ImageSizes.DESKTOP);

  const resizeListenerCallback = useMemo(
    () =>
      handleImageSize(imgRef, (newSize) => {
        setCryptoImage(cryptoImageSizes[newSize]);
      }),
    []
  );

  useEffect(() => {
    if (counterRef.current) {
      clearInterval(counterRef.current);

      counterRef.current = null;
    }

    const counter = setInterval(() => {
      setCounter((old) => old - 1);
    }, 1000);

    counterRef.current = counter;

    resizeListenerCallback();

    window.addEventListener("resize", resizeListenerCallback);

    return () => {
      window.removeEventListener("rezise", resizeListenerCallback);
    };
  }, []);

  const handlePlaceBid = () => {
    console.log(`Navigate to ${href}`);
  };

  return (
    <div className={s.slide}>
      <div className={s.imageContainter}>
        <img className={s.image} src={imagePath} alt={`Slide ${name}`} />
        <label className={s.timer}>
          <p>{converSecondsToTime(counter)}</p>
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
