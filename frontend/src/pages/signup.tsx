import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Contact from "@/components/contact";
import { useRouter } from 'next/router';
import ShowNotification from "@/components/Notification";
import { useBackend } from "@/contexts/Request";

export default function Signup() {
  const {signUpContext, signupResponse} = useBackend();
  

  const formsignup = async (event: any) => {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const signupdata = {
      username: formdata.get('username') as string, 
      email: formdata.get('email') as string,
      password: formdata.get('password') as string,
      password2: formdata.get('password2') as string,
    }; 

    signUpContext(signupdata)
  };

  return (
    <>
      <Navbar />
      <section className="bg-[#19181F]">
        <div className="flex flex-row items-center justify-center space-x-32  px-6 py-8 pb-36">

          <Contact/>

          <div className="bg-[#23202A] w-full  rounded-3xl  border-none shadow-2xl dark:border md:mt-24 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-50">
                Sign Up
              </h1>
              <form className="space-y-4 md:space-y-6" action="" onSubmit={formsignup}>
                <div>
                  <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-200 ">username *</label>
                  <input type="text" name="username" id="username" className=" bg-[#1E1B24] text-gray-50  sm:text-sm rounded-lg  focus:border-gray-600  block w-full p-2.5 " placeholder="username" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-200 ">Your email *</label>
                  <input type="email" name="email" id="email" className=" bg-[#1E1B24] text-gray-50  sm:text-sm rounded-lg  focus:border-gray-600  block w-full p-2.5 " placeholder="name@company.com" />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-200 ">Password *</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" className=" bg-[#1E1B24] text-gray-50  sm:text-sm rounded-lg  focus:border-gray-600  block w-full p-2.5 " />
                </div>
                <div>
                  <label htmlFor="password2" className="block mb-2 text-sm font-medium text-gray-200 ">Confirm Password *</label>
                  <input type="password" name="password2" id="password2" placeholder="••••••••" className=" bg-[#1E1B24] text-gray-50  sm:text-sm rounded-lg  focus:border-gray-600  block w-full p-2.5 " />
                </div>

                <button
                  type="submit"
                  className=" w-full text-opacity-0 bg-white hover:bg-black hover:bg-opacity-10 hover:text-white border-2 border-gray-50 focus:ring-1 focus:outline-none focus:ring-white rounded-full text-sm px-6 py-3 text-center transition duration-300 ease-in-out font-bold"
                >
                  Create An Account
                </button>


                <ShowNotification
                  NotiType={signupResponse.success ? "success" : "error"}
                  NotiMessage={signupResponse.message}
                />

                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account? <a href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Log in</a>
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











