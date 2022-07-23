import * as React from "react";
import { useState } from "react";
import styled, { css } from "styled-components";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { styled as styledmui, Button } from "@mui/material";
import MyModal from "./Modal";

// import { MyButton, Spanskeleton } from "./StyledComponents";
export const Spanskeleton = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 46px;
  line-height: 56px;
  color: black;
`;
export const MyButton = styled(Button)`
  background: linear-gradient(261.78deg, #14f195 -1.89%, #9945ff 99.57%);
  border-radius: 10px !important;
  text-transform: capitalize !important;
  margin: 0 auto !important;
  font-size: 17px;
  color: white !important;

  @media (max-width: 768px) {
    margin-bottom: 20px !important;
  }
`;

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
  text-align: center;

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
const MyButton0 = styled(MyButton)`
  max-width: 330px;
  width: 100%;
  height: 50px;
`;
const Headspan = styled(Spanskeleton)`
  font-weight: 600;
  font-size: 20px;
  line-height: 33px;
`;
const Smallspan = styled(Spanskeleton)`
  font-weight: 400;
  font-size: 14px;
  line-height: 33px;
  @media (max-width: 374px) {
    font-size: 10px;
  }
`;
const Smallspan0 = styled.span`
  font-weight: 600;
  font-size: 20px;
  line-height: 33px;
  font-family: "Inter";
  font-style: normal;
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      top: "calc(50% - 200px)",
      podition: "fixed",
    },
  })
);

const PoolComponent = (props: any) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleopen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [isOpen] = useState(false);
  const gotoPage = (url: string) => {
    window.open(url, "_blank");
  };
  const [openModal, setOpenModal] = useState(false);
  const [stakingAmount, setStakingAmount] = useState("0");
  const [poolDuration, setPoolDuration] = useState();
  // const classes = useStyles();
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
          <Headspan>Cash Pot</Headspan>
          <div style={{ padding: "21px 0px 0px" }}></div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "140px", height: "27px", display: "flex" }}>
              <Smallspan>Total Token Staked:</Smallspan>
            </div>
            <div style={{ width: "105px", height: "27px", display: "flex" }}>
              <Smallspan>Deposit Fee</Smallspan>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "140px", height: "27px", display: "flex" }}>
              <Smallspan0>
                $
                {props.poolInfo[props.type]
                  ? Number(
                      props.poolInfo &&
                        props.poolInfo[props.type]?.amount?.toString()
                    ) /
                      1000000000 +
                    10
                  : 0}
              </Smallspan0>
            </div>
            <div style={{ width: "105px", height: "27px", display: "flex" }}>
              <Smallspan0>${props.depositeFee}</Smallspan0>
            </div>
          </div>

          <div style={{ padding: "10px 0px 0px" }}></div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "140px", height: "27px", display: "flex" }}>
              <Smallspan>Min Staking Amount</Smallspan>
            </div>
            <div style={{ width: "105px", height: "27px", display: "flex" }}>
              <Smallspan>APY</Smallspan>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "140px", height: "27px", display: "flex" }}>
              <Smallspan0>{props.minStakingAmount}</Smallspan0>
            </div>
            <div style={{ width: "105px", height: "27px", display: "flex" }}>
              <Smallspan0>{props.apy}</Smallspan0>
            </div>
          </div>

          <div style={{ padding: "10px 0px 0px" }}></div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "140px", height: "27px", display: "flex" }}>
              <Smallspan>Lock Duration</Smallspan>
            </div>
            <div style={{ width: "105px", height: "27px", display: "flex" }}>
              <Smallspan>SOLCH Earned</Smallspan>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "140px", height: "27px", display: "flex" }}>
              <Smallspan0>{props.lockDuration} Days</Smallspan0>
            </div>
            <div style={{ width: "105px", height: "27px", display: "flex" }}>
              <Smallspan0>
                {props.poolInfo[props.type]
                  ? (Number(props.poolInfo[props.type].amount) * 0.05) /
                    1000000000
                  : 0}
              </Smallspan0>
            </div>
          </div>
          <div style={{ padding: "25px 0px 0px" }}></div>

          <MyButton0
            onClick={() => {
              handleClaim();
            }}
            disabled={!props.poolInfo || !props.poolInfo[props.type]?.isStake}
          >
            Claim Rewards
          </MyButton0>
          <div style={{ padding: "24px 0px 0px" }}></div>
          {props.poolInfo && props.poolInfo[props.type]?.isStake ? (
            <MyButton0 onClick={handleUnstaking}>{"UnStake"}</MyButton0>
          ) : (
            <MyButton0 onClick={handleopen}>{"Stake"}</MyButton0>
          )}
        </Cardbody_inner>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <MyModal mode={props.mode} stake={stake} close={handleClose} />
          </Fade>
        </Modal>
      </Cardbody>
    </div>
  );
};
export default PoolComponent;
