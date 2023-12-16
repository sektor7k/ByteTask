
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { BackendProvider } from '@/contexts/Request'
import { Web3Modal } from '@/contexts/Web3Modal'


export default function App({ Component, pageProps }: AppProps) {

  


  return (


    <>
      <BackendProvider>     
        <Web3Modal> 
          <Component {...pageProps} />
          </Web3Modal>     
      </BackendProvider>

    </>


  )



}