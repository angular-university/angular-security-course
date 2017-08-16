

import {Request, Response} from "express";



export function getUser(req:Request, res:Response) {

    const sessionId = req.cookies['SESSIONID'];

    //TODO
    const user = {};


    if (user) {
        res.status(200).json(user);
    }
    else {
        res.sendStatus(204);
    }

}
