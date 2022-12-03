// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import fs from "fs";
import { ethers } from "hardhat";

async function main() {
    var [owner] = await ethers.getSigners();
    let network = await owner.provider._networkPromise;

    // token deployment
    const InvestTokenContract = await ethers.getContractFactory("ERC20");
    const investToken = await InvestTokenContract.deploy("InvestToken", "IT");
    await investToken.deployed();
    console.log("investtoken deployed to:", investToken.address);

    const contractsaddress = {
        investtoken_address: investToken.address,
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
