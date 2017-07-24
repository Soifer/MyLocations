//var WebpackDevServer = require("webpack-dev-server");
const webpack = require('webpack');
const LoaderOptionsPlugin = require("webpack/lib/LoaderOptionsPlugin");

 const path = require('path');

module.exports = {
  entry: [
    'babel-polyfill', 'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server',
    "./src/index.js" // Your appʼs entry point
  ],
  devtool: "source-map",
  // watch: true,
  output: {    
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  target: 'web',
  plugins: [
  //   new webpack.DefinePlugin({
  //   'process.env': {
  //     'NODE_ENV': JSON.stringify('production')
  //   }
  // }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        eslint: {
          failOnWarning: false,
          failOnError: true
        }
      },
      debug: true
    })
  ],
  module: {
    rules: [{
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        use: ['react-hot-loader', 'babel-loader?babelrc=true,cacheDirectory=false']
      },
      {
        test: /(\.css)$/,
        use: [ 'style-loader','css-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: [ 'url-loader?limit=100000']
      },
      {
        enforce: 'pre',
        test: /\.js?$/,
        use: [{
          loader: 'eslint-loader'
        }],
        exclude: /(node_modules)/,
      }
    ],
  },
  resolve: {
    extensions: [".webpack.js", ".web.js", ".js", ".jsx"]
  }
};