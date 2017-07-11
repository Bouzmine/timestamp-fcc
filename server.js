// server.js
// where your node app starts
String.prototype.isDate = function() {
  return Date.parse( this ) > 0;
}

const MONTHS = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];
// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/basic-routing.html
app.get("/:time", function (request, response) {  
  let date = new Date(Number(request.params.time) || request.params.time);
  
  let month = MONTHS[date.getMonth()];
  let year = date.getFullYear();
  let day = date.getDate();
  let unix = date.getTime();
  
  if(!isNaN(unix)) {
    let full = month + " " + day + ", " + year;
    response.json({
      unix: unix,
      natural: full
    })
  }else {
    response.json({
      unix: null,
      natural: null
    });
  }
  
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
