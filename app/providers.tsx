'use client';

import { LanguageProvider } from '@/lib/LanguageContext';
import { Analytics } from '@vercel/analytics/next';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      {children}
      {process.env.NODE_ENV === 'production' && <Analytics />}
    </LanguageProvider>
  );
}
