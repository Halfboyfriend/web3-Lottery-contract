const ethers = require('ethers');
const { abi, bytecode } = require('./compile');


const rpcUrl = 'https://goerli.infura.io/v3/ae7fea8f24634a11abb89147e88bda8b';
const mnemonic = 'romance casino kitchen canal hover load bullet wire crowd kit front switch';
//const wallet = new Wallet.fromMnemonic(mnemonic)

const walletPrivateKey = new Wallet(walletMnemonic.privateKey)

//wallet.address === walletPrivateKey.address
console.log(walletPrivateKey.address)


const deploy = async () => {
    const contractFactory = new ethers.ContractFactory(
        abi, // Your contract's ABI
        bytecode, // Your contract's bytecode
        wallet
      );
      
      // Deploy the contract
      const contract = await contractFactory.deploy();
      
      // Wait for the contract to be mined
      const result =  await contract.deployed();
      console.log(`Contract address: ${result.options.address}`);
    console.log(abi);
      console.log('DONE....')
}
deploy()
