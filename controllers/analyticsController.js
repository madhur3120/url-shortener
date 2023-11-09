const urlModel = require('../models/url-model');
const analyticsController = async (req, res) => {
    const shortId = req.params.id;
    const result = await urlModel.findOne({ shortId });
    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
    })
}

module.exports = analyticsController;