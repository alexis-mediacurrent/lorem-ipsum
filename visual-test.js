const puppeteer = require('puppeteer');
const percySnapshot = require('@percy/puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const baseUrl = 'http://lorem-ipsum.ddev.site';

  // List de routes to test.
  const routes = [
    '/',
    '/test-a',
    '/article-1',
  ];

  for (const route of routes) {
    const url = `${baseUrl}${route}`;
    console.log(`Capturing snapshot of: ${url}`);

    try {
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
      await page.waitForTimeout(1000); // Wait for everything to load
      await percySnapshot(page, `Snapshot - ${route}`);
    } catch (error) {
      console.error(`❌ Error loading ${url}:`, error);
    }
  }

  await browser.close();
})();
