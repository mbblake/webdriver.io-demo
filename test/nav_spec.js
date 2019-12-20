let navPage = require("../page-objects/nav_page")
let loginPage = require("../page-objects/login_page")
const config = require("../config/main-config");

describe("Header Page Tests", () => {
    beforeEach(() => {
        browser.url("./");
    })

    it("should display all Nav page elements", () => {
        loginPage.logIn();

        expect(navPage.homeLink.isDisplayed()).to.be.true;
        expect(navPage.googleLink.isDisplayed()).to.be.true;
        expect(navPage.heroFactsLink.isDisplayed()).to.be.true;
        expect(navPage.logoutLink.isDisplayed()).to.be.true;

        navPage.heroFactsLink.click()

        expect(navPage.wolverineOption.isDisplayed()).to.be.true;
        expect(navPage.spidermanOption.isDisplayed()).to.be.true;
    })

    it("should display and close Wolverine modal", () => {
        loginPage.logIn();
        navPage.heroFactsLink.click();
        navPage.wolverineOption.click();

        navPage.wolverineModal.waitForDisplayed();

        expect(navPage.wolverineModalTitle.isDisplayed()).to.be.true;
        expect(navPage.wolverineModalTitle.getText()).to.equal("Wolverine Fact");

        expect(navPage.wolverineModalBody.isDisplayed()).to.be.true;
        expect(navPage.wolverineModalBody.getText()).to.equal("Wolverine made his first comic book appearance in 1974.");

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
        expect(navPage.spidermanModalTitle.getText()).to.equal("Spider-Man Fact");

        expect(navPage.spidermanModalBody.isDisplayed()).to.be.true;
        expect(navPage.spidermanModalBody.getText()).to.equal("Spider-Man was created by Stan Lee and Steve Ditko and first appeared in 1962.");


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

        expect(loginPage.emailFieldInput.getAttribute("value")).to.equal("test@test.com");
        expect(loginPage.passwordFieldInput.getAttribute("value")).to.equal("testpassword");
        expect(loginPage.rememberLoginCheckbox.isSelected()).to.be.true;
    })

    it("should display no search results found alert", () => {
        loginPage.logIn();
        navPage.searchFieldInput.setValue("test keywords");
        navPage.searchSubmitButton.click();
        const alertMessage = browser.getAlertText();

        expect(alertMessage).to.equal("Your search for test keywords returned 0 results. Try something else.");

        browser.acceptAlert();
    })

    it("should display search results found alert", () => {
        loginPage.logIn()
        navPage.searchFieldInput.setValue("wolverine");
        navPage.searchSubmitButton.click();
        const alertMessage = browser.getAlertText();

        expect(alertMessage).to.equal("Wolverine is awesome!");

        browser.acceptAlert();
    })

})