require('dotenv').config();
const axios = require('axios');

const getExchangeRates = async (baseCurrency) => {
  try {
    const response = await axios.get(`https://v6.exchangerate-api.com/v6/${process.env.EXCHANGE_RATE_API_KEY}/latest/USD`);
    return response.data;
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    throw error;
  }
};

module.exports = {
  getExchangeRates,
};