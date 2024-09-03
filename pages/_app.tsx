// pages/_app.tsx
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import Head from 'next/head';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import styles from '../styles/cookie.module.css'; // Import the CSS module


config.autoAddCss = false; // Prevents FontAwesome from adding its CSS automatically

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Load cookieconsent script dynamically
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.6/cookieconsent.min.js';
    script.integrity = 'sha512-0vGAfd29ToJWyheRuRuxdrKtOCeHqcMcFe0NC1V7FsI6UsF6WIGZ7uvJ5WzD2kZPipNkbzHDHk3zDA9B+5osIg==';
    script.crossOrigin = 'anonymous';
    script.referrerPolicy = 'no-referrer';
    script.onload = () => {
      if (typeof window !== 'undefined' && (window as any).cookieconsent) {
        (window as any).cookieconsent.initialise({
          current_lang: 'en',
          autoclear_cookies: true,
          page_scripts: true,
          onFirstAction: function (user_preferences: any, cookie: any) {
            const analyticsEnabled = (window as any).cookieconsent.allowedCategory('analytics');
            console.log(`analytics ${analyticsEnabled ? 'enabled' : 'disabled'}`);
          },
          onAccept: function (cookie: any) {
            // Handle what happens when cookies are accepted
          },
          onChange: function (cookie: any, changed_preferences: any) {
            // Handle what happens when preferences change
          },
          languages: {
            en: {
              consent_modal: {
                title: 'We use cookies!',
                description:
                  'Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <button type="button" data-cc="c-settings" class="cc-link">Let me choose</button>',
                primary_btn: {
                  text: 'Accept all',
                  role: 'accept_all',
                },
                secondary_btn: {
                  text: 'Reject all',
                  role: 'accept_necessary',
                },
              },
              settings_modal: {
                title: 'Cookie Settings',
                save_settings_btn: 'Save settings',
                accept_all_btn: 'Accept all',
                reject_all_btn: 'Reject all',
                close_btn_label: 'Close',
                cookie_table_headers: [
                  { col1: 'Name' },
                  { col2: 'Domain' },
                  { col3: 'Expiration' },
                  { col4: 'Description' },
                ],
                blocks: [
                  {
                    title: 'Cookie usage 📢',
                    description:
                      'I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="#" class="cc-link">privacy policy</a>.',
                  },
                  {
                    title: 'Strictly necessary cookies',
                    description:
                      'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly',
                    toggle: {
                      value: 'necessary',
                      enabled: true,
                      readonly: true,
                    },
                  },
                  {
                    title: 'Performance and Analytics cookies',
                    description:
                      'These cookies allow the website to remember the choices you have made in the past',
                    toggle: {
                      value: 'analytics',
                      enabled: false,
                      readonly: false,
                    },
                    cookie_table: [
                      {
                        col1: '^_ga',
                        col2: 'google.com',
                        col3: '2 years',
                        col4: 'description ...',
                        is_regex: true,
                      },
                      {
                        col1: '_gid',
                        col2: 'google.com',
                        col3: '1 day',
                        col4: 'description ...',
                      },
                    ],
                  },
                  {
                    title: 'Advertisement and Targeting cookies',
                    description:
                      'These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you',
                    toggle: {
                      value: 'targeting',
                      enabled: false,
                      readonly: false,
                    },
                  },
                  {
                    title: 'More information',
                    description:
                      'For any queries in relation to our policy on cookies and your choices, please <a class="cc-link" href="#yourcontactpage">contact us</a>.',
                  },
                ],
              },
            },
          },
        });
      }
    };
    document.head.appendChild(script);

    // Clean up script on component unmount
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head>
        {/* Global Head elements */}
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Cookie Consent CSS */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.6/cookieconsent.min.css"
          integrity="sha512-rXr/Zsh6cR8lV/87eGnTzFPI5J9dR/tI4prhXjjtMl9QUdm1G4L7dxh5YwfrEOULODo28jRfGczJh3AXLt9LOg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;