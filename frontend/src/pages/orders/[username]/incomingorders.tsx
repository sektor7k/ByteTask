import { Request2 } from "@/backend/api";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ShowNotification from "@/components/Notification";
import { useBackend } from "@/contexts/Request";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

type OrderDetailsState = Record<string | number, boolean>;

export default function Profile() {
    const { getFreelancerOrdersId, freelancerOrdersIdResponse, orderFreelancerStatus, orderFreelancerDeliver, orderFreelancerStatusRes, userData } = useBackend();
    const [isOpen, setIsOpen] = useState<OrderDetailsState>({});
    const {address} = useAccount();

    const toggleDetails = (orderId: string | number) => {
        setIsOpen((prev) => ({ ...prev, [orderId]: !prev[orderId] }));
    };

    function sleep(n: number | undefined) { return new Promise(resolve => setTimeout(resolve, n)); }

    useEffect(() => {
        getFreelancerOrdersId();
    }, []);

    const orderAccept = async (orderId: string | null) => {
        const data = {
            is_accepted: true,
            orderId: orderId
        }
        await orderFreelancerStatus(data as unknown as string)
        await sleep(1000)
        window.location.reload();
    }

    const orderCancel = async (orderId: string | null) => {
        const data = {
            is_accepted: false,
            orderId: orderId
        }
        await orderFreelancerStatus(data as unknown as string)
        await sleep(1000)
        window.location.reload();
    }

    const orderDeliver = async (orderId: string | null) => {
        const data = {
            orderId: orderId,
            address: address
        }
        await orderFreelancerDeliver(data as unknown as string)
        await sleep(1000)
        window.location.reload();
    }


    return (
        <>
            <Navbar />
            <div className="bg-[#1E1B24] flex flex-col items-center justify-center space-y-4 min-h-screen ">
                <div className="bg-[#23202A] w-10/12 rounded-lg flex flex-col items-center mt-24">
                    <div className="flex flex-row space-x-2 mt-6  ">
                        <button
                            type="button"
                            className="text-black bg-white hover:bg-black hover:bg-opacity-10 hover:text-white  border-2 border-gray-50 focus:ring-2 focus:outline-none focus:ring-whit  rounded-full rounded-r-none text-sm px-4 py-2 text-center transition duration-300 ease-in-out font-bold"
                        >
                            Gelen Siparişler
                        </button>
                        <Link href={`/orders/${userData.username}/myorders`}
                            className="text-black bg-white hover:bg-black hover:bg-opacity-10 hover:text-white  border-2 border-gray-50 focus:ring-2 focus:outline-none focus:ring-whit  rounded-full rounded-l-none text-sm px-4 py-2 text-center transition duration-300 ease-in-out font-bold"
                        >
                            Verdiğim Siparişler
                        </Link>
                    </div>

                    <div className="flex flex-col  space-y-5 w-5/6 p-10">
                        {freelancerOrdersIdResponse.map((order) => (
                            <div className="w-full border border-solid border-gray-700 rounded-xl flex flex-col p-6 space-y-3 ">
                                <div className="flex flex-row justify-between items-center">
                                    <div className="flex flex-row space-x-3">
                                        <img className="w-12 h-12 rounded-full" src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg" alt="profil" />
                                        <div>
                                            <div className="flex flex-row space-x-1">
                                                <p className="text-white font-bold text-lg">
                                                    {order.customerName}
                                                </p>
                                            </div>
                                            <p className="text-gray-400">
                                                {order.jobTitle}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="space-x-3 ">

                                        <div className="space-x-3 ">
                                            {order.status === 'beklemede' && (
                                                <>
                                                    <button className="text-white font-semibold bg-green-400 px-6 py-3 rounded-lg" onClick={() => orderAccept(order.order_id)}>
                                                        Kabul ET
                                                    </button>
                                                    <button className="text-white font-semibold bg-red-400 px-6 py-3 rounded-lg" onClick={() => orderCancel(order.order_id)}>
                                                        Geri Çevir
                                                    </button>
                                                </>
                                            )}
                                            {order.status === 'aktif' && (
                                                <button className="text-white font-semibold bg-blue-600 px-6 py-3 rounded-lg" onClick={() => orderDeliver(order.order_id)}>
                                                    Teslim Et
                                                </button>
                                            )}
                                            {order.status === 'iptal' && (
                                                <span className="text-red-500">Sipariş İptal Edildi</span>
                                            )}
                                            {order.status === 'tamamlandı' && (
                                                <span className="text-blue-500">Sipariş Tamamlandı</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => toggleDetails(order.order_id)} className=" flex flex-row items-center space-x-2 p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 bg-gray-900 text-gray-50  bg-opacity-40 rounded-full">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </button>

                                {isOpen[order.order_id] && (
                                    <div className="flex flex-col space-y-3">
                                        <div className="flex flex-col space-y-2">
                                            <p className="text-white text-lg font-semibold font-mono">Müşteri Notu :</p>
                                            <p className="text-gray-400 text-sm font-mono">
                                                {order.customerNote}
                                            </p>
                                        </div>
                                        <div className="flex flex-col space-y-2">
                                            <p className="text-white text-lg font-semibold font-mono">Müşteri Adresi :</p>
                                            <p className="text-gray-400 text-sm font-mono">
                                                {order.customerAddr}
                                            </p>
                                        </div>
                                        <div className="flex flex-col space-y-2">
                                            <p className="text-white text-lg font-semibold font-mono">Sipariş Hash Adresi :</p>
                                            <p className="text-gray-400 text-sm font-mono">
                                                {order.orderHash}

                                            </p>
                                        </div>
                                        <div className="flex flex-col space-y-2">
                                            <p className="text-white text-lg font-semibold font-mono">Sipariş Durumu:</p>
                                            <p className={`text-base font-mono ${order.status === 'beklemede' ? 'text-yellow-500' :
                                                order.status === 'aktif' ? 'text-green-500' :
                                                    order.status === 'tamamlandı' ? 'text-blue-500' :
                                                        order.status === 'iptal' ? 'text-red-500' :
                                                            order.status === 'inceleniyor' ? 'text-pink-500' :
                                                                'text-gray-400'  // Varsayılan durum
                                                }`}>
                                                {order.status}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {orderFreelancerStatusRes.message && (
                <ShowNotification
                    NotiType={orderFreelancerStatusRes.success ? "success" : "error"}
                    NotiMessage={orderFreelancerStatusRes.message}
                />
            )}
            <Footer />
        </>
    );
}
