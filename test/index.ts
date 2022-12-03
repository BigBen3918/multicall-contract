// import fs from "fs";
import { ethers } from "hardhat";

describe("TEST Case::", function () {
    it("deploy contract", async function () {
        const [owner]: any = await ethers.getSigners();
        let network = await owner.provider._networkPromise;

        const MulticallContract = await ethers.getContractFactory("Multicall");
        const deployedMulticallContract = await MulticallContract.deploy();
        await deployedMulticallContract.deployed();

        console.log("MultiCall Address:: ", deployedMulticallContract.address);

        const Multicall2Contract = await ethers.getContractFactory(
            "Multicall2"
        );
        const deployedMulticall2Contract = await Multicall2Contract.deploy();
        await deployedMulticall2Contract.deployed();

        console.log(
            "MultiCall2 Address:: ",
            deployedMulticall2Contract.address
        );

        console.log("current network:: ", network.chainId);
    });
});
