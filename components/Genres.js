import List from './List';

export default function Genres({ genres }) {
  const numGenresUnexpanded = 5;
  console.log(genres);
  const genreList = genres.map((genre) => ({
    mainText: genre.genre
  }));
  return (
    <div class="w-full">
      <h1 class="text-3xl font-bold pb-20 text-center">Your Top Genres</h1>
      <List list={genreList} numUnexpanded={numGenresUnexpanded} />
    </div>
  );
}