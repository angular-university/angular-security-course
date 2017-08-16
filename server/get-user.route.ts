

import {Request, Response} from "express";
import {db} from "./database";



export function getUser(req:Request, res:Response) {

    const userId = req['userId'];

    const user = db.findUserById(userId);

    if (user) {
        res.status(200).json(user);
    }
    else {
        res.sendStatus(204);
    }

}
