module.exports = {
  projectId: "wtk6b5",

  e2e: {
      defaultCommandTimeout: 6000,
      pageLoadTimeout: 20000,
      screenshotOnRunFailure: true,
      screenshotFolder: "cypress/screenshots",
      trashAssetsBeforeRuns: true,
  },
  env: {
    baseURL: "https://staging-environment.com",
    fixtureBasePath: "/staging"
  }
};