/* typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { getImg } from "../../utils/Helper";
import styled, { css } from "styled-components";
import { useConnection, useAnchorWallet } from "@solana/wallet-adapter-react";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "react-modal";
import "./index.css";
import {
  Grid,
  Button,
  FormLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Input,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    titleBrightness: {
      color: theme.palette.text.secondary,
      fontSize: 46,
      lineHeight: "56px",
      fontWeight: 800,
    },
    poolContainer: {
      background: theme.palette.primary.light,
      border: `1px solid ${theme.palette.primary.dark}`,
      // height: 472,
      width: `31%`,
      borderRadius: 10,
      // padding: "10px",
      margin: "10px 10px",
      textAlign: "left",
    },

    poolTitle: {
      marginTop: 28,
      textAlign: "center",
      fontWeight: 600,
      fontSize: 20,
      lineHeight: "33px",
      color: theme.palette.text.secondary,
    },
    detail: {
      width: "100%",
      marginTop: 20,
      display: "flex",
      justifyContent: "space-between",
    },
    leftBox: {
      padding: "0px 50px 0px 0px",
    },
    detailInfo: {
      display: "block",
      marginTop: 10,
    },
    label: {
      display: "block",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "33px",
      color: theme.palette.text.secondary,
    },
    value: {
      fontWeight: 600,
      fontSize: 20,
      lineHeight: "33px",
      color: theme.palette.text.secondary,
    },
    rightBox: {},
    btnStakingController: {
      height: 50,
      borderRadius: 10,
      marginTop: "24px",
      width: "100%",
      background: `linear-gradient(261.78deg, #14F195 -1.89%, #9945FF 99.57%)`,
      fontWeight: 500,
      fontSize: 16,
      lineHeight: "24px 0px 24px",
      textTransform: "none",
      marginBottom: "20px",
    },
    btnClaimDisabled: {
      border: `1px solid rgba(255, 255, 255, 0.3)`,
      height: 50,
      borderRadius: 10,
      marginTop: 24,
      width: "100%",
      color: theme.palette.text.secondary,
      opacity: 0.7,
      fontWeight: 400,
      fontSize: 15,
      lineHeight: "22px",
      textTransform: "none",
    },
    dialogBox: {
      width: 920,
      height: 467,
      borderRadius: 20,
      background: theme.palette.primary.light,
      border: `1px solid ${theme.palette.primary.dark}`,
      margin: "0 auto",
      padding: "38px 183px",
    },
    input: {
      height: 106,
      border: `1px solid ${theme.palette.primary.main}`,
      borderRadius: 10,
      padding: "13px 30px",
      width: 555,
      marginTop: 37,
    },
    inputAmountBox: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: 7,
    },
    inputDesc: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: "33px",
      color: theme.palette.text.primary,
      opacity: 0.7,
    },
    inputAmount: {
      fontSize: 25,
      fontWeight: 600,
      lineHeight: "35px",
      color: theme.palette.text.primary,
    },
    inputUnit: {
      fontSize: 25,
      fontWeight: 600,
      lineHeight: "35px",
      color: theme.palette.text.primary,
    },
    modalTitle: {
      display: "flex",
      justifyContent: "center",
      color: theme.palette.text.secondary,
      fontSize: 24,
      fontWeight: 600,
      lineHeight: `34px`,
    },
    modalDuration: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: "33px",
      marginTop: 29,
      color: theme.palette.text.secondary,
    },
    btnCancel: {
      width: 170,
      height: 50,
      borderRadius: 10,
      border: `1px solid rgba(255, 255, 255, 0.7)`,
      fontSize: 16,
      fontWeight: 500,
      lineHeight: "24px",
      textTransform: "none",
    },
    btnConfirm: {
      width: 170,
      height: 50,
      borderRadius: 10,
      background: `linear-gradient(261.78deg, #14F195 -1.89%, #9945FF 99.57%)`,
      fontSize: 16,
      fontWeight: 500,
      lineHeight: "24px",
      textTransform: "none",
      marginRight: 35,
    },
    btnGroup: {
      marginTop: 60,
      display: "flex",
      justifyContent: "center",
    },
    topborder: {
      height: 10,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      background: theme.palette.info.main,
    },
  })
);

const Cardbody = styled.div`
  border-radius: 10px;
  max-width: 380px;
  width: 100%;
  ${(props: {
    mode: any;
    topColor: any;
    background: any;
    border: any;
    fontColor: any;
    trickyColor: any;
  }) => {
    return css`
      background: ${props.background} !important;
      border: ${props.border};
      ${Cardtopline} {
        background: ${props.topColor};
      }
      ${Smallspan0} {
        color: ${props.trickyColor};
      }
    `;
  }}
`;
const Cardbody_inner = styled.div`
  padding: 18px 30px 25px;
  text-align: left;

  @media (max-width: 345px) {
    padding: 18px 10px 25px;
  }
`;
const Cardtopline = styled.div`
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  width: 100%;
  height: 10px;
  background: rgba(252, 220, 105, 0.7);
`;
const Smallspan0 = styled.span`
  font-weight: 600;
  font-size: 20px;
  line-height: 33px;
  font-family: "Inter";
  font-style: normal;
`;

const PoolComponent = (props: any) => {
  const [isOpen] = useState(false);
  const gotoPage = (url: string) => {
    window.open(url, "_blank");
  };
  const [openModal, setOpenModal] = useState(false);
  const [stakingAmount, setStakingAmount] = useState("0");
  const [poolDuration, setPoolDuration] = useState();
  const classes = useStyles();
  const handleStaking = () => {
    if (props.wallet) {
      setOpenModal(true);
      setPoolDuration(props.lockDuration);
    } else {
      props.wallet.connect();
    }
  };
  const handleUnstaking = () => {
    if (props.wallet) {
      props.unstake(props.type);
    } else {
    }
  };
  const handleClaim = () => {
    if (props.wallet) {
      props.claim(props.type);
    } else {
    }
  };

  const handleMachineClose = () => {
    setOpenModal(false);
  };
  const stake = () => {
    props.stake(props.type, stakingAmount);
  };
  return (
    <div style={{ padding: "0px 9px 40px" }}>
      <Cardbody
        mode={props.mode}
        topColor={props.topColor}
        background={props.background}
        border={props.border}
        fontColor={props.fontColor}
        trickyColor={props.trickyColor}
      >
        <Cardtopline />
        <Cardbody_inner>
          <Grid className={classes.poolTitle}>{props.name}</Grid>
          <Grid className={classes.detail}>
            <Grid className={classes.leftBox}>
              <Grid className={classes.detailInfo}>
                <FormLabel className={classes.label}>
                  Total Token Staked:
                </FormLabel>
                <FormLabel className={classes.value}>
                  $
                  {props.poolInfo[props.type]
                    ? Number(
                        props.poolInfo &&
                          props.poolInfo[props.type]?.amount?.toString()
                      ) /
                        1000000000 +
                      10
                    : 0}
                </FormLabel>
              </Grid>
              <Grid className={classes.detailInfo}>
                <FormLabel className={classes.label}>
                  Min Staking Amount
                </FormLabel>
                <FormLabel className={classes.value}>
                  {props.minStakingAmount}
                </FormLabel>
              </Grid>
              <Grid className={classes.detailInfo}>
                <FormLabel className={classes.label}>Lock Duration</FormLabel>
                <FormLabel className={classes.value}>
                  {props.lockDuration} Days
                </FormLabel>
              </Grid>
            </Grid>
            <Grid className={classes.rightBox}>
              <Grid className={classes.detailInfo}>
                <FormLabel className={classes.label}>Deposit Fee</FormLabel>
                <FormLabel className={classes.value}>
                  ${props.depositeFee}
                </FormLabel>
              </Grid>
              <Grid className={classes.detailInfo}>
                <FormLabel className={classes.label}>APY</FormLabel>
                <FormLabel className={classes.value}>{props.apy}</FormLabel>
              </Grid>
              <Grid className={classes.detailInfo}>
                <FormLabel className={classes.label}>SOLCH Earned</FormLabel>
                <FormLabel className={classes.value}>
                  {props.poolInfo[props.type]
                    ? (Number(props.poolInfo[props.type].amount) * 0.05) /
                      1000000000
                    : 0}
                </FormLabel>
              </Grid>
            </Grid>
          </Grid>
          <Button
            className={classes.btnClaimDisabled}
            onClick={() => {
              handleClaim();
            }}
            disabled={!props.poolInfo || !props.poolInfo[props.type]?.isStake}
          >
            Claim Rewards
          </Button>
          {props.poolInfo && props.poolInfo[props.type]?.isStake ? (
            <Button
              className={classes.btnStakingController}
              onClick={() => {
                handleUnstaking();
              }}
            >
              {props.wallet ? `Unstake` : `Connect Wallet`}
            </Button>
          ) : (
            <Button
              className={classes.btnStakingController}
              onClick={() => {
                handleStaking();
              }}
            >
              {props.wallet ? `Stake Now` : `Connect Wallet`}
            </Button>
          )}
          <Modal
            isOpen={openModal}
            onRequestClose={handleMachineClose}
            className="mymodal"
            overlayClassName="myoverlay"
          >
            <div className={classes.dialogBox}>
              <Grid className={classes.modalTitle}>Stake</Grid>
              <Grid className={classes.input}>
                <Grid className={classes.inputDesc}>Enter amount</Grid>
                <Grid className={classes.inputAmountBox}>
                  <Input
                    disableUnderline
                    className={classes.inputAmount}
                    value={stakingAmount}
                    onChange={(e: any) => {
                      if (parseInt(e.target.value) || e.target.value == "") {
                        setStakingAmount(e.target.value);
                      }
                    }}
                  />
                  <FormLabel className={classes.inputUnit}>SOLCH</FormLabel>
                </Grid>
              </Grid>
              <Grid
                className={classes.modalDuration}
              >{`Moon Cash Lock duration: ${poolDuration}D`}</Grid>
              <DialogActions className={classes.btnGroup}>
                <Button onClick={() => stake()} className={classes.btnConfirm}>
                  Confirm
                </Button>
                <Button
                  onClick={handleMachineClose}
                  className={classes.btnCancel}
                >
                  Cancel
                </Button>
              </DialogActions>
            </div>
          </Modal>
        </Cardbody_inner>
      </Cardbody>
    </div>
  );
};

export default PoolComponent;
