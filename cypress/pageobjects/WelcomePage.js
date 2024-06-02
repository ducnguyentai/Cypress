class WelcomePage {

  verifyWelcomePageDisplay() {
      cy.url().should('contain', 'logged-in-successfully/')
    }
}

module.exports = new WelcomePage();