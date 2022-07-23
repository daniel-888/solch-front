import { LITE_CASH_IDL } from "./idl/LiteCash";
import { STACK_CASH_IDL } from "./idl/StackCash";
import { CASH_POT_IDL } from "./idl/CashPot";
import { CASH_KING_IDL } from "./idl/CashKing";
import { MOON_CASH_IDL } from "./idl/MoonCash";

const PROGRAM_IDS = [
  "9z37tYVJuRaPFJZWSW7eNW97NW7zTTP8oo9qJdmncP2Z",
  "687twoeH6Y5wrKFVNnuhskijY99SiU1BhJEaeEQVrnaT",
  "Dm2wgzjeuPshkQ34Hr1gMAgJSLTv2twgE3ujWH9GQJwd",
  "25uVCCcfBJ8V7EetaduwNp1f7XpDHTuV17uaJQ5DDRix",
  "4wHp7s1Lo97ijk3nfZBwoUhaMUuFyFW9DGgrbFYBQM8y",
];
const IDLS = [
  LITE_CASH_IDL,
  STACK_CASH_IDL,
  CASH_POT_IDL,
  CASH_KING_IDL,
  MOON_CASH_IDL,
];
const VAULT_SEEDS = "SOLCH_STAKING_ACCOUNT";
const POOL_SEEDS = "SOLCH_STAKING_POOL";
const VAULT_TOKEN_ACCOUNTS = [
  "8wC1vudp6Y5xjoJM77a1nWG2R82rs5sC36rnYR4GVbY2",
  "5RvF9sX2FPJJAn8KFQ9VRcAtJmjq8stLzMZKnCo7VrHm",
  "J5sMuZhhbw9VncaAFgQ8qERFt6ZaC6WuwtPJJgXmjBrE",
  "2KhAbVGzW1DXMbw1jchyeBUx2bvTWNLdbRJLudKeU8vv",
  "6Wkgg8ouRuGCKLoBcJPvkp9PGKRJFXNnSeCbLr2WuVTb",
];
const SOLCH_TOKEN_MINT = "GnBw4qZs3maF2d5ziQmGzquQFnGV33NUcEujTQ3CbzP3";
const MINIUM_TOKEN_FOR_STAKING = 100;
const VALUT_PDAs = [
  "CimqM67zAaGB12uYnob2zbwA19qhNZeoznKjrYeqcpGp",
  "G5dpyizbvwjEH4kmAuqTMEbyDiY5BqkfyKtjafF662bT",
  "ACCFhpV9mapZWUw4rW1zYQ8rwF3QXuXyzKbqJL8tUBhs",
  "B1Y2QCF4hPakbn7jBF7frBD49HCEQaYNuT9GPDGhjzg3",
  "BZn185VWGaoi3Bmd1wfJSEDxtb8iG4ZdSRJDzCDeW5Z6",
];
export {
  PROGRAM_IDS,
  IDLS,
  VAULT_SEEDS,
  POOL_SEEDS,
  VAULT_TOKEN_ACCOUNTS,
  SOLCH_TOKEN_MINT,
  MINIUM_TOKEN_FOR_STAKING,
};
