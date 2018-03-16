//Load express module with `require` directive
var express = require('express');
if(process.env.NODE_ENV !== 'prod') {
  require('dotenv').load();
}

var app = express();
const port = process.env.PORT;

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('Hello World!')
})

//Launch listening server on port 8080
app.listen(port, function () {
  console.log(`App listening on port ${port}!`)
})