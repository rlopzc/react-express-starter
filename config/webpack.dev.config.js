/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

module.exports = Merge(CommonConfig, {
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './src/client/index.jsx',
  ],

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
});
