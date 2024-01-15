export default async function handler(req, res) {
  const params = new URLSearchParams();
  params.append("grant_type", "authorization_code");
  params.append("code", req.query.code);
  params.append("redirect_uri", process.env.NEXT_PUBLIC_CALLBACK_URL);

  const result = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: { 
        'Authorization': 'Basic ' + (new Buffer.from(process.env.NEXT_PUBLIC_CLIENT_ID + ':' + process.env.NEXT_PUBLIC_CLIENT_SECRET).toString('base64')),
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: params
  });

  const { access_token } = await result.json().then((tok) => {
    console.log(tok);
    return tok;
  });
  global.access_token = access_token;
  return res.redirect('/');
}