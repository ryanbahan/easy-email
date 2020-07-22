export const requestTones = async (content) => {
  const parseTones = tones => {
    const documentTones = tones.document_tone.tones;
    return documentTones;
  }

  const data = {toneInput: {text: content}}

  const res = await fetch("https://easy-email.mybluemix.net/api/tone", {
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  });

  if (res.ok) {
    const toneResponse = await res.json();
    const tones = parseTones(toneResponse);
    return tones;
  } else {
    throw new Error(`${res.status} ${res.statusText}. Oops! We couldn't reach the server.`);
  }
}
