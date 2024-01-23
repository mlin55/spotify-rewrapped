export default function Intro({ profile }) {
  return (
    <div class="w-full">
      <h1>Hello {profile.display_name}</h1>
      <p>Scroll down to see your Spotify Recapped</p>
    </div>
  );
}