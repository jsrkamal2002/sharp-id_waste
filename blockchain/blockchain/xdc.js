var Web3 = require('web3');


// https://rpc.apothem.network

var mysamp = "0xB0B2C7B14ba9A552E819b9799Ee54bD2E0E94717";

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
    const web3 = new Web3("https://rpc.apothem.network");
    const contract = new web3.eth.Contract(MyContract,web3.utils.toChecksumAddress("0x218b3bcaa5C09cBeD9cbA3D198335d7eDb48d170"));
    const id = await new web3.eth.net.getId();
    console.log(id);
    // contract.methods.store(10).call();
    var result = await contract.methods.store(10).call();
    console.log(result);
    console.log("Connected");
    web3.eth.getAccounts(console.log);
}

init();