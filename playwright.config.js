
const { devices } = require("@playwright/test");
const RPconfig = {
  enabled: false,
  includeTestSteps: true,
  token: "c7c26122-2def-42b0-a6af-baf17cd1b204",
  endpoint: "http://10.10.90.150:8080/api/v1",
  project: "Trinet",
  launch: "Trinet - Demo execution",
  restClientConfig: {
    timeout: 120000,
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
  },
  attributes: [{ key: "environment", value: "qa" }],
  description: "Automation execution for Trinet",
};
const config = {
  testDir: "./tests",
  timeout: 9000 * 2,
  expect: { timeout: 5000 },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ["junit", { outputFile: "test-results/results.xml" }],
    ["html", { open: "always" }],
    ["@reportportal/agent-js-playwright", RPconfig],
  ],
  use: {
    screenshot: "only-on-failure",
    actionTimeout: 0,
    trace: "on",
    launchOptions: { slowMo: 1000 },
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
};
module.exports = config;
