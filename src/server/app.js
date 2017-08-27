/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const devServer = require('./dev.server');
const productionServer = require('./production.server');
const routes = require('./routes/');

const port = (process.env.PORT || 8080);
const app = express();

// Internal Express Routes
app.use(routes);

if (process.env.NODE_ENV !== 'production') {
  devServer(app);
} else {
  productionServer(app);
}

app.listen(port);
console.log(`Listening at http://localhost:${port}`);
