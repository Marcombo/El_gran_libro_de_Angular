// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');

////////////////////////////////////////////////////////
// Conexión a la base de datos MongoDB a traves de Mongoose

var dbURI = 'mongodb://localhost/db_mean';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true});

// Configuracion de los eventos de la conexión Mongoose
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + dbURI);
});

mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

// Si el proceso 'Node' termina, se cierra la conexión Mongoose
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

////////////////////////////////////////////////////////
// Creamos la aplicacion express y la configuramos...
const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Cfg. del directorio 'dist' como directorio estatico.
//En este directorio tendremos los archivos obtenidos en el build de nuestra aplicación Angular
app.use(express.static(path.join(__dirname, '../../dist/ej071u078-mean')));

//Cfg. de las rutas
app.get('/api', (req, res) => {
  res.send('La API funciona');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/ej071u078-mean/index.html'));
});

//Cfg. del puerto de escucha
const port = process.env.PORT || '3000';
app.set('port', port);

//Creamos el servidor http con la aplicación express y abrimos puerto
const server = http.createServer(app);
server.listen(port, () => console.log(`API running on localhost:${port}`));
