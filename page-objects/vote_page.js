class VotePage {
    constructor() {

    }

    get voteTitleText() {
        return $("//h4");
    }

    get xmenRadioButtonInput() {
        return $("#heroMovieRadio1");
    }

    get xmenRadioButtonText() {
        return $("#vote-form > div:nth-child(1) > label");
    }

    get avengersRadioButtonText() {
        return $("#vote-form > div:nth-child(2) > label");
    }

    get avengersRadioButtonInput() {
        return $("#heroMovieRadio2");
    }

    get deadpoolRadioButtonText() {
        return $("#vote-form > div:nth-child(3) > label");
    }
    
    get deadpoolRadioButtonInput() {
        return $("#heroMovieRadio3");
    }

    get spidermanRadioButtonText() {
        return $("#vote-form > div:nth-child(4) > label");
    }

    get spidermanRadioButtonInput() {
        return $("#heroMovieRadio4");
    }

    get ironmanRadioButtonText() {
        return $("#vote-form > div:nth-child(5) > label");
    }

    get ironmanRadioButtonInput() {
        return $("#heroMovieRadio5");
    }

    get submitButton() {
        return $("//form[@id='vote-form']/button");
    }

    get movieLabel() {
        return $("body > div.container-fluid > div:nth-child(6) > div > table > thead > tr > th:nth-child(1)");
    }

    get votesLabel() {
        return $("body > div.container-fluid > div:nth-child(6) > div > table > thead > tr > th:nth-child(2)");
    }

    get xmenLabel() {
        return $("#movieName1");
    }

    get xmenValue() {
        return $("#movieVotes1");
    }

    get avengersLabel() {
        return $("#movieName2");
    }

    get avengersValue() {
        return $("#movieVotes2");
    }

    get deadpoolLabel() {
        return $("#movieName3");
    }

    get deadpoolValue() {
        return $("#movieVotes3");
    }

    get spidermanLabel() {
        return $("#movieName4");
    }

    get spidermanValue() {
        return $("#movieVotes4");
    }

    get ironmanLabel() {
        return $("#movieName5");
    }

    get ironmanValue() {
        return $("#movieVotes5");
    }

    get thanksAlertText() {
        return $("#vote-alert");
    }

    get voteForm() {
        return $("#vote-form");
    }
}

module.exports = new VotePage()