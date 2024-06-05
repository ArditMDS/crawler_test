import { test, expect } from '@playwright/test';

test.beforeEach('Open start URL', async ({ page }) => {
  console.log(`Running ${test.info().title}`);
  await page.goto('http://localhost:5173/');
});
test('has value 2', async ({ page }) => {
  const buttonToClick = await page.locator("#counterButton");
  await buttonToClick.click({clickCount: 2});

  await expect(buttonToClick).toHaveText('count is 2');
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
