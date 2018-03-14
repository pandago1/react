const merge	= require('webpack-merge');
const path	= require('path');

const commonConfig	= require('./webpack.common.config.js');

const devConfig	= {
	devtool: 'inline-source-map',
	entry: {
		app: [
			'babel-polyfill',
			'react-hot-loader/patch',
			path.join(__dirname, 'src/index.js')
		]
	},
	output: {
		filename: '[name].[hash].js'
	},
	module: {
		rules: [{
			test: /\.sass|\.scss$/,
			use: ['style-loader', 'css-loader', 'sass-loader'],
			include: path.join(__dirname, 'src')
		}]
	},
    devServer: {
		port: 8080,
        contentBase: path.join(__dirname, './dist'),
		historyApiFallback: true,
		host: '0.0.0.0',
		allowedHosts: [
			'.com'
		]
    }
}

module.exports	= merge({
	customizeArray(a, b, key) {
		if (key === 'entry.app') {
			return b;
		}
		return undefined;
	}
})(commonConfig, devConfig);


