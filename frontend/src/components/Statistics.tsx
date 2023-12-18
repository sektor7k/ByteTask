
export default function Statistics() {

    return (

        <div className=" bg-[#23202A] w-4/12  rounded-lg flex flex-col pb-6 items-center">

            <div className="flex flex-row space-x-2 mt-6   ">
                <button
                    type="button"
                    className="text-black bg-white hover:bg-black hover:bg-opacity-10 hover:text-white  border-2 border-gray-50 focus:ring-2 focus:outline-none focus:ring-whit  rounded-full rounded-r-none text-sm px-4 py-2 text-center transition duration-300 ease-in-out font-bold"
                >
                    Freelancer İstatistikleri
                </button>
                <button
                    type="button"
                    className="text-black bg-white hover:bg-black hover:bg-opacity-10 hover:text-white  border-2 border-gray-50 focus:ring-2 focus:outline-none focus:ring-whit  rounded-full rounded-l-none text-sm px-4 py-2 text-center transition duration-300 ease-in-out font-bold"
                >
                    Alıcı İstatistikleri
                </button>


            </div>

            <div className="flex flex-col w-full space-y-3 mt-12 pr-6 pl-6">
                <div className="flex flex-row justify-between items-center">

                    <div className=" items-center flex flex-row space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 text-gray-400 p-2 bg-black bg-opacity-40 rounded-xl ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                        </svg>

                        <h2 className="text-gray-400 text-base font-normal">Tekrarlayan Sipariş Oranı </h2>
                    </div>


                    <h2 className="text-white text-base font-medium">57 Sipariş </h2>


                </div>
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
                <div className="flex flex-row justify-between items-center">

                    <div className=" items-center flex flex-row space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 text-gray-400 p-2 bg-black bg-opacity-40 rounded-xl">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                        </svg>


                        <h2 className="text-gray-400 text-base font-normal  ">Üyelik Tarihi </h2>
                    </div>

                    <h2 className="text-white text-base font-medium">Kasım 2021 </h2>


                </div>



            </div>

        </div>
    )
}