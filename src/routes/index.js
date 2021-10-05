const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.write('Hello,express\n');
  res.end('That is all for now');
});

module.exports = router;
