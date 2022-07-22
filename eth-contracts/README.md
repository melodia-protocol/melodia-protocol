# melodia Ethereum smart contracts

melodia has two sets of contracts - the one in this directory, which runs on Ethereum mainnet in
production, and the one
[here](https://github.com/melodiaProject/melodia-protocol/tree/master/contracts) which runs on POA
mainnet in production.

The smart contracts in this directory implement the melodia ERC-20 token, staking functionality, service
provider registration, delegator support and off-chain service version management. For a
more in depth look at the contracts and architecture, please see the
[melodia Ethereum Contracts Wiki](https://github.com/melodiaProject/melodia-protocol/wiki/Ethereum-Contracts-Overview)
page.

The two sets of smart contracts do not interact with one another, but both sets are used by end-user
clients and the off-chain services that run melodia to make use of their respective
functionality.

## Installation

To install and run the contracts locally, clone the `melodia-protocol` repo and go into the
`eth-contracts` folder. Assuming you have node.js, npm, and docker installed, run the
following commands to run Ganache and migrate the contracts.

_Note_ - Ganache from the command below is exposed on port 8546, not 8545.

```
npm install
npm run ganache
npm run truffle-migrate
```

## Test

To run tests, run the following command:

```
npm run test
```

To run tests with coverage calculation, run the following command:

```
npm run test-coverage
```

## Security

Please report security issues to `security@melodia.co` with a description of the
vulenerability and any steps to reproduce. We have bounties available for issues reported
via responsible disclosure!

## License

Apache 2.0
