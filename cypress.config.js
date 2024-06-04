module.exports = {
  projectId: "wtk6b5",
  video: false,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: true,
    html: true,
    json: false,
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
