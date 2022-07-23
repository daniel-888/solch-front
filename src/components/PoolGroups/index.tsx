/* typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { getImg } from "../../utils/Helper";
import styled from "styled-components";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import PoolComponent from "../PoolComponent";
import "./index.css";
import { Grid, Button, FormLabel, Link, Input } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    titleBrightness: {
      color: theme.palette.text.secondary,
      fontSize: 46,
      lineHeight: "56px",
      fontWeight: 800,
    },
    groupContainer: {
      maxWidth: "1255px",
      width: "100%",
      background: theme.palette.background.paper,
      marginTop: 150,
      border: `1px solid ${theme.palette.primary.main}`,
      // height: 1195,
      borderRadius: 20,
      padding: "0 5%",
    },
    groupTitle: {
      display: "flex",
      justifyContent: "center",
      color: theme.palette.text.secondary,
      fontSize: 24,
      fontWeight: 600,
      lineHeight: `34px`,
      marginTop: 49,
    },
    group1: {
      display: "flex",
      justifyContent: "center",
      marginTop: 57,
      // margin: "0 auto",
      flexWrap: "wrap",
    },
    group2: {
      display: "flex",
      justifyContent: "center",
      marginTop: 40,
    },
  })
);

const PoolGroups = (props: any) => {
  const [isOpen] = useState(false);
  const gotoPage = (url: string) => {
    window.open(url, "_blank");
  };
  const classes = useStyles();
  return (
    <div className={`${classes.groupContainer}`}>
      <div className={`${classes.groupTitle}`}>Staking Pools</div>
      <div className={`${classes.group1}`}>
        <PoolComponent
          name={"Lite Cash"}
          type={0}
          lockDuration={7}
          depositeFee={10}
          minStakingAmount={100}
          apy={props.apys[0]}
          wallet={props.wallet}
          stake={props.stake}
          claim={props.claim}
          unstake={props.unstake}
          poolInfo={props.poolInfo}
          mode={props.mode}
          background={props.mode === "day" ? "#FFFFFF;" : "#1E1E1E;"}
          topColor={props.mode === "day" ? "white;" : "#1E1E1E;"}
          border={
            props.mode === "day"
              ? "1px solid rgba(0, 0, 0, 0.2);"
              : "1px solid rgba(255, 255, 255, 0.7);"
          }
          fontColor={props.mode === "day" ? "black;" : "white;"}
          trickyColor={props.mode === "day" ? "black;" : "white;"}
        />
        <PoolComponent
          name={"Stack Cash"}
          type={1}
          lockDuration={30}
          depositeFee={10}
          minStakingAmount={100}
          apy={props.apys[1]}
          wallet={props.wallet}
          stake={props.stake}
          claim={props.claim}
          unstake={props.unstake}
          poolInfo={props.poolInfo}
          mode={props.mode}
          background={props.mode === "day" ? "#FFFFFF;" : "#1E1E1E;"}
          topColor={props.mode === "day" ? "white;" : "#1E1E1E;"}
          border={
            props.mode === "day"
              ? "1px solid rgba(0, 0, 0, 0.2);"
              : "1px solid rgba(255, 255, 255, 0.7);"
          }
          fontColor={props.mode === "day" ? "black;" : "white;"}
          trickyColor={props.mode === "day" ? "black;" : "white;"}
        />
        <PoolComponent
          name={"Cash Pot"}
          type={2}
          lockDuration={90}
          depositeFee={10}
          minStakingAmount={100}
          apy={props.apys[2]}
          wallet={props.wallet}
          stake={props.stake}
          claim={props.claim}
          unstake={props.unstake}
          poolInfo={props.poolInfo}
          mode={props.mode}
          background={
            props.mode === "day"
              ? "linear-gradient(180deg, rgba(219, 166, 86, 0.1) 0%, rgba(255, 255, 255, 0) 50.11%, rgba(254, 240, 190, 0.0435921) 100%), #f4f7fe;"
              : "linear-gradient(180deg, rgba(219, 166, 86, 0.1) 0%, rgba(255, 255, 255, 0) 50.11%, rgba(254, 240, 190, 0.0435921) 100%), #1e1e1e"
          }
          topColor={
            props.mode === "day"
              ? "rgba(219, 166, 86, 0.7);"
              : "rgba(219, 166, 86, 0.7);"
          }
          border={
            props.mode === "day" ? "1px solid #DBA656;" : "1px solid #DBA656;"
          }
          fontColor={props.mode === "day" ? "black;" : "white;"}
          trickyColor={"#dba656;"}
        />
        <PoolComponent
          name={"Cash King"}
          type={3}
          lockDuration={180}
          depositeFee={10}
          minStakingAmount={100}
          apy={props.apys[3]}
          wallet={props.wallet}
          stake={props.stake}
          claim={props.claim}
          unstake={props.unstake}
          poolInfo={props.poolInfo}
          mode={props.mode}
          background={
            props.mode === "day"
              ? "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 50.11%, rgba(254, 240, 190, 0.0435921) 100%), #FFFFFF;"
              : "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 50.11%, rgba(254, 240, 190, 0.0435921) 100%), #1E1E1E;"
          }
          topColor={
            props.mode === "day"
              ? "rgba(0, 0, 0, 0.7);"
              : "rgba(255, 255, 255, 0.7);"
          }
          border={
            props.mode === "day"
              ? "1px solid rgba(0, 0, 0, 0.2);"
              : "1px solid #FFFFFF;"
          }
          fontColor={props.mode === "day" ? "black;" : "white;"}
          trickyColor={props.mode === "day" ? "black;" : "white;"}
        />
        <PoolComponent
          name={"Moon Cash"}
          type={4}
          lockDuration={365}
          depositeFee={10}
          minStakingAmount={100}
          apy={props.apys[4]}
          wallet={props.wallet}
          stake={props.stake}
          claim={props.claim}
          unstake={props.unstake}
          poolInfo={props.poolInfo}
          mode={props.mode}
          background={
            props.mode === "day"
              ? "linear-gradient(180deg, rgba(219, 166, 86, 0.1) 0%, rgba(255, 255, 255, 0) 50.11%, rgba(254, 240, 190, 0.0435921) 100%), #f4f7fe;"
              : "linear-gradient(180deg, rgba(252, 220, 105, 0.1) 0%, rgba(255, 255, 255, 0) 50.11%, rgba(254, 240, 190, 0.0435921) 100%), #1E1E1E;"
          }
          topColor={
            props.mode === "day"
              ? "rgba(252, 220, 105, 0.7);"
              : "rgba(252, 220, 105, 0.7);"
          }
          border={
            props.mode === "day" ? "1px solid #DBA656;" : "1px solid #DBA656;"
          }
          fontColor={props.mode === "day" ? "black;" : "white;"}
          trickyColor={"#DBA656;"}
        />
      </div>
    </div>
  );
};

export default PoolGroups;
