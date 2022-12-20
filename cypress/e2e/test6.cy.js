import "cypress-mochawesome-reporter/register";
import mainPage from "../pages/main.page";
const closeCookiesBtn = "button[aria-label='close and deny']";
const searchInput = '[class="search__input js__search-input o__ltr"]';

describe("Check input form on Support Center page and take a screenshot", () => {
    before(() => {
        cy.visit("/");
        cy.viewport(1024, 768);
        cy.get(closeCookiesBtn).click();
    });

    it("should have empty form", () => {
        mainPage.clickBtnSupportCenter();
        cy.get(searchInput).should("have.value", "");
        cy.screenshot();
    });
});
