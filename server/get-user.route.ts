
import {Request, Response} from "express";
import {db} from "./database";



export function getUser(req:Request, res:Response) {

    const sessionId = req.cookies['SESSIONID'];

    const user = db.findUserbySession(sessionId);

    if (user) {
        res.status(200).send(user);
    }
    else {
        res.sendStatus(204);
    }





}