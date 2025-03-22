import { CryptoTypes, imagePath } from "@/config";

type NFT = {
  imagePath: string;
  name: string;
  bid: number;
  cryptoType: CryptoTypes;
  href: string;
};

export const result = [
  {
    imagePath: `${imagePath}images/image_01.jpg`,
    name: "Sun Glass 1",
    bid: 1.75,
    cryptoType: "ETH",
    href: "",
  },
  {
    imagePath: `${imagePath}images/image_02.jpg`,
    name: "Moon Lines 1",
    bid: 1.75,
    cryptoType: "ETH",
    href: "",
  },
  {
    imagePath: `${imagePath}images/image_03.jpg`,
    name: "Parade of Planets 1",
    bid: 1.75,
    cryptoType: "ETH",
    href: "",
  },
  {
    imagePath: `${imagePath}images/image_04.jpg`,
    name: "Light 1",
    bid: 1.75,
    cryptoType: "ETH",
    href: "",
  },
  {
    imagePath: `${imagePath}images/image_05.jpg`,
    name: "Day Palette 1",
    bid: 1.75,
    cryptoType: "ETH",
    href: "",
  },
  {
    imagePath: `${imagePath}images/image_01.jpg`,
    name: "Sun Glass 2",
    bid: 1.75,
    cryptoType: "ETH",
    href: "",
  },
  {
    imagePath: `${imagePath}images/image_02.jpg`,
    name: "Moon Lines 2",
    bid: 1.75,
    cryptoType: "ETH",
    href: "",
  },
  {
    imagePath: `${imagePath}images/image_03.jpg`,
    name: "Parade of Planets 2",
    bid: 1.75,
    cryptoType: "ETH",
    href: "",
  },
  {
    imagePath: `${imagePath}images/image_04.jpg`,
    name: "Light 2",
    bid: 1.75,
    cryptoType: "ETH",
    href: "",
  },
  {
    imagePath: `${imagePath}images/image_05.jpg`,
    name: "Day Palette 2",
    bid: 1.75,
    cryptoType: "ETH",
    href: "",
  },
  {
    imagePath: `${imagePath}images/image_01.jpg`,
    name: "Sun Glass 3",
    bid: 1.75,
    cryptoType: "ETH",
    href: "",
  },
  {
    imagePath: `${imagePath}images/image_02.jpg`,
    name: "Moon Lines 3",
    bid: 1.75,
    cryptoType: "ETH",
    href: "",
  },
  {
    imagePath: `${imagePath}images/image_03.jpg`,
    name: "Parade of Planets 3",
    bid: 1.75,
    cryptoType: "ETH",
    href: "",
  },
  {
    imagePath: `${imagePath}images/image_04.jpg`,
    name: "Light 3",
    bid: 1.75,
    cryptoType: "ETH",
    href: "",
  },
  {
    imagePath: `${imagePath}images/image_05.jpg`,
    name: "Day Palette 3",
    bid: 1.75,
    cryptoType: "ETH",
    href: "",
  },
] as NFT[];

export const minNftTimer = 10800; // 3 hours
export const maxNftTimer = 28800; // 8 hours
