
import {Request, Response} from "express";
import {db} from "./database";
import * as argon2 from 'argon2';
import {DbUser} from "./db-user";
import {initializeUserSession, randomBytes} from "./security.utils";
import {sessionStore} from "./session-storage";
import {User} from "../src/app/model/user";


export function login(req: Request, res: Response) {

    const credentials = req.body;

    const user = db.findUserByEmail(credentials.email);

    if (!user) {
        res.sendStatus(403);
    }
    else {

        validatePassword(user, credentials.password)
            .then(isPasswordValid => {

                if (isPasswordValid) {
                    initializeUserSession(user, res);
                }
                else {
                    res.sendStatus(403);
                }
            });

    }

}


async function validatePassword(user: DbUser, password:string) {
    return argon2.verify(user.passwordDigest, password);
}



