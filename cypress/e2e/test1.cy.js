import "cypress-mochawesome-reporter/register";
import supportPage from "../pages/support.page";
import mainPage from "../pages/main.page";
const closeCookiesBtn = "button[aria-label='close and deny']";

describe('Visit page "Support Center" from footer of main page', () => {
    beforeEach(() => {
        cy.visit("/");
        cy.viewport(1024, 768);
        cy.get(closeCookiesBtn).click();
    });

    it(`Scroll to footer block`, () => {
        mainPage.scrollFooterBlock();
    });
    it(`Click "Support Center" button`, () => {
        mainPage.clickSupportCenter();
        supportPage.checkSupportPageTitle();
    });
});
