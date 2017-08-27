const express = require('express');
const path = require('path');

const productionServer = (app) => {
  // Expose dist/
  app.use(express.static(path.join(__dirname, '../../dist')));

  // Fallback to index.html (React)
  app.get('*', (_, res) => {
    const indexPath = path.join(__dirname, '../../dist/index.html');
    res.sendFile(indexPath);
  });
};

module.exports = productionServer;
