const path = require('path')
const webpack = require('webpack')

// aliases
const alias = require('./alias')

const res = p => path.resolve(__dirname, p)

const entry = res('../src/server/render.js')
const output = res('../build')

module.exports = {
  name: 'server',
  target: 'node',
  devtool: 'source-map',
  entry: [entry],
  output: {
    path: output,
    filename: 'server.js',
    libraryTarget: 'commonjs2'
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
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new webpack.ProvidePlugin({
      fetch: 'isomorphic-fetch'
    }),
    new webpack.DefinePlugin({
      'process.env.SERVER': JSON.stringify(true)
    }),
    new webpack.HashedModuleIdsPlugin()
  ]
}
