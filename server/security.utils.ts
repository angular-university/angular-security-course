


import moment = require("moment");
const util = require('util');
const crypto = require('crypto');
import * as jwt from 'jsonwebtoken';
import * as fs from "fs";



export const randomBytes = util.promisify(crypto.randomBytes);

export const signJwt = util.promisify(jwt.sign);


const RSA_PRIVATE_KEY = fs.readFileSync('./demos/private.key');

const RSA_PUBLIC_KEY = fs.readFileSync('./demos/public.key');

const SESSION_DURATION = 240;


export async function createSessionToken(userId:string) {
    return signJwt({}, RSA_PRIVATE_KEY, {
        algorithm: 'RS256',
        expiresIn: 240,
        subject: userId
    });
}








