
var jwt = require('jsonwebtoken');



var secretKey = 'secret-key';

var payload = {
  name: 'Alice'
};


// create a JWT
var newToken = jwt.sign(payload, secretKey, {
    algorithm: 'HS256'
});

console.log("JWT created:", newToken);






