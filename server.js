var express = require('express');
var app = express();
module.exports.Start = function(port) {
//Define request response in root URL (/)
  app.get('/', function (req, res) {
    res.send('Hello World!')
  })
  //Launch listening server on port 8080
  module.server = app.listen(port, function () {
    console.log(`App listening on port ${port}!`)
  })
}
module.exports.Stop = function() {
    if(module.server)
      module.server.close();
}