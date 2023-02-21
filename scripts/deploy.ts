import { ethers } from "hardhat";

async function main() {
  const VRF = await ethers.getContractFactory("VRFv2Consumer");
  const VRFv20racle = await VRF.deploy(80);
  await VRFv20racle.deployed();
  console.log(`VRFv2 contract deployed to ${VRFv20racle.address}`);

  // const [player1, player2, player3] = await ethers.getSigners();
  // const signer

  // Add player
  // Generate random Number
  // view winner

  // Contract: 0x5FbDB2315678afecb367f032d93F642f64180aa3
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
