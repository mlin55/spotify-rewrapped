export default function Recommendations({ recommendations }) {
  const recSongs = recommendations.tracks;

  function getArtists(song) {
    const artists = song.artists.map((artist) => artist.name);
    return artists.join(", ");
  }

  return (
    <div class="w-full">
      <h1>Here are some songs we thought you might like based on your listening history</h1>
      <ol>
        {recSongs.map((song, idx) => <li>{idx + 1}. {song.name} by {getArtists(song)}</li>)}
      </ol>
    </div>
  )
}