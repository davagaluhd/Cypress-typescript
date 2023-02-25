export class CheckoutPage{
    txt_firstname = '#first-name'
    txt_lastname = '#last-name'
    txt_postalcode = '#postal-code'
    btn_cont = '#continue'
    btn_co = '#checkout'
    btn_finish = '#finish'
    btn_cart = '#shopping_cart_container'

    inputFirstname(firstname: string){
        cy.get(this.txt_firstname).type(firstname)
    }
    inputLastname(lastname: string){
        cy.get(this.txt_lastname).type(lastname)
    }
    inputPostalcode(postalcode: string){
        cy.get(this.txt_postalcode).type(postalcode)
    }
    clickCart(){
        cy.get(this.btn_cart).click()
    }
    clickCO(){
        cy.get(this.btn_co).click()
    }
    clickContinue(){
        cy.get(this.btn_cont).click()
    }
    clickFinish(){
        cy.get(this.btn_finish).click()
    }
    assertCheckout(){
        cy.get('.title').should('be.visible')
        cy.contains('Checkout: Complete!').should('contain','Checkout: Complete!')
    }
    checkout(firstname : string,lastname : string,postalcode : string){
        this.inputFirstname(firstname)
        this.inputLastname(lastname)
        this.inputPostalcode(postalcode)    
    }
}