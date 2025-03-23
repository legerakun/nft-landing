import { RefObject } from "react";

import { ImageSizes } from "@/config";

export const handleImageSize = (
  imgRef: RefObject<ImageSizes>,
  saveCallback: (newSize: ImageSizes) => void
) => {
  return () => {
    const { innerWidth } = window;

    const onImageSize = (newSize: ImageSizes) => {
      if (imgRef.current === newSize) return;

      imgRef.current = newSize;

      saveCallback(newSize);
    };

    if (innerWidth > 1440) {
      onImageSize(ImageSizes.DESKTOP);
    } else if (innerWidth > 1024) {
      onImageSize(ImageSizes.TABLET);
    } else if (innerWidth > 375) {
      onImageSize(ImageSizes.MOBILE);
    }
  };
};
