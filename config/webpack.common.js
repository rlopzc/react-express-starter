/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, '../'),

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },

  module: {
    loaders: [
      {
        test: /.jsx?$/,
        include: path.join(__dirname, '../src/client/'),
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/client/index.html',
    }),
  ],

  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
