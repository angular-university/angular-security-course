

import * as express from 'express';
import {Application} from "express";


const app: Application = express();



const server = app.listen(9000, () => {
    console.log("Server running at https://localhost:" + server.address().port);
});


