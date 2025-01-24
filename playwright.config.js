// @ts-check
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  use: {
    baseURL: "http://automationexercise.com/",
    headless: true,
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },

  retries: process.env.CI ? 2 : 0, // Retry failed tests 2 times in CI
  workers: process.env.CI ? 4 : undefined, // Use 4 workers in CI, default locally
  reporter: process.env.CI ? "github" : "list",

  timeout: 30000,
  outputDir: "test-results/",

  expect: {
    // wait for assertions etx.
    timeout: 10000,
  },

  webServer: {
    command: "npm run start", // Start your app server for E2E tests
    port: 3000, // Ensure the port matches your app's local server
    timeout: 120000, // Wait for the server to start
    reuseExistingServer: true, // Prevent server restarts locally
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
      fullyParallel: true,
    },
    {
      name: "edge",
      use: {...devices["Desktop Edge"]},
      fullyParallel: true,
    }
  ],
});
