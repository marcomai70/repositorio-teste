const { defineConfig } = require("cypress");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/**/*.feature",
    baseUrl: "https://phptravels.com/demo",
    setupNodeEvents(on, config) {
      on("file:preprocessor", createBundler({
        plugins: [createEsbuildPlugin(config)]
      }));
      addCucumberPreprocessorPlugin(on, config);
      return config;
    },
  },
});
