import { Request2 } from "@/backend/api";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { useBackend } from "@/contexts/Request";

export default function CardPages() {


    const router = useRouter();
    const { userData, jobDetail, jobsDetailResponse, deleteJob } = useBackend();
    const { id, username } = router.query;
    

    useEffect(() => {
        const fetchData = async () => {
            if (id) {
                const jobId = Array.isArray(id) ? id[0] : id;
                jobsDetailResponse(jobId)
            }
        };

        fetchData();
    }, [id]);
     const deleteJobHandler = async() =>{
        console.log("asasa")
        await deleteJob(jobDetail.id as unknown as string);
     }


    return (
        <>
            <Navbar />
            <div style={{ backgroundColor: '#1E1B24' }} className="flex flex-col items-center justify-center space-y-4 ">
                {/* CardPages header */}
                <div className=" flex flex-col w-full items-center justify-center mt-28">


                    <div style={{ backgroundColor: '#23202A' }} className="  w-5/6  rounded-lg  flex flex-row justify-between items-center">

                        <div className="flex flex-col justify-between items-start p-4">
                            <a href="#" className="text-gray-500">
                                Yazılım {'>>'} Blockchain
                            </a>
                            <p className="text-gray-50 font-medium text-2xl mt-4">
                                {jobDetail.jobTitle}
                            </p>

                        </div>

                        {userData.id == jobDetail.userId ?(
                            <div className=" flex flex-row">
                            <button  style={{ background: '#23202A' }} className="text-gray-500 hover:text-gray-50 border-2 border-gray-500  hover:border-2  hover:border-gray-300 hover:border-opacity-100 p-2 rounded-3xl flex flex-row items-center space-x-2 mr-5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg>



                                <p className="text-base font-bold">İlanı Düzenle</p>
                            </button>
                            <button  onClick={deleteJobHandler} style={{ background: '#23202A' }} className="text-gray-500 hover:text-red-500 border-2 border-gray-500  hover:border-2  hover:border-red-500 hover:border-opacity-100 p-2 rounded-3xl flex flex-row items-center space-x-2 mr-5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>

                                <p className="text-base font-bold">İlanı Kaldır</p>
                            </button>
                        </div>
                        ):(
                            null
                        )}

                        






                    </div>

                </div>
                {/* card page Body */}
                <div className="flex flex-row items-start justify-center space-x-4 w-5/6 pb-20">
                    <div style={{ backgroundColor: '#23202A' }} className="w-8/12  rounded-lg flex flex-col justify-between">

                        <div className="p-6">
                            <img className="w-full h-full rounded-xl" src="https://blockchain-training.ca/wp-content/uploads/2021/02/Slide1-5.jpg" alt="img" />
                        </div>

                        <div className=" p-6">
                            <div className="flex flex-row items-center justify-between">
                                <p className=" text-2xl font-bold text-white">
                                    İş İlanı Hakkında
                                </p>
                            </div>
                            <p className=" text-sm text-gray-400 mt-5">
                                {jobDetail.jobDescription}
                            </p>
                        </div>


                    </div>
                    {/* Servis Kartları */}

                    <div className="flex flex-col w-4/12 space-y-4 ">
                        <div style={{ backgroundColor: '#23202A' }} className=" w-full rounded-lg flex flex-col pb-6 items-center">



                            <div className="flex flex-col w-full space-y-3 mt-12 pr-6 pl-6">
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

                                        <h2 className="text-green-500 text-2xl font-medium">{jobDetail.jobPrice}$ </h2>
                                    </div>
                                </div>



                            </div>
                            <div className="flex flex-row space-x-2 mt-6   ">
                                <button
                                    type="button"
                                    className="text-black bg-white hover:bg-black hover:bg-opacity-10 hover:text-white  border-2 border-gray-50 rounded-full text-sm px-4 py-2 text-center transition duration-300 ease-in-out font-bold"
                                >
                                    Devam Et
                                </button>



                            </div>

                        </div>
                        <div style={{ backgroundColor: '#23202A' }} className="w-full  rounded-lg flex flex-col pb-6 items-center">

                            <div className="flex flex-col mt-6 items-center space-y-4  ">
                                <img className=" h-20 w-20 overflow-hidden rounded-full" src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg" alt="profil" />
                                <div>
                                    <p className="text-gray-50 text-base font-bold">
                                        {username}
                                    </p>
                                    <p className="text-gray-400 text-sm">
                                        Developer
                                    </p>
                                    <div className="flex flex-row">
                                        <svg className="w-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <p className="text-yellow-300 text-lg font-bold">
                                            4.3
                                        </p>
                                        <p className=" text-gray-500 text-lg ml-1">
                                            {'(125)'}
                                        </p>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    className="text-black bg-white hover:bg-black hover:bg-opacity-10 hover:text-white  border-2 border-gray-50 rounded-full text-sm px-8 py-2 text-center transition duration-300 ease-in-out font-bold"
                                >
                                    Mesaj Gönder
                                </button>


                            </div>

                            <div className="flex flex-col w-full space-y-3 mt-12 pr-6 pl-6">

                                <div className="flex flex-row justify-between items-center">

                                    <div className=" items-center flex flex-row space-x-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 text-gray-400 p-2 bg-black bg-opacity-40 rounded-xl">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>


                                        <h2 className="text-gray-400 text-base font-normal  ">İptal Sayısı </h2>
                                    </div>


                                    <h2 className="text-white text-base font-medium">3 </h2>


                                </div>
                                <div className="flex flex-row justify-between items-center">
                                    <div className=" items-center flex flex-row space-x-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 text-gray-400 p-2 bg-black bg-opacity-40 rounded-xl">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>


                                        <h2 className="text-gray-400 text-base font-normal ">Son Görülme </h2>
                                    </div>


                                    <h2 className="text-green-500 text-base font-medium">Çevrimiçi </h2>


                                </div>
                                <div className="flex flex-row justify-between items-center">
                                    <div className=" items-center flex flex-row space-x-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 text-gray-400 p-2 bg-black bg-opacity-40 rounded-xl">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                                        </svg>


                                        <h2 className="text-gray-400 text-base font-normal ">Ort. Yanıt Süresi </h2>
                                    </div>


                                    <h2 className="text-white text-base font-medium">38 dakika </h2>


                                </div>
                                <div className="flex flex-row justify-between items-center">

                                    <div className=" items-center flex flex-row space-x-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 text-gray-400 p-2 bg-black bg-opacity-40 rounded-xl">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
                                        </svg>


                                        <h2 className="text-gray-400 text-base font-normal ">Son İş Teslimi </h2>
                                    </div>

                                    <h2 className="text-white text-base font-medium">3 hafta önce </h2>


                                </div>



                            </div>

                        </div>

                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}