const express = require('express');
const router = express.Router();
const { generateShortURL } = require('../controllers/urlController')

router.post('/', generateShortURL)

module.exports = router;