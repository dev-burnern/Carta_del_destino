import type { ReactNode } from 'react';

type NoLayoutProps = {
  children: ReactNode;
};

export default function NoLayout({ children }: NoLayoutProps) {
  return <>{children}</>;
}
