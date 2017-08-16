
var jwt = require('jsonwebtoken');


// verify an existing JWT
var existingToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbGdvcml0aG0iOiJIUzI1NiIsImRhdGEiOnsidXNlcklkIjoxfSwiaWF0IjoxNTAyODgxOTIxfQ.6ayBjYiaTMJ8Z3tYx6VfueFLDN1U8SFl94B7U3ZWO6Q';


var secretKey = 'secret-key';



const verify = jwt.verify(existingToken, secretKey, {algorithm: 'HS256' });


console.log("Decoded JWT:", verify);





