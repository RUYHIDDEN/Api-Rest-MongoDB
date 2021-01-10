const mongoose = require('mongoose');

var usuario = new mongoose.Schema({
    Usuario:{
        type: String
    },
    Contrasena:{
        type: String
    },
    Tipo:{
        type: String
    }
},{
    versionKey: false
});

mongoose.model('Usuario', usuario);