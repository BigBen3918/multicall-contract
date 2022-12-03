import fs from "fs";
import { ethers } from "hardhat";

describe("TEST Case::", function () {
    it("deploy contract", async function () {
        [owner] = await ethers.getSigners();
        let network = await owner.provider._networkPromise;

        const InvestTokenContract = await ethers.getContractFactory("ERC20");
        const investToken = await InvestTokenContract.deploy();
        await investToken.deployed();

        console.log(investToken.address);
    });
});
