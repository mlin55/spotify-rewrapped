import List from './List';

function getArtists(song) {
  const artists = song.artists.map((artist) => artist.name);
  return artists.join(", ");
}

export default function Recommendations({ recommendations }) {
  const recList = recommendations.tracks.map((rec) => ({
    image: rec.album.images[0].url,
    mainText: rec.name,
    subText: getArtists(rec),
  }));
  const numRecsUnexpanded = 5;

  return (
    <div class="w-full">
      <div class="flex flex-col items-center">
        <h1 class="text-3xl font-bold pb-5">Songs</h1>
        <p class="pb-20 text-center">Here are some songs we thought you might like based on your listening preferences</p>
      </div>
      <List list={recList} numUnexpanded={numRecsUnexpanded} />
    </div>
  )
}