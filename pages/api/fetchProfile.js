export default async function handler(req, res) {
  const result = await fetch("https://api.spotify.com/v1/me", {
    method: "GET",
    headers: { 
      Authorization: 'Bearer ' + global.access_token
    }
  });
  const userInfo = await result.json();
  res.send(userInfo);
}