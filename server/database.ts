
import * as _ from 'lodash';
import {LESSONS, SESSIONS, USERS} from "./database-data";
import {DbUser} from "./db-user";
import {User} from "../src/app/model/user";


class InMemoryDatabase {

    userCounter = 0;

    readAllLessons() {
        return _.values(LESSONS);
    }


    createUser(email:string,passwordDigest:string, sessionId:string) {

        const usersPerEmail = _.keyBy( _.values(USERS), "email" );

        if (usersPerEmail[email]) {
            const message = "An user already exists with email " + email;
            console.error(message);
            throw new Error(message);
        }

        this.userCounter++;

        const id = this.userCounter;

        const user: DbUser = {
            id,
            email,
            passwordDigest
        };

        USERS[id] = user;

        SESSIONS[sessionId] = id;

        return user;
    }


    findUserbySession(sessionId:string) : User {

        let user;

        const userId = SESSIONS[sessionId];

        if (userId) {
            user = {id: userId, email: USERS[userId].email};
        }

        return user;
    }

}

export const db = new InMemoryDatabase();