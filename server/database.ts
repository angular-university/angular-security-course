import * as _ from 'lodash';
import {LESSONS, USERS} from './database-data';
import {DbUser} from './db-user';


class InMemoryDatabase {

  userCount = 0;

  readAllLessons() {
    return _.values(LESSONS);
  }

  createUser(email: string, password: string) {
    const id = ++this.userCount;

    const user: DbUser = {
      id,
      email,
      password
    };

    USERS[id] = user;
    return user;
  }


}

export const db = new InMemoryDatabase();
