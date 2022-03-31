import {Button, FormControl, TextField} from '@mui/material';

import {FormikProps} from 'formik';
import React from 'react';

export interface SendEmailFormV {
  name?: string;
  email?: string;
  emailConfirmation?: string;
}

/** The underlying form component. */
export function SendEmailForm(props: FormikProps<SendEmailFormV>) {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = props;

  return (
    <form noValidate onSubmit={handleSubmit}>
      <div className="space-y-4">
        <TextField
          fullWidth
          name="name"
          label="Full name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.name && !!errors.name}
          helperText={touched.name && errors.name}
        />

        <TextField
          fullWidth
          name="email"
          label="Email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && !!errors.email}
          helperText={touched.email && errors.email}
        />

        <TextField
          fullWidth
          name="emailConfirmation"
          label="Confirm email"
          type="email"
          value={values.emailConfirmation}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.emailConfirmation && !!errors.emailConfirmation}
          helperText={touched.emailConfirmation && errors.emailConfirmation}
        />
      </div>

      <FormControl fullWidth className="mt-12">
        <Button
          fullWidth
          type="submit"
          color="primary"
          disabled={isSubmitting}
          variant="outlined"
        >
          Send
        </Button>
      </FormControl>
    </form>
  );
}
