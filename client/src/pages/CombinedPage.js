// pages/CombinedPage.js
import React from 'react';
import TransactionsTable from '../components/TransactionsTable.js';
import TransactionsStatistics from '../components/TransactionsStatistics.js';
import TransactionsBarChart from '../components/TransactionsBarChart.js';

const CombinedPage = () => {
    return (
        <div>
            <TransactionsTable />
            <TransactionsStatistics />
            <TransactionsBarChart />
        </div>
    );
};

export default CombinedPage;
