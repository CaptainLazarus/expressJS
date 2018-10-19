var express = require('Express');
var app = express();

app.all('/' , function(req , res){
    res.send('all');
});
//both index.js and things.js should be in same directory
//var things = require('./things.js');
//app.use('/', things);

app.listen(3000);