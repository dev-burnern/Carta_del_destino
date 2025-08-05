import type { ReactNode } from 'react';

type MinimalLayoutProps = {
  children: ReactNode;
};

export default function MinimalLayout({ children }: MinimalLayoutProps) {
  return (
    <main>
      {children}
    </main>
  );
}
