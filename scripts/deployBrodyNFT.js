
const hre = require("hardhat");

async function main() {

  const BrodyNFT = await hre.ethers.getContractFactory("BrodyNFT");
  const brodyNFT = await BrodyNFT.deploy();

  await brodyNFT.deployed();

  console.log("BrodyNFT deployed to:", brodyNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
