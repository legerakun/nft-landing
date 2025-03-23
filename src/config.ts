export const imagePath = import.meta.env.VITE_IMAGE_PATH;

export enum CryptoTypes {
  BTC = "BTC",
  ETH = "ETH",
}

export enum LayoutNames {
  DESKTOP = "desktop",
  TABLET = "tablet",
  MOBILE = "mobile",
}

export const cryptoImages = {
  [CryptoTypes.BTC]: {
    [ImageSizes.DESKTOP]: "",
    [ImageSizes.TABLET]: "",
    [ImageSizes.MOBILE]: "",
  },
  [CryptoTypes.ETH]: {
    [ImageSizes.DESKTOP]: `${imagePath}images/ethereum.svg`,
    [ImageSizes.TABLET]: `${imagePath}images/tablet_ethereum.svg`,
    [ImageSizes.MOBILE]: `${imagePath}images/tablet_ethereum.svg`,
  },
};

export const LayoutSizes = {
  [LayoutNames.DESKTOP]: 1440,
  [LayoutNames.TABLET]: 1024,
  [LayoutNames.MOBILE]: 375,
};
