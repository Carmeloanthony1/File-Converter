const express = require('express');
const multer = require('multer');
const JWT = require('jsonwebtoken');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

const access_secret = "access_secret";

app.use(cors({
    origin: 'http://localhost:5173',
    credentials : true //dia kasih izin ke port 5173 buat nanti tukeran data/komunikasi
}));

app.use(express.json());