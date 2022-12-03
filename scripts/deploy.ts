// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import fs from "fs";
import { ethers } from "hardhat";

async function main() {
    const [owner]: any = await ethers.getSigners();
    let network = await owner.provider._networkPromise;

    // token deployment
    const MultiContract = await ethers.getContractFactory("Multicall");
    const deployedMultiContract = await MultiContract.deploy();
    await deployedMultiContract.deployed();
    console.log("new multicontact deployed to:", deployedMultiContract.address);

    const contractsaddress = {
        MultiContract_address: deployedMultiContract.address,
    };

    fs.writeFileSync(
        `./dist/${network.chainId}.json`,
        JSON.stringify(contractsaddress, undefined, 4)
    );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error: any) => {
        console.error(error);
        process.exitCode = 1;
    });
