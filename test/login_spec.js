// Tests for Login Page

// Page object file for the Login page
const loginPage = require("../page-objects/login_page")
const config = require("../config/main-config")

describe("Login Page Tests", () => {
    beforeEach(() => {
        // Open the Login Page URL
        browser.url("./");
    })

    it("should display all Login page elements", () => {
        expect(loginPage.titleText.isDisplayed()).to.be.true;
        expect(loginPage.titleText.getText()).to.equal("Welcome. Please Log In.");

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
        expect(loginPage.loginErrorMessage.getText()).to.equal("An email and password are required.");
    })

    it("should display error message when no password entered", () => {
        loginPage.emailFieldInput.setValue("test@test.com");
        loginPage.submitButton.click();

        expect(loginPage.loginErrorMessage.isDisplayed()).to.be.true;
        expect(loginPage.loginErrorMessage.getText()).to.equal("An email and password are required.");
    })

    it("should display error message when no email entered", () => {
        loginPage.passwordFieldInput.setValue("testpassword");
        loginPage.submitButton.click();

        expect(loginPage.loginErrorMessage.isDisplayed()).to.be.true;
        expect(loginPage.loginErrorMessage.getText()).to.equal("An email and password are required.");
    })

    it("should log user in", () => {
        loginPage.passwordFieldInput.setValue("testpassword");
        loginPage.emailFieldInput.setValue("test@test.com");
        loginPage.submitButton.click();
    })
})