
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ShowNotification from "@/components/Notification";
import ProfileAbout from "@/components/ProfileAbout";
import ProfileHeader from "@/components/ProfileHeader";
import { useEffect, useState } from "react";



export default function Profile() {
  const [notification, setNotification] = useState({ message: '', type: '' });

  useEffect(() => {
    const successMessage = localStorage.getItem('loginSuccess');
    if (successMessage) {
      setNotification({ message: successMessage, type: 'success' });
      localStorage.removeItem('loginSuccess'); 
    }
  }, []); 

  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: '#1E1B24' }} className="flex flex-col items-center justify-center space-y-4 ">

        <ProfileHeader />
        <ProfileAbout />
        {notification.message && (
          <ShowNotification
            NotiType={notification.type}
            NotiMessage={notification.message}
          />
        )}

      </div>
      <Footer />
    </>
  )
}