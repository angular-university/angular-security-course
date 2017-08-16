
console.log(" Create JWT example using HMAC SHA256");

var jwt = require('jsonwebtoken');



var secretKey = 'secret-key';

var payload = {
  email: 'test@mailinator.com'
};


// create a JWT
var newToken = jwt.sign(payload, secretKey, {algorithm: 'HS256' });

console.log("JWT created:", newtoken);






