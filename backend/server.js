var express = require('express');
var app = express();

var router = express.Router()
var appRoutes = require('./app/routes/api')(router);

var dbConnexion = require('./database');

app.use('/api', appRoutes);

app.listen(8080);