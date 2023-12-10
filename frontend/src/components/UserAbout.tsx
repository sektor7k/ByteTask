import { useBackend } from "@/contexts/Request"

export default function UserAbout() {

    const {userData, userAbout} = useBackend();

    return(
        <div style={{ backgroundColor: '#23202A' }} className="w-8/12  rounded-lg flex flex-col justify-between  ">

                {/* Kullanıcı hakkında */}
                <div className=" p-12">
                    <p className=" text-xl font-bold text-white">
                        <span className=" text-4xl text-White ">{userData.username}</span> Hakkında
                    </p>
                    <p className=" text-sm text-gray-400 mt-5">
                        {/* Merhaba, ben Angelina Swam  . 12 yıllık deneyime sahip İngilizce, Almanca ve Türkçe içerik üreticisi ve tasarımcıyım. İngilizce dil eğitimimi, ABD’nin Kuzey Karolina eyaletinde bulunan Charlotte şehri CPCC kolejinde aldım. Dil yeterliliği sonrasında aynı şehirde bulunan Strayer University’de pazarlama alanında yüksek lisans yaptım. Web Tasarım ile birlikte; metinsel olarak website ve reklam içerikleri, görsel olarak sosyal medya, katalog, banner ve video tasarım hizmetleri vermekteyim. Dijital ve gerçek dünyada daha modern ve daha profesyonel bir görünüm amacı taşıyan kişilerle çalışmak isterim. */}
                        {userAbout.about}
                    </p>
                </div>
                <div className="w-full pr-12 pl-12">
                    <div className="h-px bg-gray-600 rounded-3xl "></div>
                </div>

                {/* Uzman olduğu alanlar */}
                <div className="p-12">
                    <p className=" text-xl font-bold text-white">
                        Uzmanı Olduğu Alanlar & Araçlar
                    </p>
                    <div className="flex flex-row mt-6 space-x-4">
                        <button
                            type="button"
                            className="text-gray-400 hover:text-white border border-solid border-gray-400 hover:border-white rounded-xl text-sm px-4 py-2 text-center transition duration-300 ease-in-out font-bold"
                        >
                            Sosyal Medya Tasarımları
                        </button>
                        <button
                            type="button"
                            className="text-gray-400 hover:text-white border border-solid border-gray-400 hover:border-white rounded-xl text-sm px-4 py-2 text-center transition duration-300 ease-in-out font-bold"
                        >
                            İçerik Yazarlığ
                        </button>
                        <button
                            type="button"
                            className="text-gray-400 hover:text-white border border-solid border-gray-400 hover:border-white rounded-xl text-sm px-4 py-2 text-center transition duration-300 ease-in-out font-bold"
                        >
                            İngilizce Çeviri
                        </button>
                        <button
                            type="button"
                            className="text-gray-400 hover:text-white border border-solid border-gray-400 hover:border-white rounded-xl text-sm px-4 py-2 text-center transition duration-300 ease-in-out font-bold"
                        >
                            Web Sitesi İçeriği
                        </button>
                    </div>
                    <div className="flex flex-row mt-4 space-x-4">
                        <button
                            type="button"
                            className="text-gray-400 hover:text-white border border-solid border-gray-400 hover:border-white rounded-xl text-sm px-4 py-2 text-center transition duration-300 ease-in-out font-bold"
                        >
                            Javascript/React
                        </button>
                        <button
                            type="button"
                            className="text-gray-400 hover:text-white border border-solid border-gray-400 hover:border-white rounded-xl text-sm px-4 py-2 text-center transition duration-300 ease-in-out font-bold"
                        >
                            Blockchain
                        </button>
                        
                    </div>

                </div>
                <div className="w-full pr-12 pl-12">
                    <div className="h-px bg-gray-600 rounded-3xl "></div>
                </div>
                {/* Eğitim ve Sertifika Bilgileri */}
                <div className="p-12">
                    <p className=" text-xl font-bold text-white">
                        Eğitim ve Sertifika Bilgileri
                    </p>
                    <div className="flex flex-col mt-6 space-y-3">
                        <div>
                            <p className="text-gray-200 text-lg">
                                Strayer University
                            </p>
                            <p className="text-gray-400 text-base">
                                M.B.A. Marketing ( İşletme-Pazarlama ), 2018
                            </p>
                        </div>
                        <div>
                            <p className="text-gray-200 text-lg">
                                Central Piedmont Community College
                            </p>
                            <p className="text-gray-400 text-base">
                                İngilizce , 2016
                            </p>
                        </div>

                    </div>
                </div>
            </div>
    )
}