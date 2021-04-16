require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'kidney kiwi onion skull drift riot noise mistake hover forum food ghost'; 
let testAccounts = [
"0x3bfd55277aee0d57cba927af352e665d5df2d573a588d77f7b20aadace08dd4f",
"0xf2340caba561b972d0efe4dbd128c1fa9b687a28739de610324bea0493675f6e",
"0xb86e9d5e0271f6de9b2cffac2f9407e47231aa261411588b5a85a78ab24cf384",
"0xf03bbfd47b6bfcf8750c690dcade0af7c0df444b2e9f4892f09008660d36405b",
"0xc129f2392b28ec0ee1a6d6a826388ab99ee3b019d6f47d151e5f775dce6252c3",
"0x1715e0fc7a44b8d4dc28d8374cf3e6ea121a941a9897603d49248b16167cdd2b",
"0xbbdbe59117f39481ae839beeed0edb727ca086a3e2f446a30eb0304844b63e28",
"0xc5cb102acbbc90b3b228a2dafdb38854df4f78de43e0609e72cbab1c8ee03b7c",
"0x960e6bff06baff55b8232f02f90d3c32de631ef28ed9c6a61fa5b8991e8d4d4f",
"0x4ab4ca4fb5740470f049b6cf8627f9771cc82104b609bed47c97a596caa200cf"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

