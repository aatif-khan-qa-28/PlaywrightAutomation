const { AccountCreatedPage } = require("./AccountCreatedPage");
const { LoginPage } = require("./LoginPage");
const { BasePage } = require("./BasePage");
const { SignupPage } = require("./SignupPage");
const { DeletePage } = require("./DeletePage");

class POManager {
  constructor(page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
    this.accountCreatePage = new AccountCreatedPage(page);
    this.basePage = new BasePage(page);
    this.signUpPage = new SignupPage(page);
    this.deletePage = new DeletePage(page);
  }
  getDeletePage() {
    return this.deletePage;
  }
  getLoginPage() {
    return this.loginPage;
  }

  getAccountCreatedPage() {
    return this.accountCreatePage;
  }
  getBasePage() {
    return this.basePage;
  }

  getSignUpPage() {
    return this.signUpPage;
  }
}
module.exports = { POManager };
