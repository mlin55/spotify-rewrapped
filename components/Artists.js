import List from './List';

function ArtistListComponent({ artist, idx }) {
  return (
    <div class='flex items-center p-4'>
      <h1 class='text-3xl font-bold pr-5 min-w-16'>{idx + 1}</h1>
      <img src={artist.images[0].url} class="w-32 h-32" />
      <div class='pl-5'>
        <h1 class='font-bold'>{artist.name}</h1>
      </div>
    </div>
  )
}

export default function Artists({ artists }) {
  const artistList = artists.items.map((artist) => ({
    image: artist.images[0].url,
    mainText: artist.name,
    subText: '',
  }));
  const numArtistsUnexpanded = 5;

  return (
    <div>
      <div class="w-full flex flex-col items-center">
        <h1 className='text-3xl font-bold pb-20'>Artists</h1>
        {/* fix time frame. smooth expand and collapse */}
        <h1 className='text-2xl pb-5 text-center'>Your listened to {artistList.length > 50 ? 'a lot of ' : artistList.length} artists, but one came out on top</h1>
        <p class='pb-20'>Any guesses?</p>
        <img src={artistList[0].image} class="w-52 h-52" />
          <p class='pt-5 pl-20 pr-20 pb-20 text-center text-xl font-bold'>Say hello to your top artist, {artistList[0].name}</p>
      </div>
      <h1 className="pt-10 text-xl text-center font-bold">Your top artists</h1>
      <List list={artistList} numUnexpanded={numArtistsUnexpanded} />
    </div>
  )
}