
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProfileHeader from "@/components/ProfileHeader";
import Services from "@/components/Services";


export default function Profile() {

  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: '#1E1B24' }} className="flex flex-col items-center justify-center space-y-4 ">

        <ProfileHeader />
        <Services/>

      </div>
      <Footer />
    </>
  )
}