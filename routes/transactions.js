// routes/transactions.js
const express = require('express');
const router = express.Router();
const ProductTransaction = require('../models/ProductTransaction');

router.get('/listTransactions', async (req, res) => {
    try {
        const { month, search, page, perPage } = req.query;
        const query = { dateOfSale: { $regex: month, $options: 'i' } };
        if (search) {
            query.$or = [
                { title: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } },
                { price: { $regex: search, $options: 'i' } }
            ];
        }
        const transactions = await ProductTransaction.find(query)
                                                    .skip((page - 1) * perPage)
                                                    .limit(perPage);
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ message: 'Error listing transactions.' });
    }
});

module.exports = router;
