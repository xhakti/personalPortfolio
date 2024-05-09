import Project1 from "../../assets/buyMeABeerBanner.png";
import Project2 from "../../assets/walletXBanner.png";

export const projectsData = [
  {
    id: 1,
    image: Project1,
    title: "Buy Me A Beer",
    description:
      'Buy Me a Beer is a satirical decentralized application (dApp) that parodies the popular crowdfunding platform "Buy Me a Coffee." Developed with Next.js, Solidity, and Thirdweb technologies, this dApp offers users the ability to support content creators or friends by virtually buying beers instead of coffees. ',
    tags: ["Solidity", "NextJS", "Chakra UI", "Thirdweb", "Hardhat", "Ethers"],
    demoLink: "https://buy-me-a-beer-eight.vercel.app/",
    gitHubLink: "https://github.com/shaktiiii/BuyMeABeer",
  },
  {
    id: 2,
    image: Project2,
    title: "Wallet X",
    description:
      'Buy Me a Beer is a satirical decentralized application (dApp) that parodies the popular crowdfunding platform "Buy Me a Coffee." Developed with Next.js, Solidity, and Thirdweb technologies, this dApp offers users the ability to support content creators or friends by virtually buying beers instead of coffees. ',
    tags: [
      "React",
      "Webpack",
      "Ethers",
      "Tailwind",
      "ERC 4337",
      "Account Abstraction",
      "Biconomy",
    ],
    demoLink:
      "https://chrome.google.com/webstore/detail/walletx-smart-wallet/mdjjoodeandllhefapdpnffjolechflh",
    gitHubLink: "https://github.com/WalletX-Inc/Xtension",
  },
];

export default projectsData;
