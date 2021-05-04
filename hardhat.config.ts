import { HardhatUserConfig } from 'hardhat/config'

import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import '@openzeppelin/hardhat-upgrades'
import "@nomiclabs/hardhat-etherscan";
import 'solidity-coverage'
import 'hardhat-gas-reporter'

require('./scripts/deploy')

export default {
  networks: {
    /*hardhat: {
      gasPrice: 225000000000, //470000000000,
      chainId: 43112,
      initialDate: "2020-10-10",
    },*/
    /*avash: {
      url: 'http://localhost:9650/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43113, //43112,
      accounts: [   //Llaves privadas de las cuentas en Metamask
        "0x5389381eb15b00273cfcf111f1623f2ce09868ac1a433cec43ef8405bf0424de",
        "0x165f1a08349890d226ab70a938070e5153f226df0a37a69eb52797a86c0f7848"
      ]
    },*/
    fuji: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: [   //Llaves privadas de las cuentas en Metamask
        "0x5389381eb15b00273cfcf111f1623f2ce09868ac1a433cec43ef8405bf0424de",
        "0x165f1a08349890d226ab70a938070e5153f226df0a37a69eb52797a86c0f7848"
      ]
    },
    avalanche_mainnet: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43114,
      accounts: []
    }
  },
  solidity: {
    compilers: [
      {
        version: '0.4.24',
      },
      {
        version: "0.5.16"
      },
      {
        version: "0.6.2"
      },
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000
          }
        }
      },
      {
        version: "0.7.0"
      },
      {
        version: '0.7.6',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.0"
      }
    ],
  },
  mocha: {
    timeout: 100000,
  },
} as HardhatUserConfig
