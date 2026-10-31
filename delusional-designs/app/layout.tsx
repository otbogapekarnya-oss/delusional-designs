import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Delusional Designs® — Independent Design Studio',
  description: 'Independent design studio for identities, digital experiences and ideas that refuse to behave.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
