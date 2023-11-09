const express = require('express');
// const { findLongUrlController } = require('../controllers/findLongUrlController')
const urlModel = require('../models/url-model');
const router = express.Router();

router.get('/:shortId', async (req, res) => {
    let shortid = req.params.shortId;
    const entry = await urlModel.findOneAndUpdate({
        shortId: shortid
    }, {
        $push: {
            visitHistory: {
                timestamp: Date.now()
            }
        }
    });
    res.redirect(entry.redirectURL);
});

module.exports = router;