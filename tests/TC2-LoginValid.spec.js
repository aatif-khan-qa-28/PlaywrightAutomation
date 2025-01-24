const { test, expect } = require("@playwright/test");
const { POManager } = require("../pages/POManager");
const { setupBeforeEach } = require("./testSetup");

setupBeforeEach();
const credentials = JSON.parse(
    JSON.stringify(require("./test-data/credentials.json"))
  );
test("Test Case 2 - Login using valid credentials", async ({ page }) => {
  const poManager = new POManager(page);
  const basePage = poManager.getBasePage();
  const loginPage = poManager.getLoginPage();
  const deleteAccountpage = poManager.getDeletePage();

  await basePage.clickOnsignUpLogin();
  await loginPage.loginAsExistingUserHeaderText();
  await loginPage.enterLoginEmail(credentials.existingUser.email);
  await loginPage.enterLoginPswd(credentials.existingUser.password);
  await loginPage.clickLoginBtn();
  await loginPage.verifyLoggedInUsername(credentials.existingUser.name)
  // await basePage.clickOnDeleteAccount();
  // await deleteAccountpage.deletePageHeader();
});

