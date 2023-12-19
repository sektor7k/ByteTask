
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";



export default function Profile() {

    return (
        <>

            <Navbar />
            <div className="bg-[#1E1B24] flex flex-col items-center justify-center space-y-4 min-h-screen ">


                <div className="bg-[#23202A] w-10/12  rounded-lg flex flex-col items-center mt-24">

                    <div className="flex flex-row space-x-2 mt-6  ">
                        <button
                            type="button"
                            className="text-black bg-white hover:bg-black hover:bg-opacity-10 hover:text-white  border-2 border-gray-50 focus:ring-2 focus:outline-none focus:ring-whit  rounded-full rounded-r-none text-sm px-4 py-2 text-center transition duration-300 ease-in-out font-bold"
                        >
                            Gelen Siparişler
                        </button>
                        <button
                            type="button"
                            className="text-black bg-white hover:bg-black hover:bg-opacity-10 hover:text-white  border-2 border-gray-50 focus:ring-2 focus:outline-none focus:ring-whit  rounded-full rounded-l-none text-sm px-4 py-2 text-center transition duration-300 ease-in-out font-bold"
                        >
                            Verdiğim Siparişler
                        </button>


                    </div>


                    <div className="flex flex-col  space-y-5 w-5/6 p-10">

                        <div className="w-full border border-solid border-gray-700 rounded-xl flex flex-row p-6 justify-between items-center">
                            <div className="flex flex-row space-x-3">
                                <img className="w-12 h-12 rounded-full" src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg" alt="profil" />
                                <div>
                                    <div className="flex flex-row space-x-1">
                                        <p className="text-white font-bold text-lg">
                                            sektor7K
                                        </p>
                                        

                                    </div>
                                    <p className="text-gray-400">
                                    {('Ben, mimari diyagramlar ve kat planları yapabilirim').slice(0,40)}...
                                    </p>
                                </div>

                            </div>
                            <div className="space-x-3 ">
                            <button className="text-white">
                                Kabul ET
                            </button>
                            <button className="text-white">
                                Geri Çevir
                            </button>
                            </div>
                        </div>


                    </div>
                    


                </div>

            </div>
            <Footer />
        </>
    )
}