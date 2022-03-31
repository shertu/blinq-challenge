export interface EmailServicePostSendRequest {
  name?: string;
  email?: string;
}

export async function emailServicePostSendRaw(
  request: EmailServicePostSendRequest
) {
  return await fetch(
    'https://us-central1-blinkapp-684c1.cloudfunctions.net/fakeAuth',
    {
      method: 'POST',
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}

export async function emailServicePostSend(
  request: EmailServicePostSendRequest
) {
  const response = await emailServicePostSendRaw(request);
  if (response.ok) {
    return null;
  } else {
    throw response;
  }
}
