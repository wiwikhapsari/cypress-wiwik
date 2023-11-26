const { profil } = require('../datatest/UserData');
const locator = require('../locators//ProfileLocator');

class ProfilePage {

    async verifyProfilePage() {
        cy.xpath (locator.datatestid.profile_name).should('be.visible');
    }

   

}
module.exports = new ProfilePage ();