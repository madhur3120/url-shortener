const urlSchema = require('../models/url-model');
const shortid = require('shortid');

const generateShortURL = async (req, res) => {
    if (!req.body.url) return res.status(400).send({ error: 'url is necessary' });
    const shortId = shortid(8);
    await urlSchema.create({
        shortId: shortId,
        redirectURL: req.body.url,
        visitHistory: []
    });

    return res.json({ id: shortId });
}

module.exports = { generateShortURL }