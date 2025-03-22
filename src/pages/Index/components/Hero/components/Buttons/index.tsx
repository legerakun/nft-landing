import { useEffect, useState } from "react";

import s from "./index.module.scss";

export const Buttons = () => {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowButtons(true);
    }, 900);
  }, []);

  return (
    <div className={`${s.buttons} ${showButtons ? s.showButtons : ""}`.trim()}>
      <button className={s.firstButton}>Explore More</button>
      <button className={s.secondButton}>create NFT</button>
    </div>
  );
};
