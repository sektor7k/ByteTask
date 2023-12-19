import { Request2 } from "@/backend/api";
import { useBackend } from "@/contexts/Request";
import Link from "next/link";
import router, { useRouter } from "next/router";
import { useState } from "react";


export default function Menu() {

  const [isOpen, setIsOpen] = useState(false);
  const { userData, logOut } = useBackend();


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col">
      <button className="flex flex-row justify-between items-center" onClick={toggleDropdown}>
        <div className="flex flex-row justify-between items-center space-x-2  ">
          <img className=" h-10 w-10 overflow-hidden rounded-full" src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg" alt="profil" />
          <p className="text-gray-200 text-lg font-semibold">
            {userData.username}
          </p>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 text-gray-50  bg-black bg-opacity-40 rounded-full ml-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {isOpen && (
        <div className="bg-[#23202A] absolute transform translate-y-12 -translate-x-10 pl-8 p-5 rounded-xl shadow-2xl flex flex-col space-y-6 ">

          <div className="flex flex-row space-x-3">
            <img className=" h-14 w-14 rounded-full" src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg" alt="profil" />
            <div className="flex flex-col">
              <p className="text-gray-50 text-base font-bold">
                {userData.username}
              </p>
              <p className="text-gray-400 text-sm">
                {userData.email}
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <a className="flex flex-row p-2 pl-4 space-x-2 text-gray-400 hover:text-gray-50" href="/profile/hakkimda">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className=" text-base font-medium">
                Profilim
              </p>
            </a>
            <a className="flex flex-row p-2 pl-4 space-x-2 text-gray-400 hover:text-gray-50" href="">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>

              <p className=" text-base font-medium">
                Hesabım
              </p>
            </a>
            <Link className="flex flex-row p-2 pl-4 space-x-2 text-gray-400 hover:text-gray-50" href={`/orders/${userData.username}/incomingorders`}>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>


              <p className=" text-base font-medium">
                Siparişler
              </p>
            </Link>
            <a className="flex flex-row p-2 pl-4 space-x-2 text-gray-400 hover:text-gray-50" href="">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

              <p className=" text-base font-medium">
                Freelancer Ol
              </p>
            </a>
            <a className="flex flex-row p-2 pl-4 space-x-2 text-gray-400 hover:text-gray-50" href="/login" onClick={logOut}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
              </svg>

              <p className=" text-base font-medium">
                Oturumu Kapat
              </p>
            </a>

          </div>

        </div>
      )}
    </div>
  )
}