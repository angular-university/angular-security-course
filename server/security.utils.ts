

import {User} from "../src/app/model/user";
import {sessionStore} from "./session-storage";
const util = require('util');
const crypto = require('crypto');
import {Response} from "express";



export const randomBytes = util.promisify(crypto.randomBytes);




export async function initializeUserSession(user:User, res:Response) {

    const sessionId = await randomBytes(32).then(bytes => bytes.toString('hex'));
    console.log("sessionId", sessionId);

    sessionStore.createSession(sessionId, user);

    res.cookie("SESSIONID", sessionId, {httpOnly: true, secure: true});

    res.status(200).json({id: user.id, email: user.email});
}

