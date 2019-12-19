let rosterPage = require("../page-objects/roster_page")
let loginPage = require("../page-objects/login_page")
const config = require("../config/main-config")

describe("Roster Page Tests", () => { 
    beforeEach(() => {
        browser.url(config.baseUrl);

        loginPage.logIn();
    })

    it("should display all default Roster page elements", () => {
        expect(rosterPage.rosterTitleText.isDisplayed()).to.be.true;
        expect(rosterPage.rosterTitleText.getText()).to.equal("Build Your Superhero Roster:");

        expect(rosterPage.wolverineItemText.isDisplayed()).to.be.true;
        expect(rosterPage.wolverineItemText.getText()).to.equal("Wolverine");

        expect(rosterPage.ironManItemText.isDisplayed()).to.be.true;
        expect(rosterPage.ironManItemText.getText()).to.equal("Iron Man");

        expect(rosterPage.deadpoolItemText.isDisplayed()).to.be.true;
        expect(rosterPage.deadpoolItemText.getText()).to.equal("Deadpool");

        expect(rosterPage.thorItemText.isDisplayed()).to.be.true;
        expect(rosterPage.thorItemText.getText()).to.equal("Thor");

        expect(rosterPage.spiderManItemText.isDisplayed()).to.be.true;
        expect(rosterPage.spiderManItemText.getText()).to.equal("Spider-Man");

        expect(rosterPage.addHeroFieldLabel.isDisplayed()).to.be.true;
        expect(rosterPage.addHeroFieldLabel.getText()).to.equal("ADD A SUPERHERO");


        expect(rosterPage.addHeroFieldInput.isDisplayed()).to.be.true;
        expect(rosterPage.submitButton.isDisplayed()).to.be.true;
    })

    it("should add a hero on submit", () => {
        rosterPage.addHeroFieldInput.setValue(config.newHeroName);
        rosterPage.submitButton.click();

        expect(rosterPage.arbitraryHeroItemText(config.newHeroName).isDisplayed()).to.be.true;
    })

    it("should display error message when no hero is entered", () => {
        rosterPage.submitButton.click();

        expect(rosterPage.rosterErrorMessage.isDisplayed()).to.be.true;
    })

    it("should remove the error message when a hero is entered", () => {
        rosterPage.submitButton.click();
        rosterPage.addHeroFieldInput.setValue(config.newHeroName);
        rosterPage.submitButton.click();

        expect(rosterPage.rosterErrorMessage.isDisplayed()).to.be.false;
    })

})