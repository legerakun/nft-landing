import { createContext, ReactNode, useEffect, useRef, useState } from "react";

import { LayoutSizes, LayoutNames } from "@/config";

export type LayoutContextProps = {
  layout: LayoutNames;
};

const initialState: LayoutContextProps = {
  layout: LayoutNames.DESKTOP,
};

export const LayoutContext = createContext(initialState);

type LayoutProviderProps = {
  children: ReactNode;
};

export const LayoutProvider = ({ children }: LayoutProviderProps) => {
  const [layout, setLayout] = useState(LayoutNames.DESKTOP);
  const layoutRef = useRef(LayoutNames.DESKTOP);

  useEffect(() => {
    const resizeCallback = () => {
      const { innerWidth } = window;

      if (innerWidth > LayoutSizes[LayoutNames.DESKTOP]) {
        if (layoutRef.current !== LayoutNames.DESKTOP) {
          layoutRef.current = LayoutNames.DESKTOP;
          setLayout(LayoutNames.DESKTOP);
        }
      } else if (innerWidth > LayoutSizes[LayoutNames.TABLET]) {
        if (layoutRef.current !== LayoutNames.TABLET) {
          layoutRef.current = LayoutNames.TABLET;
          setLayout(LayoutNames.TABLET);
        }
      } else if (innerWidth > LayoutSizes[LayoutNames.MOBILE]) {
        if (layoutRef.current !== LayoutNames.MOBILE) {
          layoutRef.current = LayoutNames.MOBILE;
          setLayout(LayoutNames.MOBILE);
        }
      }

      const root = document.querySelector("#root") as HTMLElement;

      if (!root || innerWidth < LayoutSizes[LayoutNames.DESKTOP]) return;

      const scale = innerWidth / LayoutSizes[LayoutNames.DESKTOP];

      root.style.zoom = scale.toString();
    };

    resizeCallback();

    window.addEventListener("resize", resizeCallback);

    return () => {
      window.removeEventListener("resize", resizeCallback);
    };
  }, []);

  return (
    <LayoutContext.Provider value={{ layout }}>
      {children}
    </LayoutContext.Provider>
  );
};
