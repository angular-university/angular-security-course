
const argon2i = require('argon2-ffi').argon2i;
const crypto = require('crypto');

const password = "monkey";


argon2i.hash(password, , result => {

    console.log(`The result of hashing ${password} is ${result}`);

});