const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const sharp = require('sharp');
const { PDFDocument } = require('pdf-lib');

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
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
        const targetformat = (req.body.targetformat || req.body.targetFORMAT || '').toLowerCase();
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
        } else if (targetformat === "pdf") { //image to pdf 
            const imagebuffer = fs.readFileSync(inputpath);
            const pdfDoc = await PDFDocument.create();

            let image;
            const ext = path.extname(uploadFile.originalname).toLowerCase();
            if(ext === '.png'){
                image = await pdfDoc.embedPng(imagebuffer);
            } else if (['.jpg', '.jpeg'].includes(ext)){
                image = await pdfDoc.embedJpg(imagebuffer);
            } else {
                const pngBuffer = await sharp(inputpath).png().toBuffer();
                image = await pdfDoc.embedPng(pngBuffer);
            }

            const page = pdfDoc.addPage([image.width, image.height]);
            page.drawImage(image, {
                x: 0, y: 0, width:image.width, height:image.height,
            });

            const pdfBytes = await pdfDoc.save();
            fs.writeFileSync(outputpath, pdfBytes);
        } else {
            fs.unlinkSync(inputpath);
            return res.status(400).json({
                error: `Format ${targetformat} belum di dukung`
            });
        }

        if(fs.existsSync(inputpath)){
            fs.unlinkSync(inputpath);
        }

        const downloadURL = `http://localhost:3000/converted/${ouputfilename}`;
        return res.status(200).json({
            message: "File berhasil di konversi", 
            downloadURL: downloadURL,
            filename: ouputfilename
        });
    } catch(error){
        console.error("Error konversi : ", error);
        return res.status(500).json({
            error: "Terdapat kesalahan server saat memproses file"
        });
    }
});

module.exports = router;
