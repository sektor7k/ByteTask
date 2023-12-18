import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProfileHeader from "@/components/ProfileHeader";
import { useBackend } from "@/contexts/Request";
import { useState } from "react";

export default function ProfileEdit() {

    const { userData, userAboutContext } = useBackend();
    const [userFields, setUserFields] = useState<string[]>([]);
    const [newField, setNewField] = useState('');

    const userField = JSON.stringify(userFields);

    const formAbout = async (event: any) => {
        event.preventDefault();
        const formdata = new FormData(event.target);
        const aboutdata = {
            userid: userData.id,
            userAbout: formdata.get('userAbout') as string,
            userField: userField
            
        };
        console.log(aboutdata)
        userAboutContext(aboutdata)


    };

    const addField = () => {
        if (newField.trim() !== '') {
            setUserFields((prevFields) => [...prevFields, newField]);
            setNewField(''); // Yeni alanı temizle
        }
        console.log(userFields)
    };
    const clearFields = () => {
        setUserFields([]);
    };
    return (
        <>
            <Navbar />
            <div className="bg-[#1E1B24] flex flex-col items-center justify-center space-y-4 ">

                <ProfileHeader />
                <div className="flex flex-row items-start justify-center space-x-4 w-5/6 pb-20">
                    <div className="bg-[#23202A] w-full rounded-lg flex flex-col justify-between ">

                        <form action="" onSubmit={formAbout}>
                            <div className=" p-12">
                                <p className=" text-xl font-bold text-white">
                                    <label htmlFor="userAbout"><span className=" text-4xl text-White ">Hakkımda :</span> </label>
                                </p>
                                <p className=" text-sm text-gray-400 mt-5">
                                    <textarea
                                        name="userAbout"
                                        id="userAbout"
                                        className="bg-[#1E1B24] text-gray-50 sm:text-sm rounded-lg focus:border-gray-600 block w-full p-2.5 h-40 min-h-full"
                                        placeholder="User About"
                                    />
                                </p>
                                <p className="text-xl font-bold text-white mt-6">
                                    <label htmlFor="userField">
                                        <span className="text-2xl text-White">Uzmanı Olduğu Alanlar & Araçlar</span>{' '}
                                    </label>
                                </p>
                                <div className="flex flex-row items-center space-x-6 mt-2">
                                    <textarea
                                        name="userField"
                                        id="userField"
                                        value={newField}
                                        onChange={(e) => setNewField(e.target.value)}
                                        className="bg-[#1E1B24] text-gray-50 sm:text-sm rounded-lg focus:border-gray-600 block w-full p-2.5 h-32 min-h-full"
                                        placeholder="User Field"
                                    />
                                    <div className="flex flex-col space-y-5 items-center">
                                    <button
                                        type="button"
                                        onClick={addField}
                                        className=" text-white border border-solid border-gray-50 rounded-full px-4 py-2 text-center transition duration-300 ease-in-out font-bold"
                                    >
                                        Ekle
                                    </button>
                                    
                                        <button
                                            type="button"
                                            onClick={clearFields}
                                            className="text-red-500 border border-solid border-red-500 rounded-full px-4 py-2 text-center transition duration-300 ease-in-out font-bold"
                                        >
                                            Temizle
                                        </button>
                                    </div>
                                </div>
                                {/* Eklenen alanları göster */}
                                {userFields.length > 0 && (
                                    <div className="mt-4">
                                        <p className="text-gray-400 text-sm">Eklenen Alanlar:</p>
                                        <ul className="flex flex-wrap gap-2 text-gray-50 mt-2 space-x-4">
                                            {userFields.map((field, index) => (
                                                <li key={index} className="flex flex-row items-center">
                                                    <button
                                                        type="button"
                                                        onClick={() => setUserFields((prevFields) => prevFields.filter((_, i) => i !== index))}
                                                        className="text-white text-sm border border-solid border-gray-50 hover:text-red-500 hover:border-red-500 rounded-full px-2 py-1 text-center transition duration-300 ease-in-out font-bold mr-1"
                                                    >
                                                        Sil
                                                    </button>
                                                    <p className="text-lg">{field}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className=" text-opacity-0 bg-white hover:bg-black hover:bg-opacity-10 hover:text-white border-2 border-gray-50 focus:ring-1 focus:outline-none focus:ring-white rounded-full text-sm px-6 py-3 text-center transition duration-300 ease-in-out font-bold mt-5"
                                >
                                    Edit About
                                </button>
                            </div>
                            {/* <div className="w-full pr-12 pl-12">
                                <div className="h-px bg-gray-600 rounded-3xl "></div>
                            </div> */}



                        </form>

                    </div>

                </div>




            </div>
            <Footer />
        </>
    )
}