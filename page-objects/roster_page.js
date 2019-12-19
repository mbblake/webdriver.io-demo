class RosterPage {
    constructor() {

    }

    get rosterTitleText() {
        return $("//h3");
    }

    get wolverineItemText() {
        return $("//ul[@id='hero-list']/li[text()='Wolverine']");
    }

    get ironManItemText() {
        return $("//ul[@id='hero-list']/li[text()='Iron Man']");
    }

    get deadpoolItemText() {
        return $("//ul[@id='hero-list']/li[text()='Deadpool']");
    }

    get thorItemText() {
        return $("//ul[@id='hero-list']/li[text()='Thor']");
    }

    get spiderManItemText() {
        return $("//ul[@id='hero-list']/li[text()='Spider-Man']");
    }

    get addHeroFieldLabel() {
        return $("//label[@for='heroInput']");
    }

    get addHeroFieldInput() {
        return $("#heroInput");
    }

    get submitButton() {
        return $("//form[@id='addHero-form']/button");
    }

    arbitraryHeroItemText(heroName) {
        return $("//ul[@id='hero-list']/li[text()='" + heroName + "']");
    }

    get rosterErrorMessage() {
        return $("#addHero-Alert");
    }

}

module.exports = new RosterPage()