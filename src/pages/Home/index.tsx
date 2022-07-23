/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as anchor from "@project-serum/anchor";
import styled from "styled-components";
import { useConnection, useAnchorWallet } from "@solana/wallet-adapter-react";
import {
  PublicKey,
  SystemProgram,
  Keypair,
  SYSVAR_RENT_PUBKEY,
} from "@solana/web3.js";

import axios from "axios";

import {
  makeStyles,
  Theme,
  useTheme,
  createStyles,
} from "@material-ui/core/styles";
import { green } from "@mui/material/colors";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Alert from "@material-ui/lab/Alert";
import { Snackbar } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CircularProgress from "@material-ui/core/CircularProgress";
// import CircularProgress from "@mui/material/CircularProgress";
import SearchIcon from "@material-ui/icons/Search";
import AssignmentTurnedIn from "@material-ui/icons/AssignmentTurnedIn";
import { InputLabel } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { useToasts } from "react-toast-notifications";
import { AccountLayout, Token, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Header from "../../components/Header";
import MainStats from "../../components/MainStats";
import RewardCalculator from "../../components/RewardCalculator";
import PoolGroups from "../../components/PoolGroups";
import LeaderBoard from "../../components/LeaderBoard";
import Table from "../../components/Table";
import Footer from "../../components/Footer";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { SolanaClient, SolanaClientProps } from "../../helpers/sol";
import {
  COMMITMENT,
  CLUSTER_API,
  CONFIG,
  POOL_SIGNER_SEEDS,
  VAULT_PDA_SEEDS,
  DECIMAL,
  POOL_DATA_SEEDS,
} from "../../config/index";
import "./index.css";
import {
  getAccountInfo,
  getBlockTime,
  getRecentBlockHash,
  getTokenAccountByOwner,
} from "../../api/api";
import { sendTransactions } from "../../helpers/sol/connection";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { getImg } from "../../utils/Helper";
import { useSelector, useDispatch } from "react-redux";
import {
  PROGRAM_IDS,
  IDLS,
  VAULT_SEEDS,
  POOL_SEEDS,
  VAULT_TOKEN_ACCOUNTS,
  SOLCH_TOKEN_MINT,
  MINIUM_TOKEN_FOR_STAKING,
} from "../../constants";
import { Pool } from "@material-ui/icons";
interface NFTInfo {
  name: string;
  imageUrl: string;
  mint: PublicKey;
  updateAuthority: PublicKey;
  tokenType: Number;
  canClaim: Boolean;
  daysPassed: Number;
  current: Number;
  rewardATA: String;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: theme.palette.background.default,
      paddingTop: 19,
      width: "100%",
    },
    innerboard: {
      maxWidth: "1255px",
      width: "100%",
      margin: "0 auto",
      textAlign: "center",
    },
    spacer: {
      padding: "50px 0px 50px",
    },
  })
);

const HomePage = (props: any) => {
  const wallet = useAnchorWallet();
  const classes = useStyles(props);
  const { connection } = useConnection();
  const { addToast } = useToasts();
  const [leaderBoard, setLeaderBoard] = useState([]);
  const theme = useSelector((state: any) => state.theme.mode);

  const solanaClient = new SolanaClient({
    rpcEndpoint: CLUSTER_API,
  } as SolanaClientProps);
  const [loading, setLoading] = useState(false);
  const [walletNfts, setWalletNfts] = useState<any[]>([]);
  const [stakedNfts, setStakedNfts] = useState<any[]>([]);
  const [loadingText, setLoadingText] = useState("");
  const [walletBalance, setWalletBalance] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);
  const [intervalId, setIntervalId] = useState(0);
  const [totalStakedNft, setTotalStakedNft] = useState(0);
  const [splTokenPerDay, setSplTokenPerDay] = useState(0);

  const appName: any = "punky";
  const CONSTANTS: any = CONFIG;
  const PROGRAM_ID = CONSTANTS[appName].PROGRAM_ID;
  const REWARD_TOKEN_ACCOUNT = CONSTANTS[appName].REWARD_TOKEN_ACCOUNT;
  const INTERVAL = CONSTANTS[appName].INTERVAL;
  const DAYTIME = CONSTANTS[appName].DAYTIME;
  const LIFETIME = CONSTANTS[appName].LIFETIME;
  const [poolBalances, setPoolBalances] = useState<any>([]);
  const [poolInfos, setPoolInfos] = useState<any>([]);
  const [walletTokenAccount, setWalletTokenAccount] = useState("");
  const [isChangeTheme, setIsChangeTheme] = useState(false);
  useEffect(() => {
    (async () => {
      if (wallet && !isChangeTheme) {
        console.log("Reloading: -----------------------------");
        setLoading(true);
        setLoadingText("Loading...");
        await getWalletBalance();
        await getStakedInfo();
        setIsChangeTheme(true);
        setLoading(false);
      }
    })();
  }, [wallet]);

  const getWalletBalance = async () => {
    if (wallet) {
      const result: any = await getTokenAccountByOwner(
        wallet!.publicKey.toString(),
        SOLCH_TOKEN_MINT
      );
      if (result?.result?.value) {
        const { value } = result.result;
        if (value?.length > 0) {
          let totalBalance = 0;
          value.forEach((v: any) => {
            totalBalance +=
              v.account?.data?.parsed?.info?.tokenAmount?.uiAmount;
          });
          setWalletBalance(totalBalance);
          setWalletTokenAccount(value[0].pubkey);
        }
      }
    }
  };
  const getStakedInfo = async () => {
    axios
      .get("http://192.168.104.143:5000/get-staking-info")
      .then((response) => {
        const dur = [7, 30, 90, 180, 365];
        let data = response.data.stakedInfo;
        let leaderdata: any = [];
        if (data) {
          data.map((item: any, index: any) => {
            leaderdata.push({
              username: item.user,
              amount: item.amount * 0.05,
              duration: dur[item.pool_type],
            });
          });
          setLeaderBoard(leaderdata);
        }
      });

    let poolBalanceArray = [];
    let poolInfoArray = [];
    let totalbal = 0;
    for (let i = 0; i < PROGRAM_IDS.length; i++) {
      try {
        const provider = getProvider();
        const program = new anchor.Program(
          IDLS[i],
          new PublicKey(PROGRAM_IDS[i]),
          provider
        );
        let [vaultAdrr, _bump_vault] =
          await anchor.web3.PublicKey.findProgramAddress(
            [Buffer.from(VAULT_SEEDS)],
            new PublicKey(program.programId)
          );
        let poolBalance = 0;
        const result: any = await getTokenAccountByOwner(
          vaultAdrr.toString(),
          SOLCH_TOKEN_MINT
        );
        if (result?.result?.value) {
          const { value } = result.result;
          if (value?.length > 0) {
            value.forEach((v: any) => {
              poolBalance +=
                v.account?.data?.parsed?.info?.tokenAmount?.uiAmount;
            });
          }
        }
        poolBalanceArray.push(poolBalance);
        totalbal += poolBalance;
        let [poolAddr, _bump_pool] =
          await anchor.web3.PublicKey.findProgramAddress(
            [Buffer.from(POOL_SEEDS), wallet!.publicKey.toBuffer()],
            new PublicKey(program.programId)
          );
        const poolInfo = await program.account.pool.fetch(poolAddr);
        if (poolInfo) {
          poolInfoArray.push(poolInfo);
        } else {
          poolInfoArray.push([]);
        }
      } catch {}
    }
    setPoolBalances(poolBalanceArray);
    setTotalBalance(totalbal);
    setPoolInfos(poolInfoArray);
  };

  // for actions such as staking, claiming, unstaking //
  const onStake = async (type: number, amount: number) => {
    if (walletBalance < MINIUM_TOKEN_FOR_STAKING) {
      addToast("Insufficient token", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }
    setLoading(true);
    setLoadingText("Staking...");

    const provider = getProvider();
    const program = new anchor.Program(
      IDLS[type],
      new PublicKey(PROGRAM_IDS[type]),
      provider
    );

    try {
      if (!wallet) {
        addToast("Connect your wallet!", {
          appearance: "warning",
          autoDismiss: true,
        });
        setLoading(false);
        return;
      }

      let instructionSet = [],
        signerSet = [];
      let transaction = [];
      let signers: any = [];

      let [pool, nonce_pool] = await anchor.web3.PublicKey.findProgramAddress(
        [Buffer.from(POOL_SEEDS), wallet!.publicKey.toBuffer()],
        program.programId
      );
      const poolResultInfo = await getAccountInfo(pool.toString());
      if (!poolResultInfo.result.value) {
        const instruction = program.instruction.createPool(nonce_pool, {
          accounts: {
            pool: pool,
            user: wallet.publicKey,
            systemProgram: SystemProgram.programId,
          },
        });
        transaction.push(instruction);
      }
      let newStakeTx: any = await makeStakeTx(program, pool, amount, type);
      if (newStakeTx.transaction?.length !== 0) {
        transaction = [...transaction, ...newStakeTx.transaction];
        signers = [...signers, ...newStakeTx.signers];
      }
      instructionSet.push(transaction);
      signerSet.push(signers);
      window.clearInterval(intervalId);

      let tx = await sendTransactions(
        connection,
        wallet,
        instructionSet,
        signerSet
      );
      if (tx) {
        let res = await axios.post(
          "http://192.168.104.143:5000/set-staking-info",
          {
            pool_type: type,
            user: wallet.publicKey.toString(),
            amount,
          }
        );
      }
      // let totalStakedNFT = totalStakedNft + 1;
      // setTotalStakedNft(totalStakedNFT);

      // let totalBalance = walletBalance - MINIUM_TOKEN_FOR_STAKING;
      // setWalletBalance(totalBalance);

      // let updatedWalletNfts = walletNfts.filter(walletNft => walletNft.mint !== nft.mint);
      // setWalletNfts(updatedWalletNfts);
      // setStakedNfts([...stakedNfts, nft]);
      await getStakedInfo();

      addToast("Staking success!", {
        appearance: "success",
        autoDismiss: true,
      });
      setLoading(false);
    } catch (error) {
      addToast("Staking failed!", {
        appearance: "error",
        autoDismiss: true,
      });
      setLoading(false);
      return;
    }
  };

  const onClaim = async (type: number) => {
    try {
      setLoading(true);
      setLoadingText("Claiming...");
      if (!wallet) {
        addToast("Connect your wallet!", {
          appearance: "warning",
          autoDismiss: true,
        });
        setLoading(false);
        return;
      }

      let instructionSet: any = [];
      let signerSet: any = [];
      let tokenResult = await getTokenAccountByOwner(
        wallet.publicKey.toString(),
        SOLCH_TOKEN_MINT
      );
      let result = tokenResult.result.value;
      if (result.err) {
        addToast("Claiming failed!", {
          appearance: "error",
          autoDismiss: true,
        });
        setLoading(false);
        return;
      }
      const provider = getProvider();
      const program = new anchor.Program(
        IDLS[type],
        new PublicKey(PROGRAM_IDS[type]),
        provider
      );

      let [pool, nonce_pool] = await anchor.web3.PublicKey.findProgramAddress(
        [Buffer.from(POOL_SEEDS), wallet!.publicKey.toBuffer()],
        program.programId
      );

      let [vault, nonce_vault] = await anchor.web3.PublicKey.findProgramAddress(
        [Buffer.from(VAULT_SEEDS)],
        program.programId
      );

      let instruction = program.instruction.claim(nonce_vault, {
        accounts: {
          vault,
          pool,
          user: wallet.publicKey,
          from: new PublicKey(VAULT_TOKEN_ACCOUNTS[type]),
          to: new PublicKey(walletTokenAccount),
          tokenProgram: TOKEN_PROGRAM_ID,
        },
      });

      await sendTransactions(connection, wallet, [[instruction]], [[]]);

      await getStakedInfo();

      addToast("Claiming success!", {
        appearance: "success",
        autoDismiss: true,
      });
      setLoading(false);
    } catch (error) {
      addToast("Claiming failed!", {
        appearance: "error",
        autoDismiss: true,
      });
      setLoading(false);
    }
  };

  const onUnstake = async (type: number) => {
    try {
      setLoading(true);
      setLoadingText("Claiming...");
      if (!wallet) {
        addToast("Connect your wallet!", {
          appearance: "warning",
          autoDismiss: true,
        });
        setLoading(false);
        return;
      }

      let instructionSet: any = [];
      let signerSet: any = [];
      let tokenResult = await getTokenAccountByOwner(
        wallet.publicKey.toString(),
        SOLCH_TOKEN_MINT
      );
      let result = tokenResult.result.value;
      if (result.err) {
        addToast("Claiming failed!", {
          appearance: "error",
          autoDismiss: true,
        });
        setLoading(false);
        return;
      }
      const provider = getProvider();
      const program = new anchor.Program(
        IDLS[type],
        new PublicKey(PROGRAM_IDS[type]),
        provider
      );

      let [pool, nonce_pool] = await anchor.web3.PublicKey.findProgramAddress(
        [Buffer.from(POOL_SEEDS), wallet!.publicKey.toBuffer()],
        program.programId
      );

      let [vault, nonce_vault] = await anchor.web3.PublicKey.findProgramAddress(
        [Buffer.from(VAULT_SEEDS)],
        program.programId
      );

      let instruction = program.instruction.unstake(nonce_vault, {
        accounts: {
          vault,
          pool,
          user: wallet.publicKey,
          from: new PublicKey(VAULT_TOKEN_ACCOUNTS[type]),
          to: new PublicKey(walletTokenAccount),
          tokenProgram: TOKEN_PROGRAM_ID,
        },
      });

      await sendTransactions(connection, wallet, [[instruction]], [[]]);

      await getStakedInfo();
      addToast("Claiming success!", {
        appearance: "success",
        autoDismiss: true,
      });
      setLoading(false);
    } catch (error) {
      addToast("Claiming failed!", {
        appearance: "error",
        autoDismiss: true,
      });
      setLoading(false);
    }
  };

  const getProvider = () => {
    if (wallet)
      return new anchor.Provider(
        connection,
        wallet as anchor.Wallet,
        COMMITMENT as anchor.web3.ConfirmOptions
      );
  };

  const makeStakeTx = async (
    program: anchor.Program<any>,
    pool: PublicKey,
    amount: number,
    type: number
  ) => {
    let transaction: any = [];
    let signers: any[] = [];
    if (!wallet) return;
    transaction.push(
      program.instruction.stake(amount, {
        accounts: {
          user: wallet.publicKey,
          pool: pool,
          from: new PublicKey(walletTokenAccount),
          to: new PublicKey(VAULT_TOKEN_ACCOUNTS[type]),
          tokenProgram: TOKEN_PROGRAM_ID,
        },
        signers,
      })
    );
    return { transaction, signers };
  };
  // const leaderBoard = [
  //   {
  //     name: "Admin",
  //     duration: 90,
  //     amount: 300,
  //   },
  //   {
  //     name: "Admin",
  //     duration: 90,
  //     amount: 300,
  //   },
  //   {
  //     name: "Admin",
  //     duration: 90,
  //     amount: 300,
  //   },
  //   {
  //     name: "Admin",
  //     duration: 90,
  //     amount: 300,
  //   },
  //   {
  //     name: "Admin",
  //     duration: 90,
  //     amount: 300,
  //   },
  //   {
  //     name: "Admin",
  //     duration: 90,
  //     amount: 300,
  //   },
  // ];
  return (
    <div className={classes.root}>
      {loading && (
        <div className="bg_fixed">
          <div className="bg_loading"></div>
          <div className="active_loading">
            <CircularProgress />
          </div>
        </div>
      )}
      <div className={classes.innerboard}>
        <Header wallet={wallet} />
        <MainStats wallet={wallet} totalbalance={totalBalance} />
        <Grid container>
          <Grid item md={12}>
            <RewardCalculator wallet={wallet} apys={[5, 10, 15, 20, 25]} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={12}>
            <PoolGroups
              wallet={wallet}
              stake={onStake}
              claim={onClaim}
              unstake={onUnstake}
              apys={[5, 10, 15, 20, 25]}
              poolInfo={poolInfos}
              mode={theme === "dark" ? "night" : "day"}
            />
          </Grid>
        </Grid>
        <div className={classes.spacer}></div>
        <Table
          mode={theme === "dark" ? "night" : "day"}
          data={leaderBoard}
          wallet={wallet}
        ></Table>
        <div className={classes.spacer}></div>
      </div>
      <Footer mode={theme === "dark" ? "night" : "day"}></Footer>
    </div>
  );
};
export default HomePage;
