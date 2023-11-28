
export default function ProfileHeader(){

    return(
        



        <div className=" flex flex-col w-full items-center justify-center mt-28">
          <div
            className="bg-cover bg-center h-72 w-5/6  rounded-tl-lg rounded-tr-lg relative"
            style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2015/12/07/11/10/banner-1080618_960_720.jpg")` }}
          >

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-12">
              <div
                className="bg-cover bg-center h-32 w-32 rounded-full overflow-hidden  "
                style={{ backgroundImage: `url("https://blog.teknosa.com/wp-content/uploads/2021/09/profil-fotografi-nasil-cekilmeli-teknosa.jpg")`, border: "6px solid #23202A" }}
              ></div>
              <div className=" justify-center items-center relative">
              <h2 className="text-white text-xl font-bold ">Angelina Swam </h2>
              <p className="text-gray-300 text-xs mt-1 translate-x-6">San Francisco, CA</p>
              </div>
            </div>

          </div>

          <div style={{ backgroundColor: '#23202A' }} className=" h-28 w-5/6  rounded-bl-lg rounded-br-lg flex flex-row justify-between items-center">
            
              <ul  className="flex flex-row p-4 md:p-0 mt-4 font-medium rounded-lg ml-10 space-x-12">
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
                    Portfolyosu
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
              
              <ul className="flex flex-row p-4 md:p-0 mt-4 font-medium rounded-lg mr-24 space-x-12">
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

              </ul>
            
            


          </div>

        </div>

    )
}


