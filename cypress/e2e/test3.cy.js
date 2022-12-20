import "cypress-mochawesome-reporter/register";
import mainPage from "../pages/main.page";
const closeCookiesBtn = "button[aria-label='close and deny']";

describe("Follow the link Request_a_demo and check the pathname", () => {
    before(() => {
        cy.visit("/");
        cy.viewport(1024, 768);
        cy.get(closeCookiesBtn).click();
    });
    it("Click on the Request a demo", () => {
        mainPage.scrollReadyToGetStartedBlock();
        mainPage.clickRequestADemo();
        cy.location("pathname").should("eq", "/contact-us");
    });
});
