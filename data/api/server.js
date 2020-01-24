const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const projectsRouter = require('../routes/projects-router');
const resourcesRouter = require('../routes/resources-routers');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourcesRouter);

module.exports = server;