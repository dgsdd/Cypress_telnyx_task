import "cypress-mochawesome-reporter/register";
import mainPage from "../pages/main.page";
const closeCookiesBtn = "button[aria-label='close and deny']";

describe("Click on Go to Telnyx on Support page and have a title on main page", () => {
    before(() => {
        cy.visit("/");
        cy.viewport(1024, 768);
        cy.get(closeCookiesBtn).click();
    });

    it("click on Go to Telnyx on Support page and have a title on main page", () => {
        mainPage.clickBtnSupportCenter();
        cy.contains("Go to Telnyx").invoke("removeAttr", "target").click();
        mainPage.scrollTitleBuildTheNextGeneration();
        mainPage.checkTitle();
    });
});
