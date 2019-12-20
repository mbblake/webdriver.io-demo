let votePage = require("../page-objects/vote_page")
let loginPage = require("../page-objects/login_page")
const config = require("../config/main-config")


describe("Vote Page Tests", () => {
    beforeEach(() => {
        browser.url("./");

        loginPage.logIn();
    })

    it("should display all default Roster page elements", () => {
        expect(votePage.voteTitleText.isDisplayed()).to.be.true;
        expect(votePage.voteTitleText.getText()).to.equal("Vote for your favorite Superhero movie")

        expect(votePage.xmenRadioButtonText.isDisplayed()).to.be.true;
        expect(votePage.xmenRadioButtonText.getText()).to.equal("X-Men")

        expect(votePage.avengersRadioButtonText.isDisplayed()).to.be.true;
        expect(votePage.avengersRadioButtonText.getText()).to.equal("Avengers")

        expect(votePage.deadpoolRadioButtonText.isDisplayed()).to.be.true;
        expect(votePage.deadpoolRadioButtonText.getText()).to.equal("Deadpool")

        expect(votePage.spidermanRadioButtonText.isDisplayed()).to.be.true;
        expect(votePage.spidermanRadioButtonText.getText()).to.equal("Spider-Man Homecoming")

        expect(votePage.ironmanRadioButtonText.isDisplayed()).to.be.true;
        expect(votePage.ironmanRadioButtonText.getText()).to.equal("Iron Man")

        expect(votePage.submitButton.isDisplayed()).to.be.true;

        expect(votePage.movieLabel.isDisplayed()).to.be.true;
        expect(votePage.movieLabel.getText()).to.equal("Movie")

        expect(votePage.votesLabel.isDisplayed()).to.be.true;
        expect(votePage.votesLabel.getText()).to.equal("Votes")

        expect(votePage.xmenLabel.isDisplayed()).to.be.true;
        expect(votePage.xmenLabel.getText()).to.equal("X-Men")

        expect(votePage.xmenValue.isDisplayed()).to.be.true;
        expect(votePage.xmenValue.getText()).to.equal("10")

        expect(votePage.avengersLabel.isDisplayed()).to.be.true;
        expect(votePage.avengersLabel.getText()).to.equal("Avengers")

        expect(votePage.avengersValue.isDisplayed()).to.be.true;
        expect(votePage.avengersValue.getText()).to.equal("5")

        expect(votePage.deadpoolLabel.isDisplayed()).to.be.true;
        expect(votePage.deadpoolLabel.getText()).to.equal("Deadpool")

        expect(votePage.deadpoolValue.isDisplayed()).to.be.true;
        expect(votePage.deadpoolValue.getText()).to.equal("22")

        expect(votePage.spidermanLabel.isDisplayed()).to.be.true;
        expect(votePage.spidermanLabel.getText()).to.equal("Spider-Man Homecoming")

        expect(votePage.spidermanValue.isDisplayed()).to.be.true;
        expect(votePage.spidermanValue.getText()).to.equal("12")

        expect(votePage.ironmanLabel.isDisplayed()).to.be.true;
        expect(votePage.ironmanLabel.getText()).to.equal("Iron Man")

        expect(votePage.ironmanValue.isDisplayed()).to.be.true;
        expect(votePage.ironmanValue.getText()).to.equal("1")

    })

    it("should add 1 to X-Men vote count", () => {
        expect(votePage.thanksAlertText.isDisplayed()).to.be.false;

        votePage.submitButton.click()
        
        expect(votePage.xmenValue.getText()).to.equal("11")
        expect(votePage.thanksAlertText.isDisplayed()).to.be.true;
        expect(votePage.thanksAlertText.getText()).to.equal("Thanks for Voting!")
        expect(votePage.voteForm.isDisplayed()).to.be.false;
    })

    it("should add 1 to Avengers vote count", () => {
        expect(votePage.thanksAlertText.isDisplayed()).to.be.false;

        votePage.avengersRadioButtonInput.click()
        votePage.submitButton.click()

        expect(votePage.avengersValue.getText()).to.equal("6")
        expect(votePage.thanksAlertText.isDisplayed()).to.be.true;
        expect(votePage.thanksAlertText.getText()).to.equal("Thanks for Voting!")
        expect(votePage.voteForm.isDisplayed()).to.be.false;
    })

    it("should add 1 to Deadpool vote count", () => {
        expect(votePage.thanksAlertText.isDisplayed()).to.be.false;

        votePage.deadpoolRadioButtonInput.click()
        votePage.submitButton.click()

        expect(votePage.deadpoolValue.getText()).to.equal("23")
        expect(votePage.thanksAlertText.isDisplayed()).to.be.true;
        expect(votePage.thanksAlertText.getText()).to.equal("Thanks for Voting!")
        expect(votePage.voteForm.isDisplayed()).to.be.false;
    })

    it("should add 1 to Spider-Man Homecoming vote count", () => {
        expect(votePage.thanksAlertText.isDisplayed()).to.be.false;
        
        votePage.spidermanRadioButtonInput.click()
        votePage.submitButton.click()

        expect(votePage.spidermanValue.getText()).to.equal("13")
        expect(votePage.thanksAlertText.isDisplayed()).to.be.true;
        expect(votePage.thanksAlertText.getText()).to.equal("Thanks for Voting!")
        expect(votePage.voteForm.isDisplayed()).to.be.false;
    })

    it("should add 1 to Iron Man vote count", () => {
        expect(votePage.thanksAlertText.isDisplayed()).to.be.false;
        
        votePage.ironmanRadioButtonInput.click()
        votePage.submitButton.click()

        expect(votePage.ironmanValue.getText()).to.equal("2")
        expect(votePage.thanksAlertText.isDisplayed()).to.be.true;
        expect(votePage.thanksAlertText.getText()).to.equal("Thanks for Voting!")
        expect(votePage.voteForm.isDisplayed()).to.be.false;
    })

})