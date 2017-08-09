import {Request, Response} from "express";
import {db} from "./database";
import {USERS} from "./database-data";
import * as argon2 from 'argon2';
import {validatePassword} from "./password-validation";
import {sessionStore} from "./session-storage";
import {initializeUserSession, randomBytes} from "./security.utils";



export function createUser(req: Request, res: Response) {

    const credentials = req.body;

    const errors = validatePassword(credentials.password);

    if (errors.length > 0) {
        res.status(400).json({errors});
    }
    else {

        createUserAndSession(res, credentials)
            .catch(err => res.status(500).json({errors: ["err_user"]}));

    }

}

async function createUserAndSession(res: Response, credentials) {

    const passwordDigest = await argon2.hash(credentials.password);

    console.log("passwordDigest", passwordDigest);

    const user = db.createUser(credentials.email, passwordDigest);

    return initializeUserSession(user, res);

}


