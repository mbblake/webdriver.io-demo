const rosterPage = require("../page-objects/roster_page")
const loginPage = require("../page-objects/login_page")
const rosterData = require("../page-data/roster_data")

describe("Roster Page Tests", () => { 
    beforeEach(() => {
        browser.url("./");

        loginPage.logIn();
    })

    it("should display all default Roster page elements", () => {
        expect(rosterPage.rosterTitleText.isDisplayed()).to.be.true;
        expect(rosterPage.rosterTitleText.getText()).to.equal(rosterData.title);

        expect(rosterPage.wolverineItemText.isDisplayed()).to.be.true;
        expect(rosterPage.wolverineItemText.getText()).to.equal(rosterData.wolverineLabel);

        expect(rosterPage.ironManItemText.isDisplayed()).to.be.true;
        expect(rosterPage.ironManItemText.getText()).to.equal(rosterData.ironmanLabel);

        expect(rosterPage.deadpoolItemText.isDisplayed()).to.be.true;
        expect(rosterPage.deadpoolItemText.getText()).to.equal(rosterData.deadpoolLabel);

        expect(rosterPage.thorItemText.isDisplayed()).to.be.true;
        expect(rosterPage.thorItemText.getText()).to.equal(rosterData.thorLabel);

        expect(rosterPage.spiderManItemText.isDisplayed()).to.be.true;
        expect(rosterPage.spiderManItemText.getText()).to.equal(rosterData.spidermanLabel);

        expect(rosterPage.addHeroFieldLabel.isDisplayed()).to.be.true;
        expect(rosterPage.addHeroFieldLabel.getText()).to.equal(rosterData.addHeroLabel);


        expect(rosterPage.addHeroFieldInput.isDisplayed()).to.be.true;
        expect(rosterPage.submitButton.isDisplayed()).to.be.true;
    })

    it("should add a hero on submit", () => {
        rosterPage.addHeroFieldInput.setValue(rosterData.newHeroName);
        rosterPage.submitButton.click();

        expect(rosterPage.arbitraryHeroItemText(rosterData.newHeroName).isDisplayed()).to.be.true;
    })

    it("should display error message when no hero is entered", () => {
        rosterPage.submitButton.click();

        expect(rosterPage.rosterErrorMessage.isDisplayed()).to.be.true;
    })

    it("should remove the error message when a hero is entered", () => {
        rosterPage.submitButton.click();
        rosterPage.addHeroFieldInput.setValue(rosterData.newHeroName);
        rosterPage.submitButton.click();

        expect(rosterPage.rosterErrorMessage.isDisplayed()).to.be.false;
    })

})