export type LiteCash = {
  version: "0.1.0";
  name: "lite_cash";
  instructions: [
    {
      name: "createVault";
      accounts: [
        {
          name: "vault";
          isMut: true;
          isSigner: false;
        },
        {
          name: "admin";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "bumpVault";
          type: "u8";
        }
      ];
    },
    {
      name: "createPool";
      accounts: [
        {
          name: "pool";
          isMut: true;
          isSigner: false;
        },
        {
          name: "user";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "bumpPool";
          type: "u8";
        }
      ];
    },
    {
      name: "stake";
      accounts: [
        {
          name: "user";
          isMut: false;
          isSigner: true;
        },
        {
          name: "pool";
          isMut: true;
          isSigner: false;
        },
        {
          name: "from";
          isMut: true;
          isSigner: false;
        },
        {
          name: "to";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "amount";
          type: "u32";
        }
      ];
    },
    {
      name: "claim";
      accounts: [
        {
          name: "vault";
          isMut: false;
          isSigner: false;
        },
        {
          name: "pool";
          isMut: true;
          isSigner: false;
        },
        {
          name: "user";
          isMut: false;
          isSigner: true;
        },
        {
          name: "from";
          isMut: true;
          isSigner: false;
        },
        {
          name: "to";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "bumpVault";
          type: "u8";
        }
      ];
    },
    {
      name: "unstake";
      accounts: [
        {
          name: "vault";
          isMut: false;
          isSigner: false;
        },
        {
          name: "pool";
          isMut: true;
          isSigner: false;
        },
        {
          name: "user";
          isMut: false;
          isSigner: true;
        },
        {
          name: "from";
          isMut: true;
          isSigner: false;
        },
        {
          name: "to";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "bump";
          type: "u8";
        }
      ];
    }
  ];
  accounts: [
    {
      name: "vault";
      type: {
        kind: "struct";
        fields: [
          {
            name: "bumpVault";
            type: "u8";
          }
        ];
      };
    },
    {
      name: "pool";
      type: {
        kind: "struct";
        fields: [
          {
            name: "owner";
            type: "publicKey";
          },
          {
            name: "amount";
            type: "u64";
          },
          {
            name: "lastTime";
            type: "u32";
          },
          {
            name: "startTime";
            type: "u32";
          },
          {
            name: "reward";
            type: "u64";
          },
          {
            name: "isStake";
            type: "bool";
          }
        ];
      };
    }
  ];
  errors: [
    {
      code: 6000;
      name: "AuthorityInvalid";
      msg: "Authority is invalid";
    },
    {
      code: 6001;
      name: "UnStakeTimingInvalid";
      msg: "Unstake is not available";
    },
    {
      code: 6002;
      name: "AlreadyStaked";
      msg: "Already staked";
    }
  ];
};

export const STACK_CASH_IDL: LiteCash = {
  version: "0.1.0",
  name: "lite_cash",
  instructions: [
    {
      name: "createVault",
      accounts: [
        {
          name: "vault",
          isMut: true,
          isSigner: false,
        },
        {
          name: "admin",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "bumpVault",
          type: "u8",
        },
      ],
    },
    {
      name: "createPool",
      accounts: [
        {
          name: "pool",
          isMut: true,
          isSigner: false,
        },
        {
          name: "user",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "bumpPool",
          type: "u8",
        },
      ],
    },
    {
      name: "stake",
      accounts: [
        {
          name: "user",
          isMut: false,
          isSigner: true,
        },
        {
          name: "pool",
          isMut: true,
          isSigner: false,
        },
        {
          name: "from",
          isMut: true,
          isSigner: false,
        },
        {
          name: "to",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "amount",
          type: "u32",
        },
      ],
    },
    {
      name: "claim",
      accounts: [
        {
          name: "vault",
          isMut: false,
          isSigner: false,
        },
        {
          name: "pool",
          isMut: true,
          isSigner: false,
        },
        {
          name: "user",
          isMut: false,
          isSigner: true,
        },
        {
          name: "from",
          isMut: true,
          isSigner: false,
        },
        {
          name: "to",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "bumpVault",
          type: "u8",
        },
      ],
    },
    {
      name: "unstake",
      accounts: [
        {
          name: "vault",
          isMut: false,
          isSigner: false,
        },
        {
          name: "pool",
          isMut: true,
          isSigner: false,
        },
        {
          name: "user",
          isMut: false,
          isSigner: true,
        },
        {
          name: "from",
          isMut: true,
          isSigner: false,
        },
        {
          name: "to",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "bump",
          type: "u8",
        },
      ],
    },
  ],
  accounts: [
    {
      name: "vault",
      type: {
        kind: "struct",
        fields: [
          {
            name: "bumpVault",
            type: "u8",
          },
        ],
      },
    },
    {
      name: "pool",
      type: {
        kind: "struct",
        fields: [
          {
            name: "owner",
            type: "publicKey",
          },
          {
            name: "amount",
            type: "u64",
          },
          {
            name: "lastTime",
            type: "u32",
          },
          {
            name: "startTime",
            type: "u32",
          },
          {
            name: "reward",
            type: "u64",
          },
          {
            name: "isStake",
            type: "bool",
          },
        ],
      },
    },
  ],
  errors: [
    {
      code: 6000,
      name: "AuthorityInvalid",
      msg: "Authority is invalid",
    },
    {
      code: 6001,
      name: "UnStakeTimingInvalid",
      msg: "Unstake is not available",
    },
    {
      code: 6002,
      name: "AlreadyStaked",
      msg: "Already staked",
    },
  ],
};
