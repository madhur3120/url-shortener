const express = require('express');
const urlModel = require('../models/url-model');
const router = express.Router();
const { generateShortURL } = require('../controllers/urlController');
const { findLongUrlController } = require('../controllers/findLongUrlController');
const analyticsController = require('../controllers/analyticsController');

router.post('/url', generateShortURL)

router.get('/:shortId', findLongUrlController);

router.get('/analytics/:id', analyticsController);

module.exports = router;