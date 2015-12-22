var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./controllers/api/items');
var router = express.Router();

var app = express();
app.use(express.static(__dirname + '/assets'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/', routes);

app.get('/', function(req,res){
  res.sendfile('layouts/app.html')
});

app.listen(3000, function(){
  console.log('cool - server listening on', 3000);

})
