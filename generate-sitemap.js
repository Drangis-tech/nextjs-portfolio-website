const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { resolve } = require('path');

// Define your website's URLs and metadata
const links = [
  { url: '/', changefreq: 'monthly', priority: 1.0 },
  { url: '/atlikti-darbai', changefreq: 'monthly', priority: 0.8 },
  { url: '/paslaugos', changefreq: 'monthly', priority: 0.8 },
  { url: '/apie-mus', changefreq: 'monthly', priority: 0.8 },
  { url: '/kainos', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
];

const generateSitemap = async () => {
  const sitemap = new SitemapStream({ hostname: 'https://brandforge.lt' }); // Your site's base URL
  const writeStream = createWriteStream(resolve(__dirname, 'public', 'sitemap.xml'));

  sitemap.pipe(writeStream);

  // Add each link to the sitemap
  links.forEach(link => sitemap.write(link));

  sitemap.end();

  const data = await streamToPromise(sitemap);
  return data;
};

// Execute the sitemap generation
generateSitemap()
  .then(() => {
    console.log('Sitemap generated successfully.');
  })
  .catch(error => {
    console.error('Error generating sitemap:', error);
  });