


import {Request, Response, NextFunction} from 'express';



export function checkCsrfToken(req: Request, res: Response, next: NextFunction) {

    const csrfCookie = req.cookies["CSRF-TOKEN"];

    const csrfHeader = req.headers["x-csrf-token"];

    if (csrfCookie && csrfHeader && csrfCookie === csrfHeader) {
        next();
    }
    else {
        console.log("Failed CSRF check ...");
        res.sendStatus(403);
    }

}

