'use client';
import redirectToAuthCodeFlow from "@/app/api/api";

export default function Login() {

  return (
      <div className="p-6 flex flex-col items-center rounded-xl shadow-lg">
        <h1 className="text-xl">Spotify Recapped</h1>
        <p>Ever wished you could have a Spotify Wrapped not just at the end of the year, but at any time? With Spotify Recapped, you can view detailed information and statistics about your listening from the last year, month, week, or even 24 hours. Just log in with Spotify to get started!</p>
        <button onClick={() => redirectToAuthCodeFlow()}>Login</button>
      </div>
  )
}