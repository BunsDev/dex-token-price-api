const axios = require("axios");
const bigDecimal = require("js-big-decimal");
const { thegraph } = require("../../config");
const { UniswapTokenPoolRoutes } = require('../constants/tokens');

const getTokenPrice = async (token) => {
  let price = "0";
  try {
    const route = UniswapTokenPoolRoutes[token];
    var result = new bigDecimal(1);
    await Promise.all(
      route.map(async (pool) => {
        const query = `
          {
            pools(
              first: 1,
              where: {
                id: "${pool.id}"
              }
            ) {
              ${pool.priceIndex}
            } 
          }
        `
        apiUrl = thegraph.uniswap_url;
        let response = await axios.post(apiUrl, {
          query: query 
        });
        const data = response.data;
        if(
          response.status === 200 &&
          data?.data?.pools?.length > 0 
          )
        {
          let tokenPrice = data.data.pools[0][pool.priceIndex];
          tokenPrice = new bigDecimal(tokenPrice);
          result.multiply(tokenPrice);
        }
      })
    )
    result.round(5, bigDecimal.RoundingModes.CEILING);
    let finalVal = result.multiply(new bigDecimal(Math.pow(10,18)));
    price = finalVal.getValue()
  } catch (error) {
  }
  return price;
}

module.exports = {
  getTokenPrice: getTokenPrice,
}