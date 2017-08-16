

import {Request, Response} from 'express';



export function logout(req: Request, res: Response) {

    const sessionId = req.cookies['SESSIONID'];

    res.clearCookie("SESSIONID");
    res.clearCookie("CSRF-TOKEN");

    res.sendStatus(200);
}
