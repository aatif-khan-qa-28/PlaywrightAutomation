const { test, expect } = require("@playwright/test");
const { POManager } = require("../pages/POManager");
const { setupBeforeEach } = require("./testSetup");

setupBeforeEach();
const credentials = JSON.parse(
  JSON.stringify(require("./test-data/credentials.json"))
);
test("Test Case 3 - Login using invalid credentials", async ({ page }) => {
  const poManager = new POManager(page);
  const basePage = poManager.getBasePage();
  const loginPage = poManager.getLoginPage();

  await basePage.clickOnsignUpLogin();
  await loginPage.loginAsExistingUserHeaderText();
  await loginPage.enterLoginEmail(credentials.invalidUser.email);
  await loginPage.enterLoginPswd(credentials.invalidUser.password);
  await loginPage.clickLoginBtn();
  await loginPage.verifyLoginError();
});
