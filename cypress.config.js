const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    QA: 'https://rahulshettyacademy.com/seleniumPractise/#/',
    DiricoTest: 'https://login.dirico.io/login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dc3client_code%26redirect_uri%3Dhttps%253A%252F%252Fapp.dirico.io%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520email%2520client%2520api%26state%3Daf2525e0ae304f19bd9b1e43e57e5c9d%26code_challenge%3DobYmAT1nQ4rS6hdP5UETAlGWIfYlf2yaPBkSJyCtcnA%26code_challenge_method%3DS256%26response_mode%3Dquery',
    Dev: 'Name of the Dev Environment',
    Samplelogin: 'https://www.stealmylogin.com/demo.html'
  },
  retries: {
    runMode: 1,
    openMode: 0,
  },

  projectId: 'meopg6',
  reporter: 'mochawesome',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    //specPattern: 'cypress/e2e/**/*.js',
    specPattern: 'cypress/e2e/examples/Inaugural.js',
    excludeSpecPattern: ['**/__snapshots__/*', '**/__image_snapshots__/*'],
    //"specPattern": "**/*.{feature,features}",
  },
})

