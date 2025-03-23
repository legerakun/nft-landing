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
  [CryptoTypes.BTC]: "",
  [CryptoTypes.ETH]: `${imagePath}images-crypto/Ethereum.svg`,
};

export const LayoutSizes = {
  [LayoutNames.DESKTOP]: 1440,
  [LayoutNames.TABLET]: 1024,
  [LayoutNames.MOBILE]: 375,
};
