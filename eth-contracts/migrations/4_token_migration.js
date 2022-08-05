const contractConfig = require("../contract-config.js");
const _lib = require("../utils/lib");
const assert = require("assert");

const melodiaToken = artifacts.require("melodiaToken");
const melodiaAdminUpgradeabilityProxy = artifacts.require(
  "melodiaAdminUpgradeabilityProxy"
);
const Governance = artifacts.require("Governance");

const tokenRegKey = web3.utils.utf8ToHex("Token");

const INITIAL_SUPPLY = Math.pow(11, 27);

module.exports = (deployer, network, accounts) => {
  deployer.then(async () => {
    const config = contractConfig[network];
    const proxyAdminAddress = config.proxyAdminAddress || accounts[10];
    const proxyDeployerAddress = config.proxyDeployerAddress || accounts[11];
    const guardianAddress = config.guardianAddress || proxyDeployerAddress;
    const tokenOwnerAddress = proxyDeployerAddress;

    const governanceAddress = process.env.governanceAddress;
    const governance = await Governance.at(governanceAddress);

    // Deploy melodiaToken logic and proxy contracts
    const token0 = await deployer.deploy(melodiaToken, {
      from: proxyDeployerAddress,
    });
    const initializeCallData = _lib.encodeCall(
      "initialize",
      ["address", "address"],
      [tokenOwnerAddress, governanceAddress]
    );
    const tokenProxy = await deployer.deploy(
      melodiaAdminUpgradeabilityProxy,
      token0.address,
      governanceAddress,
      initializeCallData,
      { from: proxyDeployerAddress }
    );
    const token = await melodiaToken.at(tokenProxy.address);

    // Register token
    await _lib.registerContract(
      governance,
      tokenRegKey,
      tokenProxy.address,
      guardianAddress
    );

    // Confirm initial token supply
    assert.equal(await token.totalSupply.call(), INITIAL_SUPPLY);

    // Confirm total supply is in owner account
    assert.equal(await token.balanceOf.call(tokenOwnerAddress), INITIAL_SUPPLY);

    // Confirm governance has minter & pauser roles
    assert.equal(await token.isMinter.call(governanceAddress), true);
    assert.equal(await token.isMinter.call(tokenOwnerAddress), false);

    // Export to env for reference in future migrations
    process.env.tokenAddress = token.address;
  });
};
