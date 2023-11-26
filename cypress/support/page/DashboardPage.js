const { profil } = require('../datatest/UserData');
const locator = require('../locators//DashboardPageLocator');

class DashboardPage {
    async verifyDashboardPage() {
        cy.xpath (locator.datatestid.userarea).should('be.visible');
    }

    async clickProfileButton() {
        cy.xpath (locator.datatestid.lihatprofil).click();
    }


}
module.exports = new DashboardPage ();