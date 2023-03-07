const ContractAddress = "0x165D0094b867F0280Afc19932B6bDD7bb838E704"

const abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'HackTheContract__ContractAlreadyExist',
    type: 'error',
  },
  {
    inputs: [],
    name: 'HackTheContract__TransactionFailed',
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'winner',
        type: 'address',
      },
    ],
    name: 'bountyAwarded',
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
    inputs: [
      {
        internalType: 'string',
        name: 'contractID',
        type: 'string',
      },
      {
        internalType: 'address payable',
        name: 'winner',
        type: 'address',
      },
    ],
    name: 'awardBounty',
    outputs: [],
    stateMutability: 'nonpayable',
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
            internalType: 'uint256',
            name: 's_initialBalance',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 's_bounty',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 's_solved',
            type: 'bool',
          },
        ],
        internalType: 'struct HackTheContract.s_smartContract',
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
      {
        internalType: 'uint256',
        name: 'initialBalance',
        type: 'uint256',
      },
    ],
    name: 'registration',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
]

export { ContractAddress, abi }
