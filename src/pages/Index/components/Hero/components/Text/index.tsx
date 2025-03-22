import { useEffect, useState } from "react";

import s from "./index.module.scss";

export const Text = () => {
  const [showText, setShowText] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 300);

    setTimeout(() => {
      setShowDescription(true);
    }, 600);
  }, []);

  return (
    <>
      <h1 className={`${s.callToAction} ${showText ? s.showText : ""}`.trim()}>
        Discover And
        <br />
        Create NFTs
      </h1>
      <h4
        className={`${s.description} ${
          showDescription ? s.showDescription : ""
        }`}
      >
        Discover, Create and Sell NFTs On Our NFT Marketplace
        <br />
        With Over Thousands Of NFTs And Get a{" "}
        <span className={s.descriptionSpan}>$20 bonus</span>.
      </h4>
    </>
  );
};
