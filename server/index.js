let express = require('express');
let app = express();
let axios = require('axios');
let cors = require('cors');
let config = require('./config');
let http = require('http');
app.use(cors());
let bodyParser = require("body-parser");

let currentServer;
let data;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));

app.get('/', function(req,res){
  axios.get('http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en')
  .then(response => {
    data = response.data;
    res.send(data);
  }, error => {
    console.log(error);
  });
});

currentServer = http.createServer(app).listen(config.port, function() {
  process.send && process.send("ready");
  console.log(config.port);
});
