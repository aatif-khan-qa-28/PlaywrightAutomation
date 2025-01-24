import { test } from '@playwright/test';

export function setupBeforeEach() {
  test.beforeEach(async ({ page, baseURL }) => {
    console.log(`Running ${test.info().title}`);
    await page.goto(baseURL); // Navigate to the base URL
  });
}