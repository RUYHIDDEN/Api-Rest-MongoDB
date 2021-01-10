require('./src/database');

const express = require('express');
const app = express();
var colors = require('colors');

app.set('port', process.env.PORT || 3000);

app.use(express.json());

app.use(require('./src/routes/usuario'));

app.get('/', function(req, res){
    respuesta = {
        error: false,
        codigo: 200,
        mensaje: 'Punto de inicio GET'
    };
    res.send(respuesta);
});

app.listen(app.get('port'), () => {
    console.log('Servidor en puerto'.bgBlue, app.get('port'));
});