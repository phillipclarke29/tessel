var express = require('express');
var bodyParser = require('body-parser');
var Item = require('./models/item');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/', function(req,res){
  res.sendfile('layouts/store.html')
});



app.get('/api/items', function(req,res, next){
  Item.find(function(err, items){
    if(err) {return next(err)}
    res.json(items)
  })
});

app.post('/api/items', function(req, res, next){
  console.log(res);
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

app.listen(3000, function(){
  console.log('cool - server listening on', 3000);

})
