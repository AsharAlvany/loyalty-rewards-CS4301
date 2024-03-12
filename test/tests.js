const { expect } = require("chai");

describe("Points contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners();

    const points = await ethers.deployContract("CryptoPoints");

    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  });
});