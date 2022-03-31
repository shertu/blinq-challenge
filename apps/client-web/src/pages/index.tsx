import {AppBar, Button, Container, Dialog, Typography} from '@mui/material';
import {SendEmailStepper} from 'components';

import React from 'react';

export function SendEmailPage() {
  const [sedOpen, setsedOpen] = React.useState<boolean>(false);

  function handleClickOpen() {
    setsedOpen(true);
  }

  function handleClose() {
    setsedOpen(false);
  }

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <AppBar position="static" color="transparent" className="px-8 py-5">
          <Typography className="uppercase">Broccoli &amp; Co.</Typography>
        </AppBar>

        <Container
          fixed
          className="mt-[2.53cm] flex flex-col items-center text-center space-y-4"
          component="main"
        >
          <Typography variant="h2" component="p">
            A better way <br /> to enjoy everyday.
          </Typography>
          <Typography>Be the first to know when we launch.</Typography>
          <Button onClick={handleClickOpen} variant="outlined">
            request an invite
          </Button>
        </Container>
        <div className="grow" />
        <footer className="px-8 py-5 border-solid border-x-0 border-b-0 border-black flex flex-col items-center text-center">
          <Typography>Made with ❤ in Melbourne.</Typography>
          <Typography>
            &copy; 2016 Broccoli &amp; Co. All rights reserved.
          </Typography>
        </footer>
      </div>

      <Dialog onClose={handleClose} open={sedOpen}>
        <SendEmailStepper onFinish={handleClose} />
      </Dialog>
    </>
  );
}

export default SendEmailPage;
