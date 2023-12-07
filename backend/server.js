import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { addUser, loginCheck, getUser } from './database.js';

const app = express();
const port = 8080;

app.use(cookieParser());
app.use(express.json());

// CORS ayarları
app.use(cors({
  origin: 'http://localhost:3000', // İstemcinin kökeni
  credentials: true // Kimlik bilgilerine izin ver
}));

app.get("/", (req, res) => {
  res.send("Yazılımı Bırak Sana Göre Değil");
});

app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // güvenlik katmanları 
    const signupdatabaseresponse = await addUser(username, email, password);

    if (signupdatabaseresponse) {
      return res.status(200).send({ message: signupdatabaseresponse.message, status: 'ok', success: signupdatabaseresponse.success });
    }
    else {
      return res.status(201).send({ message: signupdatabaseresponse.message, status: 'SigupError' });
    }


  } catch (err) {
    return res.status(500).send({ message: 'Server error', error: err });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    // güvenlik katmanı
    const logindatabaseresponse = await loginCheck(email, password);

    if (logindatabaseresponse) {
      return res.status(200).send({ message: logindatabaseresponse.message, status: 'ok', success: logindatabaseresponse.success });
    }
    else {
      return res.status(201).send({ message: logindatabaseresponse.message, status: 'LoginError' });
    }
  }
  catch (err) {
    return res.status(500).send({ message: 'Server error', error: err })
  }
});

app.get("/users/:email", async (req, res) => {

  try {
    

    const email = req.params.email
    
    const note = await getUser(email)

    return res.status(200).send(note[0]);

  }
  catch (err) {
    return res.status(500).send({ message: 'Server error', error: err })
  }

})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


