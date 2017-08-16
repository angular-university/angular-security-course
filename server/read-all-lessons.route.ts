
import {db} from "./database";


export function readAllLessons(req, res) {

    const sessionId = req.cookies["SESSIONID"];

    //TODO
    const isSessionValid = true;

    if (!isSessionValid) {
        res.sendStatus(403);
    }
    else {
        res.status(200).json({lessons:db.readAllLessons()});
    }

}