// on a besoin d'express, on le require
const express = require('express');
const router = express.Router();
const logic = require('./logic.js');

router.get('/', logic.home );

router.get('/article/:id', logic.article);


module.exports = router;