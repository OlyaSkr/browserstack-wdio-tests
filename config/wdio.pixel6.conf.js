const commonConfig = require('./wdio.common.conf');

exports.config = {
  ...commonConfig.config,
  capabilities: [
    {
      project: 'Android Tests',
      build: 'Build Google Pixel 6',
      name: 'Test on Google Pixel 6',
      device: 'Google Pixel 6',
      os_version: '12.0',
      app: process.env.BROWSERSTACK_APP_ID,
      'browserstack.debug': true,
    },
  ],
};
