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

## Kayıt (Signin) Test Case'i

### Risk Seviyesi: Yüksek

**Amaç:** Kullanıcının sisteme kayıt işleminin test edilmesi amaçlanmaktadır.

### Girdiler:

1. Kullanıcı Adı: YeniKullanici
2. Parola: YeniParola456
3. Kullanıcı Kayıt Butonu: Tetiklenmiş durumda

### Beklenen Çıktılar:

- Kullanıcının başarılı bir şekilde sisteme kayıt olması ve giriş ekranına yönlendirilmesi.

### Kriterler:

- Kullanıcı parola alanına büyük/küçük harf ve en az bir tek basamaklı doğal sayı içeren bir parola girmelidir.
- Belirtilen kullanıcı adı, sistemde daha önce kayıtlı olmayan bir değer olmalıdır.
- Kullanıcı, kullanıcı adı ve parola alanlarına uygun değerler dışında değer girmemelidir.

### Hata Kriterleri:

- Belirtilen değerlerin sistemde kayıtlı değerlerle çakışması.
- Sistemin herhangi bir teknik nedenle veritabanı bağlantı işlemini gerçekleştirememesi.

### Test Prosedürü:

1. Test kullanıcısı, yazılımı desteklenen sistem ve cihazlarda çalıştırarak belirtilen girdilerle testi gerçekleştirmelidir.
2. Test işlemini tamamladıktan sonra test sonucunu "Geçti/Kaldı" olarak belirterek nedenleri ile birlikte raporlamalıdır.

## Kullanıcı Bilgileri Ekleme Test Case'i

### Risk Seviyesi: Yüksek

**Amaç:** Kullanıcının profil bilgilerini başarıyla ekleyebilmesinin test edilmesi amaçlanmaktadır.

### Girdiler:

1. Kullanıcı ID: [Kullanıcının ID'si, örneğin: 123]
2. Kullanıcı Hakkında Bilgisi: "Kullanıcı deneyimi olan bir yazılım geliştirici."
3. Kullanıcı Alan Bilgisi: "Web ve mobil uygulama geliştirme."

### Beklenen Çıktılar:

- Kullanıcının profil bilgilerini başarılı bir şekilde eklemesi.

### Kriterler:

- Kullanıcı ID, sistemde mevcut bir kullanıcıya ait olmalıdır.
- Kullanıcı, geçerli bir "Kullanıcı Hakkında Bilgisi" ve "Kullanıcı Alan Bilgisi" girmelidir.

### Hata Kriterleri:

- Kullanıcı ID, sistemde mevcut bir kullanıcıya ait değilse veya eksikse.
- Kullanıcı, geçerli olmayan bir "Kullanıcı Hakkında Bilgisi" veya "Kullanıcı Alan Bilgisi" girmişse.
- Sistem, herhangi bir teknik nedenle veritabanı bağlantı işlemini gerçekleştirememişse.

### Test Prosedürü:

1. Test kullanıcısı, yazılımı desteklenen sistem ve cihazlarda çalıştırarak belirtilen girdilerle testi gerçekleştirmelidir.
2. Test işlemini tamamladıktan sonra test sonucunu "Geçti/Kaldı" olarak belirterek nedenleri ile birlikte raporlamalıdır.

## İş İlanı Ekleme Test Case'i

### Risk Seviyesi: Yüksek

**Amaç:** Kullanıcının başarıyla bir iş ilanı ekleyebilmesinin test edilmesi amaçlanmaktadır.

### Girdiler:

1. Kullanıcı ID: [Kullanıcının ID'si, örneğin: 123]
2. İş Başlığı: "Yazılım Geliştirici"
3. İş Açıklaması: "Web ve mobil uygulama geliştirme projelerinde deneyimli yazılım geliştirici aranmaktadır."
4. İş Fiyatı: 1000 TL
5. Haftalık Çalışma Saati: 40 saat
6. Revizyon Sayısı: 3

### Beklenen Çıktılar:

- İş ilanının başarılı bir şekilde eklenmesi.

### Kriterler:

- Kullanıcı ID, sistemde mevcut bir kullanıcıya ait olmalıdır.
- İş başlığı, iş açıklaması, iş fiyatı, haftalık çalışma saati ve revizyon sayısı geçerli değerlere sahip olmalıdır.

### Hata Kriterleri:

- Kullanıcı ID, sistemde mevcut bir kullanıcıya ait değilse veya eksikse.
- İş başlığı, iş açıklaması, iş fiyatı, haftalık çalışma saati veya revizyon sayısı geçerli değerlere sahip değilse.
- Sistem, herhangi bir teknik nedenle veritabanı bağlantı işlemini gerçekleştirememişse.

### Test Prosedürü:

1. Test kullanıcısı, yazılımı desteklenen sistem ve cihazlarda çalıştırarak belirtilen girdilerle testi gerçekleştirmelidir.
2. Test işlemini tamamladıktan sonra test sonucunu "Geçti/Kaldı" olarak belirterek nedenleri ile birlikte raporlamalıdır.
