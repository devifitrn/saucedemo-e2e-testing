// import loginpage from "../pages/loginpage";
// import userLogin from "../fixtures/usersLogin.json";
// import inventoryItem from "../pages/inventoryItem";

// describe('Add to Cart Item', () => {
//     beforeEach('open inventory page', () => {
//         loginpage.visit()
//         loginpage.login(userLogin.validUser.username, userLogin.validUser.password)
//         cy.url().should('contain', 'inventory.html')

//     })

//     it('add to cart based on Item', () => {

//         inventoryItem.clickItem()
//         cy.url().should('include', '/inventory-item.html?id=4')
//         inventoryItem.verifyPageItem()
//         inventoryItem.clickAddCart()
//         inventoryItem.verifyBasket().should('contain', '1')
//         inventoryItem.backtoInventory()
//         cy.url().should('contain', 'inventory.html')
//         })

//     })