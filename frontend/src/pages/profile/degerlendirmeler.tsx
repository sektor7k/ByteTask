import Evaluations from "@/components/Evaluations";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProfileHeader from "@/components/ProfileHeader";



export default function Profile() {

  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: '#1E1B24' }} className="flex flex-col items-center justify-center space-y-4 ">

        <ProfileHeader />
        <Evaluations/>

      </div>
      <Footer />
    </>
  )
}