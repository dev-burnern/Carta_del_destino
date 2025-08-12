import React from 'react';
import type { ReactNode } from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center ">
        {children}
      </main>
      <Footer />
    </div>
  );
}
