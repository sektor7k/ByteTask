import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: '#1E1B24' }} className="min-h-screen flex items-center justify-center">
        <div style={{ backgroundColor: '#23202A', height: "30rem" }} className=" rounded-3xl  p-20 shadow-2xl w-9/12 ">
          <div className="flex items-center mb-20 justify-between ">
            <div className="ml-0">
              <h2 className="text-white text-4xl font-bold   mt-0">Serbest Çalışanlarla Buluşun, <br />Projelerinizi Gerçekleştirin! </h2>
              <p className="text-gray-300 mt-10">İhtiyacınız olan yetenekli serbest çalışanları bulun ya da kendi <br />
                becerilerinizi sunun. ByteTask, projelerinizi hayata geçirmeniz <br />
                için gereken bağlantıyı sağlar. Hemen başlayın, iş dünyasındaki <br />
                fırsatları keşfedin!</p>
              <div className="flex space-x-10   mt-12 justify-center">
                <button
                  type="button"
                  className="text-black bg-white hover:bg-1E1B24 hover:bg-opacity-0 hover:text-white focus:ring-4 focus:outline-none focus:ring-1E1B24 font-medium rounded-full text-sm px-8 py-4 text-center transition duration-300 ease-in-out font-bold"
                >
                  Hemen İş Al!
                </button>
                <button
                  type="button"
                  className="text-black bg-white hover:bg-1E1B24 hover:bg-opacity-0 hover:text-white focus:ring-4 focus:outline-none focus:ring-1E1B24 font-medium rounded-full text-sm px-8 py-4 text-center transition duration-300 ease-in-out font-bold"
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
    </>
  );
}
