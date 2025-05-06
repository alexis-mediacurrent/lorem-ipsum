const { test } = require('@playwright/test');
const percySnapshot = require('@percy/playwright');

test('Homepage visual test', async ({ page }) => {
  await page.goto('http://lorem-ipsum.ddev.site');
  await percySnapshot(page, 'Homepage');
});

test('Basic Page visual test', async ({ page }) => {
  await page.goto('http://lorem-ipsum.ddev.site/test-a');
  await percySnapshot(page, 'Basic Page');
});

test('Article 1 Page visual test', async ({ page }) => {
  await page.goto('http://lorem-ipsum.ddev.site/article-1');
  await percySnapshot(page, 'Article 1 Page');
});
