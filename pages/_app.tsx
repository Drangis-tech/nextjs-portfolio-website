// File: pages/_app.tsx
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Prevents fontawesome from adding its CSS automatically

import '../styles/globals.css';

import type { AppProps } from 'next/app'; // Import the type for AppProps

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp; // Adding FontAwesome icons to the project