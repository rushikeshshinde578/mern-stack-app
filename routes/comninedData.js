// routes/combinedData.js
const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/combinedData', async (req, res) => {
    try {
        const [transactions, statistics, barChart, pieChart] = await Promise.all([
            axios.get('/listTransactions'),
            axios.get('/statistics'),
            axios.get('/barChart'),
            axios.get('/pieChart')
        ]);
        const combinedData = {
            transactions: transactions.data,
            statistics: statistics.data,
            barChart: barChart.data,
            pieChart: pieChart.data
        };
        res.json(combinedData);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching combined data.' });
    }
});

module.exports = router;
