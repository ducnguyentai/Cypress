const LoginPage = require('../pageobjects/LoginPage');
const WelcomePage = require('../pageobjects/WelcomePage');

describe('Verify User able to login', () => {
  beforeEach(() => {
    LoginPage.visit();
  })

  it('Login success - PASSED', () => {
    const userFixturePath = Cypress.env('fixtureBasePath').concat('/user.json');
    console.log(userFixturePath);
    cy.fixture(userFixturePath).then(userData => {
    LoginPage.login(userData.username, userData.password);
    WelcomePage.verifyWelcomePageDisplay();
    });
  })

  it('Login Success - FAILED', () => {
    const userFixturePath = Cypress.env('fixtureBasePath').concat('/user.json');
    console.log(userFixturePath);
    cy.fixture(userFixturePath).then(userData => {
    LoginPage.login(userData.username, "randomPassword");
    WelcomePage.verifyWelcomePageDisplay();
    });
  })
})