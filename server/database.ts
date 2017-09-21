
import * as _ from 'lodash';
import {LESSONS} from "./database-data";
import {SAFE_LESSONS} from "./safe-database-data";





class InMemoryDatabase {

    userCounter = 0;

    readAllLessons() {
        return _.values(SAFE_LESSONS);
    }

}




export const db = new InMemoryDatabase();


