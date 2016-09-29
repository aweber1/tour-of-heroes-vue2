const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, '../src'),
  entry: {
    app: ['babel-polyfill', './index.js'],
  },
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: '[name].bundle.js',
  },
  module: {
    loaders: [
      // Transpile JavaScript files via Babel
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'stage-1'],
          plugins: ['transform-vue-jsx'],
        },
      },
      {
        test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml',
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=50000&name=img/img-[hash:6].[ext]',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  resolve: {
    root: [path.resolve(__dirname, '../src'), path.resolve(__dirname, '../node_modules')],
    // Allow require('./blah') to require blah.jsx
    extensions: ['', '.json', '.js', '.jsx'],
    alias: {
      assets: path.join(__dirname, '../assets'),
    },
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: '[name].bundle.js',
      minChunks: module => module.resource && module.resource.indexOf('node_modules') !== -1,
    }),
    new ExtractTextPlugin('[name].css', {
      allChunks: true,
    }),
  ],
};
