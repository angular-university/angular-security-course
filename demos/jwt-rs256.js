
console.log(" JWT example using HMAC SHA256");

var jwt = require('jsonwebtoken');



var privateKey = 'private-key';




var payload = {
  email: 'test@mailinator.com'
};


var token = jwt.sign(payload, secretKey, {algorithm: 'RS256' });


console.log(token);



