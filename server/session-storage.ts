


import {User} from "../src/app/model/user";
import * as moment from "moment";
import {Moment} from "moment";


class Session {

    static readonly VALIDITY_MINUTES = 2;

    private validUntil: Moment;

    constructor(
        public  sessionId:string,
        public user:User) {

        this.validUntil = moment().add(Session.VALIDITY_MINUTES, 'minutes');

    }

    isValid() {

        console.log("diff", moment().diff(this.validUntil, 'minutes') );

        return moment().diff(this.validUntil, 'minutes') <= 0;
    }

}


class SessionStore {

    private sessions: {[key:string]: Session} = {};

    createSession(sessionId:string, user: User) {
        this.sessions[sessionId] = new Session(
            sessionId,
            user
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


