const path = require('path');
const webpack = require('webpack');
const WebPackNotifierPlugin = require('webpack-notifier');

module.exports = (baseConfig) => {
  const config = baseConfig;
  // config.devtool = 'source-map';
  config.watch = true;
  // config.resolve.alias.dataprovideralias = path.join(__dirname, '../src/dataProvider/DataProvider.dev');
  // config.resolve.alias.resourcemanageralias = path.join(__dirname, '../src/resources/ResourceManager.dev');
  config.plugins.push(new WebPackNotifierPlugin());
  config.plugins.push(new webpack.DefinePlugin({
    'process.routing.BASE_ROUTE': JSON.stringify('/'),
  }));
  return config;
};
