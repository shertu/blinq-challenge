import {Button, Container, Typography} from '@mui/material';
import {SendEmailDialog} from 'components';

import React from 'react';

/**
 * The page the user scrolls down to after seeing the landing screen.
 */
export function LandingPage() {
  const [sedOpen, setsedOpen] = React.useState<boolean>(false);

  function handleClickOpen() {
    setsedOpen(true);
  }

  function handleClose() {
    setsedOpen(false);
  }

  return (
    <>
      <div className="min-h-screen">
        <header>
          <Typography>Broccoli &amp; Co.</Typography>
        </header>
        {/* <div className="min-h-screen"> */}

        <Container fixed>
          <Typography>A better way to enjoy everyday.</Typography>
          <Typography>Be the first to know when we launch.</Typography>
          <Button onClick={handleClickOpen}>Request an invite</Button>
        </Container>
        <footer>
          <Typography>Made with ❤ in Melbourne.</Typography>
          <Typography>
            &copy; 2016 Broccoli &amp; Co. All rights reserved.
          </Typography>
        </footer>
      </div>

      <SendEmailDialog
        onClose={handleClose}
        open={sedOpen}
        onFinish={handleClose}
      />
    </>
  );
}

export default LandingPage;
