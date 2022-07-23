import './styles/normalize.css';
import './styles/utils.css';
import './styles/fonts.css';

import './App.css';

import React, { useMemo } from 'react';
import Modal  from 'react-modal';
import {
  BrowserRouter,
  Routes,
  Route, 
  Navigate
} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import { ThemeProvider } from "@material-ui/styles"
import { getPhantomWallet, getSolflareWallet } from '@solana/wallet-adapter-wallets';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { ToastProvider } from 'react-toast-notifications'
import { CLUSTER_API } from './config/index';
import Home from './pages/Home';
import { LightTheme, DarkTheme } from "./components/MuiTheme";
require('@solana/wallet-adapter-react-ui/styles.css');

Modal.setAppElement('#root');

const AppWithProvider = () => {
  const wallets = useMemo(
    () => [getPhantomWallet(), getSolflareWallet()],
    []
  );
  let mainTheme = DarkTheme;
  const theme = useSelector((state: any) => state.theme.mode);
  const dispatch = useDispatch();
  console.log(theme)
  if(theme == 'dark' || theme == '') {
    mainTheme = DarkTheme
  }
  else { 
    mainTheme = LightTheme;
  }
  return (
      <ConnectionProvider endpoint={CLUSTER_API}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <ToastProvider>
              <ThemeProvider theme={mainTheme}>
                <BrowserRouter>
                  <Routes>
                    <Route path='/' element={<Home />} />
                  </Routes>
                </BrowserRouter>
              </ThemeProvider>
            </ToastProvider>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
  )
}
export default AppWithProvider;