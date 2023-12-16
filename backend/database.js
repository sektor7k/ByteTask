import mysql from "mysql2";
import dotenv from "dotenv";
import bcrypt from "bcrypt"; 

dotenv.config()

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
}).promise()

export async function addUser(username, email, password) {
  const hashPassword = await bcrypt.hash(password, 13)
  try {

    const checkuser = await userCheck(username, email);

    if (checkuser.success) {

      const result = await pool.query(
        `INSERT INTO users (username, email, password)
        VALUES (?, ?, ?)`, [username, email, hashPassword]
      )
      return { success: checkuser.success, message: checkuser.message }
    } else {

      return { success: checkuser.success, message: checkuser.message };
    }
  } catch (err) {
    return { success: false, message: 'Signup failed', error: err };
  }
}

export async function userCheck(username, email) {
  try {
    // MySQL sorgusunu hazırla
    const queryUsername = 'SELECT * FROM users WHERE username = ?';
    const [rowsUsername] = await pool.query(queryUsername, [username]);

    const queryEmail = 'SELECT * FROM users WHERE email = ?';
    const [rowsEmail] = await pool.query(queryEmail, [email]);

    // Eğer kullanıcı bulunduysa hata döndür
    if (rowsUsername.length > 0) {
      return { success: false, message: 'Bu kullanıcı adı zaten kayıtlı.' };
    }
    if (rowsEmail.length > 0) {
      return { success: false, message: 'Bu email adresi zaten kayıtlı' };
    }

    // Kullanıcı bulunamadıysa, kayıt işlemine devam et
    return { success: true, message: 'Kullanıcı Başarıyla Kayıt oldu' };
  } catch (err) {
    // Hata durumunda ilgili bilgileri döndür
    return { success: false, message: 'User check failed', error: err };
  }
}

export async function loginCheck(email, password) {

  try {
    // MySQL sorguları
    const queryEmail = `SELECT * FROM users WHERE email = ?`
    const [rowsEmail] = await pool.query(queryEmail, [email]);

    // Eğer kullanıcı yoksa hata mesajı gönder var ise maile ait şifreyi kontrol et
    if (rowsEmail.length == 0) {
      return { success: false, message: 'Bu emaile ait kullanıcı bulunamadı' }
    }

    const isValid = await bcrypt.compare(password, rowsEmail[0].password);

    if (isValid) {

      checkStatusTrue(email)

      return { success: true, message: `Hoşgeldin ${rowsEmail[0].username}` }
    }
    else {
      return { success: false, message: 'Şifre hatalı lütfen tekrar deneyiniz' }
    }


  }
  catch (err) {
    return { success: false, message: 'Login failed', error: err }
  }

}

export async function checkStatusTrue(email) {

  try {
    const setStatus = await pool.query(`UPDATE users
      SET status = true
      WHERE email = ?`, [email])
    return setStatus
  }
  catch (err) {
    return { success: false, message: 'Check Status failed', error: err }
  }
}
export async function checkStatusFalse(email) {

  try {
    await pool.query(`UPDATE users
      SET status = false
      WHERE email = ?`, [email])

  }
  catch (err) {
    return { success: false, message: 'Check Status failed', error: err }
  }
}


export async function getUser(email) {

  try {
    const [getUser] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);

    return getUser
  }
  catch (err) {
    return { success: false, message: 'getStatus failed', error: err }
  }
}

export async function addUserAbout(userid, userAbout, userField) {
  try {

    const queryid = `SELECT * FROM users WHERE id = ?`
    const [rowsid] = await pool.query(queryid, [userid]);

    // Eğer kullanıcı yoksa hata mesajı gönder
    if (rowsid.length == 0) {
      return { success: false, message: 'Kullanıcı id si alınamadı' }
    }
    const userAboutt = await getUserAbout(userid);

    if (userAboutt.length == 0) {
      const query = `
      INSERT INTO userabout (userId, about, fields)
      VALUES (?, ?, ?)
    `;
      await pool.query(query, [userid, userAbout, userField]);
      return { success: true, message: 'Kullanıcı hakkında bilgisi eklendi' }
    } else {
      const updateQuery = `
      UPDATE userabout
      SET about = ?, fields = ?
      WHERE userId = ?
  `;
      await pool.query(updateQuery, [userAbout, userField, userid]);

      return { success: true, message: 'Kullanıcı hakkında bilgisi güncellendi' };

    }

  } catch (err) {
    return { success: false, message: 'addUserAbout failed', error: err }
  }
}

export async function getUserAbout(userid) {

  try {
    const [getAbout] = await pool.query('SELECT * FROM userabout WHERE userId = ?', [userid]);

    return getAbout
  }
  catch (err) {
    return { success: false, message: 'getUserAbout failed', error: err }
  }
}

export async function addJob(userid, jobTitle, jobDescription, jobPrice, workTime) {

  try {

    const queryid = `SELECT * FROM users WHERE id = ?`
    const [rowsid] = await pool.query(queryid, [userid]);

    if (rowsid.length == 0) {
      return { success: false, message: 'Kullanıcı id si alınamadı' }
    }

    const query = `
      INSERT INTO jobs (userId, jobTitle, jobDescription, jobPrice, workTime)
      VALUES (?, ?, ?, ?, ?)
    `;
    await pool.query(query, [userid, jobTitle, jobDescription, jobPrice, workTime]);
    return { success: true, message: 'İş ilanı eklendi' }


  }
  catch (err) {
    return { success: false, message: 'addJob failed', error: err }
  }
}

export async function getAllJobs(){

  try{
    const [getAllJobs] = await pool.query('SELECT * FROM jobs');
    
    const jobsWithUsername = await Promise.all(
      getAllJobs.map(async (job) => {
        const username = await getUserId(job.userId);
        return { ...job, username: username.username };
      })
    );

    return jobsWithUsername; 
  }
  catch{
    return { success: false, message: 'getAllJobs failed', error: err }
  }
}

export async function getUserId(id) {

  try {
    const [getUser] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);

    return getUser[0]
  }
  catch (err) {
    return { success: false, message: 'getStatus failed', error: err }
  }
}
















