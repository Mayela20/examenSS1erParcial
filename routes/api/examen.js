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

router.post('/', (req, res, next)=>{
    var newElement = Object.assign(thingsStructure, req.body, {"id": new Date().getTime()});
    thingsCollection.push(newElement);
    res.status(200).json(newElement);
});

router.put('/:idElemento', (req, res, next)=>{
    var id = parseInt(req.params.idElemento);
    var update = req.body;
    var modifiedObject = {};
    var originalObject = {};
    thingsCollection = thingsCollection.map((e, i)=>{
        if (e.id === id){
            originalObject = Object.assign({}, e);
            return Object.assign(modifiedObject, e, req.body);
        }
        return e;
    });//map
    res.status(200).json({"o": originalObject, "m": modifiedObject});
})

router.delete('/:id', (req, res, next)=>{
    var id = parseInt(req.params.id);
    thingsCollection = thingsCollection.filter((e, i)=>{
        return (e.id !== id);
    }); //
    res.status(200).json({'msg': 'EX1208199600249 ' + id + ' fue eliminado con éxito.'});
});

