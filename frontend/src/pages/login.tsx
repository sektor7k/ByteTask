import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ShowNotification from "@/components/Notification";
import Contact from "@/components/contact";
import { useRouter } from "next/router";
import React, { useState, useEffect } from 'react';
import { Request } from "../backend/api";




export default function Login() {
  const [notification, setNotification] = useState({ message: '', type: '' });
  const router = useRouter();
  const [loginResponse, setLoginResponse] = useState({
    message: "",
    status: "",
    success: null as boolean | null,
  });

  useEffect(() => {
    const successMessage = localStorage.getItem('signupSuccess');
    if (successMessage) {
      setNotification({ message: successMessage, type: 'success' });
      localStorage.removeItem('signupSuccess');
    }
  }, []);


  const formlogin = async (event: any) => {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const logindata = {
      email: formdata.get('email'),
      password: formdata.get('password'),
    };

    try {
      const response = await Request('login', logindata);

      console.log(response);
      setLoginResponse(response);

      if (response.status === "ok" && response.success === true) {
        // Başarılı giriş durumunda token'i localStorage'e kaydedebilirsiniz
        localStorage.setItem('loginSuccess', response.message);
        localStorage.setItem('userMail', logindata.email as string);
        router.push('/profile/hakkimda');
      }
    } catch (err) {
      console.error('Error in login', err);
      setLoginResponse({ message: 'Login failed' , status: '', success: false });
    }


  };


  return (
    <>
      <Navbar />
      <section style={{ background: '#19181F' }}>
        <div className="flex flex-row items-center justify-center space-x-32  px-6 py-8 pb-36">

          <Contact />

          <div style={{ backgroundColor: '#23202A' }} className="w-full  rounded-3xl  border-none shadow-2xl dark:border md:mt-24 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-50">
                Login
              </h1>
              <form className="space-y-4 md:space-y-6" action="" onSubmit={formlogin}>

                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-200 ">Your email *</label>
                  <input type="email" name="email" id="email" style={{ background: '#1E1B24' }} className="  text-gray-50  sm:text-sm rounded-lg  focus:border-gray-600  block w-full p-2.5 " placeholder="name@company.com" />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-200 ">Password *</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" style={{ background: '#1E1B24' }} className="  text-gray-50  sm:text-sm rounded-lg  focus:border-gray-600  block w-full p-2.5 " />
                </div>


                <button
                  type="submit"
                  className=" w-full text-opacity-0 bg-white hover:bg-black hover:bg-opacity-10 hover:text-white  border-2 border-gray-50 focus:ring-1 focus:outline-none focus:ring-white rounded-full text-sm px-6 py-3 text-center transition duration-300 ease-in-out font-bold"
                >
                  Login
                </button>


                {notification.message && (
                  <ShowNotification
                    NotiType={notification.type}
                    NotiMessage={notification.message}
                  />
                )}
                <ShowNotification 
                NotiType={loginResponse.success ? "success" : "error"} 
                NotiMessage={loginResponse.message} 
              />

                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                    </div>
                  </div>
                  <a href="#" className="text-sm font-medium text-primary-600 text-gray-300">Forgot password?</a>
                </div>

                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet? <a href="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign Up</a>
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




















