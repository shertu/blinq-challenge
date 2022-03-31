import {Typography} from '@mui/material';
import {AppPage} from 'components';

import Head from 'next/head';
import React from 'react';

/**
 * The page the user scrolls down to after seeing the landing screen.
 */
export function LandingPage() {
  const landingScreenScrollToId = 'about-me-content';

  return (
    <>
      <Head>
        <title>Jared Michael Blackman</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js" />
      </Head>
      <AppPage
        className="min-h-screen pt-office-word px-6"
        id={landingScreenScrollToId}
      >
        <Typography>Apple</Typography>
      </AppPage>
    </>
  );
}

export default LandingPage;
