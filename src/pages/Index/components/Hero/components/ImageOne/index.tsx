import { useEffect, useState } from "react";

import { imagePath } from "@/config";

import s from "./index.module.scss";

export const ImageOne = () => {
  const [inPosition, setInPosition] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInPosition(true);
    }, 300);
  }, []);

  return (
    <div className={`${s.imageOne} ${inPosition ? s.inPosition : ""}`.trim()}>
      <img
        className={s.backImage}
        src={`${imagePath}images/image_01.jpg`}
        alt="Image one blur"
      />
      <img
        className={s.image}
        src={`${imagePath}images/image_01.jpg`}
        alt="Image one"
      />
    </div>
  );
};
