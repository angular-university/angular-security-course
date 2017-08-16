

import {Request, Response} from "express";



export function getUser(req:Request, res:Response) {

    //TODO retrieve the actual user based on JWT content
    const user = {
        email:'test@gmail.com'
    };

    if (user) {
        res.status(200).json(user);
    }
    else {
        res.sendStatus(204);
    }
}
