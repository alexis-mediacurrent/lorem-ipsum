const puppeteer = require('puppeteer');
const percySnapshot = require('@percy/puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://lorem-ipsum.ddev.site');

  await percySnapshot(page, 'Homepage');

  await browser.close();
})();
