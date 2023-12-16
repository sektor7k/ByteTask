import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ShowNotification from "@/components/Notification";
import { useBackend } from "@/contexts/Request";
import { useEffect } from "react";

export default function Anasayfa() {

    const { addJobResponse, jobsResponse, jobs } = useBackend();

    useEffect(() => {

        jobsResponse()



    }, []);

    return (
        <>
            <div style={{ backgroundColor: '#23202A' }} className="min-h-screen" >

                <Navbar />

                <div className="container mx-auto p-16 flex flex-col justify-center items-center space-y-6 ">
                    <div className="flex flex-row space-x-2 mt-6  ">
                        <a href="/createjob"
                            className="text-black bg-white hover:bg-black hover:bg-opacity-10 hover:text-white  border-2 border-gray-50 rounded-full text-sm px-4 py-2 text-center transition duration-300 ease-in-out font-bold"
                        >
                            İş İlanı Ver
                        </a>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {jobs.map((job) => (
                            <div
                                key={job.id}
                                className="w-72 max-w-sm border border-gray-700 rounded-xl shadow-2xl flex flex-col justify-between"
                            >
                                <div className="h-1/2">
                                    <img
                                        className="w-full h-full rounded-t-xl"
                                        src="https://blockchain-training.ca/wp-content/uploads/2021/02/Slide1-5.jpg"
                                        alt="job"
                                    />
                                </div>
                                <div className="flex flex-row justify-between items-center p-4 pb-0">
                                    <div className="flex flex-row">
                                        <img
                                            className="h-12 w-12 overflow-hidden rounded-full"
                                            src="https://pbs.twimg.com/media/FvELKPKWYBQ1d1x.jpg"
                                            alt="profil"
                                        />
                                        <div className="flex flex-col ml-2">
                                            <p className="text-gray-100 text-base font-semibold">
                                                {job.username}
                                            </p>
                                            <p className="text-gray-400 text-sm">{job.jobTitle}</p>
                                        </div>
                                    </div>
                                    <p className="text-2xl text-green-400 font-bold">
                                        {`${job.jobPrice}$`}
                                    </p>
                                </div>
                                <p className="text-gray-100 text-base font-medium p-4">
                                    {job.jobDescription.length > 55
                                        ? `${job.jobDescription.slice(0, 55)}...`
                                        : job.jobDescription}
                                </p>
                                <a href="/cardpages" className="text-black bg-white hover:bg-black hover:bg-opacity-10 hover:text-white border-2 border-gray-50 rounded-b-xl text-sm px-4 py-2 text-center transition duration-300 ease-in-out font-bold">
                                    İlana Git
                                </a>
                            </div>
                        ))}

                    </div>
                </div>
                {addJobResponse.message && (
                    <ShowNotification
                        NotiType={addJobResponse.success ? "success" : "error"}
                        NotiMessage={addJobResponse.message}
                    />
                )}
            </div>
            <Footer />
        </>
    )
}