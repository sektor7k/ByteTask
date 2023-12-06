import mysql from "mysql2";
import dotenv from "dotenv"

dotenv.config()

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
}).promise()

export async function addUser(username, email, password) {
  try {

    const checkuser = await userCheck(email);

    if (checkuser) {
      return { success: checkuser.success, message: checkuser.message }
    } else {
      const result = await pool.query(
        `INSERT INTO users (username, email, password)
        VALUES (?, ?, ?)`, [username, email, password]
      )
      return { success: checkuser.success, message: checkuser.message };
    }
  } catch (err) {
    return { success: false, message: 'Signup failed', error: err };
  }
}

export async function userCheck(email) {
  try {
    // MySQL sorgusunu hazırla
    const query = 'SELECT * FROM users WHERE email = ?';
    const [rows] = await pool.query(query, [email]);

    // Eğer kullanıcı bulunduysa hata döndür
    if (rows.length > 0) {
      return { success: false, message: 'Bu e-posta adresi zaten kayıtlı.' };
    }

    // Kullanıcı bulunamadıysa, kayıt işlemine devam et
    return { success: true, message: 'Kullanıcı Başarıyla Kayıt oldu' };
  } catch (err) {
    // Hata durumunda ilgili bilgileri döndür
    return { success: false, message: 'User check failed', error: err };
  }
}
