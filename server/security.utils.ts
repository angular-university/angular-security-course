
const util = require('util');
const crypto = require('crypto');


export const randomBytes = util.promisify(crypto.randomBytes);
