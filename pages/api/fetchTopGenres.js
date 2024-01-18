export default async function handler(req, res) {
  const params = new URLSearchParams();
  params.append('time_range', req.query.time_range ? req.query.time_range : 'medium_term');
  params.append('limit', req.query.limit ? req.query.limit : 10);
  params.append('offset', req.query.offset ? req.query.offset : 5);
  const result = await fetch("https://api.spotify.com/v1/me/top/artists?" + params, {
    method: "GET",
    headers: {
      Authorization: 'Bearer ' + global.access_token
    }
  });
  const { items } = await result.json();

  const genreFreq = {};
  items.forEach(artist => {
    artist.genres.forEach(genre => {
      genreFreq[genre] = (genreFreq[genre] || 0) + 1;
    });
  });

  const genres = Object.keys(genreFreq).map(genre => ({
    genre: genre,
    freq: genreFreq[genre]
  }));
  genres.sort((a, b) => b.freq - a.freq);
  res.send(genres);
}