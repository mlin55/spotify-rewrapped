export default async function redirectToAuthCodeFlow(req, res) {
  const params = new URLSearchParams();
  params.append("client_id", process.env.NEXT_PUBLIC_CLIENT_ID);
  params.append("response_type", "code");
  params.append("redirect_uri", process.env.NEXT_PUBLIC_CALLBACK_URL);
  params.append("scope", "user-read-private user-read-email");

  document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
}