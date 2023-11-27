
export default function Donate(){

    return(
        <div style={{ backgroundColor: '#1E1B24' }} className="min-h-screen flex items-center justify-center">
        <div className=" rounded-3xl  p-20 pt-0  w-10/12 flex items-center justify-center">

          <div style={{ backgroundColor: '#23202A' }} className="w-full  rounded-3xl  border-none shadow-2xl dark:border md:mt-24 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-50">
                Send Donate BYT
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">

                <div>
                  <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-200 ">Address *</label>
                  <input type="text" name="address" id="address" style={{ background: '#1E1B24' }} className="  text-gray-50  sm:text-sm rounded-lg  focus:border-gray-600  block w-full p-2.5 " placeholder="0x45....." />
                </div>
                <div>
                  <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-200 ">Amount *</label>
                  <input type="text" name="amount" id="amount" placeholder="123" style={{ background: '#1E1B24' }} className="  text-gray-50  sm:text-sm rounded-lg  focus:border-gray-600  block w-full p-2.5 " />
                </div>


                <button
                  type="submit"
                  className=" w-full text-opacity-0 bg-white hover:bg-black hover:bg-opacity-10 hover:text-white border border-gray-50 focus:ring-1 focus:outline-none focus:ring-white font-bold rounded-full text-sm px-6 py-3 text-center transition duration-300 ease-in-out font-bold"
                >
                  Send Donate
                </button>
              </form>
            </div>
          </div>

        </div>


      </div>
    )
}