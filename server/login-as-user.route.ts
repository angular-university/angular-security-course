


import {db} from "./database";
import {createSessionToken} from "./security.utils";


export function loginAsUser(req, res) {

    const adminUser = req["user"],
          roles = adminUser.userRoles,
          userEmail = req.body.email;

    if (roles && roles['ADMIN']) {

        const newUser = db.findUserByEmail(userEmail);

        createSessionToken(newUser)
            .then(sessionToken => {

                res.cookie("SESSIONID", sessionToken, {httpOnly:true, secure:true});

                res.status(200).json({ id: newUser.id, email: newUser.email });

            })
            .catch(err => {
                console.log("Error trying to login as user",err);
                res.sendStatus(500);
            });


    }
    else {
        res.SendStatus(403);
    }
}


