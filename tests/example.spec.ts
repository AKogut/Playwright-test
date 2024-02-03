import { test, expect } from '@playwright/test';

const checkTextWritingTestPage = ['Introduction', 'First test', 'Actions', 'Assertions'];

test('first test - check header`s text', async ({page}) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByRole('link', { name: 'Writing tests', exact: true }).click();

  // check main header
  await expect(page.getByLabel('Docs sidebar')).toContainText('Writing tests');

  // check subheader
  await expect(page.locator('#introduction')).toContainText(checkTextWritingTestPage[0]);
  await expect(page.locator('#first-test')).toContainText(checkTextWritingTestPage[1]);
  await expect(page.locator('#actions')).toContainText(checkTextWritingTestPage[2]);
  await expect(page.locator('#assertions')).toContainText(checkTextWritingTestPage[3]);
  
  
});
