
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { MetaMaskProvider } from '@/contexts/MetaMaskProvider'
import {BackendProvider} from '@/contexts/Request'



export default function App({ Component, pageProps }: AppProps) {

  return (

    
    <>
    <BackendProvider>
    <MetaMaskProvider>
    <Component {...pageProps} />
    </MetaMaskProvider>
    </BackendProvider>
    
    </>


  )



}