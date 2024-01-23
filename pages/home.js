'use client';
import { useState, useEffect } from 'react';

import Login from '../components/Login';
import Recapped from '../components/Recapped';

export default function Home() {
  const code = null;

  useEffect(() => {
    
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {!code && <Login />}
      <Recapped />
    </main>
  )
}
