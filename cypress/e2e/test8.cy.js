import "cypress-mochawesome-reporter/register";
import mainPage from "../pages/main.page";
import productPage from "../pages/products.page";
const closeCookiesBtn = "button[aria-label='close and deny']";

describe("Click on Try it Free on Products Page", () => {
    before(() => {
        cy.visit("/");
        cy.viewport(1024, 768);
        cy.get(closeCookiesBtn).click();
    });

    it("click on Try it Free on Products Page", () => {
        mainPage.clickBtnProducts();
        mainPage.clickSeeAllProducts();
        productPage.scrollReadyBlock();
        cy.contains("Try it Free").invoke("removeAttr", "target").click();
        cy.location("pathname").should("eq", "/sign-up");
    });
});
