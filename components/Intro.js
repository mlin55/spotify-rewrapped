export default function Intro({ profile }) {
  return (
    <div class="w-full flex flex-col items-center">
      <h1 class="text-5xl font-bold text-center pt-20 pb-20">Hello {profile.display_name}</h1>
      <img class="w-36 h-36" src={profile.images.length > 0 ? profile.images[0] : '/defaultPic.jpg'} />
      <p class="text-3xl text-center pt-20 pb-48">Scroll down to see your Spotify Recapped</p>
    </div>
  );
}