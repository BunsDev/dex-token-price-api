const axios = require("axios");
const { thegraph } = require("../../config");
const { Exchanges } = require("../constants/tokens");
const spookyswap = require("./spookyswap-subgraph");
const spiritswap = require("./spiritswap-subgraph");

/**
 * 
 * @param {string} exchange
 * @param {string} pair - pair address
 * @param {string} priceIndex - e.g. token0Price
 * @returns 
 */
const getTokenPrice = async (exchange, pair, priceIndex) => {
  switch (exchange) {
    case Exchanges.SPOOKYSWAP:
      return await spookyswap.getTokenPrice(pair, priceIndex);
    case Exchanges.SPIRITSWAP:
      return await spiritswap.getTokenPrice(pair, priceIndex);
    case Exchanges.SOLIDLY:
      break;
    default:
      break;
  }
  return false;
}

module.exports = {
  getTokenPrice: getTokenPrice,
}