'use strict';

const express = require('express');
const app = express();

const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const loggerMeddleware = require('./middleware/logger');

const peopleRoutes = require('./routes/people');

app.use(express.json());
app.use(loggerMeddleware);
app.use(peopleRoutes);

app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
    server: app,
    start: port => {
        app.listen(port, () => console.log(`Server is up on port ${port}`));
    }
}