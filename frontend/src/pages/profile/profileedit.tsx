import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProfileHeader from "@/components/ProfileHeader";
import { Request } from "../../backend/api";
import { useBackend } from "@/contexts/Request";
import router from "next/router";

export default function ProfileEdit() {

    const {userData, userAboutContext} = useBackend();

    


    const formAbout = async (event: any) => {
        event.preventDefault();
        const formdata = new FormData(event.target);
        const aboutdata = {
            userid : userData.id,
            userAbout: formdata.get('userAbout') as string
        };
        userAboutContext(aboutdata)


    };

    return (
        <>
            <Navbar />
            <div style={{ backgroundColor: '#1E1B24' }} className="flex flex-col items-center justify-center space-y-4 ">

                <ProfileHeader />
                <div className="flex flex-row items-start justify-center space-x-4 w-5/6 pb-20">
                    <div style={{ backgroundColor: '#23202A' }} className="w-full rounded-lg flex flex-col justify-between  ">

                        <form action="" onSubmit={formAbout}>
                            <div className=" p-12">
                                <p className=" text-xl font-bold text-white">
                                    <label htmlFor="userAbout"><span className=" text-4xl text-White ">Hakkımda :</span> </label>
                                </p>
                                <p className=" text-sm text-gray-400 mt-5">
                                    <textarea
                                        name="userAbout"
                                        id="userAbout"
                                        style={{ background: '#1E1B24' }}
                                        className="text-gray-50 sm:text-sm rounded-lg focus:border-gray-600 block w-full p-2.5 h-40 min-h-full"
                                        placeholder="User About"
                                    />
                                </p>

                                <button
                                    type="submit"
                                    className=" text-opacity-0 bg-white hover:bg-black hover:bg-opacity-10 hover:text-white border-2 border-gray-50 focus:ring-1 focus:outline-none focus:ring-white rounded-full text-sm px-6 py-3 text-center transition duration-300 ease-in-out font-bold mt-5"
                                >
                                    Edit About
                                </button>
                            </div>
                            {/* <div className="w-full pr-12 pl-12">
                                <div className="h-px bg-gray-600 rounded-3xl "></div>
                            </div> */}



                        </form>

                    </div>

                </div>




            </div>
            <Footer />
        </>
    )
}