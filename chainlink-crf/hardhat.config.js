require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");

const ALCHEMY_API_KEY_URL =
  "https://polygon-mumbai.g.alchemy.com/v2/OCQgwyIZHBQk_K_6aIIvQI7M2gD4mFk9";

const MUMBAI_PRIVATE_KEY =
  "f04f5d6a844e8a4fd7666fd1e1ac6e201812eee88da8992fa4fa34620e0ebde2";

const POLYGONSCAN_KEY = "G1X22WNBAWVTCI5W6NRIQ1ATMV7GT9GFPK";

module.exports = {
  solidity: "0.8.9",
  networks: {
    mumbai: {
      url: ALCHEMY_API_KEY_URL,
      accounts: [MUMBAI_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: POLYGONSCAN_KEY,
    },
  },
};
