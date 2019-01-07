const path = require('path');
const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const config = require('./config');

module.exports = {
	mode: 'production',
	entry: {
		app: ['./packages/index.js']
	},
	output: {
		path: path.resolve(process.cwd(), './lib'),
		publicPath: '/dist/',
		chunkFilename: '[id].js'
	},
	resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: config.alias,
    modules: ['node_modules']
  },
  externals: config.externals,
	module: {
		rules: [
			{
        test: /\.js$/,
        include: process.cwd(),
        use: [
        	{
        		loader: 'babel-loader'
        	}
        ]
      },
			{
				test: /\.vue$/,
				use: [
					{
						loader: 'vue-loader',
						options: {
							preserveWhitespace: false
						}
					}
				]
			},
			{
        test: /\.css$/,
        use: [
        	{
        		loader: 'style-loader'	
        	},
        	{
        		loader: 'css-loader'	
        	},
        	{
        		loader: 'postcss-loader'	
        	}
        ]
      },
      {
        test: /\.scss$/,
        use: [
        	{
        		loader: 'style-loader'	
        	},
        	{
        		loader: 'css-loader'	
        	},
        	{
        		loader: 'sass-loader'	
        	}
        ]
      },
			{
				test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
				use: [
					{
						loader: 'url-loader',	
						options: {
		          limit: 10000,
		          name: path.posix.join('static', '[name].[hash:7].[ext]')
		        }
					}
				]
			}
		]
	},
	optimization: {
		minimize: false
	},	
	plugins: [
		new ProgressBarPlugin(),
		new VueLoaderPlugin(),
		// new webpack.optimize.ModuleConcatenationPlugin(),
		new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
		new webpack.LoaderOptionsPlugin({
      minimize: true
    })
	]
}