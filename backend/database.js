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
