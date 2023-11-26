import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";



export default function Signup() {
  return (
    <>
      <Navbar />
      <section style={{ background: '#19181F' }}>
        <div className="flex flex-row items-center justify-center space-x-32  px-6 py-8 pb-36">

          
          <div style={{ backgroundColor: '#23202A' }} className="w-full  rounded-3xl  border-none shadow-2xl dark:border md:mt-24 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-50">
                Sign Up
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-200 ">username *</label>
                  <input type="text" name="username" id="username" style={{ background: '#1E1B24' }} className="  text-gray-50  sm:text-sm rounded-lg  focus:border-gray-600  block w-full p-2.5 " placeholder="username" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-200 ">Your email *</label>
                  <input type="email" name="email" id="email" style={{ background: '#1E1B24' }} className="  text-gray-50  sm:text-sm rounded-lg  focus:border-gray-600  block w-full p-2.5 " placeholder="name@company.com" />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-200 ">Password *</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" style={{ background: '#1E1B24' }} className="  text-gray-50  sm:text-sm rounded-lg  focus:border-gray-600  block w-full p-2.5 " />
                </div>
                <div>
                  <label htmlFor="password2" className="block mb-2 text-sm font-medium text-gray-200 ">Confirm Password *</label>
                  <input type="password" name="password2" id="password2" placeholder="••••••••" style={{ background: '#1E1B24' }} className="  text-gray-50  sm:text-sm rounded-lg  focus:border-gray-600  block w-full p-2.5 " />
                </div>

                <button
                  type="submit"
                  className=" w-full text-opacity-0 bg-white hover:bg-black hover:bg-opacity-10 hover:text-white focus:ring-1 focus:outline-none focus:ring-white font-medium rounded-full text-sm px-6 py-3 text-center transition duration-300 ease-in-out font-bold"
                >
                  Create An Account
                </button>
                
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Log in</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}











