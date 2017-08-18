

import {Request, Response} from "express";
import {db} from "./database";
import * as argon2 from 'argon2';
import {DbUser} from "./db-user";
import {createSessionToken} from "./security.utils";



export function login(req: Request, res: Response) {

    const credentials = req.body;

    const user = db.findUserByEmail(credentials.email);

    if (!user) {
        res.sendStatus(403);
    }
    else {
        loginAndBuildResponse(credentials, user, res);
    }

}

async function loginAndBuildResponse(credentials:any, user:DbUser,  res: Response) {

    try {

        const sessionToken = await attemptLogin(credentials, user);

        console.log("Login successful");

        res.cookie("SESSIONID", sessionToken, {httpOnly:true, secure:true});

        res.status(200).json({id:user.id, email:user.email});

    }
    catch(err) {

        console.log("Login failed!");

        res.sendStatus(403);
    }
}


async function attemptLogin(credentials:any, user:DbUser) {

    const isPasswordValid = await argon2.verify(user.passwordDigest,
                                                credentials.password);

    if (!isPasswordValid) {
        throw new Error("Password Invalid");
    }

    return createSessionToken(user.id.toString());
}
















