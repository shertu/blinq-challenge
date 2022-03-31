export interface EmailServicePostSendRequest {
  name?: string;
  email?: string;
}

export async function emailServicePostSend(
  request: EmailServicePostSendRequest
) {
  return await fetch(
    'https://us-central1-blinkapp-684c1.cloudfunctions.net/fakeAuth',
    {
      method: 'POST',
      body: JSON.stringify(request),
    }
  );
}
