

import * as express from 'express';
import {Application} from "express";
import * as fs from 'fs';
import * as https from 'https';

const app: Application = express();


const server = https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}, app);


app.get('/', function (req, res) {
    res.header('Content-type', 'text/html');
    return res.end('<h1>Hello, Secure World!</h1>');
});


server.listen(55555, () => console.log("Server running at https://localhost:" + server.address().port));





