import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import React from 'react';

import { 
  ColorSchemeScript, 
  mantineHtmlProps, 
  MantineProvider,
} from '@mantine/core';
import { theme } from '../theme';

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

import { HeaderAICAS } from '@/components/Header/Header';
import { FooterAICAS } from '@/components/Footer/Footer';

export default function RootLayout({ children }: { children: any }) {
    
  
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        
        <MantineProvider theme={theme}>
          <HeaderAICAS />
          {children}
          <FooterAICAS />
        </MantineProvider>
      </body>
    </html>
  );
}
