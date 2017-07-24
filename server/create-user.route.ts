



import {Request, Response} from "express";
import {db} from "./database";
import {USERS} from "./database-data";
import * as argon2 from 'argon2';

const PasswordPolicy = require('password-sheriff').PasswordPolicy;
var charsets = require('password-sheriff').charsets;

const policy = new PasswordPolicy({
    length: {
        minLength: 10
    },
    contains: {
        expressions: [charsets.upperCase, charsets.numbers]
    }
});


export function createUser(req: Request, res:Response) {

    const credentials = req.body;

    if (!policy.check(credentials.password)) {
        res.status(500).send();
    }
    else {
        argon2.hash(credentials.password)
            .then(passwordDigest => {

                const user = db.createUser(credentials.email, passwordDigest);

                console.log(USERS);

                res.status(200).json({id:user.id, email:user.email});

            });

    }


}
