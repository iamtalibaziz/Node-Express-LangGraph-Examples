const express = require('express');
const { generateArticle } = require('../controllers/articleController');

const router = express.Router();

router.post('/generate-article', generateArticle);

module.exports = router;
