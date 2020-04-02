const express = require('express');

const router = express.Router();

router.get('/', (req,res) => {
    res.send('we are on Some')
});

router.get('/1', (req,res) => {
    res.send('next some')
});

module.exports = router;