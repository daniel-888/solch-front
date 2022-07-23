/* typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { getImg } from "../../utils/Helper";
import styled from "styled-components";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import "./index.css";
import { Grid, Button, FormLabel, Link } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    titleBrightness: {
      color: theme.palette.text.secondary,
      fontSize: 46,
      lineHeight: "56px",
      fontWeight: 800,
    },
    subtitleBrightness: {
      color: theme.palette.text.secondary,
      fontSize: 40,
      lineHeight: "56px",
      fontWeight: 400,
    },
    projectDesc: {
      color: theme.palette.text.primary,
      opacity: 0.7,
      fontWeight: 400,
      fontSize: 16,
      marginTop: 36,
    },
    btnGroup: {
      marginTop: 43,
    },
    btnCertik: {
      width: 170,
      height: 67,
      borderRadius: 10,
      color: theme.palette.text.primary,
      fontSize: 17,
      fontWeight: 500,
    },
    btnLite: {
      width: 170,
      height: 67,
      borderRadius: 10,
      fontSize: 17,
      fontWeight: 500,
      border: `2px solid ${theme.palette.text.primary}`,
      marginLeft: 34,
    },
    statsGroup: {
      marginTop: 105,
    },
    statsBox: {
      maxWidth: 441,
      width: "100%",
      // height: 145,
      borderRadius: 20,
      border: `1px solid ${theme.palette.primary.main}`,
      background: `${theme.palette.background.paper}`,
      marginLeft: 33,
      // display: `flex`,
      // justifyContent: `center`,
      alignItems: `center`,
    },
    builtOn: {
      marginTop: 112,
    },
    textBuiltOn: {
      color: theme.palette.text.primary,
      opacity: 0.7,
      marginRight: 5,
    },
    textSolana: {
      fontWeight: 800,
      color: theme.palette.text.primary,
    },
    socialDesc: {
      marginTop: 150,
      color: theme.palette.text.primary,
      fontSize: 15,
      fontWeight: 500,
    },
    btnSocial: {
      width: 193,
      height: 50,
      border: `1px solid rgba(255, 255, 255, 0.2)`,
      borderRadius: 10,
      marginRight: 40,
    },
    socialBtnGroup: {
      marginTop: 15,
    },
    homepageButtonIcon: {
      marginRight: "20px",
    },
    spacer: {
      padding: "20px 0px 0px",
    },
    strong: {
      fontSize: "22px",
    },
  })
);

const MainStats = (props: any) => {
  const [isOpen] = useState(false);
  const gotoPage = (url: string) => {
    window.open(url, "_blank");
  };
  const classes = useStyles();
  return (
    <Grid className={"stats-container "}>
      <Grid className={`margin-center ${classes.titleBrightness}`}>
        Earn Rewards By Staking Solana Cach
      </Grid>
      <Grid className={`margin-center ${classes.subtitleBrightness}`}>
        (SOLCH)
      </Grid>
      <Grid className={`margin-center ${classes.projectDesc}`}>
        First Decentralized p2P Payment System deployed on Solana Network{" "}
      </Grid>
      <Grid className={`margin-center ${classes.btnGroup}`}>
        <Button className={`btn-background ${classes.btnCertik}`}>
          Certik Audit
        </Button>
        <Button className={`${classes.btnLite}`}>Lite Paper</Button>
      </Grid>
      <Grid className={`margin-center ${classes.statsGroup}`}>
        <div className={classes.statsBox}>
          <div className={classes.spacer}></div>
          <div>
            <FormLabel>TOTAL VALUE LOCKED</FormLabel>
          </div>
          <div className={classes.spacer}></div>
          <div>
            <FormLabel>
              <strong className={classes.strong}>
                $ {Number(props.totalbalance).toFixed(2)}
              </strong>
            </FormLabel>
          </div>
          <div className={classes.spacer}></div>
        </div>
        <div className={classes.statsBox}>
          <div className={classes.spacer}></div>
          <div>
            <FormLabel>TOTAL TRADING VOLUME</FormLabel>
          </div>
          <div className={classes.spacer}></div>
          <div>
            <FormLabel>
              <strong className={classes.strong}>$ 0</strong>
            </FormLabel>
          </div>
          <div className={classes.spacer}></div>
        </div>
      </Grid>
      <Grid className={`margin-center ${classes.builtOn}`}>
        <FormLabel className={`${classes.textBuiltOn}`}>Built on</FormLabel>
        <Link className={`${classes.textSolana}`}>SOLANA</Link>
      </Grid>
      <Grid className={`margin-center ${classes.socialDesc}`}>
        Follow us on our social media for more info
      </Grid>
      <Grid className={`margin-center ${classes.socialBtnGroup}`}>
        <Grid item>
          <Button className={`btn-background ${classes.btnSocial}`}>
            <img
              src="vector.png"
              width="22.08"
              height="22.08"
              className={classes.homepageButtonIcon}
            ></img>
            Telegram
          </Button>
        </Grid>
        <Grid item>
          <Button className={`btn-background ${classes.btnSocial}`}>
            <img
              src="Frame.png"
              width="22.08"
              height="22.08"
              className={classes.homepageButtonIcon}
            ></img>
            Twitter
          </Button>
        </Grid>
        <Grid item>
          <Button className={`btn-background ${classes.btnSocial}`}>
            <img
              src="instagram(2) 3.png"
              width="22.08"
              height="22.08"
              className={classes.homepageButtonIcon}
            ></img>
            Instagram
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainStats;
