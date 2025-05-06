const { test } = require('@playwright/test');
const percySnapshot = require('@percy/playwright');

test('Homepage visual test', async ({ page }) => {
  await page.goto('https://lorem-ipsum.ddev.site');
  await page.waitForSelector('h2');
  await percySnapshot(page, 'Homepage');
});