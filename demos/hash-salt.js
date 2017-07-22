

var crypto = require('crypto');


var password = "monkey";


crypto.randomBytes(256, function(err, salt) {

    crypto.pbkdf2(password, salt, 100000, 512, 'sha256',
        function(err, hash) {

            console.log("The result of hashing " + password + " is:\n\n" +
                hash.toString('hex') + "\n\n");

        });


});