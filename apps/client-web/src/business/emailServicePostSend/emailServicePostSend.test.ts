import {
  emailServicePostSendRaw,
  EmailServicePostSendRequest,
} from './emailServicePostSend';

test('send email with valid inputs', async () => {
  const r: EmailServicePostSendRequest = {
    email: 'djared.xeknau@outlook.com',
    name: 'Jared Michael Blackman',
  };

  const response = await emailServicePostSendRaw(r);
  expect(response.ok).toBeTruthy();
});

test('send email with usedemail@blinq.app email address', async () => {
  const r: EmailServicePostSendRequest = {
    email: 'usedemail@blinq.app',
    name: 'Jared Michael Blackman',
  };

  expect.assertions(1);
  try {
    await emailServicePostSendRaw(r);
  } catch (e) {
    const response = e as Response;
    expect(response.ok).toBeFalsy();
  }
});
