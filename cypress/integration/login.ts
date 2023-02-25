import {LoginPage} from "./pages/login_pages"
import {DashboardPage} from "./pages/dashboard_pages"
import {addCart} from "./pages/atc"
import {CheckoutPage} from "./pages/checkout"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let atcandremove = new addCart()
let checkoutpage = new CheckoutPage()
const URL = 'https://www.saucedemo.com/'

it('Test LOGIN', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin() 
})

it('Test Sauce Demo Invalid Password', () => {
    loginPage.login(URL,'standard_user','invalidPass')
    loginPage.assertLoginFail()
})

it('Test Sauce Demo Sauce labs product backpack', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack() 
})

it('Test ATC then Remove', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    cy.wait(2000)
    atcandremove.clickATC()
    atcandremove.assertATC()
    cy.wait(2000)
    atcandremove.clickRemove()
    //atcandremove.assertRemove()
})

it('Test ATC then Checkout', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    cy.wait(2000)
    atcandremove.clickATC()
    cy.wait(2000)
    checkoutpage.clickCart()
    checkoutpage.clickCO()
    checkoutpage.checkout('dava','galuh','1234')
    cy.wait(2000)
    checkoutpage.clickContinue()
    cy.wait(2000)
    checkoutpage.clickFinish()
    checkoutpage.assertCheckout()
})