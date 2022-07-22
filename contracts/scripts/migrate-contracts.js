/* eslint-disable */
// TODO - rename this script, remove ownerWallet export?, either make the name of the output
// file consistent or if monorepo, export the file to a location accessible by all repos

/*
 * INTENDED FOR TESTING PURPOSES ONLY
 * Copies contents of build/ to other melodia repositories
 * Uses deployed contracts and performs operations on deployed contracts within ganache
 * instance
 * */

const fs = require("fs-extra");
const path = require("path");
const os = require("os");

const truffle_dev_config =
  artifacts.options["_values"]["networks"]["development"];

const melodiaLibs = "libs";
const melodiaDiscoveryNode = "discovery-provider";
const melodiaIdentityService = "identity-service";
const melodiaCreatorNode = "creator-node";
const melodiaDataContracts = "contracts";

const getDefaultAccount = async () => {
  let accounts = await web3.eth.getAccounts();
  return accounts[0];
};

// dirName is directory name of the melodia repo that you're trying to get the path to
const getDirectoryRoot = (dirName) => {
  let dir = path.join(__dirname, "../../");
  let traversePath = path.join(dir, dirName);

  if (!fs.existsSync(traversePath)) {
    throw new Error(`Couldn't find expected path ${traversePath}`);
  }
  return traversePath;
};

/** Copies the contents of build/contracts to the outputPath */
const copyBuildDirectory = async (outputPath) => {
  let dir = path.join(__dirname, "..");
  let localTarget = path.join(dir, "build/contracts");

  await createDir(outputPath);

  // clean up unnecessary metadata and copy ABI
  let files = fs.readdirSync(localTarget);
  files.forEach(function (file, index) {
    let filePath = path.join(localTarget, file);
    let fileObj = require(filePath);
    let newAbi = {
      contractName: fileObj.contractName,
      abi: fileObj.abi,
    };
    fs.writeFileSync(
      path.join(outputPath, file),
      JSON.stringify(newAbi, null, 2),
      "utf-8"
    );
  });
};

/** Creates directory if path does not exist */
async function createDir(dir) {
  try {
    await fs.ensureDir(dir);
  } catch (err) {
    console.log(`Error with creating folder at path ${dir}: ${err}`);
  }
}

/** Copy the contents of signature_schemas to the given path */
const copySignatureSchemas = (outputPath) => {
  const sourcePath = __dirname + "/../signature_schemas/signatureSchemas.js";
  fs.copySync(sourcePath, outputPath);
};

const outputJsonConfigFile = async (outputPath) => {
  try {
    let migrationOutputPath = path.join(
      getDirectoryRoot(melodiaDataContracts),
      "migrations",
      "migration-output.json"
    );
    let addressInfo = require(migrationOutputPath);
    let outputDictionary = {};
    outputDictionary["registryAddress"] = addressInfo.registryAddress;
    outputDictionary["melodiaDataAddress"] =
      addressInfo.melodiaDataProxyAddress;
    outputDictionary["ursmAddress"] = addressInfo.ursmAddress;
    outputDictionary["ownerWallet"] = await getDefaultAccount();
    outputDictionary["allWallets"] = await web3.eth.getAccounts();

    fs.writeFile(outputPath, JSON.stringify(outputDictionary), (err) => {
      if (err != null) {
        console.log(err);
      }
    });
    console.log(`contracts JSON Config written to ${outputPath}`);
  } catch (e) {
    console.log(e);
  }
};

/**
 * output all relevant contract addresses to file for external consumption
 */
const outputFlaskConfigFile = async (outputPath) => {
  try {
    // registry = await Registry.deployed()

    let migrationOutputPath = path.join(
      getDirectoryRoot(melodiaDataContracts),
      "migrations",
      "migration-output.json"
    );
    let addressInfo = require(migrationOutputPath);
    let configFileContents = "[contracts]\n";
    configFileContents += "registry = " + addressInfo.registryAddress + "\n";

    configFileContents += "\n";

    let outputFlaskConfigFile = outputPath;
    console.log(`Target Output Flask Config File: ${outputFlaskConfigFile}`);
    console.log(`Contents: \n ${configFileContents}`);

    fs.writeFile(outputFlaskConfigFile, configFileContents, (err) => {
      // throws an error, you could also catch it here
      if (err) throw err;

      // success case, the file was saved
      console.log(`Environment file written: ${outputFlaskConfigFile}`);
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = async (callback) => {
  try {
    const libsDirRoot = path.join(
      getDirectoryRoot(melodiaLibs),
      "data-contracts"
    );
    fs.removeSync(libsDirRoot);

    await copyBuildDirectory(path.join(libsDirRoot, "/ABIs"));
    copySignatureSchemas(path.join(libsDirRoot, "/signatureSchemas.js"));
    outputJsonConfigFile(path.join(libsDirRoot, "/config.json"));
  } catch (e) {
    console.log("Libs doesn't exist", e);
  }

  // output to Identity Service
  try {
    outputJsonConfigFile(
      getDirectoryRoot(melodiaIdentityService) + "/contract-config.json"
    );
  } catch (e) {
    console.log("Identity service doesn't exist", e);
  }

  // output to Creator Node
  try {
    outputJsonConfigFile(
      getDirectoryRoot(melodiaCreatorNode) + "/contract-config.json"
    );
  } catch (e) {
    console.log("Creator node dir doesn't exist", e);
  }

  // output to Discovery Node
  try {
    let discProvOutputPath = path.join(
      getDirectoryRoot(melodiaDiscoveryNode),
      "build",
      "contracts"
    );

    // Copy build directory
    await copyBuildDirectory(discProvOutputPath);

    let flaskConfigPath = path.join(
      getDirectoryRoot(melodiaDiscoveryNode),
      "contract_config.ini"
    );
    // Write updated flask config file
    outputFlaskConfigFile(flaskConfigPath);
  } catch (e) {
    console.log("Discovery node doesn't exist", e);
  }

  // special case for ~/.melodia/config.json used by front end
  const dappOutput = os.homedir() + "/.melodia";
  if (!fs.existsSync(dappOutput)) {
    fs.mkdirSync(dappOutput, { recursive: true });
  }
  outputJsonConfigFile(dappOutput + "/config.json");
};
