const fs = require('fs');
const { tokenPricesFilePath } = require('../../config/index');
const { TokensPairMap } = require('../constants/tokens');
const { getTokenPrice } = require('./thegraph');

const updateTokenPrices = async () => {
  try {
    let tokens = {};
    await Promise.all(
      Object.keys(TokensPairMap).map(async (token) => {
        let tokenPrice = await getTokenPrice(token);
        tokens[token] = tokenPrice;
      })
    );
    fs.writeFileSync(tokenPricesFilePath, JSON.stringify(tokens));
  } catch (error) {
  }
}

module.exports = {
  updateTokenPrices: updateTokenPrices
}

