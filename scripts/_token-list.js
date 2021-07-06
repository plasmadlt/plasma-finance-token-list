const fs = require('fs');
const filename = `${process.cwd()}/plasma-finance-token-list.json`;

/**
 * Return token list file data as object
 * @return {any}
 */
exports.getTokenList = () => {
  if (!fs.existsSync(filename)) {
    console.error(`File ${filename} not exists.`);
    process.exit(-1);
  }

  try {
    return JSON.parse(fs.readFileSync(filename, 'utf8'));
  } catch (e) {
    console.error(e);
    process.exit(-1);
  }
}

/**
 * Save token list to file
 * @param tokenList
 */
exports.updateTokenList = (tokenList) => {
  const fileData = JSON.stringify(tokenList, null, '  ');

  fs.writeFileSync(filename, fileData, 'utf8');
}
