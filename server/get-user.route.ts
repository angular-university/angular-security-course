

import {Request, Response} from "express";
import {db} from "./database";



export function getUser(req:Request, res:Response) {

    const user = db.findUserById(req["userId"]);

    if (user) {
        res.status(200).json({email:user.email});
    }
    else {
        res.sendStatus(204);
    }
}
