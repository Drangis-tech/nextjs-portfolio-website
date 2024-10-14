import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Global meta tags */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          />
          {/* Favicon and related icons */}
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <link rel="icon" sizes="192x192" href="/android-chrome-192x192.png" />
          <link rel="icon" sizes="512x512" href="/android-chrome-512x512.png" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          <meta name="theme-color" content="#000000" />

          {/* Include the vanilla-cookieconsent CSS */}
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/vanilla-cookieconsent@1.8.1/build/cookieconsent.min.css"
          />

          {/* Include Alpine.js */}
          <script
            src="https://cdn.jsdelivr.net/npm/alpinejs@3.10.3/cdn.min.js"
            defer
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>

        {/* Load the CookieConsent JS script after page load */}
        <script
          src="https://cdn.jsdelivr.net/npm/vanilla-cookieconsent@1.8.1/build/cookieconsent.min.js"
          defer
        ></script>
      </Html>
    );
  }
}

export default MyDocument;