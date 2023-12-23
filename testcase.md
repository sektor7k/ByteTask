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
   

## Sipariş Ekleme Test Case'i

### Risk Seviyesi: Yüksek

**Amaç**: Kullanıcının başarıyla bir sipariş ekleyebilmesinin test edilmesi amaçlanmaktadır.

### Girdiler:

1. Kullanıcı ID: [Test kullanıcısının ID'si, örneğin: `123`]
2. İş İlanı ID: [Test iş ilanının ID'si, örneğin: `456`]
3. Freelancer ID: [Freelancer kullanıcısının ID'si, örneğin: `789`]
4. Müşteri ID: [Müşteri kullanıcısının ID'si, örneğin: `123`]
5. Müşteri Notu: `Test Sipariş Notu`
6. Sipariş Tutarı: `100` BYT
7. Müşteri Adresi: [Müşteri cüzdan adres, örneğin: `0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266`]
8. Sipariş Hash: [İşlem Hash adres, örneğin: `0x1aad88F6F4ce6Fd6aad88F6F4ce6aB8827279cffFb92266Fd6e51aad88F6F4ce6Fd6e51aad88F6F4ce6`]

### Beklenen Çıktılar:

- Siparişin başarılı bir şekilde eklenmesi.

### Kriterler:

- Kullanıcı ID, sistemde mevcut bir kullanıcıya ait olmalıdır.
- İş ilanı ID, sistemde mevcut bir iş ilanına ait olmalıdır.
- Freelancer ID ve Müşteri ID geçerli birer kullanıcı ID'si olmalıdır.
- Müşteri Notu, geçerli bir metin olmalıdır.
- Sipariş Tutarı pozitif bir sayı olmalıdır.
- Müşteri Adresi, geçerli bir adres değeri olmalıdır.
- Sipariş Hash, geçerli bir hash değeri olmalıdır.

### Hata Kriterleri:

- Kullanıcı ID, sistemde mevcut bir kullanıcıya ait değilse veya eksikse.
- İş ilanı ID, sistemde mevcut bir iş ilanına ait değilse veya eksikse.
- Freelancer ID veya Müşteri ID geçerli bir kullanıcı ID'si değilse.
- Müşteri Notu, geçerli bir metin değilse.
- Sipariş Tutarı pozitif bir sayı değilse.
- Web3 cüzdan bağlantısı sağlananmışsa.
- Müşteri Adresi, web3 cüzdanından alınamamışsa.
- Kullanıcının sipariş vermek için cüzdanında yeterli gass yoksa.
- İşlem blockchain de geçerli RPC ye gönderemeişse.
- Sipariş Hash, geçerli bir hash değeri değilse.
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