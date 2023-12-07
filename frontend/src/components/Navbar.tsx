import { useMetaMask } from "@/contexts/MetaMaskProvider";
import React, { useState, useEffect } from "react"


export default function Navbar() {

  const { connect, address, disconnect } = useMetaMask();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };



  return (


    <header style={{ backgroundColor: '#19181F' }} className="bg-white fixed w-full z-20 top-0 start-0 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://w7.pngwing.com/pngs/462/673/png-transparent-black-arrows-logo-art-computer-icons-computer-monitors-desktop-svg-icon-full-screen-miscellaneous-angle-white-thumbnail.png" alt="Flowbite Logo" className="h-8" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Byte Task</span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

          <div className="  flex flex-row space-x-4">
            {/* <button
              type="button" onClick={() => window.location.href = '/login'}
              className="text-gray-50 bg-white bg-opacity-0 hover:bg-opacity-100 hover:text-gray-900 border-2 border-gray-50 focus:ring-1 focus:outline-none focus:ring-white font-bold rounded-full text-sm px-6 py-3 text-center transition duration-300 ease-in-out "
            >
              Login
            </button> */}
            {/* {address ? (
              <button
                onClick={disconnect}
                type="button"
                className="text-opacity-0 bg-white hover:bg-black hover:bg-opacity-10 hover:text-white focus:ring-1 focus:outline-none focus:ring-white font-bold rounded-full text-sm px-6 py-3 text-center transition duration-300 ease-in-out border-2  border-gray-50 border-opacity-0 hover:border-opacity-100"
              >
                {address.substring(0, 4) +
                  '..' +
                  address.substring(address.length - 4, address.length)}
              </button>
            ) : (
              <button
                onClick={connect}
                type="button"
                className="text-opacity-0 bg-white hover:bg-black hover:bg-opacity-10 hover:text-white focus:ring-1 focus:outline-none focus:ring-white font-bold rounded-full text-sm px-6 py-3 text-center transition duration-300 ease-in-out border-2  border-gray-50 border-opacity-0 hover:border-opacity-100"
              >
                CONNECT
              </button>
            )} */}
            <div className="flex flex-col">
              <button className="flex flex-row justify-between items-center" onClick={toggleDropdown}>
                <div className="flex flex-row justify-between items-center space-x-2  ">
                  <img className=" h-10 w-10 overflow-hidden rounded-full" src="https://pbs.twimg.com/media/FvELKPKWYBQ1d1x.jpg" alt="profil" />
                  <p className="text-gray-200 text-lg font-semibold">
                    sektor7k
                  </p>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 text-gray-50  bg-black bg-opacity-40 rounded-full ml-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {isOpen && (
                <div style={{ backgroundColor: '#23202A' }} className="absolute transform translate-y-12 -translate-x-10 pl-8 p-5 rounded-xl shadow-2xl flex flex-col space-y-6 ">
                 
                  <div className="flex flex-row space-x-3">
                    <img className=" h-14 w-14 rounded-full" src="https://pbs.twimg.com/media/FvELKPKWYBQ1d1x.jpg" alt="profil" />
                    <div className="flex flex-col">
                      <p className="text-gray-50 text-base font-bold">
                        Angelina Swam
                      </p>
                      <p className="text-gray-400 text-sm">
                        angelinaswam01@gmail.com
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
                    <a className="flex flex-row p-2 pl-4 space-x-2 text-gray-400 hover:text-gray-50" href="">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288" />
                      </svg>

                      <p className=" text-base font-medium">
                        Destek
                      </p>
                    </a>
                    <a className="flex flex-row p-2 pl-4 space-x-2 text-gray-400 hover:text-gray-50" href="">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>

                      <p className=" text-base font-medium">
                        Freelancer Ol
                      </p>
                    </a>
                    <a className="flex flex-row p-2 pl-4 space-x-2 text-gray-400 hover:text-gray-50" href="">
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


          </div>



          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul style={{ backgroundColor: '#19181F' }} className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/"
                className="block py-1 px-3 text-white rounded-full  transition duration-300 ease-in-out hover:bg-gray-800 hover:text-white"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-1 px-3 text-white rounded-full  transition duration-300 ease-in-out hover:bg-gray-800 hover:text-white"
                aria-current="page"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-1 px-3 text-white rounded-full  transition duration-300 ease-in-out hover:bg-gray-800 hover:text-white"
                aria-current="page"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-1 px-3 text-white rounded-full  transition duration-300 ease-in-out hover:bg-gray-800 hover:text-white"
                aria-current="page"
              >
                Contact
              </a>
            </li>

          </ul>
        </div>
      </div>
    </header>

  )
}