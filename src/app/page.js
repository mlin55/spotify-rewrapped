'use client';
import { useState, useEffect } from 'react';

import Login from './components/Login';
import Recapped from './components/Recapped';

export default function Home() {
  // const params = new URLSearchParams(window.location.search);
  // const code = params.get("code");
  const code = null;
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    // const fetchToken = async () => {
    //   setAccessToken(await getAccessToken(code));
    // }

    // fetchToken()
    //   .catch(console.error);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {!code && <Login />}
      {code && <Recapped token={accessToken} />}
    </main>
  )
}
