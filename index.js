/* 
 * Project Title: Uptime monitoring api
 * Author: Sharfuzzaman
 * Inspired By: Sumit Saha
 * Date: 29-Nov-2020

 */
// Dependencies
const http = require('http');
const {handleReqRes} = require('./helpers/handleReqRes');

// app object - module scaffolding
const app = {};

// configuration 
app.config = {
    prot: 3000
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.prot, () => {
        console.log(`listening to port ${app.config.prot}`);
    });
};

// handle Request Response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();