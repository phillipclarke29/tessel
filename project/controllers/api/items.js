var Item = require('../../models/item');
var express = require('express');
var router = require('express').Router();

router.get('/api/items', function(req,res, next){
  Item.find(function(err, items){
    if(err) {return next(err)}
    res.json(items)
  })
});

router.post('/api/items', function(req, res, next){
  var item = new Item({
    model: req.body.model,
    body: req.body.body,
    price: req.body.price,
    mid: req.body.MID
  });
  item.save(function(err,resp) {
       if(err) {
           console.log(err);
           res.send({
               message :'something went wrong'
           });
       } else {
           res.send({
               message:'the item has been saved'
           });

       }

   });

});

module.exports = router;
