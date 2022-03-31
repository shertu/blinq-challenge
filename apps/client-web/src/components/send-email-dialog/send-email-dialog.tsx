import {Dialog, DialogProps} from '@mui/material';

import React from 'react';
import {
  SendEmailStepper,
  SendEmailStepperP,
} from '../send-email-stepper/send-email-stepper';

export interface SendEmailDialogP extends DialogProps {
  onFinish?: SendEmailStepperP['onFinish'];
}

/**
 * A {@link Dialog} component for the {@link SendEmailStepper} component.
 */
export function SendEmailDialog(props: SendEmailDialogP) {
  const {onFinish, ...other} = props;

  return (
    <Dialog {...other}>
      <SendEmailStepper onFinish={onFinish} />
    </Dialog>
  );
}

export default SendEmailDialog;
