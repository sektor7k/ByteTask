import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: '#1E1B24' }} className="min-h-screen flex items-center justify-center">
        <div style={{ backgroundColor: '#23202A', height: "30rem" }} className=" rounded-3xl  p-20 pt-12 shadow-2xl w-9/12 ">
          <div className="flex items-center mb-20 justify-between ">
            <div className="ml-0">
              <button
                type="button"
                className="text-white bg-black bg-opacity-30  font-medium rounded-tl-full rounded-br-full rounded-tr-full rounded-bl-md cursor-auto text-sm px-4 py-2 text-center transition duration-300 ease-in-out font-medium mb-5 "
              >
                Welcome
              </button>
              <h2 className="text-white text-4xl font-bold   mt-0">Serbest Çalışanlarla Buluşun, <br />Projelerinizi Gerçekleştirin! </h2>
              <p className="text-gray-300 mt-10">İhtiyacınız olan yetenekli serbest çalışanları bulun ya da kendi <br />
                becerilerinizi sunun. ByteTask, projelerinizi hayata geçirmeniz <br />
                için gereken bağlantıyı sağlar. Hemen başlayın, iş dünyasındaki <br />
                fırsatları keşfedin!</p>
              <div className="flex space-x-10   mt-12 justify-center">
                <button
                  type="button"
                  className="text-black bg-white hover:bg-black hover:bg-opacity-10 hover:text-white border border-2 border-gray-50 focus:ring-2 focus:outline-none focus:ring-white font-medium rounded-full text-sm px-8 py-4 text-center transition duration-300 ease-in-out font-bold"
                >
                  Hemen İş Al!
                </button>
                <button
                  type="button"
                  className="text-black bg-white hover:bg-black hover:bg-opacity-10 hover:text-white border border-2 border-gray-50 focus:ring-2 focus:outline-none focus:ring-white font-medium rounded-full text-sm px-8 py-4 text-center transition duration-300 ease-in-out font-bold"
                >
                  İş  ilanı ver
                </button>
              </div>
            </div>
            <div className=" ">
              <img
                src="https://crator.tailwindawesome.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-home.88f6cc60.jpg&w=640&q=75"
                alt="Resim"
                className=" h-80 object-cover shadow-2xl rounded-3xl"
              />
            </div>
          </div>

        </div>


      </div>

      {/* 2. alan */}

      <div style={{ backgroundColor: '#1E1B24' }} className="min-h-screen flex items-center justify-center">
        <div className=" rounded-3xl  p-20 pt-12  w-10/12 ">
          <div className="flex flex-col space-y-6">

            <button
              type="button"
              className="text-white bg-black bg-opacity-30  font-medium rounded-tl-full rounded-br-full rounded-tr-full rounded-bl-md cursor-auto text-sm px-4 py-2 text-center transition duration-300 ease-in-out font-medium w-36   "
            >
              What we do
            </button>

            <div className="flex flex-row space-x-10">
              <h2 className="text-white text-4xl font-bold">We create digital products that
                help you get ahead </h2>
              <p className="text-gray-300 text-xl mt-0 mr-0">From fresh ideas to fully-realized designs, we cover  every aspect of your digital presence.</p>


            </div>
            <div className="flex flex-row space-x-20 ">
              <div className="flex flex-col space-y-6">

                <div style={{ backgroundColor: '#23202A' }} className=" rounded-3xl  p-6 shadow-2xl ml-16 ">
                  <div className="flex flex-row space-x-10">

                    <div className="flex flex-col justify-between">
                      
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12  text-gray-400 p-2 bg-black bg-opacity-40 rounded-xl">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                      </svg>


                    </div>


                    <div>
                      <h1 className=" text-white text-xl font-bold">
                        Web Design
                      </h1>
                      <p className="text-gray-300 text-sm ">
                        We craft visually stunning, unforgettable experiences with responsive design at the forefront.
                      </p>
                    </div>
                  </div>
                </div>
                <div style={{ backgroundColor: '#23202A' }} className=" rounded-3xl  p-6 shadow-2xl  mr-16  ">
                  <div className="flex flex-row space-x-10">

                    <div className="flex flex-col justify-between">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12  text-gray-400 p-2 bg-black bg-opacity-40 rounded-xl">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                      </svg>

                    </div>


                    <div>
                      <h1 className=" text-white text-xl font-bold">
                        Web Development
                      </h1>
                      <p className="text-gray-300 text-sm ">
                        We excell at converting eye-catching designs into high-functioning, user-friendly web applications.
                      </p>
                    </div>
                  </div>
                </div>
                <div style={{ backgroundColor: '#23202A' }} className=" rounded-3xl  p-6 shadow-2xl ml-16 ">
                  <div className="flex flex-row space-x-10">

                    <div className="flex flex-col justify-between">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12  text-gray-400 p-2 bg-black bg-opacity-40 rounded-xl">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                      </svg>


                    </div>


                    <div>
                      <h1 className=" text-white text-xl font-bold">
                        Maintenance & Optimization
                      </h1>
                      <p className="text-gray-300 text-sm ">
                        We ensure your site remains an effective, optimized tool for your business needs, goals and growth.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
              <div className="flex flex-row space-x-4 w-5/6">
                <div>
                  <img
                    src="https://crator.tailwindawesome.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhat-we-do-image-01.a9e0cd5f.jpg&w=360&q=75"
                    alt="Resim"
                    className="rounded-3xl  shadow-2xl w-full "
                  />
                </div>
                <div className="felx flex-col space-y-4">
                  <img
                    src="https://crator.tailwindawesome.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhat-we-do-image-02.ce7f0c18.jpg&w=360&q=75"
                    alt="Resim"
                    className="rounded-3xl shadow-2xl"
                  />
                  <img
                    src="https://crator.tailwindawesome.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhat-we-do-image-03.717cbe58.jpg&w=360&q=75"
                    alt="Resim"
                    className="rounded-3xl shadow-2xl"
                  />

                </div>

              </div>

            </div>

          </div>

        </div>


      </div>





      <Footer />
    </>
  );
}
