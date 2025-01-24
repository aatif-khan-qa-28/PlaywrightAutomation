const { expect } = require("@playwright/test");
const { stat } = require("fs");

class LoginPage {
  constructor(page) {
    this.page = page;
    this.newUserHeader = page.getByText("New User Signup!");
    this.existingUserHeader = page.getByText("Login to your account");
    this.signUpBtn = page.getByRole("button", { name: "Signup" });
    this.signUpName = page.getByPlaceholder("Name");
    this.signUpEmail = page.locator("[data-qa='signup-email']");
    this.loggedinUsernametext = page.getByText(" Logged in as ");
    this.loginEmail = page.locator("[data-qa='login-email']");
    this.loginPassword = page.getByPlaceholder("Password");
    this.loginBtn = page.getByRole("button", { name: "Login" });
    this.invalidLoginErrorMsg = page.getByText(
      "Your email or password is incorrect!"
    );
  }

  async signUpHeaderTest() {
    await this.newUserHeader.waitFor({ state: "visible" });
    expect(await this.newUserHeader).toBeVisible();
  }

  async loginAsExistingUserHeaderText() {
    await this.existingUserHeader.waitFor({ state: "visible" });
    expect(await this.existingUserHeader).toBeVisible();
  }
  async enterSignUpName(name) {
    await this.signUpName.waitFor({ state: "visible" });
    expect(this.signUpName).toBeVisible();
    await this.signUpName.fill(name);
  }

  async enterLoginEmail(email) {
    await this.loginEmail.waitFor({ state: "visible" });
    expect(await this.loginEmail).toBeVisible();
    await this.loginEmail.fill(email);
  }

  async enterLoginPswd(password) {
    await this.loginPassword.waitFor({ state: "visible" });
    expect(await this.loginPassword).toBeVisible();
    await this.loginPassword.fill(password);
  }

  async enterSignupEmail(email) {
    await this.signUpEmail.waitFor({ state: "visible" });
    expect(this.signUpEmail).toBeVisible();
    await this.signUpEmail.fill(email);
  }

  async clickSignUpBtn() {
    await this.signUpBtn.waitFor({ state: "visible" });
    await this.signUpBtn.click();
  }

  async clickLoginBtn() {
    await this.loginBtn.waitFor({ state: "visible" });
    await this.loginBtn.click();
  }

  async verifyLoginError() {
    await this.invalidLoginErrorMsg.waitFor({ state: "visible" });
    expect(await this.invalidLoginErrorMsg).toContainText("incorrect!");
  }

  async verifyLoggedInUsername(name) {
    await this.loggedinUsernametext.waitFor({ state: "visible" });
    expect(await this.loggedinUsernametext).toContainText(name).toBeTruthy;
  }

  async verifyLoginPage() {
    const currentUrl = await this.page.url();
    console.log(currentUrl);
    expect(currentUrl).toBe("https://automationexercise.com/login");
  }
}

module.exports = { LoginPage };
