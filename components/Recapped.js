import { useState, useEffect } from "react";
import Intro from '../components/Intro';
import Genres from "./Genres";
import Artists from './Artists';
import Songs from "./Songs";
import Recommendations from './Recommendations';

export default function Recapped() {
  const [profile, setProfile] = useState(null);
  const [artists, setArtists] = useState(null);
  const [tracks, setTracks] = useState(null);
  const [genres, setGenres] = useState(null);
  const [recommendations, setRecommendations] = useState(null);

  useEffect(() => {
    const populateUserData = async () => {
      setProfile(await fetch('/api/fetchProfile').then(async (r) => {
        return await r.json();
      }));
      // TODO: add query params
      setArtists(await fetch('/api/fetchTopArtists').then(async (r) => {
        return await r.json();
      }));
      setTracks(await fetch('/api/fetchTopTracks').then(async (r) => {
        return await r.json();
      }));
      setGenres(await fetch('/api/fetchTopGenres').then(async (r) => {
        return await r.json();
      }));
      setRecommendations(await fetch('/api/fetchRecommendations').then(async (r) => {
        return await r.json();
      }));
    }

    populateUserData()
      .catch(console.error);
  }, []);

  return (
    <div className='max-w-screen-sm flex flex-col items-center justify-between p-4
    bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200'>
      {profile && <Intro profile={profile} />}
      {genres && <Genres genres={genres} />}
      {tracks && <Songs songs={tracks} />}
      {artists && <Artists artists={artists} />}
      {recommendations && <Recommendations recommendations={recommendations} />}
    </div>
  )
}