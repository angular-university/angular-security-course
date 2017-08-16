


import moment = require("moment");
const util = require('util');
const crypto = require('crypto');
import * as jwt from 'jsonwebtoken';
import * as fs from "fs";



export const randomBytes = util.promisify(crypto.randomBytes);



const RSA_PRIVATE_KEY = fs.readFileSync('./demos/private.key');

const RSA_PUBLIC_KEY = fs.readFileSync('./demos/public.key');

const SESSION_DURATION = 240;


export async function createSessionToken(userId:number) {
    return jwt.sign(
        {
        },
        RSA_PRIVATE_KEY,
        {
            algorithm: 'RS256',
            expiresIn: SESSION_DURATION,
            subject: '' + userId
        });
}


export async function isSessionTokenValid(sessionToken:string) {

    const  verify = await jwt.verify(sessionToken, RSA_PUBLIC_KEY);

    console.log("decoded token", verify);

    return verify;
}


export async function createCsrfToken() {
    return randomBytes(32).then(bytes => bytes.toString('hex'));
}



