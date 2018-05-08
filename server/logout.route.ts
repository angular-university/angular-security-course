

import {Request, Response} from 'express';



export function logout(req: Request, res: Response) {

    res.clearCookie("SESSIONID");

    res.clearCookie("XSRF-TOKEN");

    res.status(200).json({message: 'Logout Successful'});
}
