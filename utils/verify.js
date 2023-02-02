require("@nomiclabs/hardhat-etherscan");

async function verify() {
  await hre.run("verify:verify", {
    address: "0x8736868Df49E6b49ef0ef0DA0761103f225F6831", // Put in the address of your deployed contract...Not proxy
  });
}

verify();
