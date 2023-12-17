import { useBackend } from "@/contexts/Request"
import { useEffect } from "react";
import Link from 'next/link';
import ShowNotification from "./Notification";


export default function Services() {

  const { jobsResponseUser, jobsUser, deleteJobResponse } = useBackend();

  useEffect(() => {
    jobsResponseUser();
  }, [])
  useEffect(() => {
    console.log(deleteJobResponse);
  }, [deleteJobResponse])

  return (
    <div style={{ backgroundColor: '#23202A' }} className="w-10/12  rounded-lg flex flex-col justify-between items-center  ">

      <div className="flex flex-row space-x-2 mt-6  ">
        <button
          type="button"
          className="text-black bg-white hover:bg-black hover:bg-opacity-10 hover:text-white  border-2 border-gray-50 focus:ring-2 focus:outline-none focus:ring-whit  rounded-full rounded-r-none text-sm px-4 py-2 text-center transition duration-300 ease-in-out font-bold"
        >
          Verdiği Hizmetler
        </button>
        <button
          type="button"
          className="text-black bg-white hover:bg-black hover:bg-opacity-10 hover:text-white  border-2 border-gray-50 focus:ring-2 focus:outline-none focus:ring-whit  rounded-full rounded-l-none text-sm px-4 py-2 text-center transition duration-300 ease-in-out font-bold"
        >
          Aldığı Hizmetler
        </button>


      </div>

      <div className="flex flex-row space-x-5 w-full justify-start p-10">
        {jobsUser.map((job) => (
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
                  src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                  alt="profil"
                />
                <div className="flex flex-col ml-2">
                  <p className="text-gray-100 text-base font-semibold">
                    {job.username}
                  </p>
                  <p className="text-gray-400 text-sm">Developer</p>
                </div>
              </div>
              <p className="text-2xl text-green-400 font-bold">
                {`${job.jobPrice}$`}
              </p>
            </div>
            <p className="text-gray-100 text-base font-medium p-4">
              {job.jobTitle.length > 55
                ? `${job.jobTitle.slice(0, 55)}...`
                : job.jobTitle}
            </p>
            <Link href={`/jobs/${job.username}/${job.id}`} className="text-black bg-white hover:bg-black hover:bg-opacity-10 hover:text-white border-2 border-gray-50 rounded-b-xl text-sm px-4 py-2 text-center transition duration-300 ease-in-out font-bold">
              İlana Git
            </Link>
          </div>
        ))}
        {deleteJobResponse.message && (
          <ShowNotification
            NotiType={deleteJobResponse.success ? "success" : "error"}
            NotiMessage={deleteJobResponse.message}
          />
        )}



      </div>


    </div>
  )
}