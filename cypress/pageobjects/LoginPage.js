class LoginPage {
  elements = {
    usernameInput : () => cy.get('#username'),
    passwordInput : () => cy.get('#password'),
    loginButton : () => cy.get('#submit'),
    errorMessage : () => cy.get('#error')
  }

  visit() {
    cy.visit(Cypress.env('baseURL').concat('/practice-test-login'));
  }

  login(username, password) {
    this.elements.usernameInput().type(username);
    this.elements.passwordInput().type(password);
    cy.wait(5000);
    this.elements.loginButton().click();
  }

  verifyLoginPageDisplay() {
      this.elements.usernameInput().should('be.visible');
    }

  verifyErrorMessage(expectedMessage) {
    this.elements.errorMessage().should('be.visible').and('contain.text', expectedMessage);
  }
}

module.exports = new LoginPage();