// @ts-check
import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: "./tests",
  // globalSetup: require.resolve("./global-setup"),
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: "http://automationexercise.com/",
    headless: true,
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },

  /* Run tests in files in parallel */
  fullyParallel: true,

  retries: process.env.CI ? 2 : 0, // Retry failed tests 2 times in CI
  workers: process.env.CI ? 4 : undefined, // Use 4 workers in CI, default locally

  reporter: process.env.CI ? "github" : "list",

  timeout: 30 * 1000,
  outputDir: "test-results/",

  expect: {
    // wait for assertions etx.
    timeout: 5000,
  },

  webServer: {
    command: "npm run start", // Start your app server for E2E tests
    port: 3000, // Ensure the port matches your app's local server
    reuseExistingServer: !process.env.CI, // Prevent server restarts locally
  },
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
});
