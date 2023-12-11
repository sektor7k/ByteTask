import Statistics from "./Statistics";
import UserAbout from "./UserAbout";

export default function ProfileAbout() {

    return (


        <div className="flex flex-row items-start justify-center space-x-4 w-5/6 pb-20">
            {/* Freeleancer istatistikleri */}
            <Statistics/>
            {/* Kullanıcı Bilgileri */}
            <UserAbout/>  
        </div>
    )
}