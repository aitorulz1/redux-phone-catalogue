const createError = require('http-errors');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('./config/db');
require('dotenv/config');


// Express

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



//CORS on ExpressJS | cross origin problems
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});



// Routes

const router = require('./routes/phones');
app.use('/', router);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});



// error handler
app.use(function (error, req, res, next) {
    console.error(error);

    res.status(error.status || 500);

    const data = {}

    if (error instanceof mongoose.Error.ValidationError) {
        res.status(400);
        for (field of Object.keys(error.errors)) {
            error.errors[field] = error.errors[field].message
        }
        data.errors = error.errors
    } else if (error instanceof mongoose.Error.CastError) {
        error = createError(404, 'Resource not found')
    }

    data.message = error.message;
    res.json(data);
});



// Listening to Server

const port = normalizePort(process.env.PORT || '4000');
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});



// PORT

function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}