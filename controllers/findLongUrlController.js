const urlModel = require('../models/url-model');
const findLongUrlController = async (req, res) => {
    console.log(req.params);
    let shortid = req.params.shortId;
    const entry = await urlModel.findOneAndUpdate({
        shortid
    }, {
        $push: {
            visitHistory: {
                timestamp: Date.now()
            }
        }
    });
    res.redirect(entry.redirectURL);
};

module.exports = { findLongUrlController };