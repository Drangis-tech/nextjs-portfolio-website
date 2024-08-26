// pages/_app.tsx
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Prevents FontAwesome from adding its CSS automatically

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout'; // Adjust the path if necessary

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;