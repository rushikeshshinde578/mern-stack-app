// components/TransactionsBarChart.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TransactionsBarChart = () => {
    // State variable
    const [barChartData, setBarChartData] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState('March');

    const fetchBarChartData = async (month) => {
        try {
            const response = await axios.get(`http://localhost:3000/barChart?month=${month}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching bar chart data:', error);
            throw error;
        }
    };

    useEffect(() => {
        fetchBarChartData();
    }, [selectedMonth]);

    return (
        <div>
            <h2>Bar Chart for {selectedMonth}</h2>
            {/* Display bar chart */}
        </div>
    );
};

export default TransactionsBarChart;
