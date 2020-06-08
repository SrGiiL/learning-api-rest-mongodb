'use strict'

let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/curso_mongo', {useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => console.log('¡Conexión a MongoDB exitosa!'))
    .catch(err => console.log(err));