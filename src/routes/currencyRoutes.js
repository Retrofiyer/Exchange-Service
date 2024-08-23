const express = require('express');
const router = express.Router();
const currencyController = require('../controller/currencyController');

router.get('/exchange', currencyController.getExchangeRate);

module.exports = router;