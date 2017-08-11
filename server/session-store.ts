

import {Session} from "./session";
import {User} from "../src/app/model/user";

class SessionStore {

    private sessions: {[key:string]: Session} ={};

    createSession(sessionId:string, user: User) {
        this.sessions[sessionId] = new Session(sessionId, user);
    }

    findUserBySessionId(sessionId:string): User | undefined {

        const session = this.sessions[sessionId];

        return this.isSessionValid(sessionId) ? session.user : undefined;
    }

    isSessionValid(sessionId: string): boolean {

        const session = this.sessions[sessionId];

        return session && session.isValid();
    }

    destroySession(sessionId: string) {
        delete this.sessions[sessionId];
    }
}


export const sessionStore = new SessionStore();