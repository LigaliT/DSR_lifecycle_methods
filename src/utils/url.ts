export let url = (name: string): string => {
  let api_key =
    "a19e6970d08a55bc93c93db0b0be21c9ed637e80e56d4cbaeba36ad7e900055a";
  return `https://min-api.cryptocompare.com/data/price?fsym=${name}&tsyms=USD&api_key=${api_key}&gt`;
};
