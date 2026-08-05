const express = require('express');
const multer = require('multer');
const JWT = require('jsonwebtoken');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

const app = express();
const port = 3000;

const access_secret = "access_secret";

app.use(cors({
    origin: 'http://localhost:5173',
    credentials : true //dia kasih izin ke port 5173 buat nanti tukeran data/komunikasi
}));

app.use(express.json());

const uploadDir = path.join(__dirname, 'uploads'); //kalau nanti ga ada foldernya, dia bikin sendiri
if(!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
    destination: (req, res, callback) => {
        callback(null, 'uploads/');
    },
    filename: (req, res, callback) => {
        const uniquename = crypto.randomUUID() + '-' + file.originalname;
        callback(null, uniquename);
    }
});

const upload = multer({ storage: storage });

const verifytoken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader || authHeader.split(' ')[1];

    if(!token){
        return res.status(401).json({
            error: "Silahkan login terlebih dahulu!"
        });
    }

    JWT.verify(token, access_secret, (err, decoded) => {
        if(err){
            return res.status(401).json({
                error: "Token tidak valid"
            });
        }
        req.user = decoded;
        next();
    });
};

app.post('/api/convert', verifytoken, upload.single('file'), (req, res) => { //mau pake harus login dulu
    try {
        const uploadFILE = req.file;
        const targetFORMAT = req.body.targetFORMAT;

        if(!uploadFILE){
            return res.status(400).json({
                error: "File tidak di temukan atau gagal di unggah"
            });
        }

        console.log('Nama file : ', uploadFILE.originalname);
        console.log('Ukuran file : ', uploadFILE.size, "bytes");
        console.log('Target tipe : ', targetFORMAT);

        return res.status(200).json({
            message: "File berhasil di konversi",
            filename: uploadFILE.originalname,
            targetFORMAT : targetFORMAT
        });
    } catch (error){
        console.error("error server : ", error);
        return res.status(500).json({
            error: "Terjadi sebuah kesalahan pada server"
        });
    }
});

app.listen(port, () => {
    console.log(`Server terkoneksi di port ${port}`);
});