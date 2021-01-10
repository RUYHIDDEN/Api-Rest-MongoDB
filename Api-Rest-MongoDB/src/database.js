const mongoose = require('mongoose');
var colors = require('colors');

const URI = 'mongodb+srv://ejemplo:ejemplo@ejemplo.qusl1.mongodb.net/Ejemplo?retryWrites=true&w=majority';

mongoose.connect(URI || 'mongodb://localhost:27017/Ejemplo', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true}, (err) => {
        if(!err){
            console.log('Conexion MongoDB Atlas o local Correcto'.bgGreen);
        }else{
            console.log('Error al conectar: '.bgRed + err);
        }
});

require('./models/Usuario-model');