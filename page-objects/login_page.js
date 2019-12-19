class LoginPage {
    constructor() {

    }

    get titleText() {
        return $("#login-title");
    }

    get emailFieldLabel() {
        return $("//label[@for='loginEmail']");
    }

    get emailFieldInput() {
        return $("#loginEmail");
    }

    get passwordFieldLabel() {
        return $("//label[@for='loginPassword']");
    }

    get passwordFieldInput() {
        return $("#loginPassword");
    }

    get rememberLoginCheckbox() {
        return $("#rememberLogin");
    }

    get rememberLoginLabel() {
        return $("//label[@for='rememberLogin']");
    }

    get submitButton() {
        return $("//form[@id='form-login']/button");
    }

    get loginErrorMessage() {
        return $("#login-alert");
    }

    logIn() {
        this.emailFieldInput.setValue("test@test.com")
        this.passwordFieldInput.setValue("testpassword")
        this.submitButton.click()
    }

    logInRememberMe() {
        this.rememberLoginCheckbox.click()
        this.logIn()
    }


}

module.exports = new LoginPage()