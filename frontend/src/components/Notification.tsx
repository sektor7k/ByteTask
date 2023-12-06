import React, { useState, useEffect } from 'react';

// Prop türlerini tanımlayın
type ShowNotificationProps = {
  NotiType: string;
  NotiMessage: string;
};

export default function ShowNotification({ NotiType, NotiMessage }: ShowNotificationProps) {
  const [notification, setNotification] = useState({
    message: "",
    type: "", // 'success' ya da 'error' gibi
  });

  useEffect(() => {
    if (NotiMessage && NotiType) {
      // Bildirimi ayarla ve belirli bir süre sonra kaldır
      setNotification({ message: NotiMessage, type: NotiType });

      const timer = setTimeout(() => {
        setNotification({ message: "", type: "" });
      }, 3000); // 3 saniye sonra bildirimi kaldır

      return () => clearTimeout(timer);
    }
  }, [NotiType, NotiMessage]);

  return (
    <>
      {notification.message && (
        <div
          className={`fixed bottom-0 left-0 right-0 p-4 text-white text-center ${
            notification.type === 'success' ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {notification.message}
        </div>
      )}
    </>
  );
}
