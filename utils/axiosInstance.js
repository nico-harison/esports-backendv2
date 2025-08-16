const axios = require('axios');
require('dotenv').config();

const api = axios.create({
  baseURL: 'https://api.pandascore.co',
  headers: {
    Authorization: `Bearer ${process.env.PANDASCORE_API_KEY}`
  }
});

module.exports = api;