const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const baseWebpackConfig = require('./package.config');
const config = require('./config');

module.exports = merge(baseWebpackConfig, {
  output: {
    filename: 'index.js',
    library: 'LUXUI',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: config.alias
  },
  externals: {
    vue: config.vue
  },
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          ie8: false,
          keep_fnames: true,

          output: {
            comments: false,
            beautify: false
          }, 
          compress: {
            warnings: false,
            drop_console: true  
          }
        } 
      })  
    ]  
  }
});