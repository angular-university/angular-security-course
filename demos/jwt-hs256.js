
console.log(" JWT example using HMAC SHA256");

var jwt = require('jsonwebtoken');



var secretKey = 'secret-key';

var payload = {
  email: 'test@mailinator.com'
};


var token = jwt.sign(payload, secretKey, {algorithm: 'HS256' });


console.log(token);



