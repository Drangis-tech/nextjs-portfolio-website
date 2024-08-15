// File: pages/_app.tsx
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Prevents fontawesome from adding its CSS automatically

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

<<<<<<< HEAD
export default MyApp;
=======
export default MyApp; // Adding FontAwesome icons to the project
>>>>>>> dc8c563 (Your commit message)
