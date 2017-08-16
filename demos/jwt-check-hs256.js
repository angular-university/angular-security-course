
var jwt = require('jsonwebtoken');

console.log("Verify JWT example using HMAC SHA256");


// verify an existing JWT

var existingToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAbWFpbGluYXRvci5jb20iLCJpYXQiOjE1MDI4NzY5NzJ9.ekc_eGqp7ex1zqJyJn_huy2Q-0U78tUKuOeyJhnsQ8M';


var secretKey = 'secret-key';

const verify = jwt.verify(existingToken, secretKey);


console.log("Decoded JWT:", verify);

