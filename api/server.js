const express = require('express');
const helmet = require('helmet');

const carsRouter = require('../routers/carsRouter.js');
const salesRouter = require('../routers/salesRouter.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/cars', carsRouter);
server.use('/api/sales', salesRouter);

module.exports = server;