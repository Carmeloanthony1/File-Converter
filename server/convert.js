const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const crypto = require('cryto');
const sharp = require('sharp');
const { PDFdocument } = require('pdf-lib');

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, res, callback) => {
        callback(null, 'uploads/'); 
    },
    filename: (req, file, callback) => {
        const unique = crypto.randomUUID() + '-' + file.originalname;
        callback(null, unique);
    }
});

const upload = multer({ storage: storage });

router.post('/convert', upload.single('file'), async (req, res) => {
    try {
        const uploadFile = req.file;
        const targetformat = (req.body.targetformat || req.body.targetformat || '').toLoweraCase();
        if(!uploadFile){
            return res.status(400).json({
                error : "File tidak di temukan"
            });
        }

        const inputpath = uploadFile.path;
        const ouputfilename = `converted-${Date.now()}.${targetformat}`;
        const outputpath = path.join(__dirname, 'converted', ouputfilename);

        if(['jpg', 'jpeg', 'png', 'webp'].includes(targetformat)){
            await sharp(inputpath)
                .toFormat(targetformat === 'jpg' ? 'jpeg' : targetformat)
                .toFile(outputpath);
        } else if (targetformat === "pdf") {

        }
    };
    }
});
