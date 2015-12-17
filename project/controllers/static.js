var router = require('express').Router();


app.get('/', function(req,res){
  res.sendfile('layouts/store.html')
});

module.exports = router
