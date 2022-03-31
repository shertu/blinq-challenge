import {
  emailServicePostSend,
  EmailServicePostSendRequest,
} from './emailServicePostSend';

test('send email with valid inputs', async () => {
  const r: EmailServicePostSendRequest = {
    email: 'djared.xeknau@outlook.com',
    name: 'Jared Michael Blackman',
  };

  const response = await emailServicePostSend(r);
  expect(response.ok).toBeTruthy();
});

test('send email with usedemail@blinq.app email address', async () => {
  const r: EmailServicePostSendRequest = {
    email: 'usedemail@blinq.app',
    name: 'Jared Michael Blackman',
  };

  expect.assertions(1);
  try {
    await emailServicePostSend(r);
  } catch (e) {
    const response = e as Response;
    expect(response.ok).toBeFalsy();
  }
});
