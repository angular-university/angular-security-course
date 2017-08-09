


import {User} from "../src/app/model/user";
import {USERS} from "./database-data";




class SessionStore {

    private sessions: {[key:number]: number} = {};

    createSession(sessionId:string, userId:number) {
        this.sessions[sessionId] = userId;
    }

    destroySession(sessionId:string) {
        delete this.sessions[sessionId];
    }

    findUserbySession(sessionId:string) : User {

        let user;

        const userId = this.sessions[sessionId];

        if (userId) {
            user = {id: userId, email: USERS[userId].email};
        }

        return user;
    }

}




export const sessionStore = new SessionStore();


