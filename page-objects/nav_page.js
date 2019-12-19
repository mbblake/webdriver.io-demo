class NavPage {
    constructor() {
        
    }

    get homeLink() {
        return $("#navbarSupportedContent > ul > li.nav-item.active > a");
    }

    get googleLink() {
        return $("//a[contains(text(),'Link')]");
    }

    get heroFactsLink() {
        return $("//a[@id='navbarDropdown']");
    }

    get logoutLink() {
        return $("//a[contains(text(),'Logout')]");
    }

    get wolverineOption() {
        return $("//a[contains(text(),'Wolverine')]");
    }

    get spidermanOption() {
        return $("//a[contains(text(),'Spider-Man')]");
    }

    get wolverineModal() {
        return $("#wolverineModal");
    }

    get wolverineModalTitle() {
        return $("#wolverineModalLabel");
    }

    get wolverineModalBody() {
        return $("//div[@id='wolverineModal']//div[@class='modal-body']");
    }

    get wolverineModalCloseButton() {
        return $("//div[@id='wolverineModal']//button[@class='btn btn-secondary']");
    }

    get wolverineModalXButton() {
        return $("//div[@id='wolverineModal']//button[@class='close']");
    }

    get spidermanModal() {
        return $("#spidermanModal");
    }

    get spidermanModalTitle() {
        return $("#spidermanModalLabel");
    }

    get spidermanModalBody() {
        return $("//div[@id='spidermanModal']//div[@class='modal-body']");
    }

    get spidermanModalCloseButton() {
        return $("//div[@id='spidermanModal']//button[@class='btn btn-secondary']");

    }

    get spidermanModalXButton() {
        return $("//div[@id='spidermanModal']//button[@class='close']");
    }

    get searchFieldInput() {
        return $("#search-box");
    }

    get searchSubmitButton() {
        return $("//form[@id='search-form']/button");
    }

    
}

module.exports = new NavPage()