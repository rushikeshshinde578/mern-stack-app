// routes/barChart.js
const express = require('express');
const router = express.Router();
const ProductTransaction = require('../models/ProductTransaction');

router.get('/barChart', async (req, res) => {
    try {
        const { month } = req.query;
        const priceRanges = [
            { range: '0 - 100', count: await ProductTransaction.countDocuments({ dateOfSale: { $regex: month, $options: 'i' }, price: { $lte: 100 } }) },
            // Define other ranges similarly
        ];
        res.json(priceRanges);
    } catch (error) {
        res.status(500).json({ message: 'Error generating bar chart data.' });
    }
});

module.exports = router;
