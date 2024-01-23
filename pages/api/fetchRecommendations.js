export default async function handler(req, res) {
  const availableGenreSeeds = await fetch('https://api.spotify.com/v1/recommendations/available-genre-seeds', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + global.access_token
    }
  }).then(async (r) => {
    const { genres } = await r.json();
    return new Set(genres);
  });

  const artistSeeds = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/fetchTopArtists?limit=2', {
    method: 'GET'
  })
    .then(async (r) => {
      return await r.json();
    })
      .then(r => {
        const artists = r.items;
        const artistIds = artists.map(artist => artist.id);
        return artistIds.join(',');
      });

  const genreSeeds = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/fetchTopGenres?limit=1', {
    method: 'GET'
  }).then(async (r) => {
    return await r.json();
  })
    .then(r => {
      const filteredGenres = r.filter(genre => availableGenreSeeds.has(genre.genre));
      return filteredGenres.join(',');
    });

  const trackSeeds = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/fetchTopTracks?limit=2', {
    method: 'GET'
  }).then(async (r) => {
    return await r.json();
  })
    .then(r => {
      const tracks = r.items;
      const trackIds = tracks.map(track => track.id);
      return trackIds.join(',');
    });

  const params = new URLSearchParams();
  if (artistSeeds.length > 0) {
    params.append('seed_artists', artistSeeds);
  }
  if (genreSeeds.length > 0) {
    params.append('seed_genres', genreSeeds);
  }
  if (trackSeeds.length > 0) {
    params.append('seed_tracks', trackSeeds);
  }
  const recommendations = await fetch('https://api.spotify.com/v1/recommendations?' + params, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + global.access_token
    }
  }).then(async (r) => {
    return await r.json();
  });
  res.send(recommendations);
}