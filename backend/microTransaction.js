import { createWalletClient, http, parseEther } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { foundry } from 'viem/chains'

const account = privateKeyToAccount('0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80')
const transport = http('http://127.0.0.1:8545')
const client = createWalletClient({
  account,
  chain: foundry,
  transport 
})

console.log(account.address);

const hash = await client.sendTransaction({ 
  account,
  to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
  value: parseEther('10')
})

export async function sendByt(){

  console.log(account.address);
  console.log(hash);

}