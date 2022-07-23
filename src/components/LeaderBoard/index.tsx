/* typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { NavLink } from 'react-router-dom'
import { getImg } from "../../utils/Helper";
import styled from "styled-components";
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import PoolComponent from '../PoolComponent'
import './index.css';
import {Grid, Button, FormLabel, Link, Input} from '@material-ui/core';
import {useSelector, useDispatch} from 'react-redux'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    titleBrightness: {
        color: theme.palette.text.secondary,
        fontSize: 46,
        lineHeight: "56px",
        fontWeight: 800
    },
    groupContainer: {
      background: theme.palette.background.paper,
      marginTop: 150,
      border: `1px solid ${theme.palette.primary.main}`,
      height: 1195,
      borderRadius: 20,
      padding: '0 5%'
    },
    groupTitle: {
      display: 'flex',
      justifyContent: 'center',
      color: theme.palette.text.secondary,
      fontSize: 24,
      fontWeight: 600,
      lineHeight: `34px`,
      marginTop: 49
    },
    group1: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 57
    },
    group2: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 40
    }
  })
)

const LeaderBoard = (props:any) => {
    const [isOpen] = useState(false)
    const gotoPage = (url: string) => {
        window.open(url, '_blank');
    }
    const classes = useStyles();
    return (
    <Grid className={`${classes.groupContainer}`}>
      <Grid className={`${classes.groupTitle}`}>Staking Leaderboard</Grid>

    </Grid>
    )
}

export default LeaderBoard