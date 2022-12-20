import "cypress-mochawesome-reporter/register";
import mainPage from "../pages/main.page";
import signUpPage from "../pages/sign.up.page";

const closeCookiesBtn = "button[aria-label='close and deny']";

describe("Check Sign up button on main page", () => {
    before(() => {
        cy.visit("/");
        cy.get(closeCookiesBtn).click();
    });

    it("Check Sign up button", () => {
        mainPage.clickSignUp();
        signUpPage.checkSignUp();
        cy.location("pathname").should("eq", "/sign-up");
    });
});
