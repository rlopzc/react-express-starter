const { Router } = require('express');

const router = Router();

router.get('/hello', (req, res) => {
  res.status(200).send('world');
});

module.exports = router;
