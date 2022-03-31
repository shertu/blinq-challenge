import {Formik, FormikConfig, FormikErrors, FormikFormProps} from 'formik';

import {SendEmailForm, SendEmailFormV} from './send-email-form';
import React from 'react';
import {
  emailServicePostSend,
  EmailServicePostSendRequest,
  noop,
  testEmail,
} from 'business';
import {Typography} from '@mui/material';

export interface SendEmailFormikP {
  onfulfilledFetchHook: () => void;
}

const ERROR_TEXT_REQUIRED: string = 'required';
const ERROR_TEXT_INVALID_EMAIL: string = 'please input a valid email address';

/**
 * A {@link Formik} form used to submit a payment via the application's payment gateway service.
 */
export function SendEmailFormik(props: SendEmailFormikP) {
  const {onfulfilledFetchHook = noop} = props;

  const [errorText, seterrorText] = React.useState<string>('');

  return (
    <Formik<SendEmailFormV>
      validate={values => {
        const {name, email, emailConfirmation} = values;
        const errors: FormikErrors<SendEmailFormV> = {};

        if (name) {
          if (name.length < 3) {
            errors.name = 'name must be at least three characters in length';
          }
        } else {
          errors.name = ERROR_TEXT_REQUIRED;
        }

        if (email) {
          if (!testEmail(email)) {
            errors.email = ERROR_TEXT_INVALID_EMAIL;
          }
        } else {
          errors.email = ERROR_TEXT_REQUIRED;
        }

        if (emailConfirmation) {
          if (email && emailConfirmation !== email) {
            errors.emailConfirmation = 'email addresses do not match';
          }
        } else {
          errors.emailConfirmation = ERROR_TEXT_REQUIRED;
        }

        return errors;
      }}
      onSubmit={(values, helpers) => {
        const request: EmailServicePostSendRequest = {
          name: values.name,
          email: values.email,
        };

        emailServicePostSend(request)
          .then(() => {
            onfulfilledFetchHook();
            seterrorText('');
          })
          .catch((err: Response) => {
            // console.log(err);
            err.json().then(v => seterrorText(v.errorMessage));
          })
          .finally(() => helpers.setSubmitting(false));
      }}
      initialValues={{
        name: '',
        email: '',
        emailConfirmation: '',
      }}
    >
      {props => (
        <>
          <SendEmailForm {...props} />
          {errorText && (
            <Typography className="mt-4 text-red-500">{errorText}</Typography>
          )}
        </>
      )}
    </Formik>
  );
}

export default SendEmailFormik;
