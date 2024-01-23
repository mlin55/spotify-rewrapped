export default function Songs({ songs }) {
  console.log(songs);
  const songList = songs.items;

  function getArtists(song) {
    const artists = song.artists.map((artist) => artist.name);
    return artists.join(", ");
  }

  return (
    <div class="w-full">
      <div class="flex flex-col items-center">
        <h1>Songs</h1>
        <img src={songList[0].album.images[0].url} class="w-52 h-52" />
        Your top song was: {songList[0].name} by {getArtists(songList[0])}
      </div>
      <h1>Your top songs</h1>
      <ol>
        {songList.map((song, idx) => <li>{idx + 1}. {song.name} by {getArtists(song)}</li>)}
      </ol>
    </div>
  )
}