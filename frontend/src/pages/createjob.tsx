import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Request } from "@/backend/api";
import { useBackend } from "@/contexts/Request";

export default function CreateJob() {

    const { userData, jobContext } = useBackend();

    const listJob = async (event: any) => {
        event.preventDefault();
        const formdata = new FormData(event.target);
        const jobData = {
            userid: userData.id,
            jobTitle: formdata.get('jobTitle') as string, 
            jobDescription: formdata.get('jobDescription') as string,
            jobPrice: formdata.get('jobPrice') as string,
            workTime: formdata.get('workTime') as string
        }; 
        jobContext(jobData);
    
        
      };
    

    return (
        <>
            <Navbar />
            <div style={{ backgroundColor: '#1E1B24' }} className="flex justify-center">

                <div style={{ backgroundColor: '#23202A' }} className="rounded-lg flex flex-col justify-between space-x-4 w-5/6 mt-32">
                    <div className="rounded-lg flex flex-col justify-between  ">

                        <form  onSubmit={listJob}>
                            <div className="p-12 space-y-7">
                                <div>
                                    <p className="text-2xl font-bold text-white">
                                        <label htmlFor="jobTitle">Başlık </label>
                                    </p>
                                    <p className="text-sm text-gray-400 mt-5">
                                        <input
                                            type="text"
                                            name="jobTitle"
                                            id="jobTitle"
                                            style={{ background: '#1E1B24' }}
                                            className="text-gray-50 text-xl rounded-lg focus:border-gray-600 block w-full p-2.5 h-14 min-h-full"
                                            placeholder="İlan Başlığı"
                                        />
                                    </p>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-white">
                                        <label htmlFor="jobDescription">İlan Açıklaması </label>
                                    </p>
                                    <p className="text-sm text-gray-400 mt-5">
                                        <textarea
                                            name="jobDescription"
                                            id="jobDescription"
                                            style={{ background: '#1E1B24' }}
                                            className="text-gray-50 sm:text-sm rounded-lg focus:border-gray-600 block w-full p-2.5 h-40 min-h-full"
                                            placeholder="İlan Açıklaması"
                                        />
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xl font-bold text-white">
                                        <label htmlFor="jobPrice">İlan Fiyatı </label>
                                    </p>
                                    <p className="text-lg text-gray-400 mt-5">
                                        <input
                                            type="number"
                                            name="jobPrice"
                                            id="jobPrice"
                                            style={{ background: '#1E1B24' }}
                                            className="text-gray-50 rounded-lg focus:border-gray-600 block w-full p-2.5 h-14 min-h-full"
                                            placeholder="İlan Fiyatı"
                                        />
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xl font-bold text-white">
                                        <label htmlFor="workTime">İlan Süresi </label>
                                    </p>
                                    <p className="text-base text-gray-400 mt-5">
                                        <input

                                            type="number"
                                            name="workTime"
                                            id="workTime"
                                            style={{ background: '#1E1B24' }}
                                            className="text-gray-50 rounded-lg focus:border-gray-600 block w-full p-2.5 h-14 min-h-full"
                                            placeholder="İlan Süresi"
                                        />
                                    </p>
                                </div>
                                <button
                                    type="submit"
                                    className="text-opacity-0 bg-white hover:bg-black hover:bg-opacity-10 hover:text-white border-2 border-gray-50 focus:ring-1 focus:outline-none focus:ring-white rounded-full text-sm px-6 py-3 text-center transition duration-300 ease-in-out font-bold mt-5"
                                >
                                    İlanı Yayınla
                                </button>
                            </div>
                        </form>

                    </div>

                </div>




            </div>
            <Footer />
        </>
    )
}