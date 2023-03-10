import {Request, Response} from 'express';
import {db} from './database';
import {User} from '../src/app/model/user';
import {USERS} from './database-data';

export function createUserRoute(req: Request, res: Response) {
  const credentials = req.body;
  const user = db.createUser(credentials.email, credentials.password);
  console.log(USERS);
  res.status(200).json({id: user.id, email: user.email});
}
