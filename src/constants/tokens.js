const SpookySwapTokensPairMap = {
  'SOLID': "0xc6c22184ce4f2c2a83c8399a29184634bf9e0514"
}

const UniswapTokenPoolRoutes = {
  FTM: [
    {
      id: '0x3b685307c8611afb2a9e83ebc8743dc20480716e',
      priceIndex: 'token1Price'
    },
    {
      id: '0x11b815efb8f581194ae79006d24e0d814b7697f6',
      priceIndex: 'token1Price'
    }
  ]
}

const Exchanges = Object.freeze({
  SPOOKYSWAP: "spookyswap",
  SPIRITSWAP: "spiritswap",
  SOLIDLY: "solidly"
});

module.exports = {
  SpookySwapTokensPairMap: SpookySwapTokensPairMap,
  UniswapTokenPoolRoutes: UniswapTokenPoolRoutes,
  Exchanges: Exchanges
};