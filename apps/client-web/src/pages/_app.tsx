import 'tailwindcss/utilities.css';

import {CssBaseline} from '@mui/material';
import {ThemeProvider, StyledEngineProvider} from '@mui/material/styles';

import AppMuiTheme from 'styles/default-mui-theme';
import {AppProps} from 'next/app';
import React from 'react';

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
