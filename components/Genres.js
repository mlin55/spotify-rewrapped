export default function Genres({ genres }) {
  return (
    <div class="w-full">
      <h1>Your Top Genres</h1>
      <ol>
        {genres.map((genre, index) => (<li key={genre.id}>
          {index + 1}. {genre.genre}
          </li>))}
      </ol>
    </div>
  );
}