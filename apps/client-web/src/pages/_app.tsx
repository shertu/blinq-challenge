import 'tailwindcss/utilities.css';

import {CssBaseline} from '@mui/material';
import {ThemeProvider, StyledEngineProvider} from '@mui/material/styles';

import AppMuiTheme from 'styles/default-mui-theme';
import {AppProps} from 'next/app';
import NProgress from 'nprogress';
import React from 'react';
import Router from 'next/router';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

/**
 * A layout component used to describe general structure of
 * the application, e.g. main, header, footer, etc.
 *
 * https://nextjs.org/docs/advanced-features/custom-app.
 */
export default function CustomApp({Component, pageProps}: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={AppMuiTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
