const bigDecimal = require("js-big-decimal");
const config = require("../../config");
const thegraph = require("../utils/thegraph");

/**
 * 
 * @param {string} pairAddress 
 * @param {string} priceIndex - e.g. token0Price
 * @returns the value of priceIndex
 */
const getTokenPrice = async (pairAddress, priceIndex) => {
  try {
    const query = `
      {
        pairs(
          first: 1,
          where: {
            id: "${pairAddress}"
          }
        ) {
          ${priceIndex}
        }
        _meta {
          deployment
        }
      }
    `
    apiUrl = config.thegraph.spookyswap_url;
    let response = await thegraph.query(apiUrl, query);
    if(response && response._meta?.deployment != config.thegraph.spookyswap_deployment_id)
    {
      throw "Deployment ID of the SpookySwap subgraph has been changed";
    }
    if(
      response?.pairs?.length > 0 
      )
    {
      price = new bigDecimal(response.pairs[0][priceIndex]);
      price = price.multiply(new bigDecimal(Math.pow(10,18)));
      price = price.round();
      return price.getValue();
    }
  } catch (error) {
    console.log(error);
  }
  return false;
}

module.exports = {
  getTokenPrice: getTokenPrice,
}