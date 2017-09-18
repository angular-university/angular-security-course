
import {db} from "./database";


export function readAllLessons(req, res) {

    const user = req["user"];

    if (user.isStudent) {
        res.status(200).json({lessons:db.readAllLessons()});
    }
    else {
        res.sendStatus(403);
    }
}