import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import {SignupUser} from './database.js';

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
    const {username, email, password} = req.body;
    // güvenlik katmanları 
    const signupdatabaseresponse = await SignupUser(username, email, password);
    
    if(signupdatabaseresponse === "SignOk")
    {
        return res.status(200).send({ message: 'successful', status: 'ok' });
    }
    else{ 
        return res.status(201).send({ message: signupdatabaseresponse.message, status: 'SigupError' });
    }
    
   
  } catch (err) {
    return res.status(500).send({ message: 'Server error', error: err });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});