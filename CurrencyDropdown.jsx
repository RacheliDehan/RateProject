import React from 'react';

const CurrencyDropdown = ({ selectedCurrency, onChange }) => {
    return (
        <select value={selectedCurrency} onChange={onChange}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="CNY">CNY</option>
            <option value="ILS">ILS</option>
        </select>
    );
};

export default CurrencyDropdown;