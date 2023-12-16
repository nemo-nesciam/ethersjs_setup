const { ethers } = require("ethers");
require('dotenv').config();

const apiKey = process.env.INFURA_MAINNET_WS;

// console.log(`The value of my variable is: ${apiKey}`);
// console.log(`WebSocket URL: wss://mainnet.infura.io/ws/v3/${apiKey}`);

const provider = new ethers.providers.WebSocketProvider(`wss://mainnet.infura.io/ws/v3/${apiKey}`);

const blockInspector = async () => {
      
        const blockNum = await provider.getBlockNumber();
        console.log(`Block #: ${blockNum}\n`);

        const blockDetail = await provider.getBlock(blockNum)
        console.log(`Block Detail: ${JSON.stringify(blockDetail, null, 2)}`);
        // console.log(`Transaction Detail: ${JSON.stringify(blockDetail.transactions, null, 2)}`);


    transactionInspector(blockNum)
}


const transactionInspector = async (blockNum) => {
   
        const {transactions} = await provider.getBlockWithTransactions(blockNum);
        // console.log(`Transaction Detail: ${JSON.stringify(transactions[0], null, 2)}`);
        transactions.forEach(function(transaction){
        console.log(`Transaction Detail: ${JSON.stringify(transaction, null, 2)}`);
        // console.log(`to:${transaction.to}`)
        // console.log(`from:${transaction.from}`)
        })

}

blockInspector();



