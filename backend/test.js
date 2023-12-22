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
        expect(res.body.succes).to.be.false;
        expect(res.body.message).to.equal('Çıkış yapıldı');

        return
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
        expect(res.body.message).to.equal('Kullanıcı hakkında bilgisi eklendi');
        expect(res.body.succes).to.be.true;


        token = res.body.token;
    });

    // İş ilanı ekleme testi
    it('İş ilanı ekleme', async () => {

        const id = await pool.query('SELECT id FROM users WHERE email = "test@example.com"');
        const userId = id[0][0].id;

        const res = await supertest(app)
            .post('/jobs')
            .send({ userid: userId, jobTitle: 'Test Title', jobDescription: 'Test Description', jobPrice: '21', workTime: '21', revision: '21' });

        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('İş ilanı eklendi');
        expect(res.body.success).to.be.true;

    })

    

    //Sipariş Ekleme Testi
    it('Sipariş Ekleme', async () => {
        const userId = await pool.query('SELECT * FROM users WHERE email = "test@example.com"');
        const jobs = await pool.query("SELECT * FROM jobs WHERE userId = ? ", [userId[0][0].id]);
        const jobId = (jobs[0][0].id);

        const res = await supertest(app)
            .post('/orders')
            .send({
                jobId: jobId,
                freelancerId: userId[0][0].id,
                customerId: userId[0][0].id,
                customerNote: 'Test Order Note',
                orderAmount: 100,
                customerAddr: 'Test Address',
                orderHash: 'Test Hash'
            });

        expect(res.status).to.equal(200);
        expect(res.body.success).to.be.true;
        expect(res.body.message).to.equal('Sipariş Alındı');
    })

    // İş ilanı silme testi
    it('İş ilanı silme', async () => {
        const userId = await pool.query('SELECT * FROM users WHERE email = "test@example.com"');
        const jobs = await pool.query("SELECT * FROM jobs WHERE userId = ? ", [userId[0][0].id]);
        const jobId = (jobs[0][0].id)
        const res = await supertest(app)
            .get(`/deleteJob/${jobId}`);


        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('İlan Başarıyla Silindi');
        expect(res.body.succes).to.be.false;

    })

    //Testler bittikten sonra veritabanını temizleme
    after(async () => {
        await pool.query('DELETE FROM users WHERE email = "test@example.com"');
    });
});