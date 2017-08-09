
import {Request, Response} from "express";
import {sessionStore} from "./session-storage";



export function getUser(req:Request, res:Response) {

    const sessionId = req.cookies['SESSIONID'];

    const user = sessionStore.findUserbySession(sessionId);

    if (user) {
        res.status(200).send(user);
    }
    else {
        res.sendStatus(204);
    }





}