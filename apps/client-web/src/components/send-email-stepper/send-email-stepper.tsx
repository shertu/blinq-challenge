import {Button, Divider, Typography} from '@mui/material';
import clsx from 'clsx';

import React from 'react';
import {SendEmailFormik} from '../send-email-formik/send-email-formik';

export interface SendEmailStepperP
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  onFinish?: React.MouseEventHandler<HTMLButtonElement>;
}

/**
 * A pseudo stepper component to manage the send email flow.
 */
export function SendEmailStepper(props: SendEmailStepperP) {
  const {onFinish, className, ...other} = props;

  const [activeStep, setActiveStep] = React.useState<number>(0);

  /** @todo DRY up the following code. */

  return (
    <div className={clsx('p-12', className)} {...other}>
      {activeStep === 0 && (
        <div className="flex flex-col items-center text-center">
          <Typography variant="h5" component="p">
            Request an invite
          </Typography>
          <Divider className="mt-4 mb-8 w-[5ch]" />
          <SendEmailFormik onfulfilledFetchHook={() => setActiveStep(1)} />
        </div>
      )}
      {activeStep === 1 && (
        <div className="flex flex-col items-center text-center">
          <Typography variant="h5" component="p">
            All Done!
          </Typography>
          <Divider className="mt-4 mb-8 w-[5ch]" />

          <Typography className="mb-8">
            You will be one of the first to experience <br /> Broccoli &amp; Co.
            when we launch.
          </Typography>
          <Button fullWidth onClick={onFinish} variant="outlined">
            OK
          </Button>
        </div>
      )}
    </div>
  );
}

export default SendEmailStepper;
