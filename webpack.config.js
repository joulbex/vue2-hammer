// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'vue2-hammer',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    // new UglifyJSPlugin()
  ],
}
