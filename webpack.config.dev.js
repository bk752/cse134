import webpack from 'webpack';
import path from 'path';

export default {
  devtool: 'cheap-module-source-map',
  mode: 'development',
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    './src/index'
  ],
  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './src'
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
		debug: true
	}),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
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
		  test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
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
	  },
    ]
  }
};
