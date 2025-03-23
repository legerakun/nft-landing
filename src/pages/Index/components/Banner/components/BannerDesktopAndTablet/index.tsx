import { imagePath } from "@/config";

import s from "./index.module.scss";

export const BannerDesktopAndTablet = () => (
  <section className={s.banner}>
    <div className={s.bannerPanel}>
      <aside className={s.aside}>
        <h2 className={s.header}>Create and Sell NFTs</h2>
        <h5 className={s.description}>World’s Largest NFT Place</h5>
        <div className={s.buttons}>
          <button className={s.firstButton}>Explore More</button>
          <button className={s.secondButton}>Sell Artwork</button>
        </div>
      </aside>
      <img
        className={s.image}
        src={`${imagePath}images/image_01.jpg`}
        alt="NFT Image"
      />
    </div>
  </section>
);
