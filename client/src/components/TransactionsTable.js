// components/TransactionsTable.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TransactionsTable = () => {
    // State variables
    const [transactions, setTransactions] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedMonth, setSelectedMonth] = useState('March');

    // Fetch transactions based on selected month, search text, and current page
    const fetchTransactions = async () => {
        try {
            const response = await axios.get(`/listTransactions?month=${selectedMonth}&search=${searchText}&page=${currentPage}`);
            setTransactions(response.data);
        } catch (error) {
            console.error('Error fetching transactions:', error);
        }
    };

    useEffect(() => {
        fetchTransactions();
    }, [selectedMonth, searchText, currentPage]);

    // Pagination handlers
    const handleNextPage = () => setCurrentPage(prevPage => prevPage + 1);
    const handlePrevPage = () => setCurrentPage(prevPage => Math.max(prevPage - 1, 1));

    // Search handler
    const handleSearch = (event) => setSearchText(event.target.value);

    return (
        <div>
            {/* Month dropdown */}
            <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
    <option value="January">January</option>
    <option value="January">February</option>
    <option value="January">January</option>
    <option value="January">January</option>
    <option value="January">January</option>
    <option value="January">January</option>
    <option value="January">January</option>
    <option value="January">January</option>
    <option value="January">January</option>
    <option value="January">January</option>
    <option value="January">January</option>
    <option value="December">December</option>
</select>


            {/* Search box */}
            <input type="text" value={searchText} onChange={handleSearch} placeholder="Search transactions" />

            {/* Transactions table */}
            <table>
                {/* Table headers */}
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                    </tr>
                </thead>
                {/* Table body */}
                <tbody>
                    {/* Map through transactions and display rows */}
                </tbody>
            </table>

            {/* Pagination */}
            <button onClick={handlePrevPage}>Previous</button>
            <button onClick={handleNextPage}>Next</button>
        </div>
    );
};

export default TransactionsTable;
