export default [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    name: "_become",
    inputs: [
      {
        name: "unitroller",
        type: "address",
        internalType: "contract Unitroller",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "_rescueFunds",
    inputs: [
      {
        name: "_tokenAddress",
        type: "address",
        internalType: "address",
      },
      { name: "_amount", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "_setBorrowCapGuardian",
    inputs: [
      {
        name: "newBorrowCapGuardian",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "_setBorrowPaused",
    inputs: [
      {
        name: "rToken",
        type: "address",
        internalType: "contract RToken",
      },
      { name: "state", type: "bool", internalType: "bool" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "_setCloseFactor",
    inputs: [
      {
        name: "newCloseFactorMantissa",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "_setCollateralFactor",
    inputs: [
      {
        name: "rToken",
        type: "address",
        internalType: "contract RToken",
      },
      {
        name: "newCollateralFactorMantissa",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "_setLiquidationIncentive",
    inputs: [
      {
        name: "newLiquidationIncentiveMantissa",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "_setMarketBorrowCaps",
    inputs: [
      {
        name: "rTokens",
        type: "address[]",
        internalType: "contract RToken[]",
      },
      {
        name: "newBorrowCaps",
        type: "uint256[]",
        internalType: "uint256[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "_setMarketSupplyCaps",
    inputs: [
      {
        name: "rTokens",
        type: "address[]",
        internalType: "contract RToken[]",
      },
      {
        name: "newSupplyCaps",
        type: "uint256[]",
        internalType: "uint256[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "_setMintPaused",
    inputs: [
      {
        name: "rToken",
        type: "address",
        internalType: "contract RToken",
      },
      { name: "state", type: "bool", internalType: "bool" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "_setPauseGuardian",
    inputs: [
      {
        name: "newPauseGuardian",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "_setPriceOracle",
    inputs: [
      {
        name: "newOracle",
        type: "address",
        internalType: "contract PriceOracle",
      },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "_setRewardDistributor",
    inputs: [
      {
        name: "newRewardDistributor",
        type: "address",
        internalType: "contract MultiRewardDistributor",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "_setSeizePaused",
    inputs: [{ name: "state", type: "bool", internalType: "bool" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "_setSupplyCapGuardian",
    inputs: [
      {
        name: "newSupplyCapGuardian",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "_setTransferPaused",
    inputs: [{ name: "state", type: "bool", internalType: "bool" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "_supportMarket",
    inputs: [
      {
        name: "rToken",
        type: "address",
        internalType: "contract RToken",
      },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "accountAssets",
    inputs: [
      { name: "", type: "address", internalType: "address" },
      { name: "", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "address", internalType: "contract RToken" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "admin",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "allMarkets",
    inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "address", internalType: "contract RToken" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "borrowAllowed",
    inputs: [
      { name: "rToken", type: "address", internalType: "address" },
      { name: "borrower", type: "address", internalType: "address" },
      { name: "borrowAmount", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "borrowCapGuardian",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "borrowCaps",
    inputs: [{ name: "", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "borrowGuardianPaused",
    inputs: [{ name: "", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "checkMembership",
    inputs: [
      { name: "account", type: "address", internalType: "address" },
      {
        name: "rToken",
        type: "address",
        internalType: "contract RToken",
      },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "claimReward",
    inputs: [
      { name: "holders", type: "address[]", internalType: "address[]" },
      {
        name: "rTokens",
        type: "address[]",
        internalType: "contract RToken[]",
      },
      { name: "borrowers", type: "bool", internalType: "bool" },
      { name: "suppliers", type: "bool", internalType: "bool" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "claimReward",
    inputs: [
      { name: "holder", type: "address", internalType: "address" },
      {
        name: "rTokens",
        type: "address[]",
        internalType: "contract RToken[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "claimReward",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "claimReward",
    inputs: [{ name: "holder", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "closeFactorMantissa",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "comptrollerImplementation",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "enterAllMarkets",
    inputs: [{ name: "account", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "uint256[]", internalType: "uint256[]" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "enterMarkets",
    inputs: [{ name: "rTokens", type: "address[]", internalType: "address[]" }],
    outputs: [{ name: "", type: "uint256[]", internalType: "uint256[]" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "exitMarket",
    inputs: [
      {
        name: "rTokenAddress",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getAccountLiquidity",
    inputs: [{ name: "account", type: "address", internalType: "address" }],
    outputs: [
      { name: "", type: "uint256", internalType: "uint256" },
      { name: "", type: "uint256", internalType: "uint256" },
      { name: "", type: "uint256", internalType: "uint256" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getAllMarkets",
    inputs: [],
    outputs: [
      { name: "", type: "address[]", internalType: "contract RToken[]" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getAssetsIn",
    inputs: [{ name: "account", type: "address", internalType: "address" }],
    outputs: [
      { name: "", type: "address[]", internalType: "contract RToken[]" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getBlockNumber",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getHypotheticalAccountLiquidity",
    inputs: [
      { name: "account", type: "address", internalType: "address" },
      {
        name: "rTokenModify",
        type: "address",
        internalType: "address",
      },
      {
        name: "redeemTokens",
        type: "uint256",
        internalType: "uint256",
      },
      { name: "borrowAmount", type: "uint256", internalType: "uint256" },
    ],
    outputs: [
      { name: "", type: "uint256", internalType: "uint256" },
      { name: "", type: "uint256", internalType: "uint256" },
      { name: "", type: "uint256", internalType: "uint256" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isComptroller",
    inputs: [],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isDeprecated",
    inputs: [
      {
        name: "rToken",
        type: "address",
        internalType: "contract RToken",
      },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "liquidateBorrowAllowed",
    inputs: [
      {
        name: "rTokenBorrowed",
        type: "address",
        internalType: "address",
      },
      {
        name: "rTokenCollateral",
        type: "address",
        internalType: "address",
      },
      { name: "liquidator", type: "address", internalType: "address" },
      { name: "borrower", type: "address", internalType: "address" },
      { name: "repayAmount", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "liquidateCalculateSeizeTokens",
    inputs: [
      {
        name: "rTokenBorrowed",
        type: "address",
        internalType: "address",
      },
      {
        name: "rTokenCollateral",
        type: "address",
        internalType: "address",
      },
      {
        name: "actualRepayAmount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      { name: "", type: "uint256", internalType: "uint256" },
      { name: "", type: "uint256", internalType: "uint256" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "liquidationIncentiveMantissa",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "markets",
    inputs: [{ name: "", type: "address", internalType: "address" }],
    outputs: [
      { name: "isListed", type: "bool", internalType: "bool" },
      {
        name: "collateralFactorMantissa",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "mintAllowed",
    inputs: [
      { name: "rToken", type: "address", internalType: "address" },
      { name: "minter", type: "address", internalType: "address" },
      { name: "mintAmount", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "mintGuardianPaused",
    inputs: [{ name: "", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "oracle",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract PriceOracle",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "pauseGuardian",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "pendingAdmin",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "pendingComptrollerImplementation",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "redeemAllowed",
    inputs: [
      { name: "rToken", type: "address", internalType: "address" },
      { name: "redeemer", type: "address", internalType: "address" },
      { name: "redeemTokens", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "redeemVerify",
    inputs: [
      { name: "rToken", type: "address", internalType: "address" },
      { name: "redeemer", type: "address", internalType: "address" },
      {
        name: "redeemAmount",
        type: "uint256",
        internalType: "uint256",
      },
      { name: "redeemTokens", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "repayBorrowAllowed",
    inputs: [
      { name: "rToken", type: "address", internalType: "address" },
      { name: "payer", type: "address", internalType: "address" },
      { name: "borrower", type: "address", internalType: "address" },
      { name: "repayAmount", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "rewardDistributor",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract MultiRewardDistributor",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "seizeAllowed",
    inputs: [
      {
        name: "rTokenCollateral",
        type: "address",
        internalType: "address",
      },
      {
        name: "rTokenBorrowed",
        type: "address",
        internalType: "address",
      },
      { name: "liquidator", type: "address", internalType: "address" },
      { name: "borrower", type: "address", internalType: "address" },
      { name: "seizeTokens", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "seizeGuardianPaused",
    inputs: [],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "supplyCapGuardian",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "supplyCaps",
    inputs: [{ name: "", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "transferAllowed",
    inputs: [
      { name: "rToken", type: "address", internalType: "address" },
      { name: "src", type: "address", internalType: "address" },
      { name: "dst", type: "address", internalType: "address" },
      {
        name: "transferTokens",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferGuardianPaused",
    inputs: [],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "event",
    name: "ActionPaused",
    inputs: [
      {
        name: "action",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "pauseState",
        type: "bool",
        indexed: false,
        internalType: "bool",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ActionPaused",
    inputs: [
      {
        name: "rToken",
        type: "address",
        indexed: false,
        internalType: "contract RToken",
      },
      {
        name: "action",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "pauseState",
        type: "bool",
        indexed: false,
        internalType: "bool",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Failure",
    inputs: [
      {
        name: "error",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "info",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "detail",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "MarketEntered",
    inputs: [
      {
        name: "rToken",
        type: "address",
        indexed: false,
        internalType: "contract RToken",
      },
      {
        name: "account",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "MarketExited",
    inputs: [
      {
        name: "rToken",
        type: "address",
        indexed: false,
        internalType: "contract RToken",
      },
      {
        name: "account",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "MarketListed",
    inputs: [
      {
        name: "rToken",
        type: "address",
        indexed: false,
        internalType: "contract RToken",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "NewBorrowCap",
    inputs: [
      {
        name: "rToken",
        type: "address",
        indexed: true,
        internalType: "contract RToken",
      },
      {
        name: "newBorrowCap",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "NewBorrowCapGuardian",
    inputs: [
      {
        name: "oldBorrowCapGuardian",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "newBorrowCapGuardian",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "NewCloseFactor",
    inputs: [
      {
        name: "oldCloseFactorMantissa",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "newCloseFactorMantissa",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "NewCollateralFactor",
    inputs: [
      {
        name: "rToken",
        type: "address",
        indexed: false,
        internalType: "contract RToken",
      },
      {
        name: "oldCollateralFactorMantissa",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "newCollateralFactorMantissa",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "NewLiquidationIncentive",
    inputs: [
      {
        name: "oldLiquidationIncentiveMantissa",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "newLiquidationIncentiveMantissa",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "NewPauseGuardian",
    inputs: [
      {
        name: "oldPauseGuardian",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "newPauseGuardian",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "NewPriceOracle",
    inputs: [
      {
        name: "oldPriceOracle",
        type: "address",
        indexed: false,
        internalType: "contract PriceOracle",
      },
      {
        name: "newPriceOracle",
        type: "address",
        indexed: false,
        internalType: "contract PriceOracle",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "NewRewardDistributor",
    inputs: [
      {
        name: "oldRewardDistributor",
        type: "address",
        indexed: false,
        internalType: "contract MultiRewardDistributor",
      },
      {
        name: "newRewardDistributor",
        type: "address",
        indexed: false,
        internalType: "contract MultiRewardDistributor",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "NewSupplyCap",
    inputs: [
      {
        name: "rToken",
        type: "address",
        indexed: true,
        internalType: "contract RToken",
      },
      {
        name: "newSupplyCap",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "NewSupplyCapGuardian",
    inputs: [
      {
        name: "oldSupplyCapGuardian",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "newSupplyCapGuardian",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
];
