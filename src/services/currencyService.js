const { getExchangeRates } = require('../../config/exchangeRateApi');

const getExchangeRate = async () => {
  try {
    const data = await getExchangeRates();
    const rate = data.conversion_rates.EUR;
    return {
      baseCurrency: 'USD',
      targetCurrency: 'EUR',
      rate,
    };
  } catch (error) {
    console.error('Error in getExchangeRate service', error);
    throw error;
  }
};

module.exports = {
  getExchangeRate,
};