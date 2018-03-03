import webpack from 'webpack';
import path from 'path';

const GLOBALS = {
	'process.env.NODE_ENV': JSON.stringify('production')
};

export default {
	devtool: 'source-map',
	mode: 'production',
	entry: [
		'eventsource-polyfill', // necessary for hot reloading with IE
		'./src/index'
	],
	target: 'web',
	output: {
		path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './dist'
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.DefinePlugin(GLOBALS),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		})
	],
	module: {
		rules: [
			{
				test: /(\.js)$/, 
				include: path.join(__dirname, 'src'),
				use: [
					{
						loader: "babel-loader"
					}
				]
			},
			{
				test: /(\.css)$/, 
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader"
					}
				]
			},
			{
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
				use: [
					{
						loader: "file-loader"
					}
				]
			},
			{
				test: /(\.jpe?g)$/, 
				use: [
					{
						loader: "file-loader"
					}
				]
			},
			{
				test: /\.(woff|woff2)$/, 
				use: [
					{
						loader: "url-loader?prefix=font/&limit=5000"
					}
				]
			},
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
				use: [
					{
						loader: "url-loader?limit=10000&mimetype=application/octet-stream"
					}
				]
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
				use: [
					{
						loader: "url-loader?limit=10000&mimetype=image/svg+xml"
					}
				]
			}
		]
	}
};
