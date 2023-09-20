const {Web3} = require('web3');
const ganache = require('ganache');
const assert = require('assert');
const web3 = new Web3(ganache.provider());
const { abi, bytecode } = require('../compile');

let accounts;
let lottery;


console.log(bytecode)


// beforeEach(async () => {
//     accounts = await web3.eth.getAccounts();
//     const prefixedBytecode = '0x' + bytecode;
//     lottery = await new web3.eth.Contract(abi)
//      .deploy({data: prefixedBytecode})
//      .send({ from: accounts[1], gas: '1000000'});
// })



// describe('Lottery Contract', () => {
//     it('deploys a contract', () => {
//       assert.ok(lottery.options.address);
//     });

//     it('enters contract with one account', async () => {
//       await lottery.methods.enter().send({from: accounts[0],
//          value: web3.utils.toWei('0.02', 'ether')});

//      const players = await lottery.methods.getAllPlayers().call({ from: accounts[0]})
//      assert.equal(accounts[0], players[0]);
//      assert.equal(1, players.length);
//     });

//     it('enters contract with multiple account', async () => {
//       await lottery.methods.enter().send({from: accounts[0],
//          value: web3.utils.toWei('0.02', 'ether')});

//       await lottery.methods.enter().send({from: accounts[1],
//           value: web3.utils.toWei('0.02', 'ether')});

     

//      const players = await lottery.methods.getAllPlayers().call({ from: accounts[0]})
//      assert.equal(accounts[0], players[0]);
//      assert.equal(accounts[1], players[1]);
   
//      assert.equal(2, players.length);
//     });

//     it('Sends correct amount of ether', async() => {
//       try{
//         await lottery.methods.enter().send({from: accounts[0],
//           value: 200});
//         assert(false);
//       } catch (err) {
//         assert(err);
//       } 
//     });

//     it('Only Manager call', async () =>{
//       try {
//         await lottery.methods.pickWinner().send({from: accounts[1]})
//         assert(false)
//       } catch(err){
//         assert(err);
//       }
//     });

//     it('sends ether to the winner and resets the player array', async() => {
//       await lottery.methods.enter().send({
//         from: accounts[0],
//         value: web3.utils.toWei('1', 'ether')
//       });
    
    
//       const initialBalance = await web3.eth.getBalance(accounts[0]);
//       console.log(`INITIAL BALANCE IS ${initialBalance}`);
//       await lottery.methods.pickWinner().send({ from: accounts[1]}); //Not checking
//       const finalBalance = await web3.eth.getBalance(accounts[0]);
//       const differences = finalBalance - initialBalance;
//       console.log(`DIFFERENCES: ${differences})`);
//       assert(differences > web3.utils.toWei('0.1', 'ether'));
      
//     })
  
// })
