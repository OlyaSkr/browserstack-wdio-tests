const commonConfig = require('./wdio.common.conf');

exports.config = {
  ...commonConfig.config,
  capabilities: [
    {
      project: 'Android Tests',
      build: 'Build Samsung Galaxy S24',
      name: 'Test on Samsung Galaxy S24',
      device: 'Samsung Galaxy S24',
      os_version: '14.0',
      app: process.env.BROWSERSTACK_APP_ID,
      'browserstack.debug': true,
    },
  ],
};
