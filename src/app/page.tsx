'use client';

import { useState, useEffect } from 'react';
import { IonNav } from '@ionic/react';
import RootPage from '@/app/RootPage';

export default function Home() {
  const [rootPage, setRootPage] = useState<Function>();

  useEffect(() => {
    setRootPage(() => _RootPage);
  }, []);

  return <IonNav root={rootPage} />;
}

const _RootPage = () => <RootPage />;
