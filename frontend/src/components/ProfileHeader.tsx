
export default function ProfileHeader() {

  return (




    <div className=" flex flex-col w-full items-center justify-center mt-28">
      <div
        className="bg-cover bg-center h-72 w-5/6  rounded-tl-lg rounded-tr-lg relative"
        style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2015/12/07/11/10/banner-1080618_960_720.jpg")` }}
      >

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-12">
          <div
            className="bg-cover bg-center h-32 w-32 rounded-full overflow-hidden  "
            style={{ backgroundImage: `url("https://pbs.twimg.com/media/FvELKPKWYBQ1d1x.jpg")`, border: "6px solid #23202A" }}
          ></div>
          <div className=" justify-center items-center relative">
            <h2 className="text-white text-xl font-bold ">Angelina Swam </h2>
            <p className="text-gray-300 text-xs mt-1 translate-x-6">San Francisco, CA</p>
          </div>
        </div>

      </div>

      <div style={{ backgroundColor: '#23202A' }} className=" h-28 w-5/6  rounded-bl-lg rounded-br-lg flex flex-row justify-between items-center">

        <ul className="flex flex-row p-4 md:p-0 mt-4 font-medium rounded-lg ml-10 space-x-12">
          <li>
            <a
              href="/"
              className="block py-1 px-3 text-white rounded-full  transition duration-300 ease-in-out hover:bg-gray-800 hover:text-white"
              aria-current="page"
            >
              Hakkında
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block py-1 px-3 text-white rounded-full  transition duration-300 ease-in-out hover:bg-gray-800 hover:text-white"
              aria-current="page"
            >
              Hizmetler
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-1 px-3 text-white rounded-full  transition duration-300 ease-in-out hover:bg-gray-800 hover:text-white"
              aria-current="page"
            >
              Değerlendirmeler
            </a>
          </li>

        </ul>


        <div className="flex flex-row p-4 md:p-0 mt-4 font-medium rounded-lg mr-16 space-x-8">
          <a href="#" style={{ background: '#23202A' }} className="text-gray-500 hover:text-gray-50  border-2 border-gray-300 border-opacity-0 hover:border-2  hover:border-gray-300 hover:border-opacity-100  p-2 rounded-3xl ">
            <svg className="w-7 h-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
              <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
            </svg>
            <span className="sr-only">Facebook page</span>
          </a>
          <a href="#" style={{ background: '#23202A' }} className="text-gray-500 hover:text-gray-50 border-2 border-gray-300 border-opacity-0  hover:border-2  hover:border-gray-300 hover:border-opacity-100  p-2 rounded-3xl">
            <svg className="w-7 h-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
              <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
            </svg>
            <span className="sr-only">Discord community</span>
          </a>
          <a href="#" style={{ background: '#23202A' }} className="text-gray-500 hover:text-gray-50 border-2 border-gray-300 border-opacity-0 hover:border-2  hover:border-gray-300 hover:border-opacity-100  p-2 rounded-3xl">
            <svg className="w-7 h-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
              <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd" />
            </svg>
            <span className="sr-only">Twitter page</span>
          </a>
          <a href="#" style={{ background: '#23202A' }} className="text-gray-500 hover:text-gray-50 border-2 border-gray-500  hover:border-2  hover:border-gray-300 hover:border-opacity-100 p-2 rounded-3xl flex flex-row items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>

            <p className="text-xl">Bana Yaz</p>
          </a>

        </div>






      </div>

    </div>

  )
}


