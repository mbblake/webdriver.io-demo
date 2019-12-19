let headerPage = require("../page-objects/header_page")
let loginPage = require("../page-objects/login_page")
const config = require("../config/main-config")

describe("Header Page Tests", () => {
    beforeEach(() => {
        browser.url(config.baseUrl);

        loginPage.logIn();
    })

    afterEach(() => {

    })

    it("should contain all Header page elements", () => {
        expect(headerPage.headerTitle.isDisplayed()).to.be.true;
        expect(headerPage.headerTitle.getText()).to.equal("Superhero Roster");

        expect(headerPage.headerImage.isDisplayed()).to.be.true;

        expect(headerPage.headerBody.isDisplayed()).to.be.true;
        expect(headerPage.headerBody.getText()).to.equal("Imagine that you are tasked with building a team of Superheros to save the world. We have given you a few heroes to start with. Add as many heros as you would like to round out your dream team.");
    })
})