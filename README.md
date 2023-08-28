# Plasma.Finance Token List for Ethereum, Optimism, Arbitrum, Avalanche, Fantom, Binance Smart Chain (BNB), Base, Celo and Polygon (Matic)

<p align="center"><img src="https://uploads-ssl.webflow.com/5fb23ed0d183e443d48de300/60f7ddddcdb970cf579066c8_Ethereum%20and%20Polygon%20Full%20Token%20List%202.png"></p>

https://github.com/plasmadlt/plasma-finance-token-list/blob/master/plasma-finance-token-list.json <br>
*We are using this token-list to show tokens on the major DEXs (PlasmaSwap, Uniswap, Sushiswap, Quickswap, Pancakeswap) on Polygon, BSC and Ethereum Chain*

Other token lists: https://tokenlists.org/

# Add your token to the Plasma Token List 
## 1. Press on "Fork" in the top right corner, and wait for the process to complete.

```
git clone https://github.com/plasmadlt/plasma-finance-token-list
```

## 2. Add your token image in the folder "Assets"

```
https://github.com/plasmadlt/token-list/tree/master/assets 
```

### Image Requirements
File extension: png. Uppercase PNG is considered invalid.
File name：<contract_address>.png, all lowercase.
Dimension: 256 x 256 pixels (recommended) or 512 x 512 pixels.
Background: preferably transparent (should fit dark mode as well; deny logos need light border/background).
File size: maximum 100kB.  Tip: Optimize image size, e.g. using simple drag-and-drop online service tinypng.

## 3.1 Add your token data in plasma-finance-token-list.json

Address contract must be ***checksummed***. Check or convert your address in checksummed address here: https://web3-tools.netlify.app/

```json
{
 "address": "0x054D64b73d3D8A21Af3D764eFd76bCaA774f3Bb2",
 "chainId": 1,
 "name": "Plasma",
 "symbol": "PPAY",
 "tags": [],
 "decimals": 18,
 "logoURI": "https://raw.githubusercontent.com/plasmadlt/token-list/master/assets/0x054d64b73d3d8a21af3d764efd76bcaa774f3bb2.png"
},
```
*Please use "chainId": 1 for Ethereum Mainnnet and "chainId": 137 for Polygon Mainnet and "chainId": 56 for BSC*

## 3.2 Tags

You can add any tag from the list below to your token data. You can use up to 3 tags.

```json
"tags": 
    {
      "defi": {
      "name": "DeFi Market",
      "description": "Decentralized Finance protocols"
    },
    "aavev2": {
      "name": "Aave V2",
      "description": "Aave interest bearing tokens"
    },
    "comp": {
      "name": "Compound",
      "description": "Compound protocol balance token"
    },
    "nft": {
      "name": "NFT",
      "description": "Non fungible token"
    },
    "indexes": {
      "name": "DeFi Indexes",
      "description": "Tokenized baskets of high quality DeFi projects"
    },
    "stable": {
      "name": "Stablecoin",
      "description": "Stablecoins may be pegged to a currency like the US dollar or to a commoditys price such as gold"
    },
    "alliance": {
      "name": "Plasma Alliance",
      "description": "Plasma Alliance of ambitious projects and game changing DeFi protocols"
    },
    "dex": {
      "name": "DEX Tokens",
      "description": "Tokens from AMM protocols"
    },
    "wrap": {
      "name": "Wrapped",
      "description": "Wrapped tokens pegged to the value of cryptocurrency from another chain"
    },
    "eth2": {
      "name": "Eth 2 Staking",
      "description": "Eth 2 Staking Tokens"
    },
    "pools": {
      "name": "Pools",
      "description": "Earn trading fees by providing liquidity in a single transaction"
    },
    "synths": {
      "name": "Synthetix",
      "description": "Synthetic cryptocurrency by Synthetix protocol"
    },
    "stock": {
      "name": "Stock",
      "description": "Synthetic stocks by Mirror protocol"
    }
   },
```

## 3.3 Add your token to Plasma.Finance Decentralized Market Page + Create Token Page.

To add your token to our market and create a page for it, please fork our second token list https://github.com/plasmadlt/plasma-finance-market-tokenlist and add your token there also.

## 4. Make a new PR (pull request)

```
git add -A
git commit -m “Add <token_name>”
git push origin <branch_name>
```

# 📞 Contacts
Email: [apy@plasma.finance](mailto:apy@plasma.finance) <br>
Telegram: [Announcement Group](https://t.me/OxPlasma), [Chat](https://t.me/OxPlasmaMedia)

# 🔉 Social Media
[Facebook](https://www.facebook.com/plasmapay) <br>
[Plasma Twitter](https://twitter.com/0xPlasma) <br>
[Spaceport Twitter](https://twitter.com/CyberSpacePort) <br>

# 🔗 Useful Links
### [Plasma Wallet](https://plasma-wallet.com/):
- [Crypto Wallet](https://plasma-wallet.com/)

### [Plasma.Finance](https://plasma.finance/):
#### Platform
- [Market](https://apy.plasma.finance/#/market)
- [HyperDEX](https://apy.plasma.finance/#/hyper-dex)
- [DEX Liquidity Management](https://apy.plasma.finance/#/liquidity-pools)
- [Savings](https://apy.plasma.finance/#/savings)
- [Quadrat Protocol]([https://apy.plasma.finance/#/savings](https://apy.plasma.finance/#/quadrat))
#### IDO
- [SpacePort](https://apy.plasma.finance/#/spaceport)
- [Innovation Hub](https://apy.plasma.finance/#/innovation-hub)
- [Launchpad Alliance](https://apy.plasma.finance/#/launchpads)
- [SpacePort Landing](https://plasma.finance/spaceport)
#### How To
- [Documentation and DeFi University](https://docs.plasma.finance/)

### Media
[PPAY on Coinmarketcap](https://coinmarketcap.com/currencies/plasma-finance/) <br>
[PlasmaSwap (AMM) on CoinMarketCap](https://coinmarketcap.com/exchanges/plasmaswap/) <br>
[Plasma Earn Campaigne on CMC](https://coinmarketcap.com/earn/project/plasmafinance) <br>
[PPAY on Coingecko](https://www.coingecko.com/en/coins/plasma-finance) <br>

### Tokens:
#### PPAY
 - [Ethereum (ERC20)](https://etherscan.io/token/0x054d64b73d3d8a21af3d764efd76bcaa774f3bb2)
 - [Polygon](https://polygonscan.com/token/0x08158a6b5d4018340387d1a302f882e98a8bc5b4)
 - [BSC chain](https://bscscan.com/token/0xfb288d60d3b66f9c3e231a9a39ed3f158a4269aa)
#### xPPAY
 - [Ethereum (ERC20)](https://etherscan.io/token/0x9fd1d329bb687fef164f529f6f6dcd6f69e7b978)
