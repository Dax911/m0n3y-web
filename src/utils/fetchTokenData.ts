import { z } from "zod";

const responseSchema = z.array([z.object()]);

const chainId = "solana";
const tokenAddresses = "ANNTWQsQ9J3PeM6dXLjdzwYcSzr51RREWQnjuuCEpump";

const response = await fetch(
  `https://api.dexscreener.com/tokens/v1/${chainId}/${tokenAddresses}`,
  {
    method: "GET",
  }
);

const data = await response.json();

return data;
