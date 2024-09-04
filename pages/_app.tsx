// pages/_app.tsx
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import Head from 'next/head';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

config.autoAddCss = false; // Prevents FontAwesome from adding its CSS automatically

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Global Head elements */}
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;