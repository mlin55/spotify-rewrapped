export default async function redirectToAuthCodeFlow(req, res) {
  const authRequest = await fetch("/api/generateAuth");
  window.location.href = await authRequest.json().then((data) => {
    return data.url;
  });
}