const express = require('express');
const { convertMarkdown } = require('../controllers/markdownController');

const router = express.Router();

// POST /api/markdown/convert
router.post('/convert', convertMarkdown);

module.exports = router;
