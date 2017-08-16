
var jwt = require('jsonwebtoken');
var fs = require('fs');


// verify an existing JWT
var existingToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAbWFpbGluYXRvci5jb20iLCJpYXQiOjE1MDI4ODAzODB9.LiZZp_SIy2TApLnJGjWfWhKUU0uc6oh5wJa5gLY4l82cmgB4MGMssxbagaIROmkmSA68tk57YihBmbz7d76lyV1dWw6HAZ6KttvkHnvk8Zyg0QethIG6TYPJ083H_xWUBTDDF-bQCXf3AgELMuKyUWqVONW294tW5n7vKqo41eMx-r372oxHdL9Du_GzZ2LJrWtxPnaIWh5hb0MiPz5KNKlWh0D4MBb-lEkmghc7QE69mIKJ2u3-ZYe_i3KGEclCZArKusmpxfhNbmfvU_JX2kF7ko4HS5qe4a7ZV04Bzgovz5TNZ-13j79jSWpWod3jA_xZZfLfMpgBhteWuxhImw';


var publicKey = fs.readFileSync('./demos/public.key');


console.log("verifying");

const verify = jwt.verify(existingToken, publicKey, {algorithm: 'RS256' });



console.log("Decoded JWT:", verify);

