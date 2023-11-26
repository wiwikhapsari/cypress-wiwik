const locator = require('../locators//LoginPageLocator');

class LoginPage {

    async visit () {
        cy.visit('https://appstaging.viseetor.id/login');
    }

    async fillEmail(email){
        cy.xpath (locator.datatestid.name_field).type(email);

    }

    async fillPassword(password){
        cy.xpath (locator.datatestid.password_field).type(password);

    }

    async clickMasukButton(){
        cy.xpath (locator.datatestid.btn_masuk).click();

    }

    async verifyLoginFailed(){
        cy.xpath (locator.datatestid.alert_failed).should('be.visible');

    }


}

module.exports = new LoginPage ();