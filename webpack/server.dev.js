const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const WriteFilePlugin = require('write-file-webpack-plugin')
const Dotenv = require('dotenv-webpack')

// aliases
const alias = require('./alias')

const res = p => path.resolve(__dirname, p)

const nodeModules = res('../node_modules')
const entry = res('../src/server/render.js')
const output = res('../build')

// if you're specifying externals to leave unbundled, you need to tell Webpack
// to still bundle `react-universal-component`, `webpack-flush-chunks` and
// `require-universal-module` so that they know they are running
// within Webpack and can properly make connections to client modules:
const externalModules = fs
  .readdirSync(nodeModules)
  .filter(x => !/\.bin|react-universal-component|webpack-flush-chunks/.test(x))
  .reduce((externals, mod) => {
    externals[mod] = `commonjs ${mod}` // eslint-disable-line
    return externals
  }, {})

externalModules['react-dom/server'] = 'commonjs react-dom/server'

module.exports = {
  name: 'server',
  devtool: 'source-map',
  target: 'node',
  mode: 'development',
  entry: [entry],
  externals: externalModules,
  output: {
    path: output,
    filename: 'server.js',
    libraryTarget: 'commonjs2',
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
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new webpack.ProvidePlugin({
      fetch: 'isomorphic-fetch'
    }),
    new Dotenv({
      path: path.resolve(__dirname, '../.env'),
      safe: false
    }),
    new webpack.DefinePlugin({
      'process.env.SERVER': JSON.stringify(true)
    })
  ]
}
