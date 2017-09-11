
import * as _ from 'lodash';
import {LESSONS} from "./database-data";





class InMemoryDatabase {

    userCounter = 0;

    readAllLessons() {
        return _.values(LESSONS);
    }

}




export const db = new InMemoryDatabase();


