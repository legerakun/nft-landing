import { useEffect, useState } from "react";

import { imagePath } from "@/config";

import s from "./index.module.scss";

export const ImageTwo = () => {
  const [inPosition, setInPosition] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInPosition(true);
    }, 300);
  }, []);

  return (
    <div className={`${s.imageTwo} ${inPosition ? s.inPosition : ""}`.trim()}>
      <img
        className={s.backImage}
        src={`${imagePath}images/image_02.jpg`}
        alt="Image two blur"
      />
      <img
        className={s.image}
        src={`${imagePath}images/image_02.jpg`}
        alt="Image two"
      />
    </div>
  );
};
