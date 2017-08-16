
var jwt = require('jsonwebtoken');
var fs = require('fs');


// verify an existing JWT
var existingToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWxpY2UiLCJpYXQiOjE1MDI4OTA4NjYsImV4cCI6MTUwMjg5MDk4Niwic3ViIjoiMSJ9.SkF5CArLIU9A0MeCiv-HOiRctivGESnXHnxGSwc7lx1nBP0-qO7-r3LO4TVLlLydQBce0hQAbiik1lndgiR1V_8TN-dMGcpFYZlSv3gp4cJD5LNxl_fQ9CBhpznkNo6Yuys8DYIfL90uWpm0jjnSJh2hFDxbGwPaXTciJ0Xdj-QLq2hc_jHrRKaWlB6eCbs9P43tfrUw_pXb0lCdYfPMjPLHJMNyZMLxCxExBoHay7UoYDx_cYU-UTR1hQQ2xbHfrA8oMz1fOCjwCChEXuDKVDqOF9W4LhbrdvGmVgv8mvdl72VSHkqH5jWc3vh0u5xJtsMpRBwg0-OBU3hOebtlyg';


var publicKey = fs.readFileSync('./demos/public.key');


console.log("verifying");

const verify = jwt.verify(existingToken, publicKey);



console.log("Decoded JWT:", verify);

