const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  entry: ['react-hot-loader/patch', './src/index.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    // Copies index.html to dist folder with <script> for bundle
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    // Clears dist folder with each build
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin(),
  ],
};
