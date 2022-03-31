import {Formik, FormikConfig, FormikFormProps} from 'formik';

import {SendEmailForm, SendEmailFormV} from './send-email-form';
import React from 'react';

type F = FormikConfig<SendEmailFormV>;

export interface SendEmailFormikP {
  onSubmit: F['onSubmit'];
}

/**
 * A {@link Formik} form used to submit a payment via the application's payment gateway service.
 */
export function SendEmailFormik(props: SendEmailFormikP) {
  return (
    <Formik<SendEmailFormV>
      validate={values => {}}
      onSubmit={props.onSubmit}
      initialValues={{
        name: '',
        email: '',
        emailConfirmation: '',
      }}
    >
      {props => <SendEmailForm {...props} />}
    </Formik>
  );
}

export default SendEmailFormik;
