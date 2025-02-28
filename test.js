const { isTypedArray } = require("util/types");

const chainId = "solana";
const tokenAddresses = "ANNTWQsQ9J3PeM6dXLjdzwYcSzr51RREWQnjuuCEpump";

const response = await fetch(
  `https://api.dexscreener.com/tokens/v1/${chainId}/${tokenAddresses}`,
  {
    method: "GET",
  }
);

const data = await response.json();

//console.log(data);

const USDprice = data[0].marketCap;

console.log(USDprice);

//Build response type for dex screener

/*
[
  {
    chainId: "solana",
    dexId: "raydium",
    url: "https://dexscreener.com/solana/95at5r4i85gfqeew2yr6byfg8rlry1d9ztps7qrskdvc",
    pairAddress: "95AT5r4i85gfqeew2yR6BYFG8RLrY1d9ztPs7qrSKDVc",
    baseToken: {
      address: "ANNTWQsQ9J3PeM6dXLjdzwYcSzr51RREWQnjuuCEpump",
      name: "Monopoly Money",
      symbol: "M0N3Y",
    },
    quoteToken: {
      address: "So11111111111111111111111111111111111111112",
      name: "Wrapped SOL",
      symbol: "SOL",
    },
    priceNative: "0.0000002410",
    priceUsd: "0.00003185",
    txns: {
      m5: {
        buys: 0,
        sells: 1,
      },
      h1: [Object ...],
      h6: [Object ...],
      h24: [Object ...],
    },
    volume: {
      h24: 38425.81,
      h6: 29668.67,
      h1: 1504.16,
      m5: 14.65,
    },
    priceChange: {
      m5: -1,
      h1: 8.08,
      h6: 26.28,
      h24: 136,
    },
    liquidity: {
      usd: 20702.4,
      base: 324757399,
      quote: 78.3657,
    },
    fdv: 31852,
    marketCap: 31852,
    pairCreatedAt: 1740006039000,
    info: {
      imageUrl: "https://dd.dexscreener.com/ds-data/tokens/solana/ANNTWQsQ9J3PeM6dXLjdzwYcSzr51RREWQnjuuCEpump.png?key=75c721",
      header: "https://dd.dexscreener.com/ds-data/tokens/solana/ANNTWQsQ9J3PeM6dXLjdzwYcSzr51RREWQnjuuCEpump/header.png?key=75c721",
      openGraph: "https://cdn.dexscreener.com/token-images/og/solana/ANNTWQsQ9J3PeM6dXLjdzwYcSzr51RREWQnjuuCEpump?timestamp=1740706800000",
      websites: [
        [Object ...]
      ],
      socials: [
        [Object ...], [Object ...], [Object ...]
      ],
    },
  }
]

*/
