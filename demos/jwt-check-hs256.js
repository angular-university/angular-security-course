
var jwt = require('jsonwebtoken');


// verify an existing JWT
var existingToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAbWFpbGluYXRvci5jb20iLCJpYXQiOjE1MDI4ODAzNTJ9.uXXUBgipNmjvb4UvEnQ0LOdO8aKxne9Wg01jcoj3YWE';


var secretKey = 'secret-key';



const verify = jwt.verify(existingToken, secretKey, {algorithm: 'HS256' });


console.log("Decoded JWT:", verify);




//const wrong = jwt.verify(existingToken, 'wrong-secret');

//console.log(":", wrong);




