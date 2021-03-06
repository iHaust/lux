const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const baseWebpackConfig = require('./package.config');

module.exports = merge(baseWebpackConfig, {
  output: {
    filename: 'lux-ui.common.js',
    libraryTarget: 'commonjs2'
  }
});