
import {User} from "../src/app/model/user";
import {sessionStore} from "./session-store";

import { Response} from "express";

const util = require('util');
const crypto = require('crypto');


export const randomBytes = util.promisify(crypto.randomBytes);


