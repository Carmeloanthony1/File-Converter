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
