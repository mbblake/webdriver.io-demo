describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://webdriver.io')
        const title = browser.getTitle()
        expect(title).to.equal('WebdriverIO · Next-gen WebDriver test framework for Node.js');
    })
})