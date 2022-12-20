class ProductsPage {
    locator = {
        ReadyBlock() {
            return cy.get('[class="sc-93eced66-0 jrFJNV"]');
        },
    };
    scrollReadyBlock() {
        this.locator.ReadyBlock().scrollIntoView();
    }
}

module.exports = new ProductsPage();
