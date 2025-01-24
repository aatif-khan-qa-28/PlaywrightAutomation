const { expect } = require("@playwright/test");

class SignupPage {
  constructor(page) {
    this.page = page;
    this.signUpPageHeader = page.getByText("Enter Account Information");
    this.mr = page.locator("#id_gender1");
    this.mrs = page.locator("#id_gender2");
    this.name = page.locator("#name");
    this.email = page.locator("#email");
    this.password = page.locator("#password");
    this.dayDate = page.locator("#days");
    this.monthDate = page.locator("#months");
    this.yearDate = page.locator("#years");
    this.newsletterCheckbox = page.locator("#newsletter");
    this.offersCheckBox = page.locator("#optin");
    // this.firstName = page.locator("#first_name")
    // this.lastName = page.locator("#last_name")
    // this.company = page.locator("#company")
    // this.addressOne = page.locator("#address1")
    // this.addressTwo = page.locator("address2")
    this.firstName = page.getByLabel("First name *", { exact: true });
    this.lastName = page.getByLabel("Last name *", { exact: true });
    this.company = page.getByLabel("Company", { exact: true });
    this.addressOne = page.getByLabel("Address *");
    this.addressTwo = page.getByLabel("Address 2");
    this.countryDropdown = page.getByLabel("Country *");
    this.state = page.getByLabel("State *");
    this.city = page.getByLabel("City *");
    this.zipcode = page.locator("#zipcode");
    this.mobileNumber = page.getByLabel("Mobile Number *");
    this.createAccountButton = page.getByRole("button", {
      name: "Create Account",
    });
  }

  async accountInfoHeader() {
    await this.signUpPageHeader.waitFor({ state: "visible" });
    expect(await this.signUpPageHeader).toBeVisible();
  }

  async selectTitle(){
    await this.mr.waitFor({state:"visible"});
    expect(await this.mr).toBeVisible;
    await this.mr.click()
  }

  async verifyName(name) {
    await expect(this.name).toHaveValue(name);
  }

  async verifyEmail(email) {
    await expect(this.email).toHaveValue(email);
  }

  async enterPassword(password){
    await this.password.waitFor({state: "visible"});
    expect(await this.password).toBeVisible();
    await this.password.fill(password);

  }

  async selectDOB(day, month, year){
    await this.dayDate.waitFor({ state: "visible" });
    await expect(this.dayDate).toBeVisible();
    await this.dayDate.selectOption(day);

    await this.monthDate.waitFor({ state: "visible" });
    await expect(this.monthDate).toBeVisible();
    await this.monthDate.selectOption(month);

    await this.yearDate.waitFor({ state: "visible" });
    await expect(this.yearDate).toBeVisible();
    await this.yearDate.selectOption(year);

  }

//   async selectDay(day) {
//     await this.dayDate.waitFor({ state: "visible" });
//     await expect(this.dayDate).toBeVisible();
//     await this.dayDate.selectOption(day);
//   }

//   async selectMonth(month) {
//     await this.monthDate.waitFor({ state: "visible" });
//     await expect(this.monthDate).toBeVisible();
//     await this.monthDate.selectOption(month);
//   }

//   async selectYear(year) {
//     await this.yearDate.waitFor({ state: "visible" });
//     await expect(this.yearDate).toBeVisible();
//     await this.yearDate.selectOption(year);
//   }

  async checkNewsLetter() {
    await this.newsletterCheckbox.waitFor({ state: "visible" });
    await expect(this.newsletterCheckbox).toBeVisible();
    await this.newsletterCheckbox.check();
  }

  async checkOffers() {
    await this.offersCheckBox.waitFor({ state: "visible" });
    await expect(this.offersCheckBox).toBeVisible();
    await this.offersCheckBox.check();
  }

  async enterFirstName(firstName) {
    await this.firstName.waitFor({ state: "visible" });
    await expect(this.firstName).toBeVisible();
    await this.firstName.fill(firstName);
  }

  async enterLastName(lastName) {
    await this.lastName.waitFor({ state: "visible" });
    await expect(this.lastName).toBeVisible();
    await this.lastName.fill(lastName);
  }
  async enterCompanyName(company) {
    await this.company.waitFor({ state: "visible" });
    await expect(this.company).toBeVisible();
    await this.company.fill(company);
  }

  async enterAdressOne(address1) {
    await this.addressOne.waitFor({ state: "visible" });
    await expect(this.addressOne).toBeVisible();
    await this.addressOne.fill(address1);
  }
  
  async enterAdressTwo(address2) {
    await this.addressTwo.waitFor({ state: "visible" });
    await expect(this.addressTwo).toBeVisible();
    await this.addressTwo.fill(address2);
  }

  async selectCountry(country) {
    await this.countryDropdown.waitFor({ state: "visible" });
    await expect(this.countryDropdown).toBeVisible();
    await this.countryDropdown.selectOption(country);
  }

  async enterState(state) {
    await this.state.waitFor({ state: "visible" });
    await expect(this.state).toBeVisible();
    await this.state.fill(state);
  }
  async enterCity(city) {
    await this.city.waitFor({ state: "visible" });
    await expect(this.city).toBeVisible();
    await this.city.fill(city);
  }
  async enterZipcode(zipCode) {
    await this.zipcode.waitFor({ state: "visible" });
    await expect(this.zipcode).toBeVisible();
    await this.zipcode.fill(zipCode);
  }

  async enterMobileNumber(mobileNumber) {
    await this.mobileNumber.waitFor({ state: "visible" });
    await expect(this.mobileNumber).toBeVisible();
    await this.mobileNumber.fill(mobileNumber);
  }

  async clickOnCreateAccount() {
    await this.createAccountButton.waitFor({ state: "visible" });
    await expect(this.createAccountButton).toBeVisible();
    await this.createAccountButton.click();
  }


}

module.exports = { SignupPage };
