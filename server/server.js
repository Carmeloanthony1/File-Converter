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