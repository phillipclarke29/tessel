var express = require('express');
var bodyParser = require('body-parser');

var app = express()
app.use(bodyParser.json())

app.get('/api/items', function(req,res){
  res.json([
    {
      model: 'tessel1',
      body: 'Very cool item',
    }

  ])
})

app.listen(3000, function(){
  console.log('cool - server listening on', 3000);

})
