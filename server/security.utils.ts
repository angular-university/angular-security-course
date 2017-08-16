


import moment = require("moment");
const util = require('util');
const crypto = require('crypto');
import * as jwt from 'jsonwebtoken';
import * as fs from "fs";



const RSA_PRIVATE_KEY = fs.readFileSync('./demos/private.key');

export const randomBytes = util.promisify(crypto.randomBytes);



export async function createSessionToken(userId:number) {
    return jwt.sign(
        {
            algorithm: 'RS256',
            exp: (moment().add(2,"minutes").toDate().getTime() / 1000),
            subject: userId
        }, RSA_PRIVATE_KEY);
}