require('dotenv').config();
exports.config = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,

  updateJob: false,
  specs: ['../test/specs/**/*.js'],
  reporters: [
    'spec',
    [
      'allure',
      {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
  ],

  logLevel: 'info',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 30000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'mocha',
  mochaOpts: { ui: 'bdd', timeout: 60000 },

  afterStep: async function (step, scenario, { error, duration, passed }) {
    const screenshot = await browser.takeScreenshot();
    allure.addAttachment(
      `Step: ${step.keyword} ${step.text}`,
      Buffer.from(screenshot, 'base64'),
      'image/png'
    );
  },
};
