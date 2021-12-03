require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remember horn gesture sell sudden ski'; 
let testAccounts = [
"0x8ab2ab320c2493829e13b57a46d77eac9e889b65aa646343d848a11a9c508479",
"0x1fe474a459fa560da9b72d536805bb2763ddf18fba9407f72cc9e70407712701",
"0xe408eba6f894afc87452df45569a15a6cf6181874b9a0d59c1e1ecc2d322e1a9",
"0xa4b8a0e4d3532752578703aa1fbd8915140e409e1f2a639cbe6caa7da1b1662b",
"0x71a1c794c3ebfed7b79ad1fd7bffd71bd53b9d72cf5f132000942423f6e46657",
"0x41c3587b6192045d9740071ea671bca0a50aafb5d8ff99a2d5a5c063115c38e7",
"0xe900113a502ed5eac5604a2ab473429de5271a4554dfbb241342063f59e97f3c",
"0x8bd3ce1e12b19e33aaa3f4d33330ef410bf2efd316669a4ca0e3318cb3fe8190",
"0x350c5f30c9806bc936155ffd99c14453d0cd378dbc48fd59ea5b372d5f3e711d",
"0x18465688f19974e714f07a78d013f8ed3c65359b8e14370f47ec2a02b3b4258e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

