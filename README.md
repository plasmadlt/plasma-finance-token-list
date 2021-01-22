# Plasma.Finance Token List
 https://raw.githubusercontent.com/plasmadlt/token-list/master/swap.tokenlist.json

See https://tokenlists.org/.

# Add token in Token List 
## 1. Press on Fork in the top right corner, wait for process to complete.

```
git clone https://github.com/plasmadlt/token-list
```
## 2. Add your token image in Assets

```
https://github.com/plasmadlt/token-list/tree/master/assets 
```

### Image Requirements
File extension: png. Uppercase PNG is considered invalid.
File name：<contract_address>.png, all lowercase.
Dimension: 256 x 256 pixels or 512 x 512 pixels.
Background: preferably transparent (should fit dark mode as well; deny logos need light border/background).
File size: maximum 100kB.  Tip: optimize image size, e.g. using simple drag-and-drop online service tinypng.
## 3. Add your token data in swap.tokenlist.json

Address contract must be ***checksummed***

```
{
         "address": "0x054D64b73d3D8A21Af3D764eFd76bCaA774f3Bb2",
         "chainId": 1,
         "name": "Plasma",
         "symbol": "PPAY",
         "decimals": 18,
         "logoURI": "https://raw.githubusercontent.com/plasmadlt/token-list/master/assets/0x054d64b73d3d8a21af3d764efd76bcaa774f3bb2.png"
      },
```

## 4. Make a new PR (pull request)

```
git add -A
git commit -m “Add <token_name>”
git push origin <branch_name>
```