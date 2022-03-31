import {Button, Typography} from '@mui/material';

import React from 'react';
import {SendEmailFormik} from '../send-email-formik/send-email-formik';

export interface SendEmailStepperP {
  onFinish?: React.MouseEventHandler<HTMLButtonElement>;
}

/**
 * A pseudo stepper component to manage the send email flow.
 */
export function SendEmailStepper(props: SendEmailStepperP) {
  const [activeStep, setActiveStep] = React.useState<number>(0);

  function onSuccessfulEmailSend() {
    setActiveStep(1);
  }

  return (
    <>
      {activeStep === 0 && (
        <div>
          <SendEmailFormik onSubmit={onSuccessfulEmailSend} />
        </div>
      )}
      {activeStep === 1 && (
        <div>
          <Typography>All Done!</Typography>
          <Typography>
            You will be one of the first to experience Broccoli &amp; Co. when
            we launch.
          </Typography>
          <Button onClick={props.onFinish}>OK</Button>
        </div>
      )}
    </>
  );
}

export default SendEmailStepper;
