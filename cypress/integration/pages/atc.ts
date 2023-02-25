export class addCart{
    btn_atc = '#add-to-cart-sauce-labs-backpack'
    btn_remove  = '#remove-sauce-labs-backpack'

    clickATC(){
        cy.get(this.btn_atc).click()
    }
    clickRemove(){
        cy.get(this.btn_remove).click()
    }
    assertATC(){
        cy.get('.shopping_cart_link').should('be.visible')
        cy.get('.shopping_cart_badge').should('be.visible') 
        cy.contains('1').should('contain','1')
    }
    assertRemove(){
        cy.get('.shopping_cart_link').should('be.visible')
        cy.get('.shopping_cart_badge').should('be.visible') 
        //cy.contains('').should('contain','')
    }
}