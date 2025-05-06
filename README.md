# Visual Regression Testing with Percy

This project uses Percy for visual regression testing to ensure UI consistency across changes.

## Setup

1. Install Percy dependencies:
```bash
npm install
npm install --save-dev @percy/cli
npx playwright install
```

2. Add Percy token to your environment:
```bash
export PERCY_TOKEN=your-project-token
```

## Taking Snapshots

Ensure ddev has started.

```
ddev start
```

```javascript
const { test } = require('@playwright/test');
const percySnapshot = require('@percy/playwright');

test('Homepage visual test', async ({ page }) => {
  await page.goto('http://lorem-ipsum.ddev.site');
  await percySnapshot(page, 'Homepage');
});
```

## Running Tests

Run Playwright tests with Percy:
```bash
npm run test:visual
```

In backend it runs:
```bash
npx percy exec -- npx playwright test tests/visual.spec.js
```

## Best Practices

1. Take snapshots after the page has fully loaded and any animations have completed
2. Use descriptive names for your snapshots
3. Take snapshots at key user interaction points
4. Consider viewport sizes when taking snapshots
5. Use `page.waitForLoadState('networkidle')` before taking snapshots to ensure stability
