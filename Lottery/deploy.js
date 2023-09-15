const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { abi, bytecode } = require('./compile');

// const provider = new HDWalletProvider(
//     'romance casino kitchen canal hover load bullet wire crowd kit front switch',
//     'https://goerli.infura.io/v3/ae7fea8f24634a11abb89147e88bda8b',
//      
// )
const rpcUrl = 'https://goerli.infura.io/v3/ae7fea8f24634a11abb89147e88bda8b';
const web3 = new Web3(new HDWalletProvider('romance casino kitchen canal hover load bullet wire crowd kit front switch', rpcUrl));

const deploy = async () => {

    const accounts = await web3.eth.getAccounts();

    console.log(`Deploy with ${accounts[0]}`)

   const result = await new web3.eth.Contract(abi)
    .deploy({data:'0x' + bytecode})
    .send({ from: accounts[0]});
    console.log(`Contract address: ${result.options.address}`);
    console.log(abi);
}

deploy()