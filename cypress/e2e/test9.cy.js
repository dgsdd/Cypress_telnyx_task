import "cypress-mochawesome-reporter/register";
import mainPage from "../pages/main.page";
const closeCookiesBtn = "button[aria-label='close and deny']";
const IAgreeLabel = '[aria-labelledby="terms-label"]';
const CreateAccountBtn = '[type="submit"]';
const ErrorMessage = "#full_name_error";

describe("Check the label on Sign Up page and check visibility of error message", () => {
    before(() => {
        cy.visit("/");
        cy.viewport(1024, 768);
        cy.get(closeCookiesBtn).click();
    });

    it("check the label and error message", () => {
        mainPage.clickSignUp();
        cy.get(IAgreeLabel).should("not.have.checked").click();
        cy.get(CreateAccountBtn).click();
        cy.get(ErrorMessage).should("be.visible");
    });
});
