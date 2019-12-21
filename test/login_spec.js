const loginPage = require("../page-objects/login_page")
const loginData = require("../page-data/login_data")

describe("Login Page Tests", () => {
    beforeEach(() => {
        browser.url("./");
    })

    it("should display all Login page elements", () => {
        expect(loginPage.titleText.isDisplayed()).to.be.true;
        expect(loginPage.titleText.getText()).to.equal(loginData.title);

        expect(loginPage.emailFieldLabel.isDisplayed()).to.be.true;
        expect(loginPage.emailFieldInput.isDisplayed()).to.be.true;
        expect(loginPage.emailFieldInput.getAttribute("value")).to.equal("");

        expect(loginPage.passwordFieldLabel.isDisplayed()).to.be.true;
        expect(loginPage.passwordFieldInput.isDisplayed()).to.be.true;
        expect(loginPage.passwordFieldInput.getAttribute("value")).to.equal("");

        expect(loginPage.rememberLoginCheckbox.isDisplayed()).to.be.true;
        expect(loginPage.rememberLoginLabel.isDisplayed()).to.be.true;
        expect(loginPage.rememberLoginCheckbox.isSelected()).to.be.false;

        expect(loginPage.submitButton.isDisplayed()).to.be.true;
    })

    it("should display error message when no email and password entered", () => {
        loginPage.submitButton.click();

        expect(loginPage.loginErrorMessage.isDisplayed()).to.be.true;
        expect(loginPage.loginErrorMessage.getText()).to.equal(loginData.errorMessage);
    })

    it("should display error message when no password entered", () => {
        loginPage.emailFieldInput.setValue(loginData.exampleUser1.email);
        loginPage.submitButton.click();

        expect(loginPage.loginErrorMessage.isDisplayed()).to.be.true;
        expect(loginPage.loginErrorMessage.getText()).to.equal(loginData.errorMessage);
    })

    it("should display error message when no email entered", () => {
        loginPage.passwordFieldInput.setValue(loginData.exampleUser1.password);
        loginPage.submitButton.click();

        expect(loginPage.loginErrorMessage.isDisplayed()).to.be.true;
        expect(loginPage.loginErrorMessage.getText()).to.equal(loginData.errorMessage);
    })

    it("should log user in", () => {
        loginPage.passwordFieldInput.setValue(loginData.exampleUser1.password);
        loginPage.emailFieldInput.setValue(loginData.exampleUser1.email);
        loginPage.submitButton.click();
    })
})