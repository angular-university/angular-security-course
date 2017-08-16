
var jwt = require('jsonwebtoken');
var fs = require('fs');


var privateKey = fs.readFileSync('./demos/private.key');

var payload = {
  userId: 1
};


var token = jwt.sign({
    algorithm: 'RS256',
    data: payload
}, privateKey);


console.log('RSA 256 JWT', token);





