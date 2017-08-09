

import {db} from "./database";
import {sessionStore} from "./session-storage";



export function readAllLessons(req, res) {

    const sessionId = req.cookies['SESSIONID'];

    const isSessionValid = sessionStore.isSessionValid(sessionId);

    if (!isSessionValid) {
        res.sendStatus(403);
    }
    else {
        res.status(200).json(db.readAllLessons());
    }

}