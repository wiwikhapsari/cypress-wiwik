const { profil } = require('../datatest/UserData');
const locator = require('../locators/PromosiLocator');

class PromosiPage {
    async clickpromosibutton() {
        cy.xpath (locator.datatestid.promosi_menu).should('be.visible');
    }
    async verifyPromosiPage() {
        cy.xpath (locator.datatestid.promosipage).should('be.visible');
    }
   


}
module.exports = new PromosiPage ();