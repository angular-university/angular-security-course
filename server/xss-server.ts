



import * as express from 'express';
import {Application} from "express";
import * as fs from 'fs';



const app: Application = express();





// REST API
app.route('/img/xss')
    .get((req, res) => {



        console.log("XSS Server Received User Cookies: " + req.query.userCookies);

        var img = fs.readFileSync('./server/logo.png');
        res.writeHead(200, {'Content-Type': 'image/png' });
        res.end(img, 'binary');

    });





// launch an HTTP Server
const httpServer = app.listen(9090, () => {
    console.log("HTTP Server running at https://localhost:" + httpServer.address().port);
});

