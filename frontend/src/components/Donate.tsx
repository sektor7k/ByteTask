import { useMetaMask } from "@/contexts/MetaMaskProvider";
import React, { useEffect, useState } from "react";
import Web3 from 'web3';

export default function Donate() {
  const { sendEther } = useMetaMask(); 
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionHash, setTransactionHash] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    
    e.preventDefault();

    // Güvenlik kontrolleri ve gerekli validasyonlar burada yapılabilir

    try {
      const web3 = new Web3();
      
      // Amount'u WEI cinsinden çevirme
      const amountInWei = web3.utils.toWei(amount, 'ether');
      
      const hash = await sendEther(Number(amountInWei), address);
      setTransactionHash(hash);
    } catch (error) {
      // Hata durumunda yapılacak işlemler
      console.error("Transaction failed:", error);
    }
  };

  useEffect(() => {
    if (transactionHash) {
      console.log("Transaction Hash:", transactionHash);
    }
  }, [transactionHash]);

  
  return (
    <div style={{ backgroundColor: '#1E1B24' }} className="min-h-screen flex items-center justify-center">
      <div className="rounded-3xl p-20 pt-0 w-10/12 flex items-center justify-center">

        <div style={{ backgroundColor: '#23202A' }} className="w-full rounded-3xl border-none shadow-2xl dark:border md:mt-24 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-50">
              Send Donate BYT
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>

              <div>
                <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-200">Address *</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  style={{ background: '#1E1B24' }}
                  className="text-gray-50 sm:text-sm rounded-lg focus:border-gray-600 block w-full p-2.5"
                  placeholder="0x45....."
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-200">Amount *</label>
                <input
                  type="text"
                  name="amount"
                  id="amount"
                  placeholder="123"
                  style={{ background: '#1E1B24' }}
                  className="text-gray-50 sm:text-sm rounded-lg focus:border-gray-600 block w-full p-2.5"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full text-opacity-0 bg-white hover:bg-black hover:bg-opacity-10 hover:text-white border border-gray-50 focus:ring-1 focus:outline-none focus:ring-white font-bold rounded-full text-sm px-6 py-3 text-center transition duration-300 ease-in-out"
              >
                Send Donate
              </button>
            </form>

            {transactionHash && (
              <div className="text-white mt-4">
                Transaction Successful! Transaction Hash: {transactionHash}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
