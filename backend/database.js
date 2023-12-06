


export async function SignupUser(username, password, email) {
    try {
      // Burada kullanıcı kaydı için gerekli işlemleri gerçekleştirin
      // Örneğin, veritabanına kullanıcı bilgilerini kaydetme işlemi
       const CheckStatus = await UserExistsCheck(username, email);
        if( CheckStatus.success === false){
            //buraya database kullnaıcı ekleme işlemini yaz
            return { success: true, message: 'Kullanıcı Başarıyla Kayıt oldu' };
        }
        else{
            return { success: false, message: 'Kullanıcı Zaten Kayıtlı' };
        }
    } catch (error) {
      // Hata durumunda bir hata mesajı döndür
      return { success: false, message: 'Signup failed', error: error };
    }
  };


  export async function UserExistsCheck(username, email) {
    try {
      // Burada kullanıcı kaydı için gerekli işlemleri gerçekleştirin
      // Örneğin, veritabanına kullanıcı bilgilerini kaydetme işlemi
  
      return { success: true, message: 'User successfully signed up' };
    } catch (error) {
      // Hata durumunda bir hata mesajı döndür
      return { success: false, message: 'Signup failed', error: error };
    }
  };
  

    