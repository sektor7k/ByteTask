import Navbar from "@/components/Navbar";
import ProfileHeader from "@/components/ProfileHeader";


export default function Profile() {

  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: '#1E1B24' }} className="min-h-screen flex flex-col items-center justify-center ">

      <ProfileHeader/>
      


      </div>
    </>
  )
}