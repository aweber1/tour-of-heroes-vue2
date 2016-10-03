const WebPackNotifierPlugin = require('webpack-notifier');

module.exports = (baseConfig) => {
  const config = baseConfig;
  config.watch = true;
  config.plugins.push(new WebPackNotifierPlugin());
  return config;
};
