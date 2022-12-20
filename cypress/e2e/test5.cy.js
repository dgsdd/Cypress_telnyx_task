import "cypress-mochawesome-reporter/register";
import mainPage from "../pages/main.page";
const closeCookiesBtn = "button[aria-label='close and deny']";
const emailInput = '[type="email"]';

describe("type email adress on the main page", () => {
    before(() => {
        cy.visit("/");
        cy.viewport(1024, 768);
        cy.get(closeCookiesBtn).click();
    });

    it("type email on home page", () => {
        cy.get(emailInput).type("sdfsf@gmail.com");
        mainPage.clickEmailBtn();
    });
});
