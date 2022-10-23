var Web3 = require('web3');


// https://rpc.apothem.network

// xdcB0B2C7B14ba9A552E819b9799Ee54bD2E0E94717

console.log("Hello world!")

var MyContract = [
    {
      "inputs": [],
      "name": "retrieve",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "num",
          "type": "uint256"
        }
      ],
      "name": "store",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]

const init = async () => {
    const web3 = new Web3("https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161");
    const contract = new web3.eth.Contract(MyContract,"0x70242ade66d64ac7f2245238b2c7622462e7c221");
    const id = await new web3.eth.net.getId();
    console.log(id);
    contract.methods.store(10).call()
    var result = await contract.methods.retrieve().call();
    console.log(result);
    console.log("Connected");
}

init();