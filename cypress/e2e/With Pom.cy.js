const LoginPage = require('../support/page/LoginPage');
const DashboardPage = require ('../support/page/DashboardPage');
const ProfilePage = require ('../support/page/ProfilePage')
const UserData = require ('../support/datatest/UserData');
const PromosiPage = require('../support/page/PromosiPage');
const KontenmarketingPage = require('../support/page/KontenmarketingPage');
const PesanPage = require('../support/page/PesanPage');



describe('User should be able to login', () => {
  beforeEach(() => {
    LoginPage.visit ();
})

  it('with valid data', () => {
    
  LoginPage.fillEmail('tree.wiek@gmail.com');
  LoginPage.fillPassword('12345678');
  LoginPage.clickMasukButton();
  DashboardPage.verifyDashboardPage();
  DashboardPage.clickProfileButton();
  ProfilePage.verifyProfilePage();
  PromosiPage.clickpromosibutton();
  PromosiPage.verifyPromosiPage();
  KontenmarketingPage.clickKontenmarketingbutton();
  KontenmarketingPage.verifyKontenmarketingPage();
  PesanPage.clickpesanbutton();
  PesanPage.verifyPesanPage();

  })

  it('with invalid data', () => {
    
    LoginPage.fillEmail('dummy@gmail.com');
    LoginPage.fillPassword('1234567');
    LoginPage.clickMasukButton();
    LoginPage.verifyLoginFailed()
  
    })


  //it('with invalid data', () => {
    //Step:
    //1. buka url login
    //2. Validasi: halaman login udah berhasil dibuka
    //3. Input invalid email
    //4. Input invalid password
    //5. Klik tombol Masuk
    //6. Validasi: Login gagal

   // cy.visit('https://appstaging.viseetor.id/login')
   // cy.xpath('//*[@name="email"]').should('be.visible')
   // cy.xpath('//*[@name="password"]').should('be.visible')
   // cy.xpath('//*[contains(@class,"btn btn-warning waves-effect waves-light")]').should('be.visible')
   // cy.xpath('//*[@name="email"]').type("tree@gmail.com")
   // cy.xpath('//*[@name="password"]').type("1234567")
   // cy.xpath('//*[contains(@class,"btn btn-warning waves-effect waves-light")]').click()
   // cy.xpath('//*[contains(@class,"alert alert-danger text-center mb-4 flash")]').should('be.visible')
  //})

})