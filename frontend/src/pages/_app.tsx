
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { MetaMaskProvider } from '@/contexts/MetaMaskProvider'


export default function App({ Component, pageProps }: AppProps) {

  return (

    
    <>
    <MetaMaskProvider>
    <Component {...pageProps} />
    </MetaMaskProvider>
    </>


  )



}