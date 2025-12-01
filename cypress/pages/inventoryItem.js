class InventoryItem {
    //locator
    elements = {
        byItem: (item) => cy.get(`[data-test="item-${item}-title-link"]`),
        pageProduct: () => cy.get('[data-test="back-to-products"]'),
        addtocartItem: () => cy.get('[data-test="add-to-cart"]'),
        removeItem:()=> cy.get('[data-test="remove"]'),
        filterProducts : ()=> cy.get ('[data-test="product-sort-container"]'),
        //clickFilter: (filterby)=> cy.get (`[value="${filterby}"]`)
        //basket: () => cy.get('.shopping_cart_link')
    }
    verifyDetailPageOpened() {
        cy.url().should('include', '/inventory-item.html')
        this.elements.pageProduct().should('contain', 'Back to')
    }

    clickItem(clickDetail) {
        this.elements.byItem(clickDetail).click()
    }

    clickAddCart() {
        this.elements.addtocartItem().click()
    }


    backtoInventory() {
        this.elements.pageProduct().click()

    }

    removeItemproduct(removeItem){
        this.elements.removeItem(removeItem).click()
    }

    filterProduct(filtername){
        this.elements.filterProducts().select(filtername)
       //this.elements.clickFilter(filtername).click()
    }

}

export default new InventoryItem()
