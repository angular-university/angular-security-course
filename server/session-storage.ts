


import {User} from "../src/app/model/user";
import * as moment from "moment";
import {Moment} from "moment";


class Session {

    static readonly VALIDITY_MINUTES = 60;

    constructor(
        public  sessionId:string,
        public user:User,
        public validUntil: Moment) {

    }

    isValid() {
        return moment().diff(this.validUntil, 'minutes') < Session.VALIDITY_MINUTES;
    }

}


class SessionStore {

    private sessions: {[key:string]: Session} = {};

    createSession(sessionId:string, user: User) {
        this.sessions[sessionId] = new Session(
            sessionId,
            user,
            moment().add(1, 'hours')
        );
    }

    destroySession(sessionId:string) {
        delete this.sessions[sessionId];
    }


    findUserbySession(sessionId:string) : User {

        const session = this.sessions[sessionId];

        const isSessionValid = session && session.isValid();

        return isSessionValid ? session.user : undefined;
    }

}




export const sessionStore = new SessionStore();


