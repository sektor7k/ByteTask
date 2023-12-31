import { Chain } from 'wagmi'
 
export const bytetask = {
  id: 31337,
  name: 'Byte Task',
  network: 'bytetask',
  nativeCurrency: {
    decimals: 18,
    name: 'bytetask',
    symbol: 'BYT',
  },
  rpcUrls: {
    public: { http: ['http://localhost:8545/'] },
    default: { http: ['http://localhost:8545/'] },
  }
} as const satisfies Chain