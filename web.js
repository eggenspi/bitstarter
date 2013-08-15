var express = require('express');
var app = express();
app.use(express.logger());

  response.send('Hello World 2!');
app.get('/', function(request, response) {
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
