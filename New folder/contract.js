const contractABI = [
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "regno",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "dob",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "blood_group",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "phone_number",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "fathers_name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "mothers_name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "valid_through",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "dept",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "board",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "addr",
            "type": "address"
          }
        ],
        "name": "issueID",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "readMessage",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_recipient",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "_message",
            "type": "string"
          }
        ],
        "name": "sendMessage",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "viewID",
        "outputs": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "regno",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "string",
                    "name": "dob",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "blood_group",
                    "type": "string"
                  },
                  {
                    "internalType": "uint256",
                    "name": "phone_number",
                    "type": "uint256"
                  },
                  {
                    "internalType": "string",
                    "name": "fathers_name",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "mothers_name",
                    "type": "string"
                  }
                ],
                "internalType": "struct Sharpid.personal",
                "name": "p",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "valid_through",
                    "type": "uint256"
                  },
                  {
                    "internalType": "string",
                    "name": "dept",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "board",
                    "type": "string"
                  }
                ],
                "internalType": "struct Sharpid.college",
                "name": "c",
                "type": "tuple"
              }
            ],
            "internalType": "struct Sharpid.id",
            "name": "",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ]


const contractAddress = "0x975c4207E957c813fe3A5606086520aA63128ac1"
const RPCURL = "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";
var accounts,web3;

async function loadBlockchainData() {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    const account = accounts[0];
    console.log(account);
    const balance = await web3.eth.getBalance(account);
    console.log(balance);
    const balanceInEther = web3.utils.fromWei(balance, 'ether');
    console.log(balanceInEther);
  }

