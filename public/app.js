// Konfigurasi
const contractAddress = "0x5Df71A23AF0A7F8C4207b4e2750708b4Ae7Fa2Ca";
const feeReceiver = "0x0079352b27fDce7DDB744644dEFBcdB99cb5A9b9";
const RPC_URL = "https://holistic-purple-period.glitch.me";
const CHAIN_ID = 714; // Fix ke 714 (0x2ca)
const USDT_ADDRESS = "0x47C9e3E4078Edb31b24C72AF65d64dA21041801E";
const CHIPS_ADDRESS = "0x0000000000000000000000000000000000000000"; // Native token

// ABI disini (diletakkan di variabel, tapi akan ditunjukkan di bawah kode ini)
const contractABI = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "previousAdmin",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "newAdmin",
          "type": "address"
        }
      ],
      "name": "AdminChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "AllPoolsActivated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "AllPoolsDeactivated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "poolId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "rewardToken",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newAllocatedReward",
          "type": "uint256"
        }
      ],
      "name": "AllocatedRewardUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "poolId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newApr",
          "type": "uint256"
        }
      ],
      "name": "AprUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "beacon",
          "type": "address"
        }
      ],
      "name": "BeaconUpgraded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newFee",
          "type": "uint256"
        }
      ],
      "name": "CreationFeeUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "EmergencyPaused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "EmergencyUnpaused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "poolId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "stakeAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "EmergencyWithdrawal",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "payer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "FeePaid",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "version",
          "type": "uint8"
        }
      ],
      "name": "Initialized",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "poolId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newLockPeriod",
          "type": "uint256"
        }
      ],
      "name": "LockPeriodUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "Paused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "poolId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "activator",
          "type": "address"
        }
      ],
      "name": "PoolActivated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "poolId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "creator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "stakeToken",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address[]",
          "name": "rewardTokens",
          "type": "address[]"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "apr",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "lockPeriod",
          "type": "uint256"
        }
      ],
      "name": "PoolCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "poolId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "creator",
          "type": "address"
        }
      ],
      "name": "PoolDeactivated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "poolId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "lockPeriod",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "maxRewardPerUser",
          "type": "uint256"
        }
      ],
      "name": "PoolParametersUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "poolId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "pinned",
          "type": "bool"
        }
      ],
      "name": "PoolPinned",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "poolId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "funder",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "rewardToken",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "startTime",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "endTime",
          "type": "uint256"
        }
      ],
      "name": "RewardFunded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "previousAdminRole",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "newAdminRole",
          "type": "bytes32"
        }
      ],
      "name": "RoleAdminChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "RoleGranted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "RoleRevoked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "poolId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "Staked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "poolId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newTotalStaked",
          "type": "uint256"
        }
      ],
      "name": "TotalStakedUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "Unpaused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "poolId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "Unstaked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "implementation",
          "type": "address"
        }
      ],
      "name": "Upgraded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "poolId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "withdrawer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Withdrawn",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "ADMIN_ROLE",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "DEFAULT_ADMIN_ROLE",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "MAX_APR",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "MAX_STAKE",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "MIN_APR",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "SECONDS_PER_YEAR",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "activateAllPools",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "poolId",
          "type": "uint256"
        }
      ],
      "name": "activatePool",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256[]",
          "name": "poolIds",
          "type": "uint256[]"
        }
      ],
      "name": "batchClaimRewards",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256[]",
          "name": "poolIds",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
        }
      ],
      "name": "batchStake",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256[]",
          "name": "poolIds",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
        }
      ],
      "name": "batchUnstake",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "poolId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "rewardToken",
          "type": "address"
        }
      ],
      "name": "calculateReward",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "chipsToken",
      "outputs": [
        {
          "internalType": "contract IERC20",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "poolId",
          "type": "uint256"
        }
      ],
      "name": "claimRewards",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "stakeToken",
          "type": "address"
        },
        {
          "internalType": "address[]",
          "name": "rewardTokens",
          "type": "address[]"
        },
        {
          "internalType": "uint256",
          "name": "apr",
          "type": "uint256"
        },
        {
          "internalType": "uint256[]",
          "name": "initialRewards",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256",
          "name": "lockPeriod",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "maxRewardPerUser",
          "type": "uint256"
        }
      ],
      "name": "createPool",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "poolId",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "creationFee",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "deactivateAllPools",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "poolId",
          "type": "uint256"
        }
      ],
      "name": "deactivatePool",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "emergencyPause",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "emergencyPaused",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "emergencyUnpause",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "poolId",
          "type": "uint256"
        }
      ],
      "name": "emergencyWithdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "feeReceiver",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "poolId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "rewardToken",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "startTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "endTime",
          "type": "uint256"
        }
      ],
      "name": "fundReward",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "startIndex",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "limit",
          "type": "uint256"
        }
      ],
      "name": "getAllPoolIds",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        }
      ],
      "name": "getContractBalances",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "creator",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "startIndex",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "limit",
          "type": "uint256"
        }
      ],
      "name": "getCreatorPoolIds",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "startIndex",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "limit",
          "type": "uint256"
        }
      ],
      "name": "getPinnedPools",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "poolId",
          "type": "uint256"
        }
      ],
      "name": "getPoolInfo",
      "outputs": [
        {
          "internalType": "address",
          "name": "stakeToken",
          "type": "address"
        },
        {
          "internalType": "address[]",
          "name": "rewardTokens",
          "type": "address[]"
        },
        {
          "internalType": "uint256",
          "name": "apr",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalStaked",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "stakeDecimals",
          "type": "uint8"
        },
        {
          "internalType": "address",
          "name": "creator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "active",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "stakerCount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "lockPeriod",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "maxRewardPerUser",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        }
      ],
      "name": "getRoleAdmin",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "poolId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "getStakeInfo",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256[]",
          "name": "rewards",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "grantRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "hasRole",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_feeReceiver",
          "type": "address"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "pause",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "paused",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "poolId",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "pinStatus",
          "type": "bool"
        }
      ],
      "name": "pinPool",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "pinnedPools",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "poolCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "pools",
      "outputs": [
        {
          "internalType": "address",
          "name": "stakeToken",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "apr",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalStaked",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "stakeDecimals",
          "type": "uint8"
        },
        {
          "internalType": "address",
          "name": "creator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "active",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "stakerCount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "lockPeriod",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "maxRewardPerUser",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "lastAprUpdate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "pendingApr",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "lastRewardUpdate",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "proxiableUUID",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "renounceRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "revokeRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "rewardSchedules",
      "outputs": [
        {
          "internalType": "address",
          "name": "rewardToken",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "startTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "endTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalReward",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "releasedReward",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "newFee",
          "type": "uint256"
        }
      ],
      "name": "setCreationFee",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "poolId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "stake",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "stakes",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "unpause",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "poolId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "unstake",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "poolId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "newApr",
          "type": "uint256"
        }
      ],
      "name": "updateApr",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "poolId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "newLockPeriod",
          "type": "uint256"
        }
      ],
      "name": "updateLockPeriod",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "poolId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "newLockPeriod",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "newMaxRewardPerUser",
          "type": "uint256"
        }
      ],
      "name": "updatePoolParameters",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newImplementation",
          "type": "address"
        }
      ],
      "name": "upgradeTo",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newImplementation",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "upgradeToAndCall",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "poolId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "rewardToken",
          "type": "address"
        }
      ],
      "name": "withdrawFromPool",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
]; 
// ABI IERC20 (dari contractABI_IERC20 lo)
const IERC20_ABI = [
    {
        "inputs": [
            {"internalType": "address", "name": "owner", "type": "address"},
            {"internalType": "address", "name": "spender", "type": "address"}
        ],
        "name": "allowance",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {"internalType": "address", "name": "account", "type": "address"}
        ],
        "name": "balanceOf",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [{"internalType": "uint8", "name": "", "type": "uint8"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [{"internalType": "string", "name": "", "type": "string"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {"internalType": "address", "name": "to", "type": "address"},
            {"internalType": "uint256", "name": "amount", "type": "uint256"}
        ],
        "name": "transfer",
        "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {"internalType": "address", "name": "from", "type": "address"},
            {"internalType": "address", "name": "to", "type": "address"},
            {"internalType": "uint256", "name": "amount", "type": "uint256"}
        ],
        "name": "transferFrom",
        "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {"internalType": "address", "name": "spender", "type": "address"},
            {"internalType": "uint256", "name": "amount", "type": "uint256"}
        ],
        "name": "approve",
        "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

// Global variables
let web3, contract, accounts, isOwner, hiddenMenus = {
  defaultPool: false,
  newPool: false,
  createPool: false,
  myCreatedPools: false,
  myStakes: false,
  creatorTool: false,
  ownerControl: false
}, visiblePools = [], pinnedPools = [], userInteractions = {}, menusDisabled = false, areMenusHidden = false
let displayedPools = []; // Track pool IDs yang udah ditampilkan
let remainingPools = []; // Track pool IDs yang belum ditampilkan

// Track user interactions
function trackInteraction(type, poolId) {
    if (!accounts || !accounts[0]) {
        console.warn("No account connected for tracking interaction");
        return;
    }
    if (!window.userInteractions || !Array.isArray(window.userInteractions)) {
        window.userInteractions = [];
        console.log("Initialized userInteractions as array");
    }
    window.userInteractions.push({
        user: accounts[0],
        type: type,
        poolId: poolId,
        timestamp: new Date().toISOString()
    });
    console.log(`Tracked interaction: ${type} for pool ${poolId} by ${accounts[0]}`);
}

// Fungsi bantu buat ambil desimal token
async function getTokenDecimals(tokenAddress) {
  if (tokenAddress === '0x0000000000000000000000000000000000000000') return 18;
  try {
      const tokenContract = new web3.eth.Contract(IERC20_ABI, tokenAddress);
      const decimals = await tokenContract.methods.decimals().call();
      console.log(`Decimals for token ${tokenAddress}: ${decimals}`);
      return Number(decimals);
  } catch (error) {
      console.error(`Failed to fetch decimals for token ${tokenAddress}: ${error.message}`);
      return 18; // Default ke 18 kalau error
  }
}

// Formatter untuk angka
function formatNumber(amount, decimals = 2) {
  const num = Number(amount);
  if (num === 0) return '0';
  if (num < 1) return num.toFixed(decimals); // Tampilin penuh kalau < 1
  return parseFloat(num.toFixed(decimals)).toString(); // Buang trailing zero kalau > 1
}

// Get total reward from rewardSchedules
async function getTokenName(tokenAddress) {
  try {
      if (!tokenAddress) {
          console.error("No token address provided");
          return "Unknown Token";
      }
      if (tokenAddress.toLowerCase() === USDT_ADDRESS.toLowerCase()) {
          return "USDT";
      } else if (tokenAddress.toLowerCase() === CHIPS_ADDRESS.toLowerCase()) {
          return "CHIPS";
      }
      const tokenContract = new web3.eth.Contract(IERC20_ABI, tokenAddress);
      const name = await tokenContract.methods.name().call();
      console.log(`Fetched token name for ${tokenAddress}: ${name}`);
      return name;
  } catch (error) {
      console.error(`Failed to fetch token name for ${tokenAddress}: ${error.message}`);
      return tokenAddress.toLowerCase() === USDT_ADDRESS.toLowerCase() ? 'USDT' : tokenAddress.toLowerCase() === CHIPS_ADDRESS.toLowerCase() ? 'CHIPS' : 'Unknown Token';
  }
}

// Initialize wallet connection
async function connectWallet() {
  if (!window.ethereum) {
      document.getElementById('walletStatus').innerText = "Please install MetaMask!";
      console.log("MetaMask not detected");
      return;
  }
  try {
      accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      web3 = new Web3(window.ethereum);
      document.getElementById('walletStatus').innerText = `Connected: ${accounts[0].substring(0, 6)}...${accounts[0].substring(accounts[0].length - 4)}`;
      document.getElementById('walletStatus').style.display = 'block';
      document.getElementById('connectWallet').innerText = 'Disconnect Wallet';
      document.getElementById('connectWallet').onclick = disconnectWallet;
      contract = new web3.eth.Contract(contractABI, contractAddress);

      isOwner = accounts && await contract.methods.hasRole(await contract.methods.DEFAULT_ADMIN_ROLE().call(), accounts[0]).call();

      // Cek emergency pause status
      const emergencyPaused = await contract.methods.emergencyPaused().call();
      if (emergencyPaused && isOwner) {
          document.getElementById('ownerStatus').innerText = "Contract is emergency paused. Please unpause to enable actions.";
          console.log("Contract is emergency paused. Owner can unpause.");
      } else if (emergencyPaused) {
          document.getElementById('status').innerText = "Contract is locked. Please contact the owner.";
          console.log("Contract is emergency paused. User cannot proceed.");
      }

      const poolCount = await contract.methods.poolCount().call();
      pinnedPools = (await contract.methods.getPinnedPools(0, poolCount).call()).map(id => Number(id));
      visiblePools = [];
      for (let i = 0; i < poolCount; i++) {
          const poolInfo = await contract.methods.getPoolInfo(i).call();
          if (poolInfo.active) visiblePools.push(i);
      }

      console.log(`Initial pinned pools:`, pinnedPools);
      console.log(`Initial visible pools:`, visiblePools);
      console.log(`Wallet connected, isOwner: ${isOwner}, poolCount: ${poolCount}`);

      updateUIForRole();
      enableButtons();
      await renderOwnerControl();
      await showTab('defaultPool');
  } catch (error) {
      console.error("Failed to connect wallet:", error);
      document.getElementById('walletStatus').innerText = "Failed to connect wallet. Please try again.";
  }
}

// Enable buttons after connection
function enableButtons() {
  const buttons = ['defaultPoolTab', 'newPoolTab', 'createPoolTab', 'myCreatedPoolsTab', 'myStakesTab'];
  if (isOwner && accounts) {
      buttons.push('ownerControlTab');
  }
  buttons.forEach(id => {
      const btn = document.getElementById(id);
      if (btn) {
          const tabId = id.replace('Tab', '');
          btn.disabled = (id !== 'defaultPoolTab' && id !== 'ownerControlTab' && hiddenMenus[tabId] && !isOwner) || !accounts;
      }
  });
  document.querySelectorAll('.pool-card button, #createPoolForm button, .control-section button').forEach(btn => {
      btn.disabled = (!accounts || (Object.values(hiddenMenus).some(hidden => hidden) && !isOwner && btn.closest('#ownerControl') === null));
  });
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', async () => {
  // connectWallet already handles UI updates and population
  await connectWallet();
});

// Populate Pool Dropdown
async function populatePoolDropdown() {
  try {
      if (!contract || !contract.methods) {
          console.error("Contract not initialized in populatePoolDropdown");
          return;
      }
      const poolCount = await contract.methods.poolCount().call();
      console.log(`Populating dropdown with ${poolCount} pools`);
      const filterPoolId = document.getElementById('filterPoolId');
      const filterNewPoolId = document.getElementById('filterNewPoolId');
      if (!filterPoolId && !filterNewPoolId) {
          console.warn("Dropdown elements not found");
          return;
      }
      const poolIds = [];
      for (let i = 0; i < poolCount; i++) {
          poolIds.push(i);
      }
      [filterPoolId, filterNewPoolId].forEach(dropdown => {
          if (dropdown) {
              dropdown.innerHTML = '<option value="all">All Pools</option>';
              poolIds.forEach(id => {
                  const option = document.createElement('option');
                  option.value = id;
                  option.text = `Pool ${id}`;
                  dropdown.appendChild(option);
              });
          }
      });
      console.log("Pool dropdowns populated successfully");
  } catch (error) {
      console.error("Failed to populate pool dropdowns:", error.message);
  }
}

// Initialize
window.addEventListener('load', populatePoolDropdown);
async function disconnectWallet() {
  try {
      accounts = null;
      isOwner = false;
      pinnedPools = [];
      visiblePools = [];
      document.getElementById('walletStatus').innerText = "Wallet disconnected";
      document.getElementById('walletStatus').style.display = 'block';
      document.getElementById('connectWallet').innerText = 'Connect Wallet';
      document.getElementById('connectWallet').onclick = connectWallet;
      document.getElementById('status').innerText = '';
      document.getElementById('ownerStatus').innerText = '';
      document.getElementById('defaultPoolCard').innerHTML = '<div class="pool-grid"><p>No pools available in Top Pool.</p></div>';
      document.getElementById('newPoolCard').innerHTML = '<div class="pool-grid"><p>No pools available in New Pool.</p></div>';
      updateUIForRole();
      enableButtons();
      console.log("Wallet disconnected");
  } catch (error) {
      console.error("Failed to disconnect wallet:", error);
      document.getElementById('walletStatus').innerText = "Failed to disconnect wallet.";
  }
}

// Update pool balance and total stakers
async function updatePoolBalance() {
  try {
      let totalChips = 0;
      let totalUsdt = 0;
      let totalStakers = new Set();

      let totalPools = await contract.methods.poolCount().call().catch(() => 5);
      console.log(`Total pools for balance update: ${totalPools}`);

      for (let poolId = 0; poolId < totalPools; poolId++) {
          try {
              const poolInfo = await contract.methods.getPoolInfo(poolId).call();
              const stakeToken = poolInfo.stakeToken.toLowerCase();
              const decimals = Number(poolInfo.stakeDecimals) || 18;
              const totalStaked = Number(web3.utils.fromWei(poolInfo.totalStaked, decimals === 18 ? 'ether' : 'wei')).toFixed(2);

              console.log(`Pool ${poolId}: stakeToken=${stakeToken}, totalStaked=${totalStaked}, active=${poolInfo.active}`);

              if (stakeToken === '0x0000000000000000000000000000000000000000' || stakeToken === CHIPS_ADDRESS.toLowerCase()) {
                  totalChips += Number(totalStaked);
                  console.log(`Pool ${poolId}: Added ${totalStaked} CHIPS, totalChips=${totalChips}`);
              } else if (stakeToken === USDT_ADDRESS.toLowerCase()) {
                  totalUsdt += Number(totalStaked);
                  console.log(`Pool ${poolId}: Added ${totalStaked} USDT, totalUsdt=${totalUsdt}`);
              }

              // Ambil stakers dari stakerCount di poolInfo
              if (poolInfo.stakerCount > 0) {
                  try {
                      const events = await contract.getPastEvents('Staked', { filter: { poolId: poolId.toString() }, fromBlock: 0, toBlock: 'latest' });
                      const stakers = Array.from(new Set(events.map(e => e.returnValues.user.toLowerCase())));
                      console.log(`Pool ${poolId}: Found ${stakers.length} stakers`);
                      stakers.forEach(staker => totalStakers.add(staker.toLowerCase()));
                  } catch (e) {
                      console.warn(`Failed to get stakers for pool ${poolId}: ${e.message}`);
                  }
              }
          } catch (e) {
              console.error(`Failed to process pool ${poolId} for balance: ${e.message}`);
              continue;
          }
      }

      const poolBalanceElement = document.getElementById('poolBalance');
      const poolBalanceChipsElement = document.getElementById('poolBalanceChips');
      const totalStakerElement = document.getElementById('totalStaker');
      if (poolBalanceElement) {
          poolBalanceElement.innerText = totalUsdt.toFixed(2);
      } else {
          console.warn(`Element poolBalance not found`);
      }
      if (poolBalanceChipsElement) {
          poolBalanceChipsElement.innerText = totalChips.toFixed(2);
      } else {
          console.warn(`Element poolBalanceChips not found`);
      }
      if (totalStakerElement) {
          totalStakerElement.innerText = totalStakers.size;
      } else {
          console.warn(`Element totalStaker not found`);
      }
      console.log(`Updated pool balance: ${totalUsdt} USDT, ${totalChips} CHIPS, Total Stakers: ${totalStakers.size}`);
  } catch (error) {
      console.error(`Failed to update pool balance: ${error.message}`);
  }
}

// Update stake token info
async function updateStakeTokenInfo() {
  const stakeToken = document.getElementById('stakeToken').value;
  const info = document.getElementById('stakeTokenInfo');
  if (stakeToken === CHIPS_ADDRESS) {
      info.innerText = "Token: CHIPS (Native)";
  } else if (stakeToken === USDT_ADDRESS) {
      try {
          const tokenContract = new web3.eth.Contract(contractABI_IERC20, stakeToken);
          const name = await tokenContract.methods.name().call();
          info.innerText = `Token: ${name}`;
      } catch (error) {
          console.error("Failed to fetch USDT name:", error);
          info.innerText = "Token: USDT";
      }
  } else {
      info.innerText = "Invalid token address";
  }
}


//______________control View owner______________

// Render Owner Control
async function renderOwnerControl() {
  try {
      const ownerControls = document.querySelector('.owner-controls');
      if (!ownerControls) {
          console.error('Owner controls container not found');
          return;
      }

      ownerControls.innerHTML = '';

      if (!isOwner) {
          ownerControls.innerHTML = '<p>You are not authorized to access owner controls.</p>';
          return;
      }

      // Dummy pool options (fallback kalo poolCount gagal)
      const poolCount = await contract.methods.poolCount().call().catch(() => 10);
      const poolOptions = Array.from({ length: Number(poolCount) }, (_, i) => `<option value="${i}">Pool ${i}</option>`).join('');

      const controlCards = [
          {
              title: 'Activity Report',
              content: `
                  <div class="control-group">
                      <button onclick="downloadUserInteractionsPDF()">Download User Activity PDF</button>
                  </div>
              `
          },
          {
              title: 'Fund Pool Rewards',
              content: `
                  <div class="control-group">
                      <label for="fundPoolId">Select Pool ID:</label>
                      <select id="fundPoolId">
                          <option value="all">All Pools</option>
                          ${poolOptions}
                      </select>
                      <label for="fundAmount">Amount:</label>
                      <input type="number" id="fundAmount" placeholder="Amount" step="0.01" min="0.01">
                      <button onclick="fundReward()">Fund Reward</button>
                  </div>
              `
          },
          {
              title: 'Update Pool APR',
              content: `
                  <div class="control-group">
                      <label for="updatePoolId">Select Pool ID:</label>
                      <select id="updatePoolId">
                          <option value="all">All Pools</option>
                          ${poolOptions}
                      </select>
                      <label for="newApr">New APR (%):</label>
                      <input type="number" id="newApr" placeholder="360–10000%" min="360" max="10000">
                      <button onclick="updateApr()">Update APR</button>
                  </div>
              `
          },
          {
              title: 'Update Lock Period',
              content: `
                  <div class="control-group">
                      <label for="editPoolId">Select Pool ID:</label>
                      <select id="editPoolId">
                          <option value="all">All Pools</option>
                          ${poolOptions}
                      </select>
                      <label for="newLockPeriod">New Lock Period (days):</label>
                      <input type="number" id="newLockPeriod" placeholder="Days" min="0">
                      <button onclick="lockNewPeriod()">Update Lock Period</button>
                  </div>
              `
          },
          {
              title: 'Withdraw from Pool',
              content: `
                  <div class="control-group">
                      <label for="withdrawPoolId">Select Pool ID:</label>
                      <select id="withdrawPoolId">
                          <option value="all">All Pools</option>
                          ${poolOptions}
                      </select>
                      <label for="withdrawPoolToken">Token Address:</label>
                      <input type="text" id="withdrawPoolToken" placeholder="Token Address">
                      <label for="withdrawPoolAmount">Amount:</label>
                      <input type="number" id="withdrawPoolAmount" placeholder="Amount" step="0.01" min="0.01">
                      <button onclick="withdrawFromPool()">Withdraw</button>
                  </div>
              `
          },
          {
              title: 'Manage Pool Visibility',
              content: `
                  <div class="control-group">
                      <label for="visibilityPoolId">Select Pool ID:</label>
                      <select id="visibilityPoolId">
                          <option value="all">All Pools</option>
                          ${poolOptions}
                      </select>
                      <label for="visibilityTicker">Select Token Ticker:</label>
                      <select id="visibilityTicker">
                          <option value="all">All Tokens</option>
                          <option value="CHIPS">CHIPS</option>
                          <option value="USDT">USDT</option>
                          <option value="OTHER">Other</option>
                      </select>
                      <label for="visibilityToggle">Visibility Toggle:</label>
                      <select id="visibilityToggle">
                          <option value="on">Show</option>
                          <option value="off">Hide</option>
                      </select>
                      <button onclick="togglePoolVisibility()">Toggle Pool Visibility</button>
                  </div>
              `
          },
          {
              title: 'Deactivate Pools',
              content: `
                  <div class="control-group">
                      <label for="poolIdDeactivate">Select Pool ID:</label>
                      <select id="poolIdDeactivate">
                          <option value="all">All Pools</option>
                          ${poolOptions}
                      </select>
                      <button onclick="deactivatePool(document.getElementById('poolIdDeactivate').value)">Deactivate Pool</button>
                      <button onclick="deactivateAllPools()">Deactivate All Pools</button>
                  </div>
              `
          },
          {
              title: 'Activate Pools',
              content: `
                  <div class="control-group">
                      <label for="poolIdActivate">Select Pool ID:</label>
                      <select id="poolIdActivate">
                          <option value="all">All Pools</option>
                          ${poolOptions}
                      </select>
                      <button onclick="activatePool(document.getElementById('poolIdActivate').value)">Activate Pool</button>
                      <button onclick="activateAllPools()">Activate All Pools</button>
                      <p id="allPoolIds"></p>
                  </div>
              `
          },
          {
              title: 'Initialize Contract',
              content: `
                  <div class="control-group">
                      <label for="newImplementationAddress">New Implementation Address:</label>
                      <input type="text" id="newImplementationAddress" placeholder="0x...">
                      <button onclick="authorizeUpgrade()">Authorize Upgrade</button>
                  </div>
              `
          },
          {
              title: 'Contract Controls',
              content: `
                  <div class="control-group">
                      <button onclick="pauseContract()">Pause Contract</button>
                      <button onclick="unpauseContract()">Unpause Contract</button>
                      <button onclick="emergencyPause()">Emergency Pause</button>
                      <button onclick="emergencyUnpause()">Emergency Unpause</button>
                  </div>
              `
          },
          {
              title: 'Withdraw Tokens',
              content: `
                  <div class="control-group">
                      <label for="withdrawToken">Token Address:</label>
                      <input type="text" id="withdrawToken" placeholder="Token Address (empty for CHIPS)">
                      <label for="withdrawAmount">Amount:</label>
                      <input type="number" id="withdrawAmount" placeholder="Amount" step="0.01" min="0.01">
                      <button onclick="withdrawTokens()">Withdraw Tokens</button>
                  </div>
              `
          },
          {
              title: 'Set Creation Fee',
              content: `
                  <div class="control-group">
                      <label for="newCreationFee">New Fee (CHIPS):</label>
                      <input type="number" id="newCreationFee" placeholder="New Fee" step="0.01" min="0">
                      <button onclick="setCreationFee()">Set Creation Fee</button>
                  </div>
              `
          },
          {
              title: 'Menu Visibility',
              content: `
                  <div class="control-group">
                      <label><input type="checkbox" id="hideNewPool" onchange="toggleMenuVisibility('newPool')"> Hide New Pool</label>
                      <label><input type="checkbox" id="hideCreatePool" onchange="toggleMenuVisibility('createPool')"> Hide Create Pool</label>
                      <label><input type="checkbox" id="hideMyCreatedPools" onchange="toggleMenuVisibility('myCreatedPools')"> Hide My Created Pools</label>
                      <label><input type="checkbox" id="hideMyStakes" onchange="toggleMenuVisibility('myStakes')"> Hide My Stakes</label>
                      <button onclick="hideAllMenus()">Hide All Menus</button>
                      <button onclick="showAllMenus()">Show All Menus</button>
                  </div>
              `
          },
          {
            title: 'Edit Max Reward Per User',
            content: `
                <div class="control-group">
                    <label for="editMaxRewardPoolId">Select Pool ID:</label>
                    <select id="editMaxRewardPoolId">
                        <option value="all">All Pools</option>
                        ${poolOptions}
                    </select>
                    <label for="newMaxReward">New Max Reward Per User:</label>
                    <input type="number" id="newMaxReward" placeholder="Max Reward" step="0.01" min="0.01">
                    <button onclick="editMaxRewardPerUser()">Update Max Reward</button>
                </div>
            `
          }
      ];

      controlCards.forEach(card => {
          const cardElement = document.createElement('div');
          cardElement.className = 'control-section';
          cardElement.innerHTML = `
              <h3>${card.title}</h3>
              ${card.content}
          `;
          ownerControls.appendChild(cardElement);
      });

      const allPoolIdsElement = document.getElementById('allPoolIds');
      if (allPoolIdsElement) {
          allPoolIdsElement.innerText = `Pool IDs: ${Array.from({ length: Number(poolCount) }, (_, i) => i).join(', ')}`;
      }

      await populatePoolDropdown();

      console.log('Owner controls rendered successfully');
  } catch (error) {
      console.error('Failed to render owner controls:', error.message);
      // Gak set innerText ke UI
  }
}

//update OwnerUI
function updateOwnerUI() {
  const ownerSection = document.getElementById('ownerSection');
  if (!ownerSection || !isOwner) {
      if (ownerSection) ownerSection.style.display = 'none';
      return;
  }
  ownerSection.style.display = 'block';
  // Gak perlu render input date
  console.log("Owner UI updated");
}

// Create pool (owner)
async function ownerCreatePool() {
  if (!contract || !accounts || !isOwner) {
      document.getElementById('ownerStatus').innerText = "Connect wallet and ensure owner access";
      return;
  }
  try {
      const stakeToken = document.getElementById('ownerStakeToken').value;
      const rewardToken = document.getElementById('ownerRewardToken').value;
      const apr = parseInt(document.getElementById('ownerPoolApr').value);
      const initialRewardInput = document.getElementById('ownerInitialReward').value;
      const lockPeriod = document.getElementById('ownerLockPeriod').value;
      const maxRewardInput = document.getElementById('ownerMaxRewardPerUser').value;

      // Validasi input
      if (!stakeToken || !web3.utils.isAddress(stakeToken)) {
          document.getElementById('ownerStatus').innerText = "Invalid stake token address";
          return;
      }
      if (!rewardToken || !web3.utils.isAddress(rewardToken)) {
          document.getElementById('ownerStatus').innerText = "Invalid reward token address";
          return;
      }
      if (stakeToken !== CHIPS_ADDRESS && stakeToken !== USDT_ADDRESS) {
          document.getElementById('ownerStatus').innerText = "Stake token must be CHIPS or USDT";
          return;
      }
      if (!apr || apr < 360 || apr > 10000) {
          document.getElementById('ownerStatus').innerText = "Invalid APR (must be 360–10000%)";
          return;
      }
      if (!initialRewardInput || parseFloat(initialRewardInput) <= 0) {
          document.getElementById('ownerStatus').innerText = "Initial reward must be greater than 0";
          return;
      }
      if (!maxRewardInput || parseFloat(maxRewardInput) <= 0) {
          document.getElementById('ownerStatus').innerText = "Max reward per user must be greater than 0";
          return;
      }

      const initialReward = web3.utils.toWei(initialRewardInput, 'ether');
      const maxReward = web3.utils.toWei(maxRewardInput, 'ether');

      // Validasi reward token
      let tokenName;
      try {
          const tokenContract = new web3.eth.Contract(IERC20_ABI, rewardToken);
          tokenName = await tokenContract.methods.name().call();
          console.log(`Reward token: ${tokenName}, address: ${rewardToken}`);
          const balance = await tokenContract.methods.balanceOf(accounts[0]).call();
          const decimals = await tokenContract.methods.decimals().call();
          const balanceWei = web3.utils.toBN(balance);
          const initialRewardWei = web3.utils.toBN(initialReward);
          if (balanceWei.lt(initialRewardWei)) {
              document.getElementById('ownerStatus').innerText = `Insufficient ${tokenName} balance`;
              return;
          }
          if (rewardToken !== CHIPS_ADDRESS) {
              const allowance = await tokenContract.methods.allowance(accounts[0], contractAddress).call();
              if (web3.utils.toBN(allowance).lt(initialRewardWei)) {
                  document.getElementById('ownerStatus').innerText = `Approving ${tokenName}...`;
                  await tokenContract.methods.approve(contractAddress, initialReward).send({ from: accounts[0], gas: 100000 });
              }
          }
      } catch (error) {
          console.error("Invalid reward token contract:", error);
          document.getElementById('ownerStatus').innerText = "Invalid reward token contract. Check address or network.";
          return;
      }

      const rewardTokens = [rewardToken];
      const initialRewards = [initialReward];

      document.getElementById('ownerStatus').innerText = `Creating pool with ${tokenName}...`;
      await contract.methods.createPool(
          stakeToken,
          rewardTokens,
          apr,
          initialRewards,
          lockPeriod,
          maxReward
      ).send({ 
          from: accounts[0], 
          value: '0', // Owner ga bayar fee
          gas: 500000 
      });
      trackInteraction();
      document.getElementById('ownerStatus').innerText = "Pool created successfully!";
      const newPoolId = parseInt(await contract.methods.poolCount().call()) - 1;
      visiblePools.push(newPoolId);
      await updatePoolIdDropdown(await contract.methods.poolCount().call());
      await updateFilterDropdowns();
      await showTab('newPool');
  } catch (error) {
      console.error("Failed to create pool:", error);
      document.getElementById('ownerStatus').innerText = `Failed to create pool: ${error.message}`;
  }
}

// Update owner stake token info
async function updateOwnerStakeTokenInfo() {
  const stakeToken = document.getElementById('ownerStakeToken').value;
  const info = document.getElementById('ownerStakeTokenInfo');
  if (stakeToken === CHIPS_ADDRESS) {
      info.innerText = "Token: CHIPS (Native)";
  } else if (stakeToken === USDT_ADDRESS) {
      info.innerText = "Token: USDT";
  } else if (web3.utils.isAddress(stakeToken)) {
      try {
          const tokenContract = new web3.eth.Contract(IERC20_ABI, stakeToken);
          const name = await tokenContract.methods.name().call();
          info.innerText = `Token: ${name}`;
      } catch (error) {
          console.error("Failed to fetch owner stake token name:", error);
          info.innerText = "Invalid token address";
      }
  } else {
      info.innerText = "";
  }
}

// Update owner reward token info
async function updateOwnerRewardTokenInfo() {
  const rewardToken = document.getElementById('ownerRewardToken').value;
  const infoElement = document.getElementById('ownerRewardTokenInfo');
  
  if (!rewardToken) {
      infoElement.innerText = "Enter a reward token address";
      return;
  }
  
  if (!web3.utils.isAddress(rewardToken)) {
      infoElement.innerText = "Invalid reward token address";
      return;
  }
  
  try {
      const tokenContract = new web3.eth.Contract(IERC20_ABI, rewardToken);
      const name = await tokenContract.methods.name().call();
      const balance = await tokenContract.methods.balanceOf(accounts[0]).call();
      const decimals = await tokenContract.methods.decimals().call();
      const balanceFormatted = web3.utils.fromWei(balance, 'ether') * Math.pow(10, decimals - 18); // Adjust decimals
      infoElement.innerText = `Token: ${name}, Balance: ${balanceFormatted.toFixed(2)}`;
      console.log(`Reward token validated: ${name}, address: ${rewardToken}, balance: ${balanceFormatted}`);
  } catch (error) {
      console.error("Failed to validate reward token:", error);
      infoElement.innerText = "Invalid reward token contract. Check address or network.";
  }
}


//______________OWNER TOOLS______________

// Initialize contract (Owner only)
async function initializeContract() {
  if (!contract || !accounts || !isOwner) {
      console.log("Contract, accounts, or owner access not initialized");
      document.getElementById('ownerStatus').innerText = "Only owners can initialize contract.";
      return;
  }
  try {
      document.getElementById('ownerStatus').innerText = "Initializing contract...";
      const nonce = await web3.eth.getTransactionCount(accounts[0], 'pending');
      await contract.methods.initialize().send({ 
          from: accounts[0], 
          gas: 500000, 
          gasPrice: web3.utils.toWei('20', 'gwei'),
          nonce: nonce 
      });
      trackInteraction('Initialize', 0);
      document.getElementById('ownerStatus').innerText = "Contract initialized successfully!";
      console.log("Contract initialized");
      await updateUIForRole();
      await enableButtons();
  } catch (error) {
      console.error("Failed to initialize contract:", error);
      document.getElementById('ownerStatus').innerText = "Failed to initialize contract. Check if already initialized.";
  }
}

// Authorize upgrade (Owner only, for upgradeable contracts)
async function authorizeUpgrade() {
  try {
      const newAddress = document.getElementById('newImplementationAddress').value;
      if (!web3.utils.isAddress(newAddress)) {
          document.getElementById('ownerStatus').innerText = "Invalid address.";
          return;
      }
      await contract.methods.authorizeUpgrade(newAddress).send({ from: accounts[0] });
      document.getElementById('ownerStatus').innerText = "Upgrade authorized!";
  } catch (error) {
      console.error("Authorize upgrade failed:", error);
      document.getElementById('ownerStatus').innerText = "Authorize upgrade failed.";
  }
}

// Get all pool IDs (Owner only, for display)
async function displayAllPoolIds() {
  if (!contract || !accounts || !isOwner) {
      console.log("Contract, accounts, or owner access not initialized");
      document.getElementById('ownerStatus').innerText = "Only owners can view all pool IDs.";
      return;
  }
  try {
      const poolCount = await contract.methods.poolCount().call();
      const poolIds = await contract.methods.getAllPoolIds(0, poolCount).call();
      document.getElementById('allPoolIds').innerText = `All Pool IDs: ${poolIds.join(', ')}`;
      console.log(`Fetched all pool IDs: ${poolIds}`);
  } catch (error) {
      console.error("Failed to fetch all pool IDs:", error);
      document.getElementById('ownerStatus').innerText = "Failed to fetch pool IDs.";
  }
}

// Pause contract
async function pauseContract() {
  if (!contract || !accounts) {
      console.log("Contract or accounts not initialized");
      document.getElementById('ownerStatus').innerText = "Contract or accounts not initialized";
      return;
  }
  try {
      await contract.methods.pause().send({ from: accounts[0] });
      trackInteraction();
      document.getElementById('ownerStatus').innerText = "Contract paused successfully!";
  } catch (error) {
      console.error("Failed to pause contract:", error);
      document.getElementById('ownerStatus').innerText = "Failed to pause contract. Check inputs.";
  }
}

// Unpause contract
async function unpauseContract() {
  if (!contract || !accounts) {
      console.log("Contract or accounts not initialized");
      document.getElementById('ownerStatus').innerText = "Contract or accounts not initialized";
      return;
  }
  try {
      await contract.methods.unpause().send({ from: accounts[0] });
      trackInteraction();
      document.getElementById('ownerStatus').innerText = "Contract unpaused successfully!";
  } catch (error) {
      console.error("Failed to unpause contract:", error);
      document.getElementById('ownerStatus').innerText = "Failed to unpause contract. Check inputs.";
  }
}

// Emergency pause
async function emergencyPause() {
  if (!contract || !accounts) {
      console.log("Contract or accounts not initialized");
      document.getElementById('ownerStatus').innerText = "Contract or accounts not initialized";
      return;
  }
  try {
      await contract.methods.emergencyPause().send({ from: accounts[0] });
      trackInteraction();
      document.getElementById('ownerStatus').innerText = "Contract emergency paused successfully!";
  } catch (error) {
      console.error("Failed to emergency pause:", error);
      document.getElementById('ownerStatus').innerText = "Failed to emergency pause. Check inputs.";
  }
}

// Emergency unpause
async function emergencyUnpause() {
  if (!contract || !accounts || !isOwner) {
      console.log("Contract, accounts, or owner access not initialized");
      document.getElementById('ownerStatus').innerText = "Only owners can unpause.";
      return;
  }
  try {
      document.getElementById('ownerStatus').innerText = "Unpausing contract...";
      const nonce = await web3.eth.getTransactionCount(accounts[0], 'pending');
      console.log(`Using nonce: ${nonce} for emergencyUnpause`);
      await contract.methods.emergencyUnpause().send({ 
          from: accounts[0], 
          gas: 200000, // Naikin gas limit
          gasPrice: web3.utils.toWei('20', 'gwei'),
          nonce: nonce 
      });
      trackInteraction('EmergencyUnpause', 0);
      document.getElementById('ownerStatus').innerText = "Contract unpaused successfully!";
      console.log("Contract emergency unpaused successfully");
      await updateUIForRole();
      await enableButtons();
      await showTab('defaultPool');
  } catch (error) {
      console.error("Failed to emergency unpause:", error);
      document.getElementById('ownerStatus').innerText = "Failed to unpause contract. Please try again.";
  }
}

// Set creation fee
async function setCreationFee() {
  if (!contract || !accounts) {
      console.log("Contract or accounts not initialized");
      document.getElementById('ownerStatus').innerText = "Contract or accounts not initialized.";
      return;
  }
  try {
      const newFeeInput = document.getElementById('newCreationFee').value;
      if (!newFeeInput || parseFloat(newFeeInput) < 0) {
          document.getElementById('ownerStatus').innerText = "Fee must be non-negative.";
          return;
      }
      const newFee = web3.utils.toWei(newFeeInput, 'ether');
      document.getElementById('ownerStatus').innerText = "Setting creation fee...";
      await contract.methods.setCreationFee(newFee).send({ from: accounts[0], gas: 100000 });
      trackInteraction();
      document.getElementById('ownerStatus').innerText = "Creation fee set successfully!";
      await updatePoolFeeUI();
      console.log(`Creation fee set to ${newFeeInput} CHIPS`);
  } catch (error) {
      console.error("Failed to set creation fee:", error);
      document.getElementById('ownerStatus').innerText = "Failed to set creation fee. Please check inputs.";
  }
}

//update Pool Fee UI
async function updatePoolFeeUI() {
  try {
      const poolFeeElement = document.getElementById('poolFee');
      if (!poolFeeElement) {
          console.error("Pool fee element not found");
          return;
      }
      // Ganti creationFee dengan fungsi kontrak yang valid
      const fee = await contract.methods.creationFee().call().catch(() => '0');
      poolFeeElement.innerText = `Pool Creation Fee: ${web3.utils.fromWei(fee, 'ether')} CHIPS`;
      console.log("Pool fee updated:", fee);
  } catch (error) {
      console.error("Failed to update pool fee:", error.message);
      // Gak set innerText ke UI, biar clean
      const poolFeeElement = document.getElementById('poolFee');
      if (poolFeeElement) {
          poolFeeElement.innerText = "Pool Creation Fee: 0 CHIPS"; // Fallback
      }
  }
}

// Update pool ID dropdown for owner controls
async function updatePoolIdDropdown(poolCount) {
    const dropdowns = ['visibilityPoolId', 'updatePoolId', 'fundPoolId', 'withdrawPoolId', 'poolIdPin', 'poolIdDeactivate', 'poolIdActivate', 'editPoolId'];
    dropdowns.forEach(id => {
        const dropdown = document.getElementById(id);
        if (dropdown) {
            dropdown.innerHTML = '<option value="all">All Pools</option>';
            for (let i = 0; i < poolCount; i++) {
                const option = document.createElement('option');
                option.value = i;
                option.text = `Pool ID ${i}`;
                dropdown.appendChild(option);
            }
        }
    });

    // Update ownerStakeToken dropdown with ticker and pool ID
    const ownerStakeToken = document.getElementById('ownerStakeToken');
    if (ownerStakeToken) {
        ownerStakeToken.innerHTML = `
            <option value="${CHIPS_ADDRESS}">CHIPS</option>
            <option value="${USDT_ADDRESS}">USDT</option>
        `;
        for (let i = 0; i < poolCount; i++) {
            const poolInfo = await contract.methods.getPoolInfo(i).call();
            const ticker = poolInfo.stakeToken === CHIPS_ADDRESS ? 'CHIPS' : poolInfo.stakeToken === USDT_ADDRESS ? 'USDT' : 'OTHER';
            const option = document.createElement('option');
            option.value = poolInfo.stakeToken;
            option.text = `Pool ID ${i} (${ticker})`;
            ownerStakeToken.appendChild(option);
        }
    }
}

// Update filter dropdowns for Top Pool and New Pool
async function updateFilterDropdowns() {
    const dropdowns = ['filterPoolId', 'filterNewPoolId'];
    try {
        const poolCount = await contract.methods.poolCount().call();
        dropdowns.forEach(id => {
            const dropdown = document.getElementById(id);
            if (dropdown) {
                dropdown.innerHTML = '<option value="all">All Pools</option>';
                for (let i = 0; i < poolCount; i++) {
                    const option = document.createElement('option');
                    option.value = i;
                    option.text = `Pool ID ${i}`;
                    dropdown.appendChild(option);
                }
            }
        });
    } catch (error) {
        console.error("Failed to update filter dropdowns:", error);
    }
}

// Update UI based on role
function updateUIForRole() {
    const tabs = ['defaultPoolTab', 'newPoolTab', 'createPoolTab', 'myCreatedPoolsTab', 'myStakesTab', 'ownerControlTab'];
    tabs.forEach(id => {
        const tab = document.getElementById(id);
        if (tab) {
            const tabId = id.replace('Tab', '');
            if (id === 'defaultPoolTab') {
                tab.style.display = 'inline-block'; // Top Pool always visible
            } else if (id === 'ownerControlTab') {
                tab.style.display = accounts && isOwner ? 'inline-block' : 'none'; // Owner only
            } else {
                tab.style.display = (accounts && (!hiddenMenus[tabId] || isOwner)) ? 'inline-block' : 'none';
            }
        }
    });
    const ownerControl = document.getElementById('ownerControl');
    if (ownerControl) {
        ownerControl.style.display = isOwner ? 'block' : 'none';
    }
    console.log(`Updated UI for role, isOwner: ${isOwner}`);
}

// Hide all menus 
async function hideMenuUI(menuId, hide) {
  if (!isOwner || !accounts) {
      console.log("Owner access or contract not initialized");
      document.getElementById('ownerStatus').innerText = "Owner access required.";
      return;
  }
  try {
      console.log(`Attempting to ${hide ? 'hide' : 'show'} menu: ${menuId}`);
      hiddenMenus[menuId] = hide;
      const checkboxId = `hide${menuId.charAt(0).toUpperCase() + menuId.slice(1)}`;
      const checkbox = document.getElementById(checkboxId);
      if (checkbox) {
          checkbox.checked = hide;
          console.log(`Updated checkbox ${checkboxId} to ${hide}`);
      } else {
          console.warn(`Checkbox ${checkboxId} not found`);
      }
      const tabButton = document.getElementById(`${menuId}Tab`);
      if (tabButton) {
          tabButton.style.display = hide ? 'none' : 'inline-block';
          console.log(`Tab button ${menuId}Tab ${hide ? 'hidden' : 'shown'}`);
      }
      document.getElementById('ownerStatus').innerText = `Menu ${menuId} ${hide ? 'hidden' : 'shown'} successfully!`;
      console.log(`Menu ${menuId} ${hide ? 'hidden' : 'shown'}`);
  } catch (error) {
      console.error(`Failed to ${hide ? 'hide' : 'show'} menu ${menuId}:`, error.message);
      document.getElementById('ownerStatus').innerText = "Failed to update menu visibility.";
  }
}

// Show all menus
async function showAllMenus() {
  try {
      console.log("Showing all menus...");
      const menus = ['defaultPool', 'newPool', 'createPool', 'myCreatedPools', 'myStakes', 'creatorTool', 'ownerControl'];
      const controlGroup = document.querySelector('#ownerControl .menu-visibility .control-group');
      if (!controlGroup) {
          console.error("Control group not found in Menu Visibility section");
          document.getElementById('ownerStatus').innerText = "Menu Visibility section not found.";
          return;
      }

      for (const menuId of menus) {
          hiddenMenus[menuId] = false;
          const checkboxId = `hide${menuId.charAt(0).toUpperCase() + menuId.slice(1)}`;
          let checkbox = document.getElementById(checkboxId);
          if (!checkbox) {
              console.warn(`Checkbox ${checkboxId} not found, creating fallback`);
              const label = document.createElement('label');
              label.innerHTML = `<input type="checkbox" id="${checkboxId}" onchange="toggleMenuVisibility('${menuId}')"> Hide ${menuId.charAt(0).toUpperCase() + menuId.slice(1)}`;
              controlGroup.appendChild(label);
              checkbox = document.getElementById(checkboxId);
              console.log(`Created fallback checkbox ${checkboxId}`);
          }
          if (checkbox) {
              checkbox.checked = false;
              console.log(`Unchecked hide checkbox for ${menuId}`);
          } else {
              console.warn(`Checkbox ${checkboxId} still not found`);
          }
      }

      // Aktifkan semua tombol tab
      const tabs = [
          'defaultPoolTab', 'newPoolTab', 'createPoolTab', 'myCreatedPoolsTab', 'myStakesTab', 'creatorToolTab', 'ownerControlTab'
      ];
      for (const tabId of tabs) {
          const tabBtn = document.getElementById(tabId);
          if (tabBtn) {
              tabBtn.disabled = menusDisabled ? true : false;
              tabBtn.style.display = hiddenMenus[tabId.replace('Tab', '')] || areMenusHidden ? 'none' : 'inline-block';
              tabBtn.style.pointerEvents = 'auto';
              tabBtn.style.opacity = '1';
              tabBtn.classList.remove('disabled');
              tabBtn.removeAttribute('disabled');
              console.log(`Enabled tab: ${tabId}`);
          }
      }
      document.getElementById('ownerStatus').innerText = "All menus shown successfully!";
  } catch (error) {
      console.error("Failed to show all menus:", error.message);
      document.getElementById('ownerStatus').innerText = "Failed to show menus.";
  }
}

// Disable all menus in UI 
async function disableAllMenusUI() {
  if (!isOwner || !accounts) {
      console.log("Only owners can disable menus, isOwner:", isOwner, "accounts:", accounts);
      document.getElementById('ownerStatus').innerText = "Only owners can disable menus.";
      return;
  }
  try {
      console.log("Disabling all menus in UI...");
      menusDisabled = true;
      // Pastikan creatorToolTab tetap aktif untuk creator
      const isCreator = await checkCreatorStatus();
      console.log(`Creator status: ${isCreator}`);
      const creatorTab = document.getElementById('creatorToolTab');
      if (creatorTab && isCreator) {
          creatorTab.disabled = false;
          creatorTab.style.display = 'inline-block';
          creatorTab.style.pointerEvents = 'auto';
          creatorTab.style.opacity = '1';
          creatorTab.classList.remove('disabled');
          creatorTab.onclick = () => {
              console.log("Creator tool tab clicked from disableAllMenusUI");
              showCreatorTab('creatorTool');
          };
          console.log(`Kept creatorToolTab enabled for creator: disabled=${creatorTab.disabled}, display=${creatorTab.style.display}, pointerEvents=${creatorTab.style.pointerEvents}`);
      }
      updateUIForRole();
      enableButtons();
      document.getElementById('ownerStatus').innerText = "All menus disabled in UI.";
      console.log("All menus disabled successfully");
  } catch (error) {
      console.error("Failed to disable all menus:", error.message);
      document.getElementById('ownerStatus').innerText = "Failed to disable menus.";
  }
}

// Enable all menus in UI
async function enableAllMenusUI() {
  if (!isOwner || !accounts) {
      console.log("Only owners can enable menus, isOwner:", isOwner, "accounts:", accounts);
      document.getElementById('ownerStatus').innerText = "Only owners can enable menus.";
      return;
  }
  try {
      console.log("Enabling all menus in UI...");
      menusDisabled = false;
      // Pastikan creatorToolTab diaktifkan untuk creator
      const isCreator = await checkCreatorStatus();
      console.log(`Creator status: ${isCreator}`);
      const creatorTab = document.getElementById('creatorToolTab');
      if (creatorTab && isCreator) {
          creatorTab.disabled = false;
          creatorTab.style.display = 'inline-block';
          creatorTab.style.pointerEvents = 'auto';
          creatorTab.style.opacity = '1';
          creatorTab.classList.remove('disabled');
          creatorTab.onclick = () => {
              console.log("Creator tool tab clicked from enableAllMenusUI");
              showCreatorTab('creatorTool');
          };
          console.log(`Enabled creatorToolTab: disabled=${creatorTab.disabled}, display=${creatorTab.style.display}, pointerEvents=${creatorTab.style.pointerEvents}`);
      }
      updateUIForRole();
      enableButtons();
      document.getElementById('ownerStatus').innerText = "All menus enabled in UI.";
      console.log("All menus enabled successfully");
  } catch (error) {
      console.error("Failed to enable all menus:", error.message);
      document.getElementById('ownerStatus').innerText = "Failed to enable menus.";
  }
}

// Hide all pools (contract)
async function hideAllPools() {
  if (!isOwner || !accounts) {
      console.log("Not owner or not connected, cannot hide pools");
      document.getElementById('ownerStatus').innerText = "Only owners can hide pools.";
      return;
  }
  visiblePools = [];
  pinnedPools = [];
  document.getElementById('ownerStatus').innerText = "All pools hidden from UI";
  await showTab('defaultPool');
}

// Hide all pools in UI
function hideAllPoolsUI(tabId) {
  if (tabId === 'defaultPool') {
      pinnedPools = [];
  } else {
      visiblePools = [];
  }
  showTab(tabId);
  document.getElementById('status').innerText = "All pools hidden from UI";
}

// Toggle pool visibility (contract)
async function togglePoolVisibility() {
  if (!isOwner || !accounts) {
      console.log("Not owner or not connected, cannot toggle visibility");
      document.getElementById('ownerStatus').innerText = "Only owners can toggle visibility.";
      return;
  }
  try {
      const ticker = document.getElementById('visibilityTicker').value;
      const poolId = document.getElementById('visibilityPoolId').value;
      const isVisible = document.getElementById('visibilityToggle').value === 'on';
      
      if (poolId === 'all') {
          const poolCount = await contract.methods.poolCount().call();
          for (let i = 0; i < poolCount; i++) {
              const poolInfo = await contract.methods.getPoolInfo(i).call();
              const poolTicker = poolInfo.stakeToken === CHIPS_ADDRESS ? 'CHIPS' : poolInfo.stakeToken === USDT_ADDRESS ? 'USDT' : 'OTHER';
              if (ticker === 'all' || ticker === poolTicker) {
                  if (isVisible && !visiblePools.includes(i)) visiblePools.push(i);
                  else if (!isVisible && visiblePools.includes(i)) visiblePools = visiblePools.filter(id => id !== i);
              }
          }
      } else {
          const id = parseInt(poolId);
          const poolInfo = await contract.methods.getPoolInfo(id).call();
          const poolTicker = poolInfo.stakeToken === CHIPS_ADDRESS ? 'CHIPS' : poolInfo.stakeToken === USDT_ADDRESS ? 'USDT' : 'OTHER';
          if (ticker === 'all' || ticker === poolTicker) {
              if (isVisible && !visiblePools.includes(id)) visiblePools.push(id);
              else if (!isVisible && visiblePools.includes(id)) visiblePools = visiblePools.filter(id => id !== id);
          }
      }
      
      document.getElementById('ownerStatus').innerText = `Visibility updated for pool ${ticker}`;
      await showTab('defaultPool');
  } catch (error) {
      console.error("Failed to toggle pool visibility:", error);
      document.getElementById('ownerStatus').innerText = "Unable to update pool visibility";
  }
}

//Toggle Musvisibility
async function toggleMenuVisibility(tabId) {
  try {
      const checkbox = document.getElementById(`hide${tabId.charAt(0).toUpperCase() + tabId.slice(1)}`);
      const isHidden = checkbox.checked;
      await contract.methods.toggleMenuVisibility(tabId, isHidden).send({ from: accounts[0] });
      document.getElementById('ownerStatus').innerText = `Menu visibility toggled for ${tabId}`;
      await showTab(currentTab);
  } catch (error) {
      console.error(`Failed to toggle menu visibility for ${tabId}:`, error);
      document.getElementById('ownerStatus').innerText = `Failed to toggle menu visibility for ${tabId}`;
  }
}

// Toggle pool visibility in UI
async function togglePoolVisibilityUI(tabId) {
  const poolId = document.getElementById(tabId === 'defaultPool' ? 'filterPoolId' : 'filterNewPoolId')?.value;
  const ticker = document.getElementById(tabId === 'defaultPool' ? 'filterTicker' : 'filterNewTicker')?.value;
  
  try {
      const poolCount = await contract.methods.poolCount().call();
      if (poolId === 'all') {
          for (let i = 0; i < poolCount; i++) {
              const poolInfo = await contract.getPoolInfo(i).call();
              const poolTicker = poolInfo.stakeToken === CHIPS_ADDRESS ? 'CHIPS' : poolInfo.stakeToken === USDT_ADDRESS ? 'USDT' : 'OTHER';
              if (ticker === 'all' || ticker === poolPayee) {
                  if (tabId === 'defaultPool' && !pinnedPools.includes(i)) pinnedPools.push(i);
                  if (tabId === 'newPool' && !visiblePools.includes(i)) visiblePools.push(i);
              }
          }
      } else {
          const id = parseInt(poolId);
          const poolInfo = await contract.getPoolInfo(id).call();
          const poolTicker = poolInfo.stakeToken === CHIPS_ADDRESS ? 'CHIPS' : poolInfo.stakeToken === USDT_ADDRESS ? 'USDT' : 'OTHER';
          if (ticker === 'all' || ticker === poolPayee) {
              if (tabId === 'defaultPool' && !pinnedPools.includes(id)) pinnedPools.push(id);
              if (tabId === 'newPool' && !visiblePools.includes(id)) visiblePools.push(id);
          }
      }
      await showTab(tabId);
      document.getElementById('status').innerText = `Showing pools for ${ticker === 'all' ? 'all tokens' : ticker}`;
      console.log(`Visible pools after toggle for ${tabId}:`, tabId === 'defaultPool' ? pinnedPools : visiblePools);
  } catch (error) {
      console.error("Failed to toggle pool visibility in UI:", error);
      document.getElementById('status').innerText = "Unable to update pool visibility";
  }
}

// Deactivate pool
async function deactivatePool(poolId) {
  if (!contract || !accounts) {
      console.log("Contract or accounts not initialized");
      document.getElementById('ownerStatus').innerText = "Contract or accounts not initialized";
      return;
  }
  try {
      await contract.methods.deactivatePool(poolId).send({ from: accounts[0] });
      trackInteraction();
      document.getElementById('ownerStatus').innerText = "Pool deactivated successfully!";
      visiblePools = visiblePools.filter(id => id !== poolId);
      pinnedPools = pinnedPools.filter(id => id !== poolId);
      await showTab('defaultPool');
  } catch (error) {
      console.error("Failed to deactivate pool:", error);
      document.getElementById('ownerStatus').innerText = "Failed to deactivate pool. Check inputs.";
  }
}

// Deactivate all pools
async function deactivateAllPools() {
  if (!contract || !accounts) {
      console.log("Contract or accounts not initialized");
      document.getElementById('ownerStatus').innerText = "Contract or accounts not initialized";
      return;
  }
  try {
      await contract.methods.deactivateAllPools().send({ from: accounts[0] });
      trackInteraction();
      document.getElementById('ownerStatus').innerText = "All pools deactivated successfully!";
      visiblePools = [];
      pinnedPools = [];
      await showTab('defaultPool');
  } catch (error) {
      console.error("Failed to deactivate all pools:", error);
      document.getElementById('ownerStatus').innerText = "Failed to deactivate all pools. Check inputs.";
  }
}

// Activate pool
async function activatePool(poolId) {
  if (!contract || !accounts) {
      console.log("Contract or accounts not initialized");
      document.getElementById('ownerStatus').innerText = "Contract or accounts not initialized";
      return;
  }
  try {
      await contract.methods.activatePool(poolId).send({ from: accounts[0] });
      trackInteraction();
      document.getElementById('ownerStatus').innerText = "Pool activated successfully!";
      if (!visiblePools.includes(parseInt(poolId))) visiblePools.push(parseInt(poolId));
      await showTab('newPool');
  } catch (error) {
      console.error("Failed to activate pool:", error);
      document.getElementById('ownerStatus').innerText = "Failed to activate pool. Check inputs.";
  }
}

// Activate all pools
async function activateAllPools() {
  if (!contract || !accounts) {
      console.log("Contract or accounts not initialized");
      document.getElementById('ownerStatus').innerText = "Contract or accounts not initialized";
      return;
  }
  try {
      const poolCount = await contract.methods.poolCount().call();
      for (let i = 0; i < poolCount; i++) {
          await contract.methods.activatePool(i).send({ from: accounts[0] });
          if (!visiblePools.includes(i)) visiblePools.push(i);
      }
      trackInteraction();
      document.getElementById('ownerStatus').innerText = "All pools activated successfully!";
      await showTab('newPool');
  } catch (error) {
      console.error("Failed to activate all pools:", error);
      document.getElementById('ownerStatus').innerText = "Failed to activate all pools. Check inputs";
      return;
  }
}

// Pin pool 
async function pinPool(poolId) {
  if (!isOwner || !accounts) {
      console.warn("Owner access required to pin pool");
      document.getElementById('ownerStatus').innerText = "Owner access required.";
      return;
  }
  try {
      poolId = Number(poolId); // Pastiin poolId jadi number
      if (!pinnedPools.includes(poolId)) {
          pinnedPools.push(poolId);
          localStorage.setItem('pinnedPools', JSON.stringify(pinnedPools));
          console.log(`Pinned pool ${poolId}`);
          await filterPools('defaultPool'); // Refresh Top Pool
          document.getElementById('ownerStatus').innerText = `Pinned pool ${poolId}`;
      } else {
          await unpinPool(poolId); // Kalo udah pinned, unpin
      }
  } catch (error) {
      console.error(`Failed to pin pool ${poolId}: ${error.message}`);
      document.getElementById('ownerStatus').innerText = "Failed to pin pool.";
  }
}


// Unpin pool 
async function unpinPool(poolId) {
  if (!isOwner || !accounts) {
      console.warn("Owner access required to unpin pool");
      document.getElementById('ownerStatus').innerText = "Owner access required.";
      return;
  }
  try {
      poolId = Number(poolId); // Pastiin poolId jadi number
      if (pinnedPools.includes(poolId)) {
          pinnedPools = pinnedPools.filter(id => id !== poolId);
          localStorage.setItem('pinnedPools', JSON.stringify(pinnedPools));
          console.log(`Unpinned pool ${poolId}`);
          await filterPools('defaultPool'); // Refresh Top Pool
          document.getElementById('ownerStatus').innerText = `Unpinned pool ${poolId}`;
      }
  } catch (error) {
      console.error(`Failed to unpin pool ${poolId}: ${error.message}`);
      document.getElementById('ownerStatus').innerText = "Failed to unpin pool.";
  }
}

// Update APR
async function updateApr(poolId) {
  if (!isOwner || !accounts) {
      document.getElementById('ownerStatus').innerText = "Owner access required";
      return;
  }
  try {
      const newApr = Number(document.getElementById(`newApr${poolId}`)?.value || prompt("Enter new APR (%)", "10000"));
      if (!newApr || newApr < 360 || newApr > 10000) {
          throw new Error(`APR must be between 360% and 10000%`);
      }

      console.log(`Updating APR for pool ${poolId} to ${newApr}%`);

      document.getElementById('ownerStatus').innerText = `Updating APR for pool ${poolId}...`;
      const tx = await contract.methods.updateApr(poolId, newApr).send({ from: accounts[0], gas: 100000 });

      console.log(`APR updated for pool ${poolId}: newApr=${newApr}, txHash=${tx.transactionHash}`);
      document.getElementById('ownerStatus').innerText = `APR for pool ${poolId} updated to ${newApr}%`;

      // Verifikasi APR di kontrak
      const poolInfo = await contract.methods.getPoolInfo(poolId).call();
      console.log(`Verified APR for pool ${poolId}: apr=${poolInfo.apr}, pendingApr=${poolInfo.pendingApr}, lastAprUpdate=${poolInfo.lastAprUpdate}`);

      await filterPools('defaultPool'); // Refresh Top Pool
      await filterPools('newPool'); // Refresh New Pool
  } catch (error) {
      console.error(`Failed to update APR for pool ${poolId}:`, error);
      document.getElementById('ownerStatus').innerText = `Failed to update APR for pool ${poolId}: ${error.message}`;
  }
}

// Fund Reward
async function fundReward() {
  let poolIdNum = -1;
  try {
      if (!accounts || !accounts[0] || !contract) {
          console.error("Wallet or contract not initialized.");
          document.getElementById('status').innerText = "Please connect wallet.";
          return;
      }
      console.log("Attempting to fund reward");

      poolIdNum = parseInt(document.getElementById('fundPoolId').value);
      if (isNaN(poolIdNum) || poolIdNum < 0) {
          console.error("Invalid Pool ID selected");
          document.getElementById('status').innerText = "Please select a valid Pool ID.";
          return;
      }
      console.log(`Selected Pool ID: ${poolIdNum}`);

      const adminRole = web3.utils.keccak256("ADMIN_ROLE");
      const hasAdminRole = await contract.methods.hasRole(adminRole, accounts[0]).call();
      if (!hasAdminRole) {
          console.error("User does not have ADMIN_ROLE");
          document.getElementById('status').innerText = "Only admins can fund rewards.";
          return;
      }

      const paused = await contract.methods.paused().call();
      const emergencyPaused = await contract.methods.emergencyPaused().call();
      if (paused || emergencyPaused) {
          console.error(`Contract is ${paused ? 'paused' : 'emergency paused'}`);
          document.getElementById('status').innerText = "Contract is locked. Please unpause.";
          return;
      }

      const poolInfo = await contract.methods.getPoolInfo(poolIdNum).call();
      if (!poolInfo.active && !pinnedPools.includes(poolIdNum)) {
          console.error(`Pool ${poolIdNum} is not active`);
          document.getElementById('status').innerText = "Pool is not active.";
          return;
      }

      if (poolInfo.rewardTokens.length === 0) {
          console.error(`No reward tokens configured for Pool ${poolIdNum}`);
          document.getElementById('status').innerText = "No reward tokens available for this pool.";
          return;
      }

      const rewardToken = poolInfo.rewardTokens[0].toLowerCase();
      const isValidRewardToken = poolInfo.rewardTokens.some(token => token.toLowerCase() === rewardToken);
      if (!isValidRewardToken) {
          console.error(`Reward token ${rewardToken} not allowed for Pool ${poolIdNum}`);
          document.getElementById('status').innerText = "Invalid reward token for this pool.";
          return;
      }

      const tokenName = rewardToken === '0x0000000000000000000000000000000000000000' ? 'CHIPS' : await getTokenName(rewardToken);
      const decimals = await getTokenDecimals(rewardToken);
      console.log(`Token ${tokenName} decimals: ${decimals}`);

      const amountInput = document.getElementById('fundAmount');
      let amount = amountInput.value.trim();
      if (!amount || isNaN(amount) || Number(amount) <= 0) {
          console.error("Invalid fund amount");
          document.getElementById('status').innerText = "Please enter a valid amount.";
          return;
      }

      // Validasi input amount
      amount = Number(amount);
      if (amount > 1e9) { // Batas 1 miliar buat hindarin overflow
          console.error(`Amount too large: ${amount}`);
          document.getElementById('status').innerText = "Amount too large. Max 1 billion.";
          return;
      }

      // Konversi ke wei dengan format string
      let amountWei;
      try {
          // Format amount ke string dengan presisi sesuai desimal
          const amountStr = amount.toLocaleString('fullwide', { useGrouping: false, maximumFractionDigits: decimals });
          amountWei = web3.utils.toWei(amountStr, decimals === 18 ? 'ether' : decimals === 6 ? 'mwei' : 'wei');
          amountWei = web3.utils.toBN(amountWei);
      } catch (error) {
          console.error(`Failed to convert amount to wei: ${error.message}`);
          document.getElementById('status').innerText = "Invalid amount format.";
          return;
      }
      console.log(`Fund amount: ${amount} ${tokenName}, in wei: ${amountWei.toString()}`);

      // Check balance
      let balance;
      if (rewardToken === '0x0000000000000000000000000000000000000000') {
          balance = await web3.eth.getBalance(accounts[0]);
      } else {
          const tokenContract = new web3.eth.Contract(IERC20_ABI, rewardToken);
          balance = await tokenContract.methods.balanceOf(accounts[0]).call();
      }
      if (web3.utils.toBN(balance).lt(amountWei)) {
          console.error(`Insufficient ${tokenName} balance`);
          document.getElementById('status').innerText = `Insufficient ${tokenName} balance.`;
          return;
      }

      // Check allowance for ERC20
      if (rewardToken !== '0x0000000000000000000000000000000000000000') {
          const tokenContract = new web3.eth.Contract(IERC20_ABI, rewardToken);
          const allowance = await tokenContract.methods.allowance(accounts[0], contractAddress).call();
          if (web3.utils.toBN(allowance).lt(amountWei)) {
              const approveTx = await tokenContract.methods.approve(contractAddress, amountWei).send({
                  from: accounts[0],
                  gas: 100000,
                  gasPrice: web3.utils.toWei('20', 'gwei')
              });
              console.log(`Approved ${amount} ${tokenName} for pool ${poolIdNum}, txHash: ${approveTx.transactionHash}`);
          }
      }

      // Set startTime dan endTime
      const now = new Date();
      const sevenDaysFromNow = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
      sevenDaysFromNow.setUTCHours(0, 0, 0, 0);
      const startTimeInput = parseInt(document.getElementById('startTime')?.value);
      const endTimeInput = parseInt(document.getElementById('endTime')?.value);

      let startTime = Math.floor(sevenDaysFromNow.getTime() / 1000);
      let endTime = startTime + (7 * 24 * 3600);

      if (!isNaN(startTimeInput) && startTimeInput > Math.floor(now.getTime() / 1000)) {
          startTime = startTimeInput;
      }
      if (!isNaN(endTimeInput) && endTimeInput > startTime) {
          endTime = endTimeInput;
      }

      if (startTime <= Math.floor(now.getTime() / 1000)) {
          console.error("startTime must be in the future");
          document.getElementById('status').innerText = "Start time must be in the future.";
          return;
      }
      if (endTime <= startTime) {
          console.error("endTime must be after startTime");
          document.getElementById('status').innerText = "End time must be after start time.";
          return;
      }

      // Estimate gas
      let gasEstimate;
      try {
          gasEstimate = await contract.methods.fundReward(poolIdNum, rewardToken, amountWei, startTime, endTime).estimateGas({
              from: accounts[0],
              value: rewardToken === '0x0000000000000000000000000000000000000000' ? amountWei : 0
          });
          gasEstimate = Math.ceil(gasEstimate * 1.5);
      } catch (error) {
          console.error(`Gas estimation failed: ${error.message}`);
          gasEstimate = 5000000;
      }

      const nonce = await web3.eth.getTransactionCount(accounts[0], 'pending');
      console.log(`Funding ${amount} ${tokenName} to pool ${poolIdNum}, startTime: ${startTime}, endTime: ${endTime}, nonce: ${nonce}`);

      const fundTx = await contract.methods.fundReward(poolIdNum, rewardToken, amountWei, startTime, endTime).send({
          from: accounts[0],
          gas: gasEstimate,
          gasPrice: web3.utils.toWei('20', 'gwei'),
          value: rewardToken === '0x0000000000000000000000000000000000000000' ? amountWei : 0,
          nonce: nonce
      });

      console.log(`Funded ${amount} ${tokenName} to pool ${poolIdNum}, txHash: ${fundTx.transactionHash}`);
      document.getElementById('status').innerText = `Successfully funded ${amount} ${tokenName} to Pool ${poolIdNum}.`;
      await updatePoolBalance();
      await filterPools('defaultPool');
  } catch (error) {
      console.error(`Failed to fund reward for pool ${poolIdNum}: ${error.message}`);
      document.getElementById('status').innerText = `Failed to fund reward for Pool ${poolIdNum}. Check inputs or contract status.`;
  }
}

//Edit max Reward
async function editMaxRewardPerUser() {
  if (!contract || !accounts || !isOwner) {
      console.log("Contract, accounts, or owner access not initialized");
      document.getElementById('ownerStatus').innerText = "Only owners can edit max reward.";
      return;
  }
  try {
      const poolId = parseInt(document.getElementById('editMaxRewardPoolId').value);
      const newMaxReward = document.getElementById('newMaxReward').value;
      if (isNaN(poolId) || poolId < 0) {
          console.log("Invalid pool ID");
          document.getElementById('ownerStatus').innerText = "Invalid pool ID.";
          return;
      }
      if (!newMaxReward || parseFloat(newMaxReward) <= 0) {
          console.log("Invalid max reward amount");
          document.getElementById('ownerStatus').innerText = "Max reward must be greater than 0.";
          return;
      }
      const decimals = await getTokenDecimals((await contract.methods.getPoolInfo(poolId).call()).rewardTokens[0]);
      const maxRewardWei = web3.utils.toWei(newMaxReward, decimals === 6 ? 'mwei' : 'ether');
      const nonce = await web3.eth.getTransactionCount(accounts[0], 'pending');
      await contract.methods.updatePoolParameters(poolId, (await contract.methods.getPoolInfo(poolId).call()).lockPeriod, maxRewardWei).send({
          from: accounts[0],
          gas: 200000,
          nonce: nonce
      });
      trackInteraction('EditMaxReward', poolId);
      document.getElementById('ownerStatus').innerText = `Max reward updated successfully for pool ${poolId}!`;
      console.log(`Updated max reward for pool ${poolId} to ${newMaxReward}`);
      await showTab('ownerControl');
  } catch (error) {
      console.error("Failed to edit max reward:", error);
      document.getElementById('ownerStatus').innerText = "Failed to update max reward. Check inputs.";
  }
}


//_______________Owner Admin User creator info_________________

// Switch tabs
async function showTab(tabId) {
  try {
      console.log(`Attempting to show tab: ${tabId}`);
      const statusElement = document.getElementById('status');
      if (!accounts) {
          console.log("Not connected, cannot access tab");
          if (statusElement) statusElement.innerText = "Please connect wallet.";
          return;
      }

      if (hiddenMenus[tabId] && !isOwner) {
          console.log("Menu hidden, cannot access tab:", tabId);
          if (statusElement) statusElement.innerText = "This tab is hidden by the owner.";
          return;
      }

      document.querySelectorAll('.tab').forEach(tab => {
          tab.style.display = 'none';
      });

      const isCreator = await checkCreatorStatus();
      console.log(`Global creator status: ${isCreator}`);

      document.querySelectorAll('.tab-buttons button').forEach(btn => {
          btn.classList.remove('active');
          const btnId = btn.id;
          if (btnId === 'creatorToolTab' && accounts && isCreator) {
              btn.style.display = 'inline-block';
              console.log(`Showing button: ${btnId}`);
          } else if (btnId === 'ownerControlTab' && isOwner) {
              btn.style.display = 'inline-block';
              console.log(`Showing button: ${btnId}`);
          } else if (['defaultPoolTab', 'newPoolTab', 'createPoolTab', 'myCreatedPoolsTab', 'myStakesTab'].includes(btnId)) {
              btn.style.display = 'inline-block';
              console.log(`Showing button: ${btnId}`);
          } else {
              btn.style.display = 'none';
              console.log(`Hiding button: ${btnId}`);
          }
      });

      const tabElement = document.getElementById(tabId);
      const tabButton = document.getElementById(tabId + 'Tab');
      if (!tabElement || !tabButton) {
          console.error(`Tab element or button not found for ${tabId}`);
          if (statusElement) statusElement.innerText = "Tab not found.";
          return;
      }
      tabElement.style.display = 'block';
      tabButton.classList.add('active');
      tabButton.style.display = 'inline-block';
      console.log(`Activated tab: ${tabId}, button: ${tabId + 'Tab'}`);

      if (tabId === 'defaultPool' || tabId === 'newPool') {
          const poolList = document.getElementById(tabId === 'defaultPool' ? 'defaultPoolCard' : 'newPoolCard');
          if (!poolList) {
              console.error(`Pool list not found for ${tabId}`);
              if (statusElement) statusElement.innerText = "Failed to load pool list.";
              return;
          }
          poolList.innerHTML = `
              <div class="filter-controls">
                  <select id="${tabId === 'defaultPool' ? 'filterPoolId' : 'filterNewPoolId'}">
                      <option value="all">All Pools</option>
                  </select>
                  <select id="${tabId === 'defaultPool' ? 'filterTicker' : 'filterNewTicker'}">
                      <option value="all">All Tokens</option>
                      <option value="CHIPS">CHIPS</option>
                      <option value="USDT">USDT</option>
                      <option value="OTHER">Others</option>
                  </select>
                  <button onclick="filterPools('${tabId}')">Filter</button>
                  <button onclick="hideAllPoolsUI('${tabId}')">Hide All</button>
                  <button onclick="togglePoolVisibilityUI('${tabId}')">Show Selected Pool</button>
              </div>
              <div class="pool-grid"><p>Loading...</p></div>
          `;
          console.log(`Rendering dropdown for ${tabId}...`);
          await populatePoolDropdown();
          console.log(`Filtering pools for ${tabId}...`);
          await filterPools(tabId);
      } else if (tabId === 'createPool') {
          const poolList = document.getElementById('createPoolForm');
          if (!poolList) {
              console.error(`Create pool form not found`);
              if (statusElement) statusElement.innerText = "Failed to load create pool form.";
              return;
          }
          poolList.innerHTML = `
              <div class="pool-grid">
                  <div class="pool-card">
                      <h3>Create New Pool</h3>
                      <p id="poolFee"></p>
                      <label for="stakeToken">Stake Token:</label>
                      <select id="stakeToken" onchange="updateStakeTokenInfo()">
                          <option value="${CHIPS_ADDRESS}">CHIPS</option>
                          <option value="${USDT_ADDRESS}">USDT</option>
                      </select>
                      <p id="stakeTokenInfo"></p>
                      <label for="rewardToken">Reward Token:</label>
                      <input type="text" id="rewardToken" placeholder="Reward Token Address" oninput="updateRewardTokenInfo()">
                      <p id="rewardTokenInfo"></p>
                      <label for="poolApr">APR (360–10000%):</label>
                      <input type="number" id="poolApr" placeholder="APR (360–10000%)" min="360" max="10000">
                      <label for="initialReward">Initial Reward Amount:</label>
                      <input type="number" id="initialReward" placeholder="Initial Reward Amount" step="0.01" min="0.01">
                      <label for="lockPeriod">Lock Period (days):</label>
                      <input type="number" id="lockPeriod" placeholder="Lock Period (days)" min="0">
                      <label for="maxRewardPerUser">Max Reward Per User:</label>
                      <input type="number" id="maxRewardPerUser" placeholder="Max Reward Per User" step="0.01" min="0.01">
                      <button onclick="createPool()" ${!accounts ? 'disabled' : ''}>Create Pool</button>
                      <p id="createStatus"></p>
                  </div>
              </div>
          `;
          await updatePoolFeeUI();
          await updateStakeTokenInfo();
          await updateRewardTokenInfo();
      } else if (tabId === 'myCreatedPools' || tabId === 'myStakes') {
          const poolList = document.getElementById(tabId === 'myCreatedPools' ? 'poolList' : 'myStakesCard');
          if (!poolList) {
              console.error(`Pool list not found for ${tabId}`);
              if (statusElement) statusElement.innerText = "Failed to load pool list.";
              return;
          }
          poolList.innerHTML = '<div class="pool-grid"><p>Loading...</p></div>';
          const poolGrid = poolList.querySelector('.pool-grid');
          if (!poolGrid) {
              console.error(`Pool grid not found in ${tabId}`);
              poolList.innerHTML = '<div class="pool-grid"><p>Error: Pool grid not initialized.</p></div>';
              return;
          }
          poolGrid.innerHTML = '';
          console.log(`Initializing pool grid for ${tabId}`);
          await filterPools(tabId);
      }

      // Panggil updatePoolBalance untuk tab yang render pool
      if (['defaultPool', 'newPool', 'myCreatedPools', 'myStakes'].includes(tabId)) {
          await updatePoolBalance();
      }
  } catch (error) {
      console.error(`Failed to load ${tabId}: ${error.message}`);
  }
}

//showOwnerTab
async function showOwnerTab(tabId) {
  try {
      console.log(`Attempting to show owner tab: ${tabId}`);
      if (tabId !== 'ownerControl') {
          console.log("Invalid owner tab ID");
          document.getElementById('status').innerText = "Invalid tab.";
          return;
      }
      if (!accounts || !isOwner) {
          console.log("Not owner or not connected, cannot access Owner Control");
          document.getElementById('status').innerText = "Owner access required.";
          return;
      }

      document.querySelectorAll('.tab').forEach(tab => {
          tab.style.display = 'none';
      });

      const isCreator = await checkCreatorStatus();
      console.log(`Global creator status: ${isCreator}`);

      document.querySelectorAll('.tab-buttons button').forEach(btn => {
          btn.classList.remove('active');
          const btnId = btn.id;
          if (btnId === 'creatorToolTab' && accounts && isCreator) {
              btn.style.display = 'inline-block';
              console.log(`Showing button: ${btnId}`);
          } else if (btnId === 'ownerControlTab' && isOwner) {
              btn.style.display = 'inline-block';
              console.log(`Showing button: ${btnId}`);
          } else if (['defaultPoolTab', 'newPoolTab', 'createPoolTab', 'myCreatedPoolsTab', 'myStakesTab'].includes(btnId)) {
              btn.style.display = 'inline-block';
              console.log(`Showing button: ${btnId}`);
          } else {
              btn.style.display = 'none';
              console.log(`Hiding button: ${btnId}`);
          }
      });

      const tabElement = document.getElementById(tabId);
      const tabButton = document.getElementById(tabId + 'Tab');
      if (!tabElement || !tabButton) {
          console.error(`Tab element or button not found for ${tabId}`);
          document.getElementById('status').innerText = "Tab not found.";
          return;
      }
      tabElement.style.display = 'block';
      tabButton.classList.add('active');
      tabButton.style.display = 'inline-block';
      console.log(`Activated tab: ${tabId}, button: ${tabId + 'Tab'}`);

      console.log("Rendering owner control tab...");
      await renderOwnerControl();
  } catch (error) {
      console.error(`Failed to load owner tab ${tabId}:`, error.message);
      document.getElementById('status').innerText = "Failed to load tab.";
  }
}

//showCreatorTab
async function showCreatorTab(tabId) {
  try {
      console.log(`Attempting to show creator tab: ${tabId}`);
      if (tabId !== 'creatorTool') {
          console.log("Invalid creator tab ID");
          document.getElementById('status').innerText = "Invalid tab.";
          return;
      }
      if (!accounts) {
          console.log("No account connected, cannot access Creator Tool");
          document.getElementById('status').innerText = "Please connect wallet.";
          return;
      }

      const isCreator = await checkCreatorStatus();
      console.log(`Creator status for tab: ${isCreator}`);
      if (!isCreator) {
          console.log("Not a creator, hiding Creator Tool tab");
          document.getElementById('status').innerText = "You need to create a pool to access Creator Tools.";
          return;
      }

      document.querySelectorAll('.tab').forEach(tab => tab.style.display = 'none');
      document.querySelectorAll('.tab-buttons button').forEach(btn => {
          btn.classList.remove('active');
          btn.disabled = menusDisabled ? true : false;
          const tabName = btn.id.replace('Tab', '');
          btn.style.display = (tabName === 'creatorTool' && !isCreator) || hiddenMenus[tabName] || areMenusHidden ? 'none' : 'inline-block';
          btn.style.pointerEvents = 'auto';
          btn.style.opacity = '1';
          btn.classList.remove('disabled');
          btn.removeAttribute('disabled');
          console.log(`Showing button: ${btn.id}`);
      });

      const tabElement = document.getElementById(tabId);
      const tabButton = document.getElementById(tabId + 'Tab');
      if (!tabElement || !tabButton) {
          console.error(`Tab element or button not found for ${tabId}`);
          document.getElementById('status').innerText = "Tab not found.";
          return;
      }
      tabElement.style.display = 'block';
      tabButton.style.display = 'inline-block';
      tabButton.classList.add('active');
      console.log(`Activated tab: ${tabId}, button: ${tabId + 'Tab'}`);
      currentTab = tabId;

      // Bersihin event listener lama
      const newTabButton = tabButton.cloneNode(true);
      tabButton.parentNode.replaceChild(newTabButton, tabButton);
      newTabButton.onclick = () => showCreatorTab(tabId);

      await renderCreatorTool(true);
  } catch (error) {
      console.error(`Failed to load creator tab ${tabId}:`, error.message);
      document.getElementById('status').innerText = "Failed to load tab.";
  }
}

//displayPool
async function displayPool(poolId, poolGrid) {
  try {
      const poolInfo = await contract.methods.getPoolInfo(poolId).call();
      let stakeInfo = { amount: '0', rewards: ['0'], timestamp: '0' };
      let hasStake = false;

      if (accounts && accounts[0]) {
          try {
              stakeInfo = await contract.methods.getStakeInfo(poolId, accounts[0]).call();
              console.log(`StakeInfo for Pool ${poolId}, account ${accounts[0]}: amount=${stakeInfo.amount}, rewards=${stakeInfo.rewards[0]}, timestamp=${stakeInfo.timestamp}`);
              hasStake = web3.utils.toBN(stakeInfo.amount || '0').gt(web3.utils.toBN('0'));
          } catch (error) {
              console.error(`Failed to fetch stake info for pool ${poolId}, account ${accounts[0]}: ${error.message}`);
          }
      } else {
          console.warn(`No connected account for Pool ${poolId}, skipping stake info`);
      }

      const poolBalance = poolInfo.totalStaked;
      const totalStakers = poolInfo.stakerCount;
      const rewardToken = poolInfo.rewardTokens[0] || '0x0000000000000000000000000000000000000000';
      const stakeToken = poolInfo.stakeToken || '0x0000000000000000000000000000000000000000';

      const stakeDecimals = stakeToken === '0x0000000000000000000000000000000000000000' ? 18 : await getTokenDecimals(stakeToken);
      const rewardDecimals = rewardToken === '0x0000000000000000000000000000000000000000' ? 18 : await getTokenDecimals(rewardToken);
      const stakeUnit = stakeDecimals === 18 ? 'ether' : stakeDecimals === 6 ? 'mwei' : 'wei';
      const rewardUnit = rewardDecimals === 18 ? 'ether' : rewardDecimals === 6 ? 'mwei' : 'wei';

      console.log(`Pool ${poolId}: stakeToken=${stakeToken}, stakeDecimals=${stakeDecimals}, rewardToken=${rewardToken}, rewardDecimals=${rewardDecimals}, lockPeriod=${poolInfo.lockPeriod} seconds, apr=${poolInfo.apr}, totalStaked=${poolBalance}`);

      const poolBalanceFormatted = formatNumber(web3.utils.fromWei(poolBalance || '0', stakeUnit), 4);
      const stakeTokenName = stakeToken === '0x0000000000000000000000000000000000000000' ? 'CHIPS' : await getTokenName(stakeToken);
      const rewardTokenName = rewardToken === '0x0000000000000000000000000000000000000000' ? 'CHIPS' : await getTokenName(rewardToken);

      const allocatedReward = await getAllocatedRewardsFromEvents(poolId, rewardToken);
      console.log(`Pool ${poolId}: raw allocatedReward=${allocatedReward.toString()}`);
      const rewardAmount = Number(web3.utils.fromWei(allocatedReward || '0', rewardUnit));
      const rewardAmountFormatted = formatNumber(rewardAmount >= 0 ? rewardAmount : 0, 4);

      const userReward = Number(web3.utils.fromWei(stakeInfo.rewards[0] || '0', rewardUnit));
      const userRewardFormatted = formatNumber(userReward >= 0 ? userReward : 0, 4);

      const userStake = Number(web3.utils.fromWei(stakeInfo.amount || '0', stakeUnit));
      const userStakeFormatted = formatNumber(userStake >= 0 ? userStake : 0, 4);

      const aprFormatted = formatNumber(poolInfo.apr, 2);

      console.log(`Displaying pool ${poolId}: apr=${poolInfo.apr}, formattedAPR=${aprFormatted}%, active=${poolInfo.active}, balance=${poolBalanceFormatted}, rewardToken=${rewardAmountFormatted} ${rewardTokenName}, userStake=${userStakeFormatted}, userReward=${userRewardFormatted}`);

      const isCreator = accounts && accounts[0] && poolInfo.creator.toLowerCase() === accounts[0].toLowerCase();
      const isOwner = accounts && accounts[0] && await contract.methods.hasRole(web3.utils.keccak256("ADMIN_ROLE"), accounts[0]).call();

      const card = document.createElement('div');
      card.className = 'pool-card';
      card.style.marginBottom = '20px';
      card.innerHTML = `
          <h3>Pool ID: ${poolId}</h3>
          <p>Stake Token: ${stakeTokenName}</p>
          <p>Reward Token: ${rewardAmountFormatted} ${rewardTokenName}</p>
          <p>APR: ${aprFormatted}%</p>
          <p>Pool Balance: ${poolBalanceFormatted} ${stakeTokenName}</p>
          <p>Total Stakers: ${totalStakers}</p>
          <p>Lock Period: ${formatNumber(poolInfo.lockPeriod / (24 * 3600), 2)} days</p>
          <p>Active: ${poolInfo.active ? 'Yes' : 'No'}</p>
          ${accounts && accounts[0] ? `
              <p>Your Stake: ${userStakeFormatted} ${stakeTokenName}</p>
              <p id="rewardMeter${poolId}">Your Reward: ${userRewardFormatted} ${rewardTokenName}</p>
              <div style="margin-bottom: 10px;">
                  <input type="number" id="stakeAmount${poolId}" value="0.1" placeholder="0.1" step="0.01" min="0">
                  <button onclick="stake(${poolId})">Stake</button>
              </div>
              <div style="margin-bottom: 10px;">
                  <input type="number" id="unstakeAmount${poolId}" placeholder="0.0" step="0.01" min="0">
                  <button onclick="unstake(${poolId})">Unstake</button>
              </div>
              <button onclick="claimRewards(${poolId})">Claim Rewards</button>
          ` : '<p>Connect wallet to stake</p>'}
          ${isOwner ? `
              <div style="margin-top: 10px; display: flex; flex-wrap: wrap; gap: 10px;">
                  <button onclick="pinPool(${poolId})">Pin Pool</button>
                  <button onclick="unpinPool(${poolId})">Unpin Pool</button>
                  <button onclick="emergencyWithdraw(${poolId})">Emergency Withdraw</button>
              </div>
          ` : ''}
      `;
      poolGrid.appendChild(card);

      if (accounts && accounts[0] && hasStake) {
          const rewardMeterElement = document.getElementById(`rewardMeter${poolId}`);
          if (rewardMeterElement) {
              await updateRewardMeter(poolId, rewardMeterElement);
          }
      }
      console.log(`Successfully displayed pool ${poolId} in pool-grid, active: ${poolInfo.active}, hasStake: ${hasStake}, isCreator: ${isCreator}`);
  } catch (error) {
      console.error(`Failed to display pool ${poolId}: ${error.message}`);
  }
}

// filter pools
async function filterPools(tabId) {
  const poolList = document.getElementById(tabId === 'defaultPool' ? 'defaultPoolCard' : tabId === 'newPool' ? 'newPoolCard' : tabId === 'myCreatedPools' ? 'poolList' : tabId === 'myStakes' ? 'myStakesCard' : 'creatorToolCard');
  if (!poolList) {
      console.error(`Cannot filter pools: missing poolList for tab ${tabId}`);
      return;
  }
  if (!contract || !accounts || !accounts[0]) {
      console.error(`Cannot filter pools: missing contract or accounts for tab ${tabId}`);
      poolList.innerHTML = '<div class="pool-grid"><p>Connect wallet or try again.</p></div>';
      return;
  }

  if (tabId === 'creatorTool') {
      console.log("Skipping filterPools for creatorTool, calling renderCreatorTool...");
      await renderCreatorTool();
      return;
  }

  poolList.innerHTML = '<div class="pool-grid"><p>Loading...</p></div>';
  const poolGrid = document.createElement('div');
  poolGrid.className = 'pool-grid';
  poolList.innerHTML = '';
  poolList.appendChild(poolGrid);
  console.log(`Loading content for tab: ${tabId}`);
  let totalPools = 0;

  try {
      const poolCount = await contract.methods.poolCount().call();
      console.log(`Total pools: ${poolCount}`);
      console.log(`Pinned pools: ${pinnedPools}`);
      const connectedAccount = accounts[0];
      console.log(`Filtering pools for account: ${connectedAccount}`);

      for (let i = 0; i < poolCount; i++) {
          try {
              const poolInfo = await contract.methods.getPoolInfo(i).call();
              console.log(`Pool ${i} raw info: active=${poolInfo.active}, stakeToken=${poolInfo.stakeToken}, totalStaked=${poolInfo.totalStaked}, decimals=${poolInfo.stakeDecimals}`);

              if (!poolInfo.active && tabId !== 'myCreatedPools' && !pinnedPools.includes(i)) {
                  console.log(`Skipping inactive pool ${i}`);
                  continue;
              }

              let stakeInfo = { amount: '0', rewards: [], timestamp: '0' };
              try {
                  stakeInfo = await contract.methods.getStakeInfo(i, connectedAccount).call();
                  const decimals = Number(poolInfo.stakeDecimals) || 18;
                  console.log(`StakeInfo for pool ${i}: amount=${stakeInfo.amount}, decimals=${decimals}, formatted=${web3.utils.fromWei(stakeInfo.amount || '0', decimals === 18 ? 'ether' : 'wei')}`);
              } catch (stakeError) {
                  console.error(`Failed to fetch stake info for pool ${i}: ${stakeError.message}`);
                  stakeInfo = { amount: '0', rewards: [], timestamp: '0' };
              }

              console.log(`Processing pool ${i}: active=${poolInfo.active}, userStake=${stakeInfo.amount}`);

              let shouldDisplay = false;
              if (tabId === 'defaultPool' && pinnedPools.includes(i)) {
                  shouldDisplay = true;
              } else if (tabId === 'newPool' && poolInfo.active) {
                  shouldDisplay = true;
              } else if (tabId === 'myCreatedPools' && poolInfo.creator.toLowerCase() === connectedAccount.toLowerCase()) {
                  shouldDisplay = true;
              } else if (tabId === 'myStakes') {
                  const hasStake = web3.utils.toBN(stakeInfo.amount || '0').gt(web3.utils.toBN('0'));
                  shouldDisplay = hasStake;
                  console.log(`Pool ${i} myStakes check: hasStake=${hasStake}, stake amount=${stakeInfo.amount}`);
              }

              if (shouldDisplay) {
                  totalPools++;
                  await displayPool(i, poolGrid);
                  const rewardMeterElement = document.getElementById(`rewardMeter${i}`);
                  if (rewardMeterElement) {
                      await updateRewardMeter(i, rewardMeterElement);
                  }
                  console.log(`Displayed pool ${i} in ${tabId}`);
                  console.log(`poolGrid content after pool ${i}: ${poolGrid.innerHTML.substring(0, 100)}...`);
              } else {
                  console.log(`Pool ${i} not displayed in ${tabId}: shouldDisplay=${shouldDisplay}`);
              }
          } catch (error) {
              console.error(`Failed to process pool ${i}: ${error.message}`);
          }
      }

      if (totalPools === 0) {
          poolGrid.innerHTML = '<p>No pools found.</p>';
          console.log(`No pools displayed in ${tabId}`);
      } else {
          console.log(`Total ${totalPools} pools displayed in ${tabId}`);
      }

      await updatePoolBalance();
  } catch (error) {
      console.error(`Failed to filter pools for ${tabId}: ${error.message}`);
      poolGrid.innerHTML = '<p>Error loading pools.</p>';
      await updatePoolBalance();
  }
}

//__________________________________________Tools Creator___________________________

//renderCreatorTool
async function renderCreatorTool(initialLoad = true) {
  try {
      console.log("Rendering Creator Tool tab...");
      const creatorToolDiv = document.getElementById('creatorTool');
      if (!creatorToolDiv) {
          console.error("Creator Tool div not found");
          document.getElementById('status').innerText = "Tab not found.";
          return;
      }

      let creatorToolContent = document.getElementById('creatorToolContent');
      if (!creatorToolContent) {
          console.warn("Creator Tool content div not found, creating fallback");
          creatorToolContent = document.createElement('div');
          creatorToolContent.id = 'creatorToolContent';
          creatorToolDiv.appendChild(creatorToolContent);
      }
      if (initialLoad) {
          creatorToolContent.innerHTML = ''; // Bersihin cuma di load awal
          displayedPools = [];
          remainingPools = [];
      }

      if (!accounts || !accounts[0]) {
          console.log("No account connected");
          creatorToolContent.innerHTML = '<p>Please connect wallet.</p>';
          document.getElementById('status').innerText = "Please connect wallet.";
          return;
      }

      const isCreator = await checkCreatorStatus();
      console.log(`Creator status: ${isCreator}`);
      if (!isCreator) {
          console.log("Not a creator, cannot render Creator Tool");
          creatorToolContent.innerHTML = '<p>You need to create a pool to access Creator Tools.</p>';
          document.getElementById('status').innerText = "You need to create a pool to access Creator Tools.";
          return;
      }

      console.log("Fetching creator pool IDs...");
      let poolIds = [];
      const poolCount = await contract.methods.poolCount().call();
      console.log(`Total pools in contract: ${poolCount}`);
      for (let i = 0; i < poolCount; i++) {
          try {
              const poolInfo = await contract.methods.getPoolInfo(i).call();
              if (poolInfo.creator.toLowerCase() === accounts[0].toLowerCase()) {
                  poolIds.push(i);
                  console.log(`Found creator pool ID ${i}`);
              }
          } catch (error) {
              console.warn(`Failed to fetch pool info for pool ${i}:`, error.message);
          }
      }
      console.log(`Creator pool IDs: ${poolIds}`);

      if (poolIds.length === 0) {
          console.log("No pools created by this account");
          creatorToolContent.innerHTML = '<p>No pools created yet.</p>';
          return;
      }

      // Filter pool yang belum ditampilkan
      if (initialLoad) {
          remainingPools = poolIds.filter(id => !displayedPools.includes(id));
      }
      const poolsToDisplay = remainingPools.slice(0, 4); // Ambil max 4
      remainingPools = remainingPools.slice(4); // Sisanya simpan
      displayedPools = displayedPools.concat(poolsToDisplay);

      for (const poolId of poolsToDisplay) {
          console.log(`Fetching pool info for pool ID ${poolId}...`);
          const poolInfo = await contract.methods.getPoolInfo(poolId).call();
          console.log(`Pool ${poolId} info:`, poolInfo);

          // Resolve token ticker
          let tokenTicker = "Unknown";
          if (poolInfo.stakeToken === "0x0000000000000000000000000000000000000000") {
              tokenTicker = "CHIPS";
              console.log(`Native token detected for pool ${poolId}: CHIPS`);
          } else {
              try {
                  const tokenContract = new web3.eth.Contract([
                      { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "type": "function" }
                  ], poolInfo.stakeToken);
                  tokenTicker = await tokenContract.methods.symbol().call();
                  console.log(`Token ticker for pool ${poolId}: ${tokenTicker}`);
              } catch (error) {
                  console.warn(`Failed to fetch token ticker for pool ${poolId}:`, error.message);
              }
          }

          const card = document.createElement('div');
          card.className = 'card';
          const cardContent = `
              <h3>Pool ID: ${poolId}</h3>
              <p><strong>Token:</strong> ${tokenTicker}</p>
              <p><strong>APR:</strong> ${poolInfo.apr}%</p>
              <p><strong>Lock Period:</strong> ${poolInfo.lockPeriod} days</p>
              <p><strong>Max Reward Per User:</strong> ${web3.utils.fromWei(poolInfo.maxRewardPerUser, 'ether')} tokens</p>
              <p><strong>Active:</strong> ${poolInfo.active}</p>
              <div>
                  <h4>Manage Pool</h4>
                  <button id="withdrawReward_${poolId}">Withdraw Remaining Reward</button>
                  <button id="deactivate_${poolId}" ${poolInfo.active ? '' : 'disabled'}>Deactivate Pool</button>
                  <button id="activate_${poolId}" ${poolInfo.active ? 'disabled' : ''}>Activate Pool</button>
                  <div style="margin-top: 10px;">
                      <label>Update APR (%):</label>
                      <input type="number" id="newApr_${poolId}" placeholder="New APR" min="360" max="10000" step="1">
                      <button id="updateApr_${poolId}">Update APR</button>
                  </div>
                  <div style="margin-top: 10px;">
                      <label>Update Lock Period (days):</label>
                      <input type="number" id="newLockPeriod_${poolId}" placeholder="New Lock Period" min="0">
                      <button id="updateLockPeriod_${poolId}">Update Lock Period</button>
                  </div>
                  <div style="margin-top: 10px;">
                      <label>Update Max Reward Per User (tokens):</label>
                      <input type="number" id="newMaxReward_${poolId}" placeholder="New Max Reward" min="0" step="0.000000000000000001">
                      <button id="updateMaxReward_${poolId}">Update Max Reward</button>
                  </div>
              </div>
          `;
          card.innerHTML = cardContent;
          creatorToolContent.appendChild(card);

          document.getElementById(`withdrawReward_${poolId}`).onclick = async () => {
              try {
                  console.log(`Withdrawing reward from pool ${poolId}`);
                  document.getElementById('status').innerText = "Waiting approve...";
                  await contract.methods.withdrawFromPool(poolId).send({ from: accounts[0] });
                  document.getElementById('status').innerText = "Reward withdrawn successfully!";
                  await renderCreatorTool(true); // Reset load
              } catch (error) {
                  console.error(`Failed to withdraw reward from pool ${poolId}:`, error.message);
                  document.getElementById('status').innerText = "Failed to withdraw reward.";
              }
          };

          document.getElementById(`deactivate_${poolId}`).onclick = async () => {
              try {
                  console.log(`Deactivating pool ${poolId}`);
                  document.getElementById('status').innerText = "Waiting approve...";
                  await contract.methods.deactivatePool(poolId).send({ from: accounts[0] });
                  document.getElementById('status').innerText = "Pool deactivated successfully!";
                  await renderCreatorTool(true);
              } catch (error) {
                  console.error(`Failed to deactivate pool ${poolId}:`, error.message);
                  document.getElementById('status').innerText = "Failed to deactivate pool.";
              }
          };

          document.getElementById(`activate_${poolId}`).onclick = async () => {
              try {
                  console.log(`Activating pool ${poolId}`);
                  document.getElementById('status').innerText = "Waiting approve...";
                  await contract.methods.activatePool(poolId).send({ from: accounts[0] });
                  document.getElementById('status').innerText = "Pool activated successfully!";
                  await renderCreatorTool(true);
              } catch (error) {
                  console.error(`Failed to activate pool ${poolId}:`, error.message);
                  document.getElementById('status').innerText = "Failed to activate pool.";
              }
          };

          document.getElementById(`updateApr_${poolId}`).onclick = async () => {
              try {
                  const newApr = document.getElementById(`newApr_${poolId}`).value;
                  if (!newApr || newApr < 360 || newApr > 10000) {
                      document.getElementById('status').innerText = "Please enter a valid APR (360-10000).";
                      return;
                  }
                  console.log(`Updating APR for pool ${poolId} to ${newApr}`);
                  document.getElementById('status').innerText = "Waiting approve...";
                  await contract.methods.updateApr(poolId, newApr).send({ from: accounts[0] });
                  document.getElementById('status').innerText = "APR updated successfully!";
                  await renderCreatorTool(true);
              } catch (error) {
                  console.error(`Failed to update APR for pool ${poolId}:`, error.message);
                  document.getElementById('status').innerText = "Failed to update APR.";
              }
          };

          document.getElementById(`updateLockPeriod_${poolId}`).onclick = async () => {
              try {
                  const newLockPeriod = document.getElementById(`newLockPeriod_${poolId}`).value;
                  if (!newLockPeriod || newLockPeriod < 0) {
                      document.getElementById('status').innerText = "Please enter a valid lock period.";
                      return;
                  }
                  console.log(`Updating lock period for pool ${poolId} to ${newLockPeriod}`);
                  document.getElementById('status').innerText = "Waiting approve...";
                  await contract.methods.updateLockPeriod(poolId, newLockPeriod).send({ from: accounts[0] });
                  document.getElementById('status').innerText = "Lock period updated successfully!";
                  await renderCreatorTool(true);
              } catch (error) {
                  console.error(`Failed to update lock period for pool ${poolId}:`, error.message);
                  document.getElementById('status').innerText = "Failed to update lock period.";
              }
          };

          document.getElementById(`updateMaxReward_${poolId}`).onclick = async () => {
              try {
                  const newMaxReward = document.getElementById(`newMaxReward_${poolId}`).value;
                  if (!newMaxReward || newMaxReward <= 0) {
                      document.getElementById('status').innerText = "Please enter a valid max reward.";
                      return;
                  }
                  const newMaxRewardWei = web3.utils.toWei(newMaxReward, 'ether');
                  console.log(`Updating max reward for pool ${poolId} to ${newMaxReward}`);
                  document.getElementById('status').innerText = "Waiting approve...";
                  await contract.methods.updatePoolParameters(poolId, poolInfo.lockPeriod, newMaxRewardWei).send({ from: accounts[0] });
                  document.getElementById('status').innerText = "Max reward updated successfully!";
                  await renderCreatorTool(true);
              } catch (error) {
                  console.error(`Failed to update max reward for pool ${poolId}:`, error.message);
                  document.getElementById('status').innerText = "Failed to update max reward.";
              }
          };
      }

      // Tambah tombol Load More kalau ada sisa pool
      if (remainingPools.length > 0) {
          const loadMoreBtn = document.createElement('button');
          loadMoreBtn.id = 'loadMorePools';
          loadMoreBtn.innerText = 'Load More';
          loadMoreBtn.onclick = () => renderCreatorTool(false); // Load tambahan
          creatorToolContent.appendChild(loadMoreBtn);
      }

      console.log("Creator Tool tab rendered successfully");
  } catch (error) {
      console.error("Failed to render Creator Tool:", error.message);
      document.getElementById('status').innerText = "Failed to load Creator Tools.";
  }
}

//renderMyPools
async function renderMyPools() {
  if (!contract || !accounts) {
      console.log("Contract or accounts not initialized");
      document.getElementById('status').innerText = "Please connect wallet.";
      return;
  }
  try {
      const myPoolsContainer = document.getElementById('myPools');
      myPoolsContainer.innerHTML = ''; // Clear existing content
      // Asumsi: Kita ambil daftar pool yang diikuti pengguna
      const userPools = await contract.methods.getUserPools(accounts[0]).call();
      for (const poolId of userPools) {
          const poolInfo = await contract.methods.getPoolInfo(poolId).call();
          const isCreator = poolInfo.creator.toLowerCase() === accounts[0].toLowerCase();
          const card = document.createElement('div');
          card.className = 'pool-card';
          card.innerHTML = `
              <h3>Pool ID: ${poolId}</h3>
              <!-- Other pool info, e.g., stake amount, reward -->
              ${isCreator ? `
                  <div style="margin-top: 10px; display: flex; gap: 10px; align-items: center;">
                      <label for="creatorMaxReward${poolId}">New Max Reward Per User:</label>
                      <input type="number" id="creatorMaxReward${poolId}" placeholder="Max Reward" step="0.01" min="0.01" style="padding: 5px; width: 120px;">
                      <button onclick="creatorEditMaxRewardPerUser(${poolId})" style="padding: 5px 10px;">Update Max Reward</button>
                  </div>
              ` : ''}
          `;
          myPoolsContainer.appendChild(card);
      }
  } catch (error) {
      console.error("Failed to render My Pools:", error);
      document.getElementById('status').innerText = "Failed to load pools.";
  }
}

//CreatorStatus
async function checkCreatorStatus() {
  try {
      if (!accounts || !accounts[0]) {
          console.log("No account connected for creator status check");
          return false;
      }
      const account = accounts[0].toLowerCase();
      console.log(`Checking creator status for account: ${account}`);
      const poolCount = await contract.methods.poolCount().call();
      console.log(`Total pool count: ${poolCount}`);
      if (poolCount == 0) return false;

      // Skip getCreatorPoolIds karena error di batch 0-1
      console.log("Skipping getCreatorPoolIds due to known contract error, using getPoolInfo fallback");

      // Cek getPoolInfo untuk creator
      console.log("Checking pools via getPoolInfo...");
      for (let i = 0; i < poolCount; i++) {
          try {
              const poolInfo = await contract.methods.getPoolInfo(i).call();
              console.log(`Pool ${i} creator: ${poolInfo.creator}`);
              if (poolInfo.creator.toLowerCase() === account) {
                  console.log(`Creator status confirmed for account ${account} with pool ID ${i}`);
                  return true;
              }
          } catch (error) {
              console.warn(`Failed to fetch pool info for pool ${i}:`, error.message);
          }
      }

      console.log(`No valid pool IDs found for account ${account}`);
      return false;
  } catch (error) {
      console.error("Failed to check creator status:", error.message);
      return false;
  }
}

//Creator Function init
async function init() {
  if (typeof window.ethereum === 'undefined') {
      console.log("MetaMask not detected");
      document.getElementById('status').innerText = "Please install MetaMask.";
      return;
  }

  try {
      console.log("Starting initialization...");
      web3 = new Web3(window.ethereum);
      console.log("Web3 initialized");

      await window.ethereum.request({ method: 'eth_requestAccounts' });
      accounts = await web3.eth.getAccounts();
      console.log(`Connected account: ${accounts[0]}`);

      const chainId = await web3.eth.getChainId();
      console.log(`Connected to chain ID: ${chainId}`);
      if (chainId !== CHAIN_ID) {
          console.error(`Wrong network! Expected chain ID ${CHAIN_ID}, got ${chainId}`);
          document.getElementById('status').innerText = `Please switch to network ${CHAIN_ID}.`;
          return;
      }

      if (!contractABI || !contractAddress) {
          console.error("Contract ABI or address not defined");
          document.getElementById('status').innerText = "Contract configuration error.";
          return;
      }
      contract = new web3.eth.Contract(contractABI, contractAddress);
      console.log(`Contract initialized at address: ${contractAddress}`);

      const poolCount = await contract.methods.poolCount().call();
      console.log(`Contract poolCount: ${poolCount}`);

      isOwner = await contract.methods.hasRole(web3.utils.keccak256("ADMIN_ROLE"), accounts[0]).call();
      console.log(`Owner role check: ${isOwner}`);

      console.log("Checking creator status in init...");
      const isCreator = await checkCreatorStatus();
      console.log(`Creator status: ${isCreator}`);

      // Inisialisasi variabel global
      displayedPools = [];
      remainingPools = [];

      // Aktifkan tombol tab sesuai peran
      const tabs = [
          { id: 'defaultPoolTab', tabName: 'defaultPool' },
          { id: 'newPoolTab', tabName: 'newPool' },
          { id: 'createPoolTab', tabName: 'createPool' },
          { id: 'myCreatedPoolsTab', tabName: 'myCreatedPools' },
          { id: 'myStakesTab', tabName: 'myStakes' },
          { id: 'creatorToolTab', tabName: 'creatorTool', requireCreator: true },
          { id: 'ownerControlTab', tabName: 'ownerControl', requireOwner: true }
      ];
      for (const tab of tabs) {
          const tabBtn = document.getElementById(tab.id);
          if (tabBtn) {
              tabBtn.disabled = menusDisabled ? true : false;
              const shouldHide = hiddenMenus[tab.tabName] || areMenusHidden || 
                  (tab.requireCreator && !isCreator) || 
                  (tab.requireOwner && !isOwner);
              tabBtn.style.display = shouldHide ? 'none' : 'inline-block';
              tabBtn.style.pointerEvents = 'auto';
              tabBtn.style.opacity = '1';
              tabBtn.classList.remove('disabled');
              tabBtn.removeAttribute('disabled');
              tabBtn.onclick = () => {
                  console.log(`${tab.id} clicked`);
                  if (tab.id === 'creatorToolTab') {
                      showCreatorTab(tab.tabName);
                  } else {
                      showTab(tab.tabName);
                  }
              };
              console.log(`Enabled tab: ${tab.id}, display: ${tabBtn.style.display}`);
          } else {
              console.warn(`Tab element not found: ${tab.id}`);
          }
      }

      console.log("Initialized hiddenMenus:", hiddenMenus);
      console.log("Initialized visiblePools:", visiblePools);
      console.log("Initialized pinnedPools:", pinnedPools);
      console.log("Calling showTab for defaultPool...");
      await showTab('defaultPool');
      console.log("Initialization completed");

      window.ethereum.on('accountsChanged', async (newAccounts) => {
          console.log(`Account changed to: ${newAccounts[0]}`);
          accounts = newAccounts;
          if (accounts.length > 0) {
              isOwner = await contract.methods.hasRole(web3.utils.keccak256("ADMIN_ROLE"), accounts[0]).call();
              console.log(`Updated isOwner: ${isOwner}`);
              const isCreator = await checkCreatorStatus();
              console.log(`Updated isCreator: ${isCreator}`);
              displayedPools = [];
              remainingPools = [];
              for (const tab of tabs) {
                  const tabBtn = document.getElementById(tab.id);
                  if (tabBtn) {
                      tabBtn.disabled = menusDisabled ? true : false;
                      const shouldHide = hiddenMenus[tab.tabName] || areMenusHidden || 
                          (tab.requireCreator && !isCreator) || 
                          (tab.requireOwner && !isOwner);
                      tabBtn.style.display = shouldHide ? 'none' : 'inline-block';
                      tabBtn.style.pointerEvents = 'auto';
                      tabBtn.style.opacity = '1';
                      tabBtn.classList.remove('disabled');
                      console.log(`Re-enabled ${tab.id}`);
                  }
              }
              await showTab('defaultPool');
          }
      });
  } catch (error) {
      console.error("Initialization failed:", error.message);
      document.getElementById('status').innerText = "Failed to connect wallet.";
  }
}

// Creator-specific: Activate pool
async function creatorActivatePool(poolId) {
  if (!contract || !accounts) {
      console.log("Contract or accounts not initialized");
      document.getElementById('status').innerText = "Contract or accounts not initialized.";
      return;
  }
  try {
      const parsedPoolId = Number(poolId);
      if (isNaN(parsedPoolId) || parsedPoolId < 0) {
          document.getElementById('status').innerText = "Invalid pool ID.";
          return;
      }
      const poolInfo = await contract.methods.getPoolInfo(parsedPoolId).call();
      if (poolInfo.creator.toLowerCase() !== accounts[0].toLowerCase()) {
          document.getElementById('status').innerText = "Only pool creator can activate.";
          return;
      }
      const nonce = await web3.eth.getTransactionCount(accounts[0], 'pending');
      await contract.methods.activatePool(parsedPoolId).send({ 
          from: accounts[0], 
          gas: 200000, 
          nonce: nonce 
      });
      trackInteraction('CreatorActivate', parsedPoolId);
      document.getElementById('status').innerText = `Pool ${poolId} activated successfully!`;
      if (!visiblePools.includes(parsedPoolId)) visiblePools.push(parsedPoolId);
      await showTab('myCreatedPools');
  } catch (error) {
      console.error("Failed to activate pool:", error);
      document.getElementById('status').innerText = "Failed to activate pool. Check inputs.";
  }
}

// Creator-specific: Deactivate pool
async function creatorDeactivatePool(poolId) {
  if (!contract || !accounts) {
      console.log("Contract or accounts not initialized");
      document.getElementById('status').innerText = "Contract or accounts not initialized.";
      return;
  }
  try {
      const parsedPoolId = Number(poolId);
      if (isNaN(parsedPoolId) || parsedPoolId < 0) {
          console.log("Invalid pool ID");
          document.getElementById('status').innerText = "Invalid pool ID.";
          return;
      }
      const poolInfo = await contract.methods.getPoolInfo(parsedPoolId).call();
      if (poolInfo.creator.toLowerCase() !== accounts[0].toLowerCase()) {
          console.log("Only pool creator can deactivate pool");
          document.getElementById('status').innerText = "Only pool creator can deactivate pool.";
          return;
      }
      const nonce = await web3.eth.getTransactionCount(accounts[0], 'pending');
      await contract.methods.deactivatePool(parsedPoolId).send({
          from: accounts[0],
          gas: 200000,
          nonce: nonce
      });
      trackInteraction('CreatorDeactivatePool', parsedPoolId);
      document.getElementById('status').innerText = `Pool ${poolId} deactivated successfully!`;
      console.log(`Creator deactivated pool ${poolId}`);
      await renderCreatorTool();
  } catch (error) {
      console.error("Failed to deactivate pool:", error);
      document.getElementById('status').innerText = "Failed to deactivate pool.";
  }
}

// Emergency withdraw (User/Creator)
async function emergencyWithdraw(poolId) {
  if (!contract || !accounts) {
      console.log("Contract or accounts not initialized");
      document.getElementById('status').innerText = "Contract or accounts not initialized.";
      return;
  }
  try {
      const parsedPoolId = Number(poolId);
      if (isNaN(parsedPoolId) || parsedPoolId < 0) {
          console.log("Invalid pool ID");
          document.getElementById('status').innerText = "Invalid pool ID.";
          return;
      }
      const stakeInfo = await contract.methods.getStakeInfo(parsedPoolId, accounts[0]).call();
      if (web3.utils.toBN(stakeInfo.amount || '0').lte(web3.utils.toBN('0'))) {
          console.log("No stake to withdraw");
          document.getElementById('status').innerText = "No stake to withdraw.";
          return;
      }
      const nonce = await web3.eth.getTransactionCount(accounts[0], 'pending');
      await contract.methods.emergencyWithdraw(parsedPoolId).send({
          from: accounts[0],
          gas: 200000,
          nonce: nonce
      });
      trackInteraction('EmergencyWithdraw', parsedPoolId);
      document.getElementById('status').innerText = `Emergency withdrawal successful for pool ${poolId}!`;
      console.log(`Emergency withdrawal from pool ${poolId}`);
      await renderCreatorTool();
  } catch (error) {
      console.error("Failed to emergency withdraw:", error);
      document.getElementById('status').innerText = "Failed to emergency withdraw. Check inputs.";
  }
}

// Update pool parameters (Creator only)
async function updatePoolParameters(poolId) {
  if (!contract || !accounts) {
      console.log("Contract or accounts not initialized");
      document.getElementById('status').innerText = "Contract or accounts not initialized.";
      return;
  }
  try {
      const parsedPoolId = Number(poolId);
      if (isNaN(parsedPoolId) || parsedPoolId < 0) {
          document.getElementById('status').innerText = "Invalid pool ID.";
          return;
      }
      const poolInfo = await contract.methods.getPoolInfo(parsedPoolId).call();
      if (poolInfo.creator.toLowerCase() !== accounts[0].toLowerCase()) {
          document.getElementById('status').innerText = "Only pool creator can update parameters.";
          return;
      }
      const newApr = Number(document.getElementById(`creatorApr${poolId}`).value);
      const newLockPeriod = Number(document.getElementById(`creatorLockPeriod${poolId}`).value);
      if (isNaN(newApr) || newApr < 360 || newApr > 10000) {
          document.getElementById('status').innerText = "APR must be between 360% and 10000%.";
          return;
      }
      if (isNaN(newLockPeriod) || newLockPeriod < 0) {
          document.getElementById('status').innerText = "Invalid lock period.";
          return;
      }
      const nonce = await web3.eth.getTransactionCount(accounts[0], 'pending');
      await contract.methods.updatePoolParameters(parsedPoolId, newApr, newLockPeriod * 86400).send({ 
          from: accounts[0], 
          gas: 200000, 
          nonce: nonce 
      });
      trackInteraction('UpdatePoolParameters', parsedPoolId);
      document.getElementById('status').innerText = `Pool ${poolId} parameters updated successfully!`;
      await showTab('myCreatedPools');
  } catch (error) {
      console.error("Failed to update pool parameters:", error);
      document.getElementById('status').innerText = "Failed to update parameters. Check inputs.";
  }
}

// Create pool 
async function createPool() {
  if (!accounts) {
      console.log("Wallet not connected");
      return;
  }
  try {
      const stakeToken = document.getElementById('stakeToken').value;
      const rewardToken = document.getElementById('rewardToken').value; // Ubah dari rewardTokens ke rewardToken
      const apr = Number(document.getElementById('poolApr').value); // Ubah ID dari apr ke poolApr
      const initialReward = document.getElementById('initialReward').value;
      const lockPeriod = Number(document.getElementById('lockPeriod').value);
      const maxRewardPerUser = document.getElementById('maxRewardPerUser').value;

      // Validasi input
      if (!web3.utils.isAddress(stakeToken)) {
          console.error("Invalid stake token address");
          return;
      }
      if (!web3.utils.isAddress(rewardToken)) {
          console.error("Invalid reward token address");
          return;
      }
      if (stakeToken !== CHIPS_ADDRESS && stakeToken !== USDT_ADDRESS) {
          console.error("Stake token must be CHIPS or USDT");
          return;
      }
      if (!apr || apr < 360 || apr > 10000) {
          console.error("APR must be between 360 and 10000");
          return;
      }
      if (!initialReward || parseFloat(initialReward) <= 0) {
          console.error("Initial reward must be greater than 0");
          return;
      }
      if (!maxRewardPerUser || parseFloat(maxRewardPerUser) <= 0) {
          console.error("Max reward per user must be greater than 0");
          return;
      }

      const rewardTokens = [rewardToken];
      const initialRewards = [web3.utils.toWei(initialReward, 'ether')];
      const maxReward = web3.utils.toWei(maxRewardPerUser, 'ether');
      const creationFee = await contract.methods.creationFee().call();

      // Validasi reward token contract
      let tokenName;
      try {
          const tokenContract = new web3.eth.Contract(contractABI_IERC20, rewardToken);
          tokenName = await tokenContract.methods.name().call();
          const balance = await tokenContract.methods.balanceOf(accounts[0]).call();
          const decimals = await tokenContract.methods.decimals().call();
          const initialRewardWei = web3.utils.toBN(initialRewards[0]);
          if (web3.utils.toBN(balance).lt(initialRewardWei)) {
              console.error(`Insufficient ${tokenName} balance`);
              return;
          }
          if (rewardToken !== CHIPS_ADDRESS) {
              const allowance = await tokenContract.methods.allowance(accounts[0], contractAddress).call();
              if (web3.utils.toBN(allowance).lt(initialRewardWei)) {
                  document.getElementById('createStatus').innerText = `Approving ${tokenName}...`;
                  await tokenContract.methods.approve(contractAddress, initialRewards[0]).send({ from: accounts[0], gas: 100000 });
              }
          }
      } catch (error) {
          console.error("Invalid reward token contract:", error);
          return;
      }

      console.log(`Creating pool with: stakeToken=${stakeToken}, rewardToken=${rewardToken}, apr=${apr}, initialReward=${initialReward}, lockPeriod=${lockPeriod}, maxRewardPerUser=${maxRewardPerUser}, creationFee=${creationFee}`);

      document.getElementById('createStatus').innerText = "Creating pool...";

      // Penanganan nonce manual
      const nonce = await web3.eth.getTransactionCount(accounts[0], 'pending');

      const tx = await contract.methods.createPool(
          stakeToken,
          rewardTokens,
          apr,
          initialRewards,
          lockPeriod,
          maxReward
      ).send({ 
          from: accounts[0], 
          value: isOwner ? '0' : creationFee, // Owner tidak bayar fee
          gas: 3000000,
          nonce: nonce
      });

      const poolId = tx.events.PoolCreated.returnValues.poolId;
      console.log(`Pool created: poolId=${poolId}, apr=${apr}`);
      document.getElementById('createStatus').innerText = `Pool created successfully with ID: ${poolId}`;
      
      visiblePools.push(Number(poolId));
      await filterPools('newPool'); // Refresh New Pool
  } catch (error) {
      console.error("Failed to create pool:", error);
      // Jangan tampilkan error di UI, hanya log ke console
      document.getElementById('createStatus').innerText = "Pool creation failed. Please check inputs and try again.";
  }
}

// Lock new period 
async function lockNewPeriod() {
  if (!contract || !accounts) {
      console.log("Contract or accounts not initialized");
      document.getElementById('ownerStatus').innerText = "Contract or accounts not initialized";
      return;
  }
  try {
      const poolId = parseInt(document.getElementById('editPoolId').value);
      const newLockPeriod = parseInt(document.getElementById('newLockPeriod').value);
      if (isNaN(newLockPeriod) || newLockPeriod < 0) {
          document.getElementById('ownerStatus').innerText = "Invalid lock period";
          return;
      }
      await contract.methods.updateLockPeriod(poolId, newLockPeriod * 86400).send({ from: accounts[0] });
      trackInteraction();
      document.getElementById('ownerStatus').innerText = "Lock period updated successfully!";
      await showTab('ownerControl');
  } catch (error) {
      console.error("Failed to update lock period:", error);
      document.getElementById('ownerStatus').innerText = "Failed to update lock period. Check inputs.";
  }
}
// unLock new period
async function updateLockPeriod(poolId) {
  if (!contract || !accounts) {
      console.log("Contract or accounts not initialized");
      document.getElementById('status').innerText = "Contract or accounts not initialized.";
      return;
  }
  try {
      const newLockPeriod = document.getElementById(`newLockPeriod${poolId}`).value;
      if (!newLockPeriod || parseInt(newLockPeriod) < 0) {
          document.getElementById('status').innerText = "Invalid lock period.";
          return;
      }
      await contract.methods.updateLockPeriod(poolId, newLockPeriod).send({ from: accounts[0], gas: 100000 });
      trackInteraction();
      document.getElementById('status').innerText = `Lock period updated successfully for pool ${poolId}!`;
      console.log(`Updated lock period for pool ${poolId} to ${newLockPeriod} days`);
      await showTab('myCreatedPools');
  } catch (error) {
      console.error(`Failed to update lock period for ${poolId}:`, error);
      document.getElementById('status').innerText = "Failed to update lock period. Please try again.";
  }
}

// Creator-specific: Update lock period
async function creatorUpdateLockPeriod(poolId) {
  if (!contract || !accounts) {
      console.log("Contract or accounts not initialized");
      document.getElementById('status').innerText = "Contract or accounts not initialized.";
      return;
  }
  try {
      const parsedPoolId = Number(poolId);
      if (isNaN(parsedPoolId) || parsedPoolId < 0) {
          console.log("Invalid pool ID");
          document.getElementById('status').innerText = "Invalid pool ID.";
          return;
      }
      const poolInfo = await contract.methods.getPoolInfo(parsedPoolId).call();
      if (poolInfo.creator.toLowerCase() !== accounts[0].toLowerCase()) {
          console.log("Only pool creator can update lock period");
          document.getElementById('status').innerText = "Only pool creator can update lock period.";
          return;
      }
      const newLockPeriodDays = document.getElementById(`newLockPeriod${poolId}`).value;
      if (!newLockPeriodDays || parseInt(newLockPeriodDays) < 0) {
          console.log("Invalid lock period");
          document.getElementById('status').innerText = "Lock period must be non-negative.";
          return;
      }
      const newLockPeriodSeconds = parseInt(newLockPeriodDays) * 24 * 3600;
      const nonce = await web3.eth.getTransactionCount(accounts[0], 'pending');
      await contract.methods.updatePoolParameters(parsedPoolId, newLockPeriodSeconds, poolInfo.maxRewardPerUser).send({
          from: accounts[0],
          gas: 200000,
          nonce: nonce
      });
      trackInteraction('CreatorUpdateLockPeriod', parsedPoolId);
      document.getElementById('status').innerText = `Lock period updated successfully for pool ${poolId}!`;
      console.log(`Creator updated lock period for pool ${poolId} to ${newLockPeriodDays} days`);
      await renderCreatorTool();
  } catch (error) {
      console.error("Failed to update lock period:", error);
      document.getElementById('status').innerText = "Failed to update lock period. Check inputs.";
  }
}

// Creator-specific: Update APR
async function creatorUpdateApr(poolId) {
  if (!contract || !accounts) {
      console.log("Contract or accounts not initialized");
      document.getElementById('status').innerText = "Contract or accounts not initialized.";
      return;
  }
  try {
      const parsedPoolId = Number(poolId);
      if (isNaN(parsedPoolId) || parsedPoolId < 0) {
          console.log("Invalid pool ID");
          document.getElementById('status').innerText = "Invalid pool ID.";
          return;
      }
      const poolInfo = await contract.methods.getPoolInfo(parsedPoolId).call();
      if (poolInfo.creator.toLowerCase() !== accounts[0].toLowerCase()) {
          console.log("Only pool creator can update APR");
          document.getElementById('status').innerText = "Only pool creator can update APR.";
          return;
      }
      const newApr = document.getElementById(`newApr${poolId}`).value;
      if (!newApr || parseFloat(newApr) < 360 || parseFloat(newApr) > 10000) {
          console.log("Invalid APR");
          document.getElementById('status').innerText = "APR must be between 360 and 10000.";
          return;
      }
      const nonce = await web3.eth.getTransactionCount(accounts[0], 'pending');
      await contract.methods.updateApr(parsedPoolId, parseInt(newApr)).send({
          from: accounts[0],
          gas: 200000,
          nonce: nonce
      });
      trackInteraction('CreatorUpdateApr', parsedPoolId);
      document.getElementById('status').innerText = `APR updated successfully for pool ${poolId}!`;
      console.log(`Creator updated APR for pool ${poolId} to ${newApr}%`);
      await renderCreatorTool();
  } catch (error) {
      console.error("Failed to update APR:", error);
      document.getElementById('status').innerText = "Failed to update APR. Check inputs.";
  }
}

//creator FundReward
async function creatorFundReward(poolId) {
  if (!contract || !accounts) {
      console.log("Contract or accounts not initialized");
      document.getElementById('status').innerText = "Contract or accounts not initialized.";
      return;
  }
  try {
      const parsedPoolId = Number(poolId);
      if (isNaN(parsedPoolId) || parsedPoolId < 0) {
          document.getElementById('status').innerText = "Invalid pool ID.";
          return;
      }
      const poolInfo = await contract.methods.getPoolInfo(parsedPoolId).call();
      if (poolInfo.creator.toLowerCase() !== accounts[0].toLowerCase()) {
          document.getElementById('status').innerText = "Only pool creator can fund rewards.";
          return;
      }
      const amountInput = document.getElementById(`creatorFundAmount${poolId}`).value;
      if (!amountInput || parseFloat(amountInput) <= 0) {
          document.getElementById('status').innerText = "Amount must be greater than 0.";
          return;
      }
      const rewardToken = poolInfo.rewardTokens[0];
      const decimals = await getTokenDecimals(rewardToken);
      const amountWei = web3.utils.toWei(amountInput, decimals === 6 ? 'mwei' : 'ether');
      const startTime = Math.floor(Date.now() / 1000);
      const endTime = startTime + 365 * 24 * 3600; // 1 year
      const nonce = await web3.eth.getTransactionCount(accounts[0], 'pending');
      await contract.methods.fundReward(parsedPoolId, rewardToken, amountWei, startTime, endTime).send({ 
          from: accounts[0], 
          gas: 300000, 
          nonce: nonce 
      });
      trackInteraction('CreatorFundReward', parsedPoolId);
      document.getElementById('status').innerText = `Reward funded successfully for pool ${poolId}!`;
      await showTab('myCreatedPools');
  } catch (error) {
      console.error("Failed to fund reward:", error);
      document.getElementById('status').innerText = "Failed to fund reward. Check inputs.";
  }
}

//creatorEditMaxRewardPerUser
async function creatorUpdateMaxReward(poolId) {
  if (!contract || !accounts) {
      console.log("Contract or accounts not initialized");
      document.getElementById('status').innerText = "Contract or accounts not initialized.";
      return;
  }
  try {
      const parsedPoolId = Number(poolId);
      if (isNaN(parsedPoolId) || parsedPoolId < 0) {
          console.log("Invalid pool ID");
          document.getElementById('status').innerText = "Invalid pool ID.";
          return;
      }
      const poolInfo = await contract.methods.getPoolInfo(parsedPoolId).call();
      if (poolInfo.creator.toLowerCase() !== accounts[0].toLowerCase()) {
          console.log("Only pool creator can update max reward");
          document.getElementById('status').innerText = "Only pool creator can update max reward.";
          return;
      }
      const newMaxReward = document.getElementById(`newMaxReward${poolId}`).value;
      if (!newMaxReward || parseFloat(newMaxReward) <= 0) {
          console.log("Invalid max reward amount");
          document.getElementById('status').innerText = "Max reward must be greater than 0.";
          return;
      }
      const decimals = await getTokenDecimals(poolInfo.rewardTokens[0]);
      const maxRewardWei = web3.utils.toWei(newMaxReward, decimals === 6 ? 'mwei' : 'ether');
      const nonce = await web3.eth.getTransactionCount(accounts[0], 'pending');
      await contract.methods.updatePoolParameters(parsedPoolId, poolInfo.lockPeriod, maxRewardWei).send({
          from: accounts[0],
          gas: 200000,
          nonce: nonce
      });
      trackInteraction('CreatorUpdateMaxReward', parsedPoolId);
      document.getElementById('status').innerText = `Max reward updated successfully for pool ${poolId}!`;
      console.log(`Creator updated max reward for pool ${poolId} to ${newMaxReward}`);
      await renderCreatorTool();
  } catch (error) {
      console.error("Failed to update max reward:", error);
      document.getElementById('status').innerText = "Failed to update max reward. Check inputs.";
  }
}

//getUserCreatedPools
async function getUserCreatedPools() {
  try {
      const poolCount = await contract.methods.poolCount().call();
      const createdPools = [];
      for (let i = 0; i < poolCount; i++) {
          const poolInfo = await contract.methods.getPoolInfo(i).call();
          if (poolInfo.creator.toLowerCase() === accounts[0].toLowerCase()) {
              createdPools.push(i);
          }
      }
      return createdPools;
  } catch (error) {
      console.error("Failed to get user created pools:", error);
      return [];
  }
}

//creatorWithdrawFromPool
async function creatorWithdrawFromPool(poolId) {
  if (!contract || !accounts) {
      console.log("Contract or accounts not initialized");
      document.getElementById('status').innerText = "Contract or accounts not initialized.";
      return;
  }
  try {
      const parsedPoolId = Number(poolId);
      if (isNaN(parsedPoolId) || parsedPoolId < 0) {
          console.log("Invalid pool ID");
          document.getElementById('status').innerText = "Invalid pool ID.";
          return;
      }
      const poolInfo = await contract.methods.getPoolInfo(parsedPoolId).call();
      if (poolInfo.creator.toLowerCase() !== accounts[0].toLowerCase()) {
          console.log("Only pool creator can withdraw rewards");
          document.getElementById('status').innerText = "Only pool creator can withdraw rewards.";
          return;
      }
      const amount = document.getElementById(`withdrawAmount${poolId}`).value;
      if (!amount || parseFloat(amount) <= 0) {
          console.log("Invalid amount");
          document.getElementById('status').innerText = "Amount must be greater than 0.";
          return;
      }
      const decimals = await getTokenDecimals(poolInfo.rewardTokens[0]);
      const amountWei = web3.utils.toWei(amount, decimals === 6 ? 'mwei' : 'ether');
      const nonce = await web3.eth.getTransactionCount(accounts[0], 'pending');
      await contract.methods.withdrawFromPool(parsedPoolId, amountWei).send({
          from: accounts[0],
          gas: 200000,
          nonce: nonce
      });
      trackInteraction('CreatorWithdrawReward', parsedPoolId);
      document.getElementById('status').innerText = `Successfully withdrew ${amount} from pool ${poolId}!`;
      console.log(`Creator withdrew ${amount} from pool ${poolId}`);
      await renderCreatorTool();
  } catch (error) {
      console.error("Failed to withdraw from pool:", error);
      document.getElementById('status').innerText = "Failed to withdraw rewards. Check inputs.";
  }
}


//_____________ALL Role__________________

// Stake
async function stake(poolId) {
  try {
      poolId = parseInt(poolId);
      if (!accounts || !accounts[0] || !contract) {
          console.error("Wallet or contract not initialized.");
          return;
      }
      console.log(`Attempting to stake in pool ${poolId}`);
      
      // Check node sync status
      const isSyncing = await web3.eth.isSyncing();
      if (isSyncing !== false) {
          console.error(`Node is syncing: ${JSON.stringify(isSyncing)}`);
          return;
      }

      const paused = await contract.methods.paused().call();
      const emergencyPaused = await contract.methods.emergencyPaused().call();
      if (paused || emergencyPaused) {
          console.error(`Contract is ${paused ? 'paused' : 'emergency paused'}`);
          document.getElementById('status').innerText = "Contract is locked. Please contact the owner.";
          return;
      }

      const poolInfo = await contract.methods.getPoolInfo(poolId).call();
      console.log(`Pool ${poolId}: active=${poolInfo.active}, stakeToken=${poolInfo.stakeToken}, decimals=${poolInfo.stakeDecimals}, maxRewardPerUser=${web3.utils.fromWei(poolInfo.maxRewardPerUser, 'ether')}, totalStaked=${web3.utils.fromWei(poolInfo.totalStaked, 'ether')}`);
      if (!poolInfo.active && !pinnedPools.includes(poolId)) {
          console.error(`Pool ${poolId} is not active`);
          return;
      }

      const stakeToken = poolInfo.stakeToken.toLowerCase();
      const decimals = Number(poolInfo.stakeDecimals);
      let tokenName;
      if (stakeToken === CHIPS_ADDRESS.toLowerCase() || stakeToken === '0x0000000000000000000000000000000000000000') {
          tokenName = 'CHIPS';
      } else if (stakeToken === USDT_ADDRESS.toLowerCase()) {
          tokenName = 'USDT';
      } else {
          tokenName = await getTokenName(stakeToken);
      }
      
      const amountInput = document.getElementById(`stakeAmount${poolId}`);
      let amount = amountInput.value.trim();
      console.log(`Raw stake amount: ${amount}`);
      if (!amount || isNaN(amount) || Number(amount) <= 0) {
          console.error("Invalid stake amount");
          return;
      }

      amount = parseFloat(amount).toFixed(2);
      console.log(`Parsed stake amount: ${amount}`);
      const amountWei = decimals === 18 ? web3.utils.toWei(amount, 'ether') : web3.utils.toBN(amount * (10 ** decimals)).toString();
      console.log(`Stake amount in wei: ${amountWei}`);

      let tokenContract;
      let balance;
      if (stakeToken === '0x0000000000000000000000000000000000000000' || stakeToken === CHIPS_ADDRESS.toLowerCase()) {
          tokenName = 'CHIPS';
          balance = await web3.eth.getBalance(accounts[0]);
      } else {
          tokenContract = new web3.eth.Contract(IERC20_ABI, stakeToken);
          balance = await tokenContract.methods.balanceOf(accounts[0]).call();
      }
      console.log(`User balance: ${web3.utils.fromWei(balance, 'ether')} ${tokenName}`);
      if (web3.utils.toBN(balance).lt(web3.utils.toBN(amountWei))) {
          console.error(`Insufficient ${tokenName} balance`);
          return;
      }

      // Check max stake limit
      const userStakeInfo = await contract.methods.getStakeInfo(poolId, accounts[0]).call();
      const currentStake = web3.utils.fromWei(userStakeInfo.amount, decimals === 18 ? 'ether' : 'wei');
      const newStake = Number(currentStake) + Number(amount);
      const maxStake = 10000000;
      if (newStake > maxStake) {
          console.error(`Total stake (${newStake}) exceeds max stake limit (${maxStake})`);
          return;
      }

      const chainId = await web3.eth.getChainId();
      if (chainId !== CHAIN_ID) {
          console.error(`Wrong chain ID: expected ${CHAIN_ID}, got ${chainId}`);
          return;
      }

      if (stakeToken !== '0x0000000000000000000000000000000000000000' && stakeToken !== CHIPS_ADDRESS.toLowerCase()) {
          const allowance = await tokenContract.methods.allowance(accounts[0], contractAddress).call();
          console.log(`Allowance for ${tokenName}: ${web3.utils.fromWei(allowance, 'ether')}`);
          if (web3.utils.toBN(allowance).lt(web3.utils.toBN(amountWei))) {
              const approveTx = await tokenContract.methods.approve(contractAddress, amountWei).send({ 
                  from: accounts[0], 
                  gas: 100000,
                  gasPrice: web3.utils.toWei('20', 'gwei')
              });
              console.log(`Approved ${amount} ${tokenName} for pool ${poolId}, gasUsed: ${approveTx.gasUsed}, txHash: ${approveTx.transactionHash}`);
          }
      }

      // Estimate gas
      let gasEstimate;
      try {
          gasEstimate = await contract.methods.stake(poolId, amountWei).estimateGas({
              from: accounts[0],
              value: stakeToken === '0x0000000000000000000000000000000000000000' || stakeToken === CHIPS_ADDRESS.toLowerCase() ? amountWei : 0
          });
          gasEstimate = Math.ceil(gasEstimate * 1.5);
          console.log(`Estimated gas: ${gasEstimate}`);
      } catch (error) {
          console.error(`Gas estimation failed: ${error.message}`);
          gasEstimate = 4000000;
      }

      const nonce = await web3.eth.getTransactionCount(accounts[0], 'pending');
      console.log(`Using nonce: ${nonce} for stake`);

      const stakeTx = await contract.methods.stake(poolId, amountWei).send({ 
          from: accounts[0],
          gas: gasEstimate,
          gasPrice: web3.utils.toWei('20', 'gwei'),
          value: stakeToken === '0x0000000000000000000000000000000000000000' || stakeToken === CHIPS_ADDRESS.toLowerCase() ? amountWei : 0,
          nonce: nonce
      });
      console.log(`Staked ${amount} ${tokenName} to pool ${poolId}, gasUsed: ${stakeTx.gasUsed}, txHash: ${stakeTx.transactionHash}`);
      trackInteraction('Stake', poolId);
      await filterPools('myStakes');
      await updatePoolBalance();
  } catch (error) {
      console.error(`Failed to stake pool ${poolId}: ${error.message}`);
      document.getElementById('status').innerText = "Failed to stake. Please try again.";
  }
}

// Batch stake (User/Creator)
async function batchStake() {
  if (!contract || !accounts) {
      console.log("Contract or accounts not initialized");
      document.getElementById('status').innerText = "Contract or accounts not initialized.";
      return;
  }
  try {
      const poolIdsInput = document.getElementById('batchStakePools').value;
      const amountsInput = document.getElementById('batchStakeAmounts').value;
      const poolIds = poolIdsInput.split(',').map(id => parseInt(id.trim())).filter(id => !isNaN(id) && id >= 0);
      const amounts = amountsInput.split(',').map(amount => parseFloat(amount.trim())).filter(amount => !isNaN(amount) && amount > 0);
      if (poolIds.length === 0 || amounts.length === 0 || poolIds.length !== amounts.length) {
          console.log("Invalid pool IDs or amounts");
          document.getElementById('status').innerText = "Invalid pool IDs or amounts. Ensure equal length.";
          return;
      }
      const amountsWei = [];
      for (let i = 0; i < poolIds.length; i++) {
          const poolInfo = await contract.methods.getPoolInfo(poolIds[i]).call();
          const decimals = await getTokenDecimals(poolInfo.stakeToken);
          amountsWei.push(web3.utils.toWei(amounts[i].toString(), decimals === 6 ? 'mwei' : 'ether'));
      }
      const nonce = await web3.eth.getTransactionCount(accounts[0], 'pending');
      await contract.methods.batchStake(poolIds, amountsWei).send({
          from: accounts[0],
          gas: 500000,
          nonce: nonce
      });
      trackInteraction('BatchStake', poolIds.join(','));
      document.getElementById('status').innerText = `Successfully staked to pools ${poolIds.join(',')}!`;
      console.log(`Batch staked to pools ${poolIds.join(',')}`);
      await renderCreatorTool();
  } catch (error) {
      console.error("Failed to batch stake:", error);
      document.getElementById('status').innerText = "Failed to batch stake. Check inputs.";
  }
}

// Claim Rewards
async function claimRewards(poolId) {
  try {
      if (!contract || !accounts) {
          console.log("Contract or accounts not initialized");
          return;
      }
      if (hiddenMenus['myStakes'] && !isOwner) {
          console.log("This action is disabled by the owner");
          return;
      }

      // Penanganan nonce manual
      const nonce = await web3.eth.getTransactionCount(accounts[0], 'pending');

      await contract.methods.claimRewards(poolId).send({ 
          from: accounts[0], 
          gas: 300000,
          nonce: nonce
      });
      trackInteraction();
      document.getElementById('status').innerText = "Rewards claimed successfully!";
      await showTab('myStakes');
  } catch (error) {
      console.error("Failed to claim rewards:", error);
      // Jangan tampilkan error di UI
      document.getElementById('status').innerText = "Claim rewards failed. Please check inputs and try again.";
  }
}

// Batch claim rewards (User/Creator)
async function batchClaimRewards() {
  if (!contract || !accounts) {
      console.log("Contract or accounts not initialized");
      document.getElementById('status').innerText = "Contract or accounts not initialized.";
      return;
  }
  try {
      const poolIdsInput = document.getElementById('batchClaimPools').value;
      const poolIds = poolIdsInput.split(',').map(id => parseInt(id.trim())).filter(id => !isNaN(id) && id >= 0);
      if (poolIds.length === 0) {
          console.log("Invalid pool IDs");
          document.getElementById('status').innerText = "Invalid pool IDs.";
          return;
      }
      const nonce = await web3.eth.getTransactionCount(accounts[0], 'pending');
      await contract.methods.batchClaimRewards(poolIds).send({
          from: accounts[0],
          gas: 500000,
          nonce: nonce
      });
      trackInteraction('BatchClaimRewards', poolIds.join(','));
      document.getElementById('status').innerText = `Successfully claimed rewards from pools ${poolIds.join(',')}!`;
      console.log(`Batch claimed rewards from pools ${poolIds.join(',')}`);
      await renderCreatorTool();
  } catch (error) {
      console.error("Failed to batch claim rewards:", error);
      document.getElementById('status').innerText = "Failed to batch claim rewards. Check inputs.";
  }
}

// Unstake
async function unstake(poolId) {
  try {
      if (!contract || !accounts) {
          console.log("Contract or accounts not initialized");
          document.getElementById('status').innerText = "Contract or accounts not initialized.";
          return;
      }
      if (hiddenMenus['myStakes'] && !isOwner) {
          console.log("This action is disabled by the owner");
          document.getElementById('status').innerText = "This action is disabled by the owner.";
          return;
      }
      const amountInput = document.getElementById(`unstakeAmount${poolId}`).value;
      if (!amountInput || parseFloat(amountInput) <= 0) {
          document.getElementById('status').innerText = "Unstake amount must be greater than 0.";
          return;
      }
      const poolInfo = await contract.methods.getPoolInfo(poolId).call();
      const decimals = await getTokenDecimals(poolInfo.stakeToken);
      const amount = web3.utils.toWei(amountInput, decimals === 6 ? 'mwei' : 'ether');
      const stakeInfo = await contract.methods.getStakeInfo(poolId, accounts[0]).call();
      if (web3.utils.toBN(stakeInfo.amount).lt(web3.utils.toBN(amount))) {
          document.getElementById('status').innerText = "Insufficient staked amount.";
          return;
      }

      // Penanganan nonce manual
      const nonce = await web3.eth.getTransactionCount(accounts[0], 'pending');

      await contract.methods.unstake(poolId, amount).send({ 
          from: accounts[0], 
          gas: 300000,
          nonce: nonce
      });
      trackInteraction();
      document.getElementById('status').innerText = "Unstake successful!";
      await showTab('myStakes');
  } catch (error) {
      console.error("Failed to unstake:", error);
      document.getElementById('status').innerText = "Unstake failed. Please check inputs and try again.";
  }
}

// Batch unstake (User/Creator)
async function batchUnstake() {
  if (!contract || !accounts) {
      console.log("Contract or accounts not initialized");
      document.getElementById('status').innerText = "Contract or accounts not initialized.";
      return;
  }
  try {
      const poolIdsInput = document.getElementById('batchUnstakePools').value;
      const amountsInput = document.getElementById('batchUnstakeAmounts').value;
      const poolIds = poolIdsInput.split(',').map(id => parseInt(id.trim())).filter(id => !isNaN(id) && id >= 0);
      const amounts = amountsInput.split(',').map(amount => parseFloat(amount.trim())).filter(amount => !isNaN(amount) && amount > 0);
      if (poolIds.length === 0 || amounts.length === 0 || poolIds.length !== amounts.length) {
          console.log("Invalid pool IDs or amounts");
          document.getElementById('status').innerText = "Invalid pool IDs or amounts. Ensure equal length.";
          return;
      }
      const amountsWei = [];
      for (let i = 0; i < poolIds.length; i++) {
          const poolInfo = await contract.methods.getPoolInfo(poolIds[i]).call();
          const decimals = await getTokenDecimals(poolInfo.stakeToken);
          amountsWei.push(web3.utils.toWei(amounts[i].toString(), decimals === 6 ? 'mwei' : 'ether'));
      }
      const nonce = await web3.eth.getTransactionCount(accounts[0], 'pending');
      await contract.methods.batchUnstake(poolIds, amountsWei).send({
          from: accounts[0],
          gas: 500000,
          nonce: nonce
      });
      trackInteraction('BatchUnstake', poolIds.join(','));
      document.getElementById('status').innerText = `Successfully unstaked from pools ${poolIds.join(',')}!`;
      console.log(`Batch unstaked from pools ${poolIds.join(',')}`);
      await renderCreatorTool();
  } catch (error) {
      console.error("Failed to batch unstake:", error);
      document.getElementById('status').innerText = "Failed to batch unstake. Check inputs.";
  }
}

// Update reward token info
async function updateRewardTokenInfo() {
  const rewardTokenInput = document.getElementById('rewardToken');
  const infoElement = document.getElementById('rewardTokenInfo');
  
  if (!rewardTokenInput || !infoElement) {
      console.error("Reward token input or info element not found");
      infoElement.innerText = "Input element not found";
      return;
  }

  const rewardToken = rewardTokenInput.value.trim();
  
  if (!rewardToken) {
      infoElement.innerText = "Enter a reward token address";
      return;
  }
  
  if (!web3.utils.isAddress(rewardToken)) {
      infoElement.innerText = "Invalid reward token address";
      return;
  }
  
  try {
      let name = 'Unknown';
      let decimals = 18;
      let balance = '0';
      let balanceFormatted = '0.00';

      // Handle native token (CHIPS)
      if (rewardToken.toLowerCase() === '0x0000000000000000000000000000000000000000') {
          name = 'CHIPS';
          decimals = 18;
          if (accounts[0]) {
              balance = await web3.eth.getBalance(accounts[0]);
              balanceFormatted = Number(web3.utils.fromWei(balance, 'ether')).toFixed(2);
          }
      } else {
          // Handle ERC20 (misal USDT, 18 decimals)
          const tokenContract = new web3.eth.Contract(IERC20_ABI, rewardToken);
          name = await tokenContract.methods.name().call();
          decimals = await getTokenDecimals(rewardToken); // Bakal return 18 untuk USDT
          if (accounts[0]) {
              balance = await tokenContract.methods.balanceOf(accounts[0]).call();
              balanceFormatted = Number(web3.utils.fromWei(balance, decimals === 6 ? 'mwei' : 'ether')).toFixed(2);
          }
      }

      infoElement.innerText = `Token: ${name}, Balance: ${balanceFormatted}`;
      console.log(`Reward token validated: ${name}, address: ${rewardToken}, decimals: ${decimals}, balance: ${balanceFormatted}`);
  } catch (error) {
      console.error(`Failed to validate reward token: ${error.message}`);
      infoElement.innerText = "Invalid reward token contract";
  }
}


// Update reward meter for a pool
async function updateRewardMeter(poolId, rewardMeterElement) {
  try {
      if (!rewardMeterElement) {
          console.warn(`Reward meter element for pool ${poolId} not found`);
          return;
      }
      const poolInfo = await contract.methods.getPoolInfo(poolId).call();
      const rewardToken = poolInfo.rewardTokens[0] || '0x0000000000000000000000000000000000000000';
      const decimals = 18;
      const tokenName = rewardToken === '0x0000000000000000000000000000000000000000' ? 'CHIPS' : await getTokenName(rewardToken);

      // Debug poolInfo dan rewardSchedules
      console.log(`Pool ${poolId} info: rewardTokens=${poolInfo.rewardTokens}, totalStaked=${poolInfo.totalStaked}, stakerCount=${poolInfo.stakerCount}`);
      try {
          const schedule = await contract.methods.rewardSchedules(poolId, 0).call();
          console.log(`Reward schedule for pool ${poolId}: rewardToken=${schedule.rewardToken}, startTime=${schedule.startTime}, endTime=${schedule.endTime}, totalReward=${schedule.totalReward}`);
      } catch (e) {
          console.warn(`Failed to fetch reward schedule for pool ${poolId}: ${e.message}`);
      }

      // Cek stake info
      const stakeInfo = await contract.methods.getStakeInfo(poolId, accounts[0]).call();
      console.log(`Stake info for pool ${poolId}: amount=${stakeInfo.amount}, rewards=${stakeInfo.rewards}, timestamp=${stakeInfo.timestamp}`);

      // Hitung reward
      const reward = await contract.methods.calculateReward(poolId, accounts[0], rewardToken).call();
      const rewardFormatted = reward && reward !== '0' ? Number(web3.utils.fromWei(reward, 'ether')).toFixed(2) : '0.00';
      
      rewardMeterElement.innerText = `Your Reward: ${rewardFormatted} ${tokenName}`;
      console.log(`Updated reward for pool ${poolId}: ${rewardFormatted} ${tokenName}, raw: ${reward}, rewardToken: ${rewardToken}`);
  } catch (error) {
      console.error(`Failed to update reward meter for pool ${poolId}: ${error.message}`);
      if (rewardMeterElement) {
          rewardMeterElement.innerText = `Your Reward: 0.00 CHIPS`;
      }
  }
}

//getAllocatedRewards
async function getAllocatedRewardsFromEvents(poolId, rewardToken) {
  try {
      console.log(`Querying AllocatedRewardUpdated for Pool ${poolId}, rewardToken: ${rewardToken}`);
      let lastBlock = Number(localStorage.getItem(`lastBlock-Pool${poolId}-${rewardToken}`)) || 0;
      const latestBlock = await web3.eth.getBlockNumber();

      // Reset lastBlock kalo invalid atau nilai aneh
      if (lastBlock > latestBlock) {
          console.warn(`Invalid lastBlock ${lastBlock} > latestBlock ${latestBlock}, resetting to 0`);
          lastBlock = 0;
          localStorage.setItem(`lastBlock-Pool${poolId}-${rewardToken}`, 0);
      }

      const events = await contract.getPastEvents('AllocatedRewardUpdated', {
          filter: { poolId: poolId, rewardToken: rewardToken.toLowerCase() },
          fromBlock: lastBlock,
          toBlock: 'latest'
      });

      console.log(`Found ${events.length} AllocatedRewardUpdated events for Pool ${poolId}, rewardToken: ${rewardToken}`);
      const decimals = await getTokenDecimals(rewardToken);
      const unit = decimals === 18 ? 'ether' : decimals === 6 ? 'mwei' : 'wei';
      let totalAllocated = web3.utils.toBN(0);
      const processedTxs = new Set(); // Cegah duplikasi event

      for (let event of events.sort((a, b) => a.blockNumber - b.blockNumber)) {
          const txHash = event.transactionHash;
          if (processedTxs.has(txHash)) {
              console.log(`Skipping duplicate event for txHash: ${txHash}`);
              continue;
          }
          processedTxs.add(txHash);

          const amount = web3.utils.toBN(event.returnValues.newAllocatedReward || '0');
          totalAllocated = totalAllocated.add(amount);
          console.log(`Event: poolId=${event.returnValues.poolId}, rewardToken=${event.returnValues.rewardToken}, amount=${web3.utils.fromWei(amount, unit)}, raw=${amount.toString()}, block=${event.blockNumber}, txHash=${txHash}`);
      }

      if (events.length > 0) {
          const newLastBlock = events[events.length - 1].blockNumber;
          localStorage.setItem(`lastBlock-Pool${poolId}-${rewardToken}`, newLastBlock);
          console.log(`Updated lastBlock to ${newLastBlock} for Pool ${poolId}, rewardToken: ${rewardToken}`);
      } else {
          console.log(`No new events found for Pool ${poolId}, keeping lastBlock at ${lastBlock}`);
      }

      const formattedTotal = Number(web3.utils.fromWei(totalAllocated, unit)).toFixed(4);
      console.log(`Returning totalAllocated: ${formattedTotal} for Pool ${poolId}, rewardToken: ${rewardToken}, decimals: ${decimals}`);
      return totalAllocated;
  } catch (error) {
      console.error(`Failed to fetch AllocatedRewardUpdated events for Pool ${poolId}, token ${rewardToken}: ${error.message}`);
      return web3.utils.toBN(0);
  }
}

// Update fund reward UI
async function updateFundWithdrawUI() {
    if (!isOwner || !contract) {
        console.log("Owner access or contract not initialized");
        document.getElementById('ownerStatus').innerText = "Owner access required.";
        return;
    }
    const poolIdInput = document.getElementById('poolIdFund');
    const fundWithdrawInfo = document.getElementById('fundWithdrawInfo');
    if (!poolIdInput || !fundWithdrawInfo) {
        console.log("Fund/Withdraw UI elements not found");
        return;
    }

    const poolId = parseInt(poolIdInput.value);
    if (isNaN(poolId)) {
        console.log("No pool selected for Fund/Withdraw Reward");
        fundWithdrawInfo.innerHTML = '<p>Please enter a valid Pool ID.</p>';
        return;
    }

    try {
        const poolInfo = await contract.methods.getPoolInfo(poolId).call();
        const rewardToken = poolInfo.rewardTokens[0];
        const tokenName = rewardToken === CHIPS_ADDRESS ? 'CHIPS' : rewardToken === USDT_ADDRESS ? 'USDT' : await getTokenName(rewardToken);
        const decimals = await getTokenDecimals(rewardToken);

        fundWithdrawInfo.innerHTML = `
            <div style="margin-bottom: 10px;">
                <label for="fundAmount${poolId}">Fund Amount (${tokenName}):</label>
                <input type="number" id="fundAmount${poolId}" placeholder="Amount" step="0.01" min="0">
                <input type="date" id="fundStartDate${poolId}">
                <input type="date" id="fundEndDate${poolId}">
                <button onclick="fundReward(${poolId})">Fund Reward</button>
            </div>
            <div>
                <label for="withdrawAmount${poolId}">Withdraw Amount (${tokenName}):</label>
                <input type="number" id="withdrawAmount${poolId}" placeholder="Amount" step="0.01" min="0">
                <button onclick="withdrawFromPool(${poolId}, '${rewardToken}')">Withdraw</button>
            </div>
        `;
        console.log(`Updated Fund/Withdraw Reward UI for pool ${poolId}, rewardToken: ${tokenName}, decimals: ${decimals}`);
    } catch (error) {
        console.error(`Failed to update Fund/Withdraw UI for pool ${poolId}: ${error.message}`);
        fundWithdrawInfo.innerHTML = '<p>Invalid Pool ID or pool not found.</p>';
    }
}

// Withdraw from pool
async function withdrawFromPool(poolId, rewardToken) {
    if (!contract || !accounts) {
        console.log("Contract or accounts not initialized");
        document.getElementById('ownerStatus').innerText = "Contract or accounts not initialized.";
        return;
    }
    try {
        const parsedPoolId = Number(poolId);
        if (isNaN(parsedPoolId) || parsedPoolId < 0) {
            document.getElementById('ownerStatus').innerText = "Invalid pool ID.";
            return;
        }
        const amountInput = document.getElementById('withdrawPoolAmount').value;
        if (!amountInput || parseFloat(amountInput) <= 0) {
            document.getElementById('ownerStatus').innerText = "Amount must be greater than 0.";
            return;
        }
        const poolInfo = await contract.methods.getPoolInfo(parsedPoolId).call();
        const decimals = await getTokenDecimals(rewardToken);
        const amount = web3.utils.toWei(amountInput, decimals === 6 ? 'mwei' : 'ether');
        await contract.methods.withdrawFromPool(parsedPoolId, amount, rewardToken).send({ from: accounts[0], gas: 300000 });
        trackInteraction();
        document.getElementById('ownerStatus').innerText = "Withdrawal successful!";
    } catch (error) {
        console.error("Failed to withdraw from pool:", error);
        document.getElementById('ownerStatus').innerText = "Failed to withdraw. Please check inputs.";
    }
}

// Creator-specific: Withdraw from pool
async function creatorWithdrawFromPool(poolId) {
  if (!contract || !accounts) {
      console.log("Contract or accounts not initialized");
      document.getElementById('status').innerText = "Contract or accounts not initialized.";
      return;
  }
  try {
      const parsedPoolId = Number(poolId);
      if (isNaN(parsedPoolId) || parsedPoolId < 0) {
          document.getElementById('status').innerText = "Invalid pool ID.";
          return;
      }
      const poolInfo = await contract.methods.getPoolInfo(parsedPoolId).call();
      if (poolInfo.creator.toLowerCase() !== accounts[0].toLowerCase()) {
          document.getElementById('status').innerText = "Only pool creator can withdraw.";
          return;
      }
      const amountInput = document.getElementById(`creatorWithdrawAmount${poolId}`).value;
      if (!amountInput || parseFloat(amountInput) <= 0) {
          document.getElementById('status').innerText = "Amount must be greater than 0.";
          return;
      }
      const decimals = await getTokenDecimals(poolInfo.rewardTokens[0]);
      const amount = web3.utils.toWei(amountInput, decimals === 6 ? 'mwei' : 'ether');
      const nonce = await web3.eth.getTransactionCount(accounts[0], 'pending');
      await contract.methods.withdrawFromPool(parsedPoolId, amount, poolInfo.rewardTokens[0]).send({ 
          from: accounts[0], 
          gas: 300000, 
          nonce: nonce 
      });
      trackInteraction('CreatorWithdraw', parsedPoolId);
      document.getElementById('status').innerText = `Withdrawal successful from pool ${poolId}!`;
      await showTab('myCreatedPools');
  } catch (error) {
      console.error("Failed to withdraw from pool:", error);
      document.getElementById('status').innerText = "Withdrawal failed. Check inputs.";
  }
}

// Withdraw tokens
async function withdrawTokens() {
    try {
        if (!contract || !accounts) {
            console.log("Contract or accounts not initialized");
            document.getElementById('ownerStatus').innerText = "Contract or accounts not initialized";
            return;
        }
        const token = document.getElementById('withdrawToken').value || CHIPS_ADDRESS;
        const amountInput = document.getElementById('withdrawAmount').value;
        if (!amountInput || parseFloat(amountInput) <= 0) {
            document.getElementById('ownerStatus').innerText = "Amount must be greater than 0";
            return;
        }
        const amount = web3.utils.toWei(amountInput, 'ether');
        await contract.methods.withdraw(token, amount).send({ from: accounts[0] });
        trackInteraction();
        document.getElementById('ownerStatus').innerText = "Tokens withdrawn successfully!";
    } catch (error) {
        console.error("Failed to withdraw tokens:", error);
        document.getElementById('ownerStatus').innerText = "Failed to withdraw tokens. Check inputs.";
    }
}


// Get contract balances (User/Creator)
async function getContractBalances() {
  if (!contract || !accounts) {
      console.log("Contract or accounts not initialized");
      document.getElementById('status').innerText = "Contract or accounts not initialized.";
      return;
  }
  try {
      const ethBalance = await web3.eth.getBalance(contractAddress);
      const chipsBalance = await new web3.eth.Contract(IERC20_ABI, CHIPS_ADDRESS).methods.balanceOf(contractAddress).call();
      const usdtBalance = await new web3.eth.Contract(IERC20_ABI, USDT_ADDRESS).methods.balanceOf(contractAddress).call();
      document.getElementById('contractBalances').innerText = `
          Contract Balances:
          ETH: ${web3.utils.fromWei(ethBalance, 'ether')} ETH
          CHIPS: ${web3.utils.fromWei(chipsBalance, 'ether')} CHIPS
          USDT: ${web3.utils.fromWei(usdtBalance, 'ether')} USDT
      `;
      console.log(`Contract balances: ETH=${ethBalance}, CHIPS=${chipsBalance}, USDT=${usdtBalance}`);
  } catch (error) {
      console.error("Failed to get contract balances:", error);
      document.getElementById('status').innerText = "Failed to fetch contract balances.";
  }
}
// Download user interactions as PDF
async function downloadUserInteractionsPDF() {
  if (!isOwner || !accounts) {
      console.warn("Owner access required for downloading PDF");
      document.getElementById('ownerStatus').innerText = "Owner access required.";
      return;
  }
  try {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();

      doc.setFontSize(14);
      doc.text("CHIPS Activity Testnet", 20, 10);

      const interactions = Array.isArray(window.userInteractions) ? window.userInteractions : [];
      if (interactions.length === 0) {
          console.warn("No interactions found for PDF");
          doc.setFontSize(10);
          doc.text("No user activity found.", 20, 20);
          doc.save('chips_activity_testnet.pdf');
          document.getElementById('ownerStatus').innerText = "PDF downloaded, but no user activity found.";
          return;
      }

      const activityCount = {};
      interactions.forEach(interaction => {
          const wallet = interaction.user?.toLowerCase() || 'unknown';
          activityCount[wallet] = (activityCount[wallet] || 0) + 1;
      });

      const tableData = Object.entries(activityCount).map(([wallet, count]) => [wallet, count.toString()]);
      const columns = [
          { header: 'Wallet User', dataKey: 'wallet' },
          { header: 'Activity User', dataKey: 'count' }
      ];

      doc.autoTable({
          startY: 20,
          head: [columns.map(col => col.header)],
          body: tableData,
          columns: columns,
          styles: { 
              fontSize: 10, 
              cellPadding: 2, 
              lineWidth: 0.1, 
              lineColor: [0, 0, 0]
          },
          columnStyles: {
              wallet: { cellWidth: 110 }, // Wallet lebar disesuaikan
              count: { cellWidth: 30, halign: 'center' }
          },
          theme: 'grid'
      });

      doc.save('chips_activity_testnet.pdf');
      document.getElementById('ownerStatus').innerText = "CHIPS Activity Testnet PDF downloaded successfully!";
      console.log(`PDF downloaded with ${tableData.length} user activities`);
  } catch (error) {
      console.error(`Failed to download PDF: ${error.message}`);
      document.getElementById('ownerStatus').innerText = "Failed to download PDF. Check console for details.";
  }
}

//renderActivityReport
async function renderActivityReport() {
  try {
      console.log("Rendering Activity Report...");
      const activityReportDiv = document.querySelector('.activity-report-section');
      if (!activityReportDiv) {
          console.error("Activity Report section not found");
          document.getElementById('ownerStatus').innerText = "Activity Report section not found.";
          return;
      }

      activityReportDiv.innerHTML = `
          <h3>Activity Report</h3>
          <button id="downloadActivityPdf">Download User Activity PDF</button>
      `;

      document.getElementById('downloadActivityPdf').onclick = async () => {
          try {
              console.log("Generating user activity PDF...");
              const { jsPDF } = window.jspdf;
              const doc = new jsPDF();
              doc.text("User Activity Report", 10, 10);
              const data = Object.entries(userInteractions).map(([user, actions]) => [user, JSON.stringify(actions)]);
              doc.autoTable({
                  head: [['User', 'Actions']],
                  body: data
              });
              doc.save('user_activity.pdf');
              document.getElementById('ownerStatus').innerText = "PDF downloaded successfully!";
          } catch (error) {
              console.error("Failed to generate PDF:", error.message);
              document.getElementById('ownerStatus').innerText = "Failed to download PDF.";
          }
      };
      console.log("Activity Report rendered successfully");
  } catch (error) {
      console.error("Failed to render Activity Report:", error.message);
      document.getElementById('ownerStatus').innerText = "Failed to load Activity Report.";
  }
}

//clearPoolCache
async function clearPoolCache() {
    console.log("Clearing pool cache...");
    localStorage.removeItem('lastBlock-Pool0-0x0000000000000000000000000000000000000000');
    localStorage.removeItem('lastBlock-Pool1-' + USDT_ADDRESS);
    console.log("Pool cache cleared");
}
