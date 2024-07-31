const currencyService = require('../services/currencyService');

const getExchangeRate = async (req, res) => {
  try {
    const rate = await currencyService.getExchangeRate();
    res.status(200).json(rate);
  } catch (error) {
    console.error('Error getting exchange rate:', error);
    res.status(500).json({ message: 'Error getting exchange rate', error: error.message });
  }
};

module.exports = {
  getExchangeRate,
};