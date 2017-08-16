
import {Request, Response} from "express";
import {db} from "./database";
import * as argon2 from 'argon2';
import {validatePassword} from "./password-validation";
import moment = require("moment");
import {createSessionToken} from "./security.utils";




export function createUser(req: Request, res:Response) {

    const credentials = req.body;

    const errors = validatePassword(credentials.password);

    if (errors.length > 0) {
        res.status(400).json({errors});
    }
    else {

        createUserAndSession(res, credentials);

    }

}

async function createUserAndSession(res:Response, credentials) {

    const passwordDigest = await argon2.hash(credentials.password);

    const user = db.createUser(credentials.email, passwordDigest);

    const sessionToken = await createSessionToken(user.id);

    res.cookie("SESSIONID", sessionToken, {httpOnly:true, secure:true});

    res.status(200).json({id:user.id, email:user.email});
}





// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbGdvcml0aG0iOiJSUzI1NiIsImV4cCI6MTUwMjg4NTI4My4wMzEsInN1YmplY3QiOjEsImlhdCI6MTUwMjg4NTE2M30.BfdcIp8RY97W0Fzznbx0efQdWT2_YropraA5ofKUXPQ


