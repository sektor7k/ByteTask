
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ShowNotification from "@/components/Notification";
import ProfileHeader from "@/components/ProfileHeader";
import Services from "@/components/Services";
import { useBackend } from "@/contexts/Request";

export default function Profile() {

  return (
    <>
      <Navbar />
      <div className="bg-[#1E1B24] flex flex-col items-center justify-center space-y-4 ">

        <ProfileHeader />
        <Services/>
      </div>
      <Footer />
    </>
  )
}