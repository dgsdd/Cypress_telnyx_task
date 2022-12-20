class SignUpPage {
    locator = {
        SignUp() {
            return cy.get("main h1");
        },
    }

    checkSignUp() {
        this.locator.SignUp().should('have.text', 'Create a free account', 'visible');
    }


}

module.exports = new SignUpPage();