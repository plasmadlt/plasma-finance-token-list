const { getTokenList } = require('./_token-list');
const { getAddress } = require('@ethersproject/address');

const tokenList = getTokenList();

const existedAddresses = [];
tokenList.tokens.forEach(tokenItem => {
  // Check existed address
  if (existedAddresses.includes(`${tokenItem.chainId}-${tokenItem.address.toLowerCase()}`)) {
    console.error(`Token ${tokenItem.address} already exist!`);
  } else {
    existedAddresses.push(`${tokenItem.chainId}-${tokenItem.address.toLowerCase()}`);
  }

  // Check checksummed address
  const checksummedAddress = getAddress(tokenItem.address);
  if (checksummedAddress !== tokenItem.address) {
    console.error(`Address ${tokenItem.address} is not checksummed!`);
  }
});
