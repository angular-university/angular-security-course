
var jwt = require('jsonwebtoken');
var fs = require('fs');


// verify an existing JWT
var existingToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWxpY2UiLCJpYXQiOjE1MDI5MDMxNTcsImV4cCI6MTUwMjkwMzI3Nywic3ViIjoiMSJ9.KQJ-f3r4TNCLVrox1JaL5pxQAM6vSw4CNKj1lCf3HDWXGdIHW5rgD5odKpNBjrkbl1smjEL_ClLnFwG_iGDPKvu2bqktcrbXwi1-XUrY-jDKLkpoEHL2C9tGYnyDRl6Pg1SP97Hl-VWkGNyekYMerL8vh0RwgcK7y8UsuA33WgnP1DtfhKIghwcd493ARN4nBvmMJ11Zk35c7FBIN2w4Xl4ny8RU4l0_xy5DBF3JAKV1jilTHOKEvsrY8Ry3qRKaxxR6-QE_pfGOte3BRlt6544BUul1yI662tVAn1R28KXKnwCGAwo_HZ1kC-OrxmsjoXI4HDuHG2k5eRX-QC_W4Q';


var publicKey = fs.readFileSync('./demos/public.key');


console.log("verifying");

const verify = jwt.verify(existingToken, publicKey);



console.log("Decoded JWT:", verify);

