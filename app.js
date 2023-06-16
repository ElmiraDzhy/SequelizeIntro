const express = require('express');
const bodyParser = express.json();
const apiRouter = require('./routes/apiRouter');
const app = express();

app.use(bodyParser);
app.use('/api', apiRouter);

app.use(function (err, req, res, next) {
    const statusErr = err.status || 500;
    res.status(statusErr).send({errors: err.message || 'Server error'});
})
module.exports = app;