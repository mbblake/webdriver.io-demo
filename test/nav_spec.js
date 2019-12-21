const navPage = require("../page-objects/nav_page")
const loginPage = require("../page-objects/login_page")
const navData = require("../page-data/nav_data")
const loginData = require("../page-data/login_data")

describe("Nav Page Tests", () => {
    beforeEach(() => {
        browser.url("./");
    })

    it("should display all Nav page elements", () => {
        loginPage.logIn();

        expect(navPage.homeLink.isDisplayed()).to.be.true;
        expect(navPage.googleLink.isDisplayed()).to.be.true;
        expect(navPage.heroFactsLink.isDisplayed()).to.be.true;
        expect(navPage.logoutLink.isDisplayed()).to.be.true;

        navPage.heroFactsLink.click();

        expect(navPage.wolverineOption.isDisplayed()).to.be.true;
        expect(navPage.spidermanOption.isDisplayed()).to.be.true;
    })

    it("should display and close Wolverine modal", () => {
        loginPage.logIn();
        navPage.heroFactsLink.click();
        navPage.wolverineOption.click();

        navPage.wolverineModal.waitForDisplayed();

        expect(navPage.wolverineModalTitle.isDisplayed()).to.be.true;
        expect(navPage.wolverineModalTitle.getText()).to.equal(navData.wolverineModalTitle);

        expect(navPage.wolverineModalBody.isDisplayed()).to.be.true;
        expect(navPage.wolverineModalBody.getText()).to.equal(navData.wolverineModalBody);

        expect(navPage.wolverineModalCloseButton.isDisplayed()).to.be.true;
        expect(navPage.wolverineModalXButton.isDisplayed()).to.be.true;

        navPage.wolverineModalCloseButton.click();
        navPage.wolverineModal.waitForDisplayed(undefined, true);

        expect(navPage.wolverineModal.isDisplayed()).to.be.false;

    })

    it("should display and close Spider-Man modal", () => {
        loginPage.logIn();
        navPage.heroFactsLink.click();
        navPage.spidermanOption.click();

        navPage.spidermanModal.waitForDisplayed();

        expect(navPage.spidermanModalTitle.isDisplayed()).to.be.true;
        expect(navPage.spidermanModalTitle.getText()).to.equal(navData.spidermanModalTitle);

        expect(navPage.spidermanModalBody.isDisplayed()).to.be.true;
        expect(navPage.spidermanModalBody.getText()).to.equal(navData.spidermanModalBody);


        expect(navPage.spidermanModalCloseButton.isDisplayed()).to.be.true;
        expect(navPage.spidermanModalXButton.isDisplayed()).to.be.true;

        navPage.spidermanModalCloseButton.click();
        navPage.spidermanModal.waitForDisplayed(undefined, true);

        expect(navPage.spidermanModal.isDisplayed()).to.be.false;

    })

    it("should display Login page without email and password set when logging out", () => {
        loginPage.logIn();
        navPage.logoutLink.click();

        expect(loginPage.emailFieldInput.getAttribute("value")).to.equal("");
        expect(loginPage.passwordFieldInput.getAttribute("value")).to.equal("");
    })

    it("should display Login page with email and password set when logging out", () => {
        loginPage.logInRememberMe();
        navPage.logoutLink.click();

        expect(loginPage.emailFieldInput.getAttribute("value")).to.equal(loginData.exampleUser1.email);
        expect(loginPage.passwordFieldInput.getAttribute("value")).to.equal(loginData.exampleUser1.password);
        expect(loginPage.rememberLoginCheckbox.isSelected()).to.be.true;
    })

    it("should display no search results found alert", () => {
        loginPage.logIn();
        navPage.searchFieldInput.setValue(navData.invalidSearchKeywords);
        navPage.searchSubmitButton.click();
        const alertMessage = browser.getAlertText();

        expect(alertMessage).to.equal(navData.noResultsFoundMsg);

        browser.acceptAlert();
    })

    it("should display search results found alert", () => {
        loginPage.logIn();
        navPage.searchFieldInput.setValue(navData.validSearchKeywords);
        navPage.searchSubmitButton.click();
        const alertMessage = browser.getAlertText();

        expect(alertMessage).to.equal(navData.resultsFoundMsg);

        browser.acceptAlert();
    })

})