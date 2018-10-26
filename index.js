var express = require('express');
var app = express();
app.set('view engine' , 'pug');
app.set('views' , './views');

var id = require('./id.js')

app.use('/id' , id);

app.get('/pug' , function(req , res){
    res.render('./first');
});

app.listen(3000)