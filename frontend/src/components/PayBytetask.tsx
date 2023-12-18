
import { useBackend } from "@/contexts/Request";
import ShowNotification from "./Notification";
import { parseEther } from 'viem'
import { useEffect, useState } from "react";
import { useDebounce } from 'use-debounce'
import { usePrepareSendTransaction, useSendTransaction, useWaitForTransaction } from 'wagmi'


export default function PayBytetask() {

  const { jobDetail, userData, createOrderContext, createOrderResponse } = useBackend();

  const [to, setTo] = useState('0x70997970C51812dc3A010C7d01b50e0d17dc79C8')
  const [debouncedTo] = useDebounce(to, 500)

  const [amount, setAmount] = useState(jobDetail.jobPrice as unknown as string)
  const [debouncedAmount] = useDebounce(amount, 500)

  const { config } = usePrepareSendTransaction({
    to: debouncedTo,
    value: debouncedAmount ? parseEther(String(debouncedAmount)) : undefined,
  })
  const { data, sendTransaction } = useSendTransaction(config)

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  })


  const createOrder = async (event: any) => {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const orderData = {
      jobId: jobDetail.id,
      freelancerId: jobDetail.userId,
      customerId: userData.id,
      customerNote: formdata.get('customerNote') as string,
      orderAmount: jobDetail.jobPrice,
    };
    console.log(orderData)
    //createOrderContext(orderData);


  };

  // const handleSuccess = async () => {
  //   console.log('basarili');
  //   await createOrder(event); // 'event' parametresini ileterek 'createOrder' fonksiyonunu çağırın
  //   console.log('basarili');
  // };

  // useEffect(() => {
  //   (async () => {
  //     if (isSuccess) {
  //       await handleSuccess(); // 'handleSuccess' fonksiyonunu çağırın
  //     }
  //   })();
  // }, [isSuccess]);






  return (
    <div className="min-h-screen flex items-center justify-center bg-black bg-opacity-70">
      <div className="rounded-3xl p-20 pt-0 w-full flex items-center justify-center">

        <div className="bg-[#23202A] w-full rounded-3xl border-none shadow-2xl dark:border md:mt-24 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-50">
              Şipariş Ver
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={async (e) => {
              e.preventDefault()
              sendTransaction?.()
            }}>


              <div>
                <label htmlFor="customerNote" className="block mb-2 text-sm font-medium text-gray-200">Müşteri Notu</label>
                <textarea
                  name="customerNote"
                  id="customerNote"
                  className="bg-[#1E1B24] text-gray-50 sm:text-sm rounded-lg focus:border-gray-600 block w-full p-2.5 h-32"
                />
              </div>
              <div className="flex flex-col w-full space-y-3 mt-12 pr-6 ">
                <div className="flex flex-row justify-between items-center">

                  <div className=" items-center flex flex-row space-x-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 text-gray-400 p-2 bg-black bg-opacity-40 rounded-xl">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                    <h2 className="text-gray-400 text-base font-normal">{jobDetail.workTime} Günde Teslim</h2>
                  </div>

                </div>
                <div className="flex flex-row justify-between items-center">
                  <div className=" items-center flex flex-row space-x-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 text-gray-400 p-2 bg-black bg-opacity-40 rounded-xl">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                    </svg>



                    <h2 className="text-gray-400 text-base font-normal  ">{jobDetail.revision} Revizyon Hakkı </h2>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <div className=" items-center flex flex-row space-x-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 text-gray-400 p-2 bg-black bg-opacity-40 rounded-xl">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                    </svg>

                    <h2 className="text-green-500 text-2xl font-medium">{jobDetail.jobPrice}$</h2>
                  </div>
                </div>



              </div>

              <button
                type="submit"
                disabled={isLoading || !sendTransaction || !to || !amount}
                className="w-full text-opacity-0 text-lg bg-white hover:bg-black hover:bg-opacity-10 hover:text-white border border-gray-50 focus:ring-1 focus:outline-none focus:ring-white font-bold rounded-full px-6 py-2 text-center transition duration-300 ease-in-out"
              >
                {isLoading ? 'Ödeme Yapılıyor...' : 'Şiparişi Tamamla'}
              </button>
              {isSuccess && (
                <div className=" text-gray-300 font-mono">
                  Successfully sent {amount} BYT to {to} hash {data?.hash.slice(0, 40)}...
                </div>
              )}
            </form>


          </div>
        </div>

      </div>


      {/* {createOrderResponse.message && (
        <ShowNotification
          NotiType={createOrderResponse.success ? "success" : "error"}
          NotiMessage={createOrderResponse.message}
        />
      )} */}

    </div>
  );
}
