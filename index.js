'use strict';

const jsonServer = require('json-server');
const { home, reset } = require('./src/controllers');
const { isResourceReachedLimit } = require('./src/middlewares');
const { PORT, mockData } = require('./config.js');

const index = jsonServer.create();
const router = jsonServer.router(mockData);
const middlewares = jsonServer.defaults();
const port = parseInt(process.env.PORT) || PORT;

index.get('/', home)
index.get('/reset', reset)

index.use(middlewares);
index.use(isResourceReachedLimit)
index.use(router);

index.listen(port, () => {
  console.log(`JSON Server is listening on http://localhost:${port}`)
});

module.exports = index;