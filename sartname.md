# ByteTask - Yazılım Şartnamesi


## Proje Genel Bakış

### Amaç

ByteTask, blockchain teknolojisinin sunduğu güvenlik ve şeffaflığı kullanarak, freelanserlerin ve işverenlerin güvenilir bir ortamda buluşmasını sağlayan bir platformdur. Kullanıcılar, iş ilanları oluşturabilir, iş alabilir ve bu işlemleri Byte Coin ile gerçekleştirerek ödemelerini sağlayabilir.

### Kapsam

Proje, kullanıcıların platforma kaydolmasını, güvenli bir şekilde giriş yapmasını, iş ilanları oluşturmasını, iş almasını, ödemelerini gerçekleştirmesini ve profil yönetimini içermektedir.

## Gereksinimler

### Fonksiyonel Gereksinimler

#### Kullanıcı Hesapları

- Kullanıcılar, platforma kaydolabilecek ve hesaplarını oluşturabilecekler.
- Güvenli giriş yaparak platforma erişim sağlayabilecekler.

#### İş İlanı Yönetimi

- Kullanıcılar, iş ilanları oluşturabilecek ve bu ilanlara başvuruda bulunabilecekler.
- İş ilanı sahipleri, gelen başvuruları değerlendirebilecekler.

#### Ödeme Sistemi

- Byte Coin ile ödeme yapabilme ve alabilme özelliği sağlanacak.
- Güvenli ödeme yöntemleri ile işlemler gerçekleştirilecek.

#### Profil Yönetimi

- Kullanıcılar, profil bilgilerini düzenleyebilecekler.
- İş durumları ve geçmişlerini inceleyebilecekler.

### Performans Gereksinimleri

- Platformun ana sayfasının yüklenme süresi maksimum 2 saniye olmalıdır.
- Sistem, aynı anda en az 1000 kullanıcıyı desteklemelidir.

## Teknik Gereksinimler

### Frontend

- [React.js](https://react.dev/)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Viem](https://viem.sh/), [Wagmi](https://wagmi.sh/), [Web3](https://web3js.org/), [Metamask/SDK-React](https://docs.metamask.io/wallet/how-to/connect/set-up-sdk/javascript/react/) entegrasyonu yapılacak.

### Backend

- [Node.js](https://nodejs.org/en)
- [Express](https://expressjs.com/)
- [Viem](https://viem.sh/) entegrasyonu yapılacak.

### Veri Tabanı

- [MySQL](https://www.mysql.com/) 

### Blockchain

- [Foundry (Anvil)](https://book.getfoundry.sh/reference/anvil/) 
- [Solidity](https://soliditylang.org/) 

### Test

- Yazılım, farklı tarayıcılar üzerinde (Chrome, Firefox, Safari) test edilecek.
- Kodların testi için [Chai](https://www.chaijs.com/), [Mocha](https://mochajs.org/) ve [Supertest](https://www.npmjs.com/package/supertest) kullanılacak.

### Güvenlik

- Kullanıcı şifreleri, [bcrypt](https://www.npmjs.com/package/bcrypt) kullanılarak güvenli bir şekilde saklanacak.
- SQL enjeksiyonuna karşı önlemler alınacak.

## Arayüz Tasarımı

- Kullanıcı dostu ve sakin bir arayüz tasarımı olacak.
- Koyu renk paleti kullanıcıyı yormayacak şekilde seçilecek.

## Test Gereksinimleri

- Yazılım, farklı tarayıcılar üzerinde (Chrome, Firefox, Safari) test edilecek.

## Dağıtım ve Kurulum

- Yazılımın dağıtımı ve kurulumu için detaylı talimatlar sağlanacak.

## Bakım ve Destek

- Yazılımın bakımı ve destek süreçleri belirlenecek.

## Referanslar

- Kullanılacak API'lar, kütüphaneler ve dış kaynaklar belirlenecek ve belirtilecek.
