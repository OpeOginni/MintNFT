async function main() {
  // if you changed the name of the contract, be sure to update this here!
  const OpeNFT = await hre.ethers.getContractFactory("OpeNFT");

  const nft = await OpeNFT.deploy();

  await nft.deployed();

  console.log("NFT deployed to:", nft.address);

  // mint one to yourself!
  const signer0 = await ethers.provider.getSigner(0);
  // update the IPFS CID to be your metadata CID
  await nft.safeMint(
    await signer0.getAddress(),
    "ipfs://Qmd9rpdrFivJfZ5PeK5bS2mE7McsULtgkjwp9YVgpBrTN3"
  );

  console.log("Minted to: ", signer0.address);
  console.log("NFT Minted!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
