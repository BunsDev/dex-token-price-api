const express = require('express');
const router = express.Router();
const fs = require('fs');
const { tokenPricesFilePath } = require("../../config/index");
const spiritswapSubgraph = require('../../src/helpers/spiritswap-subgraph');
const thegraph = require('../../src/helpers/thegraph');

// @route GET api/token-price/:exchange/:pair/:priceIndex
// @description inquiry token price
// @access Public
router.get('/:exchange/:pair/:priceIndex', async (req, res, next) => {
  var price = "0";
  try {
    let exchange = req.params.exchange;
    let pair = req.params.pair;
    let priceIndex = req.params.priceIndex;
    pair = pair.toLocaleLowerCase();
    exchange = exchange.toLocaleLowerCase();
    let result = await thegraph.getTokenPrice(exchange, pair, priceIndex);
    if(result)
    {
      price = result;
    }
  } catch (error) {
  }
  res.json({
    "price": price
  });
  next();
});


module.exports = router;