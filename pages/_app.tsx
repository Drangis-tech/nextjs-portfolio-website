import '@fortawesome/fontawesome-svg-core/styles.css'; // Import FontAwesome CSS
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Prevents automatic CSS injection

import '../styles/globals.css'; // Import your global styles
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;