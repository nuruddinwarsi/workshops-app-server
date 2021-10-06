const express = require('express');
const { getWorkshops } = require('../../controllers/pages/workshops');

const router = express.Router();

router.get('/pages/workshops', getWorkshops);

module.exports = router;
