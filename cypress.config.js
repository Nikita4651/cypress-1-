const { defineConfig } = require("cypress");

module.exports = defineConfig({
  retries: 2,
 // allowCypressEnv: false,
  

  viewportWidth: 1920,
  viewportHeight: 1080,

  e2e: {
   // supportFile: "cypress/support/e2e.js",
    baseUrl: "http://localhost:3000/",
    setupNodeEvents(on, config) {
  
    },
  },
});