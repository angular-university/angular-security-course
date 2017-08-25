
import {db} from "./database";


export function readAllLessons(req, res) {

    console.log("User is reading lessons data", req.user);

    res.status(200).json({lessons:db.readAllLessons()});

}