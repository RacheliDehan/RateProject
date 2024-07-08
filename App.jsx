import React, { useState, useEffect } from 'react';
import CurrencyDropdown from './components/CurrencyDropdown';
import ExchangeRatesTable from './components/ExchangeRatesTable';

const App = () => {
    const [baseCurrency, setBaseCurrency] = useState('USD');
    const [exchangeRates, setExchangeRates] = useState([]);

    useEffect(() => {
       fetch(`https://localhost:44396/ExchangeRates/exchange-rates/${baseCurrency}`)
            .then(response => response.json())
            .then(data => setExchangeRates(data));
    }, [baseCurrency]);

    return (
        <div>
            <h1>Exchange Rates</h1>
            <CurrencyDropdown selectedCurrency={baseCurrency} onChange={(e) => setBaseCurrency(e.target.value)} />
            <ExchangeRatesTable baseCurrency={baseCurrency} exchangeRates={exchangeRates} />
        </div>
    );
};

export default App;