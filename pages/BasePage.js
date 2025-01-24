const { expect } = require("@playwright/test");


class BasePage {
  constructor(page) {
    this.page = page;
    this.signUpLogin = page.getByRole("link", { name: " Signup / Login" });
    this.logout = page.getByRole("link", { name: "Logout" });
    this.deleteAccount = page.getByRole("link", { name: " Delete Account" });
    this.contactUs = page.getByRole("link", { name: "Contact us" });
    this.testCases = page.getByRole("link", {name:"Test Cases", exact: true});
  }

  async clickOnsignUpLogin() {
    await this.signUpLogin.waitFor();
    await expect(this.signUpLogin).toBeVisible();
    await this.signUpLogin.click();
  }

  async clickOnDeleteAccount() {
    await this.deleteAccount.waitFor();
    await expect(this.deleteAccount).toBeVisible();
    await this.deleteAccount.click();
  }

  async clickOnLogout() {
    await this.logout.waitFor();
    await expect(this.logout).toBeVisible();
    await this.logout.click();
  }

  async clickOnContactUs() {
    await this.contactUs.waitFor();
    await expect(this.contactUs).toBeVisible();
    await this.contactUs.click();
  }
  async clickOnTestCases() {
    await this.testCases.waitFor();
    await expect(this.testCases).toBeVisible();
    await this.testCases.click();
  }
}
module.exports = { BasePage }