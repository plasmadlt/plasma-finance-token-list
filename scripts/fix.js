const { getTokenList, updateTokenList } = require('./_token-list');
const { getAddress } = require('@ethersproject/address');

const tokenList = getTokenList();

tokenList.tokens.forEach(tokenItem => {
  const checksummedAddress = getAddress(tokenItem.address);
  if (checksummedAddress !== tokenItem.address) {
    tokenItem.address = checksummedAddress;
    console.log(`Address ${tokenItem.address} was checksummed!`);
  }
});

updateTokenList(tokenList);
console.log('Token list checksummed.');
