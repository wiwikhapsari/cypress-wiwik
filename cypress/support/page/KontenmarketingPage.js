const { profil } = require('../datatest/UserData');
const locator = require('../locators/KontenmarketingLocator');

class KontenMarketingPage {
    async clickKontenmarketingbutton() {
        cy.xpath (locator.datatestid.kontenmarketing_menu).should('be.visible');
    }
    async verifyKontenmarketingPage() {
        cy.xpath (locator.datatestid.kontenmarketingpage).should('be.visible');
    }
   


}
module.exports = new KontenMarketingPage ();