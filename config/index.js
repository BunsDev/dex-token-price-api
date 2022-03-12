const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    server: {
        port: process.env.PORT
    },
    api: {
      host: process.env.API_HOST,
      key: process.env.API_KEY,
      secret: process.env.API_SECRET,
    },
    tokenPricesFilePath: process.env.TOKEN_PRICES_FILE_PATH,
    thegraph: {
      spookyswap_url: process.env.SPOOKYSWAP_SUBGRAPH_URL,
      spookyswap_deployment_id: process.env.SPOOKYSWAP_SUBGRAPH_DEPLOYMENT_ID,
      uniswap_url: process.env.UNISWAP_SUBGRAPH_URL,
      uniswap_deployment_id: process.env.UNISWAP_SUBGRAPH_DEPLOYMENT_ID,
      spiritswap_url: process.env.SPIRITSWAP_SUBGRAPH_URL,
      spiritswap_deployment_id: process.env.SPIRITSWAP_SUBGRAPH_DEPLOYMENT_ID
    },
};
