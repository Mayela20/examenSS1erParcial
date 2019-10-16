const express = require('express');
var router = express.Router();

var thingsCollection = [];

var thingsStructure = {
    "id": 0,
    "title": '',
    "url": '',
    "thumbnailUrl": '',
    "album": ''
};

thingsCollection.push(
    Object.assign({},thingsStructure, {"id": new Date().getTime(), "title":"hola", "url": "www.foto.com", "thumbnailUrl":"www.vistapequena.com", "album":"album familiar"})
);

router.get('/', (req, res, next)=>{
    res.status(200).json(thingsCollection);
});

