/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const path = require('path');
const config = require('../../config/webpack.dev.config');

const devServer = (app) => {
  const compiler = webpack(config);

  // Use HMR Middleware
  app.use(webpackHotMiddleware(compiler));

  // Use Webpack Dev Server Middleware
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  }));

  // Serve the index.html created by HtmlWebpackPlugin
  app.use('*', (req, res, next) => {
    const filename = path.join(compiler.outputPath, 'index.html');
    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) {
        return next(err);
      }

      res.set('content-type', 'text/html');
      res.send(result);
      res.end();

      return true;
    });
  });
};

module.exports = devServer;
