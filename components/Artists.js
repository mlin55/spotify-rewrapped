export default function Artists({ artists }) {
  const artistList = artists.items;
  return (
    <div class="w-full">
      <h1>Say hello to your top artist, {artistList[0].name}</h1>
      <h1>Your top artists</h1>
      <ol>
        {artistList.map((artist, idx) => <li>
          {idx + 1}. {artist.name}
        </li>)}
      </ol>
    </div>
  )
}