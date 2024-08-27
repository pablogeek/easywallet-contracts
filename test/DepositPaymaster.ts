import {
    time,
    loadFixture,
  } from "@nomicfoundation/hardhat-toolbox-viem/network-helpers";
  import { expect } from "chai";
  import hre from "hardhat";
import Address from "ipaddr.js";

  describe("DepositPaymaster", function () {
    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshot in every test.

    async function deployOneYearLockFixture() {
        //const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
    
        //const lockedAmount = parseGwei("1");
        //const unlockTime = BigInt((await time.latest()) + ONE_YEAR_IN_SECS);
    
        // Contracts are deployed using the first signer/account by default
        const [owner, otherAccount] = await hre.viem.getWalletClients();
    
        const paymaster = await hre.viem.deployContract("DepositPaymaster", ["0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789"], {
        });
    
        const publicClient = await hre.viem.getPublicClient();
    
        return {
          paymaster,
          owner,
          otherAccount,
          publicClient,
        };
      }

      describe("Deployment", function () {
        it("Should set the right unlockTime", async function () {
            const { paymaster, otherAccount } = await loadFixture(deployOneYearLockFixture);
            //expect (paymaster.read.entryPoint).to.equal(otherAccount);
          });


      });

  });