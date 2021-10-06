const express = require('express');
const { home } = require('../../controllers/pages/index');

const router = express.Router();

router.get('/pages', home);

module.exports = router;
