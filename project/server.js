var express = require('express');
var bodyParser = require('body-parser');

var app = express()
app.use(bodyParser.json())

app.get('/api/items', function(req,res){
  res.json([
    {
      model: 'tessel1',
      body: 'Very cool item',
      price: 19.99
    }

  ])
})

app.post('/api/items', function(req,res){
  console.log('Item received');
  console.log(req.body.model);
  console.log(req.body.body);
  console.log(req.body.price);
  res.send(201)

});

app.listen(3000, function(){
  console.log('cool - server listening on', 3000);

})
