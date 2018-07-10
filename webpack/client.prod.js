const path = require('path')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')
const ServiceWorkerPlugin = require('serviceworker-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

// aliases
const alias = require('./alias')

module.exports = {
  name: 'client',
  target: 'web',
  devtool: 'hidden-source-map',
  entry: [path.resolve(__dirname, '..', 'src/client.js')],
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, '..', 'build'),
    publicPath: '/'
  },
  stats: 'verbose',
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
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true
    }),
    new Dotenv({
      path: path.resolve(__dirname, '../.env'),
      systemvars: true,
      safe: false
    }),
    new ServiceWorkerPlugin({
      entry: path.join(__dirname, '..', 'src/sw.js'),
      excludes: ['*hot-update*', '**/*.map', '**/stats.json']
    }),
    new webpack.HashedModuleIdsPlugin() // not needed for strategy to work (just good practice)
  ]
}
