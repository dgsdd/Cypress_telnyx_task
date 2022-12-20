import "cypress-mochawesome-reporter/register";
import mainPage from "../pages/main.page";
const closeCookiesBtn = "button[aria-label='close and deny']";
const searchInput = '[type="text"]';

describe("Type and clean the text in search input on Support page.", () => {
    before(() => {
        cy.visit("/");
        cy.viewport(1024, 768);
        cy.get(closeCookiesBtn).click();
    });

    it("type and clean the text", () => {
        mainPage.scrollFooterBlock();
        mainPage.clickSupportCenter();
        cy.get(searchInput).type("Good test!").clear();
        cy.get(searchInput).should("have.value", "");
    });
});
