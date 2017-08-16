


import moment = require("moment");
const util = require('util');
const crypto = require('crypto');
import * as jwt from 'jsonwebtoken';
import * as fs from "fs";



const RSA_PRIVATE_KEY = fs.readFileSync('./demos/private.key');

const RSA_PUBLIC_KEY = fs.readFileSync('./demos/public.key');



export const randomBytes = util.promisify(crypto.randomBytes);



export async function createSessionToken(userId:number) {
    return jwt.sign(
        {
        },
        RSA_PRIVATE_KEY,
        {
            algorithm: 'RS256',
            expiresIn: 120,
            subject: '' + userId
        });
}


export async function isSessionTokenValid(sessionToken:string) {

    console.log("validating token", sessionToken);

    const  verify = await jwt.verify(sessionToken, RSA_PUBLIC_KEY);

    console.log("decoded token", verify);

    return verify;
}








