const ContractAddress2 = '0x9879a54004E8571D68C31385C32E4c3290505961'

const abi2 = [
  {
    inputs: [],
    name: 'ManualContract__ContractAlreadyExist',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'customer',
        type: 'address',
      },
    ],
    name: 'Registration',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'arrayID',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getArraySize',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'contractID',
        type: 'string',
      },
    ],
    name: 'getContract',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 's_contractName',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 's_contractID',
            type: 'string',
          },
          {
            internalType: 'address',
            name: 's_contractAddress',
            type: 'address',
          },
          {
            internalType: 'bool',
            name: 's_solved',
            type: 'bool',
          },
        ],
        internalType: 'struct ManualContract.s_smartContract',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'add',
        type: 'address',
      },
    ],
    name: 'getContractIds',
    outputs: [
      {
        internalType: 'string[]',
        name: '',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'contractID',
        type: 'string',
      },
    ],
    name: 'getPOC',
    outputs: [
      {
        internalType: 'string[]',
        name: '',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'contractName',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'contractID',
        type: 'string',
      },
      {
        internalType: 'address',
        name: 'contractAddress',
        type: 'address',
      },
    ],
    name: 'registration',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'contractID',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'poc',
        type: 'string',
      },
    ],
    name: 'submitPOC',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
]

module.exports = { ContractAddress2, abi2 }
