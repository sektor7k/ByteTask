# TEST CASE

## Kayıt (Signin) Test Case'i

### Risk Seviyesi: Yüksek

**Amaç:** Kullanıcının sisteme kayıt işleminin test edilmesi amaçlanmaktadır.

### Girdiler:


1. Kullanıcı Adı: `testuser`
2. Email Adresi: `test@example.com`
3. Parola: `testpassword`
4. Parola Doğrulama: `testpassword`
5. Kullanıcı Kayıt Butonu: Tetiklenmiş durumda

### Beklenen Çıktılar:

- Kullanıcının başarılı bir şekilde sisteme kayıt olması ve giriş ekranına yönlendirilmesi.

### Kriterler:

- Belirtilen kullanıcı adı, sistemde daha önce kayıtlı olmayan bir değer olmalıdır.
- Belirtilen email adresi, sistemde daha önce kayıtlı olmayan bir değer olmalıdır.
- Parola ve parola doğrulama alanına girilen değerler eşleşmelidir.
- Kullanıcı, kullanıcı adı, email ve parola alanlarına uygun değerler dışında değer girmemelidir.

### Hata Kriterleri:

- Belirtilen değerlerin sistemde kayıtlı değerlerle çakışması.
- Parola ve parola doğrulama alanına girilen değerler eşleşmemesi.
- Sistemin herhangi bir teknik nedenle veritabanı bağlantı işlemini gerçekleştirememesi.

### Test Prosedürü:

1. Test kullanıcısı, yazılımı desteklenen sistem ve cihazlarda çalıştırarak belirtilen girdilerle testi gerçekleştirmelidir.
2. Test işlemini tamamladıktan sonra test sonucunu "Kayıt Başarılı / Kayıt Başarısız" olarak belirterek nedenleri ile birlikte raporlamalıdır.

## Giriş (Login) Test Case'i

### Risk Seviyesi: Yüksek 

**Amaç:** Kullanıcının sisteme giriş işleminin test edilmesi amaçlanmaktadır.

### Girdiler:

1. Email Adresi: `test@example.com`
2. Parola: `testpassword`
3. Kullanıcı Giriş Butonu: Tetiklenmiş durumda

### Beklenen Çıktılar:

- Kullanıcının başarılı bir şekilde sisteme giriş yaparak profil sayfasına yönlendirilmesi.

### Kriterler:

- Belirtilen email adresi ve parola değerleri, sistemde kayıtlı olan değerlerle eşleşmelidir.
- Kullanıcı, email ve parola alanlarına uygun değerler dışında değer girmemelidir.

### Hata Kriterleri:

- Belirtilen değerlerin sisteme kayıtlı değerlerle eşleşmemesi.
- Sistemin herhangi bir teknik nedenle veritabanı bağlantı işlemini gerçekleştirememesi.

### Test Prosedürü:

1. Test kullanıcısı, yazılımı desteklenen sistem ve cihazlarda çalıştırarak belirtilen girdilerle testi gerçekleştirmelidir.
2. Test işlemini tamamladıktan sonra test sonucunu "Giriş Başarılı / Giriş Başarısız " olarak belirterek nedenleri ile birlikte raporlamalıdır.

## Kullanıcı Bilgileri Ekleme Test Case'i

### Risk Seviyesi: Orta

**Amaç:** Kullanıcının profil bilgilerini başarıyla ekleyebilmesinin test edilmesi amaçlanmaktadır.

### Girdiler:

1. Kullanıcı ID: [Kullanıcının ID'si, örneğin: `123`]
2. Kullanıcı Hakkında Bilgisi: `Kullanıcı deneyimi olan bir yazılım geliştirici.`
3. Kullanıcı Alan Bilgisi: `Web ve mobil uygulama geliştirme.`

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

### Risk Seviyesi: Orta

**Amaç:** Kullanıcının başarıyla bir iş ilanı ekleyebilmesinin test edilmesi amaçlanmaktadır.

### Girdiler:

1. Kullanıcı ID: [Kullanıcının ID'si, örneğin: `123`]
2. İş Başlığı: `Yazılım Geliştirici`
3. İş Açıklaması: `Web ve mobil uygulama geliştirme projelerinde deneyimli yazılım geliştirici aranmaktadır.`
4. İş Fiyatı: `1000` BYT
5. Haftalık Çalışma Saati: `40` saat
6. Revizyon Sayısı: `3`

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

## İş İlanı Kaldırma Test Case'i

### Risk Seviyesi: Orta

**Amaç:** Kullanıcının başarıyla bir iş ilanını kaldırabilmesinin test edilmesi amaçlanmaktadır.

### Girdiler:

1. Kullanıcı ID: [Kullanıcının ID'si, örneğin: `123`]
2. İş İlanı ID: [İş ilanının ID'si, örneğin: `456`]

### Beklenen Çıktılar:

- İş ilanının başarılı bir şekilde kaldırılması.

### Kriterler:

- Kullanıcı ID, sistemde mevcut bir kullanıcıya ait olmalıdır.
- İş ilanı ID, sistemde mevcut bir iş ilanına ait olmalıdır.

### Hata Kriterleri:

- Kullanıcı ID, sistemde mevcut bir kullanıcıya ait değilse veya eksikse.
- İş ilanı ID, sistemde mevcut bir iş ilanına ait değilse veya eksikse.
- Sistem, herhangi bir teknik nedenle veritabanı bağlantı işlemini gerçekleştirememişse.

### Test Prosedürü:

1. Test kullanıcısı, yazılımı desteklenen sistem ve cihazlarda çalıştırarak belirtilen girdilerle testi gerçekleştirmelidir.
2. Test işlemini tamamladıktan sonra test sonucunu "Geçti/Kaldı" olarak belirterek nedenleri ile birlikte raporlamalıdır.
   

## Sipariş Kabul Etme Test Case'i

### Risk Seviyesi: Düşük

**Amaç:** Kullanıcının başarıyla bir iş ilanını kabul edebilmesinin test edilmesi amaçlanmaktadır.

### Girdiler:

1. Kullanıcı ID: [Kullanıcının ID'si, örneğin: `123`]
2. İş İlanı ID: [İş ilanının ID'si, örneğin: `456`]

### Beklenen Çıktılar:

- İş ilanının başarılı bir şekilde kabul edilmesi.

### Kriterler:

- Kullanıcı ID, sistemde mevcut bir kullanıcıya ait olmalıdır.
- İş ilanı ID, sistemde mevcut bir iş ilanına ait olmalıdır.

### Hata Kriterleri:

- Kullanıcı ID, sistemde mevcut bir kullanıcıya ait değilse veya eksikse.
- İş ilanı ID, sistemde mevcut bir iş ilanına ait değilse veya eksikse.
- Sistem, herhangi bir teknik nedenle veritabanı bağlantı işlemini gerçekleştirememişse.

### Test Prosedürü:

1. Test kullanıcısı, yazılımı desteklenen sistem ve cihazlarda çalıştırarak belirtilen girdilerle testi gerçekleştirmelidir.
2. Test işlemini tamamladıktan sonra test sonucunu "Geçti/Kaldı" olarak belirterek nedenleri ile birlikte raporlamalıdır.


## Sipariş Reddetme Test Case'i

### Risk Seviyesi: Düşük

**Amaç:** Kullanıcının başarıyla bir iş ilanını reddedebilmesinin test edilmesi amaçlanmaktadır.

### Girdiler:

1. Kullanıcı ID: [Kullanıcının ID'si, örneğin: `123`]
2. İş İlanı ID: [İş ilanının ID'si, örneğin: `456`]

### Beklenen Çıktılar:

- İş ilanının başarılı bir şekilde reddedilmesi.

### Kriterler:

- Kullanıcı ID, sistemde mevcut bir kullanıcıya ait olmalıdır.
- İş ilanı ID, sistemde mevcut bir iş ilanına ait olmalıdır.

### Hata Kriterleri:

- Kullanıcı ID, sistemde mevcut bir kullanıcıya ait değilse veya eksikse.
- İş ilanı ID, sistemde mevcut bir iş ilanına ait değilse veya eksikse.
- Sistem, herhangi bir teknik nedenle veritabanı bağlantı işlemini gerçekleştirememişse.

### Test Prosedürü:

1. Test kullanıcısı, yazılımı desteklenen sistem ve cihazlarda çalıştırarak belirtilen girdilerle testi gerçekleştirmelidir.
2. Test işlemini tamamladıktan sonra test sonucunu "Geçti/Kaldı" olarak belirterek nedenleri ile birlikte raporlamalıdır.

## İş İlanı Teslimi Test Case'i

### Risk Seviyesi: Yüksek

**Amaç:** Kullanıcının başarıyla bir iş ilanını teslim edebilmesinin test edilmesi amaçlanmaktadır.

### Girdiler:

1. Kullanıcı ID: [Kullanıcının ID'si, örneğin: 123]
2. İş İlanı ID: [İş ilanının ID'si, örneğin: 456]
3. Teslim Adresi: [Ürünü teslim eden kişinin ödeme alacağı adres, örneğin: `0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266`]

### Beklenen Çıktılar:

- İş ilanının başarılı bir şekilde teslim edilmesi.
- Ürünü teslim eden kişinin deposit cüzdandan otomatik transaction ile ödeme alması.

### Kriterler:

- Kullanıcı ID, sistemde mevcut bir kullanıcıya ait olmalıdır.
- İş ilanı ID, sistemde mevcut bir iş ilanına ait olmalıdır.
- Teslim adresi geçerli bir cüzdan adresi formatına sahip olmalıdır.

### Hata Kriterleri:

- Kullanıcı ID, sistemde mevcut bir kullanıcıya ait değilse veya eksikse.
- İş ilanı ID, sistemde mevcut bir iş ilanına ait değilse veya eksikse.
- Teslim adresi geçerli bir cüzdan adresi formatına sahip değilse.
- Sistem, herhangi bir teknik nedenle veritabanı bağlantı işlemini gerçekleştirememişse.

### Test Prosedürü:

1. Test kullanıcısı, yazılımı desteklenen sistem ve cihazlarda çalıştırarak belirtilen girdilerle testi gerçekleştirmelidir.
2. Test işlemini tamamladıktan sonra test sonucunu "Geçti/Kaldı" olarak belirterek nedenleri ile birlikte raporlamalıdır.