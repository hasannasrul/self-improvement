const express = require('express');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});  
const morgan = require('morgan');
const appRouter = require('./routes/approutes');

//initiating express
const app = express();

//Middlewares

//To parse req.body
app.use(express.json())
//To log request in console
app.use(morgan('combined'))
// Enable Routing
app.use('/api/v1',appRouter)


module.exports = app