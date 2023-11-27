import { createContext, ReactNode, useContext, useState } from "react"

interface MetaMaskContextState {
    address: string | null // kullanicinin adresi, null ise bagli degil demektir
    connect(): Promise<void> // cuzdan baglama fonksiyonu
    sendEther(amount: number, toAddress: string): Promise<string> // tx basariliysa tx hash donduruyor
}

const MetaMaskContext = createContext<MetaMaskContextState>({} as MetaMaskContextState)

export const useMetaMask = () => useContext(MetaMaskContext)

export const MetaMaskProvider = ({ children }: { children: ReactNode }) => {
    const [address, setAddress] = useState<string | null>(null)
 
    return (
        <MetaMaskContext.Provider value={{
            address,
            async connect() {
                if((window as any).ethereum === undefined) {
                    alert('MetaMask is not found!')
                    return
                }

                try {      
                    const userAddresses = await (window as any).ethereum.request({
                        method: 'eth_requestAccounts'
                    })

                    setAddress(userAddresses[0])
                } catch (error) {
                    if((error as any).code === 4001) {
                        return // hata kodu 4001 ise kullanici MetaMask'ta iptale basmistir
                    } else {
                        // hata baska biseyse console'a yazdirsin
                        alert('Open console!')
                        console.log(error)
                    }
                }

            },
            async sendEther(amount: number, toAddress: string) {
                try {      
                    const hash = await (window as any).ethereum.request({              
                        method: 'eth_sendTransaction',
                        params: [{
                            from: address,
                            to: toAddress,
                            value: '0x001', // todo: `value` kismina `amount` parametresine gore hex olarak WEI miktarinin gelmesi lazim
                        }]
                    })

                    return hash
                } catch (error) {
                    if((error as any).code === 4001) {
                        return // hata kodu 4001 ise kullanici MetaMask'ta iptale basmistir
                    } else {
                        // hata baska biseyse console'a yazdirsin
                        alert('Open console!')
                        console.log(error)
                    }
                }
            },
        }}>
            {children}
        </MetaMaskContext.Provider>
    )
}


