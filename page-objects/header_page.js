class HeaderPage {
    constructor() {
        
    }

    get headerTitle() {
        return $("//div[@class='container-fluid']//h1");
    }

    get headerImage() {
        return $("//img");
    }

    get headerBody() {
        return $("//p");
    }


}

module.exports = new HeaderPage()