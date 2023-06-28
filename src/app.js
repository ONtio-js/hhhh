const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config');
const expressConfig = require('./frameworks/webserver/express');
const routes = require('./frameworks/webserver/routes');
const serverConfig = require('./frameworks/webserver/server');
const mongoDbConnection = require('./frameworks/database/mongoDB/connection/connection');

// middlewares
const authMiddleware = require('./frameworks/webserver/middlewares/authMiddleware');
const errorHandlerMiddleware = require('./frameworks/webserver/middlewares/errorHandlingMiddleware');


const app = express();
const server = require('http').createServer(app);

// express.js configuration and start 
expressConfig(app);

// server configuration and connection state
mongoDbConnection(mongoose,config).connectToMongo();
serverConfig(app,mongoose,server,config).startServer();

routes(app, express);

// error handling middleware
// app.use(errorHandlerMiddleware);
// auth middleware
app.use(authMiddleware);

module.exports = app;