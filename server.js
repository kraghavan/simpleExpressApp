const app = require("./app");

const port = process.env.PORT || 3000;

var server = app.listen(port);
console.log('Server started at http://localhost:' + port);

module.exports = server;