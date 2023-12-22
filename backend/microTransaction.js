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



export async function sendByt(addr, amount) {


  const hash = await client.sendTransaction({
    account,
    to: addr,
    value: parseEther(amount)
  })
  console.log(hash);

}

//sendByt();