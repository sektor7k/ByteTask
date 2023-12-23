# TEST CASE

## Giriş (Login) Test Case'i

### Risk Seviyesi: Yüksek

**Amaç:** Kullanıcının sisteme giriş işleminin test edilmesi amaçlanmaktadır.

### Girdiler:

1. Kullanıcı Adı: DoğruKullaniciAdi
2. Parola: DoğruParola123
3. Kullanıcı Giriş Butonu: Tetiklenmiş durumda

### Beklenen Çıktılar:

- Kullanıcının başarılı bir şekilde sisteme giriş yaparak ana ekranına yönlendirilmesi.

### Kriterler:

- Kullanıcı parola alanına büyük/küçük harf ve en az bir tek basamaklı doğal sayı içeren bir parola girmelidir.
- Belirtilen kullanıcı adı ve parola değerleri, sistemde kayıtlı olan değerlerle eşleşmelidir.
- Kullanıcı, kullanıcı adı ve parola alanlarına uygun değerler dışında değer girmemelidir.

### Hata Kriterleri:

- Belirtilen değerlerin sisteme kayıtlı değerlerle eşleşmemesi.
- Sistemin herhangi bir teknik nedenle veritabanı bağlantı işlemini gerçekleştirememesi.

### Test Prosedürü:

1. Test kullanıcısı, yazılımı desteklenen sistem ve cihazlarda çalıştırarak belirtilen girdilerle testi gerçekleştirmelidir.
2. Test işlemini tamamladıktan sonra test sonucunu "Geçti/Kaldı" olarak belirterek nedenleri ile birlikte raporlamalıdır.

