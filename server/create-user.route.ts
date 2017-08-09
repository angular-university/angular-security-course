import {Request, Response} from "express";
import {db} from "./database";
import {USERS} from "./database-data";
import * as argon2 from 'argon2';
import {validatePassword} from "./password-validation";
import {AUTH_COOKIE_NAME} from "./constants";

const util = require('util');
const crypto = require('crypto');

const randomBytes = util.promisify(crypto.randomBytes);


export function createUser(req: Request, res: Response) {

    const credentials = req.body;

    const errors = validatePassword(credentials.password);

    if (errors.length > 0) {
        res.status(400).json({errors});
    }
    else {

        createUserAndSession(res, credentials);

    }

}

async function createUserAndSession(res: Response, credentials) {

    const sessionId = await randomBytes(32).then(bytes => bytes.toString('hex'));

    console.log("sessionId", sessionId);

    const passwordDigest = await argon2.hash(credentials.password);

    console.log("passwordDigest", passwordDigest);

    const user = db.createUser(credentials.email, passwordDigest);

    console.log(USERS);

    res.cookie(AUTH_COOKIE_NAME, sessionId, {httpOnly: true, secure: true});

    res.status(200).json({id: user.id, email: user.email});

}


