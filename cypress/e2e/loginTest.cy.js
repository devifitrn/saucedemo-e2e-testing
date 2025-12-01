import LoginPage from "../pages/loginpage"
import userslogin from "../fixtures/usersLogin.json"

describe('Login Test Feature', () => {
    beforeEach('Open test application', () => {
    LoginPage.visit()
})
    
  it('login successfully', () => {
    LoginPage.login(userslogin.validUser.username, userslogin.validUser.password)

    cy.url().should('include', '/inventory.html')
    //InventoryPage.elements.pageTitle().should('have.text', 'Products')
  });

  it('Wrong Username & password-> login Failed', () => {
    LoginPage.login(userslogin.invalidUser.username, userslogin.invalidUser.password)
    LoginPage.elements.errorMessage().should('be.visible').and('contain', 'Username and password do not match')

  });

  it('Wrong Username -> login Failed', ()=>{
    LoginPage.login(userslogin.invalidUser.username, userslogin.validUser.password)
    LoginPage.elements.errorMessage().should('be.visible').and('contain', 'Username and password do not match')
  })

  it('wrong password -> login failed', ()=>{
    LoginPage.login(userslogin.invalidUser.username, userslogin.invalidUser.password) // butuh diubah jadi valid username, takut ke lock
    LoginPage.elements.errorMessage().should('be.visible').and('contain', 'Username and password do not match')
  })

  it('email empty -> login failed', ()=>{
    LoginPage.login('', userslogin.validUser.password)
    LoginPage.elements.errorMessage().should('be.visible').and('contain', 'Username is required')
  })

  it('wrong password empty -> login failed', ()=>{
    LoginPage.login(userslogin.validUser.username, '')
    LoginPage.elements.errorMessage().should('be.visible').and('contain', 'Password is required')
  })
})