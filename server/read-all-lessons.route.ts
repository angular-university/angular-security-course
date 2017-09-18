
import {db} from "./database";


export function readAllLessons(req, res) {

    const userRoles = req["user"].roles;

    if (userRoles && userRoles['READ:LESSONS']) {
        res.status(200).json({lessons:db.readAllLessons()});
    }
    else {
        res.SendStatus(403);
    }
}