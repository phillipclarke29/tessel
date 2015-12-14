var express = require('express');
var bodyParser = require('body-parser');
var Item = require('./models/items.js');

var app = express();
app.use(bodyParser.json())

app.get('/api/items', function(req,res, next){
  Item.find(function(err, items){
    if(err) {return next(err)}
    res.json(items)
  })
});

app.post('/api/items', function(req, res, next){
  console.log(req.body);
  var item = new Item({
    model: "req.body.model",
    body: "req.body.body",
    price: 19

  });
  item.save(function(err,resp) {
       if(err) {
           console.log(err);
           res.send({
               message :'something went wrong'
           });
       } else {
           res.send({
               message:'the appointment has been saved'
           });
       }

   });

});

app.listen(3000, function(){
  console.log('cool - server listening on', 3000);

})
