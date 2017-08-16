
var jwt = require('jsonwebtoken');
var fs = require('fs');


var privateKey = fs.readFileSync('./demos/private.key');

var payload = {
  email: 'test@mailinator.com'
};


var token = jwt.sign(payload, privateKey, {algorithm: 'RS256' });


console.log('RSA 256 JWT', token);





