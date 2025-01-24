const { test, expect } = require("@playwright/test");
const { POManager } = require("../pages/POManager");
const { setupBeforeEach } = require("./testSetup");

setupBeforeEach();
const credentials = JSON.parse(
    JSON.stringify(require("./test-data/credentials.json"))
  );
test("Test Case 5 - Register using existing Email", async ({ page }) => {
  const poManager = new POManager(page);
  const basePage = poManager.getBasePage();
  const loginPage = poManager.getLoginPage();

  await basePage.clickOnsignUpLogin();
  await loginPage.signUpHeaderTest();
  await loginPage.enterSignUpName(credentials.existingUser.name);
  await loginPage.enterSignupEmail(credentials.existingUser.email);
  await loginPage.clickSignUpBtn();
  // Verify error 'Email Address already exist!' is visible
  await loginPage.verifySignUpError();

});

