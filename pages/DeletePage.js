const { expect } = require("@playwright/test");

class DeletePage{
    constructor(page){
        this.deletePageHeader=page.getByText("Account Deleted!")
        this.continueBtn = page.getByRole("link", { name: " Continue" });


    }

    async verifydeletePageHeader() {
        await this.deletePageHeader.waitFor({ state: "visible" });
        expect(await this.deletePageHeader).toBeVisible();
      }

      async clickContinueBtn() {
        await this.continueBtn.waitFor({ state: "visible" });
        await this.continueBtn.click();
      }
}
module.exports = {DeletePage}