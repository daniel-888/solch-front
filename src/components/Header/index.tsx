/* typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { getImg } from "../../utils/Helper";
import styled from "styled-components";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { changeThemeAction } from "../../action";
import "./index.css";
import Grid from "@material-ui/core/Grid";
import { useSelector, useDispatch } from "react-redux";
import {
  makeStyles,
  Theme,
  useTheme,
  createStyles,
} from "@material-ui/core/styles";
import { FormLabel } from "@material-ui/core";

const CheckBoxWrapper = styled.div`
  position: relative;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 85px;
  height: 42px;
  border-radius: 28px;
  background: #22e0a0;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    margin-left: 3px;
    margin-top: 8px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 28px;
  width: 85px;
  height: 42px;
  &:checked + ${CheckBoxLabel} {
    background: #1e1e1e;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      margin-left: 54px;
      margin-top: 8px;
      transition: 0.2s;
    }
  }
`;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textBrightness: {
      color: theme.palette.text.primary,
      fontSize: 15,
      opacity: 0.7,
    },
    logo: {
      margin: "0 auto",
    },
    switch: {
      backgroundImage:
        theme.palette.type === "dark" ? "url(night.png)" : "url(day.png)",
      width: "100px",
      height: "50px",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      sIndex: "1",
    },
  })
);
const Header = (props: any) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [isOpen] = useState(false);
  const gotoPage = (url: string) => {
    window.open(url, "_blank");
  };
  const [isDark, setIsDark] = useState(true);
  const changeTheme = () => {
    setIsDark(!isDark);
    console.log("chngetheme:", isDark);
    dispatch(changeThemeAction(isDark ? "light" : "dark"));
  };
  const themeMode = useSelector((state: any) => state.theme);
  return (
    <Grid
      container
      alignItems="center"
      direction="row"
      justifyContent="space-between"
    >
      <Grid item md={3}>
        <img
          src={isDark ? "./dark_logo.png" : "./light_logo.png"}
          className={classes.logo}
        />
      </Grid>
      <Grid
        item
        container
        md={4}
        style={{ display: "flex" }}
        justifyContent="center"
      >
        {/* <Grid item md={3}></Grid> */}
        <Grid
          item
          md={4}
          container
          style={{ display: "flex" }}
          justifyContent="flex-end"
          alignItems="center"
        >
          <FormLabel className={classes.textBrightness}>Light</FormLabel>
        </Grid>
        <Grid
          item
          md={4}
          container
          style={{ display: "flex" }}
          justifyContent="center"
          alignItems="center"
        >
          <CheckBoxWrapper>
            <div
              className={classes.switch}
              onClick={() => {
                changeTheme();
              }}
            ></div>
          </CheckBoxWrapper>
        </Grid>
        <Grid
          item
          md={4}
          container
          style={{ display: "flex" }}
          alignItems="center"
        >
          <FormLabel className={classes.textBrightness}>Dark</FormLabel>
        </Grid>
        {/* <Grid item md={3}></Grid> */}
      </Grid>
      <Grid
        item
        container
        md={3}
        style={{ display: "flex" }}
        justifyContent="flex-end"
      >
        <WalletMultiButton className="btn-wallet" />
      </Grid>
    </Grid>
  );
};

export default Header;
