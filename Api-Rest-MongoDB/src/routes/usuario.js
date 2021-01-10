const express = require('express');
const router = express.Router();
var colors = require('colors');
const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

router.get('/Usuario', (req, res) => {
    Usuario.find((err, docs) => {
        if(!err){
            res.json(docs);
        }else{
            res.json();
            console.log('Error find: '.bgRed + err);
        }
    }).lean();
});

router.get('/Usuario/:id', (req, res) => {
    Usuario.findById(req.params.id, (err, doc) => {
        if(!err){
            res.json(doc);
        }else{
            // Retorna null
            console.log('Error findById: '.bgRed + err);
        }
    }).lean();
});

router.post('/Usuario', (req, res) => {
    var usuario = new Usuario();
    usuario.Usuario = req.body.Usuario;
    usuario.Contrasena = req.body.Contrasena;
    usuario.Tipo = req.body.Tipo;
    usuario.save((err, doc) => {
        if(!err){
            res.json({Status : 'Usuario save'});
        }else {
            res.json();
            console.log(''.red + err);
        }
    });
});

router.put('/Usuario/:id', (req, res) => {
    Usuario.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, doc) => {
        if(!err){
            res.json({Status : 'Usuario findByIdAndUpdate'});
        }else{
            res.json();
            console.log(''.red + err);
        }
    });
});

router.delete('/Usuario/:id', (req, res) => {
    Usuario.findByIdAndRemove(req.params.id, (err, doc) => {
        if(!err){
            res.json({Status : 'Usuario findByIdAndRemove'});
        }else{
            res.json();
            console.log(''.red + err);
        }
    });
});

module.exports = router;