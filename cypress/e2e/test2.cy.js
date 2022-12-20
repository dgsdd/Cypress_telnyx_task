import "cypress-mochawesome-reporter/register";
import mainPage from "../pages/main.page";
const closeCookiesBtn = "button[aria-label='close and deny']";

describe("Check the label and enter the Twitter page", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.viewport(1024, 768);
        cy.get(closeCookiesBtn).click();
    });

    it("Scroll to label ©TelnyxLLC2022 and check text", () => {
        mainPage.scrollLabelTelnyx();
        mainPage.checkLabelTelnyx();
    });

    it("Click on FollowOnTwitter and check url", () => {
        mainPage.clickFollowOnTwitter();
        mainPage.checkUrlTwitter();
    });
});
