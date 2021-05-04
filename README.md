# Ahoj.Token

Ahoj.Token is a stablecoin based on Ampleforths decentralized elastic supply protocol. It maintains a stable unit price by adjusting supply directly to and from wallet holders. You can read the [whitepaper](https://www.ampleforth.org/paper/) for the motivation and a complete description of the protocol.

This repository is a collection of smart contracts that implement the Ampleforth protocol on Avalanche blockchain.

The official mainnet addresses are:

- ERC-20 Token: TBD
- Supply Policy: TBD
- Orchestrator: TBD
- Market Oracle: TBD
- CPI Oracle: TBD

## Table of Contents

- [Install](#install)
- [Testing](#testing)
- [Testnets](#testnets)
- [Contribute](#contribute)
- [License](#license)

## Install

```bash
# Install project dependencies
yarn
```

## Testing

```bash
# Run all unit tests (compatible with node v12+)
yarn test
```

## Testnets

There is a testnet deployment on Fuji. It rebases hourly using real market data.

- Ahoj Token (ERC-20): [0x40fA75774ae051b6E75AAcC0ff7c0DAD00F4aD89](https://cchain.explorer.avax-test.network/address/0x40fA75774ae051b6E75AAcC0ff7c0DAD00F4aD89/transactions)
- Supply Policy: [0x0a8BFeE30ea700fa80be3e46c0Caf53934Bec950](https://cchain.explorer.avax-test.network/address/0x0a8BFeE30ea700fa80be3e46c0Caf53934Bec950/transactions)
- Orchestrator: [0xA3a8506444Af494B823776D21Ebad16dbD06b079](https://cchain.explorer.avax-test.network/address/0xA3a8506444Af494B823776D21Ebad16dbD06b079/transactions)
- Market Oracle: TBD
- CPI Oracle: TBD
- Deployer: [0xd945D005513c3363798Fc417309ed54c1841eDfE](https://cchain.explorer.avax-test.network/address/0xd945D005513c3363798Fc417309ed54c1841eDfE/transactions)

## Contribute

To report bugs within this package, create an issue in this repository.
For security issues, please contact hi@bayro.io.
When submitting code ensure that it is free of lint errors and has 100% test coverage.

```bash
# Lint code
yarn lint

# Format code
yarn format

# Run solidity coverage report (compatible with node v12)
yarn coverage

# Run solidity gas usage report
yarn profile
```

## Attribution
These contracts were adapted from this repo: [uFragments](https://github.com/ampleforth/uFragments)

## License

[GNU General Public License v3.0 (c) 2021 Bayro, LLC.](./LICENSE)

