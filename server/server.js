const express = require('express');
const multer = require('multer');
const JWT = require('jsonwebtoken');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const convert_route = require('./convert');

const app = express();
const access_secret = process.env.JWT_SECRET || "access_secret";

app.use(cors({
    origin:true,
    credentials: true
}));

app.use('/converted', express.static(path.join(__dirname, 'converted')));
app.use(express.json());

const uploadDir = path.join('/tmp', 'uploads'); //kalau nanti ga ada foldernya, dia bikin sendiri
if(!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, uploadDir);
    },
    filename: (req, file, callback) => {
        const uniquename = crypto.randomUUID() + '-' + file.originalname;
        callback(null, uniquename);
    }
});

const upload = multer({ storage: storage });

const verifytoken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

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

app.locals.verifytoken = verifytoken;

app.use('/api', convert_route);

if(process.env.NODE_ENV !== 'production'){
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server terkoneksi di port ${PORT}`);
    });
}

module.exports = app;