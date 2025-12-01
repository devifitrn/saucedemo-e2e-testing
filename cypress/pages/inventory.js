class Inventorypage {
    //locator
    elements = {
        pageTitle: ()=> cy.get('.title'),
        addtocart: (productItem) => cy.get(`[data-test="add-to-cart-${productItem}"]`),
        removecart: (removeItem)=> cy.get(`[data-test="remove-${removeItem}"]`),
        basket: () => cy.get('.shopping_cart_link'),
   
    }

    verifyPage(){
        this.elements.pageTitle().should('contain', 'Products')
    }

    addToCart(itemname) {
        this.elements.addtocart(itemname).click()
    }

    verifyBasket(){
        
        return this.elements.basket()
    }

    removeCart(itemRemove){
        this.elements.removecart(itemRemove).click()
    }
    
}

export default new Inventorypage()
