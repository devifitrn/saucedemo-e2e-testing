import loginpage from "../pages/loginpage";
import userLogin from "../fixtures/usersLogin.json";
import inventory from "../pages/inventory";
import inventoryItem from "../pages/inventoryItem";

describe('Add to Cart Item', () => {
    beforeEach('open inventory page', () => {
        //tampilan login
        loginpage.visit()

        //sukses login
        loginpage.login(userLogin.validUser.username, userLogin.validUser.password)

        //make sure tampilan setelah login sesuai
        cy.url().should('contain', 'inventory.html')

    })
    const items = [
        'sauce-labs-backpack',
        'sauce-labs-bike-light',
        'sauce-labs-bolt-t-shirt',
        'sauce-labs-fleece-jacket',
        'sauce-labs-onesie',
        'test.allthethings()-t-shirt-(red)'
    ]

    it('add all cart', () => {

        inventory.verifyPage()
        items.forEach((item, index) => {
            inventory.addToCart(item)
            inventory.verifyBasket().should('contain', index + 1) //assetion
        })

    })

    it('add 2 cart and remove', () => {
        const itemSelected = items.slice(0, 2)
        const itemRemove = items[0]
        itemSelected.forEach((item, index) => {
            inventory.addToCart(item)
            inventory.verifyBasket().should('contain', index + 1) //assetion

        })
        inventory.removeCart(itemRemove)
        inventory.verifyBasket().should('contain', itemSelected.length - 1)

    })

    it('add cart by detail product', () => {
        const detailProduct = [0, 1, 2, 3, 4, 5]
        detailProduct.forEach((item, index) => {
            inventoryItem.clickItem(item)
            inventoryItem.verifyDetailPageOpened()
            inventoryItem.clickAddCart()
            inventory.verifyBasket().should('contain', index + 1)
            inventoryItem.backtoInventory()
            cy.url().should('contain', 'inventory.html')
        })
        const removeProduct = detailProduct[1]
        inventoryItem.clickItem(removeProduct)
        inventoryItem.removeItemproduct(detailProduct)
        inventory.verifyBasket().should('contain', detailProduct.length-1)

    })

    it('Filter Urutan Product', () => {
        const dataFilter = ['az', 'za', 'lohi', 'hilo']
        dataFilter.forEach((item) => {
            inventoryItem.filterProduct(item)

            // assertion
            cy.get('.inventory_item_name').then($names => {
            const uiNames = [...$names].map(n => n.innerText)

            let sorted

            if (item === 'az') {
                sorted = [...uiNames].sort()
            }
            else if (item === 'za') {
                sorted = [...uiNames].sort().reverse()
            }
            else if (item === 'lohi' || item === 'hilo') {
                // Ambil harga, bukan nama
                cy.get('.inventory_item_price').then($prices => {
                    const uiPrices = [...$prices].map(p => parseFloat(p.innerText.replace('$','')))

                    const sortedPrices = item === 'lohi'
                        ? [...uiPrices].sort((a,b) => a-b)
                        : [...uiPrices].sort((a,b) => b-a)

                    expect(uiPrices).to.deep.equal(sortedPrices)
                })
                return
            }

            // Assertion untuk A-Z dan Z-A
            expect(uiNames).to.deep.equal(sorted)
            })
        })

    })



})