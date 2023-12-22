import supertest from 'supertest';
import { expect } from 'chai';
import app from './server.js'; 
import pool from './database.js';
describe('Test Server Endpoints', () => {

    // Örnek bir kullanıcı için token saklamak için
    let token;

    // Signup Test
    it('kullanıcı kayıt işlemi (signup)', async () => {
        // Temizleme işlemi
        await pool.query('DELETE FROM users WHERE email = "test@example.com"');

        const res = await supertest(app)
            .post('/signup')
            .send({ username: 'testuser', email: 'test@example.com', password: 'testpassword' });

        expect(res.status).to.equal(200);
        expect(res.body.status).to.equal('ok');
        expect(res.body.success).to.be.true;

        // Signup'dan dönen token'i saklama
        token = res.body.token;
    });

    // Login Test
    it('kullanıcı giriş işlemi (login)', async () => {
        const res = await supertest(app)
            .post('/login')
            .send({ email: 'test@example.com', password: 'testpassword' });

        expect(res.status).to.equal(200);
        expect(res.body.status).to.equal('ok');
        expect(res.body.success).to.be.true;
    });

    // Check Status Test
    it('hesaptan çıkış yapma', async () => {
        const res = await supertest(app)
            .get('/statusfalse/test@example.com');

        expect(res.status).to.equal(200);
        //expect(res.body.success).to.be.false;
        expect(res.body.message).to.equal('Çıkış yapıldı');
    });


    //Add User about test
    it('kullanıcı about bilgileri ekleme', async () => {
        // Temizleme işlemi
      
       const id = await pool.query('SELECT id FROM users WHERE email = "test@example.com"');
       const userId = id[0][0].id;

        const res = await supertest(app)
            .post('/userAbout')
            .send({ userid: userId, userAbout: 'userAbout', userField: 'userField' });

        expect(res.status).to.equal(200);
        //expect(res.body.status).to.equal('Kullanıcı hakkında bilgisi eklendi' || 'Kullanıcı hakkında bilgisi güncellendi');
        //expect(res.body.success).to.be.true;

        
        token = res.body.token;
    });

    // Testler bittikten sonra veritabanını temizleme
    after(async () => {
        await pool.query('DELETE FROM users WHERE email = "test@example.com"');
    });
});

