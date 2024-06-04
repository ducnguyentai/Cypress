import 'cypress-mochawesome-reporter/register';
const LoginPage = require('../pageobjects/LoginPage');
const WelcomePage = require('../pageobjects/WelcomePage');

describe('Verify User able to login', () => {
  beforeEach(() => {
    LoginPage.visit();
  })

  it('Login successfully', () => {
    const userFixturePath = Cypress.env('fixtureBasePath').concat('/user.json');
    console.log(userFixturePath);
    cy.fixture(userFixturePath).then(userData => {
    LoginPage.login(userData.username, userData.password);
    WelcomePage.verifyWelcomePageDisplay();
    });
  })
})