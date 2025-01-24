const { expect } = require("@playwright/test");

class AccountCreatedPage {
  constructor(page) {
    this.page = page;
    this.accountPageHeader = page.getByText("Account Created!");
    this.continueBtn = page.getByRole("link", { name: " Continue" });
  }

  async verifyAccountCreateHeader() {
    // await this.accountPageHeader.waitFor();
    expect(await this.accountPageHeader).toBeVisible();
  }

  async clickContinueBtn() {
    await this.continueBtn.waitFor();
    await this.continueBtn.click();
  }
}
module.exports = { AccountCreatedPage };
