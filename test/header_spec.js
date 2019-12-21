const headerPage = require("../page-objects/header_page")
const loginPage = require("../page-objects/login_page")
const headerData = require("../page-data/header_data")


describe("Header Page Tests", () => {
    beforeEach(() => {
        browser.url("./");

        loginPage.logIn();
    })

    it("should contain all Header page elements", () => {
        expect(headerPage.headerTitle.isDisplayed()).to.be.true;
        expect(headerPage.headerTitle.getText()).to.equal(headerData.title);

        expect(headerPage.headerImage.isDisplayed()).to.be.true;

        expect(headerPage.headerBody.isDisplayed()).to.be.true;
        expect(headerPage.headerBody.getText()).to.equal(headerData.bodyMessage);
    })
})