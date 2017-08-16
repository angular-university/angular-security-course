
var jwt = require('jsonwebtoken');



var secretKey = 'secret-key';

var payload = {
  userId: 1
};


// create a JWT
var newToken = jwt.sign({
    algorithm: 'HS256',
    data: payload
}, secretKey);

console.log("JWT created:", newToken);






