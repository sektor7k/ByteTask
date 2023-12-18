import { useMetaMask } from "@/contexts/MetaMaskProvider";
import React, { useState, useEffect } from "react"
import Menu from "./navbar/menu";
import { useBackend } from "@/contexts/Request";



export default function Navbar() {

  //const { connect, address, disconnect } = useMetaMask();
  const [userLoggedIn, setuserLoggedIn] = useState(false);
  const { userDataResponse, userAboutResponse } = useBackend();




  useEffect(() => {

    const checkUserLogin = async () => {
      try {
        const userMailLocal = localStorage.getItem('userMail');
        if (userMailLocal !== null) {
          setuserLoggedIn(true);
          await userDataResponse();
          await userAboutResponse();
        } else {
          setuserLoggedIn(false);
        }
      } catch (err) {
        setuserLoggedIn(false);
        console.error('Error in navbar', err);
      }
    };
    checkUserLogin();



  }, []);


  return (


    <header className="bg-[#19181F] fixed w-full z-20 top-0 start-0 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://w7.pngwing.com/pngs/462/673/png-transparent-black-arrows-logo-art-computer-icons-computer-monitors-desktop-svg-icon-full-screen-miscellaneous-angle-white-thumbnail.png" alt="Flowbite Logo" className="h-8" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Byte Task</span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

          <div className="  flex flex-row space-x-4">
                      
            
            <w3m-button/>
            {/* <button onClick={() => modal.open({ view: 'Networks' })}>Choose Network</button>
            <button onClick={() => setThemeMode(themeMode === 'dark' ? 'light' : 'dark')}>
              Toggle Theme Mode
            </button> */}
            {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
            {/* <pre>{JSON.stringify({ themeMode, themeVariables }, null, 2)}</pre>
            <pre>{JSON.stringify(events, null, 2)}</pre> */}
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

            {userLoggedIn ? (
              // Kullanıcı giriş yapmışsa Menu componentini render et
              <Menu />
            ) : (
              // Kullanıcı giriş yapmamışsa login butonunu render et
              <button
                type="button"
                onClick={() => window.location.href = '/login'}
                className="text-gray-50 bg-white bg-opacity-0 hover:bg-opacity-100 hover:text-gray-900 border-2 border-gray-50 focus:ring-1 focus:outline-none focus:ring-white font-bold rounded-full text-sm px-6 py-3 text-center transition duration-300 ease-in-out"
              >
                Login
              </button>
            )}





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
                href="/anasayfa"
                className="block py-1 px-3 text-white rounded-full  transition duration-300 ease-in-out hover:bg-gray-800 hover:text-white"
                aria-current="page"
              >
                Anasayfa
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
