

import {Request, Response} from 'express';



export function logout(req: Request, res: Response) {

    const sessionId = req.cookies['SESSIONID'];

    res.clearCookie("SESSIONID");

    res.sendStatus(200);
}
