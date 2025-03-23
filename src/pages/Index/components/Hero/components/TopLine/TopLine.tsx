import { useContext } from "react";
import s from "./index.module.scss";
import { LayoutContext } from "@/providers/LayoutProvider";
import { LayoutNames } from "@/config";

export const TopLine = () => {
  const { layout } = useContext(LayoutContext);

  return (
    <>
      {layout === LayoutNames.MOBILE ? (
        <div className={s.topLine}>
          <hr />
          <h3>OVER 1M CREATORS</h3>
        </div>
      ) : (
        <hr className={s.separator} />
      )}
    </>
  );
};
