export default async function handler(req, res) {
  const params = new URLSearchParams();
  params.append('time_range', req.query.time_range ? req.query.time_range : 'medium_term');
  params.append('limit', req.query.limit ? req.query.limit : 10);
  params.append('offset', req.query.offset ? req.query.offset : 5);
  const result = await fetch("https://api.spotify.com/v1/me/top/tracks?" + params, {
    method: "GET",
    headers: { 
      Authorization: 'Bearer ' + global.access_token
    }
  });
  res.send(await result.json());
}