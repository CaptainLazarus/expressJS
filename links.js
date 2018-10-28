var express = require('express');
var router = express.Router();

router.get('/:id([0-9]{5})' , function(req,res){
    res.send("Id is " + req.params.id);    
    console.log("Id is " + req.params.id);    
});

router.get('/pug' , function(req,res){
    res.render('first');    
});

router.get('/dyn' , function(req,res){
    res.render('dynamic' , {
        name: "Aditya",
        t: "Cheers Motherfucker"
    });    
});


router.post('/:id([0-9]{5})' , function(req,res){
    console.log("Id is " + req.params.id);    
});

router.get('*' , function(req,res){
    res.send("Invalid");
});

module.exports = router