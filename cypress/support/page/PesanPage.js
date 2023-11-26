const { profil } = require('../datatest/UserData');
const locator = require('../locators/PesanLocator');

class PesanPage {
    async clickpesanbutton() {
        cy.xpath (locator.datatestid.pesan_menu).should('be.visible');
    }
    async verifyPesanPage() {
        cy.xpath (locator.datatestid.pesanpage).should('be.visible');
    }
   

}
module.exports = new PesanPage ();