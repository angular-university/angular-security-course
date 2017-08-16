import {Request, Response, NextFunction} from 'express';
import {isSessionTokenValid} from "./security.utils";



export function retrieveUserIdFromRequest(req: Request, res: Response, next: NextFunction) {

    const jwt = req.cookies['SESSIONID'];

    if (jwt) {
        handleSessionCookie(jwt, req, next);
    }
    else {
        next();
    }
}



async function handleSessionCookie(jwt, req: Request, next: NextFunction) {
    try {

        const token = await isSessionTokenValid(jwt);

        req['userId'] = token.sub;

    }
    catch (error) {
        console.error("Error: Could not extract user from request");
    }
    finally {
        next();
    }
}



export function checkIfAuthenticated(req: Request, res: Response, next: NextFunction) {
    if (req["userId"]) {
        next();
    }
    else {
        res.sendStatus(403);
    }
}