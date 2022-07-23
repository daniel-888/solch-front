/* typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getImg } from "../../utils/Helper";
import styled from "styled-components";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import "./index.css";
import { Grid, Button, FormLabel, Link, Input } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { callbackify } from "util";
import { SettingsInputComponentSharp } from "@material-ui/icons";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    titleBrightness: {
      color: theme.palette.text.secondary,
      fontSize: 46,
      lineHeight: "56px",
      fontWeight: 800,
    },
    calcContainer: {
      background: theme.palette.background.paper,
      marginTop: 150,
      border: `1px solid ${theme.palette.primary.main}`,
      height: 697,
      borderRadius: 20,
    },
    calcTitle: {
      display: "flex",
      justifyContent: "center",
      color: theme.palette.text.secondary,
      fontSize: 24,
      fontWeight: 600,
      lineHeight: `34px`,
      marginTop: 49,
    },
    calcDesc: {
      display: "flex",
      justifyContent: "center",
      color: theme.palette.text.primary,
      opacity: 0.7,
      fontSize: 14,
      fontWeight: 400,
      lineHeight: `33px`,
    },
    calcDiv: {
      background: theme.palette.primary.light,
      marginTop: 60,
      border: `1px solid ${theme.palette.primary.dark}`,
      height: 466,
      width: `72%`,
      borderRadius: 20,
      marginLeft: `14%`,
      padding: "34px 14%",
    },
    input: {
      height: 116,
      border: `1px solid ${theme.palette.primary.main}`,
      borderRadius: 10,
      padding: "13px 30px",
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
      textAlign: "left",
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
    btnGroup: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: 20,
    },
    btn: {
      width: "18%",
      height: 50,
      borderRadius: 10,
      border: `1px solid #22E0A0`,
      boxSizing: "border-box",
      color: theme.palette.text.primary,
      opacity: 0.7,
      fontWeight: 500,
      fontSize: 16,
      lineHeight: "33px",
    },
    btnActive: {
      width: "18%",
      height: 50,
      borderRadius: 10,
      boxSizing: "border-box",
      color: "#ffffff",
      fontWeight: 500,
      fontSize: 16,
      background: `linear-gradient(261.78deg, #14F195 -1.89%, #9945FF 99.57%)`,
      lineHeight: "33px",
    },
    resultBox: {
      marginTop: 28,
      border: `1px solid #22E0A0`,
      borderRadius: 10,
      boxSizing: "border-box",
      height: 136,
      padding: "13px 0",
      textAlign: "center",
    },
    resultTitle: {
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "33px",
      opacity: 0.7,
      color: theme.palette.text.primary,
    },
    result: {
      marginTop: 7,
    },
    amount: {
      fontWeight: 600,
      fontSize: 25,
      lineHeight: "33px",
      color: "#14F195",
    },
    unit: {
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "33px",
      color: "#14F195",
      marginLeft: 15,
    },
    des: {
      marginTop: 25,
      color: theme.palette.text.primary,
      fontWeight: 300,
      opacity: 0.7,
      fontSize: 13,
      lineHeight: "16px",
      textAlign: "center",
      fontStyle: "italic",
      width: "100%",
    },
    lockedDate: {
      marginTop: 1,
      color: theme.palette.text.primary,
      fontWeight: 400,
      opacity: 0.7,
      fontSize: 14,
      lineHeight: "33px",
    },
  })
);

const RewardCalculator = (props: any) => {
  const [days, setDays] = useState(7);
  const [currentBtn, setCurrentBtn] = useState(0);
  const [val, setVal] = useState(0);
  const [roi, setRoi] = useState(0);
  const [day, setDay] = useState(22);
  const [month, setMonth] = useState(12);
  const [year, setYear] = useState(2022);
  const [isOpen] = useState(false);
  const gotoPage = (url: string) => {
    window.open(url, "_blank");
  };
  const handleOnChange = (e: any) => {
    setVal(Number(e.target.value));
    calc(e.target.value, props.apys[currentBtn]);
  };
  const calc = (val: any, apy: any) => {
    setRoi(Number(((Number(apy) * val) / 100).toFixed(2)));
    updateDate();
  };
  const updateDate = () => {
    let date = new Date();
    let date1 = new Date(date.getTime() + days * 24 * 3600 * 1000);
    setDay(date1.getDate());
    setMonth(date1.getMonth() + 1);
    setYear(date1.getFullYear());
  };
  useEffect(() => {
    let date = new Date();
    let date1 = new Date(date.getTime() + days * 24 * 3600 * 1000);
    setDay(date1.getDate());
    setMonth(date1.getMonth() + 1);
    setYear(date1.getFullYear());
  }, []);
  const classes = useStyles();
  return (
    <Grid className={`${classes.calcContainer}`}>
      <Grid className={`${classes.calcTitle}`}>Staking Calculator</Grid>
      <Grid className={`${classes.calcDesc}`}>
        Calculate your SOLCH depending on the amount of staked tokens and your
        lock time.
      </Grid>
      <Grid className={`${classes.calcDiv}`}>
        <Grid className={classes.input}>
          <Grid className={classes.inputDesc}>Enter amount</Grid>
          <Grid className={classes.inputAmountBox}>
            <Input
              disableUnderline
              className={classes.inputAmount}
              placeholder="0.0"
              value={val}
              onChange={handleOnChange}
            />
            <FormLabel className={classes.inputUnit}>SOLCH</FormLabel>
          </Grid>
        </Grid>
        <Grid className={classes.btnGroup}>
          <Button
            className={days === 7 ? classes.btnActive : classes.btn}
            onClick={() => {
              updateDate();
              setDays(7);
              setCurrentBtn(0);
              calc(val, props.apys[0]);
            }}
          >
            7D
          </Button>
          <Button
            className={days === 30 ? classes.btnActive : classes.btn}
            onClick={() => {
              updateDate();
              setDays(30);
              setCurrentBtn(1);
              calc(val, props.apys[1]);
            }}
          >
            30D
          </Button>
          <Button
            className={days === 90 ? classes.btnActive : classes.btn}
            onClick={() => {
              updateDate();
              setDays(90);
              setCurrentBtn(2);
              calc(val, props.apys[2]);
            }}
          >
            90D
          </Button>
          <Button
            className={days === 180 ? classes.btnActive : classes.btn}
            onClick={() => {
              updateDate();
              setDays(180);
              setCurrentBtn(3);
              calc(val, props.apys[3]);
            }}
          >
            180D
          </Button>
          <Button
            className={days === 365 ? classes.btnActive : classes.btn}
            onClick={() => {
              updateDate();
              setDays(365);
              setCurrentBtn(4);
              calc(val, props.apys[4]);
            }}
          >
            365D
          </Button>
        </Grid>
        <Grid className={classes.resultBox}>
          <FormLabel className={classes.resultTitle}>ROI</FormLabel>
          <Grid className={classes.result}>
            <FormLabel className={classes.amount}>{roi}</FormLabel>
            <FormLabel className={classes.unit}>SOLCH</FormLabel>
          </Grid>
          <FormLabel className={classes.lockedDate}>
            Locked until {day}/{month}/{year}
          </FormLabel>
        </Grid>
        <Grid className={classes.des}>
          Calculated based on current rates. All figures are estimates provided
          for your convenience only, distributed proportionally among token
          holders
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RewardCalculator;
