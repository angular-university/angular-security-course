
import * as _ from 'lodash';
import {LESSONS, USERS} from "./database-data";
import {DbUser} from "./db-user";


class InMemoryDatabase {

    userCounter = 0;

    readAllLessons() {
        return _.values(LESSONS);
    }

    createUser(email:string,passwordDigest:string) {

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
            passwordDigest,
            roles: ["READ:LESSONS"]
        };

        USERS[id] = user;

        console.log(USERS);

        return user;
    }


    findUserByEmail(email:string) :DbUser {

        const users = _.values(USERS);

        return _.find(users, user => user.email === email);
    }

    findUserById(userId:string) :DbUser {

        let user = undefined;

        if (userId) {

            console.log("looking for userId ", userId);

            const users = _.values(USERS);

            user = _.find(users, user => user.id.toString() === userId);

            console.log("user data found:", user);
        }

        return user;

    }

}




export const db = new InMemoryDatabase();


