import time
from unittest import result
from brownie import Contract, network, web3


abi = {
    "0x8b8c9c14c8e1442e90dd6ff82bb9889ccfe5a54d88ef30776f11047ecce5fedb": [
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
  }          # contract ABI as a dict
address = "xdc224beCd8F4238c248cD69aC68f0EE4AF053a06F6"  # contract address as a string


network.connect('https://rpc.apothem.network')
my_contract = Contract("Storage", address, abi=abi)

height = 38989777

# while True:
my_contract.store(10) # change to call the desired method
result = my_contract.retrieve()
print(result)
    # do whatever you need to do
# while web3.eth.blockNumber == height:
#     time.sleep(1)
#     height = web3.eth.blockNumber