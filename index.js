//Load express module with `require` directive

// if(process.env.NODE_ENV !== 'prod') {
//   require('dotenv').load();
// }

const server = require('./server');
const port = process.env.PORT || 8089;
server.Start(port);

// setTimeout(() => {
//   server.Stop();
// }, 2000);