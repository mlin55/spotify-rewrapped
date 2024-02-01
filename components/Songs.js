import List from './List';

function getArtists(song) {
  const artists = song.artists.map((artist) => artist.name);
  return artists.join(", ");
}

export default function Songs({ songs }) {
  const songList = songs.items.map((song) => ({
    image: song.album.images[0].url,
    mainText: song.name,
    subText: getArtists(song),
  }));
  const numSongsUnexpanded = 5;

  {/* Make smooth expand and collapse, improve button look */}
  return (
    <div class="w-full">
      <div class="flex flex-col items-center">
        <h1 class="text-3xl font-bold pb-20">Songs</h1>
        {/* TODO: make the time period accureate lol */}
        <h1 class="text-2xl pb-5">You played {songList.length > 50 ? 'a lot of ' : songList.length} songs this past year.</h1>
        <p class='pb-20'>And there was one that <em>really</em> connected.</p>
        <img src={songList[0].image} class="w-52 h-52" />
        <p class='pt-5 pl-20 pr-20 pb-20 text-center text-xl font-bold'>Your top song was: {songList[0].mainText} by {songList[0].subText}</p>
      </div>
      <h1 class='pt-10 text-xl text-center font-bold'>Your top songs</h1>
      <List list={songList} numUnexpanded={numSongsUnexpanded} />
    </div>
  )
}