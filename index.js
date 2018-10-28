var express = require('express');
var app = express();
app.set('view engine' , 'pug');
app.set('views' , './views');

var links = require('./links.js');
app.use('/' , links);
app.listen('3000');