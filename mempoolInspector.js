const { ethers } = require("ethers");
require('dotenv').config();

const apiKey = process.env.INFURA_MAINNET_WS;

// console.log(`The value of my variable is: ${apiKey}`);
// console.log(`WebSocket URL: wss://mainnet.infura.io/ws/v3/${apiKey}`);

const provider = new ethers.providers.WebSocketProvider(`wss://mainnet.infura.io/ws/v3/${apiKey}`);

const mempoolInspector = async () => {
      provider.on('pending', async (txhash) => {

        const transaction = await provider.getTransaction(txhash)

        if (transaction !=null) {
            // console.log(`Transaction: ${JSON.stringify(transaction, null, 2)}`);
            gasprice = transaction.gasPrice
            convertedPrice = ethers.utils.formatEther(gasprice)
            console.log(`Transaction status: ${transaction.confirmations} \n Tx Id: ${transaction.hash} \n Gas Price: ${gasprice} \n Gas Price in ETH: ${convertedPrice}  `)

        }

      })

        // console.log(`Transaction Detail: ${JSON.stringify(blockDetail.transactions, null, 2)}`);


}

mempoolInspector()