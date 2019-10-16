const express = require('express');
const router = express.Router();

const EX1208199600249Api = require('./EX1208199600249');

router.get('/', (req, res, next)=>{
    res.status(200).json({"api":"Version 1."})
});

router.use('/EX1208199600249', EX1208199600249Api);

module.exports = router;