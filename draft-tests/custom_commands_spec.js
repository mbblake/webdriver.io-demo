describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://webdriver.io')
        const info = browser.getUrlAndTitle();
        expect(info.title).to.equal('WebdriverIO · Next-gen WebDriver test framework for Node.js');
        browser.pause(3000);

        $("#search_input_react").waitAndSendKeys("Hello World");
        browser.pause(3000);

        $("//a[contains(text(),'Get Started')]").waitAndClick();
        browser.pause(3000);
    })
})