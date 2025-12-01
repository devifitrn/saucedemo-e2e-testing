class LoginPage {
    //locator
    elements = {
        usernameField: () => cy.get('#user-name'),
        passwordField: () => cy.get('#password'),
        loginButton: () => cy.get('#login-button'),
        errorMessage: () => cy.get('[data-test="error"]')
    }

    //method
    visit() {
        cy.visit('/')
    }

    login(username, password) {

        this.elements.usernameField().clear()
        this.elements.passwordField().clear()

        if (username) {
            this.elements.usernameField().type(username)
        }

        if (password) {
            this.elements.passwordField().type(password)
        }

        this.elements.loginButton().click()

    }
}

export default new LoginPage()
