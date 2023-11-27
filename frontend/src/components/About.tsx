

export default function About() {

  return (
    <div style={{ backgroundColor: '#1E1B24' }} className="min-h-screen flex items-center justify-center">
      <div className=" rounded-3xl  p-20 pt-12  w-10/12 ">
        <div className="flex flex-col space-y-6">

          <button
            type="button"
            className="text-white bg-black bg-opacity-30  font-medium rounded-tl-full rounded-br-full rounded-tr-full rounded-bl-md cursor-auto text-sm px-4 py-2 text-center transition duration-300 ease-in-out w-36   "
          >
            Hakkında
          </button>

          <div className="flex flex-row space-x-10">
            <h2 className="text-white text-3xl font-bold">ByteTask, çalışanlar ve işverenler arasında bir bağlantı noktasıdır </h2>
            <p className="text-gray-300 text-xl mt-0 mr-0">Yetenekli profesyonelleri işverenlerle buluşturarak projelerinizi hızlı ve etkili bir şekilde tamamlamanıza yardımcı oluyoruz.</p>


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
                      Tasarım Hizmetleri
                    </h1>
                    <p className="text-gray-300 text-sm ">
                      ByteTask, sadece işlevsel değil, aynı zamanda görsel olarak çekici tasarımlarıyla unutulmaz deneyimler sunar.                      </p>
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
                      Web Geliştirme Hizmetleri
                    </h1>
                    <p className="text-gray-300 text-sm ">
                      Profesyonel tasarımları etkileşimli ve kullanıcı dostu web uygulamalarına dönüştürüyoruz.                      </p>
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
                      Bakım ve Optimizasyon
                    </h1>
                    <p className="text-gray-300 text-sm ">
                      ByteTask, sitenizin etkinliğini ve işlevselliğini sürdürmek için düzenli bakım ve optimizasyon hizmetleri sunar.                       </p>
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
  )
}






