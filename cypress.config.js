module.exports = {
  projectId: "wtk6b5",
  reporter: 'cypress-mochawesome-reporter',
  video: false,
  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    reportPageTitle: 'Cypress Inline Reporter',
    embeddedScreenshots: true, 
    inlineAssets: true, 
  },
  e2e: {
      defaultCommandTimeout: 6000,
      pageLoadTimeout: 20000,
      screenshotOnRunFailure: true,
      screenshotFolder: "cypress/screenshots",
      trashAssetsBeforeRuns: true,
      setupNodeEvents(on, config) {
        require('cypress-mochawesome-reporter/plugin')(on);
      }
  },
  env: {
    baseURL: "https://practicetestautomation.com/",
    fixtureBasePath: "/prod"
  }
};
