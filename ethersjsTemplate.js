const { ethers } = require("ethers");
require('dotenv').config();

const apiKey = process.env.INFURA_MAINNET_WS;

// console.log(`The value of my variable is: ${apiKey}`);

const provider = new ethers.providers.WebSocketProvider(process.env.INFURA_MAINNET_WS);

const doSomething = async () => {
    const myVariable = await provider.someFunction()
}

doSomething()