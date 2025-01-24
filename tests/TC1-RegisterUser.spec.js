const { test, expect } = require("@playwright/test");
const { POManager } = require("../pages/POManager");
const { setupBeforeEach } = require("./testSetup");

const credentials = JSON.parse(
  JSON.stringify(require("./test-data/credentials.json"))
);

const accountData = JSON.parse(
  JSON.stringify(require("./test-data/signUpPageFormData.json"))
);

setupBeforeEach();

test("Test case 1 : Register User", async ({ page }) => {
  const poManager = new POManager(page);
  const basePage = poManager.getBasePage();
  const loginPage = poManager.getLoginPage();
  const signupPage = poManager.getSignUpPage();
  const accountCreatedPage = poManager.getAccountCreatedPage();
  const deleteAccountpage = poManager.getDeletePage();

  await basePage.clickOnsignUpLogin();
  await loginPage.signUpHeaderTest();
  await loginPage.enterSignUpName(credentials.newUser.name);
  await loginPage.enterSignupEmail(credentials.newUser.email);
  await loginPage.clickSignUpBtn();

  await signupPage.accountInfoHeader();
  await signupPage.selectTitle();
  await signupPage.verifyName(credentials.newUser.name);
  await signupPage.verifyEmail(credentials.newUser.email);
  await signupPage.enterPassword(credentials.newUser.password);
  await signupPage.selectDOB(
    accountData.day,
    accountData.month,
    accountData.year
  );
  await signupPage.checkNewsLetter();
  await signupPage.checkOffers();
  await signupPage.enterFirstName(accountData.firstName);
  await signupPage.enterLastName(accountData.lastName);
  await signupPage.enterCompanyName(accountData.company);
  await signupPage.enterAdressOne(accountData.address1);
  await signupPage.enterAdressTwo(accountData.address2);
  await signupPage.selectCountry(accountData.country);
  await signupPage.enterState(accountData.state);
  await signupPage.enterCity(accountData.city);
  await signupPage.enterZipcode(accountData.zipcode);
  await signupPage.enterMobileNumber(accountData.mobileNumber);
  await signupPage.clickOnCreateAccount();

  await accountCreatedPage.verifyAccountCreateHeader();
  await accountCreatedPage.clickContinueBtn();

  await loginPage.verifyLoggedInUsername(credentials.newUser.name);
  await basePage.clickOnDeleteAccount();

  await deleteAccountpage.verifydeletePageHeader();
  await deleteAccountpage.clickContinueBtn();
});
