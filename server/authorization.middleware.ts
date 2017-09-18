
import {Request, Response, NextFunction} from 'express';
import * as _ from 'lodash';



export function checkIfAuthorized(allowedRoles: string[], req: Request, res: Response, next: NextFunction) {

    const userInfo = req['user'];

    console.log("Checking authorization for user", userInfo);
    console.log("Checking if user has the following roles", allowedRoles);

    const roles = _.intersection(userInfo.roles, allowedRoles);

    console.log("Common roles", roles);

    if (userInfo && roles.length > 0) {
        next();
    }
    else {
        console.log("Unauthorized, only the following roles are allowed: ", allowedRoles);
        res.sendStatus(403);
    }
}


