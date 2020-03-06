// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

const getFormattedTimestamp = require('./timestamp.js').getFormattedTimestamp;

function simpleRequestLogger(req, resp, next){
  console.log(`${req.method} ${req.path} - ${req.ip} `);
  console.log(JSON.stringify(req.body));
  next();
}

app.use(simpleRequestLogger);

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/timestamp/:timestamp", function(req, res) {
	res.send(getFormattedTimestamp(req.params.timestamp))
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});