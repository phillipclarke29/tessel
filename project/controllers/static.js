var router = require('express').Router();


app.get('/', function(req,res){
  res.sendfile('layouts/app.html')
});


module.exports = router
