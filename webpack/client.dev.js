const path = require('path')
const webpack = require('webpack')
const WriteFilePlugin = require('write-file-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const ServiceWorkerPlugin = require('serviceworker-webpack-plugin')

// aliases
const alias = require('./alias')

module.exports = {
  name: 'client',
  target: 'web',
  devtool: 'inline-source-map',
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=false&quiet=false&noInfo=false',
    'react-hot-loader/patch',
    path.resolve(__dirname, '..', 'src/client.js')
  ],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, '..', 'build'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(jpg|png|gif|svg|ico)$/,
        use: [
          {
            loader: 'url-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    alias,
    extensions: ['.json', '.js', '.jsx']
  },
  plugins: [
    new WriteFilePlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.ProvidePlugin({
      fetch: 'isomorphic-fetch'
    }),
    new Dotenv({
      path: path.resolve(__dirname, '..', '.env'),
      safe: false
    }),
    new ServiceWorkerPlugin({
      entry: path.join(__dirname, '..', 'src/sw.js'),
      excludes: ['*hot-update*', '**/*.map', '**/stats.json']
    })
  ]
}
